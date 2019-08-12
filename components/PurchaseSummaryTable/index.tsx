import { ReactElement } from 'react';
import { styles } from './styles';
import { QueryPricing } from '../../types';
import { toBRL } from '../../helpers/purchase-price';

interface Props {
    currentQueries: number | string;
    totalPrice: number;
    queryPriceMap: QueryPricing[];
}

const PurchaseSummaryTable = (props: Props): ReactElement => {
    const { currentQueries, totalPrice, queryPriceMap } = props;

    const renderQueryPriceList = (queryPriceMap: QueryPricing[]): ReactElement[] => {
        return queryPriceMap.map(
            (queryPrice, index): ReactElement => {
                return (
                    <tr key={index}>
                        <td>{queryPrice.quantity}</td>
                        <td>{toBRL(queryPrice.unitPrice)}</td>
                        <td>{toBRL(queryPrice.totalPrice)}</td>
                    </tr>
                );
            },
        );
    };

    return (
        <div className="purchase-summary-table">
            <h2 className="purchase-summary-table__title">Detalhes da compra</h2>
            <table className="purchase-summary-table__table">
                <thead className="purchase-summary-table__thead">
                    <tr>
                        <th>Consultas</th>
                        <th>Valor unitário</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody className="purchase-summary-table__tbody">{renderQueryPriceList(queryPriceMap)}</tbody>
            </table>
            <table>
                <thead className="purchase-summary-table__total-thead">
                    <tr>
                        <th>Total de Consultas</th>
                        <th>Total a Pagar</th>
                    </tr>
                </thead>
                <tbody className="purchase-summary-table__total-tbody">
                    <tr>
                        <td>{currentQueries}</td>
                        <td>{toBRL(totalPrice)}</td>
                    </tr>
                </tbody>
            </table>
            <style jsx>{styles}</style>
        </div>
    );
};

export default PurchaseSummaryTable;
