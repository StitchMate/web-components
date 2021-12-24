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
    kind: {
        type: StringConstructor;
        value: string;
    };
    skeleton: {
        type: BooleanConstructor;
        value: boolean;
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
    spacing: {
        type: StringConstructor;
        value: string;
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
