const { ResellerService } = require('@/app/services');

const getAllResellers = async (req, res) => {
  try {
    const resellers = await ResellerService.getAllResellers();
    await res.status(200).send({
      status: 'success',
      data: { resellers },
    });
  } catch (error) {
    await res.status(error?.status || 500).send({
      status: 'error',
      message: error?.message || error,
    });
  }
};

module.exports = {
  getAllResellers,
};
