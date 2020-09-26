import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardInfoComponent } from './card-info/card-info.component';
import { AreaChartComponent } from './area-chart/area-chart.component';
import { DonutChartComponent } from './donut-chart/donut-chart.component';
import { ProgressIndicatorComponent } from './progress-indicator/progress-indicator.component';
import { ContentBoxComponent } from './content-box/content-box.component';

@NgModule({
  declarations: [
    CardInfoComponent,
    AreaChartComponent,
    DonutChartComponent,
    ProgressIndicatorComponent,
    ContentBoxComponent
  ],
  imports: [CommonModule],
  exports: [
    CardInfoComponent,
    AreaChartComponent,
    DonutChartComponent,
    ProgressIndicatorComponent,
    ContentBoxComponent
  ]
})
export class ComponentsModule { }
