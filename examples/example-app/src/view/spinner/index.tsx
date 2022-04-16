import { Spinner as SpinnerRx } from 'rxlib-react';

export default function Spinner() {
    return (
        <SpinnerRx
            classNameDiv='mt-5'
            classNameSpinner='mt-5'
            classStyle='rxlib-spinner' />
    );
}