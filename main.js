// let a= [1, 2, 3];
// localStorage.setItem("data", JSON.stringify(a));
// let b = localStorage.getItem("data");
// b = JSON.parse(b);
// console.log(Local.localStorage.getItem("data"));
// console.log(typeof b);


let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if((this.readyState == 4)& (this.status == 200)){
        myfunc(this.responseText);
    }
};
xhttp.open("GET", "https://automarine.ru/", true);
function myfunc(data){
    console.log(data);
}