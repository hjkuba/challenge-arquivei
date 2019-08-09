import { NextPage } from 'next';
import { ReactElement } from 'react';
import Layout from '../components/Layout';
import SignupView from '../views/SignupView';

const SignupPage: NextPage = (): ReactElement => {
    return (
        <Layout>
            <SignupView />
        </Layout>
    );
};

export default SignupPage;
