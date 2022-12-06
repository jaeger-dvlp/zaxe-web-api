const PriceService = require('@/v1/services/priceService');

const getAllPrices = async (req, res) => {
  try {
    const prices = PriceService.getAllPrices();
    await res.status(200).send({
      status: 'success',
      data: { prices },
    });
  } catch (error) {
    await res.status(error?.status || 500).send({
      status: 'error',
      error: error?.message || error,
    });
  }
};

const getPricesBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    if (!slug)
      res.status(400)({
        status: 'error',
        message: 'Bzzt! Bzzt! Product slug is required.',
      });

    const price = PriceService.getPricesBySlug(slug);
    await res.status(200).send({
      status: 'success',
      data: { price },
    });
  } catch (error) {
    await res.status(error?.status || 500).send({
      status: 'error',
      error: error?.message || error,
    });
  }
};

const getPricesByCategory = async (req, res) => {
  try {
    const { slug } = req.params;
    if (!slug)
      res.status(400)({
        status: 'error',
        message: 'Bzzt! Bzzt! Category slug is required.',
      });

    const prices = PriceService.getPricesByCategory(slug);
    await res.status(200).send({
      status: 'success',
      data: { prices },
    });
  } catch (error) {
    await res.status(error?.status || 500).send({
      status: 'error',
      error: error?.message || error,
    });
  }
};

module.exports = {
  getAllPrices,
  getPricesBySlug,
  getPricesByCategory,
};
