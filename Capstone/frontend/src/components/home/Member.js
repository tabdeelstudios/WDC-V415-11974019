const Member = (props) => {
  return (
    <div className="member">
      <img src={props.profilePic} className="memberImage" />
      <h3 className="memberName">{props.name}</h3>
      <h4 className="memberDesignation">
        <em>{props.designation}</em>
      </h4>
    </div>
  );
};

export default Member;
