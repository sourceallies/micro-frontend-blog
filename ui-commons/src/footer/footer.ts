import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import logoImage from './search-icon.png';
@customElement("sai-footer")
export default class Footer extends LitElement {
    static styles = css`
        @import url("/styles.css");   
        :host {
            width: 100vw;
            display: block;
        }
        FOOTER {
            display: grid;
            background-color: var(--company-navy);
            color: var(--white);
            padding-top: .5rem;
            padding-bottom: .5rem;
            padding-left: 3rem;
            padding-right: 3rem;
        }
        .links {
            grid-column: 1;
            grid-row: 1;
        }
        .copyright {
            grid-column: 1;
            grid-row: 2/span 2;
        }
        .search {
            grid-column: 2;
            grid-row: 1/span 2;
        }
        .search label {
            display: block;
        }
        .search .search-wrapper {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: .5rem;
        }
        .search button {
            border-radius: 5px;
            border-style: solid;
        }
        .search input {
            width: 100%;
            height: 1rem;
        }
        .search-icon {
            height: 1rem;
            width: 1rem;
        }
        .social-icons {
            grid-column: 2;
            grid-row: 3;
            align-items: center;
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
        A {
            text-transform: uppercase;
            text-decoration: none;
            font-weight: normal;
            color: var(--white);
        }
    `;

    private buildSearchForm() {
        const searchUrl = new URL(logoImage, import.meta.url).href;
        return html`
            <form class="search">
                <label for="search-input">Search</label>
                <div class="search-wrapper">
                    <input id="search-input" type="text" />
                    <button type="submit"><img class="search-icon" src=${searchUrl} /></button>
                </div>
            </form>
        `;
    }

    render() {
        return html`
            <footer>
                <ul class="links">
                    <li><a href="#">CONTACT US</a></li>
                    <li><a href="#">CAREERS</a></li>
                    <li><a href="#">PRIVACY POLICY</a></li>
                    <li><a href="#">TERMS OF USE</a></li>
                </ul>
                <p class="copyright">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                ${this.buildSearchForm()}
                <sai-social-icons class="social-icons"></sai-social-icons>
            </footer>
        `;
    }
}