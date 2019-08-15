import css from 'styled-jsx/css';
import { SIZE_CTA } from '../../constants/typography';
import {
    COLOR_ERROR,
    COLOR_ERROR_LIGHT,
    COLOR_SUCCESS,
    COLOR_ALERT,
    COLOR_SUCCESS_LIGHT,
    COLOR_ALERT_LIGHT,
} from '../../constants/colors';

export const styles = css`
    .alert {
        font-size: ${SIZE_CTA};
        margin: 0;
        padding: 6px 14px;
        border: 1px solid;
        border-radius: 6px;
    }

    .alert--success {
        color: ${COLOR_SUCCESS};
        border-color: ${COLOR_SUCCESS};
        background-color: ${COLOR_SUCCESS_LIGHT};
    }

    .alert--alert {
        color: ${COLOR_ALERT};
        border-color: ${COLOR_ALERT};
        background-color: ${COLOR_ALERT_LIGHT};
    }

    .alert--error {
        color: ${COLOR_ERROR};
        border-color: ${COLOR_ERROR};
        background-color: ${COLOR_ERROR_LIGHT};
    }
`;
