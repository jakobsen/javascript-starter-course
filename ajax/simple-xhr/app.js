document.getElementById('button').addEventListener('click', loadData);

function loadData() {
    // Create XHR object
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'data.html', async=true)

    xhr.onload = function() {
        if (this.status === 200) {
            document.getElementById('output').innerHTML = this.responseText;
        }
    }

    // Must always be called for this method to work.
    xhr.send()

}