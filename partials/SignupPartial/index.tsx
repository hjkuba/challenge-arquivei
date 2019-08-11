import { ReactElement } from 'react';
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
            <style jsx>{styles}</style>
        </section>
    );
};

export default SignupPartial;
