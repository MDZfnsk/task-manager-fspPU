
import { addListRoute } from "./addListRoute";
import { getAllListsRoute } from "./getAllListsRoute";
import { getSelectedListsRoute } from "./getSelectedListsRoute";
import { getNoOfListsRoute } from "./getNoOfListsRoute";
import { removeListRoute } from "./removeListRoute";
import { getSelectedTasksRoute } from "./getSelectedTasksRoute";
import { removeTaskRoute } from "./removeTaskRoute";
import { editSelectedTaskRoute } from "./editSelectedTaskRoute";
import { addTaskRoute } from './addTaskRoute';
import { markCompletedTaskRoute } from "./markCompletedTaskRoute";
import { userAuthRoute } from "./userAuthRoute";
import { getAllUsersRoute } from "./getAllUsersRoute";
import { addUserRoute } from "./addUserRoute";
import { getOneUserRoute } from "./getOneUserRoute";
import { getSelectedListsByUser } from "./getSelectedListsByUser";

export const routes = [
    getSelectedListsRoute,
    addListRoute,
    getNoOfListsRoute,
    removeListRoute,
    getAllListsRoute,
    getSelectedTasksRoute,
    removeTaskRoute,
    editSelectedTaskRoute,
    addTaskRoute,
    markCompletedTaskRoute,
    userAuthRoute,
    getAllUsersRoute,
    addUserRoute,
    getOneUserRoute,
    getSelectedListsByUser
];