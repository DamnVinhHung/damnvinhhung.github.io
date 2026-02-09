let isSpanContent = false

const emitSpanContentChangeEvent = (mode: "on" | "off") => {
  const event: CustomEventMap["spancontentchange"] = new CustomEvent("spancontentchange", {
    detail: { mode },
  })
  document.dispatchEvent(event)
}

document.addEventListener("nav", () => {
  const switchSpanContent = () => {
    isSpanContent = !isSpanContent
    const newMode = isSpanContent ? "on" : "off"
    document.documentElement.setAttribute("span-content", newMode)
    emitSpanContentChangeEvent(newMode)
  }

  for (const spanContentButton of document.getElementsByClassName("spancontent")) {
    spanContentButton.addEventListener("click", switchSpanContent)
    window.addCleanup(() => spanContentButton.removeEventListener("click", switchSpanContent))
  }

  // Set initial state
  document.documentElement.setAttribute("span-content", isSpanContent ? "on" : "off")
})
