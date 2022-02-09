import axios from "axios";
import User from "../components/User/User";

export const getStaticProps = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return {
    props: {
      users: data,
    },
  };
};

const UsersList = ({ users }) => {
  return (
    <section>
      <h1>users list</h1>
      <ul>
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </ul>
    </section>
  );
};

export default UsersList;
