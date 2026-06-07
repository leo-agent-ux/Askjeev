function send() {
  const input = document.getElementById("input");
  const chat = document.getElementById("chat");

  const text = input.value.trim();
  if (!text) return;

  // user
  const user = document.createElement("div");
  user.className = "message user";
  user.innerText = text;
  chat.appendChild(user);

  input.value = "";

  // typing
  const bot = document.createElement("div");
  bot.className = "message bot";
  bot.innerText = "Thinking...";
  chat.appendChild(bot);

  chat.scrollTop = chat.scrollHeight;

  setTimeout(() => {
    bot.innerText = reply(text);
    chat.scrollTop = chat.scrollHeight;
  }, 900);
}

function reply(t) {
  t = t.toLowerCase();

  if (t.includes("football")) {
    return "I can design your training plan, improve your positioning, and prepare you for trials.";
  }

  if (t.includes("study")) {
    return "I can turn topics into simple revision notes and help you revise faster.";
  }

  return "AskJeev is running in mobile app UI mode. Intelligence will be connected next.";
}
