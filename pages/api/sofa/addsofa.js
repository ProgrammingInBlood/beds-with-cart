//ADDING PRODUCTS BY POST METHOD

import Products from "../../../../schema/Beds";
import dbConnect from "../../../../utils/DBconnect";
import timestamp from "time-stamp";

dbConnect();
export default async function handler(req, res) {
  if (req.method === "POST") {
    const {
      product_name,
      description,
      size,
      price,
      sofa_images,
      force_replace,
      category,
    } = req.body;

    //CHECKING IF ANY FIELD IS EMPTY

    if (!product_name || !size || !price) {
      res.json({ success: false, data: "Oops...Some Field Left Empty" });
    } else {
      const autocomplete = await Sofas.findOne({
        product_name: product_name,
        size: size,
      });
      // autocomplete ? await Products.deleteOne({ _id: autocomplete.id }) : null;

      if (autocomplete && !force_replace) {
        res.json({ success: false, data: "product already created" });
      } else {
        force_replace ? await Sofas.deleteOne({ _id: autocomplete?.id }) : null;
        const data = [
          {
            product_name: product_name,
            description: description,
            category: category,
            size: size,
            price: price,
            sofa_images: sofa_images,

            timestamp: timestamp("YYYY/MM/DDTHH:mm:ss"),
          },
        ];

        console.log(data);

        try {
          await Sofas.create(data);
          res
            .status(200)
            .json({ success: true, data: "Product Created Successfully" });
        } catch (err) {
          res.json({ success: false, message: err.message });
        }
      }
    }
  } else {
    res.status(404).json({ error: "POST query Missing" });
  }
}
