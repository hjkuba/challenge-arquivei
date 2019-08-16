import { ReactElement, Component } from 'react';
import Layout from '../components/Layout';
import SignupView from '../views/SignupView';
import { connect } from 'react-redux';
import { createCompany, resetSignupErrors } from '../actions/user-actions';
import { Company, Credentials } from '../types';
import { StoreState } from '../reducers';

interface ActionProps {
    createCompany: Function;
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

    private createCompany(credentials: Credentials, company: Company): void {
        this.props.createCompany(credentials, company);
    }

    public render(): ReactElement {
        return (
            <Layout>
                <SignupView
                    signupErrorMsg={this.props.signupErrorMsg}
                    isWaitingUserCreation={this.props.isWaitingUserCreation}
                    createCompany={this.createCompany.bind(this)}
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
    { createCompany, resetSignupErrors },
)(SignupPage);
