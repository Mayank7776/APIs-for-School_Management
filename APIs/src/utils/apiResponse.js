const apiResponse = (res, statusCode, data, message) => {
    const success = statusCode < 400;
    return res.status(statusCode).json({ success, data, message });
};

export { apiResponse };
