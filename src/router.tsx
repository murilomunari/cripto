import { createBrowserRouter } from "react-router-dom";

import { Home } from "./pages/home";
import { Datail } from "./pages/datails";
import { NotFound } from "./pages/notFound/inde";
import { Layout } from "./components/layout";

const router = createBrowserRouter ([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/datail/:cripto",
                element: <Datail />
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    }
])

export { router }