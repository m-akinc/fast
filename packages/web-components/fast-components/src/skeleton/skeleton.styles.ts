import { css, ElementStyles } from "@microsoft/fast-element";
import {
    display,
    ElementDefinitionContext,
    forcedColorsStylesheetBehavior,
    FoundationElementDefinition,
} from "@microsoft/fast-foundation";
import { SystemColors } from "@microsoft/fast-web-utilities";
import {
    controlCornerRadius,
    neutralFillActive,
    neutralFillRest,
} from "../design-tokens";

/**
 * Styles for Skeleton
 * @public
 */
export const skeletonStyles: (
    context: ElementDefinitionContext,
    definition: FoundationElementDefinition
) => ElementStyles = (
    context: ElementDefinitionContext,
    definition: FoundationElementDefinition
) =>
    css`
        ${display("block")} :host {
            --skeleton-fill-default: ${neutralFillRest};
            overflow: hidden;
            width: 100%;
            position: relative;
            background-color: var(--skeleton-fill, var(--skeleton-fill-default));
            --skeleton-animation-gradient-default: linear-gradient(
                270deg,
                var(--skeleton-fill, var(--skeleton-fill-default)) 0%,
                ${neutralFillActive} 51.13%,
                var(--skeleton-fill, var(--skeleton-fill-default)) 100%
            );
            --skeleton-animation-timing-default: ease-in-out;
        }

        :host([shape="rect"]) {
            border-radius: calc(${controlCornerRadius} * 1px);
        }

        :host([shape="circle"]) {
            border-radius: 100%;
            overflow: hidden;
        }

        object {
            position: absolute;
            width: 100%;
            height: auto;
            z-index: 2;
        }

        object img {
            width: 100%;
            height: auto;
        }

        ${display("block")} span.shimmer {
            position: absolute;
            width: 100%;
            height: 100%;
            background-image: var(
                --skeleton-animation-gradient,
                var(--skeleton-animation-gradient-default)
            );
            background-size: 0px 0px / 90% 100%;
            background-repeat: no-repeat;
            background-color: var(--skeleton-animation-fill, ${neutralFillActive});
            animation: shimmer 2s infinite;
            animation-timing-function: var(
                --skeleton-animation-timing,
                var(--skeleton-timing-default)
            );
            animation-direction: normal;
            z-index: 1;
        }

        ::slotted(svg) {
            z-index: 2;
        }

        ::slotted(.pattern) {
            width: 100%;
            height: 100%;
        }

        @keyframes shimmer {
            0% {
                transform: translateX(-100%);
            }
            100% {
                transform: translateX(100%);
            }
        }
    `.withBehaviors(
        forcedColorsStylesheetBehavior(
            css`
                ${display("block")} span.shimmer {
                    display: none;
                }
            `
        )
    );
