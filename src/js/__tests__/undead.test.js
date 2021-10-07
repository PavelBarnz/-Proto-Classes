import Undead from '../undead';

test("Тест класса Undead", () => {
    const nChar = new Undead("nChar");
    const result = {
            "attack": 25,
            "defence": 25,
            "health": 100,
            "level": 1,
            "name": "nChar",
            "type": "Undead",
          }

    expect(nChar).toEqual(result);
})