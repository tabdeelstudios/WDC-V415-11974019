do {
  // 1. Display the menu in an alert box
  alert("Here's the menu : \n1. Pizza\n2. Pasta\n3. Noodles\n4. Tea/Coffee");
  // 2. Read user's choice
  choice = prompt("What would you like to eat?");
  // 3. Based on the choice, show the output
  switch (choice) {
    case "1":
      alert("Pizza on the way!");
      break;
    case "2":
      alert("Pasta on the way!");
      break;
    case "3":
      alert("Noodles on the way!");
      break;
    case "4":
      alert("Tea/Coffee on the way!");
      break;
    default:
      alert("Thank you for visiting us!");
  }
  // 4. Re-display the menu
  // 5. Repeat until user chooses to quit
} while (choice >= 1 && choice <= 4);

{
  /* HTML Code :
<script src="menuProgram.js"></script> */
}
