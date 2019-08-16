import { ReactElement, useState, ChangeEvent } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { styles } from './styles';
import Loader from '../../components/Loader';
import Alert from '../../components/Alert';

interface Props {
    onSubmit: Function;
    queryQuantity: number;
    isLoading: boolean;
    errorMsg: string;
}

const CheckoutForm = (props: Props): ReactElement => {
    const [form, setForm] = useState({
        cnpj: '',
        name: '',
        creditCard: '',
        expirationDate: '',
        cvv: '',
    });

    function handleChange(event: ChangeEvent<HTMLInputElement>): void {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    }

    function handleSubmit(): void {
        props.onSubmit(props.queryQuantity, form);
    }

    return (
        <div className="checkout-form">
            {props.errorMsg ? <Alert type={Alert.types.ERROR}>{props.errorMsg}</Alert> : null}
            <Input
                name="cnpj"
                onChange={handleChange}
                value={form.cnpj}
                label="CNPJ"
                type={Input.types.MASKED}
                mask={Input.masks.CNPJ}
            />
            <Input name="name" onChange={handleChange} value={form.name} label="Nome" type={Input.types.TEXT} />
            <Input
                name="creditCard"
                onChange={handleChange}
                value={form.creditCard}
                label="Número do Cartão de Crédito"
                type={Input.types.MASKED}
                mask={Input.masks.CREDIT_CARD}
            />
            <div className="checkout-form__cvv-expiration-container">
                <Input
                    name="expirationDate"
                    onChange={handleChange}
                    value={form.expirationDate}
                    label="Data de Expiração"
                    type={Input.types.MASKED}
                    mask={Input.masks.DATE}
                />
                <Input name="cvv" value={form.cvv} onChange={handleChange} label="CVV" type={Input.types.NUMBER} />
            </div>
            {props.isLoading ? (
                <Loader size={Loader.sizes.SMALL} />
            ) : (
                <Button label="Confirmar Pagamento" type={Button.types.PRIMARY} onClick={handleSubmit} />
            )}
            <style jsx>{styles}</style>
        </div>
    );
};

export default CheckoutForm;
