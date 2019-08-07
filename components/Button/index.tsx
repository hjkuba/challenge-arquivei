import { ReactElement } from 'react';
import { styles } from './styles';

interface Props {
    label: string;
    type: ButtonType;
}

export enum ButtonType {
    PRIMARY = 'button--primary',
    PRIMARY_ALT = 'button--primary-alt',
}

const Button = ({ label, type }: Props): ReactElement => {
    return (
        <button className={`button ${type}`}>
            {label}
            <style jsx>{styles}</style>
        </button>
    );
};

export default Button;
