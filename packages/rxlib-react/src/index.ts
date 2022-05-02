export * from './components/spinner';
import Spinner from './components/spinner';

export * from './components/breadcrumb';
import Breadcrumb from './components/breadcrumb';

export * from './components/buttons/button';
import Button from './components/buttons/button';

export * from './components/buttons/button-link';
import ButtonLink from './components/buttons/button-link';

export * from './components/buttons/buttons-crud';
import ButtonsCrud from './components/buttons/buttons-crud';

export * from './components/input-label';
import InputLabel from './components/input-label';

export * from './components/checkbox';
import Checkbox from './components/checkbox';

export * from './components/textarea-label';
import TextareaLabel from './components/textarea-label';

export * from './components/buttons/button-table-order';
import ButtonTableOrder from './components/buttons/button-table-order';

export * from './components/table';
import Table from './components/table';

import { maskValue } from './utils/mask';

import {
    obterIdButton,
    TipoFormatacao,
    formatarPorTipo,
} from './utils/utilitarios';

export {
    /* components  */
    Table,
    Button,
    Spinner,
    Checkbox,
    ButtonLink,
    Breadcrumb,
    InputLabel,
    ButtonsCrud,
    TextareaLabel,
    ButtonTableOrder,
    /* functions  */
    maskValue,
    obterIdButton,
    formatarPorTipo,
    /* type  */
    TipoFormatacao,
};