import { ReactElement } from 'react';
import { styles } from './styles';

interface Props {
    label?: string;
    type: InputType;
}

enum InputType {
    NUMBER = 'number',
}

const Input = ({ label, type }: Props): ReactElement => {
    return (
        <div className="input">
            {label ? <label className="input__label">{label}</label> : null}
            <input className="input__input-field" type={type} />
            <style jsx>{styles}</style>
        </div>
    );
};

Input.types = InputType;

export default Input;
