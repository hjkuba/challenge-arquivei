import { ReactElement, Component } from 'react';
import Layout from '../components/Layout';
import HomeView from '../views/HomeView';
import { connect } from 'react-redux';
import { NextPageContext } from 'next';
import { Company } from '../types';

interface ActionProps {
    signinUser: Function;
}

interface StateProps {
    company: Company;
}

class HomePage extends Component<ActionProps & StateProps> {
    public constructor(props: ActionProps & StateProps) {
        super(props);
    }

    public static async getInitialProps(ctx: NextPageContext): Promise<StateProps> {
        return new Promise((resolve, reject): void => {
            if (!ctx) {
                reject();
            }

            setTimeout((): void => {
                console.log('Initial props finished!');
                console.log(ctx);
                resolve({
                    company: {
                        email: 'boom@boom.com',
                        tradingName: 'Boom!',
                        companyName: 'Fred & John Atomic Bombs LTDA',
                        cnpj: '24.453.454/100-55',
                        currentQueries: 12,
                        totalQueries: 45,
                    },
                });
            }, 1000);
        });
    }

    public render(): ReactElement {
        return (
            <Layout>
                <HomeView company={this.props.company} />
            </Layout>
        );
    }
}

export default connect(
    null,
    null,
)(HomePage);
