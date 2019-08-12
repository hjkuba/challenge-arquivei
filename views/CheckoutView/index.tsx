import { ReactElement } from 'react';
import CheckoutPartial from '../../partials/CheckoutPartial';
import CheckoutConfirmationPartial from '../../partials/CheckoutConfirmationPartial';
import { styles } from './styles';

interface Props {
    onPaymentConfirmation: Function;
    onBackToDashboard: Function;
    isConfirmed: boolean;
    totalValue: number;
    queryQuantity: number;
}

const CheckoutView = (props: Props): ReactElement => {
    return (
        <div className="checkout-view">
            {props.isConfirmed ? (
                <CheckoutConfirmationPartial onBackToDashboard={props.onBackToDashboard} />
            ) : (
                <CheckoutPartial
                    onPaymentConfirmation={props.onPaymentConfirmation}
                    totalValue={props.totalValue}
                    queryQuantity={props.queryQuantity}
                />
            )}
            <style jsx>{styles}</style>
        </div>
    );
};

export default CheckoutView;
