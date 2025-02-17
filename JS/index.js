document.getElementById('myform').addEventListener('submit', function(e){
    e.preventDefault();
    
    var el = document.getElementById('myform');

    var username = el.username.value;
    var email = el.email.value;
    var pass = el.password.value;
    var gender = el.gender.value;
    console.log(username);


    var error = '';
    if(username.length < 2)
        error = 'Name to short';
    else if(email.length < 2)
        error = 'Male addres to short';
    else if(!email.includes('@'))
        error = '@ missing';
    else if(pass.length < 2)
        error = 'passwor to short';
    else if(gender == null || gender == '')
        error = 'Gender unknown';

    if(error != '') {
        document.getElementById('error').innerText = error;
        return false;
    }

    document.getElementById('error').innerText = '';

    window.location = 'https://www.copart.com/'

    return false;
});
