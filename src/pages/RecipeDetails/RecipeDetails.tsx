import { Recipe } from "@/types";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import "./RecipeDetails.css";
import { Button } from "@/components";

function RecipeDetails() {
    const [recipe, setRecipe] = useState<Recipe>();
    const [loading, setLoading] = useState(true);
    const { recipeId } = useParams();

    useEffect(() => {
        import("@/data/recetas.json").then((data) => {
            const recipesData = data.default as never as Record<
                string,
                Recipe[]
            >;
            if (recipeId) {
                const allRecipes: Recipe[] = [];
                Object.values(recipesData).forEach((recipes) =>
                    allRecipes.push(...recipes)
                );
                const recipe = allRecipes.find(
                    (recipe) => recipe.id === Number(recipeId)
                );
                setRecipe(recipe);
            }
            setLoading(false);
        });
    }, [recipeId]);

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (!recipe) {
        return <Navigate to="/recipes" />;
    }

    return (
      <div className="overlay">
        <main className="main">
            <Button variant="link" to={`/recipes`}>Volver</Button>
            <div className="main__image">
                <img src={recipe.imagen} alt={recipe.titulo} />
            </div>
            <h1 className="main__title">{recipe.titulo}</h1>
            <p>{recipe.descripcion}</p>
            <h2 className="main__subtitle">Ingredientes</h2>
            <ul className="recipe_list">
                {recipe.ingredientes.map(({ nombre, cantidad, unidad }) => (
                    <li>
                        {cantidad} {unidad} {nombre}
                    </li>
                ))}
            </ul>
            <div className="divider"></div>
            <h2 className="main__subtitle">Instrucciones</h2>
            <ol className="recipe_list">
                {recipe.procedimiento.map((step) => (
                    <li>{step}</li>
                ))}
            </ol>
        </main>
      </div>
    );
}

export default RecipeDetails;
