
import { addListRoute } from "./addListRoute";
import { getAllListsRoute } from "./getAllListsRoute";
import { getSelectedListsRoute } from "./getSelectedListsRoute";
import { getNoOfListsRoute } from "./getNoOfListsRoute";

export const routes = [
    getSelectedListsRoute,
    addListRoute,
    getNoOfListsRoute
];