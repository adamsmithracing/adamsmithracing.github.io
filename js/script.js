//Contact Form in PHP
const form = document.querySelector("form"),
statusTxt = form.querySelector("button-area span");

form.onsubmit = (e)=>{
    e.preventDefault(); //prevent form from submitting
    statusTxt.style.display = "block";

    let xhr = new XMLHttpRequest(); //creating new xml obj
    xhr.open("POST", "message.php", true); //sending post request to message.php file
    xhr.onload = ()=>{ //one ajax loaded
        if(xhr.readyState == 4 && xhr.status == 200){
            let response = xhr.response;
            console.log(response)
        }
    }
    let formData = new FormData(form);
    xhr.send(formData);
}