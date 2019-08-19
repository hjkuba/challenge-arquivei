import { ReactElement, Component } from 'react';
import { connect } from 'react-redux';
import { createUser, resetSignupErrors } from '../actions/user-actions';
import { StoreState } from '../reducers';
import SignupView from '../views/SignupView';
import Layout from '../components/Layout';
import { Company, Credentials } from '../types';

interface ActionProps {
    createUser: Function;
    resetSignupErrors: Function;
}

interface StateProps {
    isWaitingUserCreation: boolean;
    signupErrorMsg: string;
}

class SignupPage extends Component<ActionProps & StateProps> {
    public constructor(props: ActionProps & StateProps) {
        super(props);
    }

    public componentWillUnmount(): void {
        this.props.resetSignupErrors();
    }

    private createUser(credentials: Credentials, company: Company): void {
        this.props.createUser(credentials, company);
    }

    public render(): ReactElement {
        const { signupErrorMsg, isWaitingUserCreation } = this.props;
        return (
            <Layout>
                <SignupView
                    signupErrorMsg={signupErrorMsg}
                    isWaitingUserCreation={isWaitingUserCreation}
                    createUser={this.createUser.bind(this)}
                />
            </Layout>
        );
    }
}

const mapStateToProps = ({ user }: StoreState): StateProps => {
    const { isWaitingUserCreation, signupErrorMsg } = user;
    return {
        isWaitingUserCreation,
        signupErrorMsg,
    };
};

export default connect(
    mapStateToProps,
    { createUser, resetSignupErrors },
)(SignupPage);
