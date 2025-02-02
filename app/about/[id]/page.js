const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },
    { id: 2, name: "Vaibhav", role: "Backend Developer" },
    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];
  
  export default function TeamMember({ params }) {
    const { id } = params;
    const member = details.find((person) => person.id.toString() === id);
  
    if (!member) {
      return <h1>Developer doesn't exist</h1>;
    }
  
    return (
      <div>
        <h1>{member.name}</h1>
        <p>Role: {member.role}</p>
      </div>
    );
  }
  