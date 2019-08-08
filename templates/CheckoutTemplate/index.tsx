import { ReactElement } from 'react';
import Input from '../../components/Input';
import { styles } from './styles';
import Button from '../../components/Button';

interface Props {
    isConfirmed?: boolean;
}

const CheckoutTemplate = ({ isConfirmed = false }: Props): ReactElement => {
    return isConfirmed ? (
        <section className="checkout-template">
            <h2 className="checkout-template__purchase-confirmation">Sua compra foi concluída com sucesso! :)</h2>
            <Button label="Voltar para Página principal" type={Button.types.PRIMARY} />
            <style jsx>{styles}</style>
        </section>
    ) : (
        <section className="checkout-template">
            <h2 className="checkout-template__title">Informações de Pagamento</h2>
            <div className="checkout-template__summary">
                <div className="checkout-template__summary-info">
                    <h3 className="checkout-template__summary-title">Número de Consultas</h3>
                    <p className="checkout-template__summary-value">300</p>
                </div>
                <div className="checkout-template__summary-info">
                    <h3 className="checkout-template__summary-title">Total a Pagar</h3>
                    <p className="checkout-template__summary-value">R$300,00</p>
                </div>
            </div>
            <hr className="checkout-template__divider" />
            <div className="checkout-template__credit-card-form">
                <Input label="CNPJ" type={Input.types.NUMBER} />
                <Input label="Nome" type={Input.types.NUMBER} />
                <Input label="Número do Cartão de Crédito" type={Input.types.NUMBER} />
                <div className="checkout-template__cvv-expiration-container">
                    <Input label="Data de Expiração" type={Input.types.NUMBER} />
                    <Input label="CVV" type={Input.types.NUMBER} />
                </div>
                <Button label="Confirmar Pagamento" type={Button.types.PRIMARY} />
            </div>
            <style jsx>{styles}</style>
        </section>
    );
};

export default CheckoutTemplate;
