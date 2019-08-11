import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import storeManager from '../store';

class MyApp extends App {
    public render(): ReactElement {
        const { Component, pageProps } = this.props;

        return (
            <Container>
                <Provider store={storeManager.store}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        );
    }
}

export default MyApp;
