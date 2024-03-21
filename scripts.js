

function crearFlor(n) {
    const flowerDiv = document.createElement('div');
    flowerDiv.classList.add('flower');

    flowerDiv.innerHTML = `
            <div class="mid"></div>
            <div class="Petal3 p1"></div>
            <div class="Petal3 p2"></div>
            <div class="Petal3 p3"></div>
            <div class="Petal3 p4"></div>
            <div class="Petal2 p5"></div>
            <div class="Petal2 p6"></div>
            <div class="Petal2 p7"></div>
            <div class="Petal2 p8"></div>
            <div class="Petal1 p9"></div>
            <div class="Petal1 p10"></div>
            <div class="Petal1 p11"></div>
            <div class="Petal1 p12"></div>
            <div class="notita" onclick="mostrarMensaje(${n})" id="${n}">Notita &#x1F9E1;</div>
            
        `;
    return flowerDiv;
}

function crearFlores(cantidad) {
    let n = 0;
    const container = document.getElementById('flowersContainer');
    container.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevas flores

    for (let i = 0; i < cantidad; i++) {
        container.appendChild(crearFlor(n));
        n = n + 1;
    }
}

function mostrarMensaje(n) {
    if (n === 0){
        showAlert("Para Shirley,\n\nEl mundo tiene sus maravillas, pero tu eres la maravilla de mi mundo.\n\n[Yhonattan]");

    } else if (n === 1) {
        showAlert("Para Shirley,\n\nQuiza no pude estar presente contigo, pero quiero que sepas que has estado en cada uno de mis pensamientos. Aunque la distancia nos separe en este día, quiero que sientas mi cariño y mi apoyo desde lejos. Eres mi primer pensamiento al despertar y el último al dormir. Espero que este mensaje te haga sentir lo especial que eres para mí, hoy y siempre.\n\nCon cariño,\n\n[Yhonattan]");

    } else {
        showAlert("Para Shirley,\n\nDe mi corazón para ti,\n\nDesde que llegaste a mi vida, todo cambió. Te quiero de formas que no puedo explicar, pero que son más reales que cualquier otra cosa.\n\nCon cariño,\n\n[Yhonattan]");
        
    }
}



// Mostrar la ventana modal con un mensaje personalizado
function showAlert(message) {
    // Obtener la ventana modal y el mensaje personalizado
    const modal = document.getElementById('myModal');
    const customMessage = document.getElementById('customMessage');
    customMessage.textContent = message;
    console.log(message);
    const formattedMessage = message.replace(/\n/g, '<br>'); // Reemplaza los saltos de línea con etiquetas <br> de HTML
    customMessage.innerHTML = formattedMessage;
    modal.style.display = 'block';
}

function closeEmergent(){
    // Obtener la ventana modal y el mensaje personalizado
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
    console.log("Mod");
}




