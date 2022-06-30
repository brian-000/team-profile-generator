const Manager = require("../lib/Manager.js");

const managerProperties = {
    name: "Brian",
    id: "4",
    email: "brian@yahoo.com",
    role: "Manager",
    officeNumber: "1",
};

describe("manager class", () => {
  test("testing creation", () => {
    const manager = new Manager(managerProperties);
    expect(typeof manager).toBe("object");
    expect(manager.name).toBe("Brian");
    expect(manager.id).toBe("4");
    expect(manager.email).toBe("brian@yahoo.com");
    expect(manager.role).toBe("Manager");
    expect(manager.officeNumber).toBe("1");
  });

  describe("manager role", () => {
    test('testing getRole ', () => {
      const manager = new Manager(managerProperties);
      expect(manager.role).toBe("Manager");
    });
  });

  describe("manager office number", () => {
    test("testing officeNumber()", () => {
      const manager = new Manager(managerProperties);
      expect(manager.officeNumber).toBe("1");
    });
  });
});