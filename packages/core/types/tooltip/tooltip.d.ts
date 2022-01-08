import { Props } from "atomico";
export declare const Tooltip: import("atomico/types/dom").Atom<Props<{
    placement: {
        type: StringConstructor;
        value: string;
    };
    inline: {
        type: BooleanConstructor;
        value: boolean;
    };
    useClick: {
        type: BooleanConstructor;
        value: boolean;
    };
}>, {
    new (): HTMLElement;
    prototype: HTMLElement;
}>;
