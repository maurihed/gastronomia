import { Recipe } from "@/types";
import RecipeItem from "./RecipeItem";
import { useLayout } from "@/components";

function RecipeList({ recipes }: { recipes: Recipe[]}) {
  const { search } = useLayout();
  const filteredRecipes = recipes.filter(
      (recipe) =>
          recipe.titulo
              .toLocaleUpperCase()
              .includes(search.toLocaleUpperCase()) ||
          recipe.descripcion
              .toLocaleUpperCase()
              .includes(search.toLocaleUpperCase())
  );
  return (
    <ul className="grid gap-4 grid-flow-dense grid-cols-responsive">
      { filteredRecipes.map((recipe) => (
        <li key={recipe.id}>
          <RecipeItem recipe={recipe} />
        </li>
      ))}
    </ul>
  );
}

export default RecipeList;
