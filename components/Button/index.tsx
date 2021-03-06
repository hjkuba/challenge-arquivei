import { ReactElement } from 'react';
import { styles } from './styles';

interface Props {
    label: string;
    type: ButtonType;
    disabled?: boolean;
    onClick: Function;
}

enum ButtonType {
    PRIMARY = 'button--primary',
    PRIMARY_ALT = 'button--primary-alt',
}

const Button = ({ label, type, disabled = false, onClick }: Props): ReactElement => {
    const buttonDisabledClass = disabled ? 'button--disabled' : '';

    return (
        <button onClick={(): void => onClick()} className={`button ${type} ${buttonDisabledClass}`} disabled={disabled}>
            {label}
            <style jsx>{styles}</style>
        </button>
    );
};

Button.types = ButtonType;

export default Button;
