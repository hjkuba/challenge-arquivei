import { ReactElement } from 'react';
import { styles } from './styles';
import { toBRL } from '../../helpers/purchase-price';
import CheckoutForm from '../CheckoutForm';

interface Props {
    onPaymentConfirmation: Function;
    totalValue: number;
    queryQuantity: number;
    isWaitingPayment: boolean;
}

const CheckoutPartial = (props: Props): ReactElement => {
    return (
        <section className="checkout-partial">
            <h2 className="checkout-partial__title">Informações de Pagamento</h2>
            <div className="checkout-partial__summary">
                <div className="checkout-partial__summary-info">
                    <h3 className="checkout-partial__summary-title">Número de Consultas</h3>
                    <p className="checkout-partial__summary-value">{props.queryQuantity}</p>
                </div>
                <div className="checkout-partial__summary-info">
                    <h3 className="checkout-partial__summary-title">Total a Pagar</h3>
                    <p className="checkout-partial__summary-value">{toBRL(props.totalValue)}</p>
                </div>
            </div>
            <hr className="checkout-partial__divider" />
            <CheckoutForm
                queryQuantity={props.queryQuantity}
                onSubmit={props.onPaymentConfirmation}
                isLoading={props.isWaitingPayment}
            />
            <style jsx>{styles}</style>
        </section>
    );
};

export default CheckoutPartial;
