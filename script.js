let playerName = prompt(
  "Welcome to the magical forest! Please enter your name:"
);
let playerPoints = 0;

alert(`Welcome ${playerName}! Your adventure begins.`);

function forestAdventure() {
  alert(
    "You are in a dense magical forest. Your actions will influence your destiny."
  );

  let choice = prompt(
    "Choose which way you will go: 'left' or 'right'?"
  ).toLowerCase();

  if (choice === "left") {
    alert(
      "You headed left and found a magical spring. You drink from it and feel your strength increase."
    );
    playerPoints += 10;
  } else if (choice === "right") {
    alert(
      "You headed to the right and came across a pack of wild wolves. You were able to scare them away, but you lost a little strength."
    );
    playerPoints -= 5;
  } else {
    alert(
      "You are lost in the forest and cannot continue your journey. End of the game."
    );
    return;
  }

  alert(`You now have ${playerPoints} points.`);

  choice = prompt("Now choose: 'go further' or 'go back'?").toLowerCase();

  if (choice === "go further") {
    alert(
      "You move deeper into the forest and find a treasure! Congratulations, you have won!"
    );
  } else if (choice === "go back") {
    alert(
      "You decide to return to the beginning of the forest. Your adventure continues..."
    );
    forestAdventure();
  } else {
    alert(
      "You are confused about decisions and can no longer move. End of the game."
    );
  }
}

forestAdventure();
