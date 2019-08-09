const URL = 'http://localhost:3000';

function getJSON(resource) {
  return new Promise(function(resolve, reject) {
    const xhttp = new XMLHttpRequest();
    const url = `${URL}/${resource}`;
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4) {
        switch(this.status) {
          case 200:
            resolve(JSON.parse(this.responseText));
          break;
          case 502:
            reject("Server unavailable");
          break;
          default:
            reject(this.responseText);
          break;
        }
      }
    };

    xhttp.open("GET", url, true);
    xhttp.send();
  });
}

export { getJSON };
