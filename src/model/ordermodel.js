const mongoose = require("mongoose");
const Schema = mongoose.Schema(
  {
    useremail: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
    orderid: {
      type: String,
      required: true,
    },
    amount_shipping: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      required: true,
    },
  },
  {
    timestamp: true,
  }
);

const productSchema =
  mongoose.models.products || mongoose.model("products", Schema);
export default productSchema;
