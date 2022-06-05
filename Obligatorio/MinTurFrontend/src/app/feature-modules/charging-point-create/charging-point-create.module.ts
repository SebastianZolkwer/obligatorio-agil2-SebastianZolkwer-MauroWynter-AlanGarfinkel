import { UtilitiesModule } from 'src/app/shared/utilities/utilities.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChargingPointCreateComponent } from './charging-point-create.component';

@NgModule({
  imports: [
    CommonModule,
    UtilitiesModule
  ],
  declarations: [ChargingPointCreateComponent]
})
export class ChargingPointCreateModule { }