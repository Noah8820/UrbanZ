import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/cards">Go back to home</Link>
    </div>
  );
};

export default ErrorPage;
