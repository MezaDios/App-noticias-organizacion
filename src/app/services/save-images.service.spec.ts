import { TestBed } from '@angular/core/testing';

import { SaveImagesService } from './save-images.service';

describe('SaveImagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SaveImagesService = TestBed.get(SaveImagesService);
    expect(service).toBeTruthy();
  });
});
