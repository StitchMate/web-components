let template = `
    <div class="flex flex-col px-4 pt-12 pb-8">
        <h1 class="text-4xl font-sans">Text Input</h1>
        <h2 class="whitespace-nowrap my-2 text-xl text-slate-600">&lt;seam-text-input&gt; | SeamTextInput</h2>
        <hr />
        <h3 class="mt-4 mb-2 text-lg font-sans font-light">Text inputs represent a textual input a user may interact with.</h3>
        <div class="mt-2 mb-6 border rounded flex flex-col">
            <div class="pt-4 pb-2 px-6 flex gap-2 items-end">
                <seam-form>
                  <seam-text-input name="firstName"></seam-text-input>
                  <seam-button slot="submit">Submit</seam-button>
                </seam-form>
            </div>
            <div class="py-4 px-6 bg-gray-100 border-transparent border-t border-t-gray-200">
                <code class="language-html">
                    &lt;seam-text-input&gt;&lt;/seam-text-input&gt;
                </code>
            </div>
        </div>
        <h3 class="mt-4 mb-2 text-xl mb-6">Examples</h3>
        <hr />
        <h4 class="mt-4 mb-2 text-lg font-sans">Variants</h4>
        <p class="font-sans font-light">Use the <code>variant</code> attribute to set the button's variant.</p>
        <div class="mt-2 border rounded flex flex-col" >
            <div class="py-4 px-6">
                <seam-text-input></seam-text-input>
            </div>
            <div class="py-4 px-4 bg-gray-100 border-transparent border-t border-t-gray-200 flex flex-col">
                <code class="language-html">
                    &lt;seam-text-input&gt;&lt;/seam-text-input&gt;
                </code>
            </div>
        </div>
        <h4 class="mt-4 mb-2 text-lg font-sans">Spacing</h4>
        <p class="font-sans font-light">Use the <code>spacing</code> attribute to set the button's spacing. The <code class="language-html">none</code> size is usually used for links/breadcrumbs, while the <code>compact</code> size is expcted for use in tables.</p>
        <div class="mt-2 border rounded flex flex-col" >
            <div class="py-4 px-6">
                <seam-button>Button</seam-button>
                <seam-button spacing="compact">Button</seam-button>
                <seam-button spacing="none" variant="link">Button</seam-button>
            </div>
            <div class="py-4 px-4 bg-gray-100 border-transparent border-t border-t-gray-200 flex flex-col">
                <code class="language-html">
                    &lt;seam-button&gt;&lt;/seam-button&gt;
                </code>
                <code class="language-html">
                    &lt;seam-button spacing="compact"&gt;&lt;/seam-button&gt;
                </code>
                <code class="language-html">
                    &lt;seam-button spacing="none" variant="link"&gt;&lt;/seam-button&gt;
                </code>
            </div>
        </div>
        <h4 class="mt-4 mb-2 text-lg font-sans">States</h4>
        <p class="font-sans font-light">A button can take on various states of <code>loading</code>, <code>success</code>, or <code>fail</code> via boolean attributes.</p>
        <div class="mt-2 border rounded flex flex-col" >
            <div class="py-4 px-6 flex gap-2">
                <seam-button loading>Button</seam-button>
                <seam-button loading variant="subtle">Button</seam-button>
                <seam-button success>Button</seam-button>
                <seam-button success variant="subtle">Button</seam-button>
                <seam-button fail>Button</seam-button>
                <seam-button fail variant="subtle">Button</seam-button>
            </div>
            <div class="py-4 px-4 bg-gray-100 border-transparent border-t border-t-gray-200 flex flex-col">
                <code class="language-html">
                    &lt;seam-button loading&gt;&lt;/seam-button&gt;
                </code>
                <code class="language-html">
                    &lt;seam-button loading variant="subtle"&gt;&lt;/seam-button&gt;
                </code>
                <code class="language-html">
                    &lt;seam-button success&gt;&lt;/seam-button&gt;
                </code>
                <code class="language-html">
                    &lt;seam-button success variant="subtle"&gt;&lt;/seam-button&gt;
                </code>
                <code class="language-html">
                    &lt;seam-button fail&gt;&lt;/seam-button&gt;
                </code>
                <code class="language-html">
                    &lt;seam-button fail variant="subtle"&gt;&lt;/seam-button&gt;
                </code>
            </div>
        </div>
        <h4 class="mt-4 mb-2 text-lg font-sans">Customizing Styles</h4>
        <p class="font-sans font-light">This demonstrates how to style buttons with custom classes and CSS Varialbe overides. This is the recommended approach if you need to add additional variaonts. You may extend an exisitng variation by targeting the button's <code>variant</code> attribute, such as <code class="language-html">seam-button[variant="primary"]</code></p>
        <div class="mt-2 border rounded flex flex-col" >
            <div class="py-4 px-6 flex gap-2">
                <seam-button class="pink">Pink Button</seam-button>
                <style>
                    seam-button.pink::part(base) {
                        background: rgb(244 63 94);
                    }
                    seam-button.pink::part(base):hover {
                        background: rgb(225 29 72);   
                    }
                    seam-button.pink::part(base):active {
                        background: rgb(251 113 133);   
                    }
                </style>
            </div>
                <code class="language-html">
                    &lt;seam-button class="pink"&gt;Pink Button&lt;/seam-button&gt;
                </code>
                <code class="hljs language-html flex flex-col whitespace-pre-wrap">
                    &lt;style&gt;  seam-button.pink::part(base) {\n    background: rgb(244 63 94);\n  }&lt;/style&gt;\n&lt;style&gt;  seam-button.pink::part(base):hover {\n    background: rgb(225 29 72);\n  }&lt;/style&gt;\n&lt;style&gt;  seam-button.pink::part(base):active {\n    background: rgb(251 113 133);\n  }&lt;/style&gt;
                </code>
        </div>
        <h3 class="mt-4 mb-2 text-xl">Properties</h3>
        <hr />
        <table class="mt-2 font-sans mb-6">
            <tr>
                <th class="font-medium text-left">Name</th>
                <th class="font-medium text-left">Description</th>
                <th class="font-medium text-center">Reflects</th>
                <th class="font-medium text-center">Required</th>
                <th class="font-medium text-center">Type</th>
                <th class="font-medium text-center">Default</th>
            </tr>
            <tr class="border-b border-b-200">
                <td class="py-4"><code>variant</code></td>
                <td class="py-4 break-words w-[350px]">The button's variant.</td>
                <td class="py-4 text-center"><seam-check-icon></seam-check-icon></td>
                <td class="py-4 text-center"><seam-x-icon></seam-x-icon></td>
                <td class="py-4 text-center">"primary" | "subtle"</td>
                <td class="py-4 text-center">"primary"</td>
            </tr>
            <tr class="border-b border-b-200">
                <td class="py-4"><code>spacing</code></td>
                <td class="py-4 break-words w-[350px]">The button's spacing.</td>
                <td class="py-4 text-center"><seam-check-icon></seam-check-icon></td>
                <td class="py-4 text-center"><seam-x-icon></seam-x-icon></td>
                <td class="py-4 text-center">"default" | "compact" | "none"</td>
                <td class="py-4 text-center">"default"</td>
            </tr>
            <tr class="border-b border-b-200 bg-gray-100">
                <td class="py-4"><code>loading</code></td>
                <td class="py-4 break-words w-[350px]">Renders button in a loading state.</td>
                <td class="py-4 text-center"><seam-check-icon></seam-check-icon></td>
                <td class="py-4 text-center"><seam-x-icon></seam-x-icon></td>
                <td class="py-4 text-center">boolean</td>
                <td class="py-4 text-center">false</td>
            </tr>
            <tr class="border-b border-b-200">
                <td class="py-4"><code>success</code></td>
                <td class="py-4 break-words w-[350px]">Renders button in a success state.</td>
                <td class="py-4 text-center"><seam-check-icon></seam-check-icon></td>
                <td class="py-4 text-center"><seam-x-icon></seam-x-icon></td>
                <td class="py-4 text-center">boolean</td>
                <td class="py-4 text-center">false</td>
            </tr>
            <tr class="border-b border-b-200 bg-gray-100">
                <td class="py-4"><code>fail</code></td>
                <td class="py-4 break-words w-[350px]">Renders button in a fail state.</td>
                <td class="py-4 text-center"><seam-check-icon></seam-check-icon></td>
                <td class="py-4 text-center"><seam-x-icon></seam-x-icon></td>
                <td class="py-4 text-center">boolean</td>
                <td class="py-4 text-center">false</td>
            </tr>
            <tr class="border-b border-b-200">
                <td class="py-4"><code>href</code></td>
                <td class="py-4 break-words w-[350px]">If the button is of variant <code class="language-html">link</code>, set href since it will be rendered as an <a> tag.</td>
                <td class="py-4 text-center"><seam-x-icon></seam-x-icon></td>
                <td class="py-4 text-center"><seam-x-icon></seam-x-icon></td>
                <td class="py-4 text-center">URL</td>
                <td class="py-4 text-center">undefined</td>
            </tr>
            <tr class="border-b border-b-200 bg-gray-100">
                <td class="py-4"><code>target</code></td>
                <td class="py-4 break-words w-[350px]">Only used if href is set and button is of variant <code class="language-html">link</code>. Tells browser where to open the link</td>
                <td class="py-4 text-center"><seam-x-icon></seam-x-icon></td>
                <td class="py-4 text-center"><seam-x-icon></seam-x-icon></td>
                <td class="py-4 text-center">'_blank' | '_parent' | '_self' | '_top' | undefined</td>
                <td class="py-4 text-center">undefined</td>
            </tr>
            <tr class="border-b border-b-200">
                <td class="py-4"><code>download</code></td>
                <td class="py-4 break-words w-[350px]">Only used if href is set and button is of variant <code class="language-html">link</code>. Prompts user to to save the linked href as a file.</td>
                <td class="py-4 text-center"><seam-x-icon></seam-x-icon></td>
                <td class="py-4 text-center"><seam-x-icon></seam-x-icon></td>
                <td class="py-4 text-center">string | undefined</td>
                <td class="py-4 text-center">undefined</td>
            </tr>
        </table>
        <h3 class="mt-4 mb-2 text-xl">Events</h3>
        <hr />
        <table class="mt-2 font-sans mb-6">
            <tr>
                <th class="font-medium text-left">Name</th>
                <th class="font-medium text-left">Description</th>
                <th class="font-medium text-center">Event Detail</th>
            </tr>
            <tr class="border-b border-b-200">
                <td class="py-4"><code>seam-click</code></td>
                <td class="py-4">Emitted when the button is clicked.</td>
                <td class="py-4 text-center">-</td>
            </tr>
            <tr class="border-b border-b-200 bg-gray-100">
                <td class="py-4"><code>seam-loading</code></td>
                <td class="py-4">Emitted when the button enters into loading state.</td>
                <td class="py-4 text-center">-</td>
            </tr>
            <tr class="border-b border-b-200">
                <td class="py-4"><code>seam-success</code></td>
                <td class="py-4">Emitted when the button enters into success state.</td>
                <td class="py-4 text-center">-</td>
            </tr>
            <tr class="border-b border-b-200 bg-gray-100">
                <td class="py-4"><code>seam-fail</code></td>
                <td class="py-4">Emitted when button enters into fail state.</td>
                <td class="py-4 text-center">-</td>
            </tr>
        </table>
        <h3 class="mt-4 mb-2 text-xl">Slots</h3>
        <hr />
        <table class="mt-2 font-sans mb-6">
            <tr>
                <th class="font-medium text-left">Name</th>
                <th class="font-medium text-left">Description</th>
            </tr>
            <tr class="border-b border-b-200">
                <td class="py-4">(default)</td>
                <td class="py-4">The button's label.</td>
            </tr>
        </table>
        <h3 class="mt-4 mb-2 text-xl">CSS Parts</h3>
        <hr />
        <table class="mt-2 font-sans mb-6">
            <tr>
                <th class="font-medium text-left">Name</th>
                <th class="font-medium text-left">Description</th>
            </tr>
            <tr class="border-b border-b-200">
                <td class="py-4"><code>base</code></td>
                <td class="py-4">The button's base wrapper.</td>
            </tr>
            <tr class="border-b border-b-200">
                <td class="py-4"><code>label</code></td>
                <td class="py-4">The button's label.</td>
            </tr>
        </table>
        <h3 class="mt-4 mb-2 text-xl">CSS Variables</h3>
        <hr />
        <table class="mt-2 font-sans mb-6">
            <tr>
                <th class="font-medium text-left">Name</th>
                <th class="font-medium text-left">Description</th>
            </tr>
            <tr class="border-b border-b-200">
                <td class="py-4"><code class="language-html">--seam-base-text</code></td>
                <td class="py-4">Controls the base text size across all Seam components</td>
            </tr>
            <tr class="border-b border-b-200">
                <td class="py-4"><code class="language-html">--seam-button-radius</code></td>
                <td class="py-4">Controls how rounded the button corners are</td>
            </tr>
            <tr class="border-b border-b-200">
                <td class="py-4"><code class="language-html">--seam-button-primary</code></td>
                <td class="py-4">Controls the color of a primary button in the default state</td>
            </tr>
            <tr class="border-b border-b-200">
                <td class="py-4"><code class="language-html">--seam-button-primary--hover</code></td>
                <td class="py-4">Controls the color of a primary button in the hover state</td>
            </tr>
            <tr class="border-b border-b-200">
                <td class="py-4"><code class="language-html">--seam-button-primary--active</code></td>
                <td class="py-4">Controls the color of a primary button in the active state</td>
            </tr>
            <tr class="border-b border-b-200">
                <td class="py-4"><code class="language-html">--seam-button-subtle</code></td>
                <td class="py-4">Controls the color of a subtle button in the default state</td>
            </tr>
            <tr class="border-b border-b-200">
                <td class="py-4"><code class="language-html">--seam-button-subtle--hover</code></td>
                <td class="py-4">Controls the color of a subtle button in the hover state</td>
            </tr>
            <tr class="border-b border-b-200">
                <td class="py-4"><code class="language-html">--seam-button-subtle--active</code></td>
                <td class="py-4">Controls the color of a subtle button in the active state</td>
            </tr>
            <tr class="border-b border-b-200">
                <td class="py-4"><code class="language-html">--seam-button-link</code></td>
                <td class="py-4">Controls the color of a link button in the default state</td>
            </tr>
            <tr class="border-b border-b-200">
                <td class="py-4"><code class="language-html">--seam-button-link--hover</code></td>
                <td class="py-4">Controls the color of a link button in the hover state</td>
            </tr>
            <tr class="border-b border-b-200">
                <td class="py-4"><code class="language-html">--seam-button-link--active</code></td>
                <td class="py-4">Controls the color of a link button in the active state</td>
            </tr>
        </table>
        <h3 class="mt-4 mb-2 text-xl">Dependencies</h3>
        <hr />
        <p class="font-light font-sans py-2">This component imports the following dependencies.</p>
        <ul class="list-disc pl-6">
            <li class="py-1"><code class="language-html">&lt;seam-check-icon&gt;</code></li>
            <li class="py-1"><code class="language-html">&lt;seam-loading-icon&gt;</code></li>
            <li class="py-1"><code class="language-html">&lt;seam-x-icon&gt;</code></li>
        </ul>
    </div>
`;

document.getElementsByTagName("section")[0].innerHTML = template;
document.querySelectorAll("code").forEach((el) => {
  // then highlight each
  hljs.highlightElement(el);
});
document.addEventListener("seam-submit", (e) => {
  console.log("event", e);
  console.log("data", Object.fromEntries(e.detail.data.entries()));
});
