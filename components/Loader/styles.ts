import css from 'styled-jsx/css';
import { COLOR_PRIMARY } from '../../constants/colors';

export const styles = css`
    .loader {
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
    }

    .loader__spinner {
        border: 8px solid rgba(0, 0, 0, 0.1);
        border-left-color: ${COLOR_PRIMARY};
        border-radius: 50%;
        width: 50px;
        height: 50px;
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
`;
