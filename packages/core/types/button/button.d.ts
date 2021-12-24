import { Props } from "atomico";
export declare const Button: import("atomico/types/dom").Atom<Props<{
    name: {
        type: StringConstructor;
        value: string;
    };
    ghost: {
        type: BooleanConstructor;
        value: boolean;
    };
    size: {
        type: StringConstructor;
        value: string;
    };
    loading: {
        type: BooleanConstructor;
        reflect: boolean;
        value: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        reflect: boolean;
        value: boolean;
    };
    full: {
        type: BooleanConstructor;
        value: boolean;
    };
    onClick: FunctionConstructor;
}>, {
    new (): HTMLElement;
    prototype: HTMLElement;
}>;
