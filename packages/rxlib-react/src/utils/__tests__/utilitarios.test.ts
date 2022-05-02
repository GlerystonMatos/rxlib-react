import { obterIdButton, formatarPorTipo } from '../utilitarios';

describe('Teste em execução para utils > utilitarios', () => {

    test('obterIdButton', () => {
        let currentTarget: any = {
            id: 'idteste',
        };

        let event: any = {
            currentTarget: currentTarget,
        };

        const e: React.FormEvent<HTMLButtonElement> = event;
        expect(obterIdButton(e)).toBe('idteste');
    });

    test('formatarPorTipo string', () => {
        expect(formatarPorTipo('string', 'valor')).toBe('valor');
    });

    test('formatarPorTipo boolean true', () => {
        expect(formatarPorTipo('boolean', 'true')).toBe('Sim');
    });

    test('formatarPorTipo boolean false', () => {
        expect(formatarPorTipo('boolean', 'false')).toBe('Não');
    });

    test('formatarPorTipo date', () => {
        expect(formatarPorTipo('date', '2022-04-30T14:36:12')).toBe('30/04/2022');
    });

    test('formatarPorTipo status 0', () => {
        expect(formatarPorTipo('status', '0')).toBe('Inativo');
    });

    test('formatarPorTipo status 1', () => {
        expect(formatarPorTipo('status', '1')).toBe('Ativo');
    });

    test('formatarPorTipo currency', () => {
        expect(formatarPorTipo('currency', '1000.00')).toBe('1.000,00');
    });
});