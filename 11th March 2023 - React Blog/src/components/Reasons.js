import IndividualReason from "./IndividualReason";
import "./Reasons.css";

function Reasons() {
  let iconContent = [
    {
      icon: "bi bi-collection-play-fill",
      content: "Cillum non in incididunt",
    },
    {
      icon: "bi bi-credit-card",
      content: "Cillum non in incididunt",
    },
    {
      icon: "bi bi-clipboard2-data-fill",
      content: "Cillum non in incididunt",
    },
  ];

  let output = [];

  iconContent.forEach((element) => {
    output.push(
      <IndividualReason icon={element.icon} content={element.content} />
    );
  });
  return <section id="reasons">{output}</section>;
}

export default Reasons;
