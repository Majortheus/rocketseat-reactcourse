import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import heroBannerImg from "../../assets/HeroBannerImg.png";
import { BulletPoint } from "../../components/BulletPoint";
import { CoffeeCard } from "../../components/CoffeeCard";
import { coffeeList } from "../../services/getCoffee";
import {
  BulletPointContainer,
  CoffeeMenuContainer,
  CoffeeMenuList,
  HeroBanner,
  HeroBannerContainer,
  HeroContent,
  HeroContentText,
  HomeContainer,
} from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <HeroBanner>
        <HeroBannerContainer>
          <HeroContent>
            <HeroContentText>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
            </HeroContentText>
            <BulletPointContainer>
              <BulletPoint
                text="Compra simples e segura"
                icon={<ShoppingCart size={17} weight="fill" />}
                backgroundColor="yellow-dark"
              />
              <BulletPoint
                text="Embalagem mantém o café intacto"
                icon={<Package size={17} weight="fill" />}
                backgroundColor="base-text"
              />
              <BulletPoint
                text="Entrega rápida e rastreada"
                icon={<Timer size={17} weight="fill" />}
                backgroundColor="yellow"
              />
              <BulletPoint
                text="O café chega fresquinho até você"
                icon={<Coffee size={17} weight="fill" />}
                backgroundColor="purple"
              />
            </BulletPointContainer>
          </HeroContent>
          <img src={heroBannerImg} />
        </HeroBannerContainer>
      </HeroBanner>
      <CoffeeMenuContainer>
        <h2>Nossos cafés</h2>
        <CoffeeMenuList>
          {coffeeList.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </CoffeeMenuList>
      </CoffeeMenuContainer>
    </HomeContainer>
  );
}
