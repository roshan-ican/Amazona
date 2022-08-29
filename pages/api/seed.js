import Product from "../../models/Product"
import User from "../../models/User"
import data from "../../utilis/data"
import db from "../../utilis/db"

const handler = async (req, res) => {
  await db.connect()
  await User.deleteMany()
  await User.insertMany(data.users)
  await db.disconnect()
  await Product.deleteMany()
  await Product.insertMany(data.products)
  res.send({ message: "seeded successfully" })
}

export default handler
