const router = require("express").Router();

const carsControllers = require("../controllers/carsControllers");

router.get("/", carsControllers.allProducts);
router.get("/:id", carsControllers.getProduct);
router.post("/", carsControllers.createProduct);
router.patch("/:id", carsControllers.updateProduct);
router.delete("/:id", carsControllers.deleteProduct);

module.exports = router;
