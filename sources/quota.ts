export class QuotaError extends Error {
	constructor(message?: string) {
		super(message)

		this.name = 'QuotaError'
	}
}
