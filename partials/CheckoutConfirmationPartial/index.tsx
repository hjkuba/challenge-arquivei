import { ReactElement } from 'react';
import Button from '../../components/Button';
import { styles } from './styles';

interface Props {
    onBackToDashboard: Function;
}

const CheckoutConfirmationPartial = ({ onBackToDashboard }: Props): ReactElement => {
    return (
        <section className="checkout-confirmation-partial">
            <h2 className="checkout-confirmation-partial__msg">Sua compra foi concluída com sucesso!</h2>
            <Button onClick={onBackToDashboard} label="Voltar para Página principal" type={Button.types.PRIMARY} />
            <style jsx>{styles}</style>
        </section>
    );
};

export default CheckoutConfirmationPartial;
