/** @jest-environment jsdom */
import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';


describe('Pruebas en FirstApp', () => { 
    
    test('Debe hacer match con snapshot', () => { 
        const title = 'Hola, soy yo';
        render( <FirstApp tittle={ title } /> )
    });
 });