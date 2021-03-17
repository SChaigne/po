import { Component, OnInit } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  eventCours: any[] = [];
  eventPro: any[] = [];

  constructor() { }

  ngOnInit(): void {

    this.eventCours = [
      {
        status: 'BTS SIO',
        date: '2019 - 2021',
        icon: PrimeIcons.CALENDAR,
        color: '#212529',
        messages: ["BTS Service Informatiques aux Organisation - Lycée Carcouet / Nantes",
        ]
      },
      {
        status: 'BTS Electrotechnique',
        date: '2017 - 2019',
        icon: PrimeIcons.CALENDAR,
        color: '#212529',
        messages: ["BTS Electrotechnique en apprentissage – CFA Martello / Nantes",
        ]
      },
      {
        status: 'BAC PRO ELEEC',
        date: '2014 - 2017',
        icon: PrimeIcons.CALENDAR,
        color: '#212529',
        messages: ["BAC PRO Electrotechnique, énergie, équipements communicants en apprentissage (Mention Bien) – CFA Martello/ Nantes",
        ]
      },
      {
        status: 'BEP ELEEC',
        date: '2014 - 2016',
        icon: PrimeIcons.CALENDAR,
        color: '#212529',
        messages: ["BEP Electrotechnique, énergie, équipements communicants en apprentissage – CFA Martello/ Nantes",
        ]
      },
      {
        status: 'PSC1',
        date: '2014',
        icon: PrimeIcons.CALENDAR,
        color: '#212529',
        messages: ["Prévention Secours Civique niveau 1 - Lycée Aristide Briand / Saint Nazaire",
        ]
      },
      {
        status: 'Brevet',
        date: '2010 - 2013',
        icon: PrimeIcons.CALENDAR,
        color: '#212529',
        messages: ["Diplôme national du brevet (Mention assez bien) – Collège Jean Moulin / Saint-Nazaire",
        ]
      },
    ]
    this.eventPro = [
      {
        status: 'CSMSI - La Poste',
        date: '2020 - 20**',
        icon: PrimeIcons.CALENDAR,
        color: '#212529',
        messages: ["Developpement Angular",
          "UI du site Vehiparc en suivant une maquette",
          "UI/UX de l'aide de Vehiparc",
          "Méthode Agile - SCRUM",
        ]
      },
      {
        status: 'Apprenti BTS Electricien / EES - Clemessy',
        date: '2017-2019',
        icon: PrimeIcons.CALENDAR,
        color: '#212529',
        messages: ["Raccordements de câbles pour l’automatisation de procédé",
        "Paramétrage d’équipements électriques",
        "Tirage de câbles",
        "Organisation de chantiers (Matériels à prévoir, gestion de personnelet du chantier en général)",
        "Créationde programmes automates sous UnityPro XL (au CFA)",
        "Travaux dans des zones agro-alimentaires (ALVA, Maitre-Coq)",
        "Gestion de personnel lors de salons, au parc expositions de la Beaujoire à Nantes",
        ]
      },
      {
        status: 'Apprenti Bac PROElectricien / STXFRANCE – Saint-Nazaire',
        date: '2014-2017',
        icon: PrimeIcons.CALENDAR,
        color: '#212529',
        messages: ["Raccordements de différents appareils etarmoires électriques",
        "Raccordements d’armoires électriques de commandes suivant les schémas fournispar le bureau d’études.",
        "Mise en place de chemins de câbles (Cablofil, Cornière, Télex)",
        "Soudure à l’arc",
        "Tirage de câbles sur navires militaires (Sébastopol, Vladivostok…) , navires de croisières."
        ]
      },
    ]
  }
}