const sortData = require('../../es6/utility/sort');

describe('Test suite for sort', () => {
    it('should sort array item based on key given', () => {
        const inputData = [
            {
                name: 'Prem Prakash',
                age: 30
            },
            {
                name: 'Akash Kumar',
                age: 29
            },
            {
                name: 'Brajesh Kumar',
                age: 35
            }
        ];

        const outputDate = [
            {
                name: 'Akash Kumar',
                age: 29
            },
            {
                name: 'Brajesh Kumar',
                age: 35
            },
            {
                name: 'Prem Prakash',
                age: 30
            },
        ];
        expect(sortData(inputData, 'name')).toEqual(outputDate)
    });
    it('should sort array item based on key given', () => {
        const inputData = [
            {
                name: 'Prem Prakash',
                age: 30
            },
            {
                name: 'Akash Kumar',
                age: 29
            },
            {
                name: 'Brajesh Kumar',
                age: 35
            }
        ];

        const outputDate = [
            {
                name: 'Akash Kumar',
                age: 29
            },
            {
                name: 'Prem Prakash',
                age: 30
            },
            {
                name: 'Brajesh Kumar',
                age: 35
            }
        ];
        expect(sortData(inputData, 'age')).toEqual(outputDate)
    });
});

