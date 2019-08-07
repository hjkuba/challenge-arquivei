import css from 'styled-jsx/css';
import { SIZE_CTA, SIZE_BODY, LINE_HEIGHT_BODY } from '../../constants/typography';
import { COLOR_DARK, COLOR_GREY_400 } from '../../constants/colors';

export const styles = css`
    .label-text__label {
        font-size: ${SIZE_CTA};
        font-weight: bold;
        color: ${COLOR_DARK};
        display: block;
        margin-bottom: 2px;
    }
    .label-text__text {
        font-size: ${SIZE_BODY};
        line-height: ${LINE_HEIGHT_BODY};
        color: ${COLOR_GREY_400};
        margin: 0;
    }
`;
