import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'content-footer',
  templateUrl: './content-footer.component.html',
  styleUrls: ['./content-footer.component.scss']
})
export class ContentFooterComponent implements OnInit {

  public year: number;

  constructor() { 
    this.year = new Date().getFullYear();
  }

  ngOnInit(): void {}

}
