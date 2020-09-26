import { Component, Input } from '@angular/core';

@Component({
	selector: 'card-info',
	templateUrl: './card-info.component.html',
	styleUrls: ['./card-info.component.scss']
})
export class CardInfoComponent {

	/**
	 * Inputs
	 */
	@Input() color: string;
	@Input() icon: string;
	@Input() headerText: string;
	@Input() indicator: string;

	/**
	 * Variáveis para estilo do componente
	 * 
	 * Novas variáveis podem ser adicionadas para flexibilizar 
	 * a costumização do componente
	 */
	public cardClass: string;
	public textClass: string;
	public iconClass: string;

	/**
	 * Declaração de variáveis do componente
	 */
	constructor() {
		this.cardClass = "card border-left-primary shadow py-2";
		this.textClass = "text-xs font-weight-bold text-primary text-uppercase mb-1";
		this.color = "primary";
		this.indicator = "0";
		this.headerText = "";
		this.icon = "fa-icon";
	}

	/**
	 * Inicialização de variáveis do componente
	 */
	ngOnInit() {
		this.cardClass = `card border-left-${this.color} shadow py-2`;
		this.textClass = `text-xs font-weight-bold text-${this.color} text-uppercase mb-1`;
		this.iconClass = `fa ${this.icon} fa-2x text-gray-300`
	}
}
