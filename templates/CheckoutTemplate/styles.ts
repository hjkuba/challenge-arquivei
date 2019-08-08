import css from 'styled-jsx/css';
import { SIZE_TITLE, SIZE_BODY } from '../../constants/typography';
import { COLOR_DARK, COLOR_PRIMARY, COLOR_GREY_100 } from '../../constants/colors';

export const styles = css`
    .checkout-template {
        display: flex;
        width: 20%;
        flex-direction: column;
        align-items: center;
    }

    .checkout-template__purchase-confirmation {
        font-size: ${SIZE_TITLE};
        color: ${COLOR_DARK};
        text-align: center;
        margin-bottom: 40px;
    }

    .checkout-template__title {
        font-size: ${SIZE_TITLE};
        font-weight: bold;
        margin-top: 0;
        color: ${COLOR_DARK};
        width: 100%;
        text-align: center;
    }

    .checkout-template__summary {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }

    .checkout-template__summary-info {
        text-align: left;
    }

    .checkout-template__summary-title {
        color: ${COLOR_PRIMARY};
        font-size: ${SIZE_BODY};
        text-align: right;
    }

    .checkout-template__divider {
        margin: 0;
        width: 100%;
        border-color: ${COLOR_GREY_100};
    }

    .checkout-template__credit-card-form {
        margin-top: 24px;
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .checkout-template__credit-card-form > :global(.input) {
        margin-bottom: 14px;
    }

    .checkout-template__credit-card-form > :global(.button) {
        margin-top: 14px;
    }

    .checkout-template__cvv-expiration-container {
        display: flex;
        flex-direction: row;
        margin-bottom: 14px;
    }

    .checkout-template__cvv-expiration-container > :global(.input:first-child) {
        margin-right: 10px;
    }
`;
