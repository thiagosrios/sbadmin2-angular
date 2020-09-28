import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toogleSidebar() {
    const body = document.body.classList.toggle('sidebar-toggled');
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle('toggled');

    if (sidebar.classList.contains('toggled')) {
      const sidebar2 = document.querySelector(".sidebar .collapse");    
      sidebar2.classList.add('hide');
    };
  }

}
