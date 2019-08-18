import { ReactElement } from 'react';
import { styles } from './styles';

interface Props {
    size?: LoaderSize;
}

enum LoaderSize {
    SMALL = 'loader__spinner--sm',
    MEDIUM = 'loader__spinner--md',
    LARGE = 'loader__spinner--lg',
}

const Loader = ({ size }: Props): ReactElement => {
    return (
        <div className="loader">
            <span className={`loader__spinner ${size}`}></span>
            <style jsx>{styles}</style>
        </div>
    );
};

Loader.sizes = LoaderSize;

export default Loader;
