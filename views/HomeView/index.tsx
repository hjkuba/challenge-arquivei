import { ReactElement } from 'react';
import ProfilePartial from '../../partials/ProfilePartial';
import PurchasePartial from '../../partials/PurchasePartial';
import { Company, QueryPricing } from '../../types';
import { styles } from './styles';

interface Props {
    company: Company;
    currentQueries: number;
    totalPrice: number;
    queryPriceMap: QueryPricing[];
    onQueryQtdChange: Function;
    onPurchase: Function;
    onSignout: Function;
}

const HomeView = (props: Props): ReactElement => {
    const { onPurchase, company, onSignout, onQueryQtdChange, currentQueries, totalPrice, queryPriceMap } = props;
    return (
        <div className="home-view">
            <div className="home-view__sections">
                <ProfilePartial onSignout={onSignout} company={company} />
                <PurchasePartial
                    onPurchase={onPurchase}
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
