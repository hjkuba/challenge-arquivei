import css from 'styled-jsx/css';
import { COLOR_PRIMARY, COLOR_SUCCESS, COLOR_ALERT, COLOR_ERROR } from '../../constants/colors';

export const styles = css`
    .highlight-box {
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 40px;
        border-radius: 8px;
    }

    .highlight-box--primary {
        background-color: ${COLOR_PRIMARY};
    }

    .highlight-box--success {
        background-color: ${COLOR_SUCCESS};
    }

    .highlight-box--alert {
        background-color: ${COLOR_ALERT};
    }

    .highlight-box--error {
        background-color: ${COLOR_ERROR};
    }
`;
