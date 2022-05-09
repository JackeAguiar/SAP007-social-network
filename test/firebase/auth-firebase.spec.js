import { userRegister } from '../../src/firebase/auth-firebase.js';
import * as exports from '../../src/firebase/exports.js';

jest.mock('../../src/firebase/exports.js');

it('userRegister deve criar um usuario', () => {
// console.log(exports)
});
userRegister();
exports();
