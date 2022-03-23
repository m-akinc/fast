import { STORY_RENDERED } from "@storybook/core-events";
import { toggleBold, toggleItalic } from "roosterjs-editor-api";
import addons from "@storybook/addons";
import { html, ViewTemplate } from "@microsoft/fast-element";
import {
    TextEditor as foundationTextEditor,
    TextEditorToolbar,
} from "@microsoft/fast-foundation";
import TextEditorTemplate from "./fixtures/base.html";
import "./index";

addons.getChannel().addListener(STORY_RENDERED, (name: string) => {
    if (name.toLowerCase().startsWith("text-editor")) {
        const toolbarResources: object = {
            boldButtonTitle: "Bold",
            italicButtonTitle: "Italic",
        };

        const customToolbarTemplate: ViewTemplate = html<TextEditorToolbar>`
            <fast-toolbar class="toolbar" part="toolbar">
                <fast-button appearance="outline" @click="${x => toggleBold(x.editor)}">
                    Template Bold
                </fast-button>
                <fast-button appearance="outline" @click="${x => toggleItalic(x.editor)}">
                    ${x => x.resources["italicButtonTitle"]}
                </fast-button>
            </fast-toolbar>
        `;

        const editor1: foundationTextEditor = document.getElementById(
            "editor1"
        ) as foundationTextEditor;
        editor1.toolbarResources = toolbarResources;

        const editor2: foundationTextEditor = document.getElementById(
            "editor2"
        ) as foundationTextEditor;
        editor2.toolbarResources = toolbarResources;
        editor2.toolbarTemplate = customToolbarTemplate;

        const editor3: foundationTextEditor = document.getElementById(
            "editor3"
        ) as foundationTextEditor;
        editor3.toolbarResources = toolbarResources;

        const editor4: foundationTextEditor = document.getElementById(
            "editor4"
        ) as foundationTextEditor;
        editor4.toolbarResources = toolbarResources;
    }
});

export default {
    title: "Text Editor",
};

export const TextEditor = () => TextEditorTemplate;
