import css from 'styled-jsx/css';
import { COLOR_DARK, COLOR_PRIMARY } from '../../constants/colors';
import { SIZE_TITLE, SIZE_BODY } from '../../constants/typography';

export const styles = css`
    .purchase-summary-table__title {
        font-size: ${SIZE_TITLE};
        font-weight: bold;
        margin: 0 0 24px 0;
        color: ${COLOR_DARK};
    }

    .purchase-summary-table__table {
        margin-bottom: 40px;
    }

    .purchase-summary-table__thead {
        font-size: ${SIZE_BODY};
        color: ${COLOR_PRIMARY};
        text-align: left;
    }

    .purchase-summary-table__thead th {
        padding: 6px 40px 6px 0;
    }

    .purchase-summary-table__tbody {
        color: ${COLOR_DARK};
        text-align: left;
    }

    .purchase-summary-table__tbody td {
        padding: 6px 0 6px 0;
    }

    .purchase-summary-table__total-thead {
        font-size: ${SIZE_TITLE};
        color: ${COLOR_PRIMARY};
        text-align: left;
    }

    .purchase-summary-table__total-tbody {
        font-size: ${SIZE_TITLE};
        font-weight: bold;
        color: ${COLOR_DARK};
        text-align: left;
    }

    .purchase-summary-table__total-thead th {
        padding: 6px 24px 6px 0;
    }

    .purchase-summary-table__total-tbody td {
        padding: 6px 24px 6px 0;
    }
`;
