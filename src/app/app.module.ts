import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PPEComponent } from './ppe/ppe.component';
import { LayoutComponent } from './layout/layout.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { LayoutCompetencesComponent } from './skill/layout-competences/layout-competences.component';
import { LayoutContactComponent } from './contact/layout-contact/layout-contact.component';
import { LayoutVeilleComponent } from './veille/layout-veille/layout-veille.component';
import { LayoutBtssioComponent } from './btssio/layout-btssio/layout-btssio.component';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { FormsModule } from "@angular/forms";

const appRoutes: Routes = [
  { path: 'lesPPE', component: PPEComponent },
  { path: 'lesCompetences', component: LayoutCompetencesComponent },
  { path: 'laVeille', component: LayoutVeilleComponent },
  { path: 'leContact', component: LayoutContactComponent },
  { path: 'leBTS', component: LayoutBtssioComponent },
  { path: '', component: LayoutComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    PPEComponent,
    LayoutComponent,
    LayoutCompetencesComponent,
    LayoutContactComponent,
    LayoutVeilleComponent,
    LayoutBtssioComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    TimelineModule,
    CardModule,
    FormsModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
