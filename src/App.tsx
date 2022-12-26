import { useEffect } from "react";
import { useNavigate, Link, Outlet, useLocation } from "react-router-dom";
import { useMutation, useQuery } from "redux-fleo";
import c from "./App.module.css";
import Text from "./atoms/Text/Text";

function App() {
  const [user, loading] = useQuery("auth.current-user");
  const logout = useMutation("auth.logout");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!loading && !user) {
      navigate("/login");
    }
    if (location.pathname === "/" && user) {
      navigate("/profile");
    }
  }, [loading, location.pathname, navigate, user]);

  return (
    <div className={c.App}>
      <div className={c.sidebar}>
        <Link to={`/profile`}>Profile</Link>
        <Link to={`/calendar`}>Calendar</Link>
        <div className={c.disconnect} onClick={logout}>
          <Text size="md" color="primary">
            Logout
          </Text>
        </div>
      </div>
      {user && (
        <div className={c.content}>
          <Outlet />
        </div>
      )}
    </div>
  );
}

export default App;
