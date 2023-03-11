function IndividualStat(props) {
  return (
    <div>
      <h1>{props.count}</h1>
      <h3>{props.heading}</h3>
      <button>{props.content}</button>
    </div>
  );
}

export default IndividualStat;
