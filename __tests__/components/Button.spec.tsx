import * as React from 'react';
import { mount, shallow } from 'enzyme';
import Button from '../../components/Button';

describe('Button', (): void => {
    const wrap = mount(<Button label="Hello Button!" type={Button.types.PRIMARY} onClick={(): boolean => true} />);

    it('should render the button text correctly', (): void => {
        wrap.setProps({
            label: 'Hello Button!',
        });
        expect(wrap.find('button').text()).toBe('Hello Button!');
    });

    it('should render the correct type of button', (): void => {
        wrap.setProps({
            type: Button.types.PRIMARY,
        });
        expect(wrap.find('button').hasClass('button--primary')).toBe(true);

        wrap.setProps({
            type: Button.types.PRIMARY_ALT,
        });
        expect(wrap.find('button').hasClass('button--primary-alt')).toBe(true);
    });

    it('should render a disabled button', (): void => {
        wrap.setProps({
            disabled: true,
        });
        const button = wrap.find('button');
        expect(button.hasClass('button--disabled')).toBe(true);
        expect(button.prop('disabled')).toBe(true);
    });

    it('should call onClick callback', (): void => {
        const mockedOnClick = jest.fn();
        const wrap = shallow(<Button label="hello" type={Button.types.PRIMARY} onClick={mockedOnClick} />);
        wrap.setProps({
            onClick: mockedOnClick,
        });
        wrap.simulate('click');
        expect(mockedOnClick).toHaveBeenCalled();
    });
});
