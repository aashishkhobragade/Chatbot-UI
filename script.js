const sendChatBtn = document.querySelector("#send-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const chatbotToggler = document.querySelector(".chatbot-toggler");


const botResponses = [
    "Hello! How can I assist you today? 😊",
    "What’s on your mind? Feel free to ask! 🤖",
    "I’m here to help! What can I do for you? 🌟",
    "Let me know if you need anything. I’m always ready! 🚀",
    "I’m just a friendly chatbot, here to make your day better! 💬",
    "Got a question? Ask away, I’ve got answers! 💡",
    "I’m here whenever you need me. Let’s chat! 🧠",
    "Tell me what you need help with, and I’ll do my best! 🤝",
    "I’m all ears (or circuits). Let’s solve this together! 🔧",
    "I’m not saying I’m smart, but I once solved a Rubik’s Cube in my sleep. Ask away! 😎",
    "If I had hands, I’d totally high-five you right now. What’s up? ✋",
    "I charge by the joke. First one’s free. What’s your question? 😂",
    "Let me check my imaginary database… Got it! What do you need? 🧐",
    "I’m like Google, but with fewer ads. Hit me with your query! 🖥️",
    "Ask me anything, except for my Wi-Fi password. That’s classified. 🤐",
    "I was built to answer questions, but I’m also great at telling bad jokes. Try me! 🤖",
    "I can’t do your homework, but I can help you sound smart. What’s your question? 📚",
    "Why did the computer go to the doctor? It had a virus! Okay, now your turn. 😅",
    "Ask me anything! Unless it’s about pineapple on pizza… I’m still processing that debate. 🍕"
];


const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" 
        ? `<p>${message}</p>` 
        : `<span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`;
    chatLi.innerHTML = chatContent;
    return chatLi;
};

const handleChat = () => {
    const userMessage = chatInput.value.trim();
    if (!userMessage) return;

    // Append user's message
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatInput.value = "";
// harsh backend related work 
    // Simulate bot response 
    setTimeout(() => {
        
        const botMessage = botResponses[Math.floor(Math.random() * botResponses.length)];
        chatbox.appendChild(createChatLi(botMessage, "incoming"));
        chatbox.scrollTop = chatbox.scrollHeight;
    }, 1000);
};

sendChatBtn.addEventListener("click", handleChat);
chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleChat();
    }
});

chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
