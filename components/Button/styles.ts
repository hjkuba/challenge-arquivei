import css from 'styled-jsx/css';
import { COLOR_PRIMARY, COLOR_SUCCESS, COLOR_ALERT, COLOR_ERROR } from '../../constants/colors';

export const styles = css`
    .button {
        height: 40px;
        padding: 0 32px;
    }

    .button--primary {
        background-color: ${COLOR_PRIMARY};
    }

    .button--primary-alt {
        background-color: ${COLOR_SUCCESS};
    }
`;
