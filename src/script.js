
// if (window.location.href.includes('index.html')){
//     const arabicSection = document.querySelector('.start-btn');
//     const generalCollages = document.querySelector('.exit-btn');

//     arabicSection.addEventListener('click', () => {
//         window.location.href = 'src/start.html';
//         alert('im cleaket')
//     });

//     generalCollages.addEventListener('click', ()=>{
//         window.location.href = 'src/exit.html';
//         alert('im cleacket')
//     });
// }
//time declaretion..........
const date = new Date();

let student = []

function sendInformation(Method) {
    const startingForm = document.getElementById('starting-form');
    const exitingForm = document.getElementById('exiting-form');

    if (Method === 'start') {
        const formData = new FormData(startingForm);
        formData.append("data[date]", date.toDateString());
        formData.append("data[start_time]", date.toLocaleTimeString());
        const id = `${date.getDate()}${date.getMonth() + 1}${formData.get('data[student_id]').substring(5)}`;
        formData.append("data[id]", id);

        fetch(startingForm.action, {
            method: 'POST',
            body: formData

        }).then(res => res.json()).then(res => {
            window.location.href = "response.html"
        }).catch(err => window.alert(err.message));
    }
    else {
        const formData = new FormData(exitingForm);
        const id = `${date.getDate()}${date.getMonth() + 1}${formData.get('data[student_id]').substring(5)}`;

        fetch(`${exitingForm.action}/id/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                exit_time: date.toLocaleTimeString(),
                description: formData.get('data[description]')
            })
        }).then(res => res.json()).then(res => {
            window.location.href = "response.html"
        }).catch(err => window.alert(err.message));

    }

}


if (window.location.href.includes('start.html')) {
    const startingForm = document.getElementById('starting-form');
    console.log(document.forms['start-form']);
    // sending the request to the  googlesheet 
    startingForm.addEventListener('submit', e => {
        e.preventDefault();
        const btn = document.querySelector('button[type="submit"]');
        btn.disabled = true;
        btn.innerText = 'Submitting...';
        //Redirect to static page after submission
        const Method = 'start';
        sendInformation(Method);
    })
}

if (window.location.href.includes('exit.html')) {
    const exitingForm = document.getElementById('exiting-form');
    exitingForm.addEventListener('submit', e => {
        e.preventDefault();
        const btn = document.querySelector('button[type="submit"]');
        btn.disabled = true;
        btn.innerText = 'Submitting...';
        // Redirect to static page after submission
        const Method = 'exit';
        sendInformation(Method);

    })

}




