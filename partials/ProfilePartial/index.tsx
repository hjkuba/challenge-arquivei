import { ReactElement } from 'react';
import LabelText from '../../components/LabelText';
import Button from '../../components/Button';
import HighlightBox from '../../components/HighlightBox';
import { Company } from '../../types';
import { styles } from './styles';

interface Props {
    company: Company;
    onSignout: Function;
}

const ProfilePartial = ({ company, onSignout }: Props): ReactElement => {
    return (
        <section className="profile-partial">
            <h2 className="profile-partial__title">Meu Perfil</h2>
            <LabelText label="Email">{company.email}</LabelText>
            <LabelText label="Razão Social">{company.companyName}</LabelText>
            <LabelText label="Nome Fantasia">{company.tradingName}</LabelText>
            <LabelText label="CNPJ">{company.cnpj}</LabelText>
            <hr className="profile-partial__divider" />
            <h2 className="profile-partial__balance">Saldo Disponível</h2>
            <HighlightBox type={HighlightBox.types.SUCCESS} alignment={HighlightBox.alignment.CENTER}>
                <p className="profile-partial__query-quantity">{company.currentQueries}</p>
                <p className="profile-partial__query-label">Consultas</p>
            </HighlightBox>
            <div className="profile-partial__logout">
                <Button label="Sair" type={Button.types.PRIMARY_ALT} onClick={onSignout} />
            </div>
            <style jsx>{styles}</style>
        </section>
    );
};

export default ProfilePartial;
