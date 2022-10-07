/** @jest-environment jsdom */
import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';


describe('Pruebas en FirstApp', () => { 
    
    // test('Debe hacer match con snapshot', () => { 
    //     const title = 'Hola, soy yo';
    //     const { container } = render( <FirstApp title={ title } /> )
        
    //     expect(container).toMatchSnapshot();
    //     });
    test('Debe mostrar el título en un h1', () => { 
        const title = 'Hola, soy yo';
        const { container, getByText,getByTestId } = render( <FirstApp title={ title } /> )
        expect(getByText(title) ).toBeTruthy();
        expect(getByTestId('test-title').innerHTML).toContain(title);
        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain( title );
     });

     test('Debe mostrar subtitulo enviado por props', () => { 
        const title = 'Hola, soy yo';
        const subTitle = 'Soy un subtítulo'
        const { getAllByText } = render(
                <FirstApp 
                    title={ title }
                    subTitle={ subTitle }
                /> 
            );
        
        expect(getAllByText(subTitle).length ).toBe(2);
      })
 });