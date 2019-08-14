import { ReactElement } from 'react';
import { styles } from './styles';

interface Props {
    size?: LoaderSize;
}

enum LoaderSize {
    LARGE = 'loader__spinner--lg',
    MEDIUM = 'loader__spinner--md',
    SMALL = 'loader__spinner--sm',
}

const Loader = (props: Props): ReactElement => {
    return (
        <div className="loader">
            <span className={`loader__spinner ${props.size}`}></span>
            <style jsx>{styles}</style>
        </div>
    );
};

Loader.sizes = LoaderSize;

export default Loader;
