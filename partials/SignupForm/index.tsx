import { ReactElement, useState, ChangeEvent } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Alert from '../../components/Alert';
import Loader from '../../components/Loader';
import validate, { validateFilledText, validateCNPJ } from '../../helpers/validators';
import { Credentials, Company } from '../../types';
import { styles } from './styles';

interface Props {
    isLoading: boolean;
    errorMsg: string;
    onSubmit: Function;
}

const SignupForm = ({ isLoading, errorMsg, onSubmit }: Props): ReactElement => {
    const initialValidationState = {
        companyName: '',
        tradingName: '',
        cnpj: '',
        email: '',
        password: '',
    };

    const [form, setForm] = useState({
        companyName: '',
        tradingName: '',
        cnpj: '',
        email: '',
        password: '',
    });

    const [validationErrors, setValidationErrors] = useState(initialValidationState);

    const validationRules: Record<string, Function[]> = {
        companyName: [validateFilledText],
        tradingName: [validateFilledText],
        cnpj: [validateCNPJ],
        email: [validateFilledText],
        password: [validateFilledText],
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

        const credentials: Credentials = {
            email: form.email,
            password: form.password,
        };

        const company: Company = {
            companyName: form.companyName,
            tradingName: form.tradingName,
            cnpj: form.cnpj,
            email: form.email,
            totalQueries: 0,
            currentQueries: 0,
        };

        onSubmit(credentials, company);
    }

    return (
        <div className="signup-form">
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
                name="tradingName"
                onChange={handleChange}
                value={form.tradingName}
                label="Nome Fantasia"
                type={Input.types.TEXT}
                warningMsg={validationErrors.tradingName}
            />
            <Input
                name="companyName"
                onChange={handleChange}
                value={form.companyName}
                label="Razão Social"
                type={Input.types.TEXT}
                warningMsg={validationErrors.companyName}
            />
            <Input
                name="email"
                onChange={handleChange}
                value={form.email}
                label="E-mail"
                type={Input.types.EMAIL}
                warningMsg={validationErrors.email}
            />
            <Input
                name="password"
                onChange={handleChange}
                value={form.password}
                label="Senha"
                type={Input.types.PASSWORD}
                warningMsg={validationErrors.password}
            />
            {isLoading ? (
                <Loader size={Loader.sizes.SMALL} />
            ) : (
                <Button onClick={handleSubmit} label="Cadastrar" type={Button.types.PRIMARY} />
            )}
            <style jsx>{styles}</style>
        </div>
    );
};

export default SignupForm;
