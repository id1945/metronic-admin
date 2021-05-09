import { TestBed } from '@angular/core/testing';

import { AuthHTTPService } from './auth-http.service';
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('AuthHTTPService', () => {
  let service: AuthHTTPService;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthHTTPService],
      imports: [HttpClientTestingModule],
    });
    // We inject our service (which imports the HttpClient) and the Test Controller
    httpTestingController = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
    service = TestBed.inject(AuthHTTPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
