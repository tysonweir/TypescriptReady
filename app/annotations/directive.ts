import { app } from '../app-module';

/*
	DIRECTIVE ANNOTATION (Class Decorator)
	Registers an angular attribute directive.

	Example:
	@Directive({selector: 'my-directive'})
	export class MyDirective { ... }

	Result:
	app.directive('myDirective', {
		restrict: 'A',
		controller: MyDirective ,
		bindToController: MyDirective.BINDINGS
	});
*/

export interface IDirectiveOptions {
	selector: string;
	style?: string;
	require?: string | string[] | { [controller: string]: string };
}

export function Directive(options: IDirectiveOptions): ClassDecorator {
	return (target: any): void => {
		//create directive definition
		let directive: ng.IDirective = {
			restrict: 'A',
			controller: target,
			controllerAs: '$dir', //note: bindToController only binds to named controllers
			bindToController: target.bindings,
			require: options.require
		};

		//register directive
		app.directive(options.selector.toCamelCase(), () => directive);
	}
}