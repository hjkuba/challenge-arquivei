import { ReactElement, useState, ChangeEvent } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Loader from '../../components/Loader';
import Alert from '../../components/Alert';
import { styles } from './styles';

interface Props {
    errorMsg: string;
    isLoading?: boolean;
    onSubmit: Function;
}

const SigninForm = ({ errorMsg, isLoading, onSubmit }: Props): ReactElement => {
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    });

    function handleChange(event: ChangeEvent<HTMLInputElement>): void {
        const { name, value } = event.target;
        setCredentials({ ...credentials, [name]: value });
    }

    function handleSubmit(): void {
        onSubmit(credentials);
    }

    return (
        <div className="signin-form">
            {errorMsg ? <Alert type={Alert.types.ERROR}>{errorMsg}</Alert> : null}
            <Input
                name="email"
                onChange={handleChange}
                value={credentials.email}
                label="E-mail"
                type={Input.types.EMAIL}
            />
            <Input
                name="password"
                onChange={handleChange}
                value={credentials.password}
                label="Senha"
                type={Input.types.PASSWORD}
            />
            {isLoading ? (
                <Loader size={Loader.sizes.SMALL} />
            ) : (
                <Button onClick={handleSubmit} label="Entrar" type={Button.types.PRIMARY} />
            )}
            <style jsx>{styles}</style>
        </div>
    );
};

export default SigninForm;
