import { ReactElement } from 'react';
import { styles } from './styles';

const PurchaseSummaryTable = (): ReactElement => {
    return (
        <div className="purchase-summary-table">
            <h2 className="purchase-summary-table__title">Detalhes da compra</h2>
            <table>
                <thead>
                    <tr>
                        <th>Consultas</th>
                        <th>Valor unitário</th>
                        <th>Total</th>
                    </tr>
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
                </thead>
            </table>
            <h3>Total de consultas</h3>
            <p>300</p>
            <h3>Total a pagar</h3>
            <p>R$49,00</p>
            <style jsx>{styles}</style>
        </div>
    );
};

export default PurchaseSummaryTable;
