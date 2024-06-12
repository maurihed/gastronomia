import { useEffect, useState } from "react";
import { Navigate, useParams, useSearchParams } from "react-router-dom";
import { Button } from "@/components";
import { Slide } from "@/types";

function Theory() {
    const { topicId } = useParams();
    const [params, setParams] = useSearchParams();
    const pageNumber = parseInt(params.get("page") ?? "1");
    const [slide, setSlide] = useState<Slide>();
    const [loading, setLoading] = useState(true);
    const [pageCount, setPageCount] = useState(0);

    useEffect(() => {
        import("@/data/diapositivas.json").then((data) => {
            if (topicId) {
                const topicSlides = data.default as never as Record<
                    string,
                    Slide[]
                >;
                const slides = topicSlides[topicId] ?? [];
                setPageCount(slides.length);
                setSlide(slides[pageNumber - 1]);
            }
            setLoading(false);
        });
    }, [topicId, pageNumber]);

    if (!loading && !slide) {
        return <Navigate to="/topics" />;
    }

    return (
        <div className="h-full flex flex-col">
            <header className="p-4">
                <Button variant="link" to={`/topics`}>
                    Volver
                </Button>
            </header>
            <main className="flex-grow m-4 p-4 border-2 border-solid border-slate-200 rounded-lg flex flex-col lg:flex-row overflow-auto">
                {loading ? (
                    <p>Cargando...</p>
                ) : (
                    <>
                        {slide?.imagen && <img
                            className="w-full rounded-lg max-w-screen-sm	m-auto"
                            src={slide.imagen}
                            alt={slide?.titulo}
                        />}
                        <div className="flex-grow p-4">
                            <h1 className="text-3xl font-bold text-center mb-4">
                                {slide?.titulo}
                            </h1>
                            <p className="text-justify">{slide?.texto}</p>
                        </div>
                    </>
                )}
            </main>
            <footer className="p-4 text-center">
                <Button
                    disabled={pageNumber <= 1}
                    onClick={() =>
                        setParams({ page: (pageNumber - 1).toString() })
                    }
                    variant="primary"
                >
                    Anterior
                </Button>
                <span className="mx-4">
                    {pageNumber} de {pageCount} paginas
                </span>
                <Button
                    disabled={pageNumber >= pageCount}
                    onClick={() =>
                        setParams({ page: (pageNumber + 1).toString() })
                    }
                    variant="primary"
                >
                    Siguiente
                </Button>
            </footer>
        </div>
    );
}

export default Theory;
