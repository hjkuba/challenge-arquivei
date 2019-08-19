import { ReactElement, useState, ChangeEvent } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Loader from '../../components/Loader';
import Alert from '../../components/Alert';
import validate, {
    validateCNPJ,
    validateCreditCardPattern,
    validateFilledText,
    validateLuhnAlg,
    validateExpirationDate,
    validateCVV,
} from '../../helpers/validators';
import { styles } from './styles';

interface Props {
    queryQuantity: number;
    errorMsg: string;
    isLoading: boolean;
    onSubmit: Function;
}

const CheckoutForm = ({ queryQuantity, errorMsg, isLoading, onSubmit }: Props): ReactElement => {
    const initialValidationState = {
        cnpj: '',
        name: '',
        creditCard: '',
        expirationDate: '',
        cvv: '',
    };

    const [form, setForm] = useState({
        cnpj: '',
        name: '',
        creditCard: '',
        expirationDate: '',
        cvv: '',
    });

    const [validationErrors, setValidationErrors] = useState(initialValidationState);

    const validationRules: Record<string, Function[]> = {
        cnpj: [validateCNPJ],
        name: [validateFilledText],
        creditCard: [validateCreditCardPattern, validateLuhnAlg],
        expirationDate: [validateExpirationDate],
        cvv: [validateCVV],
    };

    function handleChange(event: ChangeEvent<HTMLInputElement>): void {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    }

    function handleSubmit(): void {
        const validationResults = validate(form, validationRules);

        if (!validationResults.isValid) {
            setValidationErrors(validationResults.errorMsgs);
            return;
        }

        setValidationErrors(initialValidationState);
        onSubmit(queryQuantity, form);
    }

    return (
        <div className="checkout-form">
            {errorMsg ? <Alert type={Alert.types.ERROR}>{errorMsg}</Alert> : null}
            <Input
                name="cnpj"
                onChange={handleChange}
                value={form.cnpj}
                label="CNPJ"
                type={Input.types.MASKED}
                mask={Input.masks.CNPJ}
                warningMsg={validationErrors.cnpj}
            />
            <Input
                name="name"
                onChange={handleChange}
                value={form.name}
                label="Nome"
                type={Input.types.TEXT}
                warningMsg={validationErrors.name}
            />
            <Input
                name="creditCard"
                onChange={handleChange}
                value={form.creditCard}
                label="Número do Cartão de Crédito"
                type={Input.types.MASKED}
                mask={Input.masks.CREDIT_CARD}
                warningMsg={validationErrors.creditCard}
            />
            <div className="checkout-form__cvv-expiration-container">
                <Input
                    name="expirationDate"
                    onChange={handleChange}
                    value={form.expirationDate}
                    label="Data de Expiração"
                    type={Input.types.MASKED}
                    mask={Input.masks.EXPIRATION_DATE}
                    warningMsg={validationErrors.expirationDate}
                />
                <Input
                    name="cvv"
                    value={form.cvv}
                    onChange={handleChange}
                    label="CVV"
                    type={Input.types.MASKED}
                    mask={Input.masks.CVV}
                    warningMsg={validationErrors.cvv}
                />
            </div>
            {isLoading ? (
                <Loader size={Loader.sizes.SMALL} />
            ) : (
                <Button label="Confirmar Pagamento" type={Button.types.PRIMARY} onClick={handleSubmit} />
            )}
            <style jsx>{styles}</style>
        </div>
    );
};

export default CheckoutForm;
