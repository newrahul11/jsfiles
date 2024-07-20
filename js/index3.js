const employees = [
    {
        name: 'Kushal',
        age: 20,
        designation: 'Web Developer',
        salary: 15000
    },
    {
        name: 'Anuj',
        age: 25,
        designation: 'Web Developer',
        salary: 25000
    },
    {
        name: 'Aditya',
        age: 30,
        designation: 'Web Developer',
        salary: 7000
    },
    {
        name: 'Mukesh',
        age: 25,
        designation: 'Web Developer',
        salary: 10000
    },
    {
        name: 'Sharukh',
        age: 18,
        designation: 'Web Developer',
        salary: 8000
    },
];

const greaterThanThree = nums.filter((num) => {
    const secondNum = num * 2
    return secondNum <= nums[nums.length - 1]
})
