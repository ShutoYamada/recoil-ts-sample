import { atom } from "recoil";

export const todoTitleFormState = atom<string>({
    key: "todoTitleForm",
    default: '',
});