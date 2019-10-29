document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
    const numberOfJokes = document.querySelector("input[type=number]").value;
    console.log(numberOfJokes);
    if (numberOfJokes <= 0 || numberOfJokes == null) {
        const message = "<p>Please enter how many jokes you would like. It must be more than zero.</p>";
        const messageDiv = document.createElement("div");
        messageDiv.innerHTML = message;
        messageDiv.className = "message";
        document.querySelector('.container').appendChild(messageDiv);
        setTimeout(function(){
            messageDiv.classList.toggle("fade-in");
        }, 10);
        setTimeout(function() {
            messageDiv.classList.toggle("fade-in");
            messageDiv.classList.toggle("fade");
        }, 3000)
        setTimeout(function() {
            messageDiv.parentElement.removeChild(messageDiv);
        }, 4000);
        e.preventDefault();
        return;
    }
    const xhr = new XMLHttpRequest();

    xhr.open('GET', `http://api.icndb.com/jokes/random/${numberOfJokes}`, true);

    xhr.onload = function() {
        if (this.status === 200) {
            const response = JSON.parse(this.responseText);
            console.log(response);
            let output = "";
            if (response.type == 'success') {
                response.value.forEach(function(joke) {
                    output += `<li>${joke.joke}</li>`;
                });
            } else {
                output += "<li>Something went wrong getting your jokes.</li>";
            }
            document.querySelector(".jokes").innerHTML = output;
        }
    }

    xhr.send();
    e.preventDefault();
}