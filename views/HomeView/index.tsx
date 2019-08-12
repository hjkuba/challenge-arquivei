import { ReactElement } from 'react';
import ProfilePartial from '../../partials/ProfilePartial';
import PurchasePartial from '../../partials/PurchasePartial';
import { styles } from './styles';
import { Company, Promotion } from '../../types';

interface Props {
    company: Company;
    onSignout: Function;
    onQueryQtdChange: Function;
    currentQueryQtd: number | string;
    promotion: Promotion;
}

const HomeView = (props: Props): ReactElement => {
    return (
        <div className="home-view">
            <div className="home-view__sections">
                <ProfilePartial onSignout={props.onSignout} company={props.company} />
                <PurchasePartial
                    onQueryQtdChange={props.onQueryQtdChange}
                    currentQueryQtd={props.currentQueryQtd}
                    totalQueriesBougth={props.company.totalQueries}
                    promotion={props.promotion}
                />
            </div>
            <style jsx>{styles}</style>
        </div>
    );
};

export default HomeView;
