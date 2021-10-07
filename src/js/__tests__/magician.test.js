import Magician from '../magician';

test("Тест класса Magician", () => {
    const nChar = new Magician("nChar");
    const result = {
            "attack": 10,
            "defence": 40,
            "health": 100,
            "level": 1,
            "name": "nChar",
            "type": "Magician",
          }

    expect(nChar).toEqual(result);
})