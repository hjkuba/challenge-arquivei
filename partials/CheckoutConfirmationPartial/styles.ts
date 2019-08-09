import css from 'styled-jsx/css';
import { SIZE_TITLE, SIZE_BODY } from '../../constants/typography';
import { COLOR_DARK } from '../../constants/colors';
import { SCREEN_LG_MAX_WIDTH, SCREEN_SM_MAX_WIDTH, SCREEN_XS_MAX_WIDTH } from '../../constants/sizes';

export const styles = css`
    .checkout-confirmation-partial {
        display: flex;
        width: 33%;
        flex-direction: column;
        align-items: center;
    }

    .checkout-confirmation-partial__msg {
        font-size: ${SIZE_TITLE};
        color: ${COLOR_DARK};
        text-align: center;
        margin-bottom: 40px;
    }

    @media (max-width: ${SCREEN_LG_MAX_WIDTH}) {
        .checkout-confirmation-partial {
            width: 50%;
        }
    }

    @media (max-width: ${SCREEN_SM_MAX_WIDTH}) {
        .checkout-confirmation-partial {
            width: 80%;
        }
    }

    @media (max-width: ${SCREEN_XS_MAX_WIDTH}) {
        .checkout-confirmation-partial {
            width: 90%;
        }

        .checkout-confirmation-partial__msg {
            font-size: ${SIZE_BODY};
            margin-bottom: 100px;
        }
    }
`;
