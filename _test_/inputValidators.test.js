import {inputValidatores} from '../src/client/js/inputValidators';

describe("Testing the submit functionality", () => {

    test("Testing the inputValidators() function", () => {

        expect(inputValidatores).toBeTruthy();
    })
});