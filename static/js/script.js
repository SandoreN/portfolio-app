document.addEventListener('DOMContentLoaded', (event) => {
    const greetingElement = document.getElementById('greeting');
    if (greetingElement) {
        const currentHour = new Date().getHours();
        let greeting = "Welcome!";
        if (currentHour < 12) {
            greeting = "Good morning!";
        } else if (currentHour < 18) {
            greeting = "Good afternoon!";
        } else {
            greeting = "Good evening!";
        }
        greetingElement.textContent = greeting;
    }
});
