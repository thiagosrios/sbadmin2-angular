import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
	selector: 'app-auth-layout',
	templateUrl: './auth-layout.component.html',
	styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent implements OnInit {

	/**
	 * Utiliza a interface renderer para adicionar a classe com background ao body
	 * 
	 * @param renderer 
	 */
	constructor(private renderer: Renderer2) {
		this.renderer.addClass(document.body, 'bg-gradient-primary');
	}

	ngOnInit(): void {}

	/**
	 * Remove estilo do body com classe de background
	 */
	ngOnDestroy(): void {
		this.renderer.removeClass(document.body, 'bg-gradient-primary');
	} 
}
