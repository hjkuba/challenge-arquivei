import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ReactElement } from 'react';
import { FONT_FAMILY } from '../constants/typography';

class MyDocument extends Document {
    public render(): ReactElement {
        return (
            <Html>
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Roboto|Rubik&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
                <style jsx>{`
                    body {
                        font-family: ${FONT_FAMILY};
                        margin: 0;
                    }
                `}</style>
            </Html>
        );
    }
}

export default MyDocument;
