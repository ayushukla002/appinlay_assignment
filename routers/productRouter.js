const { Router } = require("express")
const { createProduct, fetchAllProducts, fetchOne, updateProduct, deleteProduct } = require("../controllers/productController")

const router = Router()

router.post("/add", createProduct)
router.get("/all", fetchAllProducts)
router.get("/one/:id", fetchOne)
router.patch("/update/:id", updateProduct)
router.delete("/delete/:id", deleteProduct);

module.exports = router;