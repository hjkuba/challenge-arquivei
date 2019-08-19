import Link from 'next/link';
import { ReactElement } from 'react';
import SignupForm from '../../partials/SignupForm';
import { styles } from './styles';

interface Props {
    isWaitingUserCreation: boolean;
    signupErrorMsg: string;
    createUser: Function;
}

const SignupPartial = ({ isWaitingUserCreation, signupErrorMsg, createUser }: Props): ReactElement => {
    return (
        <section className="signup-partial">
            <h2 className="signup-partial__title">Cadastre-se</h2>
            <SignupForm errorMsg={signupErrorMsg} isLoading={isWaitingUserCreation} onSubmit={createUser} />
            <Link href="/signin">
                <a className="signup-partial__signup-link">Entrar</a>
            </Link>
            <style jsx>{styles}</style>
        </section>
    );
};

export default SignupPartial;
