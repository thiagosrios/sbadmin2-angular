import { Component, Input } from '@angular/core';
import { Chart, ChartTooltipOptions }  from 'chart.js';

@Component({
	selector: 'donut-chart',
	templateUrl: './donut-chart.component.html',
	styleUrls: ['donut-chart.component.scss']
})
export class DonutChartComponent {

  /**
   * Título exibido no topo do gráfico
   */
  @Input() title: string;

  /**
   * Array de strings com os labels exibidos no eixo X do gráfico
   */
  @Input() labels: Array<string>;

  /**
   * Conjunto de dados para contrução do gráfico
   * deve possuir a mesma dimensão do array de labels
   */
  @Input() data: Array<any>;

  /**
   * Informação do label de cada informação do dataset,
   * exibida ao apontar o mouse sobre cada um dos elementos
   * do gráfico
   */
  @Input() dataLabel: string;

  /**
   * Valor percentual do contorno do gráfico, espessura de linha exibida
   */
  @Input() cutoutPercentage: number;

  /**
   * Tipo de gráfico a ser renderizado
   */
  private readonly type = "doughnut";

  /**
   * Definição de variáveis
   */
	constructor() {
    this.title = "Chart";
    this.labels = ["Valor 1", "Valor 2", "Valor 3"];
    this.data = [55, 30, 15];
    this.cutoutPercentage = 60;
  }

  /**
   * Inicialização do gráfico
   */
	ngOnInit() {
    if(this.data.length === this.labels.length) {
      new Chart("pieChart", {
        type: this.type,
        data: {
          labels: this.labels,
          datasets: [this.getDataset()],
        },
        options: {
          maintainAspectRatio: false,
          tooltips: this.getTooltipsOptions(),
          legend: {
            display: false
          },
          cutoutPercentage: this.cutoutPercentage,
        },
      });
    }
  }

  /**
   * Retorna objeto contendo definições de estilo do gráfico
   */
  public getStyleOptions(){
    return {
      backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
      hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
      hoverBorderColor: "rgba(234, 236, 244, 1)"
    };
  }

  /**
   * Retorna objeto contendo as definições de estilo e dataset para o gráfico
   */
  public getDataset() {
    const dataset: any = {
      data: this.data,
      label: this.dataLabel
    };

    return { ...dataset, ... this.getStyleOptions() };
  }

  /**
   * Retorna objeto com definições de estilo do tooltip
   * exibido para cada elemento do gráfico
   */
  public getTooltipsOptions(): ChartTooltipOptions {
    return {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    };
  }
}
