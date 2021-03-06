import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from './auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ToasterService } from './toaster.service';
import { ToastrServiceStub } from '@tests/stubs';

describe(AuthService.name, () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        { provide: ToasterService, useValue: ToastrServiceStub },
        { provide: AngularFirestore, useValue: {} },
        { provide: AngularFireAuth, useValue: { authState: of() } },
      ],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
