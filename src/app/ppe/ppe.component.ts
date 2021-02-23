import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ppe',
  templateUrl: './ppe.component.html',
  styleUrls: ['./ppe.component.scss']
})
export class PPEComponent implements OnInit {

  cheminImage:any = 'img/vehiparc.png';

  constructor() { }

  ngOnInit(): void {
  }

}
