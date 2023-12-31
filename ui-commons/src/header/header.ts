import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import logoImage from './source-allies-logo-final.png';
// import twitterImage from './twitter.png';
// import instagramImage from './instagram.png';
// import facebookImage from './facebook.png';
// import linkedInImage from './linkedin.png';
import "../social-icons/social-icons";

@customElement("sai-header")
export default class Header extends LitElement {
    static styles = css`
        @import url("/styles.css");   
        :host {
            width: 100vw;
            display: block;
            position: sticky;
            z-index: 1000;
        }
        HEADER {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            background-color: var(--company-orange);
            color: var(--white);
            padding: .5rem;
        }
        NAV {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            background-color: var(--company-navy);
            color: var(--text-grey);
            padding: .5rem;
        }
        UL {
            list-style: none;
            margin-block-start: 0;
            margin-block-end: 0;
            padding-inline-start: 0;
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 1rem;
        }
        .nav-buttons A {
            text-transform: uppercase;
            text-decoration: none;
            font-weight: normal;
            color: var(--white);
        }
    `;

    buildSocialIcon(imagePath: string) {
        const imgUrl = new URL(imagePath, import.meta.url).href;
        return html`<li><img src=${imgUrl} /></li>`;
    }

    render() {
        const imgUrl = new URL(logoImage, import.meta.url).href;
        return html`
            <header>
                <sai-social-icons></sai-social-icons>
                <ul class="contact-info">
                    <li>Company Name</li>
                    <li>1234 Fake Main St. Urbandale, IA 50322</li>
                    <li>(515) 555-5555</li>
                </ul>
            </header>
            <nav>
                <img src=${imgUrl} />
                <ul class="nav-buttons">
                    <li><a href="#">button Label</a></li>
                    <li><a href="#">button Label</a></li>
                    <li><a href="#">button Label</a></li>
                    <li><a href="#">button Label</a></li>
                    <li><a href="#">button Label</a></li>
                </ul>
            </nav>
        `;
    }
}