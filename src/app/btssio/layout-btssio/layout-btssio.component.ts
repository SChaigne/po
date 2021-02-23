import { Component, OnInit } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-layout-btssio',
  templateUrl: './layout-btssio.component.html',
  styleUrls: ['./layout-btssio.component.scss'],
})
export class LayoutBtssioComponent implements OnInit {
  events1: any[] = [];

  events2: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.events1 = [
      {
        status: 'Première Année',
        date: 'De BTS SIO',
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

    this.events2 = ['2020', '2021', '2022', '2023'];
  }
}
