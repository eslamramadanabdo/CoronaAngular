import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { TransmissionComponent } from './transmission/transmission.component';
import { SymptomsComponent } from './symptoms/symptoms.component';
import { PreventionComponent } from './prevention/prevention.component';
import { TreatmentComponent } from './treatment/treatment.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbareComponent } from './shared/navbare/navbare.component';
import { HomeComponent } from './home/home.component';
import { EslamComponent } from './eslam/eslam.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    TransmissionComponent,
    SymptomsComponent,
    PreventionComponent,
    TreatmentComponent,
    FooterComponent,
    NavbareComponent,
    HomeComponent,
    EslamComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
