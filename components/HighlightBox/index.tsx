import { ReactElement } from 'react';
import { styles } from './styles';

interface Props {
    children: ReactElement | ReactElement[];
    type: HighlightBoxType;
    alignment: HighlightBoxAlignment;
}

enum HighlightBoxType {
    PRIMARY = 'highlight-box--primary',
    SUCCESS = 'highlight-box--success',
    ALERT = 'highlight-box--alert',
    ERROR = 'highlight-box--error',
    GREY_100 = 'highlight-box--grey-100',
}

enum HighlightBoxAlignment {
    LEFT = 'highlight-box--left',
    CENTER = 'highlight-box--center',
    RIGHT = 'highlight-box--right',
}

const HighlightBox = ({ children, type, alignment }: Props): ReactElement => {
    return (
        <div className={`highlight-box ${type} ${alignment}`}>
            {children}
            <style jsx>{styles}</style>
        </div>
    );
};

HighlightBox.types = HighlightBoxType;
HighlightBox.alignment = HighlightBoxAlignment;

export default HighlightBox;
