import { ReactElement } from 'react';
import { styles } from './styles';
import HighlightBox from '../../components/HighlightBox';
import PurchaseSummaryTable from '../../components/PurchaseSummaryTable';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { QueryPricing } from '../../types';

interface Props {
    onQueryQtdChange: Function;
    currentQueries: number | string;
    totalPrice: number;
    queryPriceMap: QueryPricing[];
}

const PurchasePartial = (props: Props): ReactElement => {
    const { onQueryQtdChange, currentQueries, totalPrice, queryPriceMap } = props;

    return (
        <section className="purchase-partial">
            <h2 className="purchase-partial__title">Adquira mais Consultas</h2>
            <div className="purchase-partial__content">
                <div className="purchase-partial__purchase-section">
                    <div className="purchase-partial__input-container">
                        <Input
                            name="queries"
                            onChange={onQueryQtdChange}
                            value={currentQueries}
                            type={Input.types.NUMBER}
                            label="Quantas consultas deseja?"
                        />
                    </div>
                    <hr className="purchase-partial__divider" />
                    <PurchaseSummaryTable
                        currentQueries={currentQueries}
                        totalPrice={totalPrice}
                        queryPriceMap={queryPriceMap}
                    />
                    <hr className="purchase-partial__divider" />
                    <div className="purchase-partial__button-container">
                        <Button
                            onClick={(): void => console.log('teste')}
                            label="Comprar"
                            type={Button.types.PRIMARY}
                        />
                    </div>
                </div>
                <div className="purchase-partial__offer-section">
                    <HighlightBox type={HighlightBox.types.GREY_100} alignment={HighlightBox.alignment.LEFT}>
                        <p className="purchase-partial__offer-text">
                            Primeiras 1000 consultas:{' '}
                            <span className="purchase-partial__offer-value">R$0,09/unidade</span>
                        </p>
                        <p className="purchase-partial__offer-text">
                            1000 consultas seguintes:{' '}
                            <span className="purchase-partial__offer-value">R$0,16/unidade</span>
                        </p>
                        <p className="purchase-partial__offer-secondary-text">Valor da consulta: R$0,24/unidade</p>
                    </HighlightBox>
                </div>
            </div>
            <style jsx>{styles}</style>
        </section>
    );
};

export default PurchasePartial;
