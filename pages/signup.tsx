import { ReactElement, Component } from 'react';
import Layout from '../components/Layout';
import SignupView from '../views/SignupView';
import { connect } from 'react-redux';
import { createUser, resetSignupErrors } from '../actions/user-actions';
import { Company, Credentials } from '../types';
import { StoreState } from '../reducers';

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
        return (
            <Layout>
                <SignupView
                    signupErrorMsg={this.props.signupErrorMsg}
                    isWaitingUserCreation={this.props.isWaitingUserCreation}
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
