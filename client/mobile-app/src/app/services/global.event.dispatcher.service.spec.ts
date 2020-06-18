/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Global.event.dispatcherService } from './global.event.dispatcher.service';

describe('Service: Global.event.dispatcher', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Global.event.dispatcherService]
    });
  });

  it('should ...', inject([Global.event.dispatcherService], (service: Global.event.dispatcherService) => {
    expect(service).toBeTruthy();
  }));
});
