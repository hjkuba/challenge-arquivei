import { ReactElement, useState, ChangeEvent } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { styles } from './styles';
import Loader from '../../components/Loader';
import Alert from '../../components/Alert';

interface Props {
    onSubmit: Function;
    isLoading?: boolean;
    errorMsg: string;
}

const SigninForm = (props: Props): ReactElement => {
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    });

    function handleChange(event: ChangeEvent<HTMLInputElement>): void {
        const { name, value } = event.target;
        setCredentials({ ...credentials, [name]: value });
    }

    function handleSubmit(): void {
        props.onSubmit(credentials);
    }

    return (
        <div className="signin-form">
            {props.errorMsg ? <Alert type={Alert.types.ERROR}>{props.errorMsg}</Alert> : null}
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
            {props.isLoading ? (
                <Loader size={Loader.sizes.SMALL} />
            ) : (
                <Button onClick={handleSubmit} label="Entrar" type={Button.types.PRIMARY} />
            )}
            <style jsx>{styles}</style>
        </div>
    );
};

export default SigninForm;
