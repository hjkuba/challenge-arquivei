import css from 'styled-jsx/css';
import { SIZE_TITLE, SIZE_CTA } from '../../constants/typography';
import { COLOR_DARK, COLOR_GREY_100 } from '../../constants/colors';

export const styles = css`
    .purchase-template {
        flex: 4;
        padding: 30px;
    }

    .purchase-template__title {
        font-size: ${SIZE_TITLE};
        font-weight: bold;
        margin-top: 0;
        color: ${COLOR_DARK};
    }

    .purchase-template__content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .purchase-template__purchase-section {
        flex: 1;
        margin-right: 60px;
    }

    .purchase-template__purchase-section > :global(.purchase-summary-table) {
        margin: 24px 0;
    }

    .purchase-template__purchase-section > :global(.input) {
        margin-bottom: 24px;
    }

    .purchase-template__purchase-section > :global(.button) {
        margin-top: 24px;
    }

    .purchase-template__divider {
        margin: 0;
        border-color: ${COLOR_GREY_100};
    }

    .purchase-template__offer-section {
        flex: 1;
    }

    .purchase-template__offer-text {
        color: ${COLOR_DARK};
        margin: 0 0 6px 0;
        font-size: ${SIZE_TITLE};
    }

    .purchase-template__offer-value {
        font-weight: bold;
    }

    .purchase-template__offer-secondary-text {
        font-size: ${SIZE_CTA};
        color: ${COLOR_DARK};
        margin: 6px 0 0 0;
    }
`;
