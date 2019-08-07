import { NextPage } from 'next';
import { ReactElement } from 'react';
import ProfileTemplate from '../templates/ProfileTemplate';
import PurchaseTemplate from '../templates/PurchaseTemplate';
import withLayout from '../components/hocs/withLayout';
import { styles } from './styles';

const HomePage: NextPage = (): ReactElement => {
    return (
        <main className="home">
            <ProfileTemplate />
            <PurchaseTemplate />
            <style jsx>{styles}</style>
        </main>
    );
};

export default withLayout(HomePage);
