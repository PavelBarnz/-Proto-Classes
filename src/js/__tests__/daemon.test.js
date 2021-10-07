import Daemon from '../daemon';

test("Тест класса Daemon", () => {
    const nChar = new Daemon("nChar");
    const result = {
            "attack": 10,
            "defence": 40,
            "health": 100,
            "level": 1,
            "name": "nChar",
            "type": "Daemon",
          }

    expect(nChar).toEqual(result);
})