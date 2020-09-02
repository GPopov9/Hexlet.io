import generator from 'generate-password';

export default class PasswordGeneratorAdapter {
  // BEGIN (write your solution here)
    options = {
      symbols: false,
      numbers: false,
      uppercase: false,
    };

    generatePassword(length, options) {
      const preparedOptions = Object.fromEntries(options.map((o) => [o, true]));
      const finalOptions = { ...this.options, ...preparedOptions, length };
      return generator.generate(finalOptions);
    }
  // END
}
