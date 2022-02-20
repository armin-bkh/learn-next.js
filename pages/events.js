import { useRouter } from "next/router";
import { useState } from "react";

export const getServerSideProps = async ({ query }) => {
  const { category } = query;
  const queryString = category ? `category=${category}` : "";
  const data = await (
    await fetch(`http://localhost:3001/events?${queryString}`)
  ).json();

  return {
    props: {
      events: data,
    },
  };
};

const EventList = ({ events }) => {
  const [eventList, setEventList] = useState(events);
  const router = useRouter();

  const filterEventsHandler = async (filter) => {
    if (filter === "all") {
      const data = await (await fetch(`http://localhost:3001/events`)).json();
      router.push(`/events`, undefined, { shallow: true });
      setEventList(data);
      return;
    }
    const data = await (
      await fetch(`http://localhost:3001/events?category=${filter}`)
    ).json();
    setEventList(data);
    router.push(`/events?category=${filter}`, undefined, { shallow: true });
  };
  return (
    <section>
      <h1>list of events</h1>
      <button onClick={() => filterEventsHandler("all")}>all</button>
      <button onClick={() => filterEventsHandler("sports")}>sports</button>
      <button onClick={() => filterEventsHandler("politics")}>politics</button>
      <button onClick={() => filterEventsHandler("technology")}>
        technology
      </button>
      <ul>
        {eventList.length ? eventList.map((event) => (
          <li key={event.id}>
            <h2>
              {event.id} {event.title} | {event.category}
            </h2>
            <p>{event.description}</p>
            <hr />
          </li>
        )) : <h1>there is no event for this category</h1>}
      </ul>
    </section>
  );
};

export default EventList;
