import { zodResolver } from "@hookform/resolvers/zod";
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as zod from "zod";
import { PaymentType } from "../../@types/payment";
import { Input } from "../../components/Input";
import { useCheckout } from "../../hooks/UseCheckout";
import { CheckoutCartItem } from "./components/CartItem";
import {
  AddressCard,
  AddressForm,
  CardInfo,
  CardTitle,
  CartCard,
  CartContainer,
  CartList,
  CheckoutContainer,
  CheckoutDetails,
  CheckoutDetailsItem,
  CheckoutDetailsTotal,
  PaymentCard,
  PaymentContainer,
  PaymentForm,
  PaymentTypeButton,
} from "./styles";

const checkoutFormSchema = zod.object({
  cep: zod.string().min(1, "Campo Obrigatorio"),
  rua: zod.string().min(1, "Campo Obrigatorio"),
  numero: zod.string().min(1, "Campo Obrigatorio"),
  complemento: zod.string(),
  bairro: zod.string().min(1, "Campo Obrigatorio"),
  cidade: zod.string().min(1, "Campo Obrigatorio"),
  uf: zod.string().min(1, "Campo Obrigatorio"),

  paymentType: zod.enum(["credit-card", "debit-card", "cash"], { message: "Informe o tipo de pagamento" }),
});

type CheckoutFormData = zod.infer<typeof checkoutFormSchema>;

export function Checkout() {
  const { cart, setAddress, setPaymentType, resetCart } = useCheckout();
  const navigate = useNavigate();

  const checkoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      cep: "",
      rua: "",
      numero: "",
      complemento: "",
      bairro: "",
      cidade: "",
      uf: "",
      paymentType: undefined,
    },
  });

  const handlePaymentTypeChange = (paymentType: PaymentType) => {
    checkoutForm.setValue("paymentType", paymentType);
  };

  const onSubmit = (data: CheckoutFormData) => {
    setAddress({
      cep: data.cep,
      rua: data.rua,
      numero: data.numero,
      complemento: data.complemento,
      bairro: data.bairro,
      cidade: data.cidade,
      uf: data.uf,
    });
    setPaymentType(data.paymentType);

    navigate("/checkout/success");
    resetCart();
  };

  const paymentType = checkoutForm.watch("paymentType");

  return (
    <CheckoutContainer onSubmit={checkoutForm.handleSubmit(onSubmit, (err) => console.log({ err }))}>
      <FormProvider {...checkoutForm}>
        <PaymentContainer>
          <CardTitle>Complete seu pedido</CardTitle>
          <AddressCard>
            <CardInfo iconColor="yellow-dark">
              <MapPinLine size={22} />
              <div>
                <p>Endereço de Entrega</p>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </CardInfo>
            <AddressForm>
              <Input name="cep" placeholder="CEP" />
              <Input name="rua" placeholder="Rua" />
              <Input name="numero" placeholder="Número" />
              <Input name="complemento" placeholder="Complemento" optional />
              <Input name="bairro" placeholder="Bairro" />
              <Input name="cidade" placeholder="Cidade" />
              <Input name="uf" placeholder="UF" />
            </AddressForm>
          </AddressCard>
          <PaymentCard>
            <CardInfo iconColor="purple">
              <CurrencyDollar size={22} />
              <div>
                <p>Pagamento</p>
                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
              </div>
            </CardInfo>
            <PaymentForm>
              <PaymentTypeButton
                type="button"
                onClick={() => handlePaymentTypeChange("credit-card")}
                active={paymentType === "credit-card"}
              >
                <CreditCard size={17} />
                <span>Cartão de Crédito</span>
              </PaymentTypeButton>
              <PaymentTypeButton
                type="button"
                onClick={() => handlePaymentTypeChange("debit-card")}
                active={paymentType === "debit-card"}
              >
                <Bank size={17} />
                <span>Cartão de Débito</span>
              </PaymentTypeButton>
              <PaymentTypeButton
                type="button"
                onClick={() => handlePaymentTypeChange("cash")}
                active={paymentType === "cash"}
              >
                <Money size={17} />
                <span>Dinheiro</span>
              </PaymentTypeButton>
            </PaymentForm>
            {checkoutForm.formState.errors.paymentType && (
              <p role="alert">{checkoutForm.formState.errors.paymentType.message}</p>
            )}
          </PaymentCard>
        </PaymentContainer>
        <CartContainer>
          <CardTitle>Cafés selecionados</CardTitle>
          <CartCard>
            <CartList>
              {cart.map((item) => (
                <CheckoutCartItem key={item.coffee.id} cartItem={item} />
              ))}
            </CartList>
            <CheckoutDetails>
              <CheckoutDetailsItem>
                <span>Total de itens</span>
                <span>
                  {new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(
                    cart.reduce((acc, item) => acc + item.coffee.price * item.quantity, 0)
                  )}
                </span>
              </CheckoutDetailsItem>
              <CheckoutDetailsItem>
                <span>Entrega</span>
                <span>R$ 3,50</span>
              </CheckoutDetailsItem>
              <CheckoutDetailsTotal>
                <span>Total</span>
                <span>
                  {new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(
                    cart.reduce((acc, item) => acc + item.coffee.price * item.quantity, 0) + 3.5
                  )}
                </span>
              </CheckoutDetailsTotal>
              <button type="submit">Confirmar Pedido</button>
            </CheckoutDetails>
          </CartCard>
        </CartContainer>
      </FormProvider>
    </CheckoutContainer>
  );
}
