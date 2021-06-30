/**
 * @jest-environment jsdom
 */
import inputValidators from "../src/client/js/inputValidators";




 describe("Testing the submit functionality", inputValidators());
    test("testing if inputValidators() is working", () => {
        it("", () => {
            expect(null).toBe(false);
        });
        it("works", () => {
            expect('Chicago').toBe(true);
        });
    });


  