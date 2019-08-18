import * as React from 'react';
import { shallow } from 'enzyme';
import Loader from '../../components/Loader';

describe('Loader', (): void => {
    const wrap = shallow(<Loader />);

    it('should render correctly', (): void => {
        expect(wrap.find('.loader').exists()).toBe(true);
    });

    it('should render with the size passed as Props', (): void => {
        wrap.setProps({
            size: Loader.sizes.SMALL,
        });
        expect(wrap.find('.loader__spinner').hasClass('loader__spinner--sm')).toBe(true);

        wrap.setProps({
            size: Loader.sizes.MEDIUM,
        });
        expect(wrap.find('.loader__spinner').hasClass('loader__spinner--md')).toBe(true);

        wrap.setProps({
            size: Loader.sizes.LARGE,
        });
        expect(wrap.find('.loader__spinner').hasClass('loader__spinner--lg')).toBe(true);
    });
});
