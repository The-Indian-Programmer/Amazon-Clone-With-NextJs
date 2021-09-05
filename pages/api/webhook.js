import { buffer } from "micro";
import { postData } from "../../src/routes/order";

///////  // extablish the connection to stripe
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const endpointSecret = process.env.STRIPE_SIGNING_KEY;

const fullfillorder = async (session) => {
  const response = await postData("order/addorder", session);
  return response.msg;
};
export default async (req, res) => {
  if (req.method === "POST") {
    const requestedBuffer = await buffer(req);
    const payload = requestedBuffer.toString();

    const signature = req.headers["stripe-signature"];
    let event;

    /// verify that event posted came from the stripe
    try {
      event = stripe.webhooks.constructEvent(
        payload,
        signature,
        endpointSecret
      );
    } catch (err) {
      console.log(`Error found:`, err.message);
      return res.status(400).send(`Webhook Error ${err.message}`);
    }

    // handle the checkout session
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      /// fullfill the order
      console.log("i am webhook 5");

      fullfillorder(session)
        .then(() => res.status(200).send({ message: "ham thik hai" }))
        .catch((err) => res.status(400).send(`Webhook Error : ${err.message}`));
    }
  }
};

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
