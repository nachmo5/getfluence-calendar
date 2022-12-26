import { useQuery } from "redux-fleo";
import { User } from "../../$shared/types";
import Text from "../../atoms/Text/Text";
import c from "./ProfilePage.module.css";

function ProfilePage() {
  const [user, loading] = useQuery("auth.current-user") as unknown as [
    User,
    boolean
  ];
  if (loading) {
    return <>Loading...</>;
  }
  return (
    <div className={c.ProfilePage}>
      <Text size="xl">
        {`Welcome ${user.username} from ${user.city}`}
      </Text>
    </div>
  );
}

export default ProfilePage;
