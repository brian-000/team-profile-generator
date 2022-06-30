const Engineer = require("../lib/Engineer");

const engineerProperties = {
  name: "Brian",
  id: "1",
  email: "brian@yahoo.com",
  role: "Engineer",
  github: "brian",
};

describe("Engineer", () => {
  test("create engineer object test", () => {
    const engineer = new Engineer(engineerProperties);
    expect(typeof engineer).toBe("object");
    expect(engineer.name).toBe("Brian");
    expect(engineer.id).toBe("1");
    expect(engineer.email).toBe("brian@yahoo.com");
    expect(engineer.role).toBe("Engineer");
    expect(engineer.github).toBe("brian");
  });

  describe("gitHub", () => {
    test("testing github", () => {
      const engineer = new Engineer(engineerProperties);
      expect(engineer.github).toBe("brian");
    });
  });

  describe("Engineer Role", () => {
    test('testing getRole()', () => {
      const engineer = new Engineer(engineerProperties);
      expect(engineer.role).toBe("Engineer");
    });
  });
});