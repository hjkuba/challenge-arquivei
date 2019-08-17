import React, { ReactElement } from 'react';
import { styles } from './styles';

interface Props {
    type: AlertType;
    children: string;
}

enum AlertType {
    SUCCESS = 'alert--success',
    ALERT = 'alert--alert',
    ERROR = 'alert--error',
}

const Alert = ({ children, type }: Props): ReactElement => {
    return (
        <p className={`alert ${type}`}>
            {children}
            <style jsx>{styles}</style>
        </p>
    );
};

Alert.types = AlertType;

export default Alert;
