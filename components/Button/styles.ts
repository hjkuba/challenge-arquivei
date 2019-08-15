import css from 'styled-jsx/css';
import { COLOR_PRIMARY, COLOR_GREY_100 } from '../../constants/colors';
import { SIZE_CTA } from '../../constants/typography';

const primaryStyles = `
    color: white;
    background-color: ${COLOR_PRIMARY};
`;

const primaryAltStyles = `
    color: ${COLOR_PRIMARY};
    background-color: transparent;
    border: 2px solid ${COLOR_PRIMARY};
`;

export const styles = css`
    .button {
        height: 40px;
        padding: 0 32px;
        font-size: ${SIZE_CTA};
        font-weight: bold;
        text-transform: uppercase;
        border-radius: 20px;
        border: none;
        cursor: pointer;
    }

    .button:focus {
        outline: none;
    }

    .button--primary {
        ${primaryStyles}
    }

    .button--primary:active {
        ${primaryAltStyles}
    }

    .button--primary-alt {
        ${primaryAltStyles}
    }

    .button--primary-alt:active {
        ${primaryStyles}
    }

    .button--disabled {
        background-color: ${COLOR_GREY_100};
        color: white;
    }
`;
