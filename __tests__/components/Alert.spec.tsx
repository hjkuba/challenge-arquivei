import { mount } from 'enzyme';
import Alert from '../../components/Alert';
import * as React from 'react';

describe('Alert', (): void => {
    it('should render the alert text', (): void => {
        const wrap = mount(<Alert type={Alert.types.ALERT}>Hello World!</Alert>);
        expect(wrap.find('p').text()).toBe('Hello World!');
    });
});
