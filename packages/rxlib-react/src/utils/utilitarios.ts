export function obterIdButton(e: React.FormEvent<HTMLButtonElement>): string {
    if ((e) && (e.currentTarget) && (e.currentTarget.id)) {
        return e.currentTarget.id;
    }
    else {
        return '';
    }
}

export type TipoFormatacao = 'string' | 'boolean' | 'date' | 'status' | 'currency';

export function formatarPorTipo(tipo: TipoFormatacao, valor: string): string {
    switch (tipo) {
        case 'boolean':
            return formatarBoolean(valor);
        case 'date':
            return formatarData(valor);
        case 'status':
            return formatarStatus(valor);
        case 'currency':
            return formatarCurrency(valor);
        default:
            return valor;
    }
}

function formatarBoolean(valor: string): string {
    switch (valor) {
        case 'true':
            return 'Sim';
        case 'false':
            return 'Não';
        default:
            return '';
    }
}

function formatarData(data: string): string {
    if (data) {
        const arrayData = data.substring(0, 10).split('-');
        return arrayData[2] + '/' + arrayData[1] + '/' + arrayData[0];
    } else {
        return '';
    }
}

function formatarStatus(valor: string): string {
    switch (parseInt(valor)) {
        case 1:
            return 'Ativo';
        case 0:
            return 'Inativo';
        default:
            return '';
    }
}

function formatarCurrency(valor: string): string {
    if (valor === null) {
        return '0,00';
    }
    const casasDecimais = 2;
    const separadorMilhar = '.';
    const separadorDecimal = ',';
    const valorFloat = parseFloat(valor).toFixed(casasDecimais);
    const [currency, decimal] = valorFloat.split('.');
    return `${currency.replace(/\B(?=(\d{3})+(?!\d))/g, separadorMilhar)}${separadorDecimal}${decimal}`;
}