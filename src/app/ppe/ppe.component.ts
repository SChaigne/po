import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ppe',
  templateUrl: './ppe.component.html',
  styleUrls: ['./ppe.component.scss']
})
export class PPEComponent implements OnInit {

  projects: any[] = [];
  cheminImage: any = 'img/vehiparc.png';
  vretour: string = "";

  constructor() { }

  ngOnInit(): void {
    this.projects = [{
      picture: "assets/img/portfolio.png",
      title: "PortFolio",
      content: "Portfolio réalisé pour le diplôme du BTS SIO"
    }, {
      picture: "assets/img/vehiparc.png",
      title: "Véhiparc",
      content: "WebApp qui permet la gestion de flotte de véhicules d'entreprises"
    }, {
      picture: "https://mdbootstrap.com/img/new/standard/nature/111.jpg",
      title: "Application Mobile",
      content: "Application afin d'aider les infirmiers à gérer leurs rendez-vous"
    }
    ]
  }

  onItemClick(event: any, item: any) {
    this.vretour = item;
  }

}
