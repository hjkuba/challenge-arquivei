import { ReactElement } from 'react';
import { styles } from './styles';
import Button from '../../components/Button';

const CheckoutConfirmationPartial = (): ReactElement => {
    return (
        <section className="checkout-confirmation-partial">
            <h2 className="checkout-confirmation-partial__msg">Sua compra foi concluída com sucesso!</h2>
            <Button label="Voltar para Página principal" type={Button.types.PRIMARY} />
            <style jsx>{styles}</style>
        </section>
    );
};

export default CheckoutConfirmationPartial;
