import { ReactElement } from 'react';
import CheckoutForm from '../CheckoutForm';
import { toBRL } from '../../helpers/purchase-price';
import { styles } from './styles';

interface Props {
    totalValue: number;
    queryQuantity: number;
    isWaitingPayment: boolean;
    checkoutErrorMsg: string;
    onPaymentConfirmation: Function;
}

const CheckoutPartial = ({
    queryQuantity,
    totalValue,
    checkoutErrorMsg,
    isWaitingPayment,
    onPaymentConfirmation,
}: Props): ReactElement => {
    return (
        <section className="checkout-partial">
            <h2 className="checkout-partial__title">Informações de Pagamento</h2>
            <div className="checkout-partial__summary">
                <div className="checkout-partial__summary-info">
                    <h3 className="checkout-partial__summary-title">Número de Consultas</h3>
                    <p className="checkout-partial__summary-value">{queryQuantity}</p>
                </div>
                <div className="checkout-partial__summary-info">
                    <h3 className="checkout-partial__summary-title">Total a Pagar</h3>
                    <p className="checkout-partial__summary-value">{toBRL(totalValue)}</p>
                </div>
            </div>
            <hr className="checkout-partial__divider" />
            <CheckoutForm
                errorMsg={checkoutErrorMsg}
                queryQuantity={queryQuantity}
                onSubmit={onPaymentConfirmation}
                isLoading={isWaitingPayment}
            />
            <style jsx>{styles}</style>
        </section>
    );
};

export default CheckoutPartial;
