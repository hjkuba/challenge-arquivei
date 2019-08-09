import { ReactElement } from 'react';
import CheckoutPartial from '../../partials/CheckoutPartial';
import CheckoutConfirmationPartial from '../../partials/CheckoutConfirmationPartial';
import { styles } from './styles';

interface Props {
    isConfirmed: boolean;
}

const CheckoutView = ({ isConfirmed = false }: Props): ReactElement => {
    return (
        <div className="checkout-view">
            {isConfirmed ? <CheckoutPartial /> : <CheckoutConfirmationPartial />}
            <style jsx>{styles}</style>
        </div>
    );
};

export default CheckoutView;
