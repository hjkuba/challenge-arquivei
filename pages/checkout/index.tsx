import { NextPage } from 'next';
import { ReactElement } from 'react';
import CheckoutTemplate from '../../templates/CheckoutTemplate';
import withLayout from '../../components/hocs/withLayout';
import { styles } from './styles';

const CheckoutPage: NextPage = (): ReactElement => {
    return (
        <div className="checkout">
            <CheckoutTemplate isConfirmed={false} />
            <style jsx>{styles}</style>
        </div>
    );
};

export default withLayout(CheckoutPage);
