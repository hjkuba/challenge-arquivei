import { ReactElement, Component } from 'react';
import Layout from '../components/Layout';
import CheckoutView from '../views/CheckoutView';
import { connect } from 'react-redux';
import { StoreState } from '../reducers';
import { checkAuth } from '../actions/auth-actions';
import Loader from '../components/Loader';
import Router from 'next/router';
import { buyQueries, backToDashboard } from '../actions/checkout-actions';

interface ActionProps {
    checkAuth: Function;
    buyQueries: Function;
    backToDashboard: Function;
}

interface StateProps {
    isLogged: boolean;
    uid: string | null;
    totalValue: number;
    queryQuantity: number;
    checkoutConfirmation: boolean;
    isWaitingPayment: boolean;
}

class CheckoutPage extends Component<ActionProps & StateProps> {
    public constructor(props: ActionProps & StateProps) {
        super(props);
    }

    public componentDidMount(): void {
        this.props.checkAuth();
        if (!this.props.queryQuantity) {
            Router.push('/');
        }
    }

    private handlePaymentConfirmation(queryQuantity: number, checkoutForm: any): void {
        this.props.buyQueries(this.props.uid, queryQuantity, checkoutForm);
    }

    private handleBackToDashBoard(): void {
        this.props.backToDashboard();
    }

    public render(): ReactElement {
        return (
            <Layout>
                {this.props.isLogged ? (
                    <CheckoutView
                        onPaymentConfirmation={this.handlePaymentConfirmation.bind(this)}
                        onBackToDashboard={this.handleBackToDashBoard.bind(this)}
                        totalValue={this.props.totalValue}
                        queryQuantity={this.props.queryQuantity}
                        isConfirmed={this.props.checkoutConfirmation}
                        isWaitingPayment={this.props.isWaitingPayment}
                    />
                ) : (
                    <Loader />
                )}
            </Layout>
        );
    }
}

const mapStateToProps = ({ auth, purchase, checkout }: StoreState): StateProps => {
    return {
        isLogged: auth.isLogged,
        uid: auth.uid,
        totalValue: purchase.totalValue,
        queryQuantity: purchase.currentInputQtd,
        checkoutConfirmation: checkout.activeConfirmationView,
        isWaitingPayment: checkout.isWaitingPayment,
    };
};

export default connect(
    mapStateToProps,
    { checkAuth, buyQueries, backToDashboard },
)(CheckoutPage);
