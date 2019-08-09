import { NextPage } from 'next';
import { ReactElement } from 'react';
import ProfileTemplate from '../templates/ProfileTemplate';
import PurchaseTemplate from '../templates/PurchaseTemplate';
import withLayout from '../components/hocs/withLayout';
import { styles } from './styles';

const HomePage: NextPage = (): ReactElement => {
    return (
        <div className="home">
            <div className="home__templates-container">
                <ProfileTemplate />
                <PurchaseTemplate />
            </div>
            <style jsx>{styles}</style>
        </div>
    );
};

export default withLayout(HomePage);
