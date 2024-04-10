import { lazy } from "solid-js";
import { render } from "solid-js/web";

const routes = [
    {
        path: "/",
        component: lazy(() => import("./pages/Home")),
    },
    {
        path: "/about",
        component: lazy(() => import("./pages/About")),
    },
    {
        path: "/:rest*",
        component: lazy(() => import("./pages/NotFound1")),
    },
    ];
]