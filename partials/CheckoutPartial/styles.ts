import css from 'styled-jsx/css';
import { SIZE_TITLE, SIZE_BODY, SIZE_CTA } from '../../constants/typography';
import { COLOR_DARK, COLOR_PRIMARY, COLOR_GREY_100, COLOR_GREY_400 } from '../../constants/colors';
import { SCREEN_LG_MAX_WIDTH, SCREEN_SM_MAX_WIDTH, SCREEN_XS_MAX_WIDTH } from '../../constants/sizes';

export const styles = css`
    .checkout-partial {
        display: flex;
        width: 33%;
        flex-direction: column;
        align-items: center;
    }

    .checkout-partial__title {
        font-size: ${SIZE_TITLE};
        font-weight: bold;
        margin: 0 0 24px 0;
        color: ${COLOR_DARK};
        width: 100%;
        text-align: center;
    }

    .checkout-partial__summary {
        display: flex;
        width: 100%;
        justify-content: flex-end;
    }

    .checkout-partial__summary-info {
        text-align: right;
        margin: 10px 0 10px 24px;
    }

    .checkout-partial__summary-title {
        color: ${COLOR_PRIMARY};
        font-size: ${SIZE_BODY};
        margin: 0;
    }

    .checkout-partial__summary-value {
        color: ${COLOR_GREY_400};
        font-size: ${SIZE_BODY};
        margin: 0;
    }

    .checkout-partial__divider {
        margin: 0;
        width: 100%;
        border-color: ${COLOR_GREY_100};
    }

    .checkout-partial__credit-card-form {
        margin-top: 24px;
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .checkout-partial__credit-card-form > :global(.input) {
        margin-bottom: 14px;
    }

    .checkout-partial__credit-card-form > :global(.button) {
        margin-top: 14px;
    }

    .checkout-partial__cvv-expiration-container {
        display: flex;
        flex-direction: row;
        margin-bottom: 14px;
    }

    .checkout-partial__cvv-expiration-container > :global(.input) {
        flex: 1;
    }

    .checkout-partial__cvv-expiration-container > :global(.input:first-child) {
        margin-right: 10px;
    }

    @media (max-width: ${SCREEN_LG_MAX_WIDTH}) {
        .checkout-partial {
            width: 50%;
        }
    }

    @media (max-width: ${SCREEN_SM_MAX_WIDTH}) {
        .checkout-partial {
            width: 80%;
        }
    }

    @media (max-width: ${SCREEN_XS_MAX_WIDTH}) {
        .checkout-partial {
            width: 90%;
        }

        .checkout-partial__title {
            font-size: ${SIZE_BODY};
        }

        .checkout-partial__summary-title {
            font-size: ${SIZE_CTA};
        }

        .checkout-partial__summary-value {
            font-size: ${SIZE_CTA};
        }
    }
`;
