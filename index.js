// Array para armazenar o histórico de cálculos
let history = [];

// Função para adicionar valor ao display
function appendToDisplay(value) {
    const result = document.getElementById('result');
    result.value += value; // Adiciona o valor ao campo de exibição
}

// Função para limpar o display
function clearDisplay() {
    document.getElementById('result').value = ''; // Limpa o campo de exibição
}

// Função para deletar o último caractere do display
function deleteLast() {
    const result = document.getElementById('result');
    result.value = result.value.slice(0, -1); // Remove o último caractere do campo de exibição
}

/// Função para calcular o resultado da expressão
function calculateResult() {
    const result = document.getElementById('result');
    const expression = result.value;

    // Verificar se a expressão é válida
    if (isValidExpression(expression)) {
        const evaluatedResult = evaluateExpression(expression);
        addToHistory(expression, evaluatedResult);
        result.value = evaluatedResult;
    } else {
        alert('Expressão inválida');
    }
}

// Função para verificar se a expressão é válida
function isValidExpression(expression) {
    // Regex para verificar se a expressão é válida
    const regex = /^[0-9+\-*/^.()]*$/;
    return regex.test(expression);
}

// Função para avaliar a expressão
function evaluateExpression(expression) {
    let formattedExpression = expression.replace(/\^/g, '**');
    // Avaliar a expressão
    return Function(`"use strict"; return (${formattedExpression})`)();
}

// Função para adicionar a expressão e o resultado ao histórico
function addToHistory(expression, result) {
    history.push({ expression, result}); // Adiciona a expressão e o resultado ao array de histórico
    updateHistory(); // Atualiza a exibição do histórico
}

// Função para atualizar a exibição do histórico
function updateHistory() {
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = ''; //Limpa a lista de histórico
    history.forEach(entry => {
        let li = document.createElement('li');
        li.textContent = `${entry.expression} = ${entry.result}`; // Define o texto do item da lista
        historyList.appendChild(li); // Adiciona o item à lista
    });
}

// Função para alternar entre modos básico e científico
function toggleScientificMode() {
    const sciButtons = document.getElementById('scientific-buttons');
    if (sciButtons.style.display === 'none') {
        sciButtons.style.display = 'grid';
    } else {
        sciButtons;style;display = 'none';
    }
}