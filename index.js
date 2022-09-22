function submitData (name, email){

return fetch("http://localhost:3000/users", {
method: "POST",
headers:{
    "Content-Type": "application/json",
    "Accept": "application/json",
},
body: JSON.stringify({
    name,
    email,
    
}),
 })
 .then (function (response){
   return response.json();
    
 })
 .then(function (object){
console.log(object.id);
document.body.innerHTML = object.id
 })
 .catch (function (message){
 document.body.innerHTML = message
 });


}
