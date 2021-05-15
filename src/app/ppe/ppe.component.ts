import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ppe',
  templateUrl: './ppe.component.html',
  styleUrls: ['./ppe.component.scss']
})
export class PPEComponent implements OnInit {

  cheminImage: any = 'img/vehiparc.png';
  vretour: string = "";

  constructor() { }

  ngOnInit(): void {
    
  }

  resetProjet(){
    this.vretour = "";
  }

  onItemClick(event: any, item: any) {
    this.vretour = item;
  }

}
