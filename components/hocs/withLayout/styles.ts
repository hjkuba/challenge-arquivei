import css from 'styled-jsx/css';
import { COLOR_PRIMARY } from '../../../constants/colors';
import { SIZE_HERO } from '../../../constants/typography';

export const styles = css`
    .layout__title {
        margin: 0;
        padding: 24px 0 24px 0;
        font-size: ${SIZE_HERO};
        font-weight: bold;
        text-align: center;
        color: ${COLOR_PRIMARY};
    }
`;
