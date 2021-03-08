import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-veille',
  templateUrl: './layout-veille.component.html',
  styleUrls: ['./layout-veille.component.scss']
})
export class LayoutVeilleComponent implements OnInit {

  pageAfficher: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {

    }

  
  


  changePage(){
    if(this.router.url.endsWith("/Juridique")){
      this.pageAfficher = true
    }
    if(this.router.url.endsWith("/Technologique")){
      this.pageAfficher = true
    }
  }

}
