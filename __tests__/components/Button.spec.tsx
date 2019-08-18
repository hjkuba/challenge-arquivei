import { mount, shallow } from 'enzyme';
import Button from '../../components/Button';
import * as React from 'react';

describe('Button', (): void => {
    it('should render the button text correctly', (): void => {
        const wrap = mount(<Button label="Hello Button!" type={Button.types.PRIMARY} onClick={(): boolean => true} />);
        expect(wrap.find('button').text()).toBe('Hello Button!');
    });

    it('should render the button primary type', (): void => {
        const wrap = shallow(
            <Button label="Hello Button!" type={Button.types.PRIMARY} onClick={(): boolean => true} />,
        );
        expect(wrap.find('button').hasClass('button--primary')).toBe(true);
    });

    it('should render the button primary alternative type', (): void => {
        const wrap = shallow(
            <Button label="Hello Button!" type={Button.types.PRIMARY_ALT} onClick={(): boolean => true} />,
        );
        expect(wrap.find('button').hasClass('button--primary-alt')).toBe(true);
    });

    it('should render a disabled button', (): void => {
        const wrap = shallow(
            <Button label="Hello Button!" type={Button.types.PRIMARY_ALT} disabled onClick={(): boolean => true} />,
        );
        const button = wrap.find('button');
        expect(button.hasClass('button--disabled')).toBe(true);
        expect(button.prop('disabled')).toBe(true);
    });

    it('should call onClick callback', (): void => {
        const callback = jest.fn();
        const wrap = shallow(
            <Button label="Hello Button!" type={Button.types.PRIMARY_ALT} disabled onClick={callback} />,
        );
        wrap.simulate('click');
        expect(callback).toHaveBeenCalled();
    });
});
