const reg = ()=>{
    let name = document.querySelector('#name').value;
    let mobilenumber = document.querySelector('#mobilenumber').value;
    let username = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;

    console.log(name,mobilenumber,username,password);

    let infformation = {
        "id":1,
        "name":name,
        "mobilenumber":mobilenumber,
        "username":username,
        "password":password
    }

    window.localStorage.setItem('data',JSON.stringify(infformation))

    let ansdata = window.localStorage.getItem('data');
    console.log(JSON.parse(ansdata))
    return false;

}