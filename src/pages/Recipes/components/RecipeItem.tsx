import { Button } from "@/components";
import { Recipe } from "@/types";

function RecipeItem({ recipe }: { recipe: Recipe}) {
  return (
    <div className="p-4 border-2 border-solid border-slate-200 rounded-lg flex flex-col h-108">
      <img src={recipe.imagen} alt={recipe.titulo} className="rounded-lg aspect-4/3 mb-4 h-40 w-full" />
      <div className="mb-2 font-bold text-xl">{recipe.titulo}</div>
      <p className="line-clamp-6 mb-2 flex-1 max-h-36">{recipe.descripcion}</p>
      <div className="mt-auto flex justify-end">
        <Button variant="primary" to={`/recipes-details/${recipe.id}`} >
          Ver Receta
        </Button>
      </div>
    </div>
  ); 
}

export default RecipeItem;
