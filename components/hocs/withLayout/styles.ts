import css from 'styled-jsx/css';
import { COLOR_PRIMARY } from '../../../constants/colors';
import { SIZE_HERO } from '../../../constants/typography';
import { SCREEN_SM_MAX_WIDTH } from '../../../constants/sizes';

export const styles = css`
    .layout {
        display: flex;
        flex-direction: column;
        max-width: 1200px;
        margin: 0 auto;
        height: 100vh;
    }

    .layout__title {
        margin: 24px 16px;
        font-size: ${SIZE_HERO};
        font-weight: bold;
        text-align: center;
        color: ${COLOR_PRIMARY};
    }

    @media (max-width: ${SCREEN_SM_MAX_WIDTH}) {
        .layout__title {
            font-size: 2.1rem;
        }
    }
`;
