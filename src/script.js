
if (window.location.href.includes('index')){
    const arabicSection = document.querySelector('.btn1');
    const generalCollages = document.querySelector('.exist-btn');

    arabicSection.addEventListener('click', () => {
        window.location.href = './src/start.html';
    });
    
    generalCollages.addEventListener('click', ()=>{
        window.location.href = './src/exist.html';
    });
}

const date = new Date();

function sendInformation(Method){
    if(Method === 'start') {
        const formData = new FormData(startingForm);
        formData.append("data[date]", date.toLocaleDateString());
        formData.append("data[start_time]", date.toLocaleTimeString());
        
        fetch(startingForm.action, {
            method: 'POST',
            body: formData
        }).then(res => res.json()).then(res =>{
            window.location.href = "response.html"
        }).catch(err => window.alert(err.message));
    }
    else{
        const formData = new FormData(exitingForm);
        formData.append("data[date]", date.toDateString());
        formData.append("data[exit_time]", date.toTimeString());
        
        fetch(exitingForm.action, {
            method: 'POST',
            body: formData
        }).then(res => res.json()).then(res =>{
            window.location.href = "response.html"
        }).catch(err => window.alert(err.message));
        
    }
    
}

if (window.location.href.includes('start')){
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

if (window.location.href.includes('exit')) {
    const exitingForm = document.getElementById('exiting-form');
    exitingForm.addEventListener('submit', e => {
        e.preventDefault();
      // Redirect to static page after submission
        const Method = 'exit';
        sendInformation(Method);
    
    })
    
}




