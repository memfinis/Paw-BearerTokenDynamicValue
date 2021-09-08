@registerDynamicValueClass
class BearerTokenDynamicValue {
  static identifier = 'com.memfinis.PawExtensions.BearerTokenDynamicValue';
  static title = 'Bearer Token';
  static help = 'https://github.com/memfinis/Paw-BearerTokenDynamicValue';
  static inputs = [
    InputField('token', 'Token', 'SecureValue')
  ];

  title() {
    return 'Bearer Token'
  }

  evaluate() {
    return `Bearer ${this.token}`
  }
}
