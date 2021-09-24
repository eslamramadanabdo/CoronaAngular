import { EslamComponent } from './eslam/eslam.component';
import { TreatmentComponent } from './treatment/treatment.component';
import { HomeComponent } from './home/home.component';
import { TransmissionComponent } from './transmission/transmission.component';
import { SymptomsComponent } from './symptoms/symptoms.component';
import { PreventionComponent } from './prevention/prevention.component';
import { AboutComponent } from './about/about.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path : "home" , component: HomeComponent },
  { path : "about" , component: AboutComponent },
  { path : "prevention" , component: PreventionComponent },
  { path : "treatment" , component: TreatmentComponent },
  { path : "symptoms" , component: SymptomsComponent },
  { path : "transmission" , component: TransmissionComponent },
  { path : "" , component: HomeComponent },
  {path: "**"  , component: EslamComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
