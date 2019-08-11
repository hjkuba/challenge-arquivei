import { ReactElement } from 'react';
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
            <style jsx>{styles}</style>
        </section>
    );
};

export default SigninPartial;
