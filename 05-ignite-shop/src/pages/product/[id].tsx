import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { useContext } from "react";
import Stripe from "stripe";
import { CartContext } from "../../context/cart-context";
import { stripe } from "../../lib/stripe";
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product";

type ProductProps = {
  product: {
    id: string
    name: string
    imageUrl: string
    price: string
    price_unit: number
    description: string
    defaultPriceId: string
  }
}

export default function Product({ product }: ProductProps) {
  const { cartItems, addToCart } = useContext(CartContext);



  function handleBuyProduct() {
    addToCart({
      id: product.defaultPriceId,
      name: product.name,
      price: product.price_unit,
      quantity: 1,
      image: product.imageUrl
    })
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>

          <button onClick={handleBuyProduct} disabled={cartItems.some((item) => item.id === product.id)}>
            {cartItems.some((item) => item.id === product.id) ? 'Produto ja está na sacola' : 'Colocar na sacola'}
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(price.unit_amount / 100),
        price_unit: price.unit_amount / 100,
        description: product.description,
        defaultPriceId: price.id,
      }
    },

    revalidate: 60 * 60 * 1 // 1 hours
  }
}