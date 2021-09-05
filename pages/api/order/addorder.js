import connectDb from "../../../src/database/connection";
import productSchema from "../../../src/model/ordermodel";

connectDb();

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await addDataToTheDatabase(req, res);
      break;
  }
};

const addDataToTheDatabase = async (req, res) => {
  console.log(req.body);
  // console.log(JSON.parse(req.body.metadata.images));
  // console.log(typeof Array.from(req.body.metadata.images));
  try {
    const order = new productSchema({
      useremail: req.body.metadata.email,
      orderid: req.body.customer,
      amount: req.body.amount_total / 100,
      amount_shipping: req.body.total_details.amount_shipping / 100,
      images: JSON.parse(req.body.metadata.images),
    });

    const datasave = await order.save();

    if (datasave) {
      return res.json({ msg: "Added to database" });
    }
    res.json({ err: "Error while saving data" });
  } catch (error) {
    res.json({ err: error.messsage });
  }
};
