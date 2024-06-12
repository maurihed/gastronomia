import { useState } from "react";
import { Layout } from "@/components/Layout";
import TopicsData from "@/data/temas.json";
import { Topic } from "@/types";
import TopicList from "./components/TopicList";

function Topics() {
  const [topics] = useState(TopicsData);

  return (
    <Layout title={<h1 className="text-3xl font-bold">Temas</h1>}>
      <div className="m-6">
        <TopicList topics={topics as never as Topic[]} />
      </div>
    </Layout>
  );
}

export default Topics;
