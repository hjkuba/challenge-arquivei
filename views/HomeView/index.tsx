import { ReactElement } from 'react';
import ProfilePartial from '../../partials/ProfilePartial';
import PurchasePartial from '../../partials/PurchasePartial';
import { styles } from './styles';

const HomeView = (): ReactElement => {
    return (
        <div className="home-view">
            <div className="home-view__sections">
                <ProfilePartial />
                <PurchasePartial />
            </div>
            <style jsx>{styles}</style>
        </div>
    );
};

export default HomeView;
