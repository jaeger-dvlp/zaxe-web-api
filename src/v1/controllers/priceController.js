const PriceService = require('@/v1/services/priceService');
const path = require('path');
const fs = require('fs');

const getAllPrices = async (req, res) => {
  try {
    const prices = PriceService.getAllPrices();
    await res.status(200).send({
      status: 'OK',
      data: prices,
    });
  } catch (error) {
    await res.status(error?.status || 500).send({
      status: 'ERROR',
      error: error?.message || error,
    });
  }
};

module.exports = {
  getAllPrices,
};
