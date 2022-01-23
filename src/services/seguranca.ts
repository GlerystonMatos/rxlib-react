/* rxlib-react - seguranca v1.0.0 */

import jwt_decode, { JwtPayload } from 'jwt-decode';

interface Jwt extends JwtPayload {
    id: string;
    name: string;
    email: string;
    role: string[];
    licensed: string;
    administrador: string;
}

export function obterIdUsuarioJwt(token: string): string {
    if (!token) {
        return '';
    }

    let id = jwt_decode<Jwt>(token).id;
    return id
        ? id
        : '';
}

export function obterNomeUsuarioJwt(token: string): string {
    if (!token) {
        return 'Não identificado';
    }

    let usuario = jwt_decode<Jwt>(token).name;
    return usuario
        ? usuario
        : 'Não identificado';
}

export function obterEmailUsuarioJwt(token: string): string {
    if (!token) {
        return '';
    }

    let email = jwt_decode<Jwt>(token).email;
    return email
        ? email
        : '';
}

export function obterLicenciadaJwt(token: string): string {
    if (!token) {
        return '';
    }

    let licensed = jwt_decode<Jwt>(token).licensed;
    return licensed
        ? licensed
        : '';
}

export function obterAdministradorJwt(token: string): boolean {
    if (!token) {
        return false;
    }

    let licensed: boolean = (jwt_decode<Jwt>(token).administrador.toLowerCase() === 'true');
    return licensed
        ? licensed
        : false;
}

export function usuarioTemPermissaoJwt(token: string, permissao: string): boolean {
    if (!token) {
        return false;
    }

    let permissoes = jwt_decode<Jwt>(token).role;
    return permissoes
        ? !!permissoes.find(item => item === permissao)
        : false;
}

export function jwtTokenExpirado(token: string): boolean {
    if (!token) {
        return true;
    }

    let exp = jwt_decode<Jwt>(token).exp;
    if (exp) {
        return ((new Date(exp * 1000)) < (new Date()));
    } else {
        return true;
    }
}