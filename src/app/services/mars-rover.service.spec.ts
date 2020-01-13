import { TestBed } from '@angular/core/testing';

import { MarsRoverService } from './mars-rover.service';

describe('MarsRoverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarsRoverService = TestBed.get(MarsRoverService);
    expect(service).toBeTruthy();
  });
});
