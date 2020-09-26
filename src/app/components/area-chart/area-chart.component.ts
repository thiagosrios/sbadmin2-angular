import { Component, OnInit, Input } from '@angular/core';
import { Chart, ChartTooltipOptions, ChartDataSets }  from 'chart.js';

@Component({
  selector: 'area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.scss']
})
export class AreaChartComponent implements OnInit {

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
   * Tipo de gráfico a ser renderizado
   */
  private readonly type = "line";

  /**
   * Definição de variáveis
   */
  constructor() {
    this.title = "Area Chart";
    this.labels = [];
    this.data = [];
  }

  /**
   * Inicialização de variáveis e montagem do gráfico
   */
  ngOnInit(): void {
    this.labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    this.data = [0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000, 25000, 40000];
    this.dataLabel = "Valor";

    if(this.data.length === this.labels.length) {
      new Chart("areaChart", {
        type: this.type,
        data: {
          labels: this.labels,
          datasets: [this.getDataset()],
        },
        options: {
          maintainAspectRatio: false,
          layout: this.getLayoutOptions(),
          scales: this.getAxysDefinitions(),
          legend: {
            display: false
          },
          tooltips: this.getTooltipsStyleOptions()
        }
      });
    }
  }

  /**
   * Retorna objeto contendo as definições de estilo e dataset para o gráfico
   */
  public getDataset(): ChartDataSets {
    const dataset: any = {
      data: this.data,
      label: this.dataLabel
    };

    return { ...dataset, ... this.getStyleOptions() };
  }

  /**
   * Retorna objeto contendo definições de estilo do gráfico
   */
  public getStyleOptions() {
    const color = "rgba(78, 115, 223, 1)";
    return {
      lineTension: 0.3,
      backgroundColor: "rgba(78, 115, 223, 0.05)",
      borderColor: color,
      pointRadius: 3,
      pointBackgroundColor: color,
      pointBorderColor: color,
      pointHoverRadius: 3,
      pointHoverBackgroundColor: color,
      pointHoverBorderColor: color,
      pointHitRadius: 10,
      pointBorderWidth: 2
    }
  }

  /**
   * Retorna objeto com definições de estilo do tooltip
   * exibido para cada elemento do gráfico
   */
  public getTooltipsStyleOptions(): ChartTooltipOptions {
    return {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      intersect: false,
      mode: 'index',
      caretPadding: 10,
      callbacks: {
        label: (function(tooltipItem: any, chart: any) {
          const datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          const valueFromDolar = this.formatToDolar(tooltipItem.yLabel.toString());
          return `${datasetLabel}: ${valueFromDolar}`;
        }).bind(this)
      }
    };
  }

  /**
   * Retorna definições de layout do gráfico
   */
  public getLayoutOptions(){
    return {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    };
  }

  /**
   * Definições de exibição dos eixos do gráfico
   */
  public getAxysDefinitions() {
    return {
      xAxes: [{
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          maxTicksLimit: 5,
          padding: 10,
          callback: (function(value: string) {
            return this.formatToDolar(value);
          }).bind(this)
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }]
    };
  }

  /**
   * Retorna número formatado com casas decimais e separador de milhar
   * example: number_format(1234.56, 2, ',', ' ');
   * return: '1 234,56'
   *
   * @param number
   * @param decimals
   * @param decPoint
   * @param thousandsSep
   */
  public numberFormat(number: string, decimals?: number, decPoint?: number, thousandsSep?: string) {
    number = (number + '').replace(',', '').replace(' ', '');
    const n = !isFinite(+number) ? 0 : + number,
      prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
      sep = (typeof thousandsSep === 'undefined') ? ',' : thousandsSep,
      dec = (typeof decPoint === 'undefined') ? '.' : decPoint,
      toFixedFix = function(n: any, prec: any) {
        const k = Math.pow(10, prec);
        return '' + Math.round(n * k) / k;
      };

    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    const s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    if (s[0].length > 3) {
      s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }

    if ((s[1] || '').length < prec) {
      s[1] = s[1] || '';
      s[1] += new Array(prec - s[1].length + 1).join('0');
    }

    return s.join(dec.toString());
  }

  /**
   * Retorna valor formata para dólar
   *
   * @param value Valor a ser formatado
   */
  public formatToDolar(value: string) {
    return '$' + this.numberFormat(value);
  }
}
