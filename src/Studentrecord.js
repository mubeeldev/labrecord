// Studentrecord.js
const Students = [
    {
        name: 'mohammad Al-Hassan',
        collage: 'computer',
        startTime: '9:00am',
        endTime: '8:00am',
        do: 'typing study'
    }
];

function addStudent(newStudent) {
    Students.push(newStudent);
}

function getStudents() {
    console.log(Students);
    return Students;
}
st = '';
Students.forEach(student, ()=>{
    st += `
            <div class="
                            student-record
                            grid grid-cols-5 gap-4  
                            hover:bg-slate-400 
                            hover:text-black 
                            text-center 
                            w-full border-b 
                            border-blue-200 py-2">
                    <p class="do">قام بتسجيل الدخول</p>
                    <p class="endTime">13:00</p>
                    <p class="startTime">9:30</p>
                    <p class="studentLevel">level 2</p>
                    <p class="studentName">${student.name} </p>
                    <p class="todaysDate" >2024-06-15</p>

                    <div class="
                                ending-btn
                                col-span-5
                                hidden 
                                justify-center 
                                gap-4 mt-4">
                        <button class="exist-btn bg-sky-400 hover:bg-sky-200 text-black py-2 px-4 rounded-md">خروج</button>
                        <button class="delete-btn bg-red-500 hover:bg-red-300  py4 px8 rounded-md py-2 px-4">إمساح</button>
                    </div>
                </div>
    `
} )
export { addStudent, getStudents };