import { ReactElement } from 'react';
import CheckoutPartial from '../../partials/CheckoutPartial';
import CheckoutConfirmationPartial from '../../partials/CheckoutConfirmationPartial';
import { styles } from './styles';

interface Props {
    isConfirmed: boolean;
    totalValue: number;
    queryQuantity: number;
    isWaitingPayment: boolean;
    checkoutErrorMsg: string;
    onBackToDashboard: Function;
    onPaymentConfirmation: Function;
}

const CheckoutView = ({
    isConfirmed,
    totalValue,
    queryQuantity,
    isWaitingPayment,
    checkoutErrorMsg,
    onBackToDashboard,
    onPaymentConfirmation,
}: Props): ReactElement => {
    return (
        <div className="checkout-view">
            {isConfirmed ? (
                <CheckoutConfirmationPartial onBackToDashboard={onBackToDashboard} />
            ) : (
                <CheckoutPartial
                    onPaymentConfirmation={onPaymentConfirmation}
                    totalValue={totalValue}
                    queryQuantity={queryQuantity}
                    isWaitingPayment={isWaitingPayment}
                    checkoutErrorMsg={checkoutErrorMsg}
                />
            )}
            <style jsx>{styles}</style>
        </div>
    );
};

export default CheckoutView;
