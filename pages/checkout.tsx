import Router from 'next/router';
import { ReactElement, Component } from 'react';
import { connect } from 'react-redux';
import { checkAuth } from '../actions/auth-actions';
import { buyQueries, backToDashboard, resetCheckoutErrors } from '../actions/checkout-actions';
import { StoreState } from '../reducers';
import CheckoutView from '../views/CheckoutView';
import Layout from '../components/Layout';
import Loader from '../components/Loader';

interface ActionProps {
    checkAuth: Function;
    buyQueries: Function;
    backToDashboard: Function;
    resetCheckoutErrors: Function;
}

interface StateProps {
    isLogged: boolean;
    uid: string | null;
    totalValue: number;
    queryQuantity: number;
    checkoutConfirmation: boolean;
    isWaitingPayment: boolean;
    checkoutErrorMsg: string;
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

    public componentWillUnmount(): void {
        this.props.resetCheckoutErrors();
    }

    private handlePaymentConfirmation(queryQuantity: number, checkoutForm: any): void {
        this.props.buyQueries(this.props.uid, queryQuantity, checkoutForm);
    }

    private handleBackToDashBoard(): void {
        this.props.backToDashboard();
    }

    public render(): ReactElement {
        const { checkoutErrorMsg, totalValue, queryQuantity, checkoutConfirmation, isWaitingPayment } = this.props;

        return (
            <Layout>
                {this.props.isLogged ? (
                    <CheckoutView
                        checkoutErrorMsg={checkoutErrorMsg}
                        totalValue={totalValue}
                        queryQuantity={queryQuantity}
                        isConfirmed={checkoutConfirmation}
                        isWaitingPayment={isWaitingPayment}
                        onBackToDashboard={this.handleBackToDashBoard.bind(this)}
                        onPaymentConfirmation={this.handlePaymentConfirmation.bind(this)}
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
        checkoutErrorMsg: checkout.checkoutErrorMsg,
    };
};

export default connect(
    mapStateToProps,
    { checkAuth, buyQueries, backToDashboard, resetCheckoutErrors },
)(CheckoutPage);
