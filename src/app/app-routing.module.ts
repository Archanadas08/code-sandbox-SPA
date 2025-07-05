import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login/login.component';
import { PatientListComponent } from './patient-list/patient-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], children: [
    { path: '', redirectTo: 'patients', pathMatch: 'full' },
    { path: 'patients', component: PatientListComponent },
    { path: 'appointments', component: AppointmentsComponent }
  ]},
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}