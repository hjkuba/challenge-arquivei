import css from 'styled-jsx/css';
import { SIZE_TITLE, SIZE_HERO } from '../../constants/typography';
import { COLOR_DARK, COLOR_GREY_100 } from '../../constants/colors';

export const styles = css`
    .profile-partial {
        padding: 30px;
        display: flex;
        flex: 1;
        flex-direction: column;
    }

    .profile-partial__title {
        font-size: ${SIZE_TITLE};
        font-weight: bold;
        margin-top: 0;
        color: ${COLOR_DARK};
    }

    .profile-partial__divider {
        border-color: ${COLOR_GREY_100};
        width: 100%;
    }

    .profile-partial__balance {
        font-size: ${SIZE_TITLE};
        font-weight: bold;
        color: ${COLOR_DARK};
    }

    .profile-partial__query-quantity {
        font-size: ${SIZE_HERO};
        color: white;
        font-weight: bold;
        margin: 0 0 10px 0;
    }

    .profile-partial__query-label {
        font-size: ${SIZE_TITLE};
        color: white;
        font-weight: bold;
        margin: 0;
    }

    .profile-partial__logout {
        align-self: flex-end;
    }

    .profile-partial > :global(.label-text) {
        margin-bottom: 10px;
    }

    .profile-partial > :global(.highlight-box) {
        margin-bottom: 18px;
    }
`;
