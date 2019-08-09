import { ReactElement } from 'react';
import SigninPartial from '../../partials/SigninPartial';
import { styles } from './styles';

const SigninView = (): ReactElement => {
    return (
        <div className="signin-view">
            <SigninPartial />
            <style jsx>{styles}</style>
        </div>
    );
};

export default SigninView;
