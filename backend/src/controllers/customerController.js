const catchAsyncError = require("../middlewares/catchAsyncError");
const customerModel = require("../models/customerModel");
const ErrorHandler = require("../utils/errorHandler");
const ApiFeatures = require("../utils/apifeatures");

exports.createCustomer = catchAsyncError(async (req, res, next) => {
  const data = req.body;
  if (!data) {
    return next(new ErrorHandler("Please Provide a Data", 400));
  }
  const customer = await customerModel.create(data);
  res.status(201).json({
    success: true,
    data: customer,
  });
});

exports.allCustomer = catchAsyncError(async (req, res, next) => {
  const resultPerPage = 8;
  const customerCount = await customerModel.countDocuments();
  const apiFeatures = new ApiFeatures(
    customerModel.find(),
    req.query
  ).pagination(resultPerPage);
  const customers = await apiFeatures.query;
  res.status(200).json({
    success: true,
    data: customers,
    customerCount,
  });
});
exports.getSingleCustomer = catchAsyncError(async (req, res, next) => {
  const getSingleCustomer = await customerModel.findById(req.params.id);
  res.status(200).json({
    success: true,
    data: getSingleCustomer,
  });
});

exports.updateCustomer = catchAsyncError(async (req, res, next) => {
  const id = req.params.id;
  if (!id) {
    return next(new ErrorHandler("Please Provide a Id", 400));
  }
  const updateCustomer = await customerModel.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    success: true,
    data: updateCustomer,
  });
});

exports.deleteCustomer = catchAsyncError(async (req, res, next) => {
  const deleteCustomer = await customerModel.findByIdAndDelete(req.params.id);
  res.status(200).json({
    success: true,
    message: "User Deleted Successfully",
  });
});
