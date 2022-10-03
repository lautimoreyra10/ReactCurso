import { getHeroeById } from '../../src/base-pruebas/08-imp-exp';

describe('Pruebas en 08-imp-exp', () => { 
    test('getHeroeById debe retornar un héroe por ID', async () => { 
        const id = 1;
        const hero = getHeroeById(id);

        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
    });
    test('getHeroeById debe retornar undefined si no existe el id', async () => { 
        const id = 100;
        const hero = getHeroeById(id);
        console.log(hero);
        //expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
    });
 })