import css from 'styled-jsx/css';
import { SIZE_TITLE, SIZE_HERO, SIZE_LINK } from '../../constants/typography';
import { COLOR_DARK, COLOR_PRIMARY } from '../../constants/colors';

export const styles = css`
    .profile {
        padding: 0 30px;
        display: flex;
        flex-direction: column;
    }

    .profile__title {
        font-size: ${SIZE_TITLE};
        font-weight: bold;
        color: ${COLOR_DARK};
    }

    .profile__divider {
        flex: 1;
        color: ${COLOR_DARK};
        width: 100%;
    }

    .profile__query-quantity {
        font-size: ${SIZE_HERO};
        color: white;
        font-weight: bold;
        margin: 0 0 10px 0;
    }

    .profile__query-label {
        font-size: ${SIZE_TITLE};
        color: white;
        font-weight: bold;
        margin: 0;
    }

    .profile__logout {
        align-self: flex-end;
        color: ${COLOR_PRIMARY};
        font-size: ${SIZE_LINK};
    }

    .profile > :global(.label-text) {
        margin-bottom: 10px;
    }

    .profile > :global(.highlight-box) {
        margin-bottom: 18px;
    }
`;
