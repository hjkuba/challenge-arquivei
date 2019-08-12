import { ReactElement, useState, ChangeEvent } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { styles } from './styles';

interface Props {
    onSubmit: Function;
    queryQuantity: number;
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
            <Input name="cnpj" onChange={handleChange} value={form.cnpj} label="CNPJ" type={Input.types.TEXT} />
            <Input name="name" onChange={handleChange} value={form.name} label="Nome" type={Input.types.TEXT} />
            <Input
                name="creditCard"
                onChange={handleChange}
                value={form.creditCard}
                label="Número do Cartão de Crédito"
                type={Input.types.NUMBER}
            />
            <div className="checkout-form__cvv-expiration-container">
                <Input
                    name="expirationDate"
                    onChange={handleChange}
                    value={form.expirationDate}
                    label="Data de Expiração"
                    type={Input.types.DATE}
                />
                <Input name="cvv" value={form.cvv} onChange={handleChange} label="CVV" type={Input.types.NUMBER} />
            </div>
            <Button label="Confirmar Pagamento" type={Button.types.PRIMARY} onClick={handleSubmit} />
            <style jsx>{styles}</style>
        </div>
    );
};

export default CheckoutForm;
