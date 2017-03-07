import { app } from '../app-module';

/*
	COMPONENT ANNOTATION (Class Decorator)
	Registers an angular component.

	Example:
	@Component({selector: 'my-component', template: 'template'})
	export class MyComponent { ... }

	Result:
	app.component('myComponent', {
		controller: MyComponent ,
		bindings: MyComponent.bindings ,
		template: 'template'
	});
*/

export interface IComponentOptions {
	selector: string;
	template: string;
	style?: string; //doesn't actually do anything, use it with a webpack require for grouping purposes
	require?: { [controller: string]: string };
	transclude?: boolean | { [slot: string]: string };
}

export function Component(options: IComponentOptions): ClassDecorator {
	return (target: any): void => {
		//create component definition
		let component: ng.IComponentOptions = {
			controller: target,
			bindings: target.bindings,
			template: options.template,
			require: options.require,
			transclude: options.transclude || true
		};

		//register component
		app.component(options.selector.toCamelCase(), component);
	}
}
