/*
	BINDING ANNOTATION (Property Decorator)
	Adds the property to a bindings object which is used to bind html inputs to a controller.

	Example:
	@Binding('=') input;
	@Binding('@alias') text;

	Result:
	bindings: {
		input: '=',
		text: '@alias'
	}
*/

export function Binding(type: string): PropertyDecorator {
	return (target: any, propertyName: string): void => {
		//create bindings object if it doesn't exist
		target.constructor.bindings = target.constructor.bindings || {};

		//bind property
		target.constructor.bindings[propertyName] = type.toCamelCase();
	}
}
