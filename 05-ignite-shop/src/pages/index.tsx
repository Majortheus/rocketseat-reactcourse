import { useKeenSlider } from 'keen-slider/react'
import { GetStaticProps } from "next"
import Image from "next/image"
import Stripe from "stripe"
import { stripe } from "../lib/stripe"
import { HomeContainer, Product } from "../styles/pages/home"


import 'keen-slider/keen-slider.min.css'
import Head from 'next/head'
import Link from 'next/link'
import { Handbag } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../context/cart-context'

type HomeProps = {
  products: {
    id: string,
    name: string,
    imageUrl: string,
    price: string
    price_unit: number
    defaultPriceId: string
  }[]
}

export default function Home({ products }: HomeProps) {
  const { cartItems, addToCart } = useContext(CartContext);
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  });

  console.log(cartItems)

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">


        {products?.map(product => {
          return (
            <Link key={product.id} href={`/product/${product.id}`}>
              <Product className="keen-slider__slide">
                <Image src={product.imageUrl} width={520} height={480} alt="" />

                <footer>
                  <div>
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>
                  </div>
                  <button type="button"
                    disabled={cartItems.some((item) => item.id === product.defaultPriceId)}
                    onClick={(e) => {
                      e.preventDefault()
                      addToCart({
                        id: product.defaultPriceId,
                        name: product.name,
                        price: product.price_unit,
                        quantity: 1,
                        image: product.imageUrl
                      })
                    }}>
                    <Handbag size={32} weight="bold" />
                  </button>
                </footer>
              </Product>
            </Link>
          )
        })}
      </HomeContainer>
    </>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  });


  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(price.unit_amount / 100),
      price_unit: price.unit_amount / 100,
      defaultPriceId: price.id,
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2 // 2 hours,
  }
}