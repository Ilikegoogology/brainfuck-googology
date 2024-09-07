function runBrainfuck() {
    const code = document.getElementById('code').value;
    const memory = new Array(30000).fill(0);
    let pointer = 0;
    let output = '';

    for (let i = 0; i < code.length; i++) {
        switch (code[i]) {
            case '>':
                pointer++;
                break;
            case '<':
                pointer--;
                break;
            case '+':
                memory[pointer]++;
                break;
            case '-':
                memory[pointer]--;
                break;
            case '.':
                output += String.fromCharCode(memory[pointer]);
                break;
            case ',':
                // Input is not handled in this basic version
                break;
            case '[':
                if (memory[pointer] === 0) {
                    let openBrackets = 1;
                    while (openBrackets > 0) {
                        i++;
                        if (code[i] === '[') openBrackets++;
                        if (code[i] === ']') openBrackets--;
                    }
                }
                break;
            case ']':
                if (memory[pointer] !== 0) {
                    let closeBrackets = 1;
                    while (closeBrackets > 0) {
                        i--;
                        if (code[i] === '[') closeBrackets--;
                        if (code[i] === ']') closeBrackets++;
                    }
                    i--;
                }
                break;
        }
    }

    document.getElementById('output').textContent = output;
}
