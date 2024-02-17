console.log(users);

const container = document.getElementById('card-container');

function displayUserCards(){
/* const html = `
<div class="card h-100">
<img src="${users[1].picture.medium}" 
class="card-img-top"
alt="user-picture"
/>
<div class="card-body">
    <h3 class="card-title">Mr. Abdisa</h3>
    <p class="card-text" >Location: Canada</p>
    <p class="card-text">Email: abdisat.bedada@gmail.com</p>
    <p class="card-text">Age: 43</p>
</div>
</div>
`; */
// generate the same html through mapping
//here we are creating html card for every array object in the user
const htmlArr = users.filter((item) => item.gender === 'male')
.map(
    (item) => `
<div class="card h-100">
<img src="${item.picture.medium}" 
class="card-img-top"
alt="user-picture"
/>
<div class="card-body">
    <h3 class="card-title">${item.name.first} ${item.name.last}</h3>
    <p class="card-text" >Location: ${item.location.city}</p>
    <p class="card-text">Email: ${item.email}</p>
    <p class="card-text">Age: ${item.dob.age}</p>
</div>
</div>
`)
console.log(htmlArr)
container.innerHTML = htmlArr.join(' ');// js do not understand innerHTML, 
//but still generate htmlArr 
//separating them by a coma(,), that is why we need to join('') 
//them and make a string of array
}
displayUserCards();