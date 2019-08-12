import { ReactElement } from 'react';
import Link from 'next/link';
import { styles } from './styles';
import SigninForm from '../SigninForm';

interface Props {
    signinUser: Function;
}

const SigninPartial = (props: Props): ReactElement => {
    return (
        <section className="signin-partial">
            <h2 className="signin-partial__title">Login</h2>
            <SigninForm onSubmit={props.signinUser} />
            <Link href="/signup">
                <a className="signin-partial__signup-link">Cadastre-se</a>
            </Link>
            <style jsx>{styles}</style>
        </section>
    );
};

export default SigninPartial;
