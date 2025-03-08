function sendMessage() {
    const userInput = document.getElementById("user-input").value.trim();
    if (userInput === "") return;

    const chatBox = document.getElementById("chat-box");
    
    // Append user message
    const userMessage = document.createElement("div");
    userMessage.classList.add("chat-message", "user");
    userMessage.textContent = userInput;
    chatBox.appendChild(userMessage);
    
    document.getElementById("user-input").value = "";

    // Simulated AI Response
    setTimeout(() => {
        const botMessage = document.createElement("div");
        botMessage.classList.add("chat-message", "bot");
        botMessage.textContent = getAIResponse(userInput);
        chatBox.appendChild(botMessage);

        // Scroll to bottom
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
}

// Simulated AI Knowledge Base
function getAIResponse(input) {
    input = input.toLowerCase();
    if (input.includes("loan")) {
        return "Loans are financial borrowings with interest. What type of loan are you looking for?";
    } else if (input.includes("interest rate")) {
        return "Interest rates vary based on the lender and loan type. Would you like real-time data?";
    } else {
        return "I’m still learning! But I can help with financial topics.";
    }
}
