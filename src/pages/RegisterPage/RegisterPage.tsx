import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "redux-fleo";
import Button from "../../atoms/Button/Button";
import Card from "../../atoms/Card/Card";
import Text from "../../atoms/Text/Text";
import LabeledTextInput from "../../molecules/LabeledTextInput/LabeledTextInput";
import c from "./RegisterPage.module.css";

function RegisterPage() {
  const register = useMutation("auth.register");
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [city, setCity] = useState<string>("");

  const submit = async () => {
    if (!username || !password) {
      return alert("Missing fields");
    }
    try {
      await register({ username, password, city });
      navigate("/");
    } catch (e: any) {
      alert(e.message);
    }
  };

  return (
    <div className={c.RegisterPage}>
      <Card>
        <div className={c.form}>
          <Text size="xl" bold>
            Register
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
          <LabeledTextInput
            multiline
            value={city}
            label="City"
            onChange={setCity}
            placeholder="Your city"
          />
          <Button onClick={submit} color="rainbow" fullWidth>
            REGISTER
          </Button>

          <div className={c.login}>
            <Link to="/login">
              <Text size="md">Or LOGIN</Text>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default RegisterPage;
