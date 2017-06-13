import {Component} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component ({

	selector: 'contact', 
	templateUrl: './contact.component.html'
	})

export class ContactComponent{
	public titulo = "Contact Page";


	constructor(
		private _route: ActivatedRoute,
		private _router: Router
		){}



	home(){
		this._router.navigate(['/home']);
	}
}