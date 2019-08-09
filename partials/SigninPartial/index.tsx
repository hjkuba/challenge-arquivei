import { ReactElement } from 'react';
import Input from '../../components/Input';
import { styles } from './styles';
import Button from '../../components/Button';

const SigninPartial = (): ReactElement => {
    return (
        <section className="signin-partial">
            <h2 className="signin-partial__title">Login</h2>
            <div className="signin-partial__form">
                <Input label="E-mail" type={Input.types.NUMBER} />
                <Input label="Senha" type={Input.types.NUMBER} />
                <Button label="Entrar" type={Button.types.PRIMARY} />
            </div>
            <style jsx>{styles}</style>
        </section>
    );
};

export default SigninPartial;
