import * as React from 'react';
import { mount } from 'enzyme';
import Alert from '../../components/Alert';

describe('Alert', (): void => {
    const wrap = mount(<Alert type={Alert.types.ALERT}>Hello World!</Alert>);

    it('should render the text passed as children', (): void => {
        wrap.setProps({
            children: 'Hello World!',
        });
        expect(wrap.find('p').text()).toBe('Hello World!');
    });

    it('should render an Alert with the type passed as Props', (): void => {
        wrap.setProps({
            type: Alert.types.SUCCESS,
        });
        expect(wrap.find('p').hasClass('alert--success')).toBe(true);

        wrap.setProps({
            type: Alert.types.ALERT,
        });
        expect(wrap.find('p').hasClass('alert--alert')).toBe(true);

        wrap.setProps({
            type: Alert.types.ERROR,
        });
        expect(wrap.find('p').hasClass('alert--error')).toBe(true);
    });
});
