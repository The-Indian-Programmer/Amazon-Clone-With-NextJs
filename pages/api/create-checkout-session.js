const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
stripe.setMaxNetworkRetries(2);
const checkoutfunction = async (req, res) => {
  const { items, email } = req.body;
  let imageArr = [];
  for (let i = 0; i < items.length; i++) {
    imageArr.push(items[i].image);
  }

  const transformateditems = items.map((item) => ({
    description: item.description,
    quantity: 1,
    price_data: {
      currency: "INR",
      unit_amount: item.price.toFixed(2) * 100,
      product_data: {
        name: item.title,
        images: [item.image],
      },
    },
  }));
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_rates: ["shr_1JVV8lSGCjMAnxMRbt7QgdK8"],
    shipping_address_collection: {
      allowed_countries: ["IN"],
    },
    line_items: transformateditems,
    mode: "payment",
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/cancel`,
    metadata: {
      email,
      images: JSON.stringify(items.map((item) => item.image)),
    },
  });
  res.status(200).json({ id: session.id, message: "Done", data: items });
};

export default checkoutfunction;
