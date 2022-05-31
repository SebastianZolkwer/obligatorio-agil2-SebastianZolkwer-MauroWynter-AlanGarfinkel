/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { ReservationService } from './reservation.service';

describe('Service: Reservation', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReservationService]
    });
  });

  it('should ...', inject([ReservationService], (service: ReservationService) => {
    expect(service).toBeTruthy();
  }));
});
