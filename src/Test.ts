import { LitElement, html } from "lit";
import { customElement } from 'lit/decorators/custom-element.js';

@customElement("test-element")
export class TestElement extends LitElement {
    render() {
        return html`
            <div>This is a test element45</div>
        `
    }
}