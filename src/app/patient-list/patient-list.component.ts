import { Component } from '@angular/core';
import { PatientService } from '../shared/patient.service';
import { BayerHealthCare } from '../shared/models/BayerHealthCare-model';

@Component({
  selector: 'app-patient-list',
  standalone: true,
  imports: [],
  templateUrl: './patient-list.component.html',
  styleUrl: './patient-list.component.css'
})
export class PatientListComponent {
 patients: any[] = [];
  data: any[] = []; // Assuming BayerHealthCare is an array of objects
  constructor(private patientService: PatientService) {}

  ngOnInit() {
    this.patientService.getPatients().subscribe(data => {
      this.data = data;    
    });
  }
}
