import { mount, shallow } from 'enzyme';
import Alert from '../../components/Alert';
import * as React from 'react';

describe('Alert', (): void => {
    it('should render the text passed as children', (): void => {
        const wrap = mount(<Alert type={Alert.types.ALERT}>Hello World!</Alert>);
        expect(wrap.find('p').text()).toBe('Hello World!');
    });

    it('should render a success Alert', (): void => {
        const wrap = shallow(<Alert type={Alert.types.SUCCESS}>Hello World!</Alert>);
        expect(wrap.find('p').hasClass('alert--success')).toBe(true);
    });

    it('should render an alert Alert ', (): void => {
        const wrap = shallow(<Alert type={Alert.types.ALERT}>Hello World!</Alert>);
        expect(wrap.find('p').hasClass('alert--alert')).toBe(true);
    });

    it('should render an error Alert', (): void => {
        const wrap = shallow(<Alert type={Alert.types.ERROR}>Hello World!</Alert>);
        expect(wrap.find('p').hasClass('alert--error')).toBe(true);
    });
});
