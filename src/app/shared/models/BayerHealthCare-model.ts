export interface Patient {
  id: number;
  pname: string;
  age: number;
  gender: string;
  apptDate: string;
  apptTime: string;
}

export interface Doctor {
  docid: string;
  name: string;
  patient: Patient[];
}

export interface Appointment {
  doctor: Doctor;
}

export interface BayerHealthCare {
  appointment: Appointment[];
}
