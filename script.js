function send() {
  const input = document.getElementById("input");
  const chat = document.getElementById("chat");

  const text = input.value;
  if (!text) return;

  chat.innerHTML += `<div class="msg user">${text}</div>`;
  input.value = "";

  // "thinking" effect
  setTimeout(() => {
    chat.innerHTML += `<div class="msg bot">Thinking...</div>`;
    chat.scrollTop = chat.scrollHeight;
  }, 500);

  setTimeout(() => {
    chat.innerHTML += `<div class="msg bot">${reply(text)}</div>`;
    chat.scrollTop = chat.scrollHeight;
  }, 1200);
}

function reply(t) {
  t = t.toLowerCase();

  if (t.includes("football")) {
    return "I can build your training plan, improve your positioning, and help you prepare for trials.";
  }

  if (t.includes("study")) {
    return "I can summarise topics and create revision notes for you.";
  }

  return "AskJeev is running. Real AI will be connected soon.";
}
