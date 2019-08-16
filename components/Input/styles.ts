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
        margin: 0 0 4px 0;
        font-size: ${SIZE_CTA};
        font-weight: bold;
        color: ${COLOR_DARK};
    }

    .input :global(.input__input-field) {
        box-sizing: border-box;
        height: 40px;
        width: 100%;
        font-size: ${SIZE_CTA};
        padding: 0 32px;
        border-radius: 20px;
        border: none;
        color: ${COLOR_DARK};
        background-color: ${COLOR_GREY_100};
    }

    .input :global(.input__input-field:focus) {
        outline: none;
    }
`;
