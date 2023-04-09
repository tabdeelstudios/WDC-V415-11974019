import { useParams } from "react-router-dom";
import UserProfile from "../UserProfile";

function ProfilePage() {
  const { id } = useParams();
  return <UserProfile id={id} />;
}

export default ProfilePage;
