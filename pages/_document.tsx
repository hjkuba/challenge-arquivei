import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ReactElement } from 'react';
import { styles } from './_document-styles';

class MyDocument extends Document {
    public render(): ReactElement {
        return (
            <Html>
                <style jsx>{styles}</style>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
