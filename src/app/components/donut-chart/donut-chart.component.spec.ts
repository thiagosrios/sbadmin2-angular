import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DonutChartComponent } from './donut-chart.component';
import { AppComponent } from '../../app.component';
import { AslibModule } from '@aslib/core';
import { AscasModule } from '@ascas/core';
import { AslibModuleConfig } from '../../aslib-module.config';

describe('DonutChartComponent', () => {
    let component: DonutChartComponent;
    let element: HTMLElement;

    beforeEach(async(() => {
			TestBed.configureTestingModule({
				imports: [
					RouterTestingModule,
					AslibModule.forRoot(AslibModuleConfig),
					AscasModule
				],
				declarations: [
					AppComponent,
					DonutChartComponent
				],
			}).compileComponents();

			const fixture = TestBed.createComponent(DonutChartComponent);
			component = fixture.debugElement.componentInstance;
			fixture.detectChanges();
			element = fixture.nativeElement;
    }));

    it('Deve criar componente', () => {
      expect(component).toBeDefined();
		});

		it('Elemento deve ser renderizado', () => {
      expect(element).toBeDefined();
    });

    it('Componente deve exibir elemento card', () => {
      const card = element.querySelector('.card.shadow.mb-4');
      const cardHeader = card.querySelector('.card-header');
      const cardTitle = cardHeader.querySelector('h6');
      expect(card).toBeDefined();
      expect(cardHeader).toBeDefined();
      expect(cardTitle).toBeDefined();
    });

    it('Componente deve renderizar gráfico', () => {
      const body = element.querySelector('.card-body');
      const chart = body.querySelector('.chart-pie');
      expect(body).toBeDefined();
      expect(chart).toBeDefined();
    });

    it('Deve retornar configuração de estilo', () => {
      expect(component.getStyleOptions()).toBeTruthy();
    });

    it('Deve retornar configuração de tooltips', () => {
      expect(component.getTooltipsOptions()).toBeTruthy();
    });

    it('Deve retornar configuração do dataset', () => {
      expect(component.getDataset()).toBeTruthy();
    });
});
