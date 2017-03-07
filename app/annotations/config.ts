import { app } from '../app-module';

/*
	CONFIG ANNOTATION (Class Decorator)
	Module configuration.

	Example:
	@Config()
	export class MyConfig { ... }

	Result:
	app.config(MyConfig);
 */

export function Config(): ClassDecorator {
	return (target: any): void => {
		app.config(target);
	}
}