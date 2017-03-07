declare let require: {
	(module: string): string;

	context(directory: string, useSubdirectories: boolean, pattern: RegExp): {
		(module: string): void;
		keys(): string[];
	};
};