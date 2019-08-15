import css from 'styled-jsx/css';

export const styles = css`
    .signup-form {
        margin-top: 24px;
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .signup-form > :global(.input) {
        margin-bottom: 14px;
    }

    .signup-form > :global(.button) {
        margin-top: 14px;
    }

    .signup-form > :global(.alert) {
        margin-bottom: 16px;
    }
`;
