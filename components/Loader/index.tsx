import { ReactElement } from 'react';
import { styles } from './styles';

const Loader = (): ReactElement => {
    return (
        <div className="loader">
            <span className="loader__spinner"></span>
            <style jsx>{styles}</style>
        </div>
    );
};

export default Loader;
