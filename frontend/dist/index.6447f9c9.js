// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
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
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
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
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
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
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"4SUse":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "16bdbfd643c972908dd6b01d6447f9c9";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
import type {
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
(string): mixed;
cache: {|[string]: ParcelModule|};
hotData: mixed;
Module: any;
parent: ?ParcelRequire;
isParcelRequire: true;
modules: {|[string]: [Function, {|[string]: string|}]|};
HMR_BUNDLE_ID: string;
root: ParcelRequire;
}
interface ParcelModule {
hot: {|
data: mixed,
accept(cb: (Function) => void): void,
dispose(cb: (mixed) => void): void,
// accept(deps: Array<string> | string, cb: (Function) => void): void,
// decline(): void,
_acceptCallbacks: Array<(Function) => void>,
_disposeCallbacks: Array<(mixed) => void>,
|};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, /*: {|[string]: boolean|}*/
acceptedAssets, /*: {|[string]: boolean|}*/
/*: {|[string]: boolean|}*/
assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) /*: {data: string, ...}*/
  {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = /*: HMRMessage*/
    JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ✨ Error resolved');
  }
}
function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href = /*: string*/
      links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, /*: ParcelRequire*/
asset) /*:  HMRAsset*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, /*: ParcelRequire*/
id, /*: ParcelRequire*/
/*: string*/
depsByBundle) /*: ?{ [string]: { [string]: string } }*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, /*: ParcelRequire*/
id) /*: string*/
{
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"4ee1I":[function(require,module,exports) {
var _hyperapp = require("hyperapp");
var _hyperappFx = require("hyperapp-fx");
const API_URL = "http://localhost:3000/api/";
const FetchCard = state => [state, _hyperappFx.Http({
  url: API_URL + "red",
  action: NewCard,
  response: "text"
})];
const NewCard = (state, res) => ({
  ...state,
  currentCard: res
});
const CardMock = state => ({
  ...state,
  currentCard: "TEST"
});
const CardDiv = currentCard => _hyperapp.h("div", {
  className: "card-div"
}, [_hyperapp.h("p", {}, _hyperapp.text(currentCard))]);
const CardButton = (cardType, label, className) => _hyperapp.h("button", {
  type: "button",
  className: `card-button ${className}`,
  value: cardType,
  onclick: FetchCard
}, _hyperapp.text(label));
_hyperapp.app({
  init: {
    currentCard: "Choose Red or Blue"
  },
  view: ({currentCard}) => _hyperapp.h("main", {}, [_hyperapp.h("h1", {
    className: "headline"
  }, _hyperapp.text("Hacker Strategies!")), CardDiv(currentCard), CardButton("red", "Red Team", "red-team"), CardButton("blue", "Blue Team", "blue-team")]),
  node: document.getElementById("app")
});

},{"hyperapp":"1ARsg","hyperapp-fx":"1OhNK"}],"1ARsg":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "memo", function () {
  return memo;
});
_parcelHelpers.export(exports, "text", function () {
  return text;
});
_parcelHelpers.export(exports, "h", function () {
  return h;
});
_parcelHelpers.export(exports, "app", function () {
  return app;
});
var SSR_NODE = 1;
var TEXT_NODE = 3;
var EMPTY_OBJ = {};
var EMPTY_ARR = [];
var SVG_NS = "http://www.w3.org/2000/svg";
var id = a => a;
var map = EMPTY_ARR.map;
var isArray = Array.isArray;
var enqueue = typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : setTimeout;
var createClass = obj => {
  var out = "";
  if (typeof obj === "string") return obj;
  if (isArray(obj)) {
    for (var k = 0, tmp; k < obj.length; k++) {
      if (tmp = createClass(obj[k])) {
        out += (out && " ") + tmp;
      }
    }
  } else {
    for (var k in obj) {
      if (obj[k]) out += (out && " ") + k;
    }
  }
  return out;
};
var shouldRestart = (a, b) => {
  for (var k in {
    ...a,
    ...b
  }) {
    if (typeof (isArray(a[k]) ? a[k][0] : a[k]) === "function") {
      b[k] = a[k];
    } else if (a[k] !== b[k]) return true;
  }
};
var patchSubs = (oldSubs, newSubs, dispatch) => {
  for (var subs = [], i = 0, oldSub, newSub; i < oldSubs.length || i < newSubs.length; i++) {
    oldSub = oldSubs[i];
    newSub = newSubs[i];
    subs.push(newSub && newSub !== true ? !oldSub || newSub[0] !== oldSub[0] || shouldRestart(newSub[1], oldSub[1]) ? [newSub[0], newSub[1], (oldSub && oldSub[2](), newSub[0](dispatch, newSub[1]))] : oldSub : oldSub && oldSub[2]());
  }
  return subs;
};
var getKey = vdom => vdom == null ? vdom : vdom.key;
var patchProperty = (node, key, oldValue, newValue, listener, isSvg) => {
  if (key === "key") {} else if (key === "style") {
    for (var k in {
      ...oldValue,
      ...newValue
    }) {
      oldValue = newValue == null || newValue[k] == null ? "" : newValue[k];
      if (k[0] === "-") {
        node[key].setProperty(k, oldValue);
      } else {
        node[key][k] = oldValue;
      }
    }
  } else if (key[0] === "o" && key[1] === "n") {
    if (!((node.events || (node.events = {}))[key = key.slice(2)] = newValue)) {
      node.removeEventListener(key, listener);
    } else if (!oldValue) {
      node.addEventListener(key, listener);
    }
  } else if (!isSvg && key !== "list" && key !== "form" && (key in node)) {
    node[key] = newValue == null ? "" : newValue;
  } else if (newValue == null || newValue === false || key === "class" && !(newValue = createClass(newValue))) {
    node.removeAttribute(key);
  } else {
    node.setAttribute(key, newValue);
  }
};
var createNode = (vdom, listener, isSvg) => {
  var props = vdom.props;
  var node = vdom.type === TEXT_NODE ? document.createTextNode(vdom.tag) : (isSvg = isSvg || vdom.tag === "svg") ? document.createElementNS(SVG_NS, vdom.tag, {
    is: props.is
  }) : document.createElement(vdom.tag, {
    is: props.is
  });
  for (var k in props) {
    patchProperty(node, k, null, props[k], listener, isSvg);
  }
  for (var i = 0; i < vdom.children.length; i++) {
    node.appendChild(createNode(vdom.children[i] = maybeVNode(vdom.children[i]), listener, isSvg));
  }
  return vdom.node = node;
};
var patch = (parent, node, oldVNode, newVNode, listener, isSvg) => {
  if (oldVNode === newVNode) {} else if (oldVNode != null && oldVNode.type === TEXT_NODE && newVNode.type === TEXT_NODE) {
    if (oldVNode.tag !== newVNode.tag) node.nodeValue = newVNode.tag;
  } else if (oldVNode == null || oldVNode.tag !== newVNode.tag) {
    node = parent.insertBefore(createNode(newVNode = maybeVNode(newVNode), listener, isSvg), node);
    if (oldVNode != null) {
      parent.removeChild(oldVNode.node);
    }
  } else {
    var tmpVKid;
    var oldVKid;
    var oldKey;
    var newKey;
    var oldProps = oldVNode.props;
    var newProps = newVNode.props;
    var oldVKids = oldVNode.children;
    var newVKids = newVNode.children;
    var oldHead = 0;
    var newHead = 0;
    var oldTail = oldVKids.length - 1;
    var newTail = newVKids.length - 1;
    isSvg = isSvg || newVNode.tag === "svg";
    for (var i in {
      ...oldProps,
      ...newProps
    }) {
      if ((i === "value" || i === "selected" || i === "checked" ? node[i] : oldProps[i]) !== newProps[i]) {
        patchProperty(node, i, oldProps[i], newProps[i], listener, isSvg);
      }
    }
    while (newHead <= newTail && oldHead <= oldTail) {
      if ((oldKey = getKey(oldVKids[oldHead])) == null || oldKey !== getKey(newVKids[newHead])) {
        break;
      }
      patch(node, oldVKids[oldHead].node, oldVKids[oldHead], newVKids[newHead] = maybeVNode(newVKids[newHead++], oldVKids[oldHead++]), listener, isSvg);
    }
    while (newHead <= newTail && oldHead <= oldTail) {
      if ((oldKey = getKey(oldVKids[oldTail])) == null || oldKey !== getKey(newVKids[newTail])) {
        break;
      }
      patch(node, oldVKids[oldTail].node, oldVKids[oldTail], newVKids[newTail] = maybeVNode(newVKids[newTail--], oldVKids[oldTail--]), listener, isSvg);
    }
    if (oldHead > oldTail) {
      while (newHead <= newTail) {
        node.insertBefore(createNode(newVKids[newHead] = maybeVNode(newVKids[newHead++]), listener, isSvg), (oldVKid = oldVKids[oldHead]) && oldVKid.node);
      }
    } else if (newHead > newTail) {
      while (oldHead <= oldTail) {
        node.removeChild(oldVKids[oldHead++].node);
      }
    } else {
      for (var keyed = {}, newKeyed = {}, i = oldHead; i <= oldTail; i++) {
        if ((oldKey = oldVKids[i].key) != null) {
          keyed[oldKey] = oldVKids[i];
        }
      }
      while (newHead <= newTail) {
        oldKey = getKey(oldVKid = oldVKids[oldHead]);
        newKey = getKey(newVKids[newHead] = maybeVNode(newVKids[newHead], oldVKid));
        if (newKeyed[oldKey] || newKey != null && newKey === getKey(oldVKids[oldHead + 1])) {
          if (oldKey == null) {
            node.removeChild(oldVKid.node);
          }
          oldHead++;
          continue;
        }
        if (newKey == null || oldVNode.type === SSR_NODE) {
          if (oldKey == null) {
            patch(node, oldVKid && oldVKid.node, oldVKid, newVKids[newHead], listener, isSvg);
            newHead++;
          }
          oldHead++;
        } else {
          if (oldKey === newKey) {
            patch(node, oldVKid.node, oldVKid, newVKids[newHead], listener, isSvg);
            newKeyed[newKey] = true;
            oldHead++;
          } else {
            if ((tmpVKid = keyed[newKey]) != null) {
              patch(node, node.insertBefore(tmpVKid.node, oldVKid && oldVKid.node), tmpVKid, newVKids[newHead], listener, isSvg);
              newKeyed[newKey] = true;
            } else {
              patch(node, oldVKid && oldVKid.node, null, newVKids[newHead], listener, isSvg);
            }
          }
          newHead++;
        }
      }
      while (oldHead <= oldTail) {
        if (getKey(oldVKid = oldVKids[oldHead++]) == null) {
          node.removeChild(oldVKid.node);
        }
      }
      for (var i in keyed) {
        if (newKeyed[i] == null) {
          node.removeChild(keyed[i].node);
        }
      }
    }
  }
  return newVNode.node = node;
};
var propsChanged = (a, b) => {
  for (var k in a) if (a[k] !== b[k]) return true;
  for (var k in b) if (a[k] !== b[k]) return true;
};
var maybeVNode = (newVNode, oldVNode) => newVNode !== true && newVNode !== false && newVNode ? typeof newVNode.tag === "function" ? ((!oldVNode || oldVNode.memo == null || propsChanged(oldVNode.memo, newVNode.memo)) && ((oldVNode = newVNode.tag(newVNode.memo)).memo = newVNode.memo), oldVNode) : newVNode : text("");
var recycleNode = node => node.nodeType === TEXT_NODE ? text(node.nodeValue, node) : createVNode(node.nodeName.toLowerCase(), EMPTY_OBJ, map.call(node.childNodes, recycleNode), SSR_NODE, node);
var createVNode = (tag, props, children, type, node) => ({
  tag,
  props,
  key: props.key,
  children,
  type,
  node
});
var memo = (tag, memo) => ({
  tag,
  memo
});
var text = (value, node) => createVNode(value, EMPTY_OBJ, EMPTY_ARR, TEXT_NODE, node);
var h = (tag, props, children = EMPTY_ARR) => createVNode(tag, props, isArray(children) ? children : [children]);
var app = ({init = EMPTY_OBJ, view, subscriptions, dispatch = id, node}) => {
  var vdom = node && recycleNode(node);
  var subs = [];
  var state;
  var busy;
  var setState = newState => {
    if (state !== newState) {
      state = newState;
      if (subscriptions) {
        subs = patchSubs(subs, subscriptions(state), dispatch);
      }
      if (view && !busy) enqueue(render, busy = true);
    }
  };
  var render = () => node = patch(node.parentNode, node, vdom, vdom = view(state), listener, busy = false);
  var listener = function (event) {
    dispatch(this.events[event.type], event);
  };
  return ((dispatch = dispatch((action, props) => typeof action === "function" ? dispatch(action(state, props)) : isArray(action) ? typeof action[0] === "function" ? dispatch(action[0], action[1]) : action.slice(1).map(fx => fx && fx !== true && fx[0](dispatch, fx[1]), setState(action[0])) : action == null ? patchSubs(subs, EMPTY_ARR, dispatch = id) : setState(action)))(init), dispatch);
};

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5QYwZ"}],"5QYwZ":[function(require,module,exports) {
"use strict";

exports.interopDefault = function (a) {
  return a && a.__esModule ? a : {
    default: a
  };
};

exports.defineInteropFlag = function (a) {
  Object.defineProperty(a, '__esModule', {
    value: true
  });
};

exports.exportAll = function (source, dest) {
  Object.keys(source).forEach(function (key) {
    if (key === 'default' || key === '__esModule') {
      return;
    } // Skip duplicate re-exports when they have the same value.


    if (key in dest && dest[key] === source[key]) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function () {
        return source[key];
      }
    });
  });
  return dest;
};

exports.export = function (dest, destName, get) {
  Object.defineProperty(dest, destName, {
    enumerable: true,
    get: get
  });
};
},{}],"1OhNK":[function(require,module,exports) {
var define;
!(function (n, t) {
  "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((n = n || self).hyperappFx = {});
})(this, function (n) {
  "use strict";
  function t(n, t) {
    n(t.action);
  }
  function e(n, t) {
    console.log.apply(null, t);
  }
  function r(n) {
    if (n.values) return n.values.map(r);
    var t = n.min || 0, e = n.max || 1;
    (n.int && e++, n.bool && (t = 0, e = 2));
    var o = Math.random() * (e - t) + t;
    return ((n.int || n.bool) && (o = Math.floor(o)), n.bool && (o = !!o), o);
  }
  function o(n, t) {
    var e = r(t);
    n(t.action, e);
  }
  function i(n, t) {
    var e, o = {};
    for (e in n) o[e] = n[e];
    for (e in t) o[e] = t[e];
    return o;
  }
  function c(n, t, e, o) {
    var r = t.bind(null, e);
    return (n.addEventListener(o, r), function () {
      n.removeEventListener(o, r);
    });
  }
  function u(n, t) {
    return function () {
      n(t.action, t.asDate ? new Date() : performance.now());
    };
  }
  var a = {};
  function f(n) {
    var t = a[n.url];
    return (t || (t = {
      socket: new WebSocket(n.url, n.protocols),
      listeners: []
    }, a[n.url] = t), t);
  }
  function s(t, e) {
    fetch(e.url, e.options).then(function (n) {
      if (!n.ok) throw n;
      return n;
    }).then(function (n) {
      return n[e.response]();
    }).then(function (n) {
      t(e.action, n);
    }).catch(function (n) {
      t(e.error, n);
    });
  }
  function l(n, t) {
    n(function (n) {
      return i(n, t.action(n));
    });
  }
  var p = [];
  function v(n, t) {
    var e = p.find(function (n) {
      return n[0] === t.action;
    });
    (e ? clearTimeout(e[1]) : (e = [t.action], p.push(e)), e[1] = setTimeout(function () {
      n(t.action);
    }, t.wait));
  }
  var d = [];
  function m(n, t) {
    var e = d.find(function (n) {
      return n[0] === t.action;
    });
    (e || (e = [t.action], d.push(e)), e[1] || (n(t.action), e[1] = !0, setTimeout(function () {
      e[1] = !1;
    }, t.rate)));
  }
  function h(n) {
    return window[n + "Storage"] || localStorage;
  }
  function k(n, t) {
    var e = t.converter(t.value);
    h(t.area).setItem(t.key, e);
  }
  function g(t, e) {
    try {
      var n = e.converter(h(e.area).getItem(e.key)), o = i({}, e.props || ({}));
      (o[e.prop || "value"] = n, t(e.action, o));
    } catch (n) {
      t(e.error);
    }
  }
  function y(n, t) {
    h(t.area).removeItem(t.key);
  }
  function S(n, t) {
    var e = t.title || document.title, o = t.url || location.href;
    history.pushState(t.state, e, o);
  }
  function b(n, t) {
    var e = t.title || document.title, o = t.url || location.href;
    history.replaceState(t.state, e, o);
  }
  var w = "abdefghijklmnqrstuvxyzABDEFGHIJKLMNQRSTUVXYZ0123456789!#$%&'*+-.^_`|~", x = w + "()/:<>?@[]{}";
  function C(n) {
    return n.toString().split("").map(function (n) {
      return -1 < w.indexOf(n) ? n : encodeURIComponent(n);
    }).join("");
  }
  function I(n, t) {
    var e = document.cookie.split("; ").find(function (n) {
      return n.substr(0, n.indexOf("=")) === t.nameEncoder(t.name);
    });
    if (e) {
      var o = i({}, t.props || ({}));
      (o[t.prop || "value"] = t.converter(t.decoder(e.substr(t.nameEncoder(t.name).length + 1))), n(t.action, o));
    }
  }
  function E(n, t) {
    var e = (t.nameEncoder || C)(t.name), o = (t.encoder || (function (n) {
      return n.toString().split("").map(function (n) {
        return -1 < x.indexOf(n) ? n : encodeURIComponent(n);
      }).join("");
    }))(t.converter(t.value)), r = {};
    (t.ttl && (t.expires = new Date(new Date().getTime() + 1e3 * t.ttl)), t.path && (r.path = t.path), t.domain && (r.domain = t.domain), t.expires && (r.expires = t.expires.toUTCString()), (function (n, t, e) {
      var o = Object.keys(e).map(function (n) {
        return n + "=" + e[n];
      }).join(";");
      document.cookie = n + "=" + t + (o ? ";" + o : "");
    })(e, o, r));
  }
  function T(n) {
    return [E, i({
      converter: n.converter || n.json ? JSON.stringify : function (n) {
        return n;
      }
    }, n)];
  }
  function j(n, t) {
    u(n, t)();
  }
  function D(n, t) {
    setTimeout(u(n, t), t.wait);
  }
  function N(n, t) {
    var e = f(t);
    function o() {
      (e.socket.send(t.data), e.socket.removeEventListener("open", o));
    }
    e.socket.readyState === WebSocket.CONNECTING ? e.socket.addEventListener("open", o) : o();
  }
  function O(t, e) {
    navigator.geolocation.getCurrentPosition(function (n) {
      return t(e.action, n);
    }, function (n) {
      return t(e.error, n);
    }, e.options);
  }
  function R(n, t) {
    var e = u(n, t), o = setInterval(e, t.every);
    return function () {
      o && clearInterval(o);
    };
  }
  function W(e, o) {
    var r;
    return (r = requestAnimationFrame(function n(t) {
      (e(o, t), r = requestAnimationFrame(n));
    }), function () {
      cancelAnimationFrame(r);
    });
  }
  function F(n, t) {
    var e = c.bind(null, document, n, t.action), o = t.downs ? e("keydown") : null, r = t.ups ? e("keyup") : null, i = t.presses ? e("keypress") : null;
    return function () {
      (o && o(), r && r(), i && i());
    };
  }
  function L(n, t) {
    var e, o, r, i = f(t), u = c(i.socket, n, t.action, "message");
    return (i.listeners.push(u), t.error && (e = c(i.socket, n, t.error, "error"), i.listeners.push(e)), t.open && (o = c(i.socket, n, t.open, "open"), i.listeners.push(o)), t.close && (r = c(i.socket, n, t.close, "close"), i.listeners.push(r)), function () {
      (u && u(), e && e(), o && o(), r && r(), i.listeners = i.listeners.filter(function (n) {
        return n !== u && n !== e && n !== o && n !== r;
      }), 0 === i.listeners.length && (function (n) {
        (f(n).socket.close(), delete a[n.url]);
      })(t));
    });
  }
  function P(n, t) {
    return c(window, n, t.action, "popstate");
  }
  function A(t, e) {
    var n = navigator.geolocation.watchPosition(function (n) {
      return t(e.action, n);
    }, function (n) {
      return t(e.error, n);
    }, e.options);
    return function () {
      navigator.geolocation.clearWatch(n);
    };
  }
  (n.Animation = function (n) {
    return [W, n];
  }, n.Console = function () {
    return [e, arguments];
  }, n.Debounce = function (n) {
    return [v, n];
  }, n.Delay = function (n) {
    return [D, n];
  }, n.DeleteCookie = function (n) {
    return T(i(n, {
      ttl: -1,
      value: ""
    }));
  }, n.Dispatch = function (n) {
    return [t, {
      action: n
    }];
  }, n.GetCurrentPosition = function (n) {
    return [O, n];
  }, n.HistoryPop = function (n) {
    return [P, n];
  }, n.HistoryPush = function (n) {
    return [S, n];
  }, n.HistoryReplace = function (n) {
    return [b, n];
  }, n.Http = function (n) {
    return [s, i({
      options: {},
      response: "json",
      error: n.action
    }, n)];
  }, n.Interval = function (n) {
    return [R, n];
  }, n.Keyboard = function (n) {
    return [F, n];
  }, n.Merge = function (n) {
    return [l, {
      action: n
    }];
  }, n.Now = function (n) {
    return [j, n];
  }, n.Random = function (n) {
    return [o, n];
  }, n.ReadCookie = function (n) {
    return [I, i({
      nameEncoder: C,
      converter: n.converter || n.json ? JSON.parse : function (n) {
        return n;
      },
      decoder: n.decoder || decodeURIComponent
    }, n)];
  }, n.ReadFromStorage = function (n) {
    return [g, i({
      converter: n.converter || JSON.parse,
      error: n.error
    }, n)];
  }, n.RemoveFromStorage = function (n) {
    return [y, n];
  }, n.Throttle = function (n) {
    return [m, n];
  }, n.WatchPosition = function (n) {
    return [A, n];
  }, n.WebSocketListen = function (n) {
    return [L, n];
  }, n.WebSocketSend = function (n) {
    return [N, n];
  }, n.WriteCookie = T, n.WriteToStorage = function (n) {
    return [k, i({
      converter: n.converter || JSON.stringify
    }, n)];
  });
});

},{}]},["4SUse","4ee1I"], "4ee1I", "parcelRequiread31")

//# sourceMappingURL=index.6447f9c9.js.map
