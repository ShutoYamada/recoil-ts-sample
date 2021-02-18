import { useRecoilValue } from "recoil";
import { searchedTodoListSelector } from "../selectors/SearchedTodoListSelector";
import Todo from "../types/Todo";

const TodoList: React.FC = () => {
  const list: Todo[] = useRecoilValue(searchedTodoListSelector);
  return (
    <div>
      <p>タスク一覧</p>
      <ul>
        {list.map((todo: Todo, i: number) => {
          return <li key={`${todo.title}_${i}`}>{todo.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
