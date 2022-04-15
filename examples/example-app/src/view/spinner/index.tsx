import { Spinner as SpinnerRx } from 'rxlib-react';

export default function Spinner() {
    return (
        <SpinnerRx
            classNameDiv='mt-5'
            type='rxlib-spinner'
            classNameSpinner='mt-5' />
    );
}