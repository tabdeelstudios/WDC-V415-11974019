import Member from "./Member";
import "./Home.css";

const Team = () => {
  return (
    <section id="allMembers">
      <Member
        profilePic="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=766&q=80"
        name="John"
        designation="Manager"
      />
      <Member
        profilePic="https://images.unsplash.com/photo-1601412436009-d964bd02edbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
        name="Alex"
        designation="Human Resources"
      />
      <Member
        profilePic="https://images.unsplash.com/photo-1593529467220-9d721ceb9a78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=730&q=80"
        name="Sarah"
        designation="IT"
      />
    </section>
  );
};

export default Team;
