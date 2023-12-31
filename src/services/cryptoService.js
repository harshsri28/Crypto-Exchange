const logger = require("../../config/winstonConfig");
const axios = require("axios");
const { apiStatus, methods } = require("../utils/constants");
const {
  coingecko_api_url,
  currency_api_url,
} = require("../../config/development.json");

module.exports = {
  getTopCryptoList: async ({ currencyType }) => {
    try {
      logger.info("Came Inside fetch top 100 cryptocurrencies List Service");
      const option = {
        method: methods.GET,
        url: coingecko_api_url,
        params: {
          vs_currency: currencyType,
          per_page: 100,
          page: 1,
          sparkline: false,
        },
      };
      const top100ApiResponse = await axios(option);
      logger.info("Response from getTopCrytoList Api", top100ApiResponse);
      if (top100ApiResponse?.status == apiStatus.SUCCESS) {
        return { ok: true, data: top100ApiResponse.data };
      }
    } catch (error) {
      logger.error("Error Occur during getTopCrytoList Service", error);
      return { ok: false, message: "Failed to fetch top 100 cryptocurrencies" };
    }
  },

  currencyConvertor: async ({ sourceCrypto, amount, targetCurrency }) => {
    try {
      logger.info("Came Inside currencyConvertor Service");
      const option = {
        method: methods.GET,
        url: currency_api_url,
        params: {
          ids: sourceCrypto,
          vs_currencies: targetCurrency.toLowerCase(),
        },
      };
      const currencyConvertorResponse = await axios(option);
      logger.info(
        "Response from currencyConvertor Api",
        currencyConvertorResponse
      );

      if (currencyConvertorResponse?.status == apiStatus.SUCCESS) {
        if (
          Object.keys(currencyConvertorResponse?.data).length === 0 ||
          Object.keys(currencyConvertorResponse?.data[sourceCrypto]).length ===
            0
        ) {
          return {
            ok: false,
            data: "Please Enter Valid SourceCrypto and TargetCurrency",
          };
        }

        const exchangeRate = currencyConvertorResponse?.data;
        const totalExhangeRate =
          exchangeRate[sourceCrypto][targetCurrency.toLowerCase()] * amount;

        return {
          ok: true,
          data: totalExhangeRate,
        };
      }
      logger.info("Api Failed to convert Currency");
      return {
        ok: false,
        data: "Failed to Convert Currency",
      };
    } catch (error) {
      logger.error("Error Occur in currencyConvertor Service", error);
      return {
        ok: false,
        message: "Failed to Convert",
      };
    }
  },
};
