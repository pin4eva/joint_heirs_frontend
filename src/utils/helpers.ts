export const formatError = (error: unknown) => {
	const err = error as any;

	if (err && err?.errors) {
		const errors = err.errors?.map((e: any) => e.message);
		console.log(errors);
		return errors;
	}
};
