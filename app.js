document.querySelector('#get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
  e.preventDefault();

  const numberOfJokes = document.querySelector('#number').value;

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${numberOfJokes}`, true)

  xhr.onload = function() {
    if(this.status === 200) {
      let output = '';
      const response = JSON.parse(this.responseText);
      if(response.type === 'success') {
        response.value.forEach((joke) => {
          output += `
            <h4>ID: ${joke.id}</h4>
            <p>JOKE: ${joke.joke}</p>
          `
          document.querySelector('.output').innerHTML = output;
        })
      }
      
    } else {
      alert('connection error');
    }
  }

  xhr.send();
}