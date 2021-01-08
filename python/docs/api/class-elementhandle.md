---
id: class-elementhandle
title: "ElementHandle"
---

* extends: [JSHandle]

ElementHandle represents an in-page DOM element. ElementHandles can be created with the [page.$(selector)](./api/class-page.md#pageselector) method.

ElementHandle prevents DOM element from garbage collection unless the handle is disposed with [js_handle.dispose()](./api/class-jshandle.md#jshandledispose). ElementHandles are auto-disposed when their origin frame gets navigated.

ElementHandle instances can be used as an argument in [page.$eval(selector, page_function, **options)](./api/class-page.md#pageevalselector-pagefunction-options) and [page.evaluate(page_function, **options)](./api/class-page.md#pageevaluatepagefunction-options) methods.


- [element_handle.$(selector)](./api/class-elementhandle.md#elementhandleselector)
- [element_handle.$$(selector)](./api/class-elementhandle.md#elementhandleselector-1)
- [element_handle.$eval(selector, page_function, **options)](./api/class-elementhandle.md#elementhandleevalselector-pagefunction-options)
- [element_handle.$$eval(selector, page_function, **options)](./api/class-elementhandle.md#elementhandleevalselector-pagefunction-options-1)
- [element_handle.bounding_box()](./api/class-elementhandle.md#elementhandleboundingbox)
- [element_handle.check(**options)](./api/class-elementhandle.md#elementhandlecheckoptions)
- [element_handle.click(**options)](./api/class-elementhandle.md#elementhandleclickoptions)
- [element_handle.content_frame()](./api/class-elementhandle.md#elementhandlecontentframe)
- [element_handle.dblclick(**options)](./api/class-elementhandle.md#elementhandledblclickoptions)
- [element_handle.dispatch_event(type, **options)](./api/class-elementhandle.md#elementhandledispatcheventtype-options)
- [element_handle.fill(value, **options)](./api/class-elementhandle.md#elementhandlefillvalue-options)
- [element_handle.focus()](./api/class-elementhandle.md#elementhandlefocus)
- [element_handle.get_attribute(name)](./api/class-elementhandle.md#elementhandlegetattributename)
- [element_handle.hover(**options)](./api/class-elementhandle.md#elementhandlehoveroptions)
- [element_handle.inner_html()](./api/class-elementhandle.md#elementhandleinnerhtml)
- [element_handle.inner_text()](./api/class-elementhandle.md#elementhandleinnertext)
- [element_handle.owner_frame()](./api/class-elementhandle.md#elementhandleownerframe)
- [element_handle.press(key, **options)](./api/class-elementhandle.md#elementhandlepresskey-options)
- [element_handle.screenshot(**options)](./api/class-elementhandle.md#elementhandlescreenshotoptions)
- [element_handle.scroll_into_view_if_needed(**options)](./api/class-elementhandle.md#elementhandlescrollintoviewifneededoptions)
- [element_handle.select_option(**options)](./api/class-elementhandle.md#elementhandleselectoptionoptions)
- [element_handle.select_text(**options)](./api/class-elementhandle.md#elementhandleselecttextoptions)
- [element_handle.set_input_files(files, **options)](./api/class-elementhandle.md#elementhandlesetinputfilesfiles-options)
- [element_handle.tap(**options)](./api/class-elementhandle.md#elementhandletapoptions)
- [element_handle.text_content()](./api/class-elementhandle.md#elementhandletextcontent)
- [element_handle.type(text, **options)](./api/class-elementhandle.md#elementhandletypetext-options)
- [element_handle.uncheck(**options)](./api/class-elementhandle.md#elementhandleuncheckoptions)
- [element_handle.wait_for_element_state(state, **options)](./api/class-elementhandle.md#elementhandlewaitforelementstatestate-options)
- [element_handle.wait_for_selector(selector, **options)](./api/class-elementhandle.md#elementhandlewaitforselectorselector-options)
- [js_handle.as_element()](./api/class-jshandle.md#jshandleaselement)
- [js_handle.dispose()](./api/class-jshandle.md#jshandledispose)
- [js_handle.evaluate(page_function, **options)](./api/class-jshandle.md#jshandleevaluatepagefunction-options)
- [js_handle.evaluate_handle(page_function, **options)](./api/class-jshandle.md#jshandleevaluatehandlepagefunction-options)
- [js_handle.get_properties()](./api/class-jshandle.md#jshandlegetproperties)
- [js_handle.get_property(property_name)](./api/class-jshandle.md#jshandlegetpropertypropertyname)
- [js_handle.json_value()](./api/class-jshandle.md#jshandlejsonvalue)

## element_handle.$(selector)
- `selector` <[str]> A selector to query for. See [working with selectors](./selectors.md#working-with-selectors) for more details.
- returns: <[NoneType]|[ElementHandle]>

The method finds an element matching the specified selector in the `ElementHandle`'s subtree. See [Working with selectors](./selectors.md#working-with-selectors) for more details. If no elements match the selector, returns `null`.

## element_handle.$$(selector)
- `selector` <[str]> A selector to query for. See [working with selectors](./selectors.md#working-with-selectors) for more details.
- returns: <[List]\[[ElementHandle]\]>

The method finds all elements matching the specified selector in the `ElementHandle`s subtree. See [Working with selectors](./selectors.md#working-with-selectors) for more details. If no elements match the selector, returns empty array.

## element_handle.$eval(selector, page_function, **options)
- `selector` <[str]> A selector to query for. See [working with selectors](./selectors.md#working-with-selectors) for more details.
- `page_function` <[Callable]\[[Element]\]> Function to be evaluated in browser context
- `arg` <[EvaluationArgument]> Optional argument to pass to `pageFunction`
- returns: <[Serializable]>

Returns the return value of `pageFunction`

The method finds an element matching the specified selector in the `ElementHandle`s subtree and passes it as a first argument to `pageFunction`. See [Working with selectors](./selectors.md#working-with-selectors) for more details. If no elements match the selector, the method throws an error.

If `pageFunction` returns a [Promise], then `frame.$eval` would wait for the promise to resolve and return its value.

Examples:

## element_handle.$$eval(selector, page_function, **options)
- `selector` <[str]> A selector to query for. See [working with selectors](./selectors.md#working-with-selectors) for more details.
- `page_function` <[Callable]\[[List]\[[Element]\]\]> Function to be evaluated in browser context
- `arg` <[EvaluationArgument]> Optional argument to pass to `pageFunction`
- returns: <[Serializable]>

Returns the return value of `pageFunction`

The method finds all elements matching the specified selector in the `ElementHandle`'s subtree and passes an array of matched elements as a first argument to `pageFunction`. See [Working with selectors](./selectors.md#working-with-selectors) for more details.

If `pageFunction` returns a [Promise], then `frame.$$eval` would wait for the promise to resolve and return its value.

Examples:

```html
<div class="feed">
  <div class="tweet">Hello!</div>
  <div class="tweet">Hi!</div>
</div>
```

## element_handle.bounding_box()
- returns: <[NoneType]|[Dict]>
  - `x` <[float]> the x coordinate of the element in pixels.
  - `y` <[float]> the y coordinate of the element in pixels.
  - `width` <[float]> the width of the element in pixels.
  - `height` <[float]> the height of the element in pixels.

This method returns the bounding box of the element, or `null` if the element is not visible. The bounding box is calculated relative to the main frame viewport - which is usually the same as the browser window.

Scrolling affects the returned bonding box, similarly to [Element.getBoundingClientRect](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect). That means `x` and/or `y` may be negative.

Elements from child frames return the bounding box relative to the main frame, unlike the [Element.getBoundingClientRect](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect).

Assuming the page is static, it is safe to use bounding box coordinates to perform input. For example, the following snippet should click the center of the element.

## element_handle.check(**options)
- `force` <[bool]> Whether to bypass the [actionability](./actionability.md) checks. Defaults to `false`.
- `no_wait_after` <[bool]> Actions that initiate navigations are waiting for these navigations to happen and for pages to start loading. You can opt out of waiting via setting this flag. You would only need this option in the exceptional cases such as navigating to inaccessible pages. Defaults to `false`.
- `timeout` <[float]> Maximum time in milliseconds, defaults to 30 seconds, pass `0` to disable timeout. The default value can be changed by using the [browser_context.set_default_timeout(timeout)](./api/class-browsercontext.md#browsercontextsetdefaulttimeouttimeout) or [page.set_default_timeout(timeout)](./api/class-page.md#pagesetdefaulttimeouttimeout) methods.

This method checks the element by performing the following steps:
1. Ensure that element is a checkbox or a radio input. If not, this method rejects. If the element is already checked, this method returns immediately.
1. Wait for [actionability](./actionability.md) checks on the element, unless `force` option is set.
1. Scroll the element into view if needed.
1. Use [page.mouse](./api/class-page.md#pagemouse) to click in the center of the element.
1. Wait for initiated navigations to either succeed or fail, unless `noWaitAfter` option is set.
1. Ensure that the element is now checked. If not, this method rejects.

If the element is detached from the DOM at any moment during the action, this method rejects.

When all steps combined have not finished during the specified `timeout`, this method rejects with a [TimeoutError]. Passing zero timeout disables this.

## element_handle.click(**options)
- `button` <"left"|"right"|"middle"> Defaults to `left`.
- `click_count` <[int]> defaults to 1. See [UIEvent.detail].
- `delay` <[float]> Time to wait between `mousedown` and `mouseup` in milliseconds. Defaults to 0.
- `force` <[bool]> Whether to bypass the [actionability](./actionability.md) checks. Defaults to `false`.
- `modifiers` <[List]\["Alt"|"Control"|"Meta"|"Shift"\]> Modifier keys to press. Ensures that only these modifiers are pressed during the operation, and then restores current modifiers back. If not specified, currently pressed modifiers are used.
- `no_wait_after` <[bool]> Actions that initiate navigations are waiting for these navigations to happen and for pages to start loading. You can opt out of waiting via setting this flag. You would only need this option in the exceptional cases such as navigating to inaccessible pages. Defaults to `false`.
- `position` <[Dict]> A point to use relative to the top-left corner of element padding box. If not specified, uses some visible point of the element.
  - `x` <[float]>
  - `y` <[float]>
- `timeout` <[float]> Maximum time in milliseconds, defaults to 30 seconds, pass `0` to disable timeout. The default value can be changed by using the [browser_context.set_default_timeout(timeout)](./api/class-browsercontext.md#browsercontextsetdefaulttimeouttimeout) or [page.set_default_timeout(timeout)](./api/class-page.md#pagesetdefaulttimeouttimeout) methods.

This method clicks the element by performing the following steps:
1. Wait for [actionability](./actionability.md) checks on the element, unless `force` option is set.
1. Scroll the element into view if needed.
1. Use [page.mouse](./api/class-page.md#pagemouse) to click in the center of the element, or the specified `position`.
1. Wait for initiated navigations to either succeed or fail, unless `noWaitAfter` option is set.

If the element is detached from the DOM at any moment during the action, this method rejects.

When all steps combined have not finished during the specified `timeout`, this method rejects with a [TimeoutError]. Passing zero timeout disables this.

## element_handle.content_frame()
- returns: <[NoneType]|[Frame]>

Returns the content frame for element handles referencing iframe nodes, or `null` otherwise

## element_handle.dblclick(**options)
- `button` <"left"|"right"|"middle"> Defaults to `left`.
- `delay` <[float]> Time to wait between `mousedown` and `mouseup` in milliseconds. Defaults to 0.
- `force` <[bool]> Whether to bypass the [actionability](./actionability.md) checks. Defaults to `false`.
- `modifiers` <[List]\["Alt"|"Control"|"Meta"|"Shift"\]> Modifier keys to press. Ensures that only these modifiers are pressed during the operation, and then restores current modifiers back. If not specified, currently pressed modifiers are used.
- `no_wait_after` <[bool]> Actions that initiate navigations are waiting for these navigations to happen and for pages to start loading. You can opt out of waiting via setting this flag. You would only need this option in the exceptional cases such as navigating to inaccessible pages. Defaults to `false`.
- `position` <[Dict]> A point to use relative to the top-left corner of element padding box. If not specified, uses some visible point of the element.
  - `x` <[float]>
  - `y` <[float]>
- `timeout` <[float]> Maximum time in milliseconds, defaults to 30 seconds, pass `0` to disable timeout. The default value can be changed by using the [browser_context.set_default_timeout(timeout)](./api/class-browsercontext.md#browsercontextsetdefaulttimeouttimeout) or [page.set_default_timeout(timeout)](./api/class-page.md#pagesetdefaulttimeouttimeout) methods.

This method double clicks the element by performing the following steps:
1. Wait for [actionability](./actionability.md) checks on the element, unless `force` option is set.
1. Scroll the element into view if needed.
1. Use [page.mouse](./api/class-page.md#pagemouse) to double click in the center of the element, or the specified `position`.
1. Wait for initiated navigations to either succeed or fail, unless `noWaitAfter` option is set. Note that if the first click of the `dblclick()` triggers a navigation event, this method will reject.

If the element is detached from the DOM at any moment during the action, this method rejects.

When all steps combined have not finished during the specified `timeout`, this method rejects with a [TimeoutError]. Passing zero timeout disables this.

> **NOTE** `elementHandle.dblclick()` dispatches two `click` events and a single `dblclick` event.

## element_handle.dispatch_event(type, **options)
- `type` <[str]> DOM event type: `"click"`, `"dragstart"`, etc.
- `event_init` <[EvaluationArgument]> Optional event-specific initialization properties.

The snippet below dispatches the `click` event on the element. Regardless of the visibility state of the elment, `click` is dispatched. This is equivalend to calling [element.click()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/click).

Under the hood, it creates an instance of an event based on the given `type`, initializes it with `eventInit` properties and dispatches it on the element. Events are `composed`, `cancelable` and bubble by default.

Since `eventInit` is event-specific, please refer to the events documentation for the lists of initial properties:
* [DragEvent](https://developer.mozilla.org/en-US/docs/Web/API/DragEvent/DragEvent)
* [FocusEvent](https://developer.mozilla.org/en-US/docs/Web/API/FocusEvent/FocusEvent)
* [KeyboardEvent](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/KeyboardEvent)
* [MouseEvent](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent)
* [PointerEvent](https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/PointerEvent)
* [TouchEvent](https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent/TouchEvent)
* [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event/Event)

You can also specify `JSHandle` as the property value if you want live objects to be passed into the event:

## element_handle.fill(value, **options)
- `value` <[str]> Value to set for the `<input>`, `<textarea>` or `[contenteditable]` element.
- `no_wait_after` <[bool]> Actions that initiate navigations are waiting for these navigations to happen and for pages to start loading. You can opt out of waiting via setting this flag. You would only need this option in the exceptional cases such as navigating to inaccessible pages. Defaults to `false`.
- `timeout` <[float]> Maximum time in milliseconds, defaults to 30 seconds, pass `0` to disable timeout. The default value can be changed by using the [browser_context.set_default_timeout(timeout)](./api/class-browsercontext.md#browsercontextsetdefaulttimeouttimeout) or [page.set_default_timeout(timeout)](./api/class-page.md#pagesetdefaulttimeouttimeout) methods.

This method waits for [actionability](./actionability.md) checks, focuses the element, fills it and triggers an `input` event after filling. If the element is not an `<input>`, `<textarea>` or `[contenteditable]` element, this method throws an error. Note that you can pass an empty string to clear the input field.

## element_handle.focus()

Calls [focus](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus) on the element.

## element_handle.get_attribute(name)
- `name` <[str]> Attribute name to get the value for.
- returns: <[NoneType]|[str]>

Returns element attribute value.

## element_handle.hover(**options)
- `force` <[bool]> Whether to bypass the [actionability](./actionability.md) checks. Defaults to `false`.
- `modifiers` <[List]\["Alt"|"Control"|"Meta"|"Shift"\]> Modifier keys to press. Ensures that only these modifiers are pressed during the operation, and then restores current modifiers back. If not specified, currently pressed modifiers are used.
- `position` <[Dict]> A point to use relative to the top-left corner of element padding box. If not specified, uses some visible point of the element.
  - `x` <[float]>
  - `y` <[float]>
- `timeout` <[float]> Maximum time in milliseconds, defaults to 30 seconds, pass `0` to disable timeout. The default value can be changed by using the [browser_context.set_default_timeout(timeout)](./api/class-browsercontext.md#browsercontextsetdefaulttimeouttimeout) or [page.set_default_timeout(timeout)](./api/class-page.md#pagesetdefaulttimeouttimeout) methods.

This method hovers over the element by performing the following steps:
1. Wait for [actionability](./actionability.md) checks on the element, unless `force` option is set.
1. Scroll the element into view if needed.
1. Use [page.mouse](./api/class-page.md#pagemouse) to hover over the center of the element, or the specified `position`.
1. Wait for initiated navigations to either succeed or fail, unless `noWaitAfter` option is set.

If the element is detached from the DOM at any moment during the action, this method rejects.

When all steps combined have not finished during the specified `timeout`, this method rejects with a [TimeoutError]. Passing zero timeout disables this.

## element_handle.inner_html()
- returns: <[str]>

Returns the `element.innerHTML`.

## element_handle.inner_text()
- returns: <[str]>

Returns the `element.innerText`.

## element_handle.owner_frame()
- returns: <[NoneType]|[Frame]>

Returns the frame containing the given element.

## element_handle.press(key, **options)
- `key` <[str]> Name of the key to press or a character to generate, such as `ArrowLeft` or `a`.
- `delay` <[float]> Time to wait between `keydown` and `keyup` in milliseconds. Defaults to 0.
- `no_wait_after` <[bool]> Actions that initiate navigations are waiting for these navigations to happen and for pages to start loading. You can opt out of waiting via setting this flag. You would only need this option in the exceptional cases such as navigating to inaccessible pages. Defaults to `false`.
- `timeout` <[float]> Maximum time in milliseconds, defaults to 30 seconds, pass `0` to disable timeout. The default value can be changed by using the [browser_context.set_default_timeout(timeout)](./api/class-browsercontext.md#browsercontextsetdefaulttimeouttimeout) or [page.set_default_timeout(timeout)](./api/class-page.md#pagesetdefaulttimeouttimeout) methods.

Focuses the element, and then uses [keyboard.down(key)](./api/class-keyboard.md#keyboarddownkey) and [keyboard.up(key)](./api/class-keyboard.md#keyboardupkey).

`key` can specify the intended [keyboardEvent.key](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key) value or a single character to generate the text for. A superset of the `key` values can be found [here](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values). Examples of the keys are:

`F1` - `F12`, `Digit0`- `Digit9`, `KeyA`- `KeyZ`, `Backquote`, `Minus`, `Equal`, `Backslash`, `Backspace`, `Tab`, `Delete`, `Escape`, `ArrowDown`, `End`, `Enter`, `Home`, `Insert`, `PageDown`, `PageUp`, `ArrowRight`, `ArrowUp`, etc.

Following modification shortcuts are also supported: `Shift`, `Control`, `Alt`, `Meta`, `ShiftLeft`.

Holding down `Shift` will type the text that corresponds to the `key` in the upper case.

If `key` is a single character, it is case-sensitive, so the values `a` and `A` will generate different respective texts.

Shortcuts such as `key: "Control+o"` or `key: "Control+Shift+T"` are supported as well. When speficied with the modifier, modifier is pressed and being held while the subsequent key is being pressed.

## element_handle.screenshot(**options)
- `omit_background` <[bool]> Hides default white background and allows capturing screenshots with transparency. Not applicable to `jpeg` images. Defaults to `false`.
- `path` <[Union]\[[str], [pathlib.Path]\]> The file path to save the image to. The screenshot type will be inferred from file extension. If `path` is a relative path, then it is resolved relative to the current working directory. If no path is provided, the image won't be saved to the disk.
- `quality` <[int]> The quality of the image, between 0-100. Not applicable to `png` images.
- `timeout` <[float]> Maximum time in milliseconds, defaults to 30 seconds, pass `0` to disable timeout. The default value can be changed by using the [browser_context.set_default_timeout(timeout)](./api/class-browsercontext.md#browsercontextsetdefaulttimeouttimeout) or [page.set_default_timeout(timeout)](./api/class-page.md#pagesetdefaulttimeouttimeout) methods.
- `type` <"png"|"jpeg"> Specify screenshot type, defaults to `png`.
- returns: <[Buffer]>

Returns the buffer with the captured screenshot.

This method waits for the [actionability](./actionability.md) checks, then scrolls element into view before taking a screenshot. If the element is detached from DOM, the method throws an error.

## element_handle.scroll_into_view_if_needed(**options)
- `timeout` <[float]> Maximum time in milliseconds, defaults to 30 seconds, pass `0` to disable timeout. The default value can be changed by using the [browser_context.set_default_timeout(timeout)](./api/class-browsercontext.md#browsercontextsetdefaulttimeouttimeout) or [page.set_default_timeout(timeout)](./api/class-page.md#pagesetdefaulttimeouttimeout) methods.

This method waits for [actionability](./actionability.md) checks, then tries to scroll element into view, unless it is completely visible as defined by [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)'s ```ratio```.

Throws when `elementHandle` does not point to an element [connected](https://developer.mozilla.org/en-US/docs/Web/API/Node/isConnected) to a Document or a ShadowRoot.

## element_handle.select_option(**options)
- `no_wait_after` <[bool]> Actions that initiate navigations are waiting for these navigations to happen and for pages to start loading. You can opt out of waiting via setting this flag. You would only need this option in the exceptional cases such as navigating to inaccessible pages. Defaults to `false`.
- `timeout` <[float]> Maximum time in milliseconds, defaults to 30 seconds, pass `0` to disable timeout. The default value can be changed by using the [browser_context.set_default_timeout(timeout)](./api/class-browsercontext.md#browsercontextsetdefaulttimeouttimeout) or [page.set_default_timeout(timeout)](./api/class-page.md#pagesetdefaulttimeouttimeout) methods.
- `element` <[ElementHandle]|[List]\[[ElementHandle]\]> Option elements to select. Optional.
- `index` <[int]|[List]\[[int]\]> Options to select by index. Optional.
- `value` <[str]|[List]\[[str]\]> Options to select by value. If the `<select>` has the `multiple` attribute, all given options are selected, otherwise only the first option matching one of the passed options is selected. Optional.
- `label` <[str]|[List]\[[str]\]> Options to select by label. If the `<select>` has the `multiple` attribute, all given options are selected, otherwise only the first option matching one of the passed options is selected. Optional.
- returns: <[List]\[[str]\]>

Returns the array of option values that have been successfully selected.

Triggers a `change` and `input` event once all the provided options have been selected. If element is not a `<select>` element, the method throws an error.

## element_handle.select_text(**options)
- `timeout` <[float]> Maximum time in milliseconds, defaults to 30 seconds, pass `0` to disable timeout. The default value can be changed by using the [browser_context.set_default_timeout(timeout)](./api/class-browsercontext.md#browsercontextsetdefaulttimeouttimeout) or [page.set_default_timeout(timeout)](./api/class-page.md#pagesetdefaulttimeouttimeout) methods.

This method waits for [actionability](./actionability.md) checks, then focuses the element and selects all its text content.

## element_handle.set_input_files(files, **options)
- `files` <[Union]\[[str], [pathlib.Path]\]|[List]\[[Union]\[[str], [pathlib.Path]\]\]|[Dict]|[List]\[[Dict]\]>
  - `name` <[str]> [File] name **required**
  - `mime_type` <[str]> [File] type **required**
  - `buffer` <[Buffer]> File content **required**
- `no_wait_after` <[bool]> Actions that initiate navigations are waiting for these navigations to happen and for pages to start loading. You can opt out of waiting via setting this flag. You would only need this option in the exceptional cases such as navigating to inaccessible pages. Defaults to `false`.
- `timeout` <[float]> Maximum time in milliseconds, defaults to 30 seconds, pass `0` to disable timeout. The default value can be changed by using the [browser_context.set_default_timeout(timeout)](./api/class-browsercontext.md#browsercontextsetdefaulttimeouttimeout) or [page.set_default_timeout(timeout)](./api/class-page.md#pagesetdefaulttimeouttimeout) methods.

This method expects `elementHandle` to point to an [input element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input).

Sets the value of the file input to these file paths or files. If some of the `filePaths` are relative paths, then they are resolved relative to the the current working directory. For empty array, clears the selected files.

## element_handle.tap(**options)
- `force` <[bool]> Whether to bypass the [actionability](./actionability.md) checks. Defaults to `false`.
- `modifiers` <[List]\["Alt"|"Control"|"Meta"|"Shift"\]> Modifier keys to press. Ensures that only these modifiers are pressed during the operation, and then restores current modifiers back. If not specified, currently pressed modifiers are used.
- `no_wait_after` <[bool]> Actions that initiate navigations are waiting for these navigations to happen and for pages to start loading. You can opt out of waiting via setting this flag. You would only need this option in the exceptional cases such as navigating to inaccessible pages. Defaults to `false`.
- `position` <[Dict]> A point to use relative to the top-left corner of element padding box. If not specified, uses some visible point of the element.
  - `x` <[float]>
  - `y` <[float]>
- `timeout` <[float]> Maximum time in milliseconds, defaults to 30 seconds, pass `0` to disable timeout. The default value can be changed by using the [browser_context.set_default_timeout(timeout)](./api/class-browsercontext.md#browsercontextsetdefaulttimeouttimeout) or [page.set_default_timeout(timeout)](./api/class-page.md#pagesetdefaulttimeouttimeout) methods.

This method taps the element by performing the following steps:
1. Wait for [actionability](./actionability.md) checks on the element, unless `force` option is set.
1. Scroll the element into view if needed.
1. Use [page.touchscreen](./api/class-page.md#pagetouchscreen) to tap the center of the element, or the specified `position`.
1. Wait for initiated navigations to either succeed or fail, unless `noWaitAfter` option is set.

If the element is detached from the DOM at any moment during the action, this method rejects.

When all steps combined have not finished during the specified `timeout`, this method rejects with a [TimeoutError]. Passing zero timeout disables this.

> **NOTE** `elementHandle.tap()` requires that the `hasTouch` option of the browser context be set to true.

## element_handle.text_content()
- returns: <[NoneType]|[str]>

Returns the `node.textContent`.

## element_handle.type(text, **options)
- `text` <[str]> A text to type into a focused element.
- `delay` <[float]> Time to wait between key presses in milliseconds. Defaults to 0.
- `no_wait_after` <[bool]> Actions that initiate navigations are waiting for these navigations to happen and for pages to start loading. You can opt out of waiting via setting this flag. You would only need this option in the exceptional cases such as navigating to inaccessible pages. Defaults to `false`.
- `timeout` <[float]> Maximum time in milliseconds, defaults to 30 seconds, pass `0` to disable timeout. The default value can be changed by using the [browser_context.set_default_timeout(timeout)](./api/class-browsercontext.md#browsercontextsetdefaulttimeouttimeout) or [page.set_default_timeout(timeout)](./api/class-page.md#pagesetdefaulttimeouttimeout) methods.

Focuses the element, and then sends a `keydown`, `keypress`/`input`, and `keyup` event for each character in the text.

To press a special key, like `Control` or `ArrowDown`, use [element_handle.press(key, **options)](./api/class-elementhandle.md#elementhandlepresskey-options).

An example of typing into a text field and then submitting the form:

## element_handle.uncheck(**options)
- `force` <[bool]> Whether to bypass the [actionability](./actionability.md) checks. Defaults to `false`.
- `no_wait_after` <[bool]> Actions that initiate navigations are waiting for these navigations to happen and for pages to start loading. You can opt out of waiting via setting this flag. You would only need this option in the exceptional cases such as navigating to inaccessible pages. Defaults to `false`.
- `timeout` <[float]> Maximum time in milliseconds, defaults to 30 seconds, pass `0` to disable timeout. The default value can be changed by using the [browser_context.set_default_timeout(timeout)](./api/class-browsercontext.md#browsercontextsetdefaulttimeouttimeout) or [page.set_default_timeout(timeout)](./api/class-page.md#pagesetdefaulttimeouttimeout) methods.

This method checks the element by performing the following steps:
1. Ensure that element is a checkbox or a radio input. If not, this method rejects. If the element is already unchecked, this method returns immediately.
1. Wait for [actionability](./actionability.md) checks on the element, unless `force` option is set.
1. Scroll the element into view if needed.
1. Use [page.mouse](./api/class-page.md#pagemouse) to click in the center of the element.
1. Wait for initiated navigations to either succeed or fail, unless `noWaitAfter` option is set.
1. Ensure that the element is now unchecked. If not, this method rejects.

If the element is detached from the DOM at any moment during the action, this method rejects.

When all steps combined have not finished during the specified `timeout`, this method rejects with a [TimeoutError]. Passing zero timeout disables this.

## element_handle.wait_for_element_state(state, **options)
- `state` <"visible"|"hidden"|"stable"|"enabled"|"disabled"> A state to wait for, see below for more details.
- `timeout` <[float]> Maximum time in milliseconds, defaults to 30 seconds, pass `0` to disable timeout. The default value can be changed by using the [browser_context.set_default_timeout(timeout)](./api/class-browsercontext.md#browsercontextsetdefaulttimeouttimeout) or [page.set_default_timeout(timeout)](./api/class-page.md#pagesetdefaulttimeouttimeout) methods.

Returns when the element satisfies the `state`.

Depending on the `state` parameter, this method waits for one of the [actionability](./actionability.md) checks to pass. This method throws when the element is detached while waiting, unless waiting for the `"hidden"` state.
* `"visible"` Wait until the element is [visible](./actionability.md#visible).
* `"hidden"` Wait until the element is [not visible](./actionability.md#visible) or [not attached](./actionability.md#attached). Note that waiting for hidden does not throw when the element detaches.
* `"stable"` Wait until the element is both [visible](./actionability.md#visible) and [stable](./actionability.md#stable).
* `"enabled"` Wait until the element is [enabled](./actionability.md#enabled).
* `"disabled"` Wait until the element is [not enabled](./actionability.md#enabled).

If the element does not satisfy the condition for the `timeout` milliseconds, this method will throw.

## element_handle.wait_for_selector(selector, **options)
- `selector` <[str]> A selector to query for. See [working with selectors](./selectors.md#working-with-selectors) for more details.
- `state` <"attached"|"detached"|"visible"|"hidden"> Defaults to `'visible'`. Can be either:
  * `'attached'` - wait for element to be present in DOM.
  * `'detached'` - wait for element to not be present in DOM.
  * `'visible'` - wait for element to have non-empty bounding box and no `visibility:hidden`. Note that element without any content or with `display:none` has an empty bounding box and is not considered visible.
  * `'hidden'` - wait for element to be either detached from DOM, or have an empty bounding box or `visibility:hidden`. This is opposite to the `'visible'` option.
- `timeout` <[float]> Maximum time in milliseconds, defaults to 30 seconds, pass `0` to disable timeout. The default value can be changed by using the [browser_context.set_default_timeout(timeout)](./api/class-browsercontext.md#browsercontextsetdefaulttimeouttimeout) or [page.set_default_timeout(timeout)](./api/class-page.md#pagesetdefaulttimeouttimeout) methods.
- returns: <[NoneType]|[ElementHandle]>

Returns element specified by selector when it satisfies `state` option. Returns `null` if waiting for `hidden` or `detached`.

Wait for the `selector` relative to the element handle to satisfy `state` option (either appear/disappear from dom, or become visible/hidden). If at the moment of calling the method `selector` already satisfies the condition, the method will return immediately. If the selector doesn't satisfy the condition for the `timeout` milliseconds, the function will throw.

> **NOTE** This method does not work across navigations, use [page.wait_for_selector(selector, **options)](./api/class-page.md#pagewaitforselectorselector-options) instead.

[Accessibility]: ./api/class-accessibility.md "Accessibility"
[Browser]: ./api/class-browser.md "Browser"
[BrowserContext]: ./api/class-browsercontext.md "BrowserContext"
[BrowserType]: ./api/class-browsertype.md "BrowserType"
[CDPSession]: ./api/class-cdpsession.md "CDPSession"
[ChromiumBrowserContext]: ./api/class-chromiumbrowsercontext.md "ChromiumBrowserContext"
[ConsoleMessage]: ./api/class-consolemessage.md "ConsoleMessage"
[Dialog]: ./api/class-dialog.md "Dialog"
[Download]: ./api/class-download.md "Download"
[ElementHandle]: ./api/class-elementhandle.md "ElementHandle"
[FileChooser]: ./api/class-filechooser.md "FileChooser"
[FirefoxBrowser]: ./api/class-firefoxbrowser.md "FirefoxBrowser"
[Frame]: ./api/class-frame.md "Frame"
[JSHandle]: ./api/class-jshandle.md "JSHandle"
[Keyboard]: ./api/class-keyboard.md "Keyboard"
[Mouse]: ./api/class-mouse.md "Mouse"
[Page]: ./api/class-page.md "Page"
[Playwright]: ./api/class-playwright.md "Playwright"
[Request]: ./api/class-request.md "Request"
[Response]: ./api/class-response.md "Response"
[Route]: ./api/class-route.md "Route"
[Selectors]: ./api/class-selectors.md "Selectors"
[TimeoutError]: ./api/class-timeouterror.md "TimeoutError"
[Touchscreen]: ./api/class-touchscreen.md "Touchscreen"
[Video]: ./api/class-video.md "Video"
[WebKitBrowser]: ./api/class-webkitbrowser.md "WebKitBrowser"
[WebSocket]: ./api/class-websocket.md "WebSocket"
[Worker]: ./api/class-worker.md "Worker"
[Element]: https://developer.mozilla.org/en-US/docs/Web/API/element "Element"
[Evaluation Argument]: ./core-concepts.md#evaluationargument "Evaluation Argument"
[iterator]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols "Iterator"
[origin]: https://developer.mozilla.org/en-US/docs/Glossary/Origin "Origin"
[selector]: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors "selector"
[Serializable]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description "Serializable"
[UIEvent.detail]: https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail "UIEvent.detail"
[UnixTime]: https://en.wikipedia.org/wiki/Unix_time "Unix Time"
[xpath]: https://developer.mozilla.org/en-US/docs/Web/XPath "xpath"

[Any]: https://docs.python.org/3/library/typing.html#typing.Any "Any"
[bool]: https://docs.python.org/3/library/stdtypes.html "bool"
[Callable]: https://docs.python.org/3/library/typing.html#typing.Callable "Callable"
[Dict]: https://docs.python.org/3/library/typing.html#typing.Dict "Dict"
[float]: https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex "float"
[int]: https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex "int"
[List]: https://docs.python.org/3/library/typing.html#typing.List "List"
[NoneType]: https://docs.python.org/3/library/constants.html#None "None"
[pathlib.Path]: https://realpython.com/python-pathlib/ "pathlib.Path"
[str]: https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str "str"
[Union]: https://docs.python.org/3/library/typing.html#typing.Union "Union"