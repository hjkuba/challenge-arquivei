import { ReactElement } from 'react';
import SignupPartial from '../../partials/SignupPartial';
import { styles } from './styles';

interface Props {
    createCompany: Function;
}

const SignupView = (props: Props): ReactElement => {
    return (
        <div className="signup-view">
            <SignupPartial createCompany={props.createCompany} />
            <style jsx>{styles}</style>
        </div>
    );
};

export default SignupView;
