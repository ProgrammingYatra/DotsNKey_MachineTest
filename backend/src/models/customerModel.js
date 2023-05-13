const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Please Provide a fullName"],
      validate: {
        validator: function (name) {
          return /^[a-zA-Z\. ]*$/.test(name);
        },
        message: "Please Provide a Valid fullName",
      },
    },
    email: {
      type: String,
      required: [true, "Please Provide a Email"],
      unique:true,
      validate: {
        validator: function (email) {
          return /^([A-Za-z0-9._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6})+$/.test(
            email
          );
        },
        message: "Please Provide a Valid Email",
      },
    },
    password: {
      type: String,
      required: [true, "Please Provide a Password"],
      validate: {
        validator: function (pass) {
          return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{4,10}$/.test(
            pass
          );
        },
        message:
          "Password should contain 1 special Character and One Alphabets and One Number",
      },
    },
    city: {
      type: String,
      required: [true, "Please Provide a city"],
      validate: {
        validator: function (name) {
          return /^[a-zA-Z\. ]*$/.test(name);
        },
        message: "Please Provide a Valid city Name",
      },
    },
    state: {
      type: String,
      required: [true, "Please Provide a state"],
      validate: {
        validator: function (name) {
          return /^[a-zA-Z\. ]*$/.test(name);
        },
        message: "Please Provide a Valid state Name",
      },
    },
    country: {
      type: String,
      required: [true, "Please Provide a country"],
      validate: {
        validator: function (name) {
          return /^[a-zA-Z\. ]*$/.test(name);
        },
        message: "Please Provide a Valid country Name",
      },
    },
    language: {
      type: [String],
      required: [true, "Please Provide a language"],
      
    },
    isActive: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("CustomerTable", customerSchema);
