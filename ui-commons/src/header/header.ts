import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import logoImage from './source-allies-logo-final.png';

@customElement("sai-header")
export class Header extends LitElement {
    static styles = css`
        @import url("/brand.css");   
        :host {
            width: 100vw;
            display: block;
            position: sticky;
            z-index: 1000;
        }
        header {
            display: flex;
            flex-direction: row;
            background-color: var(--company-orange);
            color: var(--text-grey);
        }
        nav {
            display: flex;
            flex-direction: row;
            background-color: var(--company-navy);
            color: var(--text-grey);
        }
    `;

    render() {
        const imgUrl = new URL(logoImage, import.meta.url).href;
        return html`
            <header>
                Stuff
            </header>
            <nav>
                <img src=${imgUrl} />
                Stuff
            </nav>
        `;
    }
}