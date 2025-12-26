export default function Navbar({ onLogout }) {
  function handleLogout() {
    fetch("/api/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }

  return (
    <header>
      <button onClick={handleLogout}>Logout</button>
    </header>
  );
}