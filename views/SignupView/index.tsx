import { ReactElement } from 'react';
import SignupPartial from '../../partials/SignupPartial';
import { styles } from './styles';

const SignupView = (): ReactElement => {
    return (
        <div className="signup-view">
            <SignupPartial />
            <style jsx>{styles}</style>
        </div>
    );
};

export default SignupView;
