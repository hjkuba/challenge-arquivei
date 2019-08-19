import { ReactElement, Component } from 'react';
import { connect } from 'react-redux';
import { signinUser, resetSigninErrors } from '../actions/auth-actions';
import { StoreState } from '../reducers';
import SigninView from '../views/SigninView';
import Layout from '../components/Layout';
import { Credentials } from '../types';

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
        const { signinErrorMsg, isWaitingSignin } = this.props;
        return (
            <Layout>
                <SigninView
                    signinErrorMsg={signinErrorMsg}
                    isWaitingSignin={isWaitingSignin}
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
