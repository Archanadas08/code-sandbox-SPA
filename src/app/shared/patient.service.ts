import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BayerHealthCare } from './models/BayerHealthCare-model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  

 private apiUrl = 'http://localhost:5098/appointment';

  constructor(private http: HttpClient) {}

  getPatients(): Observable<BayerHealthCare[]> {
    return this.http.get<BayerHealthCare[]>(this.apiUrl);
  }
}
