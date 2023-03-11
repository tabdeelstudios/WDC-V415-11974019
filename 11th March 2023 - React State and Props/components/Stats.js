import IndividualStat from "./IndividualStat";
import "./Stats.css";
function Stats(props) {
  let content = [
    { count: "100", heading: "cities covered", content: "Learn More" },
    {
      count: "2500",
      heading: "patients treated",
      content: "Learn More",
    },
    {
      count: "1000",
      heading: "companies affiliated",
      content: "Learn More",
    },
  ];

  let output = [];

  content.forEach((element) => {
    output.push(
      <IndividualStat
        count={element.count}
        heading={element.heading}
        content={element.content}
      />
    );
  });

  return <section id="stats">{output}</section>;
}
export default Stats;
