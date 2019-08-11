import { ReactElement } from 'react';
import { styles } from './styles';

interface Props {
    label?: string;
    type: InputType;
    onChange: Function;
    value: string;
    name: string;
}

enum InputType {
    NUMBER = 'number',
    TEXT = 'text',
    EMAIL = 'email',
    PASSWORD = 'password',
}

const Input = ({ label, type, onChange, value, name }: Props): ReactElement => {
    return (
        <div className="input">
            {label ? <label className="input__label">{label}</label> : null}
            <input
                onChange={(e): void => onChange(e)}
                name={name}
                value={value}
                className="input__input-field"
                type={type}
            />
            <style jsx>{styles}</style>
        </div>
    );
};

Input.types = InputType;

export default Input;
