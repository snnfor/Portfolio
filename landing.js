// Smooth Scroll for Navigation Links
document.querySelectorAll('header nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Chat Popup Toggle
function toggleChatPopup() {
    const chatPopup = document.getElementById('chat-popup');
    chatPopup.style.display = chatPopup.style.display === 'none' ? 'flex' : 'none';
}

// Close Chat Popup
document.querySelector('.chat-popup .close').addEventListener('click', function() {
    document.getElementById('chat-popup').style.display = 'none';
});

// Send Message Function
function sendMessage() {
    const messageInput = document.querySelector('.chat-popup input[type="text"]');
    const message = messageInput.value.trim();
    if (message) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.textContent = message;
        document.querySelector('.chat-popup .messages').appendChild(messageDiv);
        messageInput.value = '';
        document.querySelector('.chat-popup .messages').scrollTop = document.querySelector('.chat-popup .messages').scrollHeight;
    }
}

// Event Listener for Send Button
document.querySelector('.chat-popup button').addEventListener('click', sendMessage);

// Chat Input Enter Key Event
document.querySelector('.chat-popup input[type="text"]').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
        e.preventDefault();
    }
});

// Parallax Effect for Background Images
document.addEventListener('scroll', function() {
    const parallaxElements = document.querySelectorAll('.parallax');
    parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        const offset = window.pageYOffset * speed;
        element.style.backgroundPositionY = `${-offset}px`;
    });
});