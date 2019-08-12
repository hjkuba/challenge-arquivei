import { ReactElement } from 'react';
import { styles } from './styles';

interface Props {
    currentQueryQtd: number | string;
    totalQueriesBougth: number;
    promotionMap: Record<number, number>;
    defaultValue: number;
}

const PurchaseSummaryTable = (props: Props): ReactElement => {
    function toNumber(value: string | number): number {
        let number = typeof value === 'string' ? parseInt(value) : value;
        return Number.isNaN(number) ? 0 : number;
    }

    function calculate(
        currentQueryQtd: number,
        previousQueries: number,
        promotionMap: Record<string, number>,
        defaultValue: number,
    ): any[] {
        const queryList: any[] = [];
        let totalQueries;
        let previousLimit = 0;

        if (currentQueryQtd === 0) return queryList;

        Object.keys(promotionMap).forEach((key): void => {
            const queryData = {
                price: promotionMap[key],
                quantity: 0,
                result: 0,
            };
            const limitValue = toNumber(key) - previousLimit;

            totalQueries = previousQueries + currentQueryQtd;

            if (totalQueries > limitValue) {
                let queriesToKeep = limitValue - previousQueries;
                queryData.quantity = queriesToKeep;
                currentQueryQtd -= queriesToKeep;
                previousQueries = 0;
            } else {
                queryData.quantity = currentQueryQtd;
                currentQueryQtd = 0;
            }

            previousLimit = limitValue;

            if (queryData.quantity) {
                queryData.result = queryData.quantity * queryData.price;
                queryList.push(queryData);
            }
        });

        if (currentQueryQtd) {
            queryList.push({
                price: defaultValue,
                quantity: currentQueryQtd,
                result: defaultValue * currentQueryQtd,
            });
        }

        return queryList;
    }

    const { currentQueryQtd, totalQueriesBougth, promotionMap, defaultValue } = props;

    console.log(calculate(toNumber(currentQueryQtd), totalQueriesBougth, promotionMap, defaultValue));

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
                <tbody className="purchase-summary-table__tbody">
                    <tr>
                        <td>100</td>
                        <td>R$0,09</td>
                        <td>R$9,00</td>
                    </tr>
                    <tr>
                        <td>100</td>
                        <td>R$0,16</td>
                        <td>R$16,00</td>
                    </tr>
                    <tr>
                        <td>100</td>
                        <td>R$0,24</td>
                        <td>R$24,00</td>
                    </tr>
                </tbody>
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
                        <td>R$49,00</td>
                    </tr>
                </tbody>
            </table>
            <style jsx>{styles}</style>
        </div>
    );
};

export default PurchaseSummaryTable;
