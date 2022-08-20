import Link from "next/link"
import React from "react"

export default function ProuductItem({ product }) {
  return (
    <div className="card">
      <Link href={`/product/${product.slug}`}>
        <a>
          <img
            src={product.image}
            alt={product.name}
            className="rounded shadow"
          />
        </a>
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.slug}`}>
          <a>
            <h2 className="text-lg">{product.name}</h2>
          </a>
        </Link>
        <p className="text-lg">{product.brand}</p>
        <button className="primary-button" type="button">
          Add to cart
        </button>
      </div>
    </div>
  )
}
