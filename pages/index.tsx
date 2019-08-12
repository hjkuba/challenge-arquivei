import { ReactElement, Component, ChangeEvent } from 'react';
import Layout from '../components/Layout';
import HomeView from '../views/HomeView';
import Loader from '../components/Loader';
import { connect } from 'react-redux';
import { Company, Promotion, QueryPricing } from '../types';
import { checkAuth, signOut } from '../actions/auth-actions';
import { changeQueryInput, fetchPromotion } from '../actions/purchase-actions';
import { StoreState } from '../reducers';
import Router from 'next/router';

interface ActionProps {
    checkAuth: Function;
    signOut: Function;
    changeQueryInput: Function;
    fetchPromotion: Function;
}

interface StateProps {
    company: Company | null;
    isLogged: boolean;
    currentQueries: number | string;
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
        this.props.changeQueryInput(event.target.value, this.props.company, this.props.promotion);
    }

    private handlePurchaseAction(): void {
        Router.push('/checkout');
    }

    public componentDidMount(): void {
        this.props.checkAuth();
        this.props.fetchPromotion();
    }

    public render(): ReactElement {
        return (
            <Layout>
                {this.props.isLogged && this.props.company && this.props.promotion ? (
                    <HomeView
                        onSignout={this.signOut.bind(this)}
                        onPurchase={this.handlePurchaseAction.bind(this)}
                        onQueryQtdChange={this.handleQueryInput.bind(this)}
                        currentQueries={this.props.currentQueries}
                        company={this.props.company}
                        totalPrice={this.props.totalPrice}
                        queryPriceMap={this.props.queryPriceMap}
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
