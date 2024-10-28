document.getElementById("send-button").addEventListener("click", sendMessage);

function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;

    displayMessage(userInput, "user");
    document.getElementById("user-input").value = "";

    // Simulate bot response
    setTimeout(() => {
        const botResponse = getBotResponse(userInput);
        displayMessage(botResponse, "bot");
    }, 1000);
}

function displayMessage(message, sender) {
    const chatBox = document.getElementById("chat-messages");
    const messageElement = document.createElement("div");
    messageElement.classList.add("chat-input-container", sender);
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

function getBotResponse(input) {
    // Simple responses based on user input
    const responses = {
        "hi": "Hello! How can I assist you today?",
        "hello": "Hello! How can I assist you today?",
        "no thanks": "It's ok!",
        "how are you": "I'm just a bunch of code, but I'm doing great! Is there anything that i can help you with?",
        "who is bnt sir": "B.N.T Sir is the greatest Chemistry teacher for JEE/NEET in Muzaffarpur, Bihar",
        "who is the priminister of india": "Narendra Modi is the current priminister of India",
        "what is weather now": "i don't have access to these information, sorry!",
        "who made you": "Mrinal & Aman, made me and trained me to help you!",
        "who created you": "Mrinal & Aman, created me and trained me to help you!",
        "what is your name": "My name is 'INTELLIX' and I am here to help you!",
        "who are you": "I am a Text based AI ChatBOT for your help!",
        "lord shiva": "Shiva is known as The Destroyer within the Trimurti, the Hindu trinity which also includes Brahma and Vishnu In the Shaivite tradition, Shiva is the Supreme Lord who creates, protects and transforms the universe In the goddess-oriented Shakta tradition, the Supreme Goddess (Devi) is regarded as the energy and creative power (Shakti) and the equal complementary partner of Shiva Shiva is one of the five equivalent deities in Panchayatana puja of the Smarta tradition of Hinduism",
        "bye": "bye! Have a great time!",

    };
    return responses[input.toLowerCase()] || "Sorry, I don't understand that.";
}
