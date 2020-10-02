import { Component, ViewChild } from '@angular/core';
declare var $: (arg0: any) => any; // jQuery

@Component({
  selector: 'app-tables',
  templateUrl: './tables.page.html',
  styleUrls: ['./tables.page.scss']
})
export class TablesPage {

  @ViewChild('dataTable') table: any;
  public dataTable: any;
  public $: any; 

  constructor() { }

  ngAfterViewInit(): void {
    console.log(this.table);
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable();
  }

}
