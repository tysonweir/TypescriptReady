import { app } from '../app-module';

/*
	PIPE ANNOTATION (Class Decorator)
	Registers an angular filter.

	Example:
	@Pipe('myPipe')
	export class SomePipe { ... }

	Result:
	app.filter('somePipe', PipeFactory);
*/

export function Pipe(name: string): ClassDecorator {
	return (target: any): void => {
		//create factory
		let factory = (...dependencies): Function => {
			let pipe = new target(...dependencies);
			return (input, ...parameters) => pipe.transform(input, ...parameters);
		};
		factory.$inject = target.$inject;

		//register filter
		app.filter(name, factory);
	}
}