import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        console.log("VIBES GETTING INITIAL PROPS");
        // initialize server sheet
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                // create callback for rendering app
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        // something to collect styoles?
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        console.log("RENDERING");
        return (
            <Html>
                <Head />
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}
