import { ReactElement } from 'react';
import SigninPartial from '../../partials/SigninPartial';
import { styles } from './styles';

interface Props {
    signinUser: Function;
}

const SigninView = (props: Props): ReactElement => {
    return (
        <div className="signin-view">
            <SigninPartial signinUser={props.signinUser} />
            <style jsx>{styles}</style>
        </div>
    );
};

export default SigninView;