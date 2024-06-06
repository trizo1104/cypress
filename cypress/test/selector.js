import { describe, it } from "mocha";

describe('element interaction', () => {

    const dateCases = [
        { day: 29, month: 2, year: 2020, expectedResult: 'dd/mm/yyyy is correct date time' },
        { day: 31, month: 4, year: 2021, expectedResult: 'dd/mm/yyyy is NOT correct date time' },
        { day: 15, month: 8, year: 2023, expectedResult: 'dd/mm/yyyy is correct date time' },
        { day: 30, month: 2, year: 2021, expectedResult: 'dd/mm/yyyy is NOT correct date time' },
        { day: '', month: '', year: '', expectedResult: 'Please fill in all fields' },
        { day: '', month: 1, year: 2000, expectedResult: 'Please fill in all fields' },
        { day: 32, month: 1, year: 2023, expectedResult: 'Input data for Day is out of range' },
        { day: 28, month: 2, year: 2023, expectedResult: 'dd/mm/yyyy is correct date time' },
        { day: 3, month: 13, year: 2023, expectedResult: 'Input data for Month is out of range' }
    ];


    dateCases.forEach((dateCase) => {
        it('shoud be able to complete the form', () => {
            cy.visit("http://localhost:3000/")

            if (dateCase.day) { cy.get("input[name='day']").clear().type(dateCase.day); }
            if (dateCase.month) { cy.get("input[name='month']").clear().type(dateCase.month); }
            if (dateCase.year) { cy.get("input[name='year']").clear().type(dateCase.year); }
            cy.get("button[name='check']").click();

            cy.contains(dateCase.expectedResult);

            cy.wait(2000);
        })
    })
})
