import Bowerman from '../bowerman';

test("Тест класса Bowerman", () => {
    const nChar = new Bowerman("nChar");
    const result = {
            "attack": 25,
            "defence": 25,
            "health": 100,
            "level": 1,
            "name": "nChar",
            "type": "Bowerman",
          }

    expect(nChar).toEqual(result);
})