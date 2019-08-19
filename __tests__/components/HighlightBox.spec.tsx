import * as React from 'react';
import { shallow } from 'enzyme';
import HighlightBox from '../../components/HighlightBox';

describe('HighlightBox', (): void => {
    const wrap = shallow(
        <HighlightBox type={HighlightBox.types.PRIMARY} alignment={HighlightBox.alignment.CENTER}>
            <p>Hello</p>
        </HighlightBox>,
    );

    it('should render the box with an element passed as children', (): void => {
        wrap.setProps({
            children: <p>Hello</p>,
        });
        expect(
            wrap
                .find('.highlight-box')
                .find('p')
                .text(),
        ).toBe('Hello');
    });

    it('should render the box with multiple elements as children', (): void => {
        wrap.setProps({
            children: [<p key={0}>Hello</p>, <p key={1}>World</p>],
        });
        expect(wrap.find('.highlight-box').children().length).toBe(3);
    });

    it('should render the correct type of box', (): void => {
        wrap.setProps({
            type: HighlightBox.types.PRIMARY,
        });
        expect(wrap.find('.highlight-box').hasClass('highlight-box--primary')).toBe(true);

        wrap.setProps({
            type: HighlightBox.types.SUCCESS,
        });
        expect(wrap.find('.highlight-box').hasClass('highlight-box--success')).toBe(true);

        wrap.setProps({
            type: HighlightBox.types.ALERT,
        });
        expect(wrap.find('.highlight-box').hasClass('highlight-box--alert')).toBe(true);

        wrap.setProps({
            type: HighlightBox.types.ERROR,
        });
        expect(wrap.find('.highlight-box').hasClass('highlight-box--error')).toBe(true);

        wrap.setProps({
            type: HighlightBox.types.GREY_100,
        });
        expect(wrap.find('.highlight-box').hasClass('highlight-box--grey-100')).toBe(true);
    });

    it('should render a box with correct alignment', (): void => {
        wrap.setProps({
            alignment: HighlightBox.alignment.LEFT,
        });
        expect(wrap.find('.highlight-box').hasClass('highlight-box--left')).toBe(true);

        wrap.setProps({
            alignment: HighlightBox.alignment.CENTER,
        });
        expect(wrap.find('.highlight-box').hasClass('highlight-box--center')).toBe(true);

        wrap.setProps({
            alignment: HighlightBox.alignment.RIGHT,
        });
        expect(wrap.find('.highlight-box').hasClass('highlight-box--right')).toBe(true);
    });
});
