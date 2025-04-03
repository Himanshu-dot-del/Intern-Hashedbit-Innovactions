//q1
const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", 
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", 
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", 
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", 
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

const filteredStates = states.filter(state => !/^[AEIOU]/i.test(state));

console.log(filteredStates);


//q2

let str = 'I love my India';
let reversedStr = str.split(' ').reverse().join(' ');

console.log(reversedStr);

//q3

let string = 'INDIA'.split(''); 
string.splice(3, 0, 'O', 'N', 'E', 'S', 'I'); 
let output = string.join(''); 

console.log(output);

//q4
function countVowelsAndConsonants(str) {
    let vowels = "AEIOUaeiou";
    let vowelCount = 0;
    let consonantCount = 0;
    
    for (let char of str) {
        if (/[a-zA-Z]/.test(char)) { 
            if (vowels.includes(char)) {
                vowelCount++;
            } else {
                consonantCount++;
            }
        }
    }
    
    return { vowels: vowelCount, consonants: consonantCount };
}

let string1 = "JavaScript is a powerful language!";
let result = countVowelsAndConsonants(string1);

console.log(`Vowels: ${result.vowels}, Consonants: ${result.consonants}`);

//q5

function correctfn(string, wrong, correct) {
    return string.replace(wrong, correct);
}


let sentence = "I am lerning JavaScript.";
let correctedSentence = correctfn(sentence, "lerning", "learning");

console.log(correctedSentence);

//q6
let inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];

let filteredArr = inputArr.filter(num => num > 5);

console.log(filteredArr);

//q7
const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] }
];

const studentsWithAverages = students.map(student => {
    let total = student.scores.reduce((sum, score) => sum + score, 0);
    let average = total / student.scores.length;
    return { name: student.name, average: average };
});

console.log(studentsWithAverages);

//q8
function repeatedDigitSum(num) {
    while (num >= 10) {
        num = num.toString().split('').reduce((sum, digit) => sum + Number(digit), 0);
    }
    return num;
}


console.log(repeatedDigitSum(456)); 
console.log(repeatedDigitSum(9876)); 

//q9
function countWords(paragraph) {
    return paragraph.trim().split(/\s+/).length;
}


let text = "This is a sample paragraph with multiple words.";
console.log(countWords(text)); 

//q10

function reverseString(str) {
    return str.split('').reverse().join('');
}


console.log(reverseString("Hello")); //

//q11


const students1 = [
    {
        name: "student1",
        marks: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        name: "student2",
        marks: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        name: "student3",
        marks: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    }
];

const studentAverages = students1.map(student => {
    let scores = Object.values(student.marks); 
    let average = Math.floor(scores.reduce((sum, score) => sum + score, 0) / scores.length); 
    return { [student.name]: { average: average } };
});

console.log(studentAverages);




