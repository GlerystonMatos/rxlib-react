import { maskValue } from '../mask';

describe('Teste em execução para utils > mask', () => {

    test('maskValue cpf', () => {
        expect(maskValue('00000000000', 'cpf')).toBe('000.000.000-00');
    });

    test('maskValue cnpj', () => {
        expect(maskValue('00000000000000', 'cnpj')).toBe('00.000.000/0000-00');
    });

    test('maskValue cep', () => {
        expect(maskValue('00000000', 'cep')).toBe('00.000-000');
    });

    test('maskValue telefone', () => {
        expect(maskValue('00000000000', 'telefone')).toBe('(00) 00000-0000');
    });

    test('maskValue currency 0', () => {
        expect(maskValue('0', 'currency')).toBe('0,00');
    });

    test('maskValue currency 1', () => {
        expect(maskValue('1', 'currency')).toBe('0,01');
    });

    test('maskValue currency 2', () => {
        expect(maskValue('10', 'currency')).toBe('0,10');
    });

    test('maskValue currency 3', () => {
        expect(maskValue('100', 'currency')).toBe('1,00');
    });

    test('maskValue currency 4', () => {
        expect(maskValue('1000', 'currency')).toBe('10,00');
    });

    test('maskValue currency 5', () => {
        expect(maskValue('10000', 'currency')).toBe('100,00');
    });

    test('maskValue currency 6', () => {
        expect(maskValue('100000', 'currency')).toBe('1.000,00');
    });

    test('maskValue currency 7', () => {
        expect(maskValue('1000000', 'currency')).toBe('10.000,00');
    });

    test('maskValue currency 8', () => {
        expect(maskValue('10000000', 'currency')).toBe('100.000,00');
    });

    test('maskValue currency 9', () => {
        expect(maskValue('100000000', 'currency')).toBe('1.000.000,00');
    });

    test('maskValue currency 10', () => {
        expect(maskValue('1000000000', 'currency')).toBe('10.000.000,00');
    });

    test('maskValue currency 11', () => {
        expect(maskValue('10000000000', 'currency')).toBe('100.000.000,00');
    });

    test('maskValue number', () => {
        expect(maskValue('A1', 'number')).toBe('1');
    });

});