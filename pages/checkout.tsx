import { NextPage } from 'next';
import { ReactElement } from 'react';
import Layout from '../components/Layout';
import CheckoutView from '../views/CheckoutView';

const CheckoutPage: NextPage = (): ReactElement => {
    return (
        <Layout>
            <CheckoutView isConfirmed={true} />
        </Layout>
    );
};

export default CheckoutPage;
