import css from 'styled-jsx/css';
import { COLOR_PRIMARY } from '../../constants/colors';

const borderSmSize = '4px';
const borderMdSize = '6px';
const borderLgSize = '8px';

const spinnerSmSize = '14px';
const spinnerMdSize = '30px';
const spinnerLgSize = '50px';

export const styles = css`
    .loader {
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
    }

    .loader__spinner {
        border: ${borderLgSize} solid rgba(0, 0, 0, 0.1);
        border-left-color: ${COLOR_PRIMARY};
        border-radius: 50%;
        width: ${spinnerLgSize};
        height: ${spinnerLgSize};
        animation: spin 1s linear infinite;
    }

    .loader__spinner--sm {
        border: ${borderSmSize} solid rgba(0, 0, 0, 0.1);
        border-left-color: ${COLOR_PRIMARY};
        width: ${spinnerSmSize};
        height: ${spinnerSmSize};
    }

    .loader__spinner--md {
        border: ${borderMdSize} solid rgba(0, 0, 0, 0.1);
        border-left-color: ${COLOR_PRIMARY};
        width: ${spinnerMdSize};
        height: ${spinnerMdSize};
    }

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
`;
