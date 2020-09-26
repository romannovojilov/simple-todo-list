import { useState, ChangeEvent } from "react";


type UseBind = (initialValue: string | undefined) => [
  {
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    value: string
  },
  string,
  (value: string) => void
];

export const useBind: UseBind = (initialValue = '') => {
  const [state, setState] = useState<string>(initialValue);
  return [
    {
      onChange: e => setState(e.target.value),
      value: state
    },
    state,
    setState
  ]
}