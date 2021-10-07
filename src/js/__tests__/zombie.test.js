import Zombie from '../zombie';

test("Тест класса Zombie", () => {
    const nChar = new Zombie("nChar");
    const result = {
            "attack": 40,
            "defence": 10,
            "health": 100,
            "level": 1,
            "name": "nChar",
            "type": "Zombie",
          }

    expect(nChar).toEqual(result);
})