const logger = require("../../config/winstonConfig");
const cryptoServices = require("../services/cryptoService");

module.exports = {
  getTopCryptoList: async (req, res) => {
    const {
      route: { path },
      body: { currencyType },
    } = req;
    try {
      logger.info("Came Inside fetch top 100 cryptocurrencies List");
      if (!currencyType) {
        return res
          .status(400)
          .send({ ok: false, message: "Please enter currencyType" });
      }
      const response = await cryptoServices.getTopCryptoList({
        currencyType,
      });
      if (response.ok) {
        return res.status(200).json({ ok: true, data: response.data });
      }
      return res.status(200).json({ ok: false, message: response.message });
    } catch (error) {
      logger.error("Error Occur in getTopCrytoList Controller", error);
      return res
        .status(400)
        .json({ ok: false, message: "Failed to fetch data" });
    }
  },

  currencyConvertor: async (req, res) => {
    const {
      route: { path },
      body: { sourceCrypto, amount, targetCurrency },
    } = req;
    try {
      logger.info("Came Inside currencyConvertor Controller");
      if (!sourceCrypto) {
        return res
          .status(400)
          .json({ ok: false, message: "Please enter sourceCrypto" });
      }
      if (!amount) {
        return res
          .status(400)
          .json({ ok: false, message: "Please enter amount" });
      }
      if (!targetCurrency) {
        return res
          .status(400)
          .json({ ok: false, message: "Please enter targetCurrency" });
      }
      const response = await cryptoServices.currencyConvertor({
        sourceCrypto,
        amount,
        targetCurrency,
      });
      if (response.ok) {
        return res.status(200).json({ ok: true, data: response.data });
      }
      return res.status(200).json({ ok: false, data: response.data });
    } catch (error) {
      logger.error("Error Occured in currencyConvertor Controller", error);
      return res
        .status(400)
        .json({ ok: false, message: "Failed to Convert Currency" });
    }
  },
};
