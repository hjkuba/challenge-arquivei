import Router from 'next/router';
import { ReactElement, Component, ChangeEvent } from 'react';
import { connect } from 'react-redux';
import { checkAuth, signOut } from '../actions/auth-actions';
import { changeQueryInput, fetchPromotion } from '../actions/purchase-actions';
import { StoreState } from '../reducers';
import HomeView from '../views/HomeView';
import Layout from '../components/Layout';
import Loader from '../components/Loader';
import { Company, Promotion, QueryPricing } from '../types';

interface ActionProps {
    checkAuth: Function;
    signOut: Function;
    changeQueryInput: Function;
    fetchPromotion: Function;
}

interface StateProps {
    company: Company | null;
    isLogged: boolean;
    currentQueries: number;
    promotion: Promotion;
    totalPrice: number;
    queryPriceMap: QueryPricing[];
}

class HomePage extends Component<ActionProps & StateProps> {
    public constructor(props: ActionProps & StateProps) {
        super(props);
    }

    private signOut(): void {
        this.props.signOut();
    }

    private handleQueryInput(event: ChangeEvent<HTMLInputElement>): void {
        const maxValue = 1000000;
        let value = Math.round(parseFloat(event.target.value));
        if (value > maxValue) {
            value = maxValue;
        }
        this.props.changeQueryInput(value, this.props.company, this.props.promotion);
    }

    private handlePurchaseAction(): void {
        Router.push('/checkout');
    }

    public componentDidMount(): void {
        this.props.checkAuth();
    }

    public render(): ReactElement {
        const { isLogged, company, promotion, currentQueries, totalPrice, queryPriceMap } = this.props;
        return (
            <Layout>
                {isLogged && company && promotion ? (
                    <HomeView
                        currentQueries={currentQueries}
                        company={company}
                        totalPrice={totalPrice}
                        queryPriceMap={queryPriceMap}
                        onSignout={this.signOut.bind(this)}
                        onPurchase={this.handlePurchaseAction.bind(this)}
                        onQueryQtdChange={this.handleQueryInput.bind(this)}
                    />
                ) : (
                    <Loader />
                )}
            </Layout>
        );
    }
}

const mapStateToProps = ({ user, auth, purchase }: StoreState): StateProps => {
    return {
        company: user.company,
        isLogged: auth.isLogged,
        currentQueries: purchase.currentInputQtd,
        promotion: purchase.promotion,
        totalPrice: purchase.totalValue,
        queryPriceMap: purchase.queryPriceMap,
    };
};

export default connect(
    mapStateToProps,
    { checkAuth, signOut, changeQueryInput, fetchPromotion },
)(HomePage);
