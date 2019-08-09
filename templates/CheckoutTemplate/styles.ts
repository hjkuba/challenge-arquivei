import css from 'styled-jsx/css';
import { SIZE_TITLE, SIZE_BODY, SIZE_CTA } from '../../constants/typography';
import { COLOR_DARK, COLOR_PRIMARY, COLOR_GREY_100, COLOR_GREY_400 } from '../../constants/colors';
import { SCREEN_LG_MAX_WIDTH, SCREEN_SM_MAX_WIDTH, SCREEN_XS_MAX_WIDTH } from '../../constants/sizes';

export const styles = css`
    .checkout-template {
        display: flex;
        width: 33%;
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
        margin: 0 0 24px 0;
        color: ${COLOR_DARK};
        width: 100%;
        text-align: center;
    }

    .checkout-template__summary {
        display: flex;
        width: 100%;
        justify-content: flex-end;
    }

    .checkout-template__summary-info {
        text-align: right;
        margin: 10px 0 10px 24px;
    }

    .checkout-template__summary-title {
        color: ${COLOR_PRIMARY};
        font-size: ${SIZE_BODY};
        margin: 0;
    }

    .checkout-template__summary-value {
        color: ${COLOR_GREY_400};
        font-size: ${SIZE_BODY};
        margin: 0;
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

    .checkout-template__cvv-expiration-container > :global(.input) {
        flex: 1;
    }

    .checkout-template__cvv-expiration-container > :global(.input:first-child) {
        margin-right: 10px;
    }

    @media (max-width: ${SCREEN_LG_MAX_WIDTH}) {
        .checkout-template {
            width: 50%;
        }
    }

    @media (max-width: ${SCREEN_SM_MAX_WIDTH}) {
        .checkout-template {
            width: 80%;
        }
    }

    @media (max-width: ${SCREEN_XS_MAX_WIDTH}) {
        .checkout-template {
            width: 90%;
        }

        .checkout-template__title {
            font-size: ${SIZE_BODY};
        }

        .checkout-template__purchase-confirmation {
            font-size: ${SIZE_BODY};
            margin-bottom: 100px;
        }

        .checkout-template__summary-title {
            font-size: ${SIZE_CTA};
        }

        .checkout-template__summary-value {
            font-size: ${SIZE_CTA};
        }
    }
`;
