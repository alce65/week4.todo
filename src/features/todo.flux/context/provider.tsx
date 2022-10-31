import { useTasks } from '../hooks/use.task';

import { TodoFluxContext } from './context';

export function TodoFluxContextProvider({
    children,
}: {
    children: JSX.Element;
}) {
    const context = useTasks();
    return (
        <TodoFluxContext.Provider value={context}>
            {children}
        </TodoFluxContext.Provider>
    );
}
