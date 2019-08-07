import { ReactElement } from 'react';
import { styles } from './styles';

interface Props {
    children: ReactElement[];
    type: HighlightBoxType;
}

export enum HighlightBoxType {
    PRIMARY = 'highlight-box--primary',
    SUCCESS = 'highlight-box--success',
    ALERT = 'highlight-box--alert',
    ERROR = 'highlight-box--error',
}

const HighlightBox = ({ children, type }: Props): ReactElement => {
    return (
        <div className={`highlight-box ${type}`}>
            {children}
            <style jsx>{styles}</style>
        </div>
    );
};

export default HighlightBox;
