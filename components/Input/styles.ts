import css from 'styled-jsx/css';
import { SIZE_CTA } from '../../constants/typography';
import { COLOR_GREY_100, COLOR_DARK } from '../../constants/colors';

export const styles = css`
    .input {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .input__label {
        margin-bottom: 4px;
        font-size: ${SIZE_CTA};
        font-weight: bold;
        color: ${COLOR_DARK};
    }

    .input__input-field {
        height: 40px;
        padding: 0 32px;
        font-size: ${SIZE_CTA};
        border-radius: 20px;
        border: none;
        color: ${COLOR_DARK};
        background-color: ${COLOR_GREY_100};
    }
`;
