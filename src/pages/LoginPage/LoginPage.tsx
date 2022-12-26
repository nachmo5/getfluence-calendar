import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "redux-fleo";
import Button from "../../atoms/Button/Button";
import Card from "../../atoms/Card/Card";
import Text from "../../atoms/Text/Text";
import LabeledTextInput from "../../molecules/LabeledTextInput/LabeledTextInput";
import c from "./LoginPage.module.css";

function LoginPage() {
  const navigate = useNavigate();
  const login = useMutation("auth.login");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const submit = async () => {
    if (!username || !password) {
      return alert("Missing fields");
    }
    try {
      await login(username, password);
      navigate("/");
    } catch (e: any) {
      alert(e.message);
    }
  };

  return (
    <div className={c.LoginPage}>
      <Card>
        <div className={c.loginForm}>
          <Text size="xl" bold>
            Login
          </Text>
          <LabeledTextInput
            multiline
            value={username}
            label="Username"
            onChange={setUsername}
            placeholder="Your username"
          />
          <LabeledTextInput
            multiline
            value={password}
            label="Password"
            type="password"
            onChange={setPassword}
            placeholder="Your password"
          />
            <Button onClick={submit} color="rainbow" fullWidth>
              LOGIN
            </Button>

          <div className={c.register}>
            <Link to="/register">
              <Text size="md">Or REGISTER</Text>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default LoginPage;
