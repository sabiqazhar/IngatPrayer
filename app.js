function prayerTimes(latitude, longitude){
    fetch(`http://api.aladhan.com/v1/calendar?latitude=${latitude}&longitude=${longitude}&method=2`)
    .then(respone => respone.json())
    .then(respone => {
        let date = new Date();
        let today = date.getDate() - 1;
        let data = respone.data[0].timings;

        let app =  document.getElementById('app');
        let table = document.createElement('table');
        let tableTbody = document.createElement('tbody');

        for(i in data){
            let row = tableTbody.insertRow();
            let name = row.insertCell(0);
            let time = row.insertCell(1);
            name.innerHTML = i;
            time.innerHTML = data[i];
            tableTbody.appendChild(row);
        }
        table.appendChild(tableTbody);
        app.appendChild(table);
    })
}

function success(position){
    prayerTimes(position.coords.latitude, position.coords.longitude);
}

function error(){
    prayerTimes(' -6.200000', '106.816666')
    alert('Posisi default yang digunakan adalah Jakarta');
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
    h3.innerHTML = 'Ingat Prayer time';
    app.appendChild(h3);

    userLoct();
}

index();