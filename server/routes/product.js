const express = require("express");
const router = express.Router();

const {
  getProductById,
  createProduct,
  getProduct,
} = require("../controller/product");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controller/auth");
const { getUserById } = require("../controller/user");

/*
-PARAM
-Grabbed something from parameter */
router.param("userId", getUserById);
router.param("productId", getProductById);

/*
-POST
-ADDING T-SHRT TO OUR BACKEND(PRODUCT (T-SHRT)-SECTION)*/
router.post(
  "/product/create/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  createProduct
);

/*
-when we createProduct,so productId automatically generated base on that
 */
router.get("/product/:productId", getProduct);

module.exports = router;
