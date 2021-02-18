import { useCallback } from "react";
import { useRecoilValue, useSetRecoilState, SetterOrUpdater } from "recoil";
import { searchTextFormState } from "../atoms/SearchTextFormAtom";

const SearchForm: React.FC = () => {
  const searchTextFormValue: string = useRecoilValue(searchTextFormState);
  const setSearchTextFormValue: SetterOrUpdater<string> = useSetRecoilState(
    searchTextFormState
  );
  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTextFormValue(event.target.value);
    },
    [setSearchTextFormValue]
  );

  return (
    <label>
      検索:
      <input
        type="text"
        value={searchTextFormValue}
        onChange={onChange}
        name="title"
        style={{ margin: 12 }}
      />
    </label>
  );
};

export default SearchForm;
