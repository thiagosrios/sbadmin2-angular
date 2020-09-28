import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
@HostListener('window:resize', ['$event'])
export class AppComponent {

  // title = 'admin';

  // onResize(event: any) {
  //   const width = event.target.innerWidth;
  //   console.log(width);
  //   if(width < 768) {
  //     const sidebar = document.querySelector(".sidebar");
  //     sidebar.setAttribute('display', 'none');
  //   }
  // }

  // toogleSidebar() {
  //   const body = document.body.classList.toggle('sidebar-toggled');
  //   const sidebar = document.querySelector(".sidebar");
  //   sidebar.classList.toggle('toggled');

  //   if (sidebar.classList.contains('toggled')) {
  //     const sidebar2 = document.querySelector(".sidebar .collapse");    
  //     sidebar2.classList.add('hide');
  //   };
  // }
}
