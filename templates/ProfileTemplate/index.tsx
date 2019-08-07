import { ReactElement } from 'react';
import LabelText from '../../components/LabelText';
import Button, { ButtonType } from '../../components/Button';
import HighlightBox, { HighlightBoxType } from '../../components/HighlightBox';
import { styles } from './styles';

const ProfileTemplate = (): ReactElement => {
    return (
        <section className="profile">
            <h2 className="profile__title">Meu Perfil</h2>
            <LabelText label="Razão Social">Empresa Ficticia LTDA</LabelText>
            <LabelText label="Nome Fantasia">Full Fantasia</LabelText>
            <LabelText label="CNPJ">90.432.098/0001-12</LabelText>
            <hr className="profile__divider" />
            <h2 className="profile__title">Saldo Disponível</h2>
            <HighlightBox type={HighlightBoxType.SUCCESS}>
                <p className="profile__query-quantity">10</p>
                <p className="profile__query-label">Consultas</p>
            </HighlightBox>
            <Button label="Sair" type={ButtonType.PRIMARY_ALT} />
            <style jsx>{styles}</style>
        </section>
    );
};

export default ProfileTemplate;
