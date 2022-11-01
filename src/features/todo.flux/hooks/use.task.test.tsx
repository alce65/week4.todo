import { renderHook } from '@testing-library/react';
import { useTasks } from './use.task';
const { result } = renderHook(() => useTasks());
console.log(result.current);
