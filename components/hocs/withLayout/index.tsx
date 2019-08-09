import { NextPage } from 'next';
import { ReactElement } from 'react';
import { styles } from './styles';

const withLayout = (Page: NextPage): Function => {
    const Layout: NextPage = (): ReactElement => {
        return (
            <main className="layout">
                <h1 className="layout__title">Arquivei FrontEnd Challenge</h1>
                <Page />
                <style jsx>{styles}</style>
            </main>
        );
    };

    return Layout;
};

export default withLayout;
