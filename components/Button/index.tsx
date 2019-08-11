import { ReactElement } from 'react';
import { styles } from './styles';

interface Props {
    label: string;
    type: ButtonType;
    onClick: Function;
}

enum ButtonType {
    PRIMARY = 'button--primary',
    PRIMARY_ALT = 'button--primary-alt',
}

const Button = ({ label, type, onClick }: Props): ReactElement => {
    return (
        <button onClick={(): void => onClick()} className={`button ${type}`}>
            {label}
            <style jsx>{styles}</style>
        </button>
    );
};

Button.types = ButtonType;

export default Button;
