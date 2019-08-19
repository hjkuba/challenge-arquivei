import App, { Container } from 'next/app';
import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import withReduxStore from '../lib/with-redux-store';

class MyApp extends App {
    public render(): ReactElement {
        const { Component, pageProps, reduxStore }: any = this.props;

        return (
            <Container>
                <Provider store={reduxStore}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        );
    }
}

export default withReduxStore(MyApp);
