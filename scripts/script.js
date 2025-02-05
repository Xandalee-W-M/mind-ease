// Mood Tracker
const emojis = document.querySelectorAll('.emojis span');
const moodResult = document.getElementById('mood-result');

emojis.forEach(emoji => {
  emoji.addEventListener('click', () => {
    const mood = emoji.getAttribute('data-mood');
    moodResult.textContent = You're feeling ${mood}!;
  });
});

// Journal Tool
const journalEntry = document.getElementById('journal-entry');
const saveButton = document.getElementById('save-entry');
const journalMessage = document.getElementById('journal-message');

saveButton.addEventListener('click', () => {
  const entry = journalEntry.value;
  if (entry) {
    journalMessage.textContent = "Entry saved!";
    journalEntry.value = ""; // Clear the textarea
  } else {
    journalMessage.textContent = "Please write something before saving.";
  }
});