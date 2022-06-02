import { Injectable } from '@angular/core';
import { Subject, throwError, } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { format } from 'util';
import { ChargingPointEndpoints } from '../endpoints';
import { ChargingPointDetailsModel } from 'src/app/shared/models/out/chargingPoint-detail-model';

@Injectable({
  providedIn: 'root'
})
export class ChargingPointService {
  private chargingPoints: ChargingPointDetailsModel[] = [];
  chargingPointsChanged = new Subject<ChargingPointDetailsModel[]>();

  constructor(private http: HttpClient) { }

  setChargingPoints(projects: ChargingPointDetailsModel[]) {
    this.chargingPoints = projects;
    this.chargingPointsChanged.next(this.chargingPoints.slice());
  }


  getChargingPoints() {
    const response = this.http
      .get<ChargingPointDetailsModel[]>
      (format(ChargingPointEndpoints.GET_CHARGING_POINTS))
      .pipe(
        tap(chargingPoints => {
          this.setChargingPoints(chargingPoints);
        })
      );
    return response;
  }

  deleteChargingPoint(id: number, index: number) {
    return this.http
      .delete
      ('chargingPoints/' + id)
      .pipe(
        tap(projects => {
          this.chargingPoints.splice(index, 1);

          this.chargingPointsChanged.next(this.chargingPoints.slice());
        }),
        catchError(this.handleError))
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      return throwError({ mensaje: "Server is shut down" });
    } else {
      if (error.status == 400 || error.status == 401 || error.status == 404) {
        return throwError(error.error);
      } else {
        return throwError("Server with problems");
      }
    }
  }
}
