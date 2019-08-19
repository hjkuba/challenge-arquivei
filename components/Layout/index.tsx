import { ReactElement } from 'react';
import { styles } from './styles';

interface Props {
    children: ReactElement | ReactElement[];
}

const Layout = ({ children }: Props): ReactElement => {
    return (
        <main className="layout">
            <h1 className="layout__title">Arquivei FrontEnd Challenge</h1>
            {children}
            <style jsx>{styles}</style>
        </main>
    );
};

export default Layout;
