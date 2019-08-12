import { ReactElement } from 'react';
import LabelText from '../../components/LabelText';
import Button from '../../components/Button';
import HighlightBox from '../../components/HighlightBox';
import { styles } from './styles';
import { Company } from '../../types';

interface Props {
    company: Company;
    onSignout: Function;
}

const ProfilePartial = (props: Props): ReactElement => {
    return (
        <section className="profile-partial">
            <h2 className="profile-partial__title">Meu Perfil</h2>
            <LabelText label="Email">{props.company.email}</LabelText>
            <LabelText label="Razão Social">{props.company.companyName}</LabelText>
            <LabelText label="Nome Fantasia">{props.company.tradingName}</LabelText>
            <LabelText label="CNPJ">{props.company.cnpj}</LabelText>
            <hr className="profile-partial__divider" />
            <h2 className="profile-partial__balance">Saldo Disponível</h2>
            <HighlightBox type={HighlightBox.types.SUCCESS} alignment={HighlightBox.alignment.CENTER}>
                <p className="profile-partial__query-quantity">{props.company.currentQueries}</p>
                <p className="profile-partial__query-label">Consultas</p>
            </HighlightBox>
            <div className="profile-partial__logout">
                <Button label="Sair" type={Button.types.PRIMARY_ALT} onClick={props.onSignout} />
            </div>
            <style jsx>{styles}</style>
        </section>
    );
};

export default ProfilePartial;
