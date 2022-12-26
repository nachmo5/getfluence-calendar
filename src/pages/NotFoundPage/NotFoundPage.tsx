import { useRouteError } from "react-router-dom";
import c from "./NotFoundPage.module.css";

function NotFoundPage() {
  const error = useRouteError() as { message: string };
  return (
    <div className={c.NotFoundPage}>
      <div>
        <h1>404 not found</h1>
        {error.message && <h2>{error.message}</h2>}
      </div>
    </div>
  );
}

export default NotFoundPage;
