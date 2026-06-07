function send() {
  const input = document.getElementById("input");
  const chat = document.getElementById("chat");

  const text = input.value.trim();
  if (!text) return;

  // user message
  const userMsg = document.createElement("div");
  userMsg.className = "message user";
  userMsg.innerText = text;
  chat.appendChild(userMsg);

  input.value = "";

  // typing indicator
  const typing = document.createElement("div");
  typing.className = "message bot";
  typing.innerText = "Thinking...";
  typing.style.opacity = "0.7";
  chat.appendChild(typing);

  chat.scrollTop = chat.scrollHeight;

  setTimeout(() => {
    typing.remove();

    const botMsg = document.createElement("div");
    botMsg.className = "message bot";
    botMsg.innerText = reply(text);
    chat.appendChild(botMsg);

    chat.scrollTop = chat.scrollHeight;
  }, 900);
}

function reply(t) {
  t = t.toLowerCase();

  if (t.includes("football")) {
    return "I can build your training plan, improve positioning, and prepare you for trials step by step.";
  }

  if (t.includes("study")) {
    return "I can turn complex topics into simple revision notes and help you learn faster.";
  }

  if (t.includes("askjeev")) {
    return "AskJeev is your AI system for learning, building, and solving problems.";
  }

  return "AskJeev is running in ultra UI mode. Intelligence layer will be connected later.";
}
