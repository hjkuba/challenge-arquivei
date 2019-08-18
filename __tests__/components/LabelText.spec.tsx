import * as React from 'react';
import { shallow } from 'enzyme';
import LabelText from '../../components/LabelText';

describe('LabelText', (): void => {
    const wrap = shallow(<LabelText label="Test">Hello World!</LabelText>);

    it('should render the text passed as children', (): void => {
        wrap.setProps({
            children: 'Hello World!',
        });
        expect(wrap.find('.label-text__text').text()).toBe('Hello World!');
    });

    it('should render a label passed as Props', (): void => {
        wrap.setProps({
            label: 'Test',
        });
        expect(wrap.find('.label-text__label').text()).toBe('Test');
    });
});
