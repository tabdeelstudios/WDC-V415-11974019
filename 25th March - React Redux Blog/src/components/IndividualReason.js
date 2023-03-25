function IndividualReason(props) {
  return (
    <div className="reason">
      <i className={props.icon}></i>
      <p>{props.content}</p>
    </div>
  );
}

export default IndividualReason;
