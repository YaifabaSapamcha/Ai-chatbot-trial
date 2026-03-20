// Chatbot functionality
document.addEventListener('DOMContentLoaded', function() {
    const chatMessages = document.getElementById('chatMessages');
    const userInput = document.getElementById('userInput');
    const sendButton = document.getElementById('sendButton');

    // Function to add message to chat
    function addMessage(content, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;

        const messageContent = document.createElement('div');
        messageContent.className = 'message-content';
        messageContent.innerHTML = content.replace(/\n/g, '<br>');

        messageDiv.appendChild(messageContent);
        chatMessages.appendChild(messageDiv);

        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Function to send message to backend
    async function sendMessage(message) {
        try {
            const response = await fetch('http://localhost:5000/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: message })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();

            // Format the response
            let formattedResponse = `
                <strong>Recommended Careers:</strong><br>
                ${data.careers || 'No careers data available'}<br><br>
                <strong>Learning Roadmap:</strong><br>
                ${data.roadmap || 'No roadmap data available'}<br><br>
                <strong>Job Market Trends:</strong><br>
                ${data.job_market || 'No job market data available'}
            `;

            addMessage(formattedResponse, false);
        } catch (error) {
            console.error('Error:', error);
            addMessage('Sorry, I encountered an error connecting to the server. Please make sure the backend is running.', false);
        }
    }

    // Event listeners
    sendButton.addEventListener('click', function() {
        const message = userInput.value.trim();
        if (message) {
            addMessage(message, true);
            userInput.value = '';
            sendMessage(message);
        }
    });

    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendButton.click();
        }
    });

    // Focus input on load
    userInput.focus();
});