import Swordsman from '../swordsman';

test("Тест класса Swordsman", () => {
    const nChar = new Swordsman("nChar");
    const result = {
            "attack": 40,
            "defence": 10,
            "health": 100,
            "level": 1,
            "name": "nChar",
            "type": "Swordsman",
          }

    expect(nChar).toEqual(result);
})