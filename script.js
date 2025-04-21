function calcularFactorial() {
    const input = document.getElementById('numeroInput').value;
    const resultadoDiv = document.getElementById('resultado');
    
    // Convertiendo a num flotante y validacion
    const numero = parseFloat(input);
    
    if (isNaN(numero)) {
        resultadoDiv.innerHTML = '<span class="error">Error: Por favor ingrese un número válido.</span>';
        return;
    }
    
    if (!Number.isInteger(numero) || numero < 0) {
        resultadoDiv.innerHTML = '<span class="error">Error: Por favor ingrese un número entero positivo.</span>';
        return;
    }
    
    
    let factorial = 1;
    for (let i = 2; i <= numero; i++) {
        factorial *= i;
    }
    
    
    resultadoDiv.innerHTML = `El factorial de ${numero} es: <strong>${factorial}</strong>`;
    
    // en consola
    console.log(`El factorial de ${numero} es: ${factorial}`);
}
