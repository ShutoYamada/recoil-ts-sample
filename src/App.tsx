import { useCallback } from "react";
import { useRecoilValue, useSetRecoilState, atom, selector } from "recoil";
import "./App.css";
import { todoListState } from "./atoms/TodoListAtom";
import TitleForm from "./component/TitleForm";
import AddButton from "./component/AddButton";
import TodoList from "./component/TodoList";
import SearchForm from "./component/SearchForm";

const App: React.FC = () => {
  return (
    <div style={{ margin: 12 }}>
      <div>
        <TitleForm />
        <AddButton />
      </div>
      <SearchForm />
      <TodoList />
    </div>
  );
};

export default App;
