const startButton = document.getElementById('start-breathing');
const instruction = document.getElementById('breathing-instruction');

startButton.addEventListener('click', () => {
  breathingCircle.style.animationPlayState = 'running';
    let counter = 0;
      const interval = setInterval(() => {
          counter++;
              if (counter % 2 === 0) {
                    instruction.textContent = "Breathe in...";
                        } else {
                              instruction.textContent = "Breathe out...";
                                  }
                                      if (counter === 8) clearInterval(interval);
                                        }, 4000);
                                        });