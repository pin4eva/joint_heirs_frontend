import { log } from "console";

export const formatError = (error: unknown) => {
	if (typeof error === 'object' && error !== null) {
		// Handle error objects with message property
		const err = error as { message?: string; errors?: Array<{ message: string }> };
		
		if (err.errors && Array.isArray(err.errors)) {
			// Handle API errors that have an errors array
			const messages = err.errors.map(e => e.message);
			log(messages);
			return messages;
		} else if (err.message) {
			// Handle standard error objects
			log(err.message);
			return [err.message];
		}
	}
	
	// Fallback for simple string errors or unknown formats
	const errorMessage = String(error);
	log(errorMessage);
	return [errorMessage];
};
