import * as React from 'react';
import { shallow } from 'enzyme';
import Input from '../../components/Input';

describe('Input', (): void => {
    const wrap = shallow(<Input name="test" type={Input.types.TEXT} onChange={(): boolean => true} />);

    it('should render the input with the correct name', (): void => {
        wrap.setProps({
            name: 'test',
        });
        expect(wrap.find('input').prop('name')).toBe('test');
    });

    it('should render the input with the correct non-masked type', (): void => {
        wrap.setProps({
            type: Input.types.TEXT,
        });
        expect(wrap.find('input').prop('type')).toBe('text');
        wrap.setProps({
            type: Input.types.NUMBER,
        });
        expect(wrap.find('input').prop('type')).toBe('number');
        wrap.setProps({
            type: Input.types.EMAIL,
        });
        expect(wrap.find('input').prop('type')).toBe('email');
        wrap.setProps({
            type: Input.types.PASSWORD,
        });
        expect(wrap.find('input').prop('type')).toBe('password');
    });

    it('should render a masked input', (): void => {
        wrap.setProps({
            type: Input.types.MASKED,
        });
        expect(wrap.find('.input__masked-input').exists()).toBe(true);
    });

    it('should render the input with a label', (): void => {
        wrap.setProps({
            label: 'test-label',
        });
        expect(wrap.find('label.input__label').text()).toBe('test-label');
    });

    it('should pass value down to input', (): void => {
        wrap.setProps({
            type: Input.types.TEXT,
            value: 'Hello world!',
        });
        expect(wrap.find('input').prop('value')).toBe('Hello world!');
    });

    it('should set the correct mask to masked input', (): void => {
        wrap.setProps({
            type: Input.types.MASKED,
            mask: Input.masks.CNPJ,
        });
        expect(
            wrap
                .find('.input__masked-input')
                .first()
                .prop('mask'),
        ).toEqual([
            /\d/,
            /\d/,
            '.',
            /\d/,
            /\d/,
            /\d/,
            '.',
            /\d/,
            /\d/,
            /\d/,
            '/',
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            '-',
            /\d/,
            /\d/,
        ]);

        wrap.setProps({
            mask: Input.masks.CREDIT_CARD,
        });
        expect(wrap.find('.input__masked-input').prop('mask')).toEqual([
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            ' ',
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            ' ',
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            ' ',
            /\d/,
            /\d/,
            /\d/,
            /\d/,
        ]);

        wrap.setProps({
            mask: Input.masks.CVV,
        });
        expect(
            wrap
                .find('.input__masked-input')
                .first()
                .prop('mask'),
        ).toEqual([/\d/, /\d/, /\d/]);

        wrap.setProps({
            mask: Input.masks.EXPIRATION_DATE,
        });
        expect(
            wrap
                .find('.input__masked-input')
                .first()
                .prop('mask'),
        ).toEqual([/[0-1]/, /\d/, '/', /2/, /\d/, /\d/, /\d/]);
    });

    it('should render a warning message', (): void => {
        wrap.setProps({
            type: Input.types.TEXT,
            warningMsg: 'Danger!',
        });
        expect(wrap.find('.input__warning').text()).toBe('Danger!');
    });

    it('should call onChange callback', (): void => {
        const mockedOnChange = jest.fn();
        wrap.setProps({
            onChange: mockedOnChange,
        });
        wrap.find('input').simulate('change', { target: { value: 'Olá' } });
        expect(mockedOnChange).toHaveBeenCalled();
    });
});
