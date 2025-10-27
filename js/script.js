document.addEventListener('DOMContentLoaded', () => {
    
    // ----------------------------------------------------------------
    // 1. Lógica do Menu Mobile (Responsividade e Acessibilidade)
    // ----------------------------------------------------------------
    const menuToggle = document.getElementById('menu-toggle');
    const header = document.querySelector('.site-header');

    menuToggle.addEventListener('click', () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        
        // Alterna o estado do menu e o atributo ARIA
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        header.classList.toggle('menu-open');
    });

    // ----------------------------------------------------------------
    // 2. Lógica do Alternador de Tema (WCAG Contraste)
    // ----------------------------------------------------------------
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    function applyTheme(theme) {
        body.setAttribute('data-theme', theme);
        
        let buttonText = 'Modo Escuro';
        if (theme === 'dark') {
            buttonText = 'Modo Claro';
            themeToggle.setAttribute('aria-pressed', 'true');
        } else if (theme === 'high-contrast') {
            buttonText = 'Alto Contraste OFF';
            themeToggle.setAttribute('aria-pressed', 'true');
        } else {
            themeToggle.setAttribute('aria-pressed', 'false');
        }
        
        themeToggle.textContent = buttonText;
        localStorage.setItem('theme', theme);
    }

    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        let newTheme = 'light';
        
        if (currentTheme === 'light') {
            newTheme = 'dark';
        } else if (currentTheme === 'dark') {
            newTheme = 'high-contrast';
        } else {
            newTheme = 'light';
        }
        applyTheme(newTheme);
    });

    // ----------------------------------------------------------------
    // 3. Lógica do Formulário de Contato (Funcionalidade e Acessibilidade)
    // ----------------------------------------------------------------
    const contactForm = document.getElementById('contact-form');
    const formFeedback = document.getElementById('form-feedback');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio real para o servidor (para este exemplo)

        // Simula o processamento do formulário
        console.log('Dados do formulário enviados com sucesso (Simulação)');

        // Exibe a mensagem de sucesso
        formFeedback.removeAttribute('hidden');
        formFeedback.textContent = '✅ Mensagem enviada com sucesso! Em breve, entraremos em contato.';
        
        // Acessibilidade: O atributo aria-live="polite" garante que leitores de tela leiam esta mensagem.
        
        // Opcional: Limpa o formulário após 3 segundos
        setTimeout(() => {
            contactForm.reset();
            formFeedback.setAttribute('hidden', '');
            formFeedback.textContent = ''; // Limpa o texto para o próximo uso
        }, 5000); 
    });

    console.log("Script carregado e executado após o parse do HTML. Otimização OK.");
});