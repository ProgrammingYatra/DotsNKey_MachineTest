const express = require("express");
const {
  createCustomer,
  allCustomer,
  deleteCustomer,
  updateCustomer,
  getSingleCustomer,
} = require("../controllers/customerController");
const router = express.Router();

router.route("/create").post(createCustomer);

router.route("/customers").get(allCustomer);

router
  .route("/customers/:id")
  .get(getSingleCustomer)
  .put(updateCustomer)
  .delete(deleteCustomer);

module.exports = router;
