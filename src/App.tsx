import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "react-query"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { Topics, Theory, Recipes, RecipeDetails } from "@/pages"

library.add(fas, far, fab);

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/topics" />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/recipes/:topicId?" element={<Recipes />} />
          <Route path="/recipes-details/:recipeId" element={<RecipeDetails />} />
          <Route path="/theory/:topicId" element={<Theory />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
