function send() {
  const input = document.getElementById("input");
  const chat = document.getElementById("chat");

  const text = input.value.trim();
  if (!text) return;

  // user message
  chat.innerHTML += `<div class="msg user">${text}</div>`;
  input.value = "";

  // bot response
  setTimeout(() => {
    chat.innerHTML += `<div class="msg bot">${getReply(text)}</div>`;
    chat.scrollTop = chat.scrollHeight;
  }, 500);
}

function getReply(text) {
  text = text.toLowerCase();

  if (text.includes("football")) {
    return "I can help you build training plans, improve positioning, and prepare for trials.";
  }

  if (text.includes("study")) {
    return "I can summarise topics, create revision notes, and help you learn faster.";
  }

  if (text.includes("askjeev")) {
    return "AskJeev is your AI system for learning, building, and getting things done.";
  }

  return "I'm AskJeev. Soon I will become a fully intelligent AI system.";
}
