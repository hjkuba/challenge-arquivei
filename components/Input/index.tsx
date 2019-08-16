import MaskedInput from 'react-text-mask';
import { ReactElement } from 'react';
import { styles } from './styles';

interface Props {
    label?: string;
    type: InputType;
    mask?: MaskType;
    onChange: Function;
    value?: string | number;
    name: string;
}

enum InputType {
    NUMBER = 'number',
    TEXT = 'text',
    EMAIL = 'email',
    PASSWORD = 'password',
    MASKED = 'masked',
}

enum MaskType {
    CNPJ = 'cnpj',
    CREDIT_CARD = 'creditCard',
    DATE = 'date',
}

const masks: Record<string, any> = {
    cnpj: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/],
    creditCard: [
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        ' ',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        ' ',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        ' ',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
    ],
    date: [/[0-3]/, /\d/, '/', /[0-1]/, /\d/, '/', /2/, /\d/, /\d/, /\d/],
};

const Input = ({ label, type, mask, onChange, value, name }: Props): ReactElement => {
    const renderMaskedInput = (): ReactElement => {
        return (
            <MaskedInput
                mask={mask ? masks[mask] : []}
                onChange={(e): void => onChange(e)}
                name={name}
                value={value}
                className="input__input-field"
            />
        );
    };

    return (
        <div className="input">
            {label ? <label className="input__label">{label}</label> : null}
            {type === 'masked' ? (
                renderMaskedInput()
            ) : (
                <input
                    onChange={(e): void => onChange(e)}
                    name={name}
                    value={value}
                    className="input__input-field"
                    type={type}
                />
            )}

            <style jsx>{styles}</style>
        </div>
    );
};

Input.types = InputType;
Input.masks = MaskType;

export default Input;
