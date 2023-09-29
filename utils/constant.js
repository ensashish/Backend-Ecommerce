const customResourceResponse = {};

customResourceResponse.success = { statusCode:200, message:"Request has been processed successfully."};
customResourceResponse.created = { statusCode:201, message:"Record has been created successfully."};
customResourceResponse.recordNotFound = { statusCode:404, message:"No record found."};
customResourceResponse.serverError = { statusCode:500, message:"Internal server error"};
customResourceResponse.validationError = { statusCode:422, message:"Data validation failed."};
customResourceResponse.alreadyExist = { statusCode:409, message:"Data already Exist."};

module.exports = customResourceResponse;
