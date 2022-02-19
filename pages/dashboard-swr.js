import axios from "axios";
import useSWR from "swr";

const fetcher = async () => {
  const { data } = await axios.get("http://localhost:3001/dashboard");
  return data;
};

const DashboardSwr = () => {
  const { data, error } = useSWR("dashboard", fetcher);

  if (error) return <h1>an error has eccured</h1>;

  if (!data) return <h1>loading...</h1>;

  return (
    <section>
      <h2>my views - {data.view}</h2>
      <h2>my posts - {data.posts}</h2>
      <h2>my followers - {data.followers}</h2>
      <h2>my following - {data.following}</h2>
    </section>
  );
};

export default DashboardSwr;
