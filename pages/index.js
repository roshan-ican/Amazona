import Layout from "../components/Layout"
import ProuductItem from "../components/ProuductItem"
import data from "../utilis/data"

export default function Home() {
  return (
    <Layout title="Home Page">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data.products.map((product) => (
          <ProuductItem product={product} key={product.slug}></ProuductItem>
        ))}
      </div>
    </Layout>
  )
}
