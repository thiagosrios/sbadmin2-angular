import { TestBed, async } from '@angular/core/testing';
import { CardInfoComponent } from './card-info.component';

describe('CardInfoComponent', () => {
    let component: CardInfoComponent; 
    let element: HTMLElement;

    beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				CardInfoComponent
			],
		}).compileComponents();

		const fixture = TestBed.createComponent(CardInfoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
		element = fixture.nativeElement;
    }));

    it('Deve criar componente', () => {
      expect(component).toBeDefined();
	});

	it('Elemento deve ser renderizado', () => {
		expect(element).toBeDefined();			
	});
	
	it('Deve renderizar elemento principal do card', () => {
		const card = element.querySelector('.card.border-left-primary');
		expect(card).toBeDefined();
		expect(card.className).toEqual('card border-left-primary shadow py-2');
	});
	
	it('Deve renderizar corpo do card', () => {
		const card_body = element.querySelector('.card-body');
		const row = element.querySelector('.row no-gutters');
		expect(card_body).toBeDefined();
		expect(row).toBeDefined();
	});

	it('Deve exibir texto do header', () => {
		const headerText = element.querySelector('.text-uppercase');
		expect(headerText).toBeDefined();
		expect(headerText.textContent).toEqual('');
	});

	it('Deve exibir indicador do card', () => {
		const indicator = element.querySelector('.h5');
		expect(indicator).toBeDefined();
		expect(indicator.textContent).toEqual('0');
	});

	it('Deve exibir ícone do card', () => {
		const icon = element.querySelector('.fa-icon');
		expect(icon).toBeDefined();
		expect(icon.className).toBeDefined();
		expect(icon.className).toEqual('fa fa-icon fa-2x text-gray-300');
	});

});