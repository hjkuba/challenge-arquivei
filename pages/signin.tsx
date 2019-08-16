import { ReactElement, Component } from 'react';
import Layout from '../components/Layout';
import { signinUser, resetSigninErrors } from '../actions/auth-actions';
import SigninView from '../views/SigninView';
import { connect } from 'react-redux';
import { Credentials } from '../types';
import { StoreState } from '../reducers';

interface ActionProps {
    signinUser: Function;
    resetSigninErrors: Function;
}

interface StateProps {
    isWaitingSignin: boolean;
    signinErrorMsg: string;
}

class SigninPage extends Component<ActionProps & StateProps> {
    public constructor(props: ActionProps & StateProps) {
        super(props);
    }

    public componentWillUnmount(): void {
        this.props.resetSigninErrors();
    }

    private signInUser(credentials: Credentials): void {
        this.props.signinUser(credentials);
    }

    public render(): ReactElement {
        return (
            <Layout>
                <SigninView
                    signinErrorMsg={this.props.signinErrorMsg}
                    isWaitingSignin={this.props.isWaitingSignin}
                    signinUser={this.signInUser.bind(this)}
                />
            </Layout>
        );
    }
}

const mapStateToProps = ({ auth }: StoreState): StateProps => {
    const { isWaitingSignin, signinErrorMsg } = auth;
    return {
        isWaitingSignin,
        signinErrorMsg,
    };
};

export default connect(
    mapStateToProps,
    { signinUser, resetSigninErrors },
)(SigninPage);
