import {
    jwtTokenExpirado,
    obterIdUsuarioJwt,
    obterLicenciadaJwt,
    obterNomeUsuarioJwt,
    obterEmailUsuarioJwt,
    obterAdministradorJwt,
    usuarioTemPermissaoJwt,
} from '../seguranca';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsaWNlbnNlZCI6IiIsImFkbWluaXN0cmFkb3IiOiJUcnVlIiwiaWQiOiJiNzM5MDQ0OC1j' +
    'MmMwLTRlMjctOWZjNS00ZTJlNzcwODhjNTIiLCJuYW1lIjoiR2xlcnlzdG9uIE1hdG9zIiwiZW1haWwiOiJnbGVyeXN0b25tYXRvc0ByeGNydWQuY29tLmJ' +
    'yIiwicm9sZSI6WyJ1c3VhcmlvX3Zpc3VhbGl6YXIiLCJ1c3VhcmlvX25vdm8iLCJ1c3VhcmlvX2VkaXRhciIsInVzdWFyaW9fZXhjbHVpciIsInBlcmZpbF' +
    '91c3VhcmlvX3Zpc3VhbGl6YXIiLCJwZXJmaWxfdXN1YXJpb19ub3ZvIiwicGVyZmlsX3VzdWFyaW9fZWRpdGFyIiwicGVyZmlsX3VzdWFyaW9fZXhjbHVpc' +
    'iIsImNvbnRyb2xlX2FjZXNzb192aXN1YWxpemFyIiwiY29udHJvbGVfYWNlc3NvX2VkaXRhciJdLCJuYmYiOjE2NDI5NjM1MTUsImV4cCI6MTY0Mjk3MDcx' +
    'NSwiaWF0IjoxNjQyOTYzNTE1fQ.hILZ71oW9NVp3N4pB_QcOI5tdf1DhB2WR1sivi8nIqU';

describe('Running Test for rxlib-react jwtTokenExpirado', () => {

    test('jwtTokenExpirado null', () => {
        expect(jwtTokenExpirado(null)).toBe(true);
    });

    test('jwtTokenExpirado undefined', () => {
        expect(jwtTokenExpirado(undefined)).toBe(true);
    });

    test('jwtTokenExpirado vazio', () => {
        expect(jwtTokenExpirado('')).toBe(true);
    });

    test('jwtTokenExpirado', () => {
        expect(jwtTokenExpirado(token)).toBe(false);
    });

});

describe('Running Test for rxlib-react obterIdUsuarioJwt', () => {

    test('obterIdUsuarioJwt null', () => {
        expect(obterIdUsuarioJwt(null)).toBe('');
    });

    test('obterIdUsuarioJwt undefined', () => {
        expect(obterIdUsuarioJwt(undefined)).toBe('');
    });

    test('obterIdUsuarioJwt vazio', () => {
        expect(obterIdUsuarioJwt('')).toBe('');
    });

    test('obterIdUsuarioJwt', () => {
        expect(obterIdUsuarioJwt(token)).toBe('b7390448-c2c0-4e27-9fc5-4e2e77088c52');
    });

});

describe('Running Test for rxlib-react obterLicenciadaJwt', () => {

    test('obterLicenciadaJwt null', () => {
        expect(obterLicenciadaJwt(null)).toBe('');
    });

    test('obterLicenciadaJwt undefined', () => {
        expect(obterLicenciadaJwt(undefined)).toBe('');
    });

    test('obterLicenciadaJwt vazio', () => {
        expect(obterLicenciadaJwt('')).toBe('');
    });

    test('obterLicenciadaJwt', () => {
        expect(obterLicenciadaJwt(token)).toBe('');
    });

});

describe('Running Test for rxlib-react obterNomeUsuarioJwt', () => {

    test('obterNomeUsuarioJwt null', () => {
        expect(obterNomeUsuarioJwt(null)).toBe('Não identificado');
    });

    test('obterNomeUsuarioJwt undefined', () => {
        expect(obterNomeUsuarioJwt(undefined)).toBe('Não identificado');
    });

    test('obterNomeUsuarioJwt vazio', () => {
        expect(obterNomeUsuarioJwt('')).toBe('Não identificado');
    });

    test('obterNomeUsuarioJwt', () => {
        expect(obterNomeUsuarioJwt(token)).toBe('Gleryston Matos');
    });

});

describe('Running Test for rxlib-react obterEmailUsuarioJwt', () => {

    test('obterEmailUsuarioJwt null', () => {
        expect(obterEmailUsuarioJwt(null)).toBe('');
    });

    test('obterEmailUsuarioJwt undefined', () => {
        expect(obterEmailUsuarioJwt(undefined)).toBe('');
    });

    test('obterEmailUsuarioJwt vazio', () => {
        expect(obterEmailUsuarioJwt('')).toBe('');
    });

    test('obterEmailUsuarioJwt', () => {
        expect(obterEmailUsuarioJwt(token)).toBe('glerystonmatos@rxcrud.com.br');
    });

});

describe('Running Test for rxlib-react obterEmailUsuarioJwt', () => {

    test('obterAdministradorJwt null', () => {
        expect(obterAdministradorJwt(null)).toBe(false);
    });

    test('obterAdministradorJwt undefined', () => {
        expect(obterAdministradorJwt(undefined)).toBe(false);
    });

    test('obterAdministradorJwt vazio', () => {
        expect(obterAdministradorJwt('')).toBe(false);
    });

    test('obterAdministradorJwt', () => {
        expect(obterAdministradorJwt(token)).toBe(true);
    });

});

describe('Running Test for rxlib-react usuarioTemPermissaoJwt', () => {

    test('usuarioTemPermissaoJwt null', () => {
        expect(usuarioTemPermissaoJwt(null, null)).toBe(false);
    });

    test('usuarioTemPermissaoJwt undefined', () => {
        expect(usuarioTemPermissaoJwt(undefined, undefined)).toBe(false);
    });

    test('usuarioTemPermissaoJwt vazio', () => {
        expect(usuarioTemPermissaoJwt('', '')).toBe(false);
    });

    test('usuarioTemPermissaoJwt', () => {
        expect(usuarioTemPermissaoJwt(token, 'controle_acesso_editar')).toBe(true);
    });

});