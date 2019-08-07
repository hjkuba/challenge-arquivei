import { NextPage } from 'next';
import { ReactElement } from 'react';
import { styles } from './styles';

const withLayout = (Page: NextPage): Function => {
    const Layout: NextPage = (): ReactElement => {
        return (
            <div className="layout">
                <h1 className="layout__title">Arquivei Front-End Challenge</h1>
                <Page />
                <style jsx>{styles}</style>
            </div>
        );
    };

    return Layout;
};

export default withLayout;
