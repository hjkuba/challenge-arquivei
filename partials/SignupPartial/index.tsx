import { ReactElement } from 'react';
import Link from 'next/link';
import { styles } from './styles';
import SignupForm from '../../partials/SignupForm';

interface Props {
    createCompany: Function;
}

const SignupPartial = (props: Props): ReactElement => {
    return (
        <section className="signup-partial">
            <h2 className="signup-partial__title">Cadastre-se</h2>
            <SignupForm onSubmit={props.createCompany} />
            <Link href="/signin">
                <a className="signup-partial__signup-link">Entrar</a>
            </Link>
            <style jsx>{styles}</style>
        </section>
    );
};

export default SignupPartial;
