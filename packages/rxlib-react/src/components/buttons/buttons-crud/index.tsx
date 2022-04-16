import ButtonLink from '../button-link';
import Spinner from '../../spinner';
import Button from '../button';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../style/rxlib.css';
import '../style/button-crud.css';

export interface ButtonsCrudProps {
    visualizar: boolean;
    carregando: boolean;
    onSalvar?: () => void;
    linkCancelarVoltar?: string;
    classNameDivSpinner?: string;
    onCancelarVoltar?: () => void;
    styleButton: 'btn-rxlib' | 'btn-primary' | 'btn-secondary' | 'btn-success' | 'btn-danger' | 'btn-warning' | 'btn-info' | 'btn-light' | 'btn-dark';
}

export default function ButtonsCrud({
    onSalvar,
    visualizar,
    carregando,
    styleButton,
    onCancelarVoltar,
    linkCancelarVoltar,
    classNameDivSpinner,
}: ButtonsCrudProps) {

    function getStyleSpinner(): 'rxlib-spinner' | 'text-primary' | 'text-secondary' | 'text-success' | 'text-danger' | 'text-warning' | 'text-info' | 'text-light' | 'text-dark' {
        switch (styleButton) {
            case 'btn-rxlib':
                return 'rxlib-spinner';
            case 'btn-primary':
                return 'text-primary';
            case 'btn-secondary':
                return 'text-secondary';
            case 'btn-success':
                return 'text-success';
            case 'btn-danger':
                return 'text-danger';
            case 'btn-warning':
                return 'text-warning';
            case 'btn-info':
                return 'text-info';
            case 'btn-light':
                return 'text-light';
            case 'btn-dark':
                return 'text-dark';
            default:
                return 'rxlib-spinner';
        }
    }

    return (
        (visualizar)
            ? <div className='row px-1'>
                <div className='col-12 mt-3 d-grid'>
                    <div className='rxlib-button-crud'>
                        {
                            ((linkCancelarVoltar) && (linkCancelarVoltar !== ''))
                                ? <ButtonLink
                                    texto='Voltar'
                                    classStyle={styleButton}
                                    link={linkCancelarVoltar} />
                                : (onCancelarVoltar)
                                    ? <Button
                                        type='button'
                                        texto='Voltar'
                                        classStyle={styleButton}
                                        onClick={onCancelarVoltar} />
                                    : ''
                        }
                    </div>
                </div>
            </div>
            : <div className='row px-1'>
                <div className='col-12 mt-3 d-flex'>
                    {
                        carregando
                            ? <div className='rxlib-button-crud-spinner'>
                                <Spinner
                                    classStyle={getStyleSpinner()}
                                    classNameDiv={classNameDivSpinner} />
                            </div>
                            : <>
                                <div className='rxlib-button-crud'>
                                    <Button
                                        type='submit'
                                        texto='Salvar'
                                        onClick={onSalvar}
                                        carregando={carregando}
                                        classStyle={styleButton} />
                                </div>
                                <div className='rxlib-button-crud'>
                                    {
                                        ((linkCancelarVoltar) && (linkCancelarVoltar !== ''))
                                            ? <ButtonLink
                                                texto='Cancelar'
                                                classStyle={styleButton}
                                                link={linkCancelarVoltar} />
                                            : (onCancelarVoltar)
                                                ? <Button
                                                    type='button'
                                                    texto='Cancelar'
                                                    classStyle={styleButton}
                                                    onClick={onCancelarVoltar} />
                                                : ''
                                    }
                                </div>
                            </>
                    }
                </div>
            </div>
    );
}