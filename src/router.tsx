import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    // La página siempre debe abrir desde arriba, sin restaurar el scroll previo.
    scrollRestoration: false,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
