const { Router } = require("express")
const { createCtegory, fetchAllCategory, fetchOne, updateCategory, deleteCategory} = require("../controllers/categoryController")

const router = Router()

router.post("/add", createCtegory)
router.get("/all", fetchAllCategory)
router.get("/one/:id", fetchOne)
router.patch("/update/:id", updateCategory)
router.delete("/delete/:id", deleteCategory);


module.exports = router;