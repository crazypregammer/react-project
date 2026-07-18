import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1>404 — Page Not Found</h1>
      <p>
        Sorry, the page you are looking for doesn't exist or may have been
        moved.
      </p>
      <Link to="/">Go back to the dashboard</Link>
    </div>
  );
}

export default NotFound;
