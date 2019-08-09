import { NextPage } from 'next';
import { ReactElement } from 'react';
import Layout from '../components/Layout';
import SigninView from '../views/SigninView';

const SigninPage: NextPage = (): ReactElement => {
    return (
        <Layout>
            <SigninView />
        </Layout>
    );
};

export default SigninPage;
