import { Props } from "atomico";
export declare const TextInput: import("atomico/types/dom").Atom<Props<{
    kind: {
        type: StringConstructor;
        value: string;
    };
    autocomplete: StringConstructor;
    autoFocus: {
        type: BooleanConstructor;
        value: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        value: boolean;
    };
    placeholder: StringConstructor;
    onChange: FunctionConstructor;
    value: StringConstructor;
    helperText: StringConstructor;
    iconPlacement: StringConstructor;
    invalid: {
        type: BooleanConstructor;
        reflect: boolean;
        value: boolean;
    };
    readOnly: BooleanConstructor;
    labelText: StringConstructor;
    validityMessage: StringConstructor;
    full: BooleanConstructor;
}>, {
    new (): HTMLElement;
    prototype: HTMLElement;
}>;
