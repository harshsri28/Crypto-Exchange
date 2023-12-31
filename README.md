# Crypto API

This API service provides functionalities for retrieving information about cryptocurrencies and performing currency conversion.

## Overview

The API offers two main endpoints:

### 1. Get Top 100 Cryptocurrencies

- **Endpoint**: `/getTop100`
- **Method**: `GET`
- **Request Body**:
  ```json
  {
    "currencyType": "inr"
  }
  ```
- **Response**:
  ```json
  {
    "ok": true,
    "data": [
      {
        "id": "bitcoin",
        "symbol": "btc",
        "name": "Bitcoin",
        "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
        "current_price": 3546882,
        "market_cap": 69469423672081,
        "market_cap_rank": 1,
        "fully_diluted_valuation": 74484515775596,
        "total_volume": 1193746955315,
        "high_24h": 3564957,
        "low_24h": 3495824,
        "price_change_24h": 20914,
        "price_change_percentage_24h": 0.59313,
        "market_cap_change_24h": 420938462793,
        "market_cap_change_percentage_24h": 0.60963,
        "circulating_supply": 19586056,
        "total_supply": 21000000,
        "max_supply": 21000000,
        "ath": 5128383,
        "ath_change_percentage": -30.83525,
        "ath_date": "2021-11-10T14:24:11.849Z",
        "atl": 3993.42,
        "atl_change_percentage": 88721.95439,
        "atl_date": "2013-07-05T00:00:00.000Z",
        "roi": null,
        "last_updated": "2023-12-31T20:20:27.674Z"
      },
      {
        "id": "ethereum",
        "symbol": "eth",
        "name": "Ethereum",
        "image": "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
        "current_price": 190912,
        "market_cap": 22924851294724,
        "market_cap_rank": 2,
        "fully_diluted_valuation": 22924851294724,
        "total_volume": 1057341663498,
        "high_24h": 192801,
        "low_24h": 189619,
        "price_change_24h": -717.4501207499707,
        "price_change_percentage_24h": -0.37439,
        "market_cap_change_24h": -87845620963.73828,
        "market_cap_change_percentage_24h": -0.38173,
        "circulating_supply": 120183097.255185,
        "total_supply": 120183097.255185,
        "max_supply": null,
        "ath": 362338,
        "ath_change_percentage": -47.31163,
        "ath_date": "2021-11-10T14:24:19.604Z",
        "atl": 28.13,
        "atl_change_percentage": 678541.29121,
        "atl_date": "2015-10-20T00:00:00.000Z",
        "roi": {
          "times": 70.98119200401962,
          "currency": "btc",
          "percentage": 7098.119200401961
        },
        "last_updated": "2023-12-31T20:20:29.416Z"
      },
      {
        "so on...."
      }
    ]
  }
  ```

### 2. Get Exchange Rate

- **Endpoint**: `/currencyConvertor`
- **Method**: `GET`
- **Request Body**:
  ```json
  {
    "sourceCrypto": "bitcoin",
    "amount": 1,
    "targetCurrency": "inr"
  }
  ```
- **Response**:

  ```json
  {
    "ok": true,
    "data": 3544559
  }
  ```
