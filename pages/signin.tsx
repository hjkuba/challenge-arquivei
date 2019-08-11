import { ReactElement, Component } from 'react';
import Layout from '../components/Layout';
import { signinUser } from '../actions/auth-actions';
import SigninView from '../views/SigninView';
import { connect } from 'react-redux';
import { Credentials } from '../types';

interface ActionProps {
    signinUser: Function;
}

class SigninPage extends Component<ActionProps> {
    public constructor(props: ActionProps) {
        super(props);
    }

    private signInUser(credentials: Credentials): void {
        this.props.signinUser(credentials);
    }

    public render(): ReactElement {
        return (
            <Layout>
                <SigninView signinUser={this.signInUser.bind(this)} />
            </Layout>
        );
    }
}

export default connect(
    null,
    { signinUser },
)(SigninPage);
