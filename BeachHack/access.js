const requestURL = 'data.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = processData;
    
function processData() {
    const data = request.response;
    const projects = data.projects;
    populateProjectsCardGrid(projects);
}

// scrapped previous function