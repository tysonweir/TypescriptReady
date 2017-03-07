/*
	INJECT ANNOTATION (Parameter Decorator)
	Adds the parameter to the $inject array to preserve dependency injection references during minification.

	Example:
	constructor(
		@Inject('$window') $window,
		@Inject('$log') $log
	) { ... }

	Result:
	$inject = ['$window', '$log'];
*/

export function Inject(provider: string): ParameterDecorator {
	return (target: any): void => {
		//create $inject array if it doesn't exist
		target.$inject = target.$inject || [];

		//insert provider (params are read right-to-left, so we need to insert them at the front)
		target.$inject.unshift(provider);
	}
}
