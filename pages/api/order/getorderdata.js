import connectDb from "../../../src/database/connection";
import productSchema from "../../../src/model/ordermodel";

connectDb();

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await getDatafromthedatabase(req, res);
      break;
  }
};

const getDatafromthedatabase = async (req, res) => {
  try {
    const data = await productSchema.find({ useremail: req.body });
    if (data) {
      return res.status(200).json({ data: data, message: "data found" });
    }
    res.json({ err: "Some Error found" });
  } catch (error) {
    res.json({ err: error.messsage });
  }
};
