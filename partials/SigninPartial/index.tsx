import Link from 'next/link';
import { ReactElement } from 'react';
import SigninForm from '../SigninForm';
import { styles } from './styles';

interface Props {
    isWaitingSignin: boolean;
    signinErrorMsg: string;
    signinUser: Function;
}

const SigninPartial = ({ isWaitingSignin, signinErrorMsg, signinUser }: Props): ReactElement => {
    return (
        <section className="signin-partial">
            <h2 className="signin-partial__title">Login</h2>
            <SigninForm isLoading={isWaitingSignin} onSubmit={signinUser} errorMsg={signinErrorMsg} />
            <Link href="/signup">
                <a className="signin-partial__signup-link">Cadastre-se</a>
            </Link>
            <style jsx>{styles}</style>
        </section>
    );
};

export default SigninPartial;
