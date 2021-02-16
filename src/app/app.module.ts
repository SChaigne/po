import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PPEComponent } from './ppe/ppe.component';
import { LayoutComponent } from './layout/layout.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { LayoutCompetencesComponent } from './skill/layout-competences/layout-competences.component';
import { LayoutCertificationsComponent } from './certification/layout-certifications/layout-certifications.component';
import { LayoutCompanyComponent } from './company/layout-company/layout-company.component';
import { LayoutContactComponent } from './contact/layout-contact/layout-contact.component';
import { LayoutVeilleComponent } from './veille/layout-veille/layout-veille.component';
import { LayoutBtssioComponent } from './btssio/layout-btssio/layout-btssio.component';
import {AccordionModule} from 'primeng/accordion';


const appRoutes: Routes = [
  {path : 'lesPPE', component: PPEComponent},
  {path : 'lesCompetences' , component: LayoutCompetencesComponent},
  {path : 'lesCertifications' , component: LayoutCertificationsComponent},
  {path : 'laVeille' , component: LayoutVeilleComponent},
  {path : 'lEntreprise' , component: LayoutCompanyComponent},
  {path : 'leContact' , component: LayoutContactComponent},
  {path : 'leBTS' , component: LayoutBtssioComponent},
  {path : '' , component: LayoutComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    PPEComponent,
    LayoutComponent,
    LayoutCompetencesComponent,
    LayoutCertificationsComponent,
    LayoutCompanyComponent,
    LayoutContactComponent,
    LayoutVeilleComponent,
    LayoutBtssioComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

