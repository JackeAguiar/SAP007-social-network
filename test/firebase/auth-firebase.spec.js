import {
  userRegister,
} from '../../src/firebase/auth-firebase.js';
import * as exports from '../../src/firebase/exports.js';

jest.mock('../../src/firebase/exports.js');

describe('createUserWithEmailAndPassword', () => {
  const email = 'poptime@email.com';
  const nome = 'Poptime';
  const senha = '123456';
  it('createUserWithEmailAndPassword deve criar um usuario', () => {
    expect(userRegister).toHaveBeenCalledWith(nome, email, senha);
  });
});
exports();
// createUserWithEmailAndPassword,
