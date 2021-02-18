import { useCallback } from "react";
import { useRecoilValue, useSetRecoilState, SetterOrUpdater } from "recoil";
import { todoTitleFormState } from "../atoms/TodoTitleFormAtom";

const TitleForm: React.FC = () => {
  const todoTitleFormValue: string = useRecoilValue(todoTitleFormState);
  const setTodoTitleFormValue: SetterOrUpdater<string> = useSetRecoilState(
    todoTitleFormState
  );
  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setTodoTitleFormValue(event.target.value);
    },
    [setTodoTitleFormValue]
  );

  return (
    <label>
      タスク名:
      <input
        type="text"
        value={todoTitleFormValue}
        onChange={onChange}
        name="title"
        style={{ margin: 12 }}
      />
    </label>
  );
};

export default TitleForm;
