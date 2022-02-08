import { useRouter } from "next/router";

const Docs = () => {
  const {
    query: { params = [] },
  } = useRouter();
  const [feature, concept] = params;

  console.log(params);
  if (params.length === 2) {
    return (
      <div>
        viewing docs for feature {feature} and concept {concept}
      </div>
    );
  } else if (params.length === 1) {
    return <div>viewing docs for feature {feature}</div>;
  }

  return <div>Docs Page</div>;
};

export default Docs;
