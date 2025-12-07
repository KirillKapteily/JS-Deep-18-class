// // test
// fetch("https://jsonplaceholder.typicode.com/posts/5")
//     .then(res => res.json())
//     .then(posts => console.log(posts))
//     .catch(error => console.log(error));

// // create
// const info = {
//     author: "Taylor Swift",
//     body: "Fortnight"
// }

// const options = {
//     method: "POST",
//     body: JSON.stringify(info),
//     headers: { "Content-Type": "application/json; charset=UTF-8" }
// }

// fetch("https://jsonplaceholder.typicode.com/posts/", options)
//     .then(res => res.json())
//     .then(posts => console.log(posts))

//all students
// const info = {
//     student: "Nick",
//     body: "19 years old"
// }

// const options = {
//     method: "POST",
//     body: JSON.stringify(info),
//     headers: { "Content-Type": "application/json; charset=UTF-8" }
// }

// fetch("http://localhost:3000/students")
//     .then(res => res.json())
//     .then(posts => console.log(posts))
//     .catch(error => console.log(error));

// fetch("http://localhost:3000/students/2")
//     .then(res => res.json())
//     .then(posts => console.log(posts))
//     .catch(error => console.log(error));

//DANGER!
// fetch("http://localhost:3000/students/", options)
//     .then(res => res.json())
//     .then(posts => console.log(posts))
//     .catch(error => console.log(error));

//patch
// const infoForUpdate = {
//     id: 8,
//     body: "Fearless!"
// }

// const options = {
//     method: "PATCH",
//     body: JSON.stringify(infoForUpdate),
//     headers: { "Content-Type": "application/json; charset=UTF-8" }
// }

// fetch(`https://jsonplaceholder.typicode.com/posts/${infoForUpdate.id}`, options)
//     .then(res => res.json())
//     .then(posts => console.log(posts))
//     .catch(error => console.log(error));

// const infoForDelete = {
//     id: 8,
// }

// fetch(`https://jsonplaceholder.typicode.com/posts/${infoForDelete.id}`, {method: "DELETE"})
//     .then(res => res.json())
//     .then(posts => console.log(posts))
//     .catch(error => console.log(error));

//1 I commented fetch 'cause it looped the whole thing
const infoForUpdate1 = {
    id: 3,
    name: "Jake Johnson",
    age: 19,
    email: "jake.johnson@example.com",
    phone: "555-9012"
}

const options1 = {
    method: "PUT",
    body: JSON.stringify(infoForUpdate1),
    headers: { "Content-Type": "application/json; charset=UTF-8" }
}


//    fetch("http://localhost:3000/students/3", options1)
// .then(res => res.json())
// .then(posts => console.log(posts))
// .catch(error => console.log(error));

//2
const infoForUpdate = {
    id: 2,
    name: "Jake Smith"
}

const options = {
    method: "PATCH",
    body: JSON.stringify(infoForUpdate),
    headers: { "Content-Type": "application/json; charset=UTF-8" }
}


//    fetch("http://localhost:3000/students/3", options)
// .then(res => res.json())
// .then(posts => console.log(posts))
// .catch(error => console.log(error));

//3
const infoForDelete = {
    id: 1,
}

//fetch(`http://localhost:3000/students/${infoForDelete.id}`, {method: "DELETE"})
// .then(res => res.json())
// .then(posts => console.log(posts))
// .catch(error => console.log(error));
//age
const infoToGet = {
    id: 21
}

fetch(`http://localhost:3000/students?age=${infoToGet.id}`)
    .then(res => res.json())
    .then(posts => console.log(posts))
    .catch(error => console.log(error));

//name
const infoToGetByName = {
    name: "Marry Mon"
}

fetch(`http://localhost:3000/students?name=${infoToGetByName.name}`)
    .then(res => res.json())
    .then(posts => console.log(posts))
    .catch(error => console.log(error));

//email
const infoToGetByEmail = {
    email: "janen.smith@example.com"
}

fetch(`http://localhost:3000/students?email=${infoToGetByEmail.email}`)
    .then(res => res.json())
    .then(posts => console.log(posts))
    .catch(error => console.log(error));

//phone
const infoToGetByPhone = {
    phone: "555-567811"
}

fetch(`http://localhost:3000/students?phone=${infoToGetByPhone.phone}`)
    .then(res => res.json())
    .then(posts => console.log(posts))
    .catch(error => console.log(error));
