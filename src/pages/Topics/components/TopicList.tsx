import { Topic } from "@/types";
import TopicItem from "./TopicItem";
import { useLayout } from "@/components/Layout";

type Props = {
    topics: Topic[];
};
function TopicList({ topics }: Props) {
    const { search } = useLayout();

    const filteredTopics = topics.filter((topic) =>
        topic.title.toUpperCase().includes(search.toUpperCase())
    );

    return (
        <ul className="grid gap-4 grid-flow-dense grid-cols-responsive">
            {filteredTopics.map((topic) => (
                <li key={topic.id}>
                    <TopicItem topic={topic} />
                </li>
            ))}
        </ul>
    );
}

export default TopicList;
