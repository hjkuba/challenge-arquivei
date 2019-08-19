import MaskedInput from 'react-text-mask';
import { ReactElement } from 'react';
import { styles } from './styles';

interface Props {
    name: string;
    type: InputType;
    label?: string;
    value?: string | number;
    mask?: MaskType;
    warningMsg?: string;
    onChange: Function;
}

enum InputType {
    TEXT = 'text',
    NUMBER = 'number',
    EMAIL = 'email',
    PASSWORD = 'password',
    MASKED = 'masked',
}

enum MaskType {
    CNPJ = 'cnpj',
    CREDIT_CARD = 'creditCard',
    CVV = 'cvv',
    EXPIRATION_DATE = 'expirationDate',
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
    cvv: [/\d/, /\d/, /\d/],
    expirationDate: [/[0-1]/, /\d/, '/', /2/, /\d/, /\d/, /\d/],
};

const Input = ({ name, type, label, value, mask, warningMsg, onChange }: Props): ReactElement => {
    const renderMaskedInput = (): ReactElement => {
        return (
            <MaskedInput
                mask={mask ? masks[mask] : []}
                onChange={(e): void => onChange(e)}
                name={name}
                value={value}
                className="input__input-field input__masked-input"
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
            <span className="input__warning">{warningMsg ? warningMsg : ''}</span>
            <style jsx>{styles}</style>
        </div>
    );
};

Input.types = InputType;
Input.masks = MaskType;

export default Input;
