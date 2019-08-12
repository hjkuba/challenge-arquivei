import { ReactElement } from 'react';
import { styles } from './styles';
import { QueryPricing } from '../../types';
import { generateQueryPriceMap, toNumber, calculateTotalPrice, toBRL } from '../../helpers/purchase-price';

interface Props {
    currentQueryQtd: number | string;
    totalQueriesBougth: number;
    promotionMap: Record<number, number>;
    defaultValue: number;
}

const PurchaseSummaryTable = (props: Props): ReactElement => {
    const { currentQueryQtd, totalQueriesBougth, promotionMap, defaultValue } = props;
    const queryPriceMap = generateQueryPriceMap(
        toNumber(currentQueryQtd),
        totalQueriesBougth,
        promotionMap,
        defaultValue,
    );

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
                        <td>{props.currentQueryQtd}</td>
                        <td>{toBRL(calculateTotalPrice(queryPriceMap))}</td>
                    </tr>
                </tbody>
            </table>
            <style jsx>{styles}</style>
        </div>
    );
};

export default PurchaseSummaryTable;
