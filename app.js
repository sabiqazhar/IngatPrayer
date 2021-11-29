function prayerTimes(latitude, longitude){
    fetch(`http://api.aladhan.com/v1/calendar?latitude=${latitude}&longitude=${longitude}&method=2`)
    .then(respone => respone.json())
    .then(respone => {
        let date = new Date();
        let today = date.getDate();
        console.log(respone.data[today-1]);
    })
}

function success(position){
    prayerTimes(position.coords.latitude, position.coords.longitude);
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