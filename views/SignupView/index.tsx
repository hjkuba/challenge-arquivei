import { ReactElement } from 'react';
import SignupPartial from '../../partials/SignupPartial';
import { styles } from './styles';

interface Props {
    isWaitingUserCreation: boolean;
    signupErrorMsg: string;
    createUser: Function;
}

const SignupView = ({ signupErrorMsg, isWaitingUserCreation, createUser }: Props): ReactElement => {
    return (
        <div className="signup-view">
            <SignupPartial
                signupErrorMsg={signupErrorMsg}
                isWaitingUserCreation={isWaitingUserCreation}
                createUser={createUser}
            />
            <style jsx>{styles}</style>
        </div>
    );
};

export default SignupView;
