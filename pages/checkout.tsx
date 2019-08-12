import { ReactElement, Component } from 'react';
import Layout from '../components/Layout';
import CheckoutView from '../views/CheckoutView';
import { connect } from 'react-redux';
import { StoreState } from '../reducers';
import { checkAuth } from '../actions/auth-actions';
import Loader from '../components/Loader';

interface ActionProps {
    checkAuth: Function;
}

interface StateProps {
    isLogged: boolean;
}

class CheckoutPage extends Component<ActionProps & StateProps> {
    public constructor(props: ActionProps & StateProps) {
        super(props);
    }

    public componentDidMount(): void {
        this.props.checkAuth();
    }

    public render(): ReactElement {
        return <Layout>{this.props.isLogged ? <CheckoutView isConfirmed={true} /> : <Loader />}</Layout>;
    }
}

const mapStateToProps = ({ auth }: StoreState): StateProps => {
    return {
        isLogged: auth.isLogged,
    };
};

export default connect(
    mapStateToProps,
    { checkAuth },
)(CheckoutPage);
