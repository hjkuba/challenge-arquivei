import css from 'styled-jsx/css';
import { SCREEN_SM_MAX_WIDTH } from '../../constants/sizes';

export const styles = css`
    .home-view {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
    }

    .home-view__sections {
        display: flex;
        flex-direction: row;
    }

    @media (max-width: ${SCREEN_SM_MAX_WIDTH}) {
        .home-view__sections {
            flex-direction: column;
        }
    }
`;
