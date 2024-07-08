const User = ({ name }) => {
  return (
    <div className="user-card">
      <h1>Name: {name}</h1>
      <h2>Location: Kolkata</h2>
      <h3>Contact: @sandeeprana</h3>
    </div>
  );
};

export default User;
