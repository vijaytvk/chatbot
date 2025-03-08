const OPENAI_API_KEY = "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"; // Replace with your API key

async function sendMessage() {
    const userInput = document.getElementById("user-input").value.trim();
    if (userInput === "") return;

    const chatBox = document.getElementById("chat-box");
    
    // Append user message
    const userMessage = document.createElement("div");
    userMessage.classList.add("chat-message", "user");
    userMessage.textContent = userInput;
    chatBox.appendChild(userMessage);
    
    document.getElementById("user-input").value = "";

    // Show "Thinking..." while waiting for AI response
    const botMessage = document.createElement("div");
    botMessage.classList.add("chat-message", "bot");
    botMessage.textContent = "Thinking...";
    chatBox.appendChild(botMessage);
    chatBox.scrollTop = chatBox.scrollHeight;

    // Get AI response
    const aiResponse = await fetchAIResponse(userInput);
    botMessage.textContent = aiResponse;
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Function to fetch response from OpenAI API
async function fetchAIResponse(userMessage) {
    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-4",
                messages: [{ role: "system", content: "You are a financial expert chatbot that answers questions about loans, interest rates, and financial advice." },
                           { role: "user", content: userMessage }]
            })
        });

        const data = await response.json();
        return data.choices[0].message.content.trim();
    } catch (error) {
        console.error("Error fetching AI response:", error);
        return "Sorry, I couldn't fetch an answer right now. Please try again later.";
    }
}
