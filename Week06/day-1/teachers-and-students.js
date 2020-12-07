/* Készíts Student és Teacher osztályokat
Student
learn() -> kiírja, hogy a diák valami újat tanul
question(teacher) -> meghívja a tanár answer metódusát
Teacher
teach(student) -> meghívja a diák learn metódusát
answer() -> kiírja, hogy a tanár megválaszol egy kérdést
Példányosíts egy Student és egy Teacher objektumot
Hívd meg a diák question() metódusát és a tanár teach() metódusát */

class Student {
    studentName;

    constructor (studentName){
        this.studentName = studentName;
    }
    learn (){
        console.log( ` ${this.studentName} learned something new. `)
    }
    question (teacher){
        teacher.answer();
    }

}

class Teacher {
    teacherName;
    constructor(teacherName){
        this.teacherName = teacherName;
    }
    teach(student){
        student.learn();
    }
    answer (){
        console.log( `${this.teacherName} answered a question.`)
    }
}

let student1 = new Student ('Samantha');
let teacher1 = new Teacher ('Matthew');

student1.question(teacher1);
teacher1.teach(student1);