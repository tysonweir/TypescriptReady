interface String {
	toCamelCase(): string;
	toTitleCase(): string;
}

String.prototype.toCamelCase =  function(): string {
	return this.replace(/-\w/g, match => match[1].toUpperCase());
};

String.prototype.toTitleCase =  function(): string {
	return this.replace(/\b[a-z]/g, match => match.toUpperCase());
};