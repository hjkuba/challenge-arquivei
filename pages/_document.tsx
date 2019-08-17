import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ReactElement } from 'react';
import { styles } from './_document-styles';

class MyDocument extends Document {
    public render(): ReactElement {
        return (
            <Html>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
                <style jsx>{styles}</style>
            </Html>
        );
    }
}

export default MyDocument;
