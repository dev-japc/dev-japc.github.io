const input = document.getElementById('command-input');
const terminalBody = document.getElementById('terminal-body');

const commands = {
    'help': 'Available commands: about, projects, clear, contact',
    'about': 'Jorge Palacios: A developer focused on clean code and modern UI.',
    'projects': 'Check out my GitHub at github.com/jorgepalaciios',
    'contact': 'Email: devjapc@gmail.com'
};

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const cmd = input.value.toLowerCase().trim();
        const response = commands[cmd] || `Command not found: ${cmd}. Type 'help'.`;
        
        if (cmd === 'clear') {
            terminalBody.innerHTML = '';
        } else {
            const newLine = document.createElement('p');
            newLine.innerHTML = `<span style="color: #6366f1">➜</span> ${response}`;
            terminalBody.insertBefore(newLine, input.parentElement);
        }
        
        input.value = '';
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }
});
