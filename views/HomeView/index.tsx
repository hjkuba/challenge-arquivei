import { ReactElement } from 'react';
import ProfilePartial from '../../partials/ProfilePartial';
import PurchasePartial from '../../partials/PurchasePartial';
import { styles } from './styles';
import { Company, QueryPricing } from '../../types';

interface Props {
    company: Company;
    onSignout: Function;
    onQueryQtdChange: Function;
    currentQueries: number | string;
    totalPrice: number;
    queryPriceMap: QueryPricing[];
}

const HomeView = (props: Props): ReactElement => {
    const { company, onSignout, onQueryQtdChange, currentQueries, totalPrice, queryPriceMap } = props;
    return (
        <div className="home-view">
            <div className="home-view__sections">
                <ProfilePartial onSignout={onSignout} company={company} />
                <PurchasePartial
                    onQueryQtdChange={onQueryQtdChange}
                    currentQueries={currentQueries}
                    totalPrice={totalPrice}
                    queryPriceMap={queryPriceMap}
                />
            </div>
            <style jsx>{styles}</style>
        </div>
    );
};

export default HomeView;
