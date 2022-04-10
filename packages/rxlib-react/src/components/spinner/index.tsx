import './spinner.css';
import '../../style/rxlib.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export interface SpinnerProps {
    classNameDiv?: string;
    classNameSpinner?: string;
    type: 'rxlib-spinner' | 'text-primary' | 'text-secondary' | 'text-success' | 'text-danger' | 'text-warning' | 'text-info' | 'text-light' | 'text-dark';
}

export default function Spinner(props: SpinnerProps) {
    let cssClassNameDiv = 'text-center';
    if ((props.classNameDiv) && (props.classNameDiv !== '')) {
        cssClassNameDiv = props.classNameDiv + ' ' + cssClassNameDiv;
    }

    let cssClassNameSpinner = 'spinner-border ' + props.type;
    if ((props.classNameSpinner) && (props.classNameSpinner !== '')) {
        cssClassNameSpinner = props.classNameSpinner + ' ' + cssClassNameSpinner;
    }

    return (
        <div className={cssClassNameDiv}>
            <div className={cssClassNameSpinner} role='status'>
                <span className='visually-hidden'>Loading...</span>
            </div>
        </div>
    );
}