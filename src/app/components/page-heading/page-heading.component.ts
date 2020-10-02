import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'page-heading',
  templateUrl: './page-heading.component.html',
  styleUrls: ['./page-heading.component.scss']
})
export class PageHeadingComponent implements OnInit {

  @Input() title: string;
  @Input() showButton: boolean; 
  
  constructor() {
    this.title = "";
  }

  ngOnInit(): void { }

}
