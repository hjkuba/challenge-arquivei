import css from 'styled-jsx/css';

export const styles = css`
    .checkout-form {
        margin-top: 24px;
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .checkout-form > :global(.input) {
        margin-bottom: 14px;
    }

    .checkout-form > :global(.button) {
        margin-top: 14px;
    }

    .checkout-form > :global(.alert) {
        margin-bottom: 16px;
    }

    .checkout-form__cvv-expiration-container {
        display: flex;
        flex-direction: row;
        margin-bottom: 14px;
    }

    .checkout-form__cvv-expiration-container > :global(.input) {
        flex: 1;
    }

    .checkout-form__cvv-expiration-container > :global(.input:first-child) {
        margin-right: 10px;
    }
`;
