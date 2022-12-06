import {userExist} from './firebase';

const emptyInputs = (username, first, last, email, password) => {
  return new Promise((res, rej) => {
    if (username == '') {
      rej('username vacío');
    } else if (first == '') {
      rej('first name vacío');
    } else if (last == '') {
      rej('last name vacío');
    } else if (email == '') {
      rej('email vacío');
    } else if (password == '') {
      rej('password vacío');
    } else {
      res('Todos no estan vacios');
    }
  });
};

const signInValidation = (username, first, last, email, password) => {
  return new Promise((res, rej) => {
    emptyInputs(username, first, last, email, password)
      .then(() => userExist(username))
      .then(() => res('Todo validado'))
      .catch(err => rej(err));
  });
};

export {signInValidation};
