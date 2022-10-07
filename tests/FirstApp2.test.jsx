/** @jest-environment jsdom */
import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';


describe('Pruebas en FirstApp', () => {

    const title = 'Hola, soy yo'
    const subTitle = 'Hola soy un subtitulo'

    test('Debe hacer match con snapshot', () => {

        const { container } = render(<FirstApp title={title} />);
        expect(container).toMatchSnapshot();

    });
    test('Debe mostrar el mensaje "Hola, soy yo"', () => {
        render(<FirstApp title={title} />);
        // screen.debug();
        expect(screen.getByText(title)).toBeTruthy();
    });
    test('debe mostrar el título en un h1', () => {
        render(<FirstApp title={title} />);
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);
    });
    test('debe mostrar el subtitulo enviado por props', () => {
        render(
            <FirstApp
                title={title}
                subTitle={subTitle}
            />
        );
        expect(screen.getAllByText(subTitle).length).toBe(2);
    });
});