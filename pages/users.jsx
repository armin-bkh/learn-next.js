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
          <li key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default UsersList;
