  "You are enough.",
    "You are capable of amazing things.",
      "Every day is a new opportunity.",
        "You are stronger than you think.",
          "You deserve happiness and peace.",
          ];

          const affirmationText = document.getElementById('affirmation-text');
          const newAffirmationButton = document.getElementById('new-affirmation');

          newAffirmationButton.addEventListener('click', () => {
            const randomIndex = Math.floor(Math.random() * affirmations.length);
              affirmationText.textContent = affirmations[randomIndex];
              });