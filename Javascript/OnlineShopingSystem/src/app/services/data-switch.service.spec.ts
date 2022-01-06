import { TestBed } from '@angular/core/testing';

import { DataSwitchService } from './data-switch.service';

describe('DataSwitchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataSwitchService = TestBed.get(DataSwitchService);
    expect(service).toBeTruthy();
  });
});
