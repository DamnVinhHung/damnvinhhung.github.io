// @ts-ignore
import spanContentScript from "./scripts/spancontent.inline"
import styles from "./styles/spancontent.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { i18n } from "../i18n"
import { classNames } from "../util/lang"

const SpanContent: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
  return (
    <button class={classNames(displayClass, "spancontent")}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        class="expandIcon"
        fill="currentColor"
        stroke="currentColor"
        stroke-width="0.2"
        stroke-linecap="round"
        stroke-linejoin="round"
        width="64px"
        height="64px"
        viewBox="0 0 20 20"
        aria-label={i18n(cfg.locale).components.spanContent.title}
      >
        <title>{i18n(cfg.locale).components.spanContent.title}</title>
        <g transform="translate(-4, -3) scale(1.4, 1.4)">
          <path d="M 7.35 5.65 c 0.2 0.2 0.2 0.5 0 0.7 L 4.71 9 h 10.58 l -2.64 -2.65 a 0.5 0.5 0 0 1 0.7 -0.7 l 3.5 3.5 c 0.2 0.2 0.2 0.5 0 0.7 l -3.5 3.5 a 0.5 0.5 0 0 1 -0.7 -0.7 L 15.29 10 H 4.71 l 2.64 2.65 a 0.5 0.5 0 0 1 -0.7 0.7 l -3.5 -3.5 a 0.5 0.5 0 0 1 0 -0.7 l 3.5 -3.5 c 0.2 -0.2 0.5 -0.2 0.7 0 Z" />
        </g>
      </svg>
    </button>
  )
}

SpanContent.beforeDOMLoaded = spanContentScript
SpanContent.css = styles

export default (() => SpanContent) satisfies QuartzComponentConstructor
