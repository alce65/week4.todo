import { Navigate, Route, Routes } from 'react-router-dom';
import GotPage from '../../../features/got/pages/got.page';
import HomePage from '../../../features/home/page/home.page';
import TodoPage from '../../../features/todo/pages/todo.page';
import TodoFluxPage from '../../../features/todo.flux/pages/todo.page';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="home" element={<HomePage></HomePage>}></Route>
            <Route path="todo" element={<TodoPage></TodoPage>}></Route>
            <Route
                path="todoFlux"
                element={<TodoFluxPage></TodoFluxPage>}
            ></Route>
            <Route path="got" element={<GotPage></GotPage>}></Route>
            <Route path="" element={<HomePage></HomePage>}></Route>
            <Route path="*" element={<Navigate replace to="" />}></Route>
        </Routes>
    );
}
