import { ReactElement, Component } from 'react';
import Layout from '../components/Layout';
import { signinUser } from '../actions/auth-actions';
import SigninView from '../views/SigninView';
import { connect } from 'react-redux';
import { Credentials } from '../types';
import { StoreState } from '../reducers';

interface ActionProps {
    signinUser: Function;
}

interface StateProps {
    isWaitingSignin: boolean;
}

class SigninPage extends Component<ActionProps & StateProps> {
    public constructor(props: ActionProps & StateProps) {
        super(props);
    }

    private signInUser(credentials: Credentials): void {
        this.props.signinUser(credentials);
    }

    public render(): ReactElement {
        return (
            <Layout>
                <SigninView isWaitingSignin={this.props.isWaitingSignin} signinUser={this.signInUser.bind(this)} />
            </Layout>
        );
    }
}

const mapStateToProps = ({ auth }: StoreState): StateProps => {
    const { isWaitingSignin } = auth;
    return {
        isWaitingSignin,
    };
};

export default connect(
    mapStateToProps,
    { signinUser },
)(SigninPage);
