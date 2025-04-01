import { Clock, CurrencyDollar, MapPin } from "phosphor-react";
import { BulletPoint } from "../../components/BulletPoint";
import { Banner, BannerTitle, CheckoutSuccessContainer, DeliveryInfo } from "./styles";

import checkoutSuccessImg from "../../assets/CheckoutSuccessImg.png";
import { useCheckout } from "../../hooks/UseCheckout";

export function CheckoutSuccess() {
  const { address, paymentType } = useCheckout();

  return (
    <CheckoutSuccessContainer>
      <BannerTitle>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </BannerTitle>
      <Banner>
        <DeliveryInfo>
          <BulletPoint
            text={
              <div>
                <div>
                  Entrega em{" "}
                  <strong>
                    {address.rua}, {address.numero}
                  </strong>
                </div>
                <div>
                  {address.bairro} - {address.cidade}, {address.uf}
                </div>
              </div>
            }
            icon={<MapPin size={17} weight="fill" />}
            backgroundColor="purple"
          />
          <BulletPoint
            text={
              <div>
                <div>Previsão de entrega</div>
                <strong>20 min - 30 min</strong>
              </div>
            }
            icon={<Clock size={17} weight="fill" />}
            backgroundColor="yellow"
          />
          <BulletPoint
            text={
              <div>
                <div>Pagamento na entrega</div>
                <strong>
                  {paymentType === "credit-card"
                    ? "Cartão de Crédito"
                    : paymentType === "debit-card"
                    ? "Cartão de Débito"
                    : "Dinheiro"}
                </strong>
              </div>
            }
            icon={<CurrencyDollar size={17} weight="fill" />}
            backgroundColor="yellow-dark"
          />
        </DeliveryInfo>
        <img src={checkoutSuccessImg} />
      </Banner>
    </CheckoutSuccessContainer>
  );
}
