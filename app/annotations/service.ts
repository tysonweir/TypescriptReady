import { app } from '../app-module';

/*
	SERVICE ANNOTATION (Class Decorator)
	Registers an angular service.

	Example:
	@Service('someService')
	export class SomeService { ... }

	Result:
	app.service('someService', SomeService);
*/
export function Service(name: string): Function {
	return (target: any): void => {
		app.service(name, target);
	}
}