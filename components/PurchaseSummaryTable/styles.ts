import css from 'styled-jsx/css';
import { COLOR_DARK } from '../../constants/colors';
import { SIZE_TITLE } from '../../constants/typography';

export const styles = css`
    .purchase-summary-table {
    }

    .purchase-summary-table__title {
        font-size: ${SIZE_TITLE};
        font-weight: bold;
        margin: 0 0 24px 0;
        color: ${COLOR_DARK};
    }
`;
