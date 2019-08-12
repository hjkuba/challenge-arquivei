import { ReactElement, Component, ChangeEvent } from 'react';
import Layout from '../components/Layout';
import HomeView from '../views/HomeView';
import Loader from '../components/Loader';
import { connect } from 'react-redux';
import { Company, Promotion } from '../types';
import { checkAuth, signOut } from '../actions/auth-actions';
import { changeQueryInput, fetchPromotion } from '../actions/purchase-actions';
import { StoreState } from '../reducers';

interface ActionProps {
    checkAuth: Function;
    signOut: Function;
    changeQueryInput: Function;
    fetchPromotion: Function;
}

interface StateProps {
    company: Company | null;
    isLogged: boolean;
    currentQueryQtd: number | string;
    promotion: Promotion;
}

class HomePage extends Component<ActionProps & StateProps> {
    public constructor(props: ActionProps & StateProps) {
        super(props);
    }

    private signOut(): void {
        this.props.signOut();
    }

    private handleQueryInput(event: ChangeEvent<HTMLInputElement>): void {
        this.props.changeQueryInput(event.target.value);
    }

    public componentDidMount(): void {
        this.props.checkAuth();
        this.props.fetchPromotion();
    }

    public render(): ReactElement {
        return (
            <Layout>
                {this.props.isLogged && this.props.company ? (
                    <HomeView
                        onSignout={this.signOut.bind(this)}
                        onQueryQtdChange={this.handleQueryInput.bind(this)}
                        currentQueryQtd={this.props.currentQueryQtd}
                        company={this.props.company}
                        promotion={this.props.promotion}
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
        currentQueryQtd: purchase.currentInputQtd,
        promotion: purchase.promotion,
    };
};

export default connect(
    mapStateToProps,
    { checkAuth, signOut, changeQueryInput, fetchPromotion },
)(HomePage);
