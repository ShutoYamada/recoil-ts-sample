import { selector } from "recoil";
import { todoListState } from '../atoms/TodoListAtom';
import { searchTextFormState } from '../atoms/SearchTextFormAtom';
import Todo from '../types/Todo';

export const searchedTodoListSelector = selector<Todo[]>({
  key: "searchedTodoListSelector",
  get: ({ get }) => {
    const todoList: Todo[] = get(todoListState);
    const searchText: string = get(searchTextFormState);
    return searchText? todoList.filter((t) => t.title.includes(searchText)) : todoList;
  },
});