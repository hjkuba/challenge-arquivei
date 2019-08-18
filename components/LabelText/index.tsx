import { ReactElement } from 'react';
import { styles } from './styles';

interface Props {
    label: string;
    children: string;
}

const LabelText = ({ label, children }: Props): ReactElement => {
    return (
        <div className="label-text">
            <span className="label-text__label">{label}</span>
            <p className="label-text__text">{children}</p>
            <style jsx>{styles}</style>
        </div>
    );
};

export default LabelText;
