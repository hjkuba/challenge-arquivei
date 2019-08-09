import { ReactElement } from 'react';
import LabelText from '../../components/LabelText';
import Button from '../../components/Button';
import HighlightBox from '../../components/HighlightBox';
import { styles } from './styles';

const ProfilePartial = (): ReactElement => {
    return (
        <section className="profile-partial">
            <h2 className="profile-partial__title">Meu Perfil</h2>
            <LabelText label="Razão Social">Empresa Ficticia LTDA</LabelText>
            <LabelText label="Nome Fantasia">Full Fantasia</LabelText>
            <LabelText label="CNPJ">90.432.098/0001-12</LabelText>
            <hr className="profile-partial__divider" />
            <h2 className="profile-partial__balance">Saldo Disponível</h2>
            <HighlightBox type={HighlightBox.types.SUCCESS} alignment={HighlightBox.alignment.CENTER}>
                <p className="profile-partial__query-quantity">10</p>
                <p className="profile-partial__query-label">Consultas</p>
            </HighlightBox>
            <div className="profile-partial__logout">
                <Button label="Sair" type={Button.types.PRIMARY_ALT} />
            </div>
            <style jsx>{styles}</style>
        </section>
    );
};

export default ProfilePartial;
