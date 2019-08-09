import { ReactElement } from 'react';
import Input from '../../components/Input';
import { styles } from './styles';
import Button from '../../components/Button';

const SignupPartial = (): ReactElement => {
    return (
        <section className="signup-partial">
            <h2 className="signup-partial__title">Cadastre-se</h2>
            <div className="signup-partial__form">
                <Input label="CNPJ" type={Input.types.NUMBER} />
                <Input label="Nome Fantasia" type={Input.types.NUMBER} />
                <Input label="Razão Social" type={Input.types.NUMBER} />
                <Input label="E-mail" type={Input.types.NUMBER} />
                <Input label="Senha" type={Input.types.NUMBER} />
                <Button label="Cadastrar" type={Button.types.PRIMARY} />
            </div>
            <style jsx>{styles}</style>
        </section>
    );
};

export default SignupPartial;
