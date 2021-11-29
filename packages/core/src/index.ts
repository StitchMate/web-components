import { Button } from "./button/button";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faHome } from "@fortawesome/free-solid-svg-icons";

library.add(faHome);

dom.watch();

customElements.define("todo-button", Button);
