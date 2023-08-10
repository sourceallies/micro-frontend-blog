import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import twitterImage from './twitter.png';
import instagramImage from './instagram.png';
import facebookImage from './facebook.png';
import linkedInImage from './linkedin.png';

@customElement("sai-social-icons")
export default class Header extends LitElement {
    static styles = css`
        @import url("/styles.css");   
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
    `;

    buildSocialIcon(imagePath: string) {
        const imgUrl = new URL(imagePath, import.meta.url).href;
        return html`<li><img src=${imgUrl} /></li>`;
    }

    render() {
        return html`
            <ul class="social-icons">
                ${this.buildSocialIcon(twitterImage)}
                ${this.buildSocialIcon(instagramImage)}
                ${this.buildSocialIcon(facebookImage)}
                ${this.buildSocialIcon(linkedInImage)}
            </ul>
        `;
    }
}