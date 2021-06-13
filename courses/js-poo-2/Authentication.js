export class Authentication {
  static login(authenticable, password) {
    if (Authentication.auth(authenticable)) {
      return authenticable.auth(password);
    }

    return false;
  }

  static auth(authenticable) {
    return 'auth' in authenticable && authenticable.auth instanceof Function;
  }
}
