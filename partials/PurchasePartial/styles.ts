import css from 'styled-jsx/css';
import { SIZE_TITLE, SIZE_CTA, SIZE_BODY } from '../../constants/typography';
import { COLOR_DARK, COLOR_GREY_100 } from '../../constants/colors';
import { SCREEN_MD_MAX_WIDTH } from '../../constants/sizes';

export const styles = css`
    .purchase-partial {
        flex: 4;
        padding: 30px;
    }

    .purchase-partial__title {
        font-size: ${SIZE_TITLE};
        font-weight: bold;
        margin-top: 0;
        color: ${COLOR_DARK};
    }

    .purchase-partial__content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap-reverse;
    }

    .purchase-partial__purchase-section {
        flex: 3;
        display: flex;
        flex-direction: column;
        margin-right: 60px;
    }

    .purchase-partial__input-container {
        width: 260px;
        margin-bottom: 20px;
    }

    .purchase-partial__button-container {
        margin-top: 24px;
        align-self: flex-end;
    }

    .purchase-partial__purchase-section > :global(.purchase-summary-table) {
        margin: 24px 0;
    }

    .purchase-partial__divider {
        margin: 0;
        border-color: ${COLOR_GREY_100};
    }

    .purchase-partial__offer-section {
        flex: 2;
    }

    .purchase-partial__offer-text {
        color: ${COLOR_DARK};
        margin: 0 0 8px 0;
        font-size: ${SIZE_BODY};
    }

    .purchase-partial__offer-value {
        font-weight: bold;
    }

    .purchase-partial__offer-secondary-text {
        font-size: ${SIZE_CTA};
        color: ${COLOR_DARK};
        margin: 6px 0 0 0;
    }

    @media (max-width: ${SCREEN_MD_MAX_WIDTH}) {
        .purchase-partial__content {
            flex-direction: column-reverse;
        }

        .purchase-partial__purchase-section {
            margin-right: 0;
        }

        .purchase-partial__offer-section {
            margin-bottom: 30px;
        }
    }
`;
