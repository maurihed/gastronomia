import { Layout } from "@/components";
import { Recipe } from "@/types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RecipeList } from "./components";

function Recipes() {
    const { topicId } = useParams();
    const [loading, setLoading] = useState(true);
    const [recipes, setRecipes] = useState<Recipe[]>([]);

    useEffect(() => {
        import("@/data/recetas.json").then((data) => {
            const recipesData = data.default as never as Record<
                string,
                Recipe[]
            >;
            if (topicId && topicId in recipesData) {
                setRecipes(recipesData[topicId]);
            } else {
                const allRecipes: Recipe[] = [];
                Object.values(recipesData).forEach((recipes) => {
                    allRecipes.push(...recipes);
                });
                setRecipes(allRecipes);
            }
            setLoading(false);
        });
    }, [topicId]);

    if (loading) {
        return (
            <Layout title={<h1 className="text-3xl font-bold">Recetas</h1>}>
                <h1 className="text-3xl font-bold">Cargando...</h1>
            </Layout>
        );
    }

    return (
        <Layout title={<h1 className="text-3xl font-bold">Recetas</h1>}>
            <div className="m-6">
              <RecipeList recipes={recipes} />
            </div>
        </Layout>
    );
}

export default Recipes;
