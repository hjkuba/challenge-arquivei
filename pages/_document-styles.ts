import css from 'styled-jsx/css';

export const styles = css`
    @font-face {
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: local('Rubik Light'), local('Rubik-Light'), url(/static/fonts/rubik-light.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074,
            U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    @font-face {
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local('Rubik'), local('Rubik-Regular'), url(/static/fonts/rubik-regular.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074,
            U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    @font-face {
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: local('Rubik Medium'), local('Rubik-Medium'), url(/static/fonts/rubik-medium.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074,
            U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    @font-face {
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: local('Rubik Bold'), local('Rubik-Bold'), url(/static/fonts/rubik-bold.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074,
            U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    @font-face {
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 900;
        font-display: swap;
        src: local('Rubik Black'), local('Rubik-Black'), url(/static/fonts/rubik-black.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074,
            U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    body {
        font-family: Rubik, sans-serif;
        margin: 0;
    }
`;
