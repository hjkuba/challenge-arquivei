import { NextPage } from 'next';
import { ReactElement } from 'react';
import Layout from '../components/Layout';
import HomeView from '../views/HomeView';

const HomePage: NextPage = (): ReactElement => {
    return (
        <Layout>
            <HomeView />
        </Layout>
    );
};

export default HomePage;
