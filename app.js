function success(position){
    console.log(position);
}

function error(){
    alert('posisi tidak dapat diakses');
}

function userLoct() {
    if(!navigator.geolocation){
        alert('Geolocation tidak didukung perangkat anda, silahkan coba lagi');
    } else{
        navigator.geolocation.getCurrentPosition(success, error);
    }
}


function index() {
    const app = document.getElementById('app');
    const h3 = document.createElement('h3');
    h3.innerHTML = 'Prayer time';
    app.appendChild(h3);

    userLoct();
}

index();