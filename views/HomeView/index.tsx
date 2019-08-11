import { ReactElement } from 'react';
import ProfilePartial from '../../partials/ProfilePartial';
import PurchasePartial from '../../partials/PurchasePartial';
import { styles } from './styles';
import { Company } from '../../types';

interface Props {
    company: Company;
}

const HomeView = (props: Props): ReactElement => {
    return (
        <div className="home-view">
            <div className="home-view__sections">
                <ProfilePartial company={props.company} />
                <PurchasePartial />
            </div>
            <style jsx>{styles}</style>
        </div>
    );
};

export default HomeView;
