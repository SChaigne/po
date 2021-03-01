import { Component, OnInit } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  eventCours: any[] = []

  constructor() { }

  ngOnInit(): void {

    // $("#titre").hide(0);
    // $("#titre").show("fade",2500);

    this.eventCours = [
      {
        status: 'BTS SIO',
        date: 'D',
        icon: PrimeIcons.CALENDAR,
        color: '#212529',
        messages: ["Culture Générale & Expression",
          "Anglais",
          "Mathématiques",
          "Algorithmie",
          "Analyse économique, managériale et juridiques des services informatiques",
          "Enseignements Communs : 4 Modules au 1er semestre et 2 au second",
          "Enseignements de spécialité (SLAM ou SISR) : 2 modules uniquement au second semestre",
          "Projets Personnels Encadrés (PPE)",
        ]
      },
      {
        status: 'Deuxième Année',
        date: 'De BTS SIO',
        icon: PrimeIcons.CALENDAR,
        color: '#212529',
        messages: ["Culture Générale & Expression",
          "Anglais",
          "Mathématiques",
          "Algorithmie",
          "Analyse économique, managériale et juridiques des services informatiques",
          "Enseignements Communs : 1 Module de Gestion de Projet",
          "Enseignements de spécialité (SLAM ou SISR) : 3 Modules",
          "Projets Personnels Encadrés (PPE)",
        ]
      },
    ];

  }
}
