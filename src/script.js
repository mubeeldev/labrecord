
if (window.location.href.includes('index.html')){
    const arabicSection = document.querySelector('.start-btn');
    const generalCollages = document.querySelector('.exit-btn');

    arabicSection.addEventListener('click', () => {
        window.location.href = './src/start.html';
    });
    
    generalCollages.addEventListener('click', ()=>{
        window.location.href = './src/exit.html';
    });
}
//time declaretion..........
const date = new Date();

let student = []

function sendInformation(Method){
    const startingForm = document.getElementById('starting-form');
    const exitingForm = document.getElementById('exiting-form');

    if(Method === 'start') {
        const formData = new FormData(startingForm);
        formData.append("data[date]", date.toDateString());
        formData.append("data[start_time]", date.toLocaleTimeString());
        
        fetch(startingForm.action, {
            method: 'POST',
            body: formData
            
        }).then(res => res.json()).then(res =>{
            window.location.href = "response.html"
        }).catch(err => window.alert(err.message));
        localStorage.setItem('data',JSON.stringify(formData));
    }
    else{
        const formData = new FormData(exitingForm);
        formData.append("data[date]", date.toDateString());
        formData.append("data[exit_time]", date.toLocaleTimeString());
        
        fetch(exitingForm.action, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: formData
        }).then(res => res.json()).then(res =>{
            window.location.href = "response.html"
        }).catch(err => window.alert(err.message));
        
    }
    
}


if (window.location.href.includes('start.html')){
    const startingForm = document.getElementById('starting-form');
    console.log(document.forms['start-form']);
    // sending the request to the  googlesheet 
    startingForm.addEventListener('submit', e => {
        e.preventDefault();
    //Redirect to static page after submission
        const Method = 'start';
        sendInformation(Method);
    })
}

if (window.location.href.includes('exit.html')) {
    const exitingForm = document.getElementById('exiting-form');
    exitingForm.addEventListener('submit', e => {
        e.preventDefault();
      // Redirect to static page after submission
        const Method = 'exit';
        sendInformation(Method);
    
    })
    
}




