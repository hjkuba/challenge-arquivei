import css from 'styled-jsx/css';

export const styles = css`
    .signin-form {
        margin-top: 24px;
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .signin-form > :global(.input) {
        margin-bottom: 14px;
    }

    .signin-form > :global(.button) {
        margin-top: 14px;
    }
`;
