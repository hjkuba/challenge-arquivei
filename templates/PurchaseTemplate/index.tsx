import { ReactElement } from 'react';
import { styles } from './styles';
import HighlightBox from '../../components/HighlightBox';
import PurchaseSummaryTable from '../../components/PurchaseSummaryTable';
import Button from '../../components/Button';
import Input from '../../components/Input';

const PurchaseTemplate = (): ReactElement => {
    return (
        <section className="purchase-template">
            <h2 className="purchase-template__title">Adquira mais Consultas</h2>
            <div className="purchase-template__content">
                <div className="purchase-template__purchase-section">
                    <div className="purchase-template__input-container">
                        <Input type={Input.types.NUMBER} label="Quantas consultas deseja?" />
                    </div>
                    <hr className="purchase-template__divider" />
                    <PurchaseSummaryTable />
                    <hr className="purchase-template__divider" />
                    <div className="purchase-template__button-container">
                        <Button label="Comprar" type={Button.types.PRIMARY} />
                    </div>
                </div>
                <div className="purchase-template__offer-section">
                    <HighlightBox type={HighlightBox.types.GREY_100} alignment={HighlightBox.alignment.LEFT}>
                        <p className="purchase-template__offer-text">
                            Primeiras 1000 consultas:{' '}
                            <span className="purchase-template__offer-value">R$0,09/unidade</span>
                        </p>
                        <p className="purchase-template__offer-text">
                            1000 consultas seguintes:{' '}
                            <span className="purchase-template__offer-value">R$0,16/unidade</span>
                        </p>
                        <p className="purchase-template__offer-secondary-text">Valor da consulta: R$0,24/unidade</p>
                    </HighlightBox>
                </div>
            </div>
            <style jsx>{styles}</style>
        </section>
    );
};

export default PurchaseTemplate;
