import { ReactElement } from 'react';
import { styles } from './styles';

const PurchaseSummaryTable = (): ReactElement => {
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
                        <td>300</td>
                        <td>R$49,00</td>
                    </tr>
                </tbody>
            </table>
            <style jsx>{styles}</style>
        </div>
    );
};

export default PurchaseSummaryTable;
