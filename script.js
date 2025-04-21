function calcularFactorial() {
    const input = document.getElementById('numeroInput').value;
    const resultadoDiv = document.getElementById('resultado');
    
    // Convertir a número y validar
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

// Versión alternativa usando prompt (descomentar para usar)
/*
function calcularFactorialConPrompt() {
    let input;
    let numero;
    
    do {
        input = prompt("Por favor ingrese un número para calcular su factorial:");
        numero = parseFloat(input);
        
        if (isNaN(numero)) {
            alert("Error: Debe ingresar un número válido. Intente nuevamente.");
        } else if (!Number.isInteger(numero) || numero < 0) {
            alert("Error: Debe ingresar un número entero positivo. Intente nuevamente.");
        }
    } while (isNaN(numero) || !Number.isInteger(numero) || numero < 0);
    
    let factorial = 1;
    for (let i = 2; i <= numero; i++) {
        factorial *= i;
    }
    
    alert(`El factorial de ${numero} es: ${factorial}`);
    console.log(`El factorial de ${numero} es: ${factorial}`);
}

calcularFactorialConPrompt();
*/