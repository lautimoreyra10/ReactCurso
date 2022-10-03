import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';

describe('Pruebas en 08-imp-exp', () => { 
    test('getHeroeById debe retornar un héroe por ID', async () => { 
        const id = 1;
        const hero = getHeroeById(id);

        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
    });
    test('getHeroeById debe retornar undefined si no existe el id', () => { 
        const id = 100;
        const hero = getHeroeById(id);
        expect( hero ).toBeFalsy();
        //expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
    });

    test('Debe retornar un arreglo con los héroes de DC', () => { 
        const owner = getHeroesByOwner('DC');
        expect(owner.length).toEqual(3);
     });
     test('Debe retornar un arreglo con los héroes de Marvel', () => { 
        const owner = getHeroesByOwner('Marvel');
        expect(owner.length).toEqual(2);
     });

 })