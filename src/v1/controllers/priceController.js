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

const getPriceBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    if (!slug)
      res.status(400)({
        status: 'ERROR',
        message: 'Bzzt! Bzzt! Slug is required.',
      });

    const price = PriceService.getPriceBySlug(slug);
    await res.status(200).send({
      status: 'OK',
      data: price,
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
  getPriceBySlug,
};
