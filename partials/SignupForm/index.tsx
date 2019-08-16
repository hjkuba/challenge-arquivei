import { ReactElement, useState, ChangeEvent } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Alert from '../../components/Alert';
import { styles } from './styles';
import { Credentials, Company } from '../../types';
import Loader from '../../components/Loader';

interface Props {
    onSubmit: Function;
    isLoading: boolean;
    errorMsg: string;
}

const SignupForm = (props: Props): ReactElement => {
    const [form, setForm] = useState({
        companyName: '',
        tradingName: '',
        cnpj: '',
        email: '',
        password: '',
    });

    function handleChange(event: ChangeEvent<HTMLInputElement>): void {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    }

    function handleSubmit(): void {
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

        props.onSubmit(credentials, company);
    }

    return (
        <div className="signup-form">
            {props.errorMsg ? <Alert type={Alert.types.ERROR}>{props.errorMsg}</Alert> : null}
            <Input
                name="cnpj"
                onChange={handleChange}
                value={form.cnpj}
                label="CNPJ"
                type={Input.types.MASKED}
                mask={Input.masks.CNPJ}
            />
            <Input
                name="tradingName"
                onChange={handleChange}
                value={form.tradingName}
                label="Nome Fantasia"
                type={Input.types.TEXT}
            />
            <Input
                name="companyName"
                onChange={handleChange}
                value={form.companyName}
                label="Razão Social"
                type={Input.types.TEXT}
            />
            <Input name="email" onChange={handleChange} value={form.email} label="E-mail" type={Input.types.EMAIL} />
            <Input
                name="password"
                onChange={handleChange}
                value={form.password}
                label="Senha"
                type={Input.types.PASSWORD}
            />
            {props.isLoading ? (
                <Loader size={Loader.sizes.SMALL} />
            ) : (
                <Button onClick={handleSubmit} label="Cadastrar" type={Button.types.PRIMARY} />
            )}
            <style jsx>{styles}</style>
        </div>
    );
};

export default SignupForm;
