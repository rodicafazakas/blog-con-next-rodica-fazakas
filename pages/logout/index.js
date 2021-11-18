const Logout = () => {
  localStorage.removeItem("user");
  return (
    <p>Logout</p>
  )
};

export default Logout;