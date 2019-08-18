import * as React from 'react';
import { shallow } from 'enzyme';
import { QueryPricing } from '../../types';
import PurchaseSummaryTable from '../../components/PurchaseSummaryTable';

describe('PurchaseSummaryTable', (): void => {
    const queriesList: QueryPricing[] = [
        {
            quantity: 10,
            unitPrice: 0.8,
            totalPrice: 8,
        },
        {
            quantity: 5,
            unitPrice: 1,
            totalPrice: 5,
        },
    ];

    const wrap = shallow(<PurchaseSummaryTable currentQueries={15} totalPrice={13} queryPriceMap={queriesList} />);

    it('should render the table correctly', (): void => {
        expect(wrap.find('.purchase-summary-table__title').text()).toBe('Detalhes da compra');
        expect(wrap.find('.purchase-summary-table__table thead tr th').length).toBe(3);
        expect(wrap.find('.purchase-summary-table__results-table thead tr th').length).toBe(2);
    });

    it('should display the number of queries correctly', (): void => {
        expect(
            wrap
                .find('.purchase-summary-table__total-tbody tr td')
                .first()
                .text(),
        ).toBe('15');
    });

    it('should display the total price correctly', (): void => {
        expect(
            wrap
                .find('.purchase-summary-table__total-tbody tr td')
                .at(1)
                .text(),
        ).toBe('R$13,00');
    });

    it('should display the table of queries/price correctly', (): void => {
        expect(wrap.find('.purchase-summary-table__tbody tr').length).toBe(2);
        expect(
            wrap
                .find('.purchase-summary-table__tbody tr')
                .first()
                .find('td')
                .at(0)
                .text(),
        ).toBe('10');
        expect(
            wrap
                .find('.purchase-summary-table__tbody tr')
                .first()
                .find('td')
                .at(1)
                .text(),
        ).toBe('R$0,80');
        expect(
            wrap
                .find('.purchase-summary-table__tbody tr')
                .first()
                .find('td')
                .at(2)
                .text(),
        ).toBe('R$8,00');
    });

    it('should display an empty table if the queryPriceMap is empty', (): void => {
        wrap.setProps({
            queryPriceMap: [],
        });

        expect(wrap.find('.purchase-summary-table__tbody tr').length).toBe(0);
    });
});
