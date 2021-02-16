import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-btssio',
  templateUrl: './layout-btssio.component.html',
  styleUrls: ['./layout-btssio.component.scss']
})
export class LayoutBtssioComponent implements OnInit {
  activeState: boolean[] = [true, false, false];

  constructor() { }

  ngOnInit(): void {
  }

}
