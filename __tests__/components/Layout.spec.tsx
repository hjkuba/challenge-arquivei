import * as React from 'react';
import { shallow } from 'enzyme';
import Layout from '../../components/Layout';

describe('Layout', (): void => {
    const wrap = shallow(
        <Layout>
            <p>Hello World!</p>
        </Layout>,
    );

    it('should render the layout with the correct title', (): void => {
        expect(wrap.find('.layout__title').text()).toBe('Arquivei FrontEnd Challenge');
    });

    it('should render the layout with an children element', (): void => {
        wrap.setProps({
            children: <p>Olá Mundo</p>,
        });
        expect(wrap.find('p').text()).toBe('Olá Mundo');
    });

    it('should render the layout with multiple children elements', (): void => {
        wrap.setProps({
            children: [<p key={0}>Olá Mundo</p>, <p key={1}>Adeus Mundo</p>],
        });
        expect(
            wrap
                .find('p')
                .first()
                .text(),
        ).toBe('Olá Mundo');
        expect(
            wrap
                .find('p')
                .at(1)
                .text(),
        ).toBe('Adeus Mundo');
    });
});
