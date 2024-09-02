document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    document.getElementById('scrollToPlanos').addEventListener('click', function() {
        document.getElementById('planos').scrollIntoView({ behavior: 'smooth' });
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Obrigado por entrar em contato! Em breve retornaremos.');
        form.reset();
    });
});
