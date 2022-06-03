import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ChargingPointRoutes } from 'src/app/core/routes';
import { ChargingPointDetailsModel } from 'src/app/shared/models/out/chargingPoint-detail-model';
import { Subscription } from 'rxjs';
import { ChargingPointService } from 'src/app/core/http-services/chargingPoint/chargingPoint.service';

@Component({
  selector: 'app-chargingPoint-list',
  templateUrl: './chargingPoint-list.component.html',
  styleUrls: []
})
export class ChargingPointListComponent implements OnInit {
  public chargingPoints: ChargingPointDetailsModel[] = [];
  public displayError: boolean;
  subscription: Subscription;
  public justDeleted = false;

  constructor(private chargingPointService: ChargingPointService, private router: Router) { }

  ngOnInit(): void {
    this.retrieveComponentData();
  }


  private retrieveComponentData(): void {
    this.chargingPointService.getChargingPoints().subscribe((chargingPoints: ChargingPointDetailsModel[]) => {
      this.chargingPoints = chargingPoints
    })
    this.subscription = this.chargingPointService
      .chargingPointsChanged
      .subscribe(
        chargingPoints => {
          this.chargingPoints = chargingPoints;
        },
        error => {
          alert("Hubo un error")
        }
      );
  }



  public deleteChargingPoint(chargingPointId: number, index: number): void {
    this.chargingPointService.deleteChargingPoint(chargingPointId, index)
      .subscribe(() => {
        this.justDeleted = true;
        this.retrieveComponentData();
      },
        (errorMessage) => {
          alert(errorMessage);
        }
      );
  }

  public goToCreateChargingPoint(): void {
    this.router.navigate([ChargingPointRoutes.CHARGING_POINT_CREATE]);
  }


  public closeError(): void {
    this.displayError = false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
