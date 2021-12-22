import { TestBed } from '@angular/core/testing';
import { ToastrServiceStub } from '@tests/stubs';
import { ToastrService } from 'ngx-toastr';

import { ToasterService } from './toaster.service';

describe('ToastrService', () => {
  let service: ToasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: ToastrService, useValue: ToastrServiceStub }],
    });
    service = TestBed.inject(ToasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
