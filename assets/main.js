// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"eTlFW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _stimulus = require("@hotwired/stimulus");
var _helloController = require("./controllers/hello_controller");
var _helloControllerDefault = parcelHelpers.interopDefault(_helloController);
var _contactController = require("./controllers/contact_controller");
var _contactControllerDefault = parcelHelpers.interopDefault(_contactController);
var _authorizeController = require("./controllers/authorize_controller");
var _authorizeControllerDefault = parcelHelpers.interopDefault(_authorizeController);
var _nukeController = require("./controllers/nuke_controller");
var _nukeControllerDefault = parcelHelpers.interopDefault(_nukeController);
window.Stimulus = (0, _stimulus.Application).start();
Stimulus.register("hello", (0, _helloControllerDefault.default));
Stimulus.register("contact", (0, _contactControllerDefault.default));
Stimulus.register("authorize", (0, _authorizeControllerDefault.default));
Stimulus.register("nuke", (0, _nukeControllerDefault.default));

},{"@hotwired/stimulus":"byyBs","./controllers/hello_controller":"2nolf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./controllers/contact_controller":"l9fxb","./controllers/authorize_controller":"7XUsm","./controllers/nuke_controller":"8aGBT"}],"byyBs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Application", ()=>Application);
parcelHelpers.export(exports, "AttributeObserver", ()=>AttributeObserver);
parcelHelpers.export(exports, "Context", ()=>Context);
parcelHelpers.export(exports, "Controller", ()=>Controller);
parcelHelpers.export(exports, "ElementObserver", ()=>ElementObserver);
parcelHelpers.export(exports, "IndexedMultimap", ()=>IndexedMultimap);
parcelHelpers.export(exports, "Multimap", ()=>Multimap);
parcelHelpers.export(exports, "StringMapObserver", ()=>StringMapObserver);
parcelHelpers.export(exports, "TokenListObserver", ()=>TokenListObserver);
parcelHelpers.export(exports, "ValueListObserver", ()=>ValueListObserver);
parcelHelpers.export(exports, "add", ()=>add);
parcelHelpers.export(exports, "defaultSchema", ()=>defaultSchema);
parcelHelpers.export(exports, "del", ()=>del);
parcelHelpers.export(exports, "fetch", ()=>fetch);
parcelHelpers.export(exports, "prune", ()=>prune);
/*
Stimulus 3.1.0
Copyright © 2022 Basecamp, LLC
 */ class EventListener {
    constructor(eventTarget, eventName, eventOptions){
        this.eventTarget = eventTarget;
        this.eventName = eventName;
        this.eventOptions = eventOptions;
        this.unorderedBindings = new Set();
    }
    connect() {
        this.eventTarget.addEventListener(this.eventName, this, this.eventOptions);
    }
    disconnect() {
        this.eventTarget.removeEventListener(this.eventName, this, this.eventOptions);
    }
    bindingConnected(binding) {
        this.unorderedBindings.add(binding);
    }
    bindingDisconnected(binding) {
        this.unorderedBindings.delete(binding);
    }
    handleEvent(event) {
        const extendedEvent = extendEvent(event);
        for (const binding of this.bindings){
            if (extendedEvent.immediatePropagationStopped) break;
            else binding.handleEvent(extendedEvent);
        }
    }
    get bindings() {
        return Array.from(this.unorderedBindings).sort((left, right)=>{
            const leftIndex = left.index, rightIndex = right.index;
            return leftIndex < rightIndex ? -1 : leftIndex > rightIndex ? 1 : 0;
        });
    }
}
function extendEvent(event) {
    if ("immediatePropagationStopped" in event) return event;
    else {
        const { stopImmediatePropagation  } = event;
        return Object.assign(event, {
            immediatePropagationStopped: false,
            stopImmediatePropagation () {
                this.immediatePropagationStopped = true;
                stopImmediatePropagation.call(this);
            }
        });
    }
}
class Dispatcher {
    constructor(application){
        this.application = application;
        this.eventListenerMaps = new Map;
        this.started = false;
    }
    start() {
        if (!this.started) {
            this.started = true;
            this.eventListeners.forEach((eventListener)=>eventListener.connect());
        }
    }
    stop() {
        if (this.started) {
            this.started = false;
            this.eventListeners.forEach((eventListener)=>eventListener.disconnect());
        }
    }
    get eventListeners() {
        return Array.from(this.eventListenerMaps.values()).reduce((listeners, map)=>listeners.concat(Array.from(map.values())), []);
    }
    bindingConnected(binding) {
        this.fetchEventListenerForBinding(binding).bindingConnected(binding);
    }
    bindingDisconnected(binding) {
        this.fetchEventListenerForBinding(binding).bindingDisconnected(binding);
    }
    handleError(error, message, detail = {}) {
        this.application.handleError(error, `Error ${message}`, detail);
    }
    fetchEventListenerForBinding(binding) {
        const { eventTarget , eventName , eventOptions  } = binding;
        return this.fetchEventListener(eventTarget, eventName, eventOptions);
    }
    fetchEventListener(eventTarget, eventName, eventOptions) {
        const eventListenerMap = this.fetchEventListenerMapForEventTarget(eventTarget);
        const cacheKey = this.cacheKey(eventName, eventOptions);
        let eventListener = eventListenerMap.get(cacheKey);
        if (!eventListener) {
            eventListener = this.createEventListener(eventTarget, eventName, eventOptions);
            eventListenerMap.set(cacheKey, eventListener);
        }
        return eventListener;
    }
    createEventListener(eventTarget, eventName, eventOptions) {
        const eventListener = new EventListener(eventTarget, eventName, eventOptions);
        if (this.started) eventListener.connect();
        return eventListener;
    }
    fetchEventListenerMapForEventTarget(eventTarget) {
        let eventListenerMap = this.eventListenerMaps.get(eventTarget);
        if (!eventListenerMap) {
            eventListenerMap = new Map;
            this.eventListenerMaps.set(eventTarget, eventListenerMap);
        }
        return eventListenerMap;
    }
    cacheKey(eventName, eventOptions) {
        const parts = [
            eventName
        ];
        Object.keys(eventOptions).sort().forEach((key)=>{
            parts.push(`${eventOptions[key] ? "" : "!"}${key}`);
        });
        return parts.join(":");
    }
}
const descriptorPattern = /^((.+?)(@(window|document))?->)?(.+?)(#([^:]+?))(:(.+))?$/;
function parseActionDescriptorString(descriptorString) {
    const source = descriptorString.trim();
    const matches = source.match(descriptorPattern) || [];
    return {
        eventTarget: parseEventTarget(matches[4]),
        eventName: matches[2],
        eventOptions: matches[9] ? parseEventOptions(matches[9]) : {},
        identifier: matches[5],
        methodName: matches[7]
    };
}
function parseEventTarget(eventTargetName) {
    if (eventTargetName == "window") return window;
    else if (eventTargetName == "document") return document;
}
function parseEventOptions(eventOptions) {
    return eventOptions.split(":").reduce((options, token)=>Object.assign(options, {
            [token.replace(/^!/, "")]: !/^!/.test(token)
        }), {});
}
function stringifyEventTarget(eventTarget) {
    if (eventTarget == window) return "window";
    else if (eventTarget == document) return "document";
}
function camelize(value) {
    return value.replace(/(?:[_-])([a-z0-9])/g, (_, char)=>char.toUpperCase());
}
function capitalize(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
}
function dasherize(value) {
    return value.replace(/([A-Z])/g, (_, char)=>`-${char.toLowerCase()}`);
}
function tokenize(value) {
    return value.match(/[^\s]+/g) || [];
}
class Action {
    constructor(element, index, descriptor){
        this.element = element;
        this.index = index;
        this.eventTarget = descriptor.eventTarget || element;
        this.eventName = descriptor.eventName || getDefaultEventNameForElement(element) || error("missing event name");
        this.eventOptions = descriptor.eventOptions || {};
        this.identifier = descriptor.identifier || error("missing identifier");
        this.methodName = descriptor.methodName || error("missing method name");
    }
    static forToken(token) {
        return new this(token.element, token.index, parseActionDescriptorString(token.content));
    }
    toString() {
        const eventNameSuffix = this.eventTargetName ? `@${this.eventTargetName}` : "";
        return `${this.eventName}${eventNameSuffix}->${this.identifier}#${this.methodName}`;
    }
    get params() {
        const params = {};
        const pattern = new RegExp(`^data-${this.identifier}-(.+)-param$`);
        for (const { name , value  } of Array.from(this.element.attributes)){
            const match = name.match(pattern);
            const key = match && match[1];
            if (key) params[camelize(key)] = typecast(value);
        }
        return params;
    }
    get eventTargetName() {
        return stringifyEventTarget(this.eventTarget);
    }
}
const defaultEventNames = {
    "a": (e)=>"click",
    "button": (e)=>"click",
    "form": (e)=>"submit",
    "details": (e)=>"toggle",
    "input": (e)=>e.getAttribute("type") == "submit" ? "click" : "input",
    "select": (e)=>"change",
    "textarea": (e)=>"input"
};
function getDefaultEventNameForElement(element) {
    const tagName = element.tagName.toLowerCase();
    if (tagName in defaultEventNames) return defaultEventNames[tagName](element);
}
function error(message) {
    throw new Error(message);
}
function typecast(value) {
    try {
        return JSON.parse(value);
    } catch (o_O) {
        return value;
    }
}
class Binding {
    constructor(context, action){
        this.context = context;
        this.action = action;
    }
    get index() {
        return this.action.index;
    }
    get eventTarget() {
        return this.action.eventTarget;
    }
    get eventOptions() {
        return this.action.eventOptions;
    }
    get identifier() {
        return this.context.identifier;
    }
    handleEvent(event) {
        if (this.willBeInvokedByEvent(event) && this.shouldBeInvokedPerSelf(event)) {
            this.processStopPropagation(event);
            this.processPreventDefault(event);
            this.invokeWithEvent(event);
        }
    }
    get eventName() {
        return this.action.eventName;
    }
    get method() {
        const method = this.controller[this.methodName];
        if (typeof method == "function") return method;
        throw new Error(`Action "${this.action}" references undefined method "${this.methodName}"`);
    }
    processStopPropagation(event) {
        if (this.eventOptions.stop) event.stopPropagation();
    }
    processPreventDefault(event) {
        if (this.eventOptions.prevent) event.preventDefault();
    }
    invokeWithEvent(event) {
        const { target , currentTarget  } = event;
        try {
            const { params  } = this.action;
            const actionEvent = Object.assign(event, {
                params
            });
            this.method.call(this.controller, actionEvent);
            this.context.logDebugActivity(this.methodName, {
                event,
                target,
                currentTarget,
                action: this.methodName
            });
        } catch (error) {
            const { identifier , controller , element , index  } = this;
            const detail = {
                identifier,
                controller,
                element,
                index,
                event
            };
            this.context.handleError(error, `invoking action "${this.action}"`, detail);
        }
    }
    shouldBeInvokedPerSelf(event) {
        if (this.action.eventOptions.self === true) return this.action.element === event.target;
        else return true;
    }
    willBeInvokedByEvent(event) {
        const eventTarget = event.target;
        if (this.element === eventTarget) return true;
        else if (eventTarget instanceof Element && this.element.contains(eventTarget)) return this.scope.containsElement(eventTarget);
        else return this.scope.containsElement(this.action.element);
    }
    get controller() {
        return this.context.controller;
    }
    get methodName() {
        return this.action.methodName;
    }
    get element() {
        return this.scope.element;
    }
    get scope() {
        return this.context.scope;
    }
}
class ElementObserver {
    constructor(element, delegate){
        this.mutationObserverInit = {
            attributes: true,
            childList: true,
            subtree: true
        };
        this.element = element;
        this.started = false;
        this.delegate = delegate;
        this.elements = new Set;
        this.mutationObserver = new MutationObserver((mutations)=>this.processMutations(mutations));
    }
    start() {
        if (!this.started) {
            this.started = true;
            this.mutationObserver.observe(this.element, this.mutationObserverInit);
            this.refresh();
        }
    }
    pause(callback) {
        if (this.started) {
            this.mutationObserver.disconnect();
            this.started = false;
        }
        callback();
        if (!this.started) {
            this.mutationObserver.observe(this.element, this.mutationObserverInit);
            this.started = true;
        }
    }
    stop() {
        if (this.started) {
            this.mutationObserver.takeRecords();
            this.mutationObserver.disconnect();
            this.started = false;
        }
    }
    refresh() {
        if (this.started) {
            const matches = new Set(this.matchElementsInTree());
            for (const element of Array.from(this.elements))if (!matches.has(element)) this.removeElement(element);
            for (const element1 of Array.from(matches))this.addElement(element1);
        }
    }
    processMutations(mutations) {
        if (this.started) for (const mutation of mutations)this.processMutation(mutation);
    }
    processMutation(mutation) {
        if (mutation.type == "attributes") this.processAttributeChange(mutation.target, mutation.attributeName);
        else if (mutation.type == "childList") {
            this.processRemovedNodes(mutation.removedNodes);
            this.processAddedNodes(mutation.addedNodes);
        }
    }
    processAttributeChange(node, attributeName) {
        const element = node;
        if (this.elements.has(element)) {
            if (this.delegate.elementAttributeChanged && this.matchElement(element)) this.delegate.elementAttributeChanged(element, attributeName);
            else this.removeElement(element);
        } else if (this.matchElement(element)) this.addElement(element);
    }
    processRemovedNodes(nodes) {
        for (const node of Array.from(nodes)){
            const element = this.elementFromNode(node);
            if (element) this.processTree(element, this.removeElement);
        }
    }
    processAddedNodes(nodes) {
        for (const node of Array.from(nodes)){
            const element = this.elementFromNode(node);
            if (element && this.elementIsActive(element)) this.processTree(element, this.addElement);
        }
    }
    matchElement(element) {
        return this.delegate.matchElement(element);
    }
    matchElementsInTree(tree = this.element) {
        return this.delegate.matchElementsInTree(tree);
    }
    processTree(tree, processor) {
        for (const element of this.matchElementsInTree(tree))processor.call(this, element);
    }
    elementFromNode(node) {
        if (node.nodeType == Node.ELEMENT_NODE) return node;
    }
    elementIsActive(element) {
        if (element.isConnected != this.element.isConnected) return false;
        else return this.element.contains(element);
    }
    addElement(element) {
        if (!this.elements.has(element)) {
            if (this.elementIsActive(element)) {
                this.elements.add(element);
                if (this.delegate.elementMatched) this.delegate.elementMatched(element);
            }
        }
    }
    removeElement(element) {
        if (this.elements.has(element)) {
            this.elements.delete(element);
            if (this.delegate.elementUnmatched) this.delegate.elementUnmatched(element);
        }
    }
}
class AttributeObserver {
    constructor(element, attributeName, delegate){
        this.attributeName = attributeName;
        this.delegate = delegate;
        this.elementObserver = new ElementObserver(element, this);
    }
    get element() {
        return this.elementObserver.element;
    }
    get selector() {
        return `[${this.attributeName}]`;
    }
    start() {
        this.elementObserver.start();
    }
    pause(callback) {
        this.elementObserver.pause(callback);
    }
    stop() {
        this.elementObserver.stop();
    }
    refresh() {
        this.elementObserver.refresh();
    }
    get started() {
        return this.elementObserver.started;
    }
    matchElement(element) {
        return element.hasAttribute(this.attributeName);
    }
    matchElementsInTree(tree) {
        const match = this.matchElement(tree) ? [
            tree
        ] : [];
        const matches = Array.from(tree.querySelectorAll(this.selector));
        return match.concat(matches);
    }
    elementMatched(element) {
        if (this.delegate.elementMatchedAttribute) this.delegate.elementMatchedAttribute(element, this.attributeName);
    }
    elementUnmatched(element) {
        if (this.delegate.elementUnmatchedAttribute) this.delegate.elementUnmatchedAttribute(element, this.attributeName);
    }
    elementAttributeChanged(element, attributeName) {
        if (this.delegate.elementAttributeValueChanged && this.attributeName == attributeName) this.delegate.elementAttributeValueChanged(element, attributeName);
    }
}
class StringMapObserver {
    constructor(element, delegate){
        this.element = element;
        this.delegate = delegate;
        this.started = false;
        this.stringMap = new Map;
        this.mutationObserver = new MutationObserver((mutations)=>this.processMutations(mutations));
    }
    start() {
        if (!this.started) {
            this.started = true;
            this.mutationObserver.observe(this.element, {
                attributes: true,
                attributeOldValue: true
            });
            this.refresh();
        }
    }
    stop() {
        if (this.started) {
            this.mutationObserver.takeRecords();
            this.mutationObserver.disconnect();
            this.started = false;
        }
    }
    refresh() {
        if (this.started) for (const attributeName of this.knownAttributeNames)this.refreshAttribute(attributeName, null);
    }
    processMutations(mutations) {
        if (this.started) for (const mutation of mutations)this.processMutation(mutation);
    }
    processMutation(mutation) {
        const attributeName = mutation.attributeName;
        if (attributeName) this.refreshAttribute(attributeName, mutation.oldValue);
    }
    refreshAttribute(attributeName, oldValue) {
        const key = this.delegate.getStringMapKeyForAttribute(attributeName);
        if (key != null) {
            if (!this.stringMap.has(attributeName)) this.stringMapKeyAdded(key, attributeName);
            const value = this.element.getAttribute(attributeName);
            if (this.stringMap.get(attributeName) != value) this.stringMapValueChanged(value, key, oldValue);
            if (value == null) {
                const oldValue1 = this.stringMap.get(attributeName);
                this.stringMap.delete(attributeName);
                if (oldValue1) this.stringMapKeyRemoved(key, attributeName, oldValue1);
            } else this.stringMap.set(attributeName, value);
        }
    }
    stringMapKeyAdded(key, attributeName) {
        if (this.delegate.stringMapKeyAdded) this.delegate.stringMapKeyAdded(key, attributeName);
    }
    stringMapValueChanged(value, key, oldValue) {
        if (this.delegate.stringMapValueChanged) this.delegate.stringMapValueChanged(value, key, oldValue);
    }
    stringMapKeyRemoved(key, attributeName, oldValue) {
        if (this.delegate.stringMapKeyRemoved) this.delegate.stringMapKeyRemoved(key, attributeName, oldValue);
    }
    get knownAttributeNames() {
        return Array.from(new Set(this.currentAttributeNames.concat(this.recordedAttributeNames)));
    }
    get currentAttributeNames() {
        return Array.from(this.element.attributes).map((attribute)=>attribute.name);
    }
    get recordedAttributeNames() {
        return Array.from(this.stringMap.keys());
    }
}
function add(map, key, value) {
    fetch(map, key).add(value);
}
function del(map, key, value) {
    fetch(map, key).delete(value);
    prune(map, key);
}
function fetch(map, key) {
    let values = map.get(key);
    if (!values) {
        values = new Set();
        map.set(key, values);
    }
    return values;
}
function prune(map, key) {
    const values = map.get(key);
    if (values != null && values.size == 0) map.delete(key);
}
class Multimap {
    constructor(){
        this.valuesByKey = new Map();
    }
    get keys() {
        return Array.from(this.valuesByKey.keys());
    }
    get values() {
        const sets = Array.from(this.valuesByKey.values());
        return sets.reduce((values, set)=>values.concat(Array.from(set)), []);
    }
    get size() {
        const sets = Array.from(this.valuesByKey.values());
        return sets.reduce((size, set)=>size + set.size, 0);
    }
    add(key, value) {
        add(this.valuesByKey, key, value);
    }
    delete(key, value) {
        del(this.valuesByKey, key, value);
    }
    has(key, value) {
        const values = this.valuesByKey.get(key);
        return values != null && values.has(value);
    }
    hasKey(key) {
        return this.valuesByKey.has(key);
    }
    hasValue(value) {
        const sets = Array.from(this.valuesByKey.values());
        return sets.some((set)=>set.has(value));
    }
    getValuesForKey(key) {
        const values = this.valuesByKey.get(key);
        return values ? Array.from(values) : [];
    }
    getKeysForValue(value) {
        return Array.from(this.valuesByKey).filter(([key, values])=>values.has(value)).map(([key, values])=>key);
    }
}
class IndexedMultimap extends Multimap {
    constructor(){
        super();
        this.keysByValue = new Map;
    }
    get values() {
        return Array.from(this.keysByValue.keys());
    }
    add(key, value) {
        super.add(key, value);
        add(this.keysByValue, value, key);
    }
    delete(key, value) {
        super.delete(key, value);
        del(this.keysByValue, value, key);
    }
    hasValue(value) {
        return this.keysByValue.has(value);
    }
    getKeysForValue(value) {
        const set = this.keysByValue.get(value);
        return set ? Array.from(set) : [];
    }
}
class TokenListObserver {
    constructor(element, attributeName, delegate){
        this.attributeObserver = new AttributeObserver(element, attributeName, this);
        this.delegate = delegate;
        this.tokensByElement = new Multimap;
    }
    get started() {
        return this.attributeObserver.started;
    }
    start() {
        this.attributeObserver.start();
    }
    pause(callback) {
        this.attributeObserver.pause(callback);
    }
    stop() {
        this.attributeObserver.stop();
    }
    refresh() {
        this.attributeObserver.refresh();
    }
    get element() {
        return this.attributeObserver.element;
    }
    get attributeName() {
        return this.attributeObserver.attributeName;
    }
    elementMatchedAttribute(element) {
        this.tokensMatched(this.readTokensForElement(element));
    }
    elementAttributeValueChanged(element) {
        const [unmatchedTokens, matchedTokens] = this.refreshTokensForElement(element);
        this.tokensUnmatched(unmatchedTokens);
        this.tokensMatched(matchedTokens);
    }
    elementUnmatchedAttribute(element) {
        this.tokensUnmatched(this.tokensByElement.getValuesForKey(element));
    }
    tokensMatched(tokens) {
        tokens.forEach((token)=>this.tokenMatched(token));
    }
    tokensUnmatched(tokens) {
        tokens.forEach((token)=>this.tokenUnmatched(token));
    }
    tokenMatched(token) {
        this.delegate.tokenMatched(token);
        this.tokensByElement.add(token.element, token);
    }
    tokenUnmatched(token) {
        this.delegate.tokenUnmatched(token);
        this.tokensByElement.delete(token.element, token);
    }
    refreshTokensForElement(element) {
        const previousTokens = this.tokensByElement.getValuesForKey(element);
        const currentTokens = this.readTokensForElement(element);
        const firstDifferingIndex = zip(previousTokens, currentTokens).findIndex(([previousToken, currentToken])=>!tokensAreEqual(previousToken, currentToken));
        if (firstDifferingIndex == -1) return [
            [],
            []
        ];
        else return [
            previousTokens.slice(firstDifferingIndex),
            currentTokens.slice(firstDifferingIndex)
        ];
    }
    readTokensForElement(element) {
        const attributeName = this.attributeName;
        const tokenString = element.getAttribute(attributeName) || "";
        return parseTokenString(tokenString, element, attributeName);
    }
}
function parseTokenString(tokenString, element, attributeName) {
    return tokenString.trim().split(/\s+/).filter((content)=>content.length).map((content, index)=>({
            element,
            attributeName,
            content,
            index
        }));
}
function zip(left, right) {
    const length = Math.max(left.length, right.length);
    return Array.from({
        length
    }, (_, index)=>[
            left[index],
            right[index]
        ]);
}
function tokensAreEqual(left, right) {
    return left && right && left.index == right.index && left.content == right.content;
}
class ValueListObserver {
    constructor(element, attributeName, delegate){
        this.tokenListObserver = new TokenListObserver(element, attributeName, this);
        this.delegate = delegate;
        this.parseResultsByToken = new WeakMap;
        this.valuesByTokenByElement = new WeakMap;
    }
    get started() {
        return this.tokenListObserver.started;
    }
    start() {
        this.tokenListObserver.start();
    }
    stop() {
        this.tokenListObserver.stop();
    }
    refresh() {
        this.tokenListObserver.refresh();
    }
    get element() {
        return this.tokenListObserver.element;
    }
    get attributeName() {
        return this.tokenListObserver.attributeName;
    }
    tokenMatched(token) {
        const { element  } = token;
        const { value  } = this.fetchParseResultForToken(token);
        if (value) {
            this.fetchValuesByTokenForElement(element).set(token, value);
            this.delegate.elementMatchedValue(element, value);
        }
    }
    tokenUnmatched(token) {
        const { element  } = token;
        const { value  } = this.fetchParseResultForToken(token);
        if (value) {
            this.fetchValuesByTokenForElement(element).delete(token);
            this.delegate.elementUnmatchedValue(element, value);
        }
    }
    fetchParseResultForToken(token) {
        let parseResult = this.parseResultsByToken.get(token);
        if (!parseResult) {
            parseResult = this.parseToken(token);
            this.parseResultsByToken.set(token, parseResult);
        }
        return parseResult;
    }
    fetchValuesByTokenForElement(element) {
        let valuesByToken = this.valuesByTokenByElement.get(element);
        if (!valuesByToken) {
            valuesByToken = new Map;
            this.valuesByTokenByElement.set(element, valuesByToken);
        }
        return valuesByToken;
    }
    parseToken(token) {
        try {
            const value = this.delegate.parseValueForToken(token);
            return {
                value
            };
        } catch (error) {
            return {
                error
            };
        }
    }
}
class BindingObserver {
    constructor(context, delegate){
        this.context = context;
        this.delegate = delegate;
        this.bindingsByAction = new Map;
    }
    start() {
        if (!this.valueListObserver) {
            this.valueListObserver = new ValueListObserver(this.element, this.actionAttribute, this);
            this.valueListObserver.start();
        }
    }
    stop() {
        if (this.valueListObserver) {
            this.valueListObserver.stop();
            delete this.valueListObserver;
            this.disconnectAllActions();
        }
    }
    get element() {
        return this.context.element;
    }
    get identifier() {
        return this.context.identifier;
    }
    get actionAttribute() {
        return this.schema.actionAttribute;
    }
    get schema() {
        return this.context.schema;
    }
    get bindings() {
        return Array.from(this.bindingsByAction.values());
    }
    connectAction(action) {
        const binding = new Binding(this.context, action);
        this.bindingsByAction.set(action, binding);
        this.delegate.bindingConnected(binding);
    }
    disconnectAction(action) {
        const binding = this.bindingsByAction.get(action);
        if (binding) {
            this.bindingsByAction.delete(action);
            this.delegate.bindingDisconnected(binding);
        }
    }
    disconnectAllActions() {
        this.bindings.forEach((binding)=>this.delegate.bindingDisconnected(binding));
        this.bindingsByAction.clear();
    }
    parseValueForToken(token) {
        const action = Action.forToken(token);
        if (action.identifier == this.identifier) return action;
    }
    elementMatchedValue(element, action) {
        this.connectAction(action);
    }
    elementUnmatchedValue(element, action) {
        this.disconnectAction(action);
    }
}
class ValueObserver {
    constructor(context, receiver){
        this.context = context;
        this.receiver = receiver;
        this.stringMapObserver = new StringMapObserver(this.element, this);
        this.valueDescriptorMap = this.controller.valueDescriptorMap;
    }
    start() {
        this.stringMapObserver.start();
        this.invokeChangedCallbacksForDefaultValues();
    }
    stop() {
        this.stringMapObserver.stop();
    }
    get element() {
        return this.context.element;
    }
    get controller() {
        return this.context.controller;
    }
    getStringMapKeyForAttribute(attributeName) {
        if (attributeName in this.valueDescriptorMap) return this.valueDescriptorMap[attributeName].name;
    }
    stringMapKeyAdded(key, attributeName) {
        const descriptor = this.valueDescriptorMap[attributeName];
        if (!this.hasValue(key)) this.invokeChangedCallback(key, descriptor.writer(this.receiver[key]), descriptor.writer(descriptor.defaultValue));
    }
    stringMapValueChanged(value, name, oldValue) {
        const descriptor = this.valueDescriptorNameMap[name];
        if (value === null) return;
        if (oldValue === null) oldValue = descriptor.writer(descriptor.defaultValue);
        this.invokeChangedCallback(name, value, oldValue);
    }
    stringMapKeyRemoved(key, attributeName, oldValue) {
        const descriptor = this.valueDescriptorNameMap[key];
        if (this.hasValue(key)) this.invokeChangedCallback(key, descriptor.writer(this.receiver[key]), oldValue);
        else this.invokeChangedCallback(key, descriptor.writer(descriptor.defaultValue), oldValue);
    }
    invokeChangedCallbacksForDefaultValues() {
        for (const { key , name , defaultValue , writer  } of this.valueDescriptors)if (defaultValue != undefined && !this.controller.data.has(key)) this.invokeChangedCallback(name, writer(defaultValue), undefined);
    }
    invokeChangedCallback(name, rawValue, rawOldValue) {
        const changedMethodName = `${name}Changed`;
        const changedMethod = this.receiver[changedMethodName];
        if (typeof changedMethod == "function") {
            const descriptor = this.valueDescriptorNameMap[name];
            try {
                const value = descriptor.reader(rawValue);
                let oldValue = rawOldValue;
                if (rawOldValue) oldValue = descriptor.reader(rawOldValue);
                changedMethod.call(this.receiver, value, oldValue);
            } catch (error) {
                if (!(error instanceof TypeError)) throw error;
                throw new TypeError(`Stimulus Value "${this.context.identifier}.${descriptor.name}" - ${error.message}`);
            }
        }
    }
    get valueDescriptors() {
        const { valueDescriptorMap  } = this;
        return Object.keys(valueDescriptorMap).map((key)=>valueDescriptorMap[key]);
    }
    get valueDescriptorNameMap() {
        const descriptors = {};
        Object.keys(this.valueDescriptorMap).forEach((key)=>{
            const descriptor = this.valueDescriptorMap[key];
            descriptors[descriptor.name] = descriptor;
        });
        return descriptors;
    }
    hasValue(attributeName) {
        const descriptor = this.valueDescriptorNameMap[attributeName];
        const hasMethodName = `has${capitalize(descriptor.name)}`;
        return this.receiver[hasMethodName];
    }
}
class TargetObserver {
    constructor(context, delegate){
        this.context = context;
        this.delegate = delegate;
        this.targetsByName = new Multimap;
    }
    start() {
        if (!this.tokenListObserver) {
            this.tokenListObserver = new TokenListObserver(this.element, this.attributeName, this);
            this.tokenListObserver.start();
        }
    }
    stop() {
        if (this.tokenListObserver) {
            this.disconnectAllTargets();
            this.tokenListObserver.stop();
            delete this.tokenListObserver;
        }
    }
    tokenMatched({ element , content: name  }) {
        if (this.scope.containsElement(element)) this.connectTarget(element, name);
    }
    tokenUnmatched({ element , content: name  }) {
        this.disconnectTarget(element, name);
    }
    connectTarget(element, name) {
        var _a;
        if (!this.targetsByName.has(name, element)) {
            this.targetsByName.add(name, element);
            (_a = this.tokenListObserver) === null || _a === void 0 || _a.pause(()=>this.delegate.targetConnected(element, name));
        }
    }
    disconnectTarget(element, name) {
        var _a;
        if (this.targetsByName.has(name, element)) {
            this.targetsByName.delete(name, element);
            (_a = this.tokenListObserver) === null || _a === void 0 || _a.pause(()=>this.delegate.targetDisconnected(element, name));
        }
    }
    disconnectAllTargets() {
        for (const name of this.targetsByName.keys)for (const element of this.targetsByName.getValuesForKey(name))this.disconnectTarget(element, name);
    }
    get attributeName() {
        return `data-${this.context.identifier}-target`;
    }
    get element() {
        return this.context.element;
    }
    get scope() {
        return this.context.scope;
    }
}
class Context {
    constructor(module, scope){
        this.logDebugActivity = (functionName, detail = {})=>{
            const { identifier , controller , element  } = this;
            detail = Object.assign({
                identifier,
                controller,
                element
            }, detail);
            this.application.logDebugActivity(this.identifier, functionName, detail);
        };
        this.module = module;
        this.scope = scope;
        this.controller = new module.controllerConstructor(this);
        this.bindingObserver = new BindingObserver(this, this.dispatcher);
        this.valueObserver = new ValueObserver(this, this.controller);
        this.targetObserver = new TargetObserver(this, this);
        try {
            this.controller.initialize();
            this.logDebugActivity("initialize");
        } catch (error) {
            this.handleError(error, "initializing controller");
        }
    }
    connect() {
        this.bindingObserver.start();
        this.valueObserver.start();
        this.targetObserver.start();
        try {
            this.controller.connect();
            this.logDebugActivity("connect");
        } catch (error) {
            this.handleError(error, "connecting controller");
        }
    }
    disconnect() {
        try {
            this.controller.disconnect();
            this.logDebugActivity("disconnect");
        } catch (error) {
            this.handleError(error, "disconnecting controller");
        }
        this.targetObserver.stop();
        this.valueObserver.stop();
        this.bindingObserver.stop();
    }
    get application() {
        return this.module.application;
    }
    get identifier() {
        return this.module.identifier;
    }
    get schema() {
        return this.application.schema;
    }
    get dispatcher() {
        return this.application.dispatcher;
    }
    get element() {
        return this.scope.element;
    }
    get parentElement() {
        return this.element.parentElement;
    }
    handleError(error, message, detail = {}) {
        const { identifier , controller , element  } = this;
        detail = Object.assign({
            identifier,
            controller,
            element
        }, detail);
        this.application.handleError(error, `Error ${message}`, detail);
    }
    targetConnected(element, name) {
        this.invokeControllerMethod(`${name}TargetConnected`, element);
    }
    targetDisconnected(element, name) {
        this.invokeControllerMethod(`${name}TargetDisconnected`, element);
    }
    invokeControllerMethod(methodName, ...args) {
        const controller = this.controller;
        if (typeof controller[methodName] == "function") controller[methodName](...args);
    }
}
function readInheritableStaticArrayValues(constructor, propertyName) {
    const ancestors = getAncestorsForConstructor(constructor);
    return Array.from(ancestors.reduce((values, constructor)=>{
        getOwnStaticArrayValues(constructor, propertyName).forEach((name)=>values.add(name));
        return values;
    }, new Set));
}
function readInheritableStaticObjectPairs(constructor, propertyName) {
    const ancestors = getAncestorsForConstructor(constructor);
    return ancestors.reduce((pairs, constructor)=>{
        pairs.push(...getOwnStaticObjectPairs(constructor, propertyName));
        return pairs;
    }, []);
}
function getAncestorsForConstructor(constructor) {
    const ancestors = [];
    while(constructor){
        ancestors.push(constructor);
        constructor = Object.getPrototypeOf(constructor);
    }
    return ancestors.reverse();
}
function getOwnStaticArrayValues(constructor, propertyName) {
    const definition = constructor[propertyName];
    return Array.isArray(definition) ? definition : [];
}
function getOwnStaticObjectPairs(constructor, propertyName) {
    const definition = constructor[propertyName];
    return definition ? Object.keys(definition).map((key)=>[
            key,
            definition[key]
        ]) : [];
}
function bless(constructor) {
    return shadow(constructor, getBlessedProperties(constructor));
}
function shadow(constructor, properties) {
    const shadowConstructor = extend(constructor);
    const shadowProperties = getShadowProperties(constructor.prototype, properties);
    Object.defineProperties(shadowConstructor.prototype, shadowProperties);
    return shadowConstructor;
}
function getBlessedProperties(constructor) {
    const blessings = readInheritableStaticArrayValues(constructor, "blessings");
    return blessings.reduce((blessedProperties, blessing)=>{
        const properties = blessing(constructor);
        for(const key in properties){
            const descriptor = blessedProperties[key] || {};
            blessedProperties[key] = Object.assign(descriptor, properties[key]);
        }
        return blessedProperties;
    }, {});
}
function getShadowProperties(prototype, properties) {
    return getOwnKeys(properties).reduce((shadowProperties, key)=>{
        const descriptor = getShadowedDescriptor(prototype, properties, key);
        if (descriptor) Object.assign(shadowProperties, {
            [key]: descriptor
        });
        return shadowProperties;
    }, {});
}
function getShadowedDescriptor(prototype, properties, key) {
    const shadowingDescriptor = Object.getOwnPropertyDescriptor(prototype, key);
    const shadowedByValue = shadowingDescriptor && "value" in shadowingDescriptor;
    if (!shadowedByValue) {
        const descriptor = Object.getOwnPropertyDescriptor(properties, key).value;
        if (shadowingDescriptor) {
            descriptor.get = shadowingDescriptor.get || descriptor.get;
            descriptor.set = shadowingDescriptor.set || descriptor.set;
        }
        return descriptor;
    }
}
const getOwnKeys = (()=>{
    if (typeof Object.getOwnPropertySymbols == "function") return (object)=>[
            ...Object.getOwnPropertyNames(object),
            ...Object.getOwnPropertySymbols(object)
        ];
    else return Object.getOwnPropertyNames;
})();
const extend = (()=>{
    function extendWithReflect(constructor) {
        function extended() {
            return Reflect.construct(constructor, arguments, new.target);
        }
        extended.prototype = Object.create(constructor.prototype, {
            constructor: {
                value: extended
            }
        });
        Reflect.setPrototypeOf(extended, constructor);
        return extended;
    }
    function testReflectExtension() {
        const a = function() {
            this.a.call(this);
        };
        const b = extendWithReflect(a);
        b.prototype.a = function() {};
        return new b;
    }
    try {
        testReflectExtension();
        return extendWithReflect;
    } catch (error) {
        return (constructor)=>class extended extends constructor {
            };
    }
})();
function blessDefinition(definition) {
    return {
        identifier: definition.identifier,
        controllerConstructor: bless(definition.controllerConstructor)
    };
}
class Module {
    constructor(application, definition){
        this.application = application;
        this.definition = blessDefinition(definition);
        this.contextsByScope = new WeakMap;
        this.connectedContexts = new Set;
    }
    get identifier() {
        return this.definition.identifier;
    }
    get controllerConstructor() {
        return this.definition.controllerConstructor;
    }
    get contexts() {
        return Array.from(this.connectedContexts);
    }
    connectContextForScope(scope) {
        const context = this.fetchContextForScope(scope);
        this.connectedContexts.add(context);
        context.connect();
    }
    disconnectContextForScope(scope) {
        const context = this.contextsByScope.get(scope);
        if (context) {
            this.connectedContexts.delete(context);
            context.disconnect();
        }
    }
    fetchContextForScope(scope) {
        let context = this.contextsByScope.get(scope);
        if (!context) {
            context = new Context(this, scope);
            this.contextsByScope.set(scope, context);
        }
        return context;
    }
}
class ClassMap {
    constructor(scope){
        this.scope = scope;
    }
    has(name) {
        return this.data.has(this.getDataKey(name));
    }
    get(name) {
        return this.getAll(name)[0];
    }
    getAll(name) {
        const tokenString = this.data.get(this.getDataKey(name)) || "";
        return tokenize(tokenString);
    }
    getAttributeName(name) {
        return this.data.getAttributeNameForKey(this.getDataKey(name));
    }
    getDataKey(name) {
        return `${name}-class`;
    }
    get data() {
        return this.scope.data;
    }
}
class DataMap {
    constructor(scope){
        this.scope = scope;
    }
    get element() {
        return this.scope.element;
    }
    get identifier() {
        return this.scope.identifier;
    }
    get(key) {
        const name = this.getAttributeNameForKey(key);
        return this.element.getAttribute(name);
    }
    set(key, value) {
        const name = this.getAttributeNameForKey(key);
        this.element.setAttribute(name, value);
        return this.get(key);
    }
    has(key) {
        const name = this.getAttributeNameForKey(key);
        return this.element.hasAttribute(name);
    }
    delete(key) {
        if (this.has(key)) {
            const name = this.getAttributeNameForKey(key);
            this.element.removeAttribute(name);
            return true;
        } else return false;
    }
    getAttributeNameForKey(key) {
        return `data-${this.identifier}-${dasherize(key)}`;
    }
}
class Guide {
    constructor(logger){
        this.warnedKeysByObject = new WeakMap;
        this.logger = logger;
    }
    warn(object, key, message) {
        let warnedKeys = this.warnedKeysByObject.get(object);
        if (!warnedKeys) {
            warnedKeys = new Set;
            this.warnedKeysByObject.set(object, warnedKeys);
        }
        if (!warnedKeys.has(key)) {
            warnedKeys.add(key);
            this.logger.warn(message, object);
        }
    }
}
function attributeValueContainsToken(attributeName, token) {
    return `[${attributeName}~="${token}"]`;
}
class TargetSet {
    constructor(scope){
        this.scope = scope;
    }
    get element() {
        return this.scope.element;
    }
    get identifier() {
        return this.scope.identifier;
    }
    get schema() {
        return this.scope.schema;
    }
    has(targetName) {
        return this.find(targetName) != null;
    }
    find(...targetNames) {
        return targetNames.reduce((target, targetName)=>target || this.findTarget(targetName) || this.findLegacyTarget(targetName), undefined);
    }
    findAll(...targetNames) {
        return targetNames.reduce((targets, targetName)=>[
                ...targets,
                ...this.findAllTargets(targetName),
                ...this.findAllLegacyTargets(targetName)
            ], []);
    }
    findTarget(targetName) {
        const selector = this.getSelectorForTargetName(targetName);
        return this.scope.findElement(selector);
    }
    findAllTargets(targetName) {
        const selector = this.getSelectorForTargetName(targetName);
        return this.scope.findAllElements(selector);
    }
    getSelectorForTargetName(targetName) {
        const attributeName = this.schema.targetAttributeForScope(this.identifier);
        return attributeValueContainsToken(attributeName, targetName);
    }
    findLegacyTarget(targetName) {
        const selector = this.getLegacySelectorForTargetName(targetName);
        return this.deprecate(this.scope.findElement(selector), targetName);
    }
    findAllLegacyTargets(targetName) {
        const selector = this.getLegacySelectorForTargetName(targetName);
        return this.scope.findAllElements(selector).map((element)=>this.deprecate(element, targetName));
    }
    getLegacySelectorForTargetName(targetName) {
        const targetDescriptor = `${this.identifier}.${targetName}`;
        return attributeValueContainsToken(this.schema.targetAttribute, targetDescriptor);
    }
    deprecate(element, targetName) {
        if (element) {
            const { identifier  } = this;
            const attributeName = this.schema.targetAttribute;
            const revisedAttributeName = this.schema.targetAttributeForScope(identifier);
            this.guide.warn(element, `target:${targetName}`, `Please replace ${attributeName}="${identifier}.${targetName}" with ${revisedAttributeName}="${targetName}". ` + `The ${attributeName} attribute is deprecated and will be removed in a future version of Stimulus.`);
        }
        return element;
    }
    get guide() {
        return this.scope.guide;
    }
}
class Scope {
    constructor(schema, element, identifier, logger){
        this.targets = new TargetSet(this);
        this.classes = new ClassMap(this);
        this.data = new DataMap(this);
        this.containsElement = (element)=>{
            return element.closest(this.controllerSelector) === this.element;
        };
        this.schema = schema;
        this.element = element;
        this.identifier = identifier;
        this.guide = new Guide(logger);
    }
    findElement(selector) {
        return this.element.matches(selector) ? this.element : this.queryElements(selector).find(this.containsElement);
    }
    findAllElements(selector) {
        return [
            ...this.element.matches(selector) ? [
                this.element
            ] : [],
            ...this.queryElements(selector).filter(this.containsElement)
        ];
    }
    queryElements(selector) {
        return Array.from(this.element.querySelectorAll(selector));
    }
    get controllerSelector() {
        return attributeValueContainsToken(this.schema.controllerAttribute, this.identifier);
    }
}
class ScopeObserver {
    constructor(element, schema, delegate){
        this.element = element;
        this.schema = schema;
        this.delegate = delegate;
        this.valueListObserver = new ValueListObserver(this.element, this.controllerAttribute, this);
        this.scopesByIdentifierByElement = new WeakMap;
        this.scopeReferenceCounts = new WeakMap;
    }
    start() {
        this.valueListObserver.start();
    }
    stop() {
        this.valueListObserver.stop();
    }
    get controllerAttribute() {
        return this.schema.controllerAttribute;
    }
    parseValueForToken(token) {
        const { element , content: identifier  } = token;
        const scopesByIdentifier = this.fetchScopesByIdentifierForElement(element);
        let scope = scopesByIdentifier.get(identifier);
        if (!scope) {
            scope = this.delegate.createScopeForElementAndIdentifier(element, identifier);
            scopesByIdentifier.set(identifier, scope);
        }
        return scope;
    }
    elementMatchedValue(element, value) {
        const referenceCount = (this.scopeReferenceCounts.get(value) || 0) + 1;
        this.scopeReferenceCounts.set(value, referenceCount);
        if (referenceCount == 1) this.delegate.scopeConnected(value);
    }
    elementUnmatchedValue(element, value) {
        const referenceCount = this.scopeReferenceCounts.get(value);
        if (referenceCount) {
            this.scopeReferenceCounts.set(value, referenceCount - 1);
            if (referenceCount == 1) this.delegate.scopeDisconnected(value);
        }
    }
    fetchScopesByIdentifierForElement(element) {
        let scopesByIdentifier = this.scopesByIdentifierByElement.get(element);
        if (!scopesByIdentifier) {
            scopesByIdentifier = new Map;
            this.scopesByIdentifierByElement.set(element, scopesByIdentifier);
        }
        return scopesByIdentifier;
    }
}
class Router {
    constructor(application){
        this.application = application;
        this.scopeObserver = new ScopeObserver(this.element, this.schema, this);
        this.scopesByIdentifier = new Multimap;
        this.modulesByIdentifier = new Map;
    }
    get element() {
        return this.application.element;
    }
    get schema() {
        return this.application.schema;
    }
    get logger() {
        return this.application.logger;
    }
    get controllerAttribute() {
        return this.schema.controllerAttribute;
    }
    get modules() {
        return Array.from(this.modulesByIdentifier.values());
    }
    get contexts() {
        return this.modules.reduce((contexts, module)=>contexts.concat(module.contexts), []);
    }
    start() {
        this.scopeObserver.start();
    }
    stop() {
        this.scopeObserver.stop();
    }
    loadDefinition(definition) {
        this.unloadIdentifier(definition.identifier);
        const module = new Module(this.application, definition);
        this.connectModule(module);
    }
    unloadIdentifier(identifier) {
        const module = this.modulesByIdentifier.get(identifier);
        if (module) this.disconnectModule(module);
    }
    getContextForElementAndIdentifier(element, identifier) {
        const module = this.modulesByIdentifier.get(identifier);
        if (module) return module.contexts.find((context)=>context.element == element);
    }
    handleError(error, message, detail) {
        this.application.handleError(error, message, detail);
    }
    createScopeForElementAndIdentifier(element, identifier) {
        return new Scope(this.schema, element, identifier, this.logger);
    }
    scopeConnected(scope) {
        this.scopesByIdentifier.add(scope.identifier, scope);
        const module = this.modulesByIdentifier.get(scope.identifier);
        if (module) module.connectContextForScope(scope);
    }
    scopeDisconnected(scope) {
        this.scopesByIdentifier.delete(scope.identifier, scope);
        const module = this.modulesByIdentifier.get(scope.identifier);
        if (module) module.disconnectContextForScope(scope);
    }
    connectModule(module) {
        this.modulesByIdentifier.set(module.identifier, module);
        const scopes = this.scopesByIdentifier.getValuesForKey(module.identifier);
        scopes.forEach((scope)=>module.connectContextForScope(scope));
    }
    disconnectModule(module) {
        this.modulesByIdentifier.delete(module.identifier);
        const scopes = this.scopesByIdentifier.getValuesForKey(module.identifier);
        scopes.forEach((scope)=>module.disconnectContextForScope(scope));
    }
}
const defaultSchema = {
    controllerAttribute: "data-controller",
    actionAttribute: "data-action",
    targetAttribute: "data-target",
    targetAttributeForScope: (identifier)=>`data-${identifier}-target`
};
class Application {
    constructor(element = document.documentElement, schema = defaultSchema){
        this.logger = console;
        this.debug = false;
        this.logDebugActivity = (identifier, functionName, detail = {})=>{
            if (this.debug) this.logFormattedMessage(identifier, functionName, detail);
        };
        this.element = element;
        this.schema = schema;
        this.dispatcher = new Dispatcher(this);
        this.router = new Router(this);
    }
    static start(element, schema) {
        const application = new Application(element, schema);
        application.start();
        return application;
    }
    async start() {
        await domReady();
        this.logDebugActivity("application", "starting");
        this.dispatcher.start();
        this.router.start();
        this.logDebugActivity("application", "start");
    }
    stop() {
        this.logDebugActivity("application", "stopping");
        this.dispatcher.stop();
        this.router.stop();
        this.logDebugActivity("application", "stop");
    }
    register(identifier, controllerConstructor) {
        this.load({
            identifier,
            controllerConstructor
        });
    }
    load(head, ...rest) {
        const definitions = Array.isArray(head) ? head : [
            head,
            ...rest
        ];
        definitions.forEach((definition)=>{
            if (definition.controllerConstructor.shouldLoad) this.router.loadDefinition(definition);
        });
    }
    unload(head, ...rest) {
        const identifiers = Array.isArray(head) ? head : [
            head,
            ...rest
        ];
        identifiers.forEach((identifier)=>this.router.unloadIdentifier(identifier));
    }
    get controllers() {
        return this.router.contexts.map((context)=>context.controller);
    }
    getControllerForElementAndIdentifier(element, identifier) {
        const context = this.router.getContextForElementAndIdentifier(element, identifier);
        return context ? context.controller : null;
    }
    handleError(error, message, detail) {
        var _a;
        this.logger.error(`%s\n\n%o\n\n%o`, message, error, detail);
        (_a = window.onerror) === null || _a === void 0 || _a.call(window, message, "", 0, 0, error);
    }
    logFormattedMessage(identifier, functionName, detail = {}) {
        detail = Object.assign({
            application: this
        }, detail);
        this.logger.groupCollapsed(`${identifier} #${functionName}`);
        this.logger.log("details:", Object.assign({}, detail));
        this.logger.groupEnd();
    }
}
function domReady() {
    return new Promise((resolve)=>{
        if (document.readyState == "loading") document.addEventListener("DOMContentLoaded", ()=>resolve());
        else resolve();
    });
}
function ClassPropertiesBlessing(constructor) {
    const classes = readInheritableStaticArrayValues(constructor, "classes");
    return classes.reduce((properties, classDefinition)=>{
        return Object.assign(properties, propertiesForClassDefinition(classDefinition));
    }, {});
}
function propertiesForClassDefinition(key) {
    return {
        [`${key}Class`]: {
            get () {
                const { classes  } = this;
                if (classes.has(key)) return classes.get(key);
                else {
                    const attribute = classes.getAttributeName(key);
                    throw new Error(`Missing attribute "${attribute}"`);
                }
            }
        },
        [`${key}Classes`]: {
            get () {
                return this.classes.getAll(key);
            }
        },
        [`has${capitalize(key)}Class`]: {
            get () {
                return this.classes.has(key);
            }
        }
    };
}
function TargetPropertiesBlessing(constructor) {
    const targets = readInheritableStaticArrayValues(constructor, "targets");
    return targets.reduce((properties, targetDefinition)=>{
        return Object.assign(properties, propertiesForTargetDefinition(targetDefinition));
    }, {});
}
function propertiesForTargetDefinition(name) {
    return {
        [`${name}Target`]: {
            get () {
                const target = this.targets.find(name);
                if (target) return target;
                else throw new Error(`Missing target element "${name}" for "${this.identifier}" controller`);
            }
        },
        [`${name}Targets`]: {
            get () {
                return this.targets.findAll(name);
            }
        },
        [`has${capitalize(name)}Target`]: {
            get () {
                return this.targets.has(name);
            }
        }
    };
}
function ValuePropertiesBlessing(constructor) {
    const valueDefinitionPairs = readInheritableStaticObjectPairs(constructor, "values");
    const propertyDescriptorMap = {
        valueDescriptorMap: {
            get () {
                return valueDefinitionPairs.reduce((result, valueDefinitionPair)=>{
                    const valueDescriptor = parseValueDefinitionPair(valueDefinitionPair, this.identifier);
                    const attributeName = this.data.getAttributeNameForKey(valueDescriptor.key);
                    return Object.assign(result, {
                        [attributeName]: valueDescriptor
                    });
                }, {});
            }
        }
    };
    return valueDefinitionPairs.reduce((properties, valueDefinitionPair)=>{
        return Object.assign(properties, propertiesForValueDefinitionPair(valueDefinitionPair));
    }, propertyDescriptorMap);
}
function propertiesForValueDefinitionPair(valueDefinitionPair, controller) {
    const definition = parseValueDefinitionPair(valueDefinitionPair, controller);
    const { key , name , reader: read , writer: write  } = definition;
    return {
        [name]: {
            get () {
                const value = this.data.get(key);
                if (value !== null) return read(value);
                else return definition.defaultValue;
            },
            set (value) {
                if (value === undefined) this.data.delete(key);
                else this.data.set(key, write(value));
            }
        },
        [`has${capitalize(name)}`]: {
            get () {
                return this.data.has(key) || definition.hasCustomDefaultValue;
            }
        }
    };
}
function parseValueDefinitionPair([token, typeDefinition], controller) {
    return valueDescriptorForTokenAndTypeDefinition({
        controller,
        token,
        typeDefinition
    });
}
function parseValueTypeConstant(constant) {
    switch(constant){
        case Array:
            return "array";
        case Boolean:
            return "boolean";
        case Number:
            return "number";
        case Object:
            return "object";
        case String:
            return "string";
    }
}
function parseValueTypeDefault(defaultValue) {
    switch(typeof defaultValue){
        case "boolean":
            return "boolean";
        case "number":
            return "number";
        case "string":
            return "string";
    }
    if (Array.isArray(defaultValue)) return "array";
    if (Object.prototype.toString.call(defaultValue) === "[object Object]") return "object";
}
function parseValueTypeObject(payload) {
    const typeFromObject = parseValueTypeConstant(payload.typeObject.type);
    if (!typeFromObject) return;
    const defaultValueType = parseValueTypeDefault(payload.typeObject.default);
    if (typeFromObject !== defaultValueType) {
        const propertyPath = payload.controller ? `${payload.controller}.${payload.token}` : payload.token;
        throw new Error(`The specified default value for the Stimulus Value "${propertyPath}" must match the defined type "${typeFromObject}". The provided default value of "${payload.typeObject.default}" is of type "${defaultValueType}".`);
    }
    return typeFromObject;
}
function parseValueTypeDefinition(payload) {
    const typeFromObject = parseValueTypeObject({
        controller: payload.controller,
        token: payload.token,
        typeObject: payload.typeDefinition
    });
    const typeFromDefaultValue = parseValueTypeDefault(payload.typeDefinition);
    const typeFromConstant = parseValueTypeConstant(payload.typeDefinition);
    const type = typeFromObject || typeFromDefaultValue || typeFromConstant;
    if (type) return type;
    const propertyPath = payload.controller ? `${payload.controller}.${payload.typeDefinition}` : payload.token;
    throw new Error(`Unknown value type "${propertyPath}" for "${payload.token}" value`);
}
function defaultValueForDefinition(typeDefinition) {
    const constant = parseValueTypeConstant(typeDefinition);
    if (constant) return defaultValuesByType[constant];
    const defaultValue = typeDefinition.default;
    if (defaultValue !== undefined) return defaultValue;
    return typeDefinition;
}
function valueDescriptorForTokenAndTypeDefinition(payload) {
    const key = `${dasherize(payload.token)}-value`;
    const type = parseValueTypeDefinition(payload);
    return {
        type,
        key,
        name: camelize(key),
        get defaultValue () {
            return defaultValueForDefinition(payload.typeDefinition);
        },
        get hasCustomDefaultValue () {
            return parseValueTypeDefault(payload.typeDefinition) !== undefined;
        },
        reader: readers[type],
        writer: writers[type] || writers.default
    };
}
const defaultValuesByType = {
    get array () {
        return [];
    },
    boolean: false,
    number: 0,
    get object () {
        return {};
    },
    string: ""
};
const readers = {
    array (value) {
        const array = JSON.parse(value);
        if (!Array.isArray(array)) throw new TypeError(`expected value of type "array" but instead got value "${value}" of type "${parseValueTypeDefault(array)}"`);
        return array;
    },
    boolean (value) {
        return !(value == "0" || String(value).toLowerCase() == "false");
    },
    number (value) {
        return Number(value);
    },
    object (value) {
        const object = JSON.parse(value);
        if (object === null || typeof object != "object" || Array.isArray(object)) throw new TypeError(`expected value of type "object" but instead got value "${value}" of type "${parseValueTypeDefault(object)}"`);
        return object;
    },
    string (value) {
        return value;
    }
};
const writers = {
    default: writeString,
    array: writeJSON,
    object: writeJSON
};
function writeJSON(value) {
    return JSON.stringify(value);
}
function writeString(value) {
    return `${value}`;
}
class Controller {
    constructor(context){
        this.context = context;
    }
    static get shouldLoad() {
        return true;
    }
    get application() {
        return this.context.application;
    }
    get scope() {
        return this.context.scope;
    }
    get element() {
        return this.scope.element;
    }
    get identifier() {
        return this.scope.identifier;
    }
    get targets() {
        return this.scope.targets;
    }
    get classes() {
        return this.scope.classes;
    }
    get data() {
        return this.scope.data;
    }
    initialize() {}
    connect() {}
    disconnect() {}
    dispatch(eventName, { target =this.element , detail ={} , prefix =this.identifier , bubbles =true , cancelable =true  } = {}) {
        const type = prefix ? `${prefix}:${eventName}` : eventName;
        const event = new CustomEvent(type, {
            detail,
            bubbles,
            cancelable
        });
        target.dispatchEvent(event);
        return event;
    }
}
Controller.blessings = [
    ClassPropertiesBlessing,
    TargetPropertiesBlessing,
    ValuePropertiesBlessing
];
Controller.targets = [];
Controller.values = {};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"2nolf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _stimulus = require("@hotwired/stimulus");
exports.default = class extends (0, _stimulus.Controller) {
    connect() {
        this.element.innerHTML = "Hello from stimulus";
    }
};

},{"@hotwired/stimulus":"byyBs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l9fxb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _stimulus = require("@hotwired/stimulus");
exports.default = class extends (0, _stimulus.Controller) {
    static targets = [
        "name",
        "email",
        "message",
        "submit"
    ];
    static values = {
        url: String
    };
    submit(event) {
        event.preventDefault();
        const submit = this.submitTarget;
        const form = this.element;
        submit.disabled = true;
        fetch(this.urlValue, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: this.nameTarget.value,
                email: this.emailTarget.value,
                message: this.messageTarget.value
            })
        }).then((response)=>{
            if (!response.ok) throw new Error("Network response was not OK");
            return response.json();
        }).then((json)=>{
            form.reset();
            submit.disabled = false;
        }).catch((error)=>{
            console.error("There has been a problem with your fetch operation:", error);
        });
    }
};

},{"@hotwired/stimulus":"byyBs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7XUsm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _stimulus = require("@hotwired/stimulus");
exports.default = class extends (0, _stimulus.Controller) {
    start() {
        const endpoint = new URL("https://old.reddit.com/api/v1/authorize.compact");
        const state = Math.random().toString(36).slice(2);
        document.cookie = `authorization_state=${state}`;
        endpoint.searchParams.append("client_id", "sTwm7bm3nY-AE8xr7LjAkA");
        endpoint.searchParams.append("response_type", "token");
        endpoint.searchParams.append("state", state);
        endpoint.searchParams.append("redirect_uri", "https://rnuke.github.io/start");
        endpoint.searchParams.append("duration", "temporary");
        endpoint.searchParams.append("scope", "identity edit history");
        window.location.href = endpoint.href;
    }
};

},{"@hotwired/stimulus":"byyBs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8aGBT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _stimulus = require("@hotwired/stimulus");
var _client = require("./nuke_controller/client");
var _clientDefault = parcelHelpers.interopDefault(_client);
var _commentHandler = require("./nuke_controller/commentHandler");
var _commentHandlerDefault = parcelHelpers.interopDefault(_commentHandler);
var _postHandler = require("./nuke_controller/postHandler");
var _postHandlerDefault = parcelHelpers.interopDefault(_postHandler);
exports.default = class extends (0, _stimulus.Controller) {
    async connect() {
        if (this.#getCookie("authorization_state") != this.#urlParams.get("state")) throw new Error("Unable to verify authorization request");
        this.#loading = "Loading Posts";
        let client = new (0, _clientDefault.default)(this.#urlParams.get("access_token"));
        let username = await client.getUser((response)=>{
            return response.name;
        });
        let postHandler = new (0, _postHandlerDefault.default)(client, username);
        await postHandler.loadItems();
        this.#loading = "Deleting Posts";
        await postHandler.nuke();
        this.#loading = "Loading Comments";
        let commentHandler = new (0, _commentHandlerDefault.default)(client, username);
        await commentHandler.loadItems();
        this.#loading = "Deleting Comments";
        await commentHandler.nuke();
        this.#loading = "Done!";
        document.getElementById("loading").classList.remove("loading");
    }
    // private
    get #urlParams() {
        const queryString = window.location.hash.replace("#", "?");
        return new URLSearchParams(queryString);
    }
     #getCookie(cookieName) {
        let cookies = {};
        document.cookie.split(";").forEach((el)=>{
            let [key, value] = el.split("=");
            cookies[key.trim()] = value;
        });
        return cookies[cookieName];
    }
    set #loading(string) {
        document.getElementById("loading").textContent = string;
    }
};

},{"@hotwired/stimulus":"byyBs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./nuke_controller/client":"kndCa","./nuke_controller/commentHandler":"3aUr9","./nuke_controller/postHandler":"3tnic"}],"kndCa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _bottleneck = require("bottleneck");
var _bottleneckDefault = parcelHelpers.interopDefault(_bottleneck);
const limiter = new (0, _bottleneckDefault.default)({
    minTime: 1000
});
const limitedFetch = limiter.wrap(fetch);
class Client {
    constructor(token){
        this.token = token;
    }
    async getUser(callback) {
        return this.#request({
            url: "https://oauth.reddit.com/api/v1/me",
            method: "GET",
            callback: callback
        });
    }
    async getComments(username, params, callback) {
        return this.#request({
            url: `https://oauth.reddit.com/user/${username}/comments`,
            method: "GET",
            params: params,
            callback: callback
        });
    }
    async getPosts(username, params, callback) {
        return this.#request({
            url: `https://oauth.reddit.com/user/${username}/submitted`,
            method: "GET",
            params: params,
            callback: callback
        });
    }
    async editComment(id, text, callback) {
        return this.#request({
            url: "https://oauth.reddit.com/api/editusertext",
            method: "POST",
            params: {
                thing_id: `t1_${id}`,
                text: text,
                api_type: "json"
            },
            callback: callback
        });
    }
    async deleteComment(id, callback) {
        return this.#request({
            url: "https://oauth.reddit.com/api/del",
            method: "POST",
            params: {
                id: `t1_${id}`
            },
            callback: callback
        });
    }
    async editPost(id, text, callback) {
        return this.#request({
            url: "https://oauth.reddit.com/api/editusertext",
            method: "POST",
            params: {
                thing_id: `t3_${id}`,
                text: text,
                api_type: "json"
            },
            callback: callback
        });
    }
    async deletePost(id, callback) {
        return this.#request({
            url: "https://oauth.reddit.com/api/del",
            method: "POST",
            params: {
                id: `t3_${id}`
            },
            callback: callback
        });
    }
     #request({ url , method , params , callback  } = {}) {
        // if (method == "POST") {
        //   return new Promise(resolve => setTimeout(resolve, 1000)).then(() => console.log(url));
        // }
        const headers = new Headers();
        headers.append("Authorization", `Bearer ${this.token} `);
        headers.append("Content-Type", "application/json");
        const options = {
            method: method,
            headers: headers
        };
        const endpoint = new URL(url);
        for(const key in params)endpoint.searchParams.append(key, params[key]);
        return limitedFetch(endpoint.href, options).then((response)=>response.json()).catch((error)=>console.error(error)).then((response)=>typeof callback === "function" && callback(response));
    }
}
exports.default = Client;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","bottleneck":"7xstv"}],"7xstv":[function(require,module,exports) {
"use strict";
module.exports = require("./Bottleneck");

},{"./Bottleneck":"eCwA0"}],"eCwA0":[function(require,module,exports) {
"use strict";
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}
function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _toArray(arr) {
    return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
var Bottleneck, DEFAULT_PRIORITY, Events, Job, LocalDatastore, NUM_PRIORITIES, Queues, RedisDatastore, States, Sync, parser, splice = [].splice;
NUM_PRIORITIES = 10;
DEFAULT_PRIORITY = 5;
parser = require("./parser");
Queues = require("./Queues");
Job = require("./Job");
LocalDatastore = require("./LocalDatastore");
RedisDatastore = require("./RedisDatastore");
Events = require("./Events");
States = require("./States");
Sync = require("./Sync");
Bottleneck = (function() {
    class Bottleneck {
        constructor(options = {}, ...invalid){
            var storeInstanceOptions, storeOptions;
            this._addToQueue = this._addToQueue.bind(this);
            this._validateOptions(options, invalid);
            parser.load(options, this.instanceDefaults, this);
            this._queues = new Queues(NUM_PRIORITIES);
            this._scheduled = {};
            this._states = new States([
                "RECEIVED",
                "QUEUED",
                "RUNNING",
                "EXECUTING"
            ].concat(this.trackDoneStatus ? [
                "DONE"
            ] : []));
            this._limiter = null;
            this.Events = new Events(this);
            this._submitLock = new Sync("submit", this.Promise);
            this._registerLock = new Sync("register", this.Promise);
            storeOptions = parser.load(options, this.storeDefaults, {});
            this._store = (function() {
                if (this.datastore === "redis" || this.datastore === "ioredis" || this.connection != null) {
                    storeInstanceOptions = parser.load(options, this.redisStoreDefaults, {});
                    return new RedisDatastore(this, storeOptions, storeInstanceOptions);
                } else if (this.datastore === "local") {
                    storeInstanceOptions = parser.load(options, this.localStoreDefaults, {});
                    return new LocalDatastore(this, storeOptions, storeInstanceOptions);
                } else throw new Bottleneck.prototype.BottleneckError(`Invalid datastore type: ${this.datastore}`);
            }).call(this);
            this._queues.on("leftzero", ()=>{
                var ref;
                return (ref = this._store.heartbeat) != null ? typeof ref.ref === "function" ? ref.ref() : void 0 : void 0;
            });
            this._queues.on("zero", ()=>{
                var ref;
                return (ref = this._store.heartbeat) != null ? typeof ref.unref === "function" ? ref.unref() : void 0 : void 0;
            });
        }
        _validateOptions(options, invalid) {
            if (!(options != null && typeof options === "object" && invalid.length === 0)) throw new Bottleneck.prototype.BottleneckError("Bottleneck v2 takes a single object argument. Refer to https://github.com/SGrondin/bottleneck#upgrading-to-v2 if you're upgrading from Bottleneck v1.");
        }
        ready() {
            return this._store.ready;
        }
        clients() {
            return this._store.clients;
        }
        channel() {
            return `b_${this.id}`;
        }
        channel_client() {
            return `b_${this.id}_${this._store.clientId}`;
        }
        publish(message) {
            return this._store.__publish__(message);
        }
        disconnect(flush = true) {
            return this._store.__disconnect__(flush);
        }
        chain(_limiter) {
            this._limiter = _limiter;
            return this;
        }
        queued(priority) {
            return this._queues.queued(priority);
        }
        clusterQueued() {
            return this._store.__queued__();
        }
        empty() {
            return this.queued() === 0 && this._submitLock.isEmpty();
        }
        running() {
            return this._store.__running__();
        }
        done() {
            return this._store.__done__();
        }
        jobStatus(id) {
            return this._states.jobStatus(id);
        }
        jobs(status) {
            return this._states.statusJobs(status);
        }
        counts() {
            return this._states.statusCounts();
        }
        _randomIndex() {
            return Math.random().toString(36).slice(2);
        }
        check(weight = 1) {
            return this._store.__check__(weight);
        }
        _clearGlobalState(index) {
            if (this._scheduled[index] != null) {
                clearTimeout(this._scheduled[index].expiration);
                delete this._scheduled[index];
                return true;
            } else return false;
        }
        _free(index, job, options, eventInfo) {
            var _this = this;
            return _asyncToGenerator(function*() {
                var e, running;
                try {
                    var _ref = yield _this._store.__free__(index, options.weight);
                    running = _ref.running;
                    _this.Events.trigger("debug", `Freed ${options.id}`, eventInfo);
                    if (running === 0 && _this.empty()) return _this.Events.trigger("idle");
                } catch (error1) {
                    e = error1;
                    return _this.Events.trigger("error", e);
                }
            })();
        }
        _run(index, job, wait) {
            var clearGlobalState, free, run;
            job.doRun();
            clearGlobalState = this._clearGlobalState.bind(this, index);
            run = this._run.bind(this, index, job);
            free = this._free.bind(this, index, job);
            return this._scheduled[index] = {
                timeout: setTimeout(()=>{
                    return job.doExecute(this._limiter, clearGlobalState, run, free);
                }, wait),
                expiration: job.options.expiration != null ? setTimeout(function() {
                    return job.doExpire(clearGlobalState, run, free);
                }, wait + job.options.expiration) : void 0,
                job: job
            };
        }
        _drainOne(capacity) {
            return this._registerLock.schedule(()=>{
                var args, index, next, options, queue;
                if (this.queued() === 0) return this.Promise.resolve(null);
                queue = this._queues.getFirst();
                var _next2 = next = queue.first();
                options = _next2.options;
                args = _next2.args;
                if (capacity != null && options.weight > capacity) return this.Promise.resolve(null);
                this.Events.trigger("debug", `Draining ${options.id}`, {
                    args,
                    options
                });
                index = this._randomIndex();
                return this._store.__register__(index, options.weight, options.expiration).then(({ success , wait , reservoir  })=>{
                    var empty;
                    this.Events.trigger("debug", `Drained ${options.id}`, {
                        success,
                        args,
                        options
                    });
                    if (success) {
                        queue.shift();
                        empty = this.empty();
                        if (empty) this.Events.trigger("empty");
                        if (reservoir === 0) this.Events.trigger("depleted", empty);
                        this._run(index, next, wait);
                        return this.Promise.resolve(options.weight);
                    } else return this.Promise.resolve(null);
                });
            });
        }
        _drainAll(capacity, total = 0) {
            return this._drainOne(capacity).then((drained)=>{
                var newCapacity;
                if (drained != null) {
                    newCapacity = capacity != null ? capacity - drained : capacity;
                    return this._drainAll(newCapacity, total + drained);
                } else return this.Promise.resolve(total);
            }).catch((e)=>{
                return this.Events.trigger("error", e);
            });
        }
        _dropAllQueued(message) {
            return this._queues.shiftAll(function(job) {
                return job.doDrop({
                    message
                });
            });
        }
        stop(options = {}) {
            var done, waitForExecuting;
            options = parser.load(options, this.stopDefaults);
            waitForExecuting = (at)=>{
                var finished;
                finished = ()=>{
                    var counts;
                    counts = this._states.counts;
                    return counts[0] + counts[1] + counts[2] + counts[3] === at;
                };
                return new this.Promise((resolve, reject)=>{
                    if (finished()) return resolve();
                    else return this.on("done", ()=>{
                        if (finished()) {
                            this.removeAllListeners("done");
                            return resolve();
                        }
                    });
                });
            };
            done = options.dropWaitingJobs ? (this._run = function(index, next) {
                return next.doDrop({
                    message: options.dropErrorMessage
                });
            }, this._drainOne = ()=>{
                return this.Promise.resolve(null);
            }, this._registerLock.schedule(()=>{
                return this._submitLock.schedule(()=>{
                    var k, ref, v;
                    ref = this._scheduled;
                    for(k in ref){
                        v = ref[k];
                        if (this.jobStatus(v.job.options.id) === "RUNNING") {
                            clearTimeout(v.timeout);
                            clearTimeout(v.expiration);
                            v.job.doDrop({
                                message: options.dropErrorMessage
                            });
                        }
                    }
                    this._dropAllQueued(options.dropErrorMessage);
                    return waitForExecuting(0);
                });
            })) : this.schedule({
                priority: NUM_PRIORITIES - 1,
                weight: 0
            }, ()=>{
                return waitForExecuting(1);
            });
            this._receive = function(job) {
                return job._reject(new Bottleneck.prototype.BottleneckError(options.enqueueErrorMessage));
            };
            this.stop = ()=>{
                return this.Promise.reject(new Bottleneck.prototype.BottleneckError("stop() has already been called"));
            };
            return done;
        }
        _addToQueue(job) {
            var _this2 = this;
            return _asyncToGenerator(function*() {
                var args, blocked, error, options, reachedHWM, shifted, strategy;
                args = job.args;
                options = job.options;
                try {
                    var _ref2 = yield _this2._store.__submit__(_this2.queued(), options.weight);
                    reachedHWM = _ref2.reachedHWM;
                    blocked = _ref2.blocked;
                    strategy = _ref2.strategy;
                } catch (error1) {
                    error = error1;
                    _this2.Events.trigger("debug", `Could not queue ${options.id}`, {
                        args,
                        options,
                        error
                    });
                    job.doDrop({
                        error
                    });
                    return false;
                }
                if (blocked) {
                    job.doDrop();
                    return true;
                } else if (reachedHWM) {
                    shifted = strategy === Bottleneck.prototype.strategy.LEAK ? _this2._queues.shiftLastFrom(options.priority) : strategy === Bottleneck.prototype.strategy.OVERFLOW_PRIORITY ? _this2._queues.shiftLastFrom(options.priority + 1) : strategy === Bottleneck.prototype.strategy.OVERFLOW ? job : void 0;
                    if (shifted != null) shifted.doDrop();
                    if (shifted == null || strategy === Bottleneck.prototype.strategy.OVERFLOW) {
                        if (shifted == null) job.doDrop();
                        return reachedHWM;
                    }
                }
                job.doQueue(reachedHWM, blocked);
                _this2._queues.push(job);
                yield _this2._drainAll();
                return reachedHWM;
            })();
        }
        _receive(job) {
            if (this._states.jobStatus(job.options.id) != null) {
                job._reject(new Bottleneck.prototype.BottleneckError(`A job with the same id already exists (id=${job.options.id})`));
                return false;
            } else {
                job.doReceive();
                return this._submitLock.schedule(this._addToQueue, job);
            }
        }
        submit(...args) {
            var cb, fn, job, options, ref, ref1, task;
            if (typeof args[0] === "function") {
                var _ref3, _ref4, _splice$call, _splice$call2;
                ref = args, _ref3 = ref, _ref4 = _toArray(_ref3), fn = _ref4[0], args = _ref4.slice(1), _ref3, _splice$call = splice.call(args, -1), _splice$call2 = _slicedToArray(_splice$call, 1), cb = _splice$call2[0], _splice$call;
                options = parser.load({}, this.jobDefaults);
            } else {
                var _ref5, _ref6, _splice$call3, _splice$call4;
                ref1 = args, _ref5 = ref1, _ref6 = _toArray(_ref5), options = _ref6[0], fn = _ref6[1], args = _ref6.slice(2), _ref5, _splice$call3 = splice.call(args, -1), _splice$call4 = _slicedToArray(_splice$call3, 1), cb = _splice$call4[0], _splice$call3;
                options = parser.load(options, this.jobDefaults);
            }
            task = (...args)=>{
                return new this.Promise(function(resolve, reject) {
                    return fn(...args, function(...args) {
                        return (args[0] != null ? reject : resolve)(args);
                    });
                });
            };
            job = new Job(task, args, options, this.jobDefaults, this.rejectOnDrop, this.Events, this._states, this.Promise);
            job.promise.then(function(args) {
                return typeof cb === "function" ? cb(...args) : void 0;
            }).catch(function(args) {
                if (Array.isArray(args)) return typeof cb === "function" ? cb(...args) : void 0;
                else return typeof cb === "function" ? cb(args) : void 0;
            });
            return this._receive(job);
        }
        schedule(...args) {
            var job, options, task;
            if (typeof args[0] === "function") {
                var _args = args;
                var _args2 = _toArray(_args);
                task = _args2[0];
                args = _args2.slice(1);
                options = {};
            } else {
                var _args3 = args;
                var _args4 = _toArray(_args3);
                options = _args4[0];
                task = _args4[1];
                args = _args4.slice(2);
            }
            job = new Job(task, args, options, this.jobDefaults, this.rejectOnDrop, this.Events, this._states, this.Promise);
            this._receive(job);
            return job.promise;
        }
        wrap(fn) {
            var schedule, wrapped;
            schedule = this.schedule.bind(this);
            wrapped = function wrapped(...args) {
                return schedule(fn.bind(this), ...args);
            };
            wrapped.withOptions = function(options, ...args) {
                return schedule(options, fn, ...args);
            };
            return wrapped;
        }
        updateSettings(options = {}) {
            var _this3 = this;
            return _asyncToGenerator(function*() {
                yield _this3._store.__updateSettings__(parser.overwrite(options, _this3.storeDefaults));
                parser.overwrite(options, _this3.instanceDefaults, _this3);
                return _this3;
            })();
        }
        currentReservoir() {
            return this._store.__currentReservoir__();
        }
        incrementReservoir(incr = 0) {
            return this._store.__incrementReservoir__(incr);
        }
    }
    Bottleneck.default = Bottleneck;
    Bottleneck.Events = Events;
    Bottleneck.version = Bottleneck.prototype.version = require("./version.json").version;
    Bottleneck.strategy = Bottleneck.prototype.strategy = {
        LEAK: 1,
        OVERFLOW: 2,
        OVERFLOW_PRIORITY: 4,
        BLOCK: 3
    };
    Bottleneck.BottleneckError = Bottleneck.prototype.BottleneckError = require("./BottleneckError");
    Bottleneck.Group = Bottleneck.prototype.Group = require("./Group");
    Bottleneck.RedisConnection = Bottleneck.prototype.RedisConnection = require("./RedisConnection");
    Bottleneck.IORedisConnection = Bottleneck.prototype.IORedisConnection = require("./IORedisConnection");
    Bottleneck.Batcher = Bottleneck.prototype.Batcher = require("./Batcher");
    Bottleneck.prototype.jobDefaults = {
        priority: DEFAULT_PRIORITY,
        weight: 1,
        expiration: null,
        id: "<no-id>"
    };
    Bottleneck.prototype.storeDefaults = {
        maxConcurrent: null,
        minTime: 0,
        highWater: null,
        strategy: Bottleneck.prototype.strategy.LEAK,
        penalty: null,
        reservoir: null,
        reservoirRefreshInterval: null,
        reservoirRefreshAmount: null,
        reservoirIncreaseInterval: null,
        reservoirIncreaseAmount: null,
        reservoirIncreaseMaximum: null
    };
    Bottleneck.prototype.localStoreDefaults = {
        Promise: Promise,
        timeout: null,
        heartbeatInterval: 250
    };
    Bottleneck.prototype.redisStoreDefaults = {
        Promise: Promise,
        timeout: null,
        heartbeatInterval: 5000,
        clientTimeout: 10000,
        Redis: null,
        clientOptions: {},
        clusterNodes: null,
        clearDatastore: false,
        connection: null
    };
    Bottleneck.prototype.instanceDefaults = {
        datastore: "local",
        connection: null,
        id: "<no-id>",
        rejectOnDrop: true,
        trackDoneStatus: false,
        Promise: Promise
    };
    Bottleneck.prototype.stopDefaults = {
        enqueueErrorMessage: "This limiter has been stopped and cannot accept new jobs.",
        dropWaitingJobs: true,
        dropErrorMessage: "This limiter has been stopped."
    };
    return Bottleneck;
}).call(void 0);
module.exports = Bottleneck;

},{"./parser":"kbuWd","./Queues":"1l4dU","./Job":"ejXUQ","./LocalDatastore":"8xQBS","./RedisDatastore":"cCpSm","./Events":"jQoPj","./States":"kcOJ1","./Sync":"3Jngd","./version.json":"dlKYW","./BottleneckError":"fek3N","./Group":"f20hH","./RedisConnection":"iKgr8","./IORedisConnection":"bTvPT","./Batcher":"lXQj4"}],"kbuWd":[function(require,module,exports) {
"use strict";
exports.load = function(received, defaults, onto = {}) {
    var k, ref, v;
    for(k in defaults){
        v = defaults[k];
        onto[k] = (ref = received[k]) != null ? ref : v;
    }
    return onto;
};
exports.overwrite = function(received, defaults, onto = {}) {
    var k, v;
    for(k in received){
        v = received[k];
        if (defaults[k] !== void 0) onto[k] = v;
    }
    return onto;
};

},{}],"1l4dU":[function(require,module,exports) {
"use strict";
var DLList, Events, Queues;
DLList = require("./DLList");
Events = require("./Events");
Queues = class Queues {
    constructor(num_priorities){
        var i;
        this.Events = new Events(this);
        this._length = 0;
        this._lists = (function() {
            var j, ref, results;
            results = [];
            for(i = j = 1, ref = num_priorities; 1 <= ref ? j <= ref : j >= ref; i = 1 <= ref ? ++j : --j)results.push(new DLList(()=>{
                return this.incr();
            }, ()=>{
                return this.decr();
            }));
            return results;
        }).call(this);
    }
    incr() {
        if ((this._length++) === 0) return this.Events.trigger("leftzero");
    }
    decr() {
        if (--this._length === 0) return this.Events.trigger("zero");
    }
    push(job) {
        return this._lists[job.options.priority].push(job);
    }
    queued(priority) {
        if (priority != null) return this._lists[priority].length;
        else return this._length;
    }
    shiftAll(fn) {
        return this._lists.forEach(function(list) {
            return list.forEachShift(fn);
        });
    }
    getFirst(arr = this._lists) {
        var j, len, list;
        for(j = 0, len = arr.length; j < len; j++){
            list = arr[j];
            if (list.length > 0) return list;
        }
        return [];
    }
    shiftLastFrom(priority) {
        return this.getFirst(this._lists.slice(priority).reverse()).shift();
    }
};
module.exports = Queues;

},{"./DLList":"crI6G","./Events":"jQoPj"}],"crI6G":[function(require,module,exports) {
"use strict";
var DLList;
DLList = class DLList {
    constructor(incr, decr){
        this.incr = incr;
        this.decr = decr;
        this._first = null;
        this._last = null;
        this.length = 0;
    }
    push(value) {
        var node;
        this.length++;
        if (typeof this.incr === "function") this.incr();
        node = {
            value,
            prev: this._last,
            next: null
        };
        if (this._last != null) {
            this._last.next = node;
            this._last = node;
        } else this._first = this._last = node;
        return void 0;
    }
    shift() {
        var value;
        if (this._first == null) return;
        else {
            this.length--;
            if (typeof this.decr === "function") this.decr();
        }
        value = this._first.value;
        if ((this._first = this._first.next) != null) this._first.prev = null;
        else this._last = null;
        return value;
    }
    first() {
        if (this._first != null) return this._first.value;
    }
    getArray() {
        var node, ref, results;
        node = this._first;
        results = [];
        while(node != null)results.push((ref = node, node = node.next, ref.value));
        return results;
    }
    forEachShift(cb) {
        var node;
        node = this.shift();
        while(node != null)cb(node), node = this.shift();
        return void 0;
    }
    debug() {
        var node, ref, ref1, ref2, results;
        node = this._first;
        results = [];
        while(node != null)results.push((ref = node, node = node.next, {
            value: ref.value,
            prev: (ref1 = ref.prev) != null ? ref1.value : void 0,
            next: (ref2 = ref.next) != null ? ref2.value : void 0
        }));
        return results;
    }
};
module.exports = DLList;

},{}],"jQoPj":[function(require,module,exports) {
"use strict";
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
var Events;
Events = class Events {
    constructor(instance){
        this.instance = instance;
        this._events = {};
        if (this.instance.on != null || this.instance.once != null || this.instance.removeAllListeners != null) throw new Error("An Emitter already exists for this object");
        this.instance.on = (name, cb)=>{
            return this._addListener(name, "many", cb);
        };
        this.instance.once = (name, cb)=>{
            return this._addListener(name, "once", cb);
        };
        this.instance.removeAllListeners = (name = null)=>{
            if (name != null) return delete this._events[name];
            else return this._events = {};
        };
    }
    _addListener(name, status, cb) {
        var base;
        if ((base = this._events)[name] == null) base[name] = [];
        this._events[name].push({
            cb,
            status
        });
        return this.instance;
    }
    listenerCount(name) {
        if (this._events[name] != null) return this._events[name].length;
        else return 0;
    }
    trigger(name, ...args) {
        var _this = this;
        return _asyncToGenerator(function*() {
            var e, promises;
            try {
                if (name !== "debug") _this.trigger("debug", `Event triggered: ${name}`, args);
                if (_this._events[name] == null) return;
                _this._events[name] = _this._events[name].filter(function(listener) {
                    return listener.status !== "none";
                });
                promises = _this._events[name].map(/*#__PURE__*/ function() {
                    var _ref = _asyncToGenerator(function*(listener) {
                        var e, returned;
                        if (listener.status === "none") return;
                        if (listener.status === "once") listener.status = "none";
                        try {
                            returned = typeof listener.cb === "function" ? listener.cb(...args) : void 0;
                            if (typeof (returned != null ? returned.then : void 0) === "function") return yield returned;
                            else return returned;
                        } catch (error) {
                            e = error;
                            _this.trigger("error", e);
                            return null;
                        }
                    });
                    return function(_x) {
                        return _ref.apply(this, arguments);
                    };
                }());
                return (yield Promise.all(promises)).find(function(x) {
                    return x != null;
                });
            } catch (error) {
                e = error;
                _this.trigger("error", e);
                return null;
            }
        })();
    }
};
module.exports = Events;

},{}],"ejXUQ":[function(require,module,exports) {
"use strict";
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
var BottleneckError, DEFAULT_PRIORITY, Job, NUM_PRIORITIES, parser;
NUM_PRIORITIES = 10;
DEFAULT_PRIORITY = 5;
parser = require("./parser");
BottleneckError = require("./BottleneckError");
Job = class Job {
    constructor(task, args, options, jobDefaults, rejectOnDrop, Events, _states, Promise1){
        this.task = task;
        this.args = args;
        this.rejectOnDrop = rejectOnDrop;
        this.Events = Events;
        this._states = _states;
        this.Promise = Promise1;
        this.options = parser.load(options, jobDefaults);
        this.options.priority = this._sanitizePriority(this.options.priority);
        if (this.options.id === jobDefaults.id) this.options.id = `${this.options.id}-${this._randomIndex()}`;
        this.promise = new this.Promise((_resolve, _reject)=>{
            this._resolve = _resolve;
            this._reject = _reject;
        });
        this.retryCount = 0;
    }
    _sanitizePriority(priority) {
        var sProperty;
        sProperty = ~~priority !== priority ? DEFAULT_PRIORITY : priority;
        if (sProperty < 0) return 0;
        else if (sProperty > NUM_PRIORITIES - 1) return NUM_PRIORITIES - 1;
        else return sProperty;
    }
    _randomIndex() {
        return Math.random().toString(36).slice(2);
    }
    doDrop({ error , message ="This job has been dropped by Bottleneck"  } = {}) {
        if (this._states.remove(this.options.id)) {
            if (this.rejectOnDrop) this._reject(error != null ? error : new BottleneckError(message));
            this.Events.trigger("dropped", {
                args: this.args,
                options: this.options,
                task: this.task,
                promise: this.promise
            });
            return true;
        } else return false;
    }
    _assertStatus(expected) {
        var status;
        status = this._states.jobStatus(this.options.id);
        if (!(status === expected || expected === "DONE" && status === null)) throw new BottleneckError(`Invalid job status ${status}, expected ${expected}. Please open an issue at https://github.com/SGrondin/bottleneck/issues`);
    }
    doReceive() {
        this._states.start(this.options.id);
        return this.Events.trigger("received", {
            args: this.args,
            options: this.options
        });
    }
    doQueue(reachedHWM, blocked) {
        this._assertStatus("RECEIVED");
        this._states.next(this.options.id);
        return this.Events.trigger("queued", {
            args: this.args,
            options: this.options,
            reachedHWM,
            blocked
        });
    }
    doRun() {
        if (this.retryCount === 0) {
            this._assertStatus("QUEUED");
            this._states.next(this.options.id);
        } else this._assertStatus("EXECUTING");
        return this.Events.trigger("scheduled", {
            args: this.args,
            options: this.options
        });
    }
    doExecute(chained, clearGlobalState, run, free) {
        var _this = this;
        return _asyncToGenerator(function*() {
            var error, eventInfo, passed;
            if (_this.retryCount === 0) {
                _this._assertStatus("RUNNING");
                _this._states.next(_this.options.id);
            } else _this._assertStatus("EXECUTING");
            eventInfo = {
                args: _this.args,
                options: _this.options,
                retryCount: _this.retryCount
            };
            _this.Events.trigger("executing", eventInfo);
            try {
                passed = yield chained != null ? chained.schedule(_this.options, _this.task, ..._this.args) : _this.task(..._this.args);
                if (clearGlobalState()) {
                    _this.doDone(eventInfo);
                    yield free(_this.options, eventInfo);
                    _this._assertStatus("DONE");
                    return _this._resolve(passed);
                }
            } catch (error1) {
                error = error1;
                return _this._onFailure(error, eventInfo, clearGlobalState, run, free);
            }
        })();
    }
    doExpire(clearGlobalState, run, free) {
        var error, eventInfo;
        if (this._states.jobStatus(this.options.id === "RUNNING")) this._states.next(this.options.id);
        this._assertStatus("EXECUTING");
        eventInfo = {
            args: this.args,
            options: this.options,
            retryCount: this.retryCount
        };
        error = new BottleneckError(`This job timed out after ${this.options.expiration} ms.`);
        return this._onFailure(error, eventInfo, clearGlobalState, run, free);
    }
    _onFailure(error, eventInfo, clearGlobalState, run, free) {
        var _this2 = this;
        return _asyncToGenerator(function*() {
            var retry, retryAfter;
            if (clearGlobalState()) {
                retry = yield _this2.Events.trigger("failed", error, eventInfo);
                if (retry != null) {
                    retryAfter = ~~retry;
                    _this2.Events.trigger("retry", `Retrying ${_this2.options.id} after ${retryAfter} ms`, eventInfo);
                    _this2.retryCount++;
                    return run(retryAfter);
                } else {
                    _this2.doDone(eventInfo);
                    yield free(_this2.options, eventInfo);
                    _this2._assertStatus("DONE");
                    return _this2._reject(error);
                }
            }
        })();
    }
    doDone(eventInfo) {
        this._assertStatus("EXECUTING");
        this._states.next(this.options.id);
        return this.Events.trigger("done", eventInfo);
    }
};
module.exports = Job;

},{"./parser":"kbuWd","./BottleneckError":"fek3N"}],"fek3N":[function(require,module,exports) {
"use strict";
var BottleneckError;
BottleneckError = class BottleneckError extends Error {
};
module.exports = BottleneckError;

},{}],"8xQBS":[function(require,module,exports) {
"use strict";
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
var BottleneckError, LocalDatastore, parser;
parser = require("./parser");
BottleneckError = require("./BottleneckError");
LocalDatastore = class LocalDatastore {
    constructor(instance, storeOptions, storeInstanceOptions){
        this.instance = instance;
        this.storeOptions = storeOptions;
        this.clientId = this.instance._randomIndex();
        parser.load(storeInstanceOptions, storeInstanceOptions, this);
        this._nextRequest = this._lastReservoirRefresh = this._lastReservoirIncrease = Date.now();
        this._running = 0;
        this._done = 0;
        this._unblockTime = 0;
        this.ready = this.Promise.resolve();
        this.clients = {};
        this._startHeartbeat();
    }
    _startHeartbeat() {
        var base;
        if (this.heartbeat == null && (this.storeOptions.reservoirRefreshInterval != null && this.storeOptions.reservoirRefreshAmount != null || this.storeOptions.reservoirIncreaseInterval != null && this.storeOptions.reservoirIncreaseAmount != null)) return typeof (base = this.heartbeat = setInterval(()=>{
            var amount, incr, maximum, now, reservoir;
            now = Date.now();
            if (this.storeOptions.reservoirRefreshInterval != null && now >= this._lastReservoirRefresh + this.storeOptions.reservoirRefreshInterval) {
                this._lastReservoirRefresh = now;
                this.storeOptions.reservoir = this.storeOptions.reservoirRefreshAmount;
                this.instance._drainAll(this.computeCapacity());
            }
            if (this.storeOptions.reservoirIncreaseInterval != null && now >= this._lastReservoirIncrease + this.storeOptions.reservoirIncreaseInterval) {
                var _this$storeOptions = this.storeOptions;
                amount = _this$storeOptions.reservoirIncreaseAmount;
                maximum = _this$storeOptions.reservoirIncreaseMaximum;
                reservoir = _this$storeOptions.reservoir;
                this._lastReservoirIncrease = now;
                incr = maximum != null ? Math.min(amount, maximum - reservoir) : amount;
                if (incr > 0) {
                    this.storeOptions.reservoir += incr;
                    return this.instance._drainAll(this.computeCapacity());
                }
            }
        }, this.heartbeatInterval)).unref === "function" ? base.unref() : void 0;
        else return clearInterval(this.heartbeat);
    }
    __publish__(message) {
        var _this = this;
        return _asyncToGenerator(function*() {
            yield _this.yieldLoop();
            return _this.instance.Events.trigger("message", message.toString());
        })();
    }
    __disconnect__(flush) {
        var _this2 = this;
        return _asyncToGenerator(function*() {
            yield _this2.yieldLoop();
            clearInterval(_this2.heartbeat);
            return _this2.Promise.resolve();
        })();
    }
    yieldLoop(t = 0) {
        return new this.Promise(function(resolve, reject) {
            return setTimeout(resolve, t);
        });
    }
    computePenalty() {
        var ref;
        return (ref = this.storeOptions.penalty) != null ? ref : 15 * this.storeOptions.minTime || 5000;
    }
    __updateSettings__(options) {
        var _this3 = this;
        return _asyncToGenerator(function*() {
            yield _this3.yieldLoop();
            parser.overwrite(options, options, _this3.storeOptions);
            _this3._startHeartbeat();
            _this3.instance._drainAll(_this3.computeCapacity());
            return true;
        })();
    }
    __running__() {
        var _this4 = this;
        return _asyncToGenerator(function*() {
            yield _this4.yieldLoop();
            return _this4._running;
        })();
    }
    __queued__() {
        var _this5 = this;
        return _asyncToGenerator(function*() {
            yield _this5.yieldLoop();
            return _this5.instance.queued();
        })();
    }
    __done__() {
        var _this6 = this;
        return _asyncToGenerator(function*() {
            yield _this6.yieldLoop();
            return _this6._done;
        })();
    }
    __groupCheck__(time) {
        var _this7 = this;
        return _asyncToGenerator(function*() {
            yield _this7.yieldLoop();
            return _this7._nextRequest + _this7.timeout < time;
        })();
    }
    computeCapacity() {
        var maxConcurrent, reservoir;
        var _this$storeOptions2 = this.storeOptions;
        maxConcurrent = _this$storeOptions2.maxConcurrent;
        reservoir = _this$storeOptions2.reservoir;
        if (maxConcurrent != null && reservoir != null) return Math.min(maxConcurrent - this._running, reservoir);
        else if (maxConcurrent != null) return maxConcurrent - this._running;
        else if (reservoir != null) return reservoir;
        else return null;
    }
    conditionsCheck(weight) {
        var capacity;
        capacity = this.computeCapacity();
        return capacity == null || weight <= capacity;
    }
    __incrementReservoir__(incr) {
        var _this8 = this;
        return _asyncToGenerator(function*() {
            var reservoir;
            yield _this8.yieldLoop();
            reservoir = _this8.storeOptions.reservoir += incr;
            _this8.instance._drainAll(_this8.computeCapacity());
            return reservoir;
        })();
    }
    __currentReservoir__() {
        var _this9 = this;
        return _asyncToGenerator(function*() {
            yield _this9.yieldLoop();
            return _this9.storeOptions.reservoir;
        })();
    }
    isBlocked(now) {
        return this._unblockTime >= now;
    }
    check(weight, now) {
        return this.conditionsCheck(weight) && this._nextRequest - now <= 0;
    }
    __check__(weight) {
        var _this10 = this;
        return _asyncToGenerator(function*() {
            var now;
            yield _this10.yieldLoop();
            now = Date.now();
            return _this10.check(weight, now);
        })();
    }
    __register__(index, weight, expiration) {
        var _this11 = this;
        return _asyncToGenerator(function*() {
            var now, wait;
            yield _this11.yieldLoop();
            now = Date.now();
            if (_this11.conditionsCheck(weight)) {
                _this11._running += weight;
                if (_this11.storeOptions.reservoir != null) _this11.storeOptions.reservoir -= weight;
                wait = Math.max(_this11._nextRequest - now, 0);
                _this11._nextRequest = now + wait + _this11.storeOptions.minTime;
                return {
                    success: true,
                    wait,
                    reservoir: _this11.storeOptions.reservoir
                };
            } else return {
                success: false
            };
        })();
    }
    strategyIsBlock() {
        return this.storeOptions.strategy === 3;
    }
    __submit__(queueLength, weight) {
        var _this12 = this;
        return _asyncToGenerator(function*() {
            var blocked, now, reachedHWM;
            yield _this12.yieldLoop();
            if (_this12.storeOptions.maxConcurrent != null && weight > _this12.storeOptions.maxConcurrent) throw new BottleneckError(`Impossible to add a job having a weight of ${weight} to a limiter having a maxConcurrent setting of ${_this12.storeOptions.maxConcurrent}`);
            now = Date.now();
            reachedHWM = _this12.storeOptions.highWater != null && queueLength === _this12.storeOptions.highWater && !_this12.check(weight, now);
            blocked = _this12.strategyIsBlock() && (reachedHWM || _this12.isBlocked(now));
            if (blocked) {
                _this12._unblockTime = now + _this12.computePenalty();
                _this12._nextRequest = _this12._unblockTime + _this12.storeOptions.minTime;
                _this12.instance._dropAllQueued();
            }
            return {
                reachedHWM,
                blocked,
                strategy: _this12.storeOptions.strategy
            };
        })();
    }
    __free__(index, weight) {
        var _this13 = this;
        return _asyncToGenerator(function*() {
            yield _this13.yieldLoop();
            _this13._running -= weight;
            _this13._done += weight;
            _this13.instance._drainAll(_this13.computeCapacity());
            return {
                running: _this13._running
            };
        })();
    }
};
module.exports = LocalDatastore;

},{"./parser":"kbuWd","./BottleneckError":"fek3N"}],"cCpSm":[function(require,module,exports) {
"use strict";
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
var BottleneckError, IORedisConnection, RedisConnection, RedisDatastore, parser;
parser = require("./parser");
BottleneckError = require("./BottleneckError");
RedisConnection = require("./RedisConnection");
IORedisConnection = require("./IORedisConnection");
RedisDatastore = class RedisDatastore {
    constructor(instance, storeOptions, storeInstanceOptions){
        this.instance = instance;
        this.storeOptions = storeOptions;
        this.originalId = this.instance.id;
        this.clientId = this.instance._randomIndex();
        parser.load(storeInstanceOptions, storeInstanceOptions, this);
        this.clients = {};
        this.capacityPriorityCounters = {};
        this.sharedConnection = this.connection != null;
        if (this.connection == null) this.connection = this.instance.datastore === "redis" ? new RedisConnection({
            Redis: this.Redis,
            clientOptions: this.clientOptions,
            Promise: this.Promise,
            Events: this.instance.Events
        }) : this.instance.datastore === "ioredis" ? new IORedisConnection({
            Redis: this.Redis,
            clientOptions: this.clientOptions,
            clusterNodes: this.clusterNodes,
            Promise: this.Promise,
            Events: this.instance.Events
        }) : void 0;
        this.instance.connection = this.connection;
        this.instance.datastore = this.connection.datastore;
        this.ready = this.connection.ready.then((clients)=>{
            this.clients = clients;
            return this.runScript("init", this.prepareInitSettings(this.clearDatastore));
        }).then(()=>{
            return this.connection.__addLimiter__(this.instance);
        }).then(()=>{
            return this.runScript("register_client", [
                this.instance.queued()
            ]);
        }).then(()=>{
            var base;
            if (typeof (base = this.heartbeat = setInterval(()=>{
                return this.runScript("heartbeat", []).catch((e)=>{
                    return this.instance.Events.trigger("error", e);
                });
            }, this.heartbeatInterval)).unref === "function") base.unref();
            return this.clients;
        });
    }
    __publish__(message) {
        var _this = this;
        return _asyncToGenerator(function*() {
            var client;
            var _ref = yield _this.ready;
            client = _ref.client;
            return client.publish(_this.instance.channel(), `message:${message.toString()}`);
        })();
    }
    onMessage(channel, message) {
        var _this2 = this;
        return _asyncToGenerator(function*() {
            var capacity, counter, data, drained, e, newCapacity, pos, priorityClient, rawCapacity, type;
            try {
                pos = message.indexOf(":");
                var _ref2 = [
                    message.slice(0, pos),
                    message.slice(pos + 1)
                ];
                type = _ref2[0];
                data = _ref2[1];
                if (type === "capacity") return yield _this2.instance._drainAll(data.length > 0 ? ~~data : void 0);
                else if (type === "capacity-priority") {
                    var _data$split = data.split(":");
                    var _data$split2 = _slicedToArray(_data$split, 3);
                    rawCapacity = _data$split2[0];
                    priorityClient = _data$split2[1];
                    counter = _data$split2[2];
                    capacity = rawCapacity.length > 0 ? ~~rawCapacity : void 0;
                    if (priorityClient === _this2.clientId) {
                        drained = yield _this2.instance._drainAll(capacity);
                        newCapacity = capacity != null ? capacity - (drained || 0) : "";
                        return yield _this2.clients.client.publish(_this2.instance.channel(), `capacity-priority:${newCapacity}::${counter}`);
                    } else if (priorityClient === "") {
                        clearTimeout(_this2.capacityPriorityCounters[counter]);
                        delete _this2.capacityPriorityCounters[counter];
                        return _this2.instance._drainAll(capacity);
                    } else return _this2.capacityPriorityCounters[counter] = setTimeout(/*#__PURE__*/ _asyncToGenerator(function*() {
                        var e;
                        try {
                            delete _this2.capacityPriorityCounters[counter];
                            yield _this2.runScript("blacklist_client", [
                                priorityClient
                            ]);
                            return yield _this2.instance._drainAll(capacity);
                        } catch (error) {
                            e = error;
                            return _this2.instance.Events.trigger("error", e);
                        }
                    }), 1000);
                } else if (type === "message") return _this2.instance.Events.trigger("message", data);
                else if (type === "blocked") return yield _this2.instance._dropAllQueued();
            } catch (error) {
                e = error;
                return _this2.instance.Events.trigger("error", e);
            }
        })();
    }
    __disconnect__(flush) {
        clearInterval(this.heartbeat);
        if (this.sharedConnection) return this.connection.__removeLimiter__(this.instance);
        else return this.connection.disconnect(flush);
    }
    runScript(name, args) {
        var _this3 = this;
        return _asyncToGenerator(function*() {
            if (!(name === "init" || name === "register_client")) yield _this3.ready;
            return new _this3.Promise((resolve, reject)=>{
                var all_args, arr;
                all_args = [
                    Date.now(),
                    _this3.clientId
                ].concat(args);
                _this3.instance.Events.trigger("debug", `Calling Redis script: ${name}.lua`, all_args);
                arr = _this3.connection.__scriptArgs__(name, _this3.originalId, all_args, function(err, replies) {
                    if (err != null) return reject(err);
                    return resolve(replies);
                });
                return _this3.connection.__scriptFn__(name)(...arr);
            }).catch((e)=>{
                if (e.message === "SETTINGS_KEY_NOT_FOUND") {
                    if (name === "heartbeat") return _this3.Promise.resolve();
                    else return _this3.runScript("init", _this3.prepareInitSettings(false)).then(()=>{
                        return _this3.runScript(name, args);
                    });
                } else if (e.message === "UNKNOWN_CLIENT") return _this3.runScript("register_client", [
                    _this3.instance.queued()
                ]).then(()=>{
                    return _this3.runScript(name, args);
                });
                else return _this3.Promise.reject(e);
            });
        })();
    }
    prepareArray(arr) {
        var i, len, results, x;
        results = [];
        for(i = 0, len = arr.length; i < len; i++){
            x = arr[i];
            results.push(x != null ? x.toString() : "");
        }
        return results;
    }
    prepareObject(obj) {
        var arr, k, v;
        arr = [];
        for(k in obj){
            v = obj[k];
            arr.push(k, v != null ? v.toString() : "");
        }
        return arr;
    }
    prepareInitSettings(clear) {
        var args;
        args = this.prepareObject(Object.assign({}, this.storeOptions, {
            id: this.originalId,
            version: this.instance.version,
            groupTimeout: this.timeout,
            clientTimeout: this.clientTimeout
        }));
        args.unshift(clear ? 1 : 0, this.instance.version);
        return args;
    }
    convertBool(b) {
        return !!b;
    }
    __updateSettings__(options) {
        var _this4 = this;
        return _asyncToGenerator(function*() {
            yield _this4.runScript("update_settings", _this4.prepareObject(options));
            return parser.overwrite(options, options, _this4.storeOptions);
        })();
    }
    __running__() {
        return this.runScript("running", []);
    }
    __queued__() {
        return this.runScript("queued", []);
    }
    __done__() {
        return this.runScript("done", []);
    }
    __groupCheck__() {
        var _this5 = this;
        return _asyncToGenerator(function*() {
            return _this5.convertBool((yield _this5.runScript("group_check", [])));
        })();
    }
    __incrementReservoir__(incr) {
        return this.runScript("increment_reservoir", [
            incr
        ]);
    }
    __currentReservoir__() {
        return this.runScript("current_reservoir", []);
    }
    __check__(weight) {
        var _this6 = this;
        return _asyncToGenerator(function*() {
            return _this6.convertBool((yield _this6.runScript("check", _this6.prepareArray([
                weight
            ]))));
        })();
    }
    __register__(index, weight, expiration) {
        var _this7 = this;
        return _asyncToGenerator(function*() {
            var reservoir, success, wait;
            var _ref4 = yield _this7.runScript("register", _this7.prepareArray([
                index,
                weight,
                expiration
            ]));
            var _ref5 = _slicedToArray(_ref4, 3);
            success = _ref5[0];
            wait = _ref5[1];
            reservoir = _ref5[2];
            return {
                success: _this7.convertBool(success),
                wait,
                reservoir
            };
        })();
    }
    __submit__(queueLength, weight) {
        var _this8 = this;
        return _asyncToGenerator(function*() {
            var blocked, e, maxConcurrent, overweight, reachedHWM, strategy;
            try {
                var _ref6 = yield _this8.runScript("submit", _this8.prepareArray([
                    queueLength,
                    weight
                ]));
                var _ref7 = _slicedToArray(_ref6, 3);
                reachedHWM = _ref7[0];
                blocked = _ref7[1];
                strategy = _ref7[2];
                return {
                    reachedHWM: _this8.convertBool(reachedHWM),
                    blocked: _this8.convertBool(blocked),
                    strategy
                };
            } catch (error) {
                e = error;
                if (e.message.indexOf("OVERWEIGHT") === 0) {
                    var _e$message$split = e.message.split(":");
                    var _e$message$split2 = _slicedToArray(_e$message$split, 3);
                    overweight = _e$message$split2[0];
                    weight = _e$message$split2[1];
                    maxConcurrent = _e$message$split2[2];
                    throw new BottleneckError(`Impossible to add a job having a weight of ${weight} to a limiter having a maxConcurrent setting of ${maxConcurrent}`);
                } else throw e;
            }
        })();
    }
    __free__(index, weight) {
        var _this9 = this;
        return _asyncToGenerator(function*() {
            var running;
            running = yield _this9.runScript("free", _this9.prepareArray([
                index
            ]));
            return {
                running
            };
        })();
    }
};
module.exports = RedisDatastore;

},{"./parser":"kbuWd","./BottleneckError":"fek3N","./RedisConnection":"iKgr8","./IORedisConnection":"bTvPT"}],"iKgr8":[function(require,module,exports) {
"use strict";
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
var Events, RedisConnection, Scripts, parser;
parser = require("./parser");
Events = require("./Events");
Scripts = require("./Scripts");
RedisConnection = (function() {
    class RedisConnection {
        constructor(options = {}){
            parser.load(options, this.defaults, this);
            if (this.Redis == null) this.Redis = eval("require")("redis"); // Obfuscated or else Webpack/Angular will try to inline the optional redis module. To override this behavior: pass the redis module to Bottleneck as the 'Redis' option.
            if (this.Events == null) this.Events = new Events(this);
            this.terminated = false;
            if (this.client == null) this.client = this.Redis.createClient(this.clientOptions);
            this.subscriber = this.client.duplicate();
            this.limiters = {};
            this.shas = {};
            this.ready = this.Promise.all([
                this._setup(this.client, false),
                this._setup(this.subscriber, true)
            ]).then(()=>{
                return this._loadScripts();
            }).then(()=>{
                return {
                    client: this.client,
                    subscriber: this.subscriber
                };
            });
        }
        _setup(client, sub) {
            client.setMaxListeners(0);
            return new this.Promise((resolve, reject)=>{
                client.on("error", (e)=>{
                    return this.Events.trigger("error", e);
                });
                if (sub) client.on("message", (channel, message)=>{
                    var ref;
                    return (ref = this.limiters[channel]) != null ? ref._store.onMessage(channel, message) : void 0;
                });
                if (client.ready) return resolve();
                else return client.once("ready", resolve);
            });
        }
        _loadScript(name) {
            return new this.Promise((resolve, reject)=>{
                var payload;
                payload = Scripts.payload(name);
                return this.client.multi([
                    [
                        "script",
                        "load",
                        payload
                    ]
                ]).exec((err, replies)=>{
                    if (err != null) return reject(err);
                    this.shas[name] = replies[0];
                    return resolve(replies[0]);
                });
            });
        }
        _loadScripts() {
            return this.Promise.all(Scripts.names.map((k)=>{
                return this._loadScript(k);
            }));
        }
        __runCommand__(cmd) {
            var _this = this;
            return _asyncToGenerator(function*() {
                yield _this.ready;
                return new _this.Promise((resolve, reject)=>{
                    return _this.client.multi([
                        cmd
                    ]).exec_atomic(function(err, replies) {
                        if (err != null) return reject(err);
                        else return resolve(replies[0]);
                    });
                });
            })();
        }
        __addLimiter__(instance) {
            return this.Promise.all([
                instance.channel(),
                instance.channel_client()
            ].map((channel)=>{
                return new this.Promise((resolve, reject)=>{
                    var handler;
                    handler = (chan)=>{
                        if (chan === channel) {
                            this.subscriber.removeListener("subscribe", handler);
                            this.limiters[channel] = instance;
                            return resolve();
                        }
                    };
                    this.subscriber.on("subscribe", handler);
                    return this.subscriber.subscribe(channel);
                });
            }));
        }
        __removeLimiter__(instance) {
            var _this2 = this;
            return this.Promise.all([
                instance.channel(),
                instance.channel_client()
            ].map(/*#__PURE__*/ function() {
                var _ref = _asyncToGenerator(function*(channel) {
                    if (!_this2.terminated) yield new _this2.Promise((resolve, reject)=>{
                        return _this2.subscriber.unsubscribe(channel, function(err, chan) {
                            if (err != null) return reject(err);
                            if (chan === channel) return resolve();
                        });
                    });
                    return delete _this2.limiters[channel];
                });
                return function(_x) {
                    return _ref.apply(this, arguments);
                };
            }()));
        }
        __scriptArgs__(name, id, args, cb) {
            var keys;
            keys = Scripts.keys(name, id);
            return [
                this.shas[name],
                keys.length
            ].concat(keys, args, cb);
        }
        __scriptFn__(name) {
            return this.client.evalsha.bind(this.client);
        }
        disconnect(flush = true) {
            var i, k, len, ref;
            ref = Object.keys(this.limiters);
            for(i = 0, len = ref.length; i < len; i++){
                k = ref[i];
                clearInterval(this.limiters[k]._store.heartbeat);
            }
            this.limiters = {};
            this.terminated = true;
            this.client.end(flush);
            this.subscriber.end(flush);
            return this.Promise.resolve();
        }
    }
    RedisConnection.prototype.datastore = "redis";
    RedisConnection.prototype.defaults = {
        Redis: null,
        clientOptions: {},
        client: null,
        Promise: Promise,
        Events: null
    };
    return RedisConnection;
}).call(void 0);
module.exports = RedisConnection;

},{"./parser":"kbuWd","./Events":"jQoPj","./Scripts":"4NPha"}],"4NPha":[function(require,module,exports) {
"use strict";
var headers, lua, templates;
lua = require("./lua.json");
headers = {
    refs: lua["refs.lua"],
    validate_keys: lua["validate_keys.lua"],
    validate_client: lua["validate_client.lua"],
    refresh_expiration: lua["refresh_expiration.lua"],
    process_tick: lua["process_tick.lua"],
    conditions_check: lua["conditions_check.lua"],
    get_time: lua["get_time.lua"]
};
exports.allKeys = function(id) {
    return [
        /*
  HASH
  */ `b_${id}_settings`,
        /*
  HASH
  job index -> weight
  */ `b_${id}_job_weights`,
        /*
  ZSET
  job index -> expiration
  */ `b_${id}_job_expirations`,
        /*
  HASH
  job index -> client
  */ `b_${id}_job_clients`,
        /*
  ZSET
  client -> sum running
  */ `b_${id}_client_running`,
        /*
  HASH
  client -> num queued
  */ `b_${id}_client_num_queued`,
        /*
  ZSET
  client -> last job registered
  */ `b_${id}_client_last_registered`,
        /*
  ZSET
  client -> last seen
  */ `b_${id}_client_last_seen`
    ];
};
templates = {
    init: {
        keys: exports.allKeys,
        headers: [
            "process_tick"
        ],
        refresh_expiration: true,
        code: lua["init.lua"]
    },
    group_check: {
        keys: exports.allKeys,
        headers: [],
        refresh_expiration: false,
        code: lua["group_check.lua"]
    },
    register_client: {
        keys: exports.allKeys,
        headers: [
            "validate_keys"
        ],
        refresh_expiration: false,
        code: lua["register_client.lua"]
    },
    blacklist_client: {
        keys: exports.allKeys,
        headers: [
            "validate_keys",
            "validate_client"
        ],
        refresh_expiration: false,
        code: lua["blacklist_client.lua"]
    },
    heartbeat: {
        keys: exports.allKeys,
        headers: [
            "validate_keys",
            "validate_client",
            "process_tick"
        ],
        refresh_expiration: false,
        code: lua["heartbeat.lua"]
    },
    update_settings: {
        keys: exports.allKeys,
        headers: [
            "validate_keys",
            "validate_client",
            "process_tick"
        ],
        refresh_expiration: true,
        code: lua["update_settings.lua"]
    },
    running: {
        keys: exports.allKeys,
        headers: [
            "validate_keys",
            "validate_client",
            "process_tick"
        ],
        refresh_expiration: false,
        code: lua["running.lua"]
    },
    queued: {
        keys: exports.allKeys,
        headers: [
            "validate_keys",
            "validate_client"
        ],
        refresh_expiration: false,
        code: lua["queued.lua"]
    },
    done: {
        keys: exports.allKeys,
        headers: [
            "validate_keys",
            "validate_client",
            "process_tick"
        ],
        refresh_expiration: false,
        code: lua["done.lua"]
    },
    check: {
        keys: exports.allKeys,
        headers: [
            "validate_keys",
            "validate_client",
            "process_tick",
            "conditions_check"
        ],
        refresh_expiration: false,
        code: lua["check.lua"]
    },
    submit: {
        keys: exports.allKeys,
        headers: [
            "validate_keys",
            "validate_client",
            "process_tick",
            "conditions_check"
        ],
        refresh_expiration: true,
        code: lua["submit.lua"]
    },
    register: {
        keys: exports.allKeys,
        headers: [
            "validate_keys",
            "validate_client",
            "process_tick",
            "conditions_check"
        ],
        refresh_expiration: true,
        code: lua["register.lua"]
    },
    free: {
        keys: exports.allKeys,
        headers: [
            "validate_keys",
            "validate_client",
            "process_tick"
        ],
        refresh_expiration: true,
        code: lua["free.lua"]
    },
    current_reservoir: {
        keys: exports.allKeys,
        headers: [
            "validate_keys",
            "validate_client",
            "process_tick"
        ],
        refresh_expiration: false,
        code: lua["current_reservoir.lua"]
    },
    increment_reservoir: {
        keys: exports.allKeys,
        headers: [
            "validate_keys",
            "validate_client",
            "process_tick"
        ],
        refresh_expiration: true,
        code: lua["increment_reservoir.lua"]
    }
};
exports.names = Object.keys(templates);
exports.keys = function(name, id) {
    return templates[name].keys(id);
};
exports.payload = function(name) {
    var template;
    template = templates[name];
    return Array.prototype.concat(headers.refs, template.headers.map(function(h) {
        return headers[h];
    }), template.refresh_expiration ? headers.refresh_expiration : "", template.code).join("\n");
};

},{"./lua.json":"d3QeV"}],"d3QeV":[function(require,module,exports) {
module.exports = JSON.parse("{\"blacklist_client.lua\":\"local blacklist = ARGV[num_static_argv + 1]\\n\\nif redis.call('zscore', client_last_seen_key, blacklist) then\\n  redis.call('zadd', client_last_seen_key, 0, blacklist)\\nend\\n\\n\\nreturn {}\\n\",\"check.lua\":\"local weight = tonumber(ARGV[num_static_argv + 1])\\n\\nlocal capacity = process_tick(now, false)['capacity']\\nlocal nextRequest = tonumber(redis.call('hget', settings_key, 'nextRequest'))\\n\\nreturn conditions_check(capacity, weight) and nextRequest - now <= 0\\n\",\"conditions_check.lua\":\"local conditions_check = function (capacity, weight)\\n  return capacity == nil or weight <= capacity\\nend\\n\",\"current_reservoir.lua\":\"return process_tick(now, false)['reservoir']\\n\",\"done.lua\":\"process_tick(now, false)\\n\\nreturn tonumber(redis.call('hget', settings_key, 'done'))\\n\",\"free.lua\":\"local index = ARGV[num_static_argv + 1]\\n\\nredis.call('zadd', job_expirations_key, 0, index)\\n\\nreturn process_tick(now, false)['running']\\n\",\"get_time.lua\":\"redis.replicate_commands()\\n\\nlocal get_time = function ()\\n  local time = redis.call('time')\\n\\n  return tonumber(time[1]..string.sub(time[2], 1, 3))\\nend\\n\",\"group_check.lua\":\"return not (redis.call('exists', settings_key) == 1)\\n\",\"heartbeat.lua\":\"process_tick(now, true)\\n\",\"increment_reservoir.lua\":\"local incr = tonumber(ARGV[num_static_argv + 1])\\n\\nredis.call('hincrby', settings_key, 'reservoir', incr)\\n\\nlocal reservoir = process_tick(now, true)['reservoir']\\n\\nlocal groupTimeout = tonumber(redis.call('hget', settings_key, 'groupTimeout'))\\nrefresh_expiration(0, 0, groupTimeout)\\n\\nreturn reservoir\\n\",\"init.lua\":\"local clear = tonumber(ARGV[num_static_argv + 1])\\nlocal limiter_version = ARGV[num_static_argv + 2]\\nlocal num_local_argv = num_static_argv + 2\\n\\nif clear == 1 then\\n  redis.call('del', unpack(KEYS))\\nend\\n\\nif redis.call('exists', settings_key) == 0 then\\n  -- Create\\n  local args = {'hmset', settings_key}\\n\\n  for i = num_local_argv + 1, #ARGV do\\n    table.insert(args, ARGV[i])\\n  end\\n\\n  redis.call(unpack(args))\\n  redis.call('hmset', settings_key,\\n    'nextRequest', now,\\n    'lastReservoirRefresh', now,\\n    'lastReservoirIncrease', now,\\n    'running', 0,\\n    'done', 0,\\n    'unblockTime', 0,\\n    'capacityPriorityCounter', 0\\n  )\\n\\nelse\\n  -- Apply migrations\\n  local settings = redis.call('hmget', settings_key,\\n    'id',\\n    'version'\\n  )\\n  local id = settings[1]\\n  local current_version = settings[2]\\n\\n  if current_version ~= limiter_version then\\n    local version_digits = {}\\n    for k, v in string.gmatch(current_version, \\\"([^.]+)\\\") do\\n      table.insert(version_digits, tonumber(k))\\n    end\\n\\n    -- 2.10.0\\n    if version_digits[2] < 10 then\\n      redis.call('hsetnx', settings_key, 'reservoirRefreshInterval', '')\\n      redis.call('hsetnx', settings_key, 'reservoirRefreshAmount', '')\\n      redis.call('hsetnx', settings_key, 'lastReservoirRefresh', '')\\n      redis.call('hsetnx', settings_key, 'done', 0)\\n      redis.call('hset', settings_key, 'version', '2.10.0')\\n    end\\n\\n    -- 2.11.1\\n    if version_digits[2] < 11 or (version_digits[2] == 11 and version_digits[3] < 1) then\\n      if redis.call('hstrlen', settings_key, 'lastReservoirRefresh') == 0 then\\n        redis.call('hmset', settings_key,\\n          'lastReservoirRefresh', now,\\n          'version', '2.11.1'\\n        )\\n      end\\n    end\\n\\n    -- 2.14.0\\n    if version_digits[2] < 14 then\\n      local old_running_key = 'b_'..id..'_running'\\n      local old_executing_key = 'b_'..id..'_executing'\\n\\n      if redis.call('exists', old_running_key) == 1 then\\n        redis.call('rename', old_running_key, job_weights_key)\\n      end\\n      if redis.call('exists', old_executing_key) == 1 then\\n        redis.call('rename', old_executing_key, job_expirations_key)\\n      end\\n      redis.call('hset', settings_key, 'version', '2.14.0')\\n    end\\n\\n    -- 2.15.2\\n    if version_digits[2] < 15 or (version_digits[2] == 15 and version_digits[3] < 2) then\\n      redis.call('hsetnx', settings_key, 'capacityPriorityCounter', 0)\\n      redis.call('hset', settings_key, 'version', '2.15.2')\\n    end\\n\\n    -- 2.17.0\\n    if version_digits[2] < 17 then\\n      redis.call('hsetnx', settings_key, 'clientTimeout', 10000)\\n      redis.call('hset', settings_key, 'version', '2.17.0')\\n    end\\n\\n    -- 2.18.0\\n    if version_digits[2] < 18 then\\n      redis.call('hsetnx', settings_key, 'reservoirIncreaseInterval', '')\\n      redis.call('hsetnx', settings_key, 'reservoirIncreaseAmount', '')\\n      redis.call('hsetnx', settings_key, 'reservoirIncreaseMaximum', '')\\n      redis.call('hsetnx', settings_key, 'lastReservoirIncrease', now)\\n      redis.call('hset', settings_key, 'version', '2.18.0')\\n    end\\n\\n  end\\n\\n  process_tick(now, false)\\nend\\n\\nlocal groupTimeout = tonumber(redis.call('hget', settings_key, 'groupTimeout'))\\nrefresh_expiration(0, 0, groupTimeout)\\n\\nreturn {}\\n\",\"process_tick.lua\":\"local process_tick = function (now, always_publish)\\n\\n  local compute_capacity = function (maxConcurrent, running, reservoir)\\n    if maxConcurrent ~= nil and reservoir ~= nil then\\n      return math.min((maxConcurrent - running), reservoir)\\n    elseif maxConcurrent ~= nil then\\n      return maxConcurrent - running\\n    elseif reservoir ~= nil then\\n      return reservoir\\n    else\\n      return nil\\n    end\\n  end\\n\\n  local settings = redis.call('hmget', settings_key,\\n    'id',\\n    'maxConcurrent',\\n    'running',\\n    'reservoir',\\n    'reservoirRefreshInterval',\\n    'reservoirRefreshAmount',\\n    'lastReservoirRefresh',\\n    'reservoirIncreaseInterval',\\n    'reservoirIncreaseAmount',\\n    'reservoirIncreaseMaximum',\\n    'lastReservoirIncrease',\\n    'capacityPriorityCounter',\\n    'clientTimeout'\\n  )\\n  local id = settings[1]\\n  local maxConcurrent = tonumber(settings[2])\\n  local running = tonumber(settings[3])\\n  local reservoir = tonumber(settings[4])\\n  local reservoirRefreshInterval = tonumber(settings[5])\\n  local reservoirRefreshAmount = tonumber(settings[6])\\n  local lastReservoirRefresh = tonumber(settings[7])\\n  local reservoirIncreaseInterval = tonumber(settings[8])\\n  local reservoirIncreaseAmount = tonumber(settings[9])\\n  local reservoirIncreaseMaximum = tonumber(settings[10])\\n  local lastReservoirIncrease = tonumber(settings[11])\\n  local capacityPriorityCounter = tonumber(settings[12])\\n  local clientTimeout = tonumber(settings[13])\\n\\n  local initial_capacity = compute_capacity(maxConcurrent, running, reservoir)\\n\\n  --\\n  -- Process 'running' changes\\n  --\\n  local expired = redis.call('zrangebyscore', job_expirations_key, '-inf', '('..now)\\n\\n  if #expired > 0 then\\n    redis.call('zremrangebyscore', job_expirations_key, '-inf', '('..now)\\n\\n    local flush_batch = function (batch, acc)\\n      local weights = redis.call('hmget', job_weights_key, unpack(batch))\\n                      redis.call('hdel',  job_weights_key, unpack(batch))\\n      local clients = redis.call('hmget', job_clients_key, unpack(batch))\\n                      redis.call('hdel',  job_clients_key, unpack(batch))\\n\\n      -- Calculate sum of removed weights\\n      for i = 1, #weights do\\n        acc['total'] = acc['total'] + (tonumber(weights[i]) or 0)\\n      end\\n\\n      -- Calculate sum of removed weights by client\\n      local client_weights = {}\\n      for i = 1, #clients do\\n        local removed = tonumber(weights[i]) or 0\\n        if removed > 0 then\\n          acc['client_weights'][clients[i]] = (acc['client_weights'][clients[i]] or 0) + removed\\n        end\\n      end\\n    end\\n\\n    local acc = {\\n      ['total'] = 0,\\n      ['client_weights'] = {}\\n    }\\n    local batch_size = 1000\\n\\n    -- Compute changes to Zsets and apply changes to Hashes\\n    for i = 1, #expired, batch_size do\\n      local batch = {}\\n      for j = i, math.min(i + batch_size - 1, #expired) do\\n        table.insert(batch, expired[j])\\n      end\\n\\n      flush_batch(batch, acc)\\n    end\\n\\n    -- Apply changes to Zsets\\n    if acc['total'] > 0 then\\n      redis.call('hincrby', settings_key, 'done', acc['total'])\\n      running = tonumber(redis.call('hincrby', settings_key, 'running', -acc['total']))\\n    end\\n\\n    for client, weight in pairs(acc['client_weights']) do\\n      redis.call('zincrby', client_running_key, -weight, client)\\n    end\\n  end\\n\\n  --\\n  -- Process 'reservoir' changes\\n  --\\n  local reservoirRefreshActive = reservoirRefreshInterval ~= nil and reservoirRefreshAmount ~= nil\\n  if reservoirRefreshActive and now >= lastReservoirRefresh + reservoirRefreshInterval then\\n    reservoir = reservoirRefreshAmount\\n    redis.call('hmset', settings_key,\\n      'reservoir', reservoir,\\n      'lastReservoirRefresh', now\\n    )\\n  end\\n\\n  local reservoirIncreaseActive = reservoirIncreaseInterval ~= nil and reservoirIncreaseAmount ~= nil\\n  if reservoirIncreaseActive and now >= lastReservoirIncrease + reservoirIncreaseInterval then\\n    local num_intervals = math.floor((now - lastReservoirIncrease) / reservoirIncreaseInterval)\\n    local incr = reservoirIncreaseAmount * num_intervals\\n    if reservoirIncreaseMaximum ~= nil then\\n      incr = math.min(incr, reservoirIncreaseMaximum - (reservoir or 0))\\n    end\\n    if incr > 0 then\\n      reservoir = (reservoir or 0) + incr\\n    end\\n    redis.call('hmset', settings_key,\\n      'reservoir', reservoir,\\n      'lastReservoirIncrease', lastReservoirIncrease + (num_intervals * reservoirIncreaseInterval)\\n    )\\n  end\\n\\n  --\\n  -- Clear unresponsive clients\\n  --\\n  local unresponsive = redis.call('zrangebyscore', client_last_seen_key, '-inf', (now - clientTimeout))\\n  local unresponsive_lookup = {}\\n  local terminated_clients = {}\\n  for i = 1, #unresponsive do\\n    unresponsive_lookup[unresponsive[i]] = true\\n    if tonumber(redis.call('zscore', client_running_key, unresponsive[i])) == 0 then\\n      table.insert(terminated_clients, unresponsive[i])\\n    end\\n  end\\n  if #terminated_clients > 0 then\\n    redis.call('zrem', client_running_key,         unpack(terminated_clients))\\n    redis.call('hdel', client_num_queued_key,      unpack(terminated_clients))\\n    redis.call('zrem', client_last_registered_key, unpack(terminated_clients))\\n    redis.call('zrem', client_last_seen_key,       unpack(terminated_clients))\\n  end\\n\\n  --\\n  -- Broadcast capacity changes\\n  --\\n  local final_capacity = compute_capacity(maxConcurrent, running, reservoir)\\n\\n  if always_publish or (initial_capacity ~= nil and final_capacity == nil) then\\n    -- always_publish or was not unlimited, now unlimited\\n    redis.call('publish', 'b_'..id, 'capacity:'..(final_capacity or ''))\\n\\n  elseif initial_capacity ~= nil and final_capacity ~= nil and final_capacity > initial_capacity then\\n    -- capacity was increased\\n    -- send the capacity message to the limiter having the lowest number of running jobs\\n    -- the tiebreaker is the limiter having not registered a job in the longest time\\n\\n    local lowest_concurrency_value = nil\\n    local lowest_concurrency_clients = {}\\n    local lowest_concurrency_last_registered = {}\\n    local client_concurrencies = redis.call('zrange', client_running_key, 0, -1, 'withscores')\\n\\n    for i = 1, #client_concurrencies, 2 do\\n      local client = client_concurrencies[i]\\n      local concurrency = tonumber(client_concurrencies[i+1])\\n\\n      if (\\n        lowest_concurrency_value == nil or lowest_concurrency_value == concurrency\\n      ) and (\\n        not unresponsive_lookup[client]\\n      ) and (\\n        tonumber(redis.call('hget', client_num_queued_key, client)) > 0\\n      ) then\\n        lowest_concurrency_value = concurrency\\n        table.insert(lowest_concurrency_clients, client)\\n        local last_registered = tonumber(redis.call('zscore', client_last_registered_key, client))\\n        table.insert(lowest_concurrency_last_registered, last_registered)\\n      end\\n    end\\n\\n    if #lowest_concurrency_clients > 0 then\\n      local position = 1\\n      local earliest = lowest_concurrency_last_registered[1]\\n\\n      for i,v in ipairs(lowest_concurrency_last_registered) do\\n        if v < earliest then\\n          position = i\\n          earliest = v\\n        end\\n      end\\n\\n      local next_client = lowest_concurrency_clients[position]\\n      redis.call('publish', 'b_'..id,\\n        'capacity-priority:'..(final_capacity or '')..\\n        ':'..next_client..\\n        ':'..capacityPriorityCounter\\n      )\\n      redis.call('hincrby', settings_key, 'capacityPriorityCounter', '1')\\n    else\\n      redis.call('publish', 'b_'..id, 'capacity:'..(final_capacity or ''))\\n    end\\n  end\\n\\n  return {\\n    ['capacity'] = final_capacity,\\n    ['running'] = running,\\n    ['reservoir'] = reservoir\\n  }\\nend\\n\",\"queued.lua\":\"local clientTimeout = tonumber(redis.call('hget', settings_key, 'clientTimeout'))\\nlocal valid_clients = redis.call('zrangebyscore', client_last_seen_key, (now - clientTimeout), 'inf')\\nlocal client_queued = redis.call('hmget', client_num_queued_key, unpack(valid_clients))\\n\\nlocal sum = 0\\nfor i = 1, #client_queued do\\n  sum = sum + tonumber(client_queued[i])\\nend\\n\\nreturn sum\\n\",\"refresh_expiration.lua\":\"local refresh_expiration = function (now, nextRequest, groupTimeout)\\n\\n  if groupTimeout ~= nil then\\n    local ttl = (nextRequest + groupTimeout) - now\\n\\n    for i = 1, #KEYS do\\n      redis.call('pexpire', KEYS[i], ttl)\\n    end\\n  end\\n\\nend\\n\",\"refs.lua\":\"local settings_key = KEYS[1]\\nlocal job_weights_key = KEYS[2]\\nlocal job_expirations_key = KEYS[3]\\nlocal job_clients_key = KEYS[4]\\nlocal client_running_key = KEYS[5]\\nlocal client_num_queued_key = KEYS[6]\\nlocal client_last_registered_key = KEYS[7]\\nlocal client_last_seen_key = KEYS[8]\\n\\nlocal now = tonumber(ARGV[1])\\nlocal client = ARGV[2]\\n\\nlocal num_static_argv = 2\\n\",\"register.lua\":\"local index = ARGV[num_static_argv + 1]\\nlocal weight = tonumber(ARGV[num_static_argv + 2])\\nlocal expiration = tonumber(ARGV[num_static_argv + 3])\\n\\nlocal state = process_tick(now, false)\\nlocal capacity = state['capacity']\\nlocal reservoir = state['reservoir']\\n\\nlocal settings = redis.call('hmget', settings_key,\\n  'nextRequest',\\n  'minTime',\\n  'groupTimeout'\\n)\\nlocal nextRequest = tonumber(settings[1])\\nlocal minTime = tonumber(settings[2])\\nlocal groupTimeout = tonumber(settings[3])\\n\\nif conditions_check(capacity, weight) then\\n\\n  redis.call('hincrby', settings_key, 'running', weight)\\n  redis.call('hset', job_weights_key, index, weight)\\n  if expiration ~= nil then\\n    redis.call('zadd', job_expirations_key, now + expiration, index)\\n  end\\n  redis.call('hset', job_clients_key, index, client)\\n  redis.call('zincrby', client_running_key, weight, client)\\n  redis.call('hincrby', client_num_queued_key, client, -1)\\n  redis.call('zadd', client_last_registered_key, now, client)\\n\\n  local wait = math.max(nextRequest - now, 0)\\n  local newNextRequest = now + wait + minTime\\n\\n  if reservoir == nil then\\n    redis.call('hset', settings_key,\\n      'nextRequest', newNextRequest\\n    )\\n  else\\n    reservoir = reservoir - weight\\n    redis.call('hmset', settings_key,\\n      'reservoir', reservoir,\\n      'nextRequest', newNextRequest\\n    )\\n  end\\n\\n  refresh_expiration(now, newNextRequest, groupTimeout)\\n\\n  return {true, wait, reservoir}\\n\\nelse\\n  return {false}\\nend\\n\",\"register_client.lua\":\"local queued = tonumber(ARGV[num_static_argv + 1])\\n\\n-- Could have been re-registered concurrently\\nif not redis.call('zscore', client_last_seen_key, client) then\\n  redis.call('zadd', client_running_key, 0, client)\\n  redis.call('hset', client_num_queued_key, client, queued)\\n  redis.call('zadd', client_last_registered_key, 0, client)\\nend\\n\\nredis.call('zadd', client_last_seen_key, now, client)\\n\\nreturn {}\\n\",\"running.lua\":\"return process_tick(now, false)['running']\\n\",\"submit.lua\":\"local queueLength = tonumber(ARGV[num_static_argv + 1])\\nlocal weight = tonumber(ARGV[num_static_argv + 2])\\n\\nlocal capacity = process_tick(now, false)['capacity']\\n\\nlocal settings = redis.call('hmget', settings_key,\\n  'id',\\n  'maxConcurrent',\\n  'highWater',\\n  'nextRequest',\\n  'strategy',\\n  'unblockTime',\\n  'penalty',\\n  'minTime',\\n  'groupTimeout'\\n)\\nlocal id = settings[1]\\nlocal maxConcurrent = tonumber(settings[2])\\nlocal highWater = tonumber(settings[3])\\nlocal nextRequest = tonumber(settings[4])\\nlocal strategy = tonumber(settings[5])\\nlocal unblockTime = tonumber(settings[6])\\nlocal penalty = tonumber(settings[7])\\nlocal minTime = tonumber(settings[8])\\nlocal groupTimeout = tonumber(settings[9])\\n\\nif maxConcurrent ~= nil and weight > maxConcurrent then\\n  return redis.error_reply('OVERWEIGHT:'..weight..':'..maxConcurrent)\\nend\\n\\nlocal reachedHWM = (highWater ~= nil and queueLength == highWater\\n  and not (\\n    conditions_check(capacity, weight)\\n    and nextRequest - now <= 0\\n  )\\n)\\n\\nlocal blocked = strategy == 3 and (reachedHWM or unblockTime >= now)\\n\\nif blocked then\\n  local computedPenalty = penalty\\n  if computedPenalty == nil then\\n    if minTime == 0 then\\n      computedPenalty = 5000\\n    else\\n      computedPenalty = 15 * minTime\\n    end\\n  end\\n\\n  local newNextRequest = now + computedPenalty + minTime\\n\\n  redis.call('hmset', settings_key,\\n    'unblockTime', now + computedPenalty,\\n    'nextRequest', newNextRequest\\n  )\\n\\n  local clients_queued_reset = redis.call('hkeys', client_num_queued_key)\\n  local queued_reset = {}\\n  for i = 1, #clients_queued_reset do\\n    table.insert(queued_reset, clients_queued_reset[i])\\n    table.insert(queued_reset, 0)\\n  end\\n  redis.call('hmset', client_num_queued_key, unpack(queued_reset))\\n\\n  redis.call('publish', 'b_'..id, 'blocked:')\\n\\n  refresh_expiration(now, newNextRequest, groupTimeout)\\nend\\n\\nif not blocked and not reachedHWM then\\n  redis.call('hincrby', client_num_queued_key, client, 1)\\nend\\n\\nreturn {reachedHWM, blocked, strategy}\\n\",\"update_settings.lua\":\"local args = {'hmset', settings_key}\\n\\nfor i = num_static_argv + 1, #ARGV do\\n  table.insert(args, ARGV[i])\\nend\\n\\nredis.call(unpack(args))\\n\\nprocess_tick(now, true)\\n\\nlocal groupTimeout = tonumber(redis.call('hget', settings_key, 'groupTimeout'))\\nrefresh_expiration(0, 0, groupTimeout)\\n\\nreturn {}\\n\",\"validate_client.lua\":\"if not redis.call('zscore', client_last_seen_key, client) then\\n  return redis.error_reply('UNKNOWN_CLIENT')\\nend\\n\\nredis.call('zadd', client_last_seen_key, now, client)\\n\",\"validate_keys.lua\":\"if not (redis.call('exists', settings_key) == 1) then\\n  return redis.error_reply('SETTINGS_KEY_NOT_FOUND')\\nend\\n\"}");

},{}],"bTvPT":[function(require,module,exports) {
"use strict";
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
var Events, IORedisConnection, Scripts, parser;
parser = require("./parser");
Events = require("./Events");
Scripts = require("./Scripts");
IORedisConnection = (function() {
    class IORedisConnection {
        constructor(options = {}){
            parser.load(options, this.defaults, this);
            if (this.Redis == null) this.Redis = eval("require")("ioredis"); // Obfuscated or else Webpack/Angular will try to inline the optional ioredis module. To override this behavior: pass the ioredis module to Bottleneck as the 'Redis' option.
            if (this.Events == null) this.Events = new Events(this);
            this.terminated = false;
            if (this.clusterNodes != null) {
                this.client = new this.Redis.Cluster(this.clusterNodes, this.clientOptions);
                this.subscriber = new this.Redis.Cluster(this.clusterNodes, this.clientOptions);
            } else if (this.client != null && this.client.duplicate == null) this.subscriber = new this.Redis.Cluster(this.client.startupNodes, this.client.options);
            else {
                if (this.client == null) this.client = new this.Redis(this.clientOptions);
                this.subscriber = this.client.duplicate();
            }
            this.limiters = {};
            this.ready = this.Promise.all([
                this._setup(this.client, false),
                this._setup(this.subscriber, true)
            ]).then(()=>{
                this._loadScripts();
                return {
                    client: this.client,
                    subscriber: this.subscriber
                };
            });
        }
        _setup(client, sub) {
            client.setMaxListeners(0);
            return new this.Promise((resolve, reject)=>{
                client.on("error", (e)=>{
                    return this.Events.trigger("error", e);
                });
                if (sub) client.on("message", (channel, message)=>{
                    var ref;
                    return (ref = this.limiters[channel]) != null ? ref._store.onMessage(channel, message) : void 0;
                });
                if (client.status === "ready") return resolve();
                else return client.once("ready", resolve);
            });
        }
        _loadScripts() {
            return Scripts.names.forEach((name)=>{
                return this.client.defineCommand(name, {
                    lua: Scripts.payload(name)
                });
            });
        }
        __runCommand__(cmd) {
            var _this = this;
            return _asyncToGenerator(function*() {
                var _, deleted;
                yield _this.ready;
                var _ref = yield _this.client.pipeline([
                    cmd
                ]).exec();
                var _ref2 = _slicedToArray(_ref, 1);
                var _ref2$ = _slicedToArray(_ref2[0], 2);
                _ = _ref2$[0];
                deleted = _ref2$[1];
                return deleted;
            })();
        }
        __addLimiter__(instance) {
            return this.Promise.all([
                instance.channel(),
                instance.channel_client()
            ].map((channel)=>{
                return new this.Promise((resolve, reject)=>{
                    return this.subscriber.subscribe(channel, ()=>{
                        this.limiters[channel] = instance;
                        return resolve();
                    });
                });
            }));
        }
        __removeLimiter__(instance) {
            var _this2 = this;
            return [
                instance.channel(),
                instance.channel_client()
            ].forEach(/*#__PURE__*/ function() {
                var _ref3 = _asyncToGenerator(function*(channel) {
                    if (!_this2.terminated) yield _this2.subscriber.unsubscribe(channel);
                    return delete _this2.limiters[channel];
                });
                return function(_x) {
                    return _ref3.apply(this, arguments);
                };
            }());
        }
        __scriptArgs__(name, id, args, cb) {
            var keys;
            keys = Scripts.keys(name, id);
            return [
                keys.length
            ].concat(keys, args, cb);
        }
        __scriptFn__(name) {
            return this.client[name].bind(this.client);
        }
        disconnect(flush = true) {
            var i, k, len, ref;
            ref = Object.keys(this.limiters);
            for(i = 0, len = ref.length; i < len; i++){
                k = ref[i];
                clearInterval(this.limiters[k]._store.heartbeat);
            }
            this.limiters = {};
            this.terminated = true;
            if (flush) return this.Promise.all([
                this.client.quit(),
                this.subscriber.quit()
            ]);
            else {
                this.client.disconnect();
                this.subscriber.disconnect();
                return this.Promise.resolve();
            }
        }
    }
    IORedisConnection.prototype.datastore = "ioredis";
    IORedisConnection.prototype.defaults = {
        Redis: null,
        clientOptions: {},
        clusterNodes: null,
        client: null,
        Promise: Promise,
        Events: null
    };
    return IORedisConnection;
}).call(void 0);
module.exports = IORedisConnection;

},{"./parser":"kbuWd","./Events":"jQoPj","./Scripts":"4NPha"}],"kcOJ1":[function(require,module,exports) {
"use strict";
var BottleneckError, States;
BottleneckError = require("./BottleneckError");
States = class States {
    constructor(status1){
        this.status = status1;
        this._jobs = {};
        this.counts = this.status.map(function() {
            return 0;
        });
    }
    next(id) {
        var current, next;
        current = this._jobs[id];
        next = current + 1;
        if (current != null && next < this.status.length) {
            this.counts[current]--;
            this.counts[next]++;
            return this._jobs[id]++;
        } else if (current != null) {
            this.counts[current]--;
            return delete this._jobs[id];
        }
    }
    start(id) {
        var initial;
        initial = 0;
        this._jobs[id] = initial;
        return this.counts[initial]++;
    }
    remove(id) {
        var current;
        current = this._jobs[id];
        if (current != null) {
            this.counts[current]--;
            delete this._jobs[id];
        }
        return current != null;
    }
    jobStatus(id) {
        var ref;
        return (ref = this.status[this._jobs[id]]) != null ? ref : null;
    }
    statusJobs(status) {
        var k, pos, ref, results, v;
        if (status != null) {
            pos = this.status.indexOf(status);
            if (pos < 0) throw new BottleneckError(`status must be one of ${this.status.join(", ")}`);
            ref = this._jobs;
            results = [];
            for(k in ref){
                v = ref[k];
                if (v === pos) results.push(k);
            }
            return results;
        } else return Object.keys(this._jobs);
    }
    statusCounts() {
        return this.counts.reduce((acc, v, i)=>{
            acc[this.status[i]] = v;
            return acc;
        }, {});
    }
};
module.exports = States;

},{"./BottleneckError":"fek3N"}],"3Jngd":[function(require,module,exports) {
"use strict";
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
var DLList, Sync;
DLList = require("./DLList");
Sync = class Sync {
    constructor(name, Promise1){
        this.schedule = this.schedule.bind(this);
        this.name = name;
        this.Promise = Promise1;
        this._running = 0;
        this._queue = new DLList();
    }
    isEmpty() {
        return this._queue.length === 0;
    }
    _tryToRun() {
        var _this = this;
        return _asyncToGenerator(function*() {
            var args, cb, error, reject, resolve, returned, task;
            if (_this._running < 1 && _this._queue.length > 0) {
                _this._running++;
                var _this$_queue$shift = _this._queue.shift();
                task = _this$_queue$shift.task;
                args = _this$_queue$shift.args;
                resolve = _this$_queue$shift.resolve;
                reject = _this$_queue$shift.reject;
                cb = yield _asyncToGenerator(function*() {
                    try {
                        returned = yield task(...args);
                        return function() {
                            return resolve(returned);
                        };
                    } catch (error1) {
                        error = error1;
                        return function() {
                            return reject(error);
                        };
                    }
                })();
                _this._running--;
                _this._tryToRun();
                return cb();
            }
        })();
    }
    schedule(task, ...args) {
        var promise, reject, resolve;
        resolve = reject = null;
        promise = new this.Promise(function(_resolve, _reject) {
            resolve = _resolve;
            return reject = _reject;
        });
        this._queue.push({
            task,
            args,
            resolve,
            reject
        });
        this._tryToRun();
        return promise;
    }
};
module.exports = Sync;

},{"./DLList":"crI6G"}],"dlKYW":[function(require,module,exports) {
module.exports = JSON.parse('{"version":"2.19.5"}');

},{}],"f20hH":[function(require,module,exports) {
"use strict";
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
var Events, Group, IORedisConnection, RedisConnection, Scripts, parser;
parser = require("./parser");
Events = require("./Events");
RedisConnection = require("./RedisConnection");
IORedisConnection = require("./IORedisConnection");
Scripts = require("./Scripts");
Group = (function() {
    class Group {
        constructor(limiterOptions = {}){
            this.deleteKey = this.deleteKey.bind(this);
            this.limiterOptions = limiterOptions;
            parser.load(this.limiterOptions, this.defaults, this);
            this.Events = new Events(this);
            this.instances = {};
            this.Bottleneck = require("./Bottleneck");
            this._startAutoCleanup();
            this.sharedConnection = this.connection != null;
            if (this.connection == null) {
                if (this.limiterOptions.datastore === "redis") this.connection = new RedisConnection(Object.assign({}, this.limiterOptions, {
                    Events: this.Events
                }));
                else if (this.limiterOptions.datastore === "ioredis") this.connection = new IORedisConnection(Object.assign({}, this.limiterOptions, {
                    Events: this.Events
                }));
            }
        }
        key(key = "") {
            var ref;
            return (ref = this.instances[key]) != null ? ref : (()=>{
                var limiter;
                limiter = this.instances[key] = new this.Bottleneck(Object.assign(this.limiterOptions, {
                    id: `${this.id}-${key}`,
                    timeout: this.timeout,
                    connection: this.connection
                }));
                this.Events.trigger("created", limiter, key);
                return limiter;
            })();
        }
        deleteKey(key = "") {
            var _this = this;
            return _asyncToGenerator(function*() {
                var deleted, instance;
                instance = _this.instances[key];
                if (_this.connection) deleted = yield _this.connection.__runCommand__([
                    "del",
                    ...Scripts.allKeys(`${_this.id}-${key}`)
                ]);
                if (instance != null) {
                    delete _this.instances[key];
                    yield instance.disconnect();
                }
                return instance != null || deleted > 0;
            })();
        }
        limiters() {
            var k, ref, results, v;
            ref = this.instances;
            results = [];
            for(k in ref){
                v = ref[k];
                results.push({
                    key: k,
                    limiter: v
                });
            }
            return results;
        }
        keys() {
            return Object.keys(this.instances);
        }
        clusterKeys() {
            var _this2 = this;
            return _asyncToGenerator(function*() {
                var cursor, end, found, i, k, keys, len, next, start;
                if (_this2.connection == null) return _this2.Promise.resolve(_this2.keys());
                keys = [];
                cursor = null;
                start = `b_${_this2.id}-`.length;
                end = 9;
                while(cursor !== 0){
                    var _ref = yield _this2.connection.__runCommand__([
                        "scan",
                        cursor != null ? cursor : 0,
                        "match",
                        `b_${_this2.id}-*_settings`,
                        "count",
                        10000
                    ]);
                    var _ref2 = _slicedToArray(_ref, 2);
                    next = _ref2[0];
                    found = _ref2[1];
                    cursor = ~~next;
                    for(i = 0, len = found.length; i < len; i++){
                        k = found[i];
                        keys.push(k.slice(start, -end));
                    }
                }
                return keys;
            })();
        }
        _startAutoCleanup() {
            var _this3 = this;
            var base;
            clearInterval(this.interval);
            return typeof (base = this.interval = setInterval(/*#__PURE__*/ _asyncToGenerator(function*() {
                var e, k, ref, results, time, v;
                time = Date.now();
                ref = _this3.instances;
                results = [];
                for(k in ref){
                    v = ref[k];
                    try {
                        if (yield v._store.__groupCheck__(time)) results.push(_this3.deleteKey(k));
                        else results.push(void 0);
                    } catch (error) {
                        e = error;
                        results.push(v.Events.trigger("error", e));
                    }
                }
                return results;
            }), this.timeout / 2)).unref === "function" ? base.unref() : void 0;
        }
        updateSettings(options = {}) {
            parser.overwrite(options, this.defaults, this);
            parser.overwrite(options, options, this.limiterOptions);
            if (options.timeout != null) return this._startAutoCleanup();
        }
        disconnect(flush = true) {
            var ref;
            if (!this.sharedConnection) return (ref = this.connection) != null ? ref.disconnect(flush) : void 0;
        }
    }
    Group.prototype.defaults = {
        timeout: 300000,
        connection: null,
        Promise: Promise,
        id: "group-key"
    };
    return Group;
}).call(void 0);
module.exports = Group;

},{"./parser":"kbuWd","./Events":"jQoPj","./RedisConnection":"iKgr8","./IORedisConnection":"bTvPT","./Scripts":"4NPha","./Bottleneck":"eCwA0"}],"lXQj4":[function(require,module,exports) {
"use strict";
var Batcher, Events, parser;
parser = require("./parser");
Events = require("./Events");
Batcher = (function() {
    class Batcher {
        constructor(options = {}){
            this.options = options;
            parser.load(this.options, this.defaults, this);
            this.Events = new Events(this);
            this._arr = [];
            this._resetPromise();
            this._lastFlush = Date.now();
        }
        _resetPromise() {
            return this._promise = new this.Promise((res, rej)=>{
                return this._resolve = res;
            });
        }
        _flush() {
            clearTimeout(this._timeout);
            this._lastFlush = Date.now();
            this._resolve();
            this.Events.trigger("batch", this._arr);
            this._arr = [];
            return this._resetPromise();
        }
        add(data) {
            var ret;
            this._arr.push(data);
            ret = this._promise;
            if (this._arr.length === this.maxSize) this._flush();
            else if (this.maxTime != null && this._arr.length === 1) this._timeout = setTimeout(()=>{
                return this._flush();
            }, this.maxTime);
            return ret;
        }
    }
    Batcher.prototype.defaults = {
        maxTime: null,
        maxSize: null,
        Promise: Promise
    };
    return Batcher;
}).call(void 0);
module.exports = Batcher;

},{"./parser":"kbuWd","./Events":"jQoPj"}],"3aUr9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseHandler = require("./baseHandler");
var _baseHandlerDefault = parcelHelpers.interopDefault(_baseHandler);
class CommentHandler extends (0, _baseHandlerDefault.default) {
    static itemTextAttribute = "body";
    static itemName = "Comment";
    getItems(...args) {
        return this.client.getComments(...args);
    }
    editItem(...args) {
        return this.client.editComment(...args);
    }
    deleteItem(...args) {
        return this.client.deleteComment(...args);
    }
}
exports.default = CommentHandler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./baseHandler":"cGYHa"}],"cGYHa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class BaseHandler {
    constructor(client, username){
        this.client = client;
        this.username = username;
        this.allItemsLoaded = false;
    }
    async nuke() {
        if (this.#elements.length < 50) await this.loadItems();
        const nextElement = this.#elements[0];
        if (!nextElement) {
            console.log("done!");
            return;
        }
        await this.#nukeItem(nextElement);
        return this.nuke();
    }
    async loadItems() {
        if (this.allItemsLoaded) return;
        return this.getItems(this.username, {
            limit: "100",
            after: this.after
        }, (response)=>{
            this.after = response.data.after;
            this.allItemsLoaded = !this.after;
            this.#createItems(response);
        });
    }
    // private
     #createItems(response) {
        const ul = document.getElementById("items");
        const template = document.getElementById("item-template");
        let li;
        response.data.children.forEach((item)=>{
            li = template.content.cloneNode(true).querySelector("li");
            li.textContent = item.data[this.constructor.itemTextAttribute];
            li.dataset.id = item.data.id;
            ul.appendChild(li);
        });
    }
    async #nukeItem(element) {
        const id = element.dataset.id;
        const updateText = "Deleted by rnuke (https://rnuke.github.io)";
        element.classList.add("deleted");
        await this.editItem(id, updateText);
        await this.deleteItem(id);
        element.addEventListener("animationend", (event)=>event.currentTarget.remove());
        element.classList.add("slide-out");
    }
    get #elements() {
        return document.getElementById("items").querySelectorAll("li:not(.deleted)");
    }
}
exports.default = BaseHandler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3tnic":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseHandler = require("./baseHandler");
var _baseHandlerDefault = parcelHelpers.interopDefault(_baseHandler);
class PostHandler extends (0, _baseHandlerDefault.default) {
    static itemTextAttribute = "title";
    static itemName = "Post";
    getItems(...args) {
        return this.client.getPosts(...args);
    }
    editItem(...args) {
        return this.client.editPost(...args);
    }
    deleteItem(...args) {
        return this.client.editPost(...args);
    }
}
exports.default = PostHandler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./baseHandler":"cGYHa"}]},["eTlFW"], "eTlFW", "parcelRequirebbb8")

//# sourceMappingURL=main.js.map
