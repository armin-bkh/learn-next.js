import User from "../components/User/User";

export const getStaticProps = async () => {
  const users = await (
    await fetch("https://jsonplaceholder.typicode.com/users")
  ).json();
  return {
    props: {
      users,
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
