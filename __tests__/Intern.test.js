const Intern = require("../lib/Intern");
const internProperties = {
    name: "Brian",
    id: "2",
    email: "brian@yahoo.com",
    role: "Intern",
    school: "harvard",
};
describe("intern class", () => {
    test("creating intern", () => {
        const intern = new Intern(internProperties);
        expect(typeof intern).toBe("object");
        expect(intern.name).toBe("Brian");
        expect(intern.id).toBe("2");
        expect(intern.role).toBe("Intern");
        expect(intern.school).toBe("harvard");
    });

    describe("intern role", () => {
        test('testing getRole()', () => {
            const intern = new Intern(internProperties);
            expect(intern.role).toBe("Intern");
        });
    });

    describe("intern school", () => {
        test("testing getSchool()", () => {
            const intern = new Intern(internProperties);
            expect(intern.school).toBe("harvard");
        });
    });
});