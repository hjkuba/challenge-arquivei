import { ReactElement } from 'react';
import SigninPartial from '../../partials/SigninPartial';
import { styles } from './styles';

interface Props {
    isWaitingSignin: boolean;
    signinErrorMsg: string;
    signinUser: Function;
}

const SigninView = ({ isWaitingSignin, signinErrorMsg, signinUser }: Props): ReactElement => {
    return (
        <div className="signin-view">
            <SigninPartial signinErrorMsg={signinErrorMsg} isWaitingSignin={isWaitingSignin} signinUser={signinUser} />
            <style jsx>{styles}</style>
        </div>
    );
};

export default SigninView;
