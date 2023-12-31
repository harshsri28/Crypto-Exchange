const router = require("express").Router();
const cryptoController = require("./controllers/cryptoController");

router.get("/getTop100", cryptoController.getTopCryptoList);
router.get("/currencyConvertor", cryptoController.currencyConvertor);

module.exports = router;
