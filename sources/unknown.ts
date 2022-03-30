export class UnknownError extends Error {
	readonly originalError: Error

	constructor(originalError: Error, message?: string) {
		super(message)

		this.originalError = originalError
	}
}
