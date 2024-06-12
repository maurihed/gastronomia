import { Button } from "@/components";
import { Topic } from "@/types";

type Props = {
    topic: Topic;
}

function TopicItem({ topic }: Props) {
  return (
    <div className="p-4 border-2 border-solid border-slate-200 rounded-lg grid h-108">
      <img src={topic.image} alt={topic.title} className="rounded-lg aspect-4/3 mb-4 h-40 w-full" />
      <div className="mb-2 font-bold text-xl">{topic.title}</div>
      <p className="line-clamp-4 mb-2 max-h-24">{topic.description}</p>
      <div className="flex justify-end gap-4 mt-auto">
          <Button variant="secondary" to={`/recipes/${topic.id}`} >
            Recetas
          </Button>
          <Button  to={`/theory/${topic.id}`} >
            Teoria
          </Button>
      </div>
    </div>
  );
}

export default TopicItem;
