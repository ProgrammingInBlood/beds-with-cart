import Sofas from "../../../schema/beds";
import dbConnect from "../../../utils/DBconnect";

dbConnect();
export default async function handler(req, res) {
  // const { page = 1, limit = 20 } = req.query;
  if (req.method === "POST") {
    console.log(req.body.categories);
    const { value, method } = req.body;
    try {
      const getAllProducts = await Sofas.find({ [method]: value });

     

      res.status(200).json({ data: getAllProducts });
    } catch (err) {
      res.json({ success: false, data: err.message });
    }
  } else {
    res.json({ success: false, data: "POSt method missing" });
  }
}
