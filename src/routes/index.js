
import { addListRoute } from "./addListRoute";
import { getAllListsRoute } from "./getAllListsRoute";
import { getSelectedListsRoute } from "./getSelectedListsRoute";
import { getNoOfListsRoute } from "./getNoOfListsRoute";
import { removeListRoute } from "./removeListRoute";
import { getSelectedTasksRoute } from "./getSelectedTasksRoute";
import { removeTaskRoute } from "./removeTaskRoute";

export const routes = [
    getSelectedListsRoute,
    addListRoute,
    getNoOfListsRoute,
    removeListRoute,
    getAllListsRoute,
    getSelectedTasksRoute,
    removeTaskRoute
];