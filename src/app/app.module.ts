import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CheckInComponent } from './check-in/check-in.component';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from './appointment/appointment.component';

const routes: Routes = [
  {
    path: '',
    component: CheckInComponent,
  },
  {
    path: 'appointment',
    component: AppointmentComponent,
  },
];
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    CheckInComponent,
    AppointmentComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
