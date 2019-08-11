import { ReactElement, Component } from 'react';
import Layout from '../components/Layout';
import SignupView from '../views/SignupView';
import { connect } from 'react-redux';
import { createCompany } from '../actions/auth-actions';
import { Company, Credentials } from '../types';

interface ActionProps {
    createCompany: Function;
}

class SignupPage extends Component<ActionProps> {
    public constructor(props: ActionProps) {
        super(props);
    }

    private createCompany(credentials: Credentials, company: Company): void {
        this.props.createCompany(credentials, company);
    }

    public render(): ReactElement {
        return (
            <Layout>
                <SignupView createCompany={this.createCompany.bind(this)} />
            </Layout>
        );
    }
}

export default connect(
    null,
    { createCompany },
)(SignupPage);
