import Character from '../character.js';

test("Тест класса Character", () => {
    const nChar = new Character("nChar");
    const result = { name: 'nChar', health: 100, level: 1 }

    expect(nChar).toEqual(result);
})

test("Тест ошибки класса Character", () => {

    expect(new Character("n")).toThrowError('Не корректные данные');
})