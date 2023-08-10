import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";

@customElement("sai-footer")
export default class Footer extends LitElement {
    static styles = css`
        @import url("/styles.css");   
        :host {
            width: 100vw;
            display: block;
        }
        FOOTER {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            background-color: var(--company-navy);
            color: var(--white);
            padding: .5rem;
        }
    `;

    render() {
        return html`
            <footer>
                Footer stuff
            </footer>
        `;
    }
}