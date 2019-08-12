import css from 'styled-jsx/css';
import { SIZE_TITLE, SIZE_BODY } from '../../constants/typography';
import { COLOR_DARK, COLOR_PRIMARY } from '../../constants/colors';
import { SCREEN_LG_MAX_WIDTH, SCREEN_SM_MAX_WIDTH, SCREEN_XS_MAX_WIDTH } from '../../constants/sizes';

export const styles = css`
    .signup-partial {
        display: flex;
        width: 33%;
        flex-direction: column;
        align-items: center;
    }

    .signup-partial__title {
        font-size: ${SIZE_TITLE};
        font-weight: bold;
        margin: 0 0 24px 0;
        color: ${COLOR_DARK};
        width: 100%;
        text-align: center;
    }

    .signup-partial__signup-link {
        color: ${COLOR_PRIMARY};
        text-transform: uppercase;
        font-weight: bold;
        text-decoration: none;
        font-size: ${SIZE_BODY};
        margin-top: 16px;
    }

    @media (max-width: ${SCREEN_LG_MAX_WIDTH}) {
        .signup-partial {
            width: 50%;
        }
    }

    @media (max-width: ${SCREEN_SM_MAX_WIDTH}) {
        .signup-partial {
            width: 80%;
        }
    }

    @media (max-width: ${SCREEN_XS_MAX_WIDTH}) {
        .signup-partial {
            width: 90%;
        }

        .signup-partial__title {
            font-size: ${SIZE_BODY};
        }
    }
`;
