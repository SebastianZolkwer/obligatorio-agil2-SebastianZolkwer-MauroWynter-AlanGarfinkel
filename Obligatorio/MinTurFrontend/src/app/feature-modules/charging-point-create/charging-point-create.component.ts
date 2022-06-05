import { ChargingPointIntentModel } from 'src/app/shared/models/in/charging-point-intent-model';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChargingPointService } from 'src/app/core/http-services/chargingPoint/chargingPoint.service';
import { RegionService } from 'src/app/core/http-services/region/region.service';
import { RegionBasicInfoModel } from 'src/app/shared/models/out/region-basic-info-model';
import { Router } from '@angular/router';
import { ChargingPointRoutes, ResortRoutes } from 'src/app/core/routes';

@Component({
  selector: 'app-resort-create',
  templateUrl: './charging-point-create.component.html',
  styleUrls: []
})
export class ChargingPointCreateComponent implements OnInit {
  public explanationTitle: string;
  public explanationDescription: string;

  public name: string;
  public address: string;
  public description: string;
  public regionId: number;
  public identifier = 0;

  public regions: RegionBasicInfoModel[] = [];
  public displayError: boolean;
  public errorMessages: string[] = [];
  public justCreatedChargingPoint = false;
  public chargingPointIntentModel: ChargingPointIntentModel;

  constructor(private chargingPointService: ChargingPointService, private regionService: RegionService, private router: Router) { }

  ngOnInit(): void {
    this.getRegions();
    this.populateExplanationParams();
  }

  private getRegions(): void {
    this.regionService.allRegions().subscribe(regions => {
      this.loadRegions(regions);
    },
      error => this.showError(error)
    );
  }

  private loadRegions(regions: RegionBasicInfoModel[]): void {
    this.regions = regions;
  }

  public selectRegion(regionId: number): void {
    this.regionId = regionId;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public setAddress(address: string): void {
    this.address = address;
  }

  public setDescription(description: string): void {
    this.description = description;
  }

  public setIdentifier(identifier: number): void {
    this.identifier = identifier;
  }


  public createChargingPoint(): void {
    this.validateInputs();

    if (!this.displayError) {
      this.chargingPointIntentModel = {
        name: this.name,
        address: this.address,
        description: this.description,
        identifier: this.identifier.toString(),
        regionId: this.regionId,
      };
      this.chargingPointService.createOneChargingPoint(this.chargingPointIntentModel).subscribe(
        chargingPointBasicInfo => {
          this.justCreatedChargingPoint = true;
        },
        error => {
          this.showError(error)
        }
      );
    } else {
      this.justCreatedChargingPoint = false;
    }
  }

  private validateInputs(): void {
    this.displayError = false;
    this.errorMessages = [];
    this.validateName();
    this.validateDescription();
    this.validateAddress();
    this.validateIdentifier();
    this.validateRegion();
  }

  private validateName(): void {
    if (!this.name?.trim() || this.name.length > 20) {
      this.displayError = true;
      this.errorMessages.push('El nombre debe tener un máximo de 20 caracteres');
    }
  }

  private validateDescription(): void {

    if (!this.description?.trim() || this.description.length > 60) {
      this.displayError = true;
      this.errorMessages.push('La descripción debe tener un máximo de 60 caracteres');
    }
  }

  private validateIdentifier(): void {
    const identifierString = this.identifier.toString();
    if (!identifierString?.trim() || identifierString.length != 4) {
      this.displayError = true;
      this.errorMessages.push('El identificador debe ser un número de 4 digitos');
    }
  }

  private validateAddress(): void {
    if (!this.address?.trim() || this.address.length > 30) {
      this.displayError = true;
      this.errorMessages.push('La dirección debe tener un máximo de 30 caracteres');
    }
  }

  private validateRegion(): void {
    if (!this.regionId) {
      this.displayError = true;
      this.errorMessages.push('Debe seleccionar una región');
    }
  }

  private showError(error: HttpErrorResponse): void {
    console.log(error);
  }

  public closeError(): void {
    this.displayError = false;
  }

  public navigateToListChargingPoints(): void {
    this.router.navigate([ChargingPointRoutes.CHARGING_POINT_LIST], { replaceUrl: true });
  }

  private populateExplanationParams(): void {
    this.explanationTitle = 'Crear un punto de carga';
    this.explanationDescription = 'Aquí puedes crear un punto de carga!';
  }
}
