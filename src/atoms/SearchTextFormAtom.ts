import { atom } from "recoil";

export const searchTextFormState = atom<string>({
    key: "searchTextForm",
    default: '',
});