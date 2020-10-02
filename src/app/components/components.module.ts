import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardInfoComponent } from './card-info/card-info.component';
import { AreaChartComponent } from './area-chart/area-chart.component';
import { DonutChartComponent } from './donut-chart/donut-chart.component';
import { ProgressIndicatorComponent } from './progress-indicator/progress-indicator.component';
import { ContentBoxComponent } from './content-box/content-box.component';
import { ColorsComponent } from './colors/colors.component';
import { PageHeadingComponent } from './page-heading/page-heading.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    CardInfoComponent,
    AreaChartComponent,
    DonutChartComponent,
    ProgressIndicatorComponent,
    ContentBoxComponent,
    ColorsComponent,
    PageHeadingComponent
  ],
  exports: [
    CardInfoComponent,
    AreaChartComponent,
    DonutChartComponent,
    ProgressIndicatorComponent,
    ContentBoxComponent,
    ColorsComponent,
    PageHeadingComponent
  ]
})
export class ComponentsModule { }
