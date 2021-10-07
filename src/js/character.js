/* eslint-disable no-unused-vars */
// eslint-disable-next-line max-classes-per-file
export default class Character {
  constructor(name) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Не корректные данные');
    } else {
      this.name = name;
    }

    this.health = 100;
    this.level = 1;
  }
}
