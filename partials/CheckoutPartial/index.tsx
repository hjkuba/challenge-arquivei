import { ReactElement } from 'react';
import Input from '../../components/Input';
import { styles } from './styles';
import Button from '../../components/Button';

const CheckoutPartial = (): ReactElement => {
    return (
        <section className="checkout-partial">
            <h2 className="checkout-partial__title">Informações de Pagamento</h2>
            <div className="checkout-partial__summary">
                <div className="checkout-partial__summary-info">
                    <h3 className="checkout-partial__summary-title">Número de Consultas</h3>
                    <p className="checkout-partial__summary-value">300</p>
                </div>
                <div className="checkout-partial__summary-info">
                    <h3 className="checkout-partial__summary-title">Total a Pagar</h3>
                    <p className="checkout-partial__summary-value">R$300,00</p>
                </div>
            </div>
            <hr className="checkout-partial__divider" />
            <div className="checkout-partial__credit-card-form">
                <Input
                    name="cnpj"
                    onChange={(): void => console.log('change')}
                    value=""
                    label="CNPJ"
                    type={Input.types.NUMBER}
                />
                <Input
                    name="name"
                    onChange={(): void => console.log('change')}
                    value=""
                    label="Nome"
                    type={Input.types.NUMBER}
                />
                <Input
                    name="credit-card"
                    onChange={(): void => console.log('change')}
                    value=""
                    label="Número do Cartão de Crédito"
                    type={Input.types.NUMBER}
                />
                <div className="checkout-partial__cvv-expiration-container">
                    <Input
                        name="expiration-date"
                        onChange={(): void => console.log('change')}
                        value=""
                        label="Data de Expiração"
                        type={Input.types.NUMBER}
                    />
                    <Input
                        name="cvv"
                        value=""
                        onChange={(): void => console.log('change')}
                        label="CVV"
                        type={Input.types.NUMBER}
                    />
                </div>
                <Button
                    label="Confirmar Pagamento"
                    type={Button.types.PRIMARY}
                    onClick={(): void => console.log('teste')}
                />
            </div>
            <style jsx>{styles}</style>
        </section>
    );
};

export default CheckoutPartial;
