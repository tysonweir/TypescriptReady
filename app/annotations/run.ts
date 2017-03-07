import { app } from '../app-module';

/*
	RUN ANNOTATION (Class Decorator)
	Module run.

	Example:
	@Run()
	export class MyRun { ... }

	Result:
	app.run(MyRun);
 */

export function Run(): ClassDecorator {
	return (target: any): void => {
		app.run(target);
	}
}