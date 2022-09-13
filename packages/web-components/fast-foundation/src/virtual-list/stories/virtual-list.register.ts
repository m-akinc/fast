import { css } from "@microsoft/fast-element";
import { FASTDataList } from "../../index.js";
import { virtualListTemplate } from "../virtual-list.template.js";

const styles = css`
    :host {
        height: 100%;
        display: block;
        overflow-y: scroll;
    }
    .container {
        position: relative;
    }
`;

FASTDataList.define({
    name: "fast-virtual-list",
    styles,
    template: virtualListTemplate({
        defaultListItem: "fast-virtual-list-item",
    }),
});
