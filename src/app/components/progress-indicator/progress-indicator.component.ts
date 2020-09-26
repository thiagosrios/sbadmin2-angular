import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'progress-indicator',
  templateUrl: './progress-indicator.component.html',
  styleUrls: ['./progress-indicator.component.scss']
})
export class ProgressIndicatorComponent implements OnInit {

  @Input() title: string;
  @Input() color: string;
  @Input() value: number;

  public class: string;
  public styleWidth: string; 
  public textValue: string; 

  constructor() {
    this.title = 'Indicator';
    this.color = 'primary';
    this.value = 0;
    this.styleWidth = '';
    this.class = 'progress-bar bg-primary';
    this.textValue = '';
  }

  ngOnInit(): void {
    this.class = this.color ? `progress-bar bg-${this.color}` : this.class;
    this.styleWidth = `width: ${this.value}%`;
    this.textValue = this.value < 100 ? `${this.value}%` : 'Completed!';
  }

}
