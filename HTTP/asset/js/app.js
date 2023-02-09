var cl = console.log
let baseUrl = `https://jsonplaceholder.typicode.com/posts`
var postContainer = document.getElementById("postContainer")
// http
// get => to get data from data base
// post => to creat/ send new data in  data base
// delete => to delete / remove data in DB
// patch/ put =>  to upadate data one key value in db



// myflipcard.com/api >> base API url
// myflipcard.com/api/ product >> end point
// myflipcard.com/api/products/123 >>ID

const templating = (arr) => {
    let result = ' ';
    arr.forEach(post => {
        result +=
            `<div class="card-header mb-4">
                         <h3>${post.title}</h3>
                    </div>
                    <div class="card-body">
                         <p>${post.body}</P>
                    </div>
                    <div class="card-footer">
                        <button class="btn btn-primary">Edit</button>
                        <button class="btn btn-danger">Delete</button>
                    </div>`
    });
    postContainer.innerHTML = result;
}

let xhr = new XMLHttpRequest()
xhr.open("GET", baseUrl)
xhr.send();

xhr.onload = function () {
    let data = JSON.parse(xhr.response)
    cl(data)
    templating(data )
    
}


