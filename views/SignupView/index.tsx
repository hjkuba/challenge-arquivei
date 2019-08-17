import { ReactElement } from 'react';
import SignupPartial from '../../partials/SignupPartial';
import { styles } from './styles';

interface Props {
    createUser: Function;
    isWaitingUserCreation: boolean;
    signupErrorMsg: string;
}

const SignupView = (props: Props): ReactElement => {
    return (
        <div className="signup-view">
            <SignupPartial
                signupErrorMsg={props.signupErrorMsg}
                isWaitingUserCreation={props.isWaitingUserCreation}
                createUser={props.createUser}
            />
            <style jsx>{styles}</style>
        </div>
    );
};

export default SignupView;
