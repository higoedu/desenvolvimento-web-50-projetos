const horaAtual = document.querySelector("h1"),
content = document.querySelector(".content"),
selectMenu = document.querySelectorAll("select"),
programarAlarmeBtn = document.querySelector("button");

let horaAlarme, defineAlarme,
toque = new Audio("./som/ringtone.mp3");

for (let i = 12; i > 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 59; i >= 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM";
    let option = `<option value="${ampm}">${ampm}</option>`;
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

setInterval(() => {
    let data = new Date(),
    h = data.getHours(),
    m = data.getMinutes(),
    s = data.getSeconds(),
    ampm = "AM";
    if(h >= 12) {
        h = h - 12;
        ampm = "PM";
    }
    h = h == 0 ? h = 12 : h;
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    horaAtual.innerText = `${h}:${m}:${s} ${ampm}`;

    if (horaAlarme === `${h}:${m} ${ampm}`) {
        toque.play();
        toque.loop = true;
    }
});

function programarAlarme() {
    if (defineAlarme) {
        horaAlarme = "";
        toque.pause();
        content.classList.remove("disable");
        programarAlarmeBtn.innerText = "Programar alerme";
        return defineAlarme = false;
    }

    let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;
    if (time.includes("Hora") || time.includes("Minuto") || time.includes("AM/PM")) {
        return alert("Por favor, selecione um horário válido para definir o Alarme!");
    }
    horaAlarme = time;
    defineAlarme = true;
    content.classList.add("disable");
    programarAlarmeBtn.innerText = "Limpar Alarme";
}

programarAlarmeBtn.addEventListener("click", programarAlarme);