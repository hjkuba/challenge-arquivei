import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ReactElement } from 'react';
import { styles } from './_document-styles';

class MyDocument extends Document {
    public render(): ReactElement {
        return (
            <Html>
                <Head />
                <body>
                    <style jsx>{styles}</style>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
