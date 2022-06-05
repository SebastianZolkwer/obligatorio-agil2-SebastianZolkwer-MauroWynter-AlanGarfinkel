import { Injectable } from '@angular/core';
import { Observable, Subject, throwError, } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { format } from 'util';
import { ChargingPointEndpoints } from '../endpoints';
import { ChargingPointDetailsModel } from 'src/app/shared/models/out/chargingPoint-detail-model';
import { ChargingPointIntentModel } from 'src/app/shared/models/in/charging-point-intent-model';

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

  public createOneChargingPoint(chargingPointIntenModel: ChargingPointIntentModel): Observable<ChargingPointDetailsModel> {
    return this.http.post<ChargingPointDetailsModel>
      (ChargingPointEndpoints.CREATE_CHARGING_POINT, chargingPointIntenModel);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      const message = "Server is shut down";
      return throwError({ mensaje: message });
    } else {
      if (error.status == 400 || error.status == 401 || error.status == 404) {
        return throwError(error.error);
      } else {
        const message = "Server with problems";
        return throwError(message);
      }
    }
  }
}
