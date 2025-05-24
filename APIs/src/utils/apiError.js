class apiError extends Error {
    constructor(
        statusCode,
        message = "Something went Wrong",
        errors = [],
        stack = ""
    ) {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.data = null;
        this.error = errors;
        this.success = false;

        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.contructor);
        }
    }
}

export { apiError }