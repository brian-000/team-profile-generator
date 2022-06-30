const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

const employeePropeties = {
    name: "Brian",
    id: "3",
    email: "brian@yahoo.com",
    role: "Employee",
};
describe("employee class", () => {
    test("testing creation", () => {
        const employee = new Employee(employeePropeties);
        expect(typeof employee).toBe("object");
        expect(employee.name).toBe("Brian");
        expect(employee.id).toBe("3");
        expect(employee.email).toBe("brian@yahoo.com");
        expect(employee.role).toBe("Employee");
    });

    describe("employee name", () => {
        test("testing employee name", () => { });
        const employee = new Employee(employeePropeties);
        expect(employee.name).toBe("Brian");
    });

    describe("employee id", () => {
        test("testing id", () => {
            const employee = new Employee(employeePropeties);
            expect(employee.id).toBe("3");
        });
    });

    describe("employee role", () => {
        test('testing role', () => {
            const employee = new Employee(employeePropeties);
            expect(employee.role).toBe("Employee");
        });
    });

    describe("employe email", () => {
        test("testing email", () => {
            const employee = new Employee(employeePropeties);
            expect(employee.email).toBe("brian@yahoo.com");
        });
    });
});