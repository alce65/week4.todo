import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '../../../features/home/page/home.page';
import TodoPage from '../../../features/todo/pages/todo.page';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="home" element={<HomePage></HomePage>}></Route>
            <Route path="todo" element={<TodoPage></TodoPage>}></Route>
            <Route path="" element={<HomePage></HomePage>}></Route>
            <Route path="*" element={<Navigate replace to="" />}></Route>
        </Routes>
    );
}
