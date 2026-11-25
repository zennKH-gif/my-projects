// ===== PART 1: Create a Student Record Object =====
const studentRecord = {
    name: "Zenn Hatashema",
    grade: 12,
    strand: "TVL-ICT CSS",
    subjects: ["Computer Programming", "Networking", "Research"],
    grades: [93, 94, 95, 96]
};

console.log("=== Student Record ===");
console.log("Name:", studentRecord.name);
console.log("Strand:", studentRecord.strand);
console.log("First Subject:", studentRecord.subjects[0]);

// ===== PART 2: Update & Add Properties =====
studentRecord.school = "Caduha-an National High School";
studentRecord.subjects.push("CSS");
studentRecord.grades.push(94);

console.log("Updated Student Record:", studentRecord);

// ===== PART 3: Calculate Average Grade with a Function =====
function getAverageGrade(gradeList) {
    let sum = 0;
    for (let i = 0; i < gradeList.length; i++) {
        sum += gradeList[i];
    }
    return sum / gradeList.length
}

const average = getAverageGrade(studentRecord.grades);
console.log(`Average Grade: ${average.toFixed(2)}`);

function printStudentSummary(record) {
    console.log("=== Student Summary ===");
    console.log(`${record.name} | Grade ${record.grade} - ${record.strand}`);
    console.log(`School: ${record.school}`);
    console.log(`Subjects (${record.subjects.length}): ${record.subjects.join(", ")}`);
    console.log(`Average Grade: ${getAverageGrade(record.grades).toFixed(2)}`);
}

printStudentSummary(studentRecord);