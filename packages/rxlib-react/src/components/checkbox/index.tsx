import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/rxlib.css';

export interface CheckboxProps {
    text: string;
    name: string;
    value: string;
    disabled: boolean;
    defaultChecked: boolean;
    referencia: React.LegacyRef<HTMLInputElement>;
    onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
    onClick?: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
}

export default function Checkbox({
    text,
    name,
    value,
    onClick,
    disabled,
    onChange,
    referencia,
    defaultChecked,
}: CheckboxProps) {
    function configurarInput(): React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
        let inputProps: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> = {
            name: name,
            value: value,
            ref: referencia,
            type: 'checkbox',
            onClick: onClick,
            onChange: onChange,
            disabled: disabled,
            'aria-label': '...',
            defaultChecked: defaultChecked,
            className: 'form-check-input me-2',
        };

        return inputProps;
    }
    return (
        <>
            <input {...configurarInput()} />
            {text}
        </>
    )
}