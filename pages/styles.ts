import css from 'styled-jsx/css';
import { SCREEN_SM_MAX_WIDTH } from '../constants/sizes';

export const styles = css`
    .home {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
    }

    .home__templates-container {
        display: flex;
        flex-direction: row;
    }

    @media (max-width: ${SCREEN_SM_MAX_WIDTH}) {
        .home__templates-container {
            flex-direction: column;
        }
    }
`;
