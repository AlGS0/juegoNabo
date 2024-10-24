document.addEventListener('DOMContentLoaded', function() {
    let tiempoRestante = 1800; // 30 minutos en segundos
    let intervaloTimer;

    // Mostrar el modal de instrucciones al cargar la página
    const instruccionesModal = document.getElementById('instruccionesModal');
    const aceptarInstruccionesBtn = document.getElementById('aceptarInstruccionesBtn');
    instruccionesModal.style.display = 'flex';

    aceptarInstruccionesBtn.addEventListener('click', function() {
        instruccionesModal.style.display = 'none';
        iniciarTemporizador();
    });

    // Iniciar temporizador
    function iniciarTemporizador() {
        const timerElement = document.getElementById('timer');
        intervaloTimer = setInterval(function() {
            let minutos = Math.floor(tiempoRestante / 60);
            let segundos = tiempoRestante % 60;

            if (segundos < 10) segundos = '0' + segundos;
            timerElement.textContent = `${minutos}:${segundos}`;

            tiempoRestante--;

            if (tiempoRestante < 0) {
                clearInterval(intervaloTimer);
                alert("Tiempo agotado.");
            }
        }, 1000);
    }

    // Lógica del formulario
    document.getElementById('queryForm').addEventListener('submit', function(e) {
        e.preventDefault();

        const queryInput = document.getElementById('queryInput').value.trim().toLowerCase();

        if (queryInput === 'jesubnormal') {
            alert('¡Correcto! Has adivinado la palabra.');
            clearInterval(intervaloTimer);
        } else {
            mostrarModalError();
        }
    });

    // Modal de error
    const errorModal = document.getElementById('errorModal');
    
    function mostrarModalError() {
        errorModal.style.display = 'flex';
        document.getElementById('queryInput').value = ''; // Vaciar el input

        setTimeout(function() {
            errorModal.style.display = 'none'; // Cerrar el modal después de 15 segundos
        }, 1000);
    }
});
