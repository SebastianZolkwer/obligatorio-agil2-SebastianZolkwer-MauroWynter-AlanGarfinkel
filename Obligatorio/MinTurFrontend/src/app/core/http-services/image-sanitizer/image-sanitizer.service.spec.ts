/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { ImageSanitizerService } from './image-sanitizer.service';

describe('Service: ImageSanitizer', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageSanitizerService]
    });
  });

  it('should ...', inject([ImageSanitizerService], (service: ImageSanitizerService) => {
    expect(service).toBeTruthy();
  }));
});
