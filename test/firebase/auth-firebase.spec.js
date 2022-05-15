/*
* @jest-environment jsdom
*/
/* eslint-disable */
import register from '../../src/pages/home/register.js'
import * as exports from '../../src/firebase/exports.js';

jest.mock('../../src/firebase/exports.js');

describe('userRegister', () => {
  beforeEach(() => exports.createUserWithEmailAndPassword.mockClear());
  it('Erro de senhas não coincidirem', () => {
    const pgRegister = register();
    const user = pgRegister.querySelector('#name');
    const email = pgRegister.querySelector('#emailRegister');
    const password = pgRegister.querySelector('#password');
    const confiPassword = pgRegister.querySelector('#checkPassword');
    const btnRegister = pgRegister.querySelector('#buttonRegister');
    const erro = pgRegister.querySelector('#erro');
    user.value = 'Testesss';
    email.value = 'teste@teste1234.com';
    password.value = '123456';
    confiPassword.value = '1234567';
    btnRegister.dispatchEvent(new Event('click'));
    expect(erro.innerHTML).toEqual('As senhas precisam ser iguais');
    expect(exports.createUserWithEmailAndPassword).not.toHaveBeenCalled();
  });
});

describe('userRegister', () => {
  it('Cadastro com sucesso', () => {
    exports.createUserWithEmailAndPassword.mockResolvedValueOnce()
    const pgRegister = register();
    const user = pgRegister.querySelector('#name');
    const email = pgRegister.querySelector('#emailRegister');
    const password = pgRegister.querySelector('#password');
    const confiPassword = pgRegister.querySelector('#checkPassword');
    const btnRegister = pgRegister.querySelector('#buttonRegister');
    user.value = 'Testesss';
    email.value = 'teste12345@gmail.com';
    password.value = '1234567';
    confiPassword.value = '1234567';
    btnRegister.dispatchEvent(new Event('click'));
    expect(exports.createUserWithEmailAndPassword.mock.calls[0][1]).toBe('teste12345@gmail.com');
    expect(exports.createUserWithEmailAndPassword.mock.calls[0][2]).toBe('1234567');
    expect(exports.createUserWithEmailAndPassword).toHaveBeenCalledTimes(1);
  });
});


