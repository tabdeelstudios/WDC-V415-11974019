import Member from "./Member";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import "./Home.css";
import { storeMembers } from "../../redux/memberSlice";

const Team = () => {
  const dispatch = useDispatch();
  const allMembers = useSelector((state) => state.memberReducer.members);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/members")
      .then((res) => dispatch(storeMembers(res.data)));
  }, []);

  return (
    <section id="allMembers">
      {allMembers &&
        allMembers.map((member) => (
          <Member
            profilePic={member.profilePic}
            name={member.name}
            designation={member.designation}
          />
        ))}
    </section>
  );
};

export default Team;
