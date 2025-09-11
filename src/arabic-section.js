import { addStudent, getStudents } from "./Studentrecord.js";


const studentR = document.querySelector('.student-record');



let Click = false ;
studentR.addEventListener("click", ()=>{
    let endBtn = document.querySelector('.ending-btn');
    if(Click=== true){
        endBtn.style.display = 'none';
        Click = false;
        
    }else{
        Click = true;
        endBtn.style.display = 'flex';
        
        
    }
    
});


const existBtn = document.querySelector('.exist-btn');
existBtn.addEventListener('click', ()=>{
    const button = "exist";
    btns(button);
})

const deleteBtn = document.querySelector('.delete-btn');
deleteBtn.addEventListener('click', ()=>{
    const button = "delete";
    btns(button);
})

const submitBtn1 = document.querySelector('.submitBtn1');
submitBtn1.addEventListener('click', ()=>{
    const button = "submit1"
    btns(button);

})
const submitBtn2 = document.querySelector('.submitBtn2');
submitBtn2.addEventListener('click', ()=>{
    const button = "submit2"
    btns(button);

})

function btns(button){
    const formSet1 = document.querySelector('.form-set1');
    const formSet2 = document.querySelector('.form-set2');

    const d = new Date();
    const nowDate = d.getDate();
    const month = d.getMonth();
    const year = d.getFullYear();
    const hours = d.getHours();
    const minute = d.getMinutes();
    
    if(button === 'exist') {
        formSet1.style.display = 'none';
        formSet2.style.display = 'flex';
        console.log(nowDate);
    }
    if(button === 'delete'){
        console.log(button);
        
    }
    if(button === 'submit1'){
        const StudentName = document.querySelector('#nameInput').value;
        const level = document.querySelector('#lavel').value;
        let newStudent = 
            {
                date:nowDate+ "/" +month+"/" + year,
                name:StudentName,
                collage:'قسم التعليم اللغة الغربية لغير اهلها',
                level:level,
                startTime:hours +":"+minute,

            }
        addStudent(newStudent);
    

    }
    
}

