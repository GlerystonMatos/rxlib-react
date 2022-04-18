import React, { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/rxlib.css';
import './input-label.css';

import {
    maskCpf,
    maskCep,
    maskCnpj,
    maskInteiro,
    maskCurrency,
    maskTelefone,
} from './mask';

export type InputLabelSize = 'linha' | 'coluna';
export type InputLabelAccept = 'audio/*' | 'video/*' | 'image/*';
export type InputLabelType = 'text' | 'password' | 'date' | 'email' | 'number' | 'file';
export type InputLabelMask = 'cpf' | 'cnpj' | 'cep' | 'telefone' | 'currency' | 'number';

export interface InputLabelProps {
    id: string;
    name: string;
    label: string;
    limpar?: boolean;
    maxLength: number;
    readOnly: boolean;
    className?: string;
    required?: boolean;
    autoFocus?: boolean;
    placeholder: string;
    type: InputLabelType;
    defaultValue?: string;
    size?: InputLabelSize;
    mask?: InputLabelMask;
    accept?: InputLabelAccept;
    setFile?: (file: File) => void;
    referencia: React.LegacyRef<HTMLInputElement>;
    onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}

export default function InputLabel({
    id,
    name,
    type,
    mask,
    size,
    label,
    limpar,
    accept,
    setFile,
    required,
    onChange,
    readOnly,
    autoFocus,
    maxLength,
    className,
    referencia,
    placeholder,
    defaultValue,
}: InputLabelProps) {
    const [valorPadrao, setValorPadrao] = useState<string>('');

    let inputSize: string = 'linha';
    if (size !== undefined) {
        inputSize = size;
    }

    let classNameInput: string = 'form-control';
    if ((className) && (className !== '')) {
        classNameInput = className + ' ' + classNameInput;
    }

    switch (inputSize) {
        case 'linha':
            classNameInput += ' rxlib-input-label-linha';
            break;
        case 'coluna':
            classNameInput += ' rxlib-input-label-coluna';
            break;
    }

    let inputRequired: boolean = true;
    if (required !== undefined) {
        inputRequired = required;
    }

    let inputLimpar: boolean = false;
    if (limpar !== undefined) {
        inputLimpar = limpar;
    }

    let inputAutoFocus: boolean = false;
    if (autoFocus !== undefined) {
        inputAutoFocus = autoFocus;
    }

    function verificarEvento(event: React.ChangeEvent<HTMLInputElement>) {
        if (mask) {
            const { value } = event.currentTarget;
            event.currentTarget.value = getMask(value);
        }

        if ((type === 'file') && (setFile)) {
            if ((event.target) && (event.target.files) && (event.target.files[0])) {
                setFile(event.target.files[0]);
            }
        }

        if (onChange) {
            onChange(event);
        }
    }

    function getMask(value: string): string {
        switch (mask) {
            case 'cpf':
                return maskCpf(value);
            case 'cnpj':
                return maskCnpj(value);
            case 'cep':
                return maskCep(value);
            case 'telefone':
                return maskTelefone(value);
            case 'currency':
                return maskCurrency(value);
            case 'number':
                return maskInteiro(value);
            default:
                return value;
        }
    }

    useEffect(() => {
        function formatarValorDecimal(valor: string): string {
            const valorPadraoOriginal: number = parseFloat(valor);

            let formatador: Intl.NumberFormat = Intl.NumberFormat("pr-BR", {
                currency: "BRL",
                style: "decimal",
                minimumFractionDigits: 2,
            });

            return formatador.format(valorPadraoOriginal);
        }

        function setStateValorPadrao() {
            if (defaultValue) {
                if ((String(defaultValue) === '') && (mask === 'currency')) {
                    setValorPadrao('0,00');
                } else if ((String(defaultValue) !== '') && (mask === 'currency')) {
                    setValorPadrao(formatarValorDecimal(defaultValue));
                } else if ((String(defaultValue) === '') && (mask === 'number')) {
                    setValorPadrao('0');
                } else {
                    setValorPadrao(defaultValue);
                }
            } else {
                setValorPadrao('');
            }
        }

        setStateValorPadrao();
    }, [defaultValue, mask]);

    function configurarInput(): React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
        const tamanhoMinimo: number = 0;
        const incrementoQuandoInputTipoNumber: number = 1;

        let inputProps: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> = {
            id: id,
            name: name,
            type: type,
            accept: accept,
            ref: referencia,
            min: tamanhoMinimo,
            readOnly: readOnly,
            maxLength: maxLength,
            required: inputRequired,
            placeholder: placeholder,
            className: classNameInput,
            autoFocus: inputAutoFocus,
            step: incrementoQuandoInputTipoNumber,
            defaultValue: (inputLimpar ? '' : valorPadrao),
            onChange: (readOnly ? onChange : (event: React.ChangeEvent<HTMLInputElement>) => verificarEvento(event)),
        };

        if (inputLimpar) {
            inputProps.value = '';
        }

        if (type === 'date') {
            inputProps.max = '9999-12-31';
        }

        return inputProps;
    }

    return (
        <>
            {
                (label !== '')
                    ? <label htmlFor={id} className='form-label'>{label}</label>
                    : ''
            }
            <input {...configurarInput()} />
        </>
    );
}