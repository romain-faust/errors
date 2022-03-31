export class UnknownError extends Error {
	readonly originalError: Error

	constructor(originalError: Error, message?: string) {
		super(message)
		Object.setPrototypeOf(this, new.target.prototype)

		this.name = 'UnknownError'
		this.originalError = originalError
	}
}
