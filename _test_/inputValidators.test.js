  
describe("Testing the submit functionality", () => { 
    test("testing the inputValidators() function", () => {
        document.body.innerHTML = 
           '<div>' +
           '    <span id="submit" />' +
           '    <button id="reset" />' +
           '</div>';
            const inputValidators = require("../src/client/js/inputValidators")
            expect(inputValidators('london')).toBe(true);
        });
    })

