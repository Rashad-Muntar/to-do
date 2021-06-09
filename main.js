/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss ***!
  \****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  padding: 0;\\n  margin: 0;\\n}\\n\\n.container-fluid {\\n  padding: 0;\\n  margin: 0;\\n}\\n\\nheader {\\n  background-color: #dc3545;\\n  padding: 0;\\n  margin: 0;\\n}\\n\\n#navbarNav {\\n  display: flex;\\n  justify-content: space-between;\\n}\\n\\n.headerGroupOne {\\n  display: flex;\\n  margin-left: 20px;\\n}\\n\\n.headerGroupTwo {\\n  float: right;\\n  margin-right: 20px;\\n}\\n\\n.fas,\\n.far {\\n  color: black;\\n}\\n\\nform {\\n  padding: 20px;\\n}\\n\\nmain {\\n  height: 100vh;\\n  width: 100vw;\\n}\\nmain #content {\\n  width: 100%;\\n  height: 100%;\\n  display: flex;\\n  align-items: center;\\n  position: relative;\\n}\\nmain #content .side-bar {\\n  width: 25%;\\n  height: 100%;\\n  background: #e2e2e2;\\n  padding: 50px 20px;\\n}\\nmain #content .side-bar .icons {\\n  width: 95%;\\n  margin: 15px 0;\\n  padding: 7px 5px;\\n  border-radius: 2px;\\n  cursor: pointer;\\n}\\nmain #content .side-bar .icons i {\\n  margin-right: 10px;\\n  font-size: 1.5em;\\n  color: gray;\\n}\\nmain #content .side-bar .icons:hover {\\n  background-color: #f1f1f1;\\n}\\nmain #content .side-bar .project {\\n  display: flex;\\n  justify-content: space-between;\\n}\\nmain #content .side-bar .projects {\\n  padding-left: 20px;\\n}\\nmain #content .fa-trash-alt:hover {\\n  color: red;\\n}\\nmain #content #main-right {\\n  background-color: white;\\n  height: 100vh;\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  justify-items: center;\\n  align-items: center;\\n}\\nmain #content #prTitle {\\n  font-weight: bold;\\n}\\nmain #content .todoAddBtn {\\n  margin: 10px;\\n}\\nmain #content .todoAddBtn i {\\n  margin: 10px;\\n}\\nmain #content h3 {\\n  display: flex;\\n  justify-content: center;\\n  align-content: center;\\n  background: #e2e2e2;\\n}\\n\\n.todoDiv {\\n  margin: 10px;\\n  display: flex;\\n  justify-content: space-between;\\n  align-content: center;\\n  padding: 10px;\\n  background: #e2e2e2;\\n}\\n\\n.todoTitle {\\n  padding: 5px;\\n  margin: 0 0 0 0;\\n  display: flex;\\n  justify-content: center;\\n  align-content: center;\\n}\\n\\n.todoDelIcon {\\n  padding: 5px;\\n  margin: 0 20px 0 0;\\n  display: flex;\\n  justify-content: center;\\n  align-content: center;\\n}\\n\\n#todoDisplay {\\n  display: flex;\\n  justify-content: space-between;\\n  align-content: center;\\n  padding: 10px;\\n  margin: 10px 0 0 30px;\\n}\\n\\n#todoDisplay p {\\n  padding: 10px;\\n}\\n\\n.hide {\\n  display: none;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://main-todo/./src/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://main-todo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://main-todo/./src/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://main-todo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createProject\": () => (/* binding */ createProject),\n/* harmony export */   \"displayProjects\": () => (/* binding */ displayProjects),\n/* harmony export */   \"allProjects\": () => (/* binding */ allProjects),\n/* harmony export */   \"todoConstructor\": () => (/* binding */ todoConstructor),\n/* harmony export */   \"createTodo\": () => (/* binding */ createTodo),\n/* harmony export */   \"mainProjectDisplay\": () => (/* binding */ mainProjectDisplay),\n/* harmony export */   \"deleteEvent\": () => (/* binding */ deleteEvent),\n/* harmony export */   \"todoFormDisplay\": () => (/* binding */ todoFormDisplay),\n/* harmony export */   \"todoDelete\": () => (/* binding */ todoDelete)\n/* harmony export */ });\n/* harmony import */ var _modules_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/project */ \"./src/modules/project.js\");\n/* harmony import */ var _modules_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/todo */ \"./src/modules/todo.js\");\n\n\n\nconst EXISTING_DATA = JSON.parse(localStorage.getItem('Projects')) || []\nconst projectArr = []\nconst sideBarproject = document.querySelector('.projects')\nconst mainContent = document.getElementById('projectTitle')\nconst todosWrapper = document.getElementById('todosWrapper')\nconst todoFormBtn = document.getElementById('todoForm-link')\nconst todoForm = document.querySelector('.newTodoForm')\nlet todoTitleDisplay = document.createElement('p')\nlet todoDescription = document.createElement('p')\nlet todoDate = document.createElement('p')\n\n\ntodoTitleDisplay.classList.add('todoTitleDisplay')\nmainContent.classList.add('p-5', 'col-8')\ntodosWrapper.classList.add('col-12', 'p-4')\nconst todoFormDisplay = () => {\n    todoFormBtn.addEventListener('click', () => {\n        todoForm.classList.toggle('hide')\n    })\n    \n}\n\nconst projectConstructor = () => {\n    let project = (0,_modules_project__WEBPACK_IMPORTED_MODULE_0__.projectFactory)(\n        document.getElementById('prtitle').value,\n        document.getElementById('prdesc').value,\n        document.getElementById('prdate').value,\n        document.getElementById('prpriority').value,\n        false,\n        []\n    )\n    projectArr.push(project)\n    EXISTING_DATA.push(project)\n    localStorage.setItem('Projects', JSON.stringify(EXISTING_DATA))\n    mainProjectDisplay()\n}\n\nconst createProject = (e) => {\n    const newProBtn = document.getElementById('prsubmit')\n    newProBtn.addEventListener('click', projectConstructor)\n}\n\nconst allProjects = () => {\n    for(let i = 0; i < EXISTING_DATA.length; i++){\n        let projectWrapper = document.createElement('div')\n        let projectTitle = document.createElement('div')\n        let delBtn = document.createElement('div')\n\n        delBtn.classList.add('far', 'fa-trash-alt')\n        projectWrapper.classList.add('d-flex', 'justify-content-between', 'col-12', 'projectTitle', 'mb-4')\n        delBtn.classList.add('projectDelBtn', 'col-3', 'd-flex', 'justify-content-center')\n        projectTitle.classList.add('prs')\n\n        projectTitle.innerHTML = EXISTING_DATA[i].title\n\n        projectWrapper.appendChild(projectTitle)\n        projectWrapper.appendChild(delBtn)\n        sideBarproject.appendChild(projectWrapper)\n    }\n    \n}\n\nconst displayProjects = () => {\n    document.querySelector('.project').addEventListener('click', (e) => {\n        document.querySelector('.projectList').classList.toggle('hide')\n        \n    })\n}\n\n\nconst mainProjectDisplay = () => {\n    const allSidebarprojects = document.querySelectorAll('.prs')\n    for(let i = 0; i < allSidebarprojects.length; i++){\n        allSidebarprojects[i].addEventListener('click', (e)=>{\n            let projectTitle = document.createElement('h3')\n            projectTitle.setAttribute('id', 'prTitle')\n            \n            projectTitle.classList.add('p-5')\n            projectTitle.innerHTML = allSidebarprojects[i].textContent\n            if (document.body.contains(document.querySelector('#prTitle'))) {\n                document.querySelector('#prTitle').remove();\n              }\n              mainContent.appendChild(projectTitle)\n              document.querySelector('.todoAddBtn').classList.remove('hide')\n\n              if (document.getElementById('todosWrapper').contains(document.getElementById('todosContainer'))) {\n                document.querySelector('#todosContainer').innerHTML = ''\n              }\n              \n\n              for( let j = 0; j < EXISTING_DATA.length; j++){\n                  \n                if (document.querySelector('#prTitle').textContent != EXISTING_DATA[j].title) {\n                    document.getElementById('todoDisplay').innerHTML = ''\n                  }  \n\n                if(document.querySelector('#prTitle').textContent === EXISTING_DATA[j].title){\n                    for( let k = 0; k < EXISTING_DATA[j].todos.length; k++){\n                        let todoTitle = document.createElement('p')\n                        let todoDiv = document.createElement('div')\n                        let delIcon = document.createElement('span')\n\n                        \n                        delIcon.classList.add('todoDelIcon', 'far', 'fa-trash-alt')\n                        todoTitle.classList.add('todoTitle')\n                        todoDiv.classList.add('todoDiv', 'col-12')\n\n\n                        todoTitle.innerHTML = EXISTING_DATA[j].todos[k].title\n                        todoDiv.appendChild(todoTitle)\n                        todoDiv.appendChild(delIcon)\n\n                       document.getElementById('todosContainer').appendChild(todoDiv)\n                         todoTitle.addEventListener('click', () => {\n\n\n                           todoTitleDisplay.innerHTML= EXISTING_DATA[j].todos[k].title\n                           todoDescription.innerHTML= EXISTING_DATA[j].todos[k].description\n                           todoDate.innerHTML= EXISTING_DATA[j].todos[k].date\n\n                           document.getElementById('todoDisplay').appendChild(todoTitleDisplay)\n                           document.getElementById('todoDisplay').appendChild(todoDate)\n                           document.getElementById('todoDisplay').appendChild(todoDescription)\n\n                           document.getElementById('todosWrapper').appendChild(document.getElementById('todoDisplay'))\n\n                       })\n                        \n\n                    }\n                  }\n              }\n              \n            })\n    }\n}\n\nconst deleteEvent = () => {\n    const delbtns = document.querySelectorAll('.projectDelBtn')\n    console.log(delbtns)\n        for(let i = 0; i < delbtns.length; i += 1){\n            delbtns[i].addEventListener('click', (e)=>{\n                e.stopPropagation()\n                console.log('del deleted')\n                ;(0,_modules_project__WEBPACK_IMPORTED_MODULE_0__.deleteProject)(i)\n            })\n        }\n}\n\n\n// todo starts here\nconst todoConstructor = () => {\n\n    let newToDo = (0,_modules_todo__WEBPACK_IMPORTED_MODULE_1__.todoFactory)(\n        document.getElementById('title').value,\n        document.getElementById('desc').value,\n        document.getElementById('date').value,\n        document.getElementById('priority').value,\n        \n        false,\n        []\n    )\n    for( let i = 0; i < EXISTING_DATA.length; i++) {\n        if (document.body.contains(document.querySelector('#prTitle'))) {\n            let projectTitle = document.getElementById('prTitle').textContent\n\n            if( EXISTING_DATA[i].title === projectTitle) {\n                EXISTING_DATA[i].todos.push(newToDo)\n                mainProjectDisplay()\n                localStorage.setItem('Projects', JSON.stringify(EXISTING_DATA))\n                document.querySelector('form').reset()\n                for( let j = 0; j < EXISTING_DATA.length; j++){\n                    if(document.querySelector('#prTitle').textContent === EXISTING_DATA[j].title){\n                        let last = EXISTING_DATA[j].todos.pop()\n                          let todoTitle = document.createElement('p')\n                          todoTitle.classList.add('todoTitle')\n                          todoTitle.textContent = last.title\n                          if(document.getElementById('todosContainer')){\n                            document.getElementById('todosContainer').appendChild(todoTitle)\n                          }\n                    }\n                }\n            }\n        } \n    }\n}\n\nconst createTodo = () => {\n    const todoBtn = document.getElementById('submit')\n    todoBtn.addEventListener('click', (e)=>{\n        e.preventDefault()\n        todoConstructor()\n    } )\n    mainProjectDisplay()\n}\n\n\nconst todoDelete = () => {\n    let pr = document.querySelectorAll(\".prs\")\n    for(let i = 0; i < pr.length; i++){\n            pr[i].addEventListener('click', ()=>{\n                if(document.getElementById('todosContainer').contains(document.querySelector('.todoDiv'))){\n                    let todoDelBtn = document.querySelectorAll('.todoDelIcon')\n                    for(let j = 0; j < todoDelBtn.length; j++){\n                        todoDelBtn[j].addEventListener('click', ()=>{\n                            (0,_modules_todo__WEBPACK_IMPORTED_MODULE_1__.deleteTodo)(j)\n                            console.log('todo is deleted')\n                        })\n                        \n                    }\n                }\n                    \n                \n            })\n            \n        }  \n    }\n\n\n\n\n\n\n//# sourceURL=webpack://main-todo/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ \"./src/main.scss\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\n\n\n(0,_dom__WEBPACK_IMPORTED_MODULE_1__.createProject)()\n;(0,_dom__WEBPACK_IMPORTED_MODULE_1__.displayProjects)()\n;(0,_dom__WEBPACK_IMPORTED_MODULE_1__.allProjects)()\n;(0,_dom__WEBPACK_IMPORTED_MODULE_1__.todoConstructor)()\n;(0,_dom__WEBPACK_IMPORTED_MODULE_1__.createTodo)()\n;(0,_dom__WEBPACK_IMPORTED_MODULE_1__.mainProjectDisplay)()\n;(0,_dom__WEBPACK_IMPORTED_MODULE_1__.deleteEvent)()\n;(0,_dom__WEBPACK_IMPORTED_MODULE_1__.todoFormDisplay)()\n;(0,_dom__WEBPACK_IMPORTED_MODULE_1__.todoDelete)()\n\n\n//# sourceURL=webpack://main-todo/./src/index.js?");

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectFactory\": () => (/* binding */ projectFactory),\n/* harmony export */   \"deleteProject\": () => (/* binding */ deleteProject)\n/* harmony export */ });\nconst projectFactory = (title, description, date, priority, completed, todos) => {\n    \n    return {title, description, date, priority, completed, todos}\n}\n\nconst defaultProject = projectFactory('Default Project', 'Default project one', '08/02/2021', 'Medium', false );\n\nconst EXISTING_DATA = JSON.parse(localStorage.getItem('Projects')) || []\n for( let i = 0; i < EXISTING_DATA.length; i++) {\n    if(EXISTING_DATA[i].title == 'Default Project'){\n        EXISTING_DATA.push(defaultProject)\n        localStorage.setItem('Projects', JSON.stringify(EXISTING_DATA))\n    }\n }\n\n function deleteProject(index){\n    EXISTING_DATA.splice(index, 1)\n    localStorage.setItem('Projects', JSON.stringify(EXISTING_DATA))\n    location.reload()\n  }\n\n\n\n//# sourceURL=webpack://main-todo/./src/modules/project.js?");

/***/ }),

/***/ "./src/modules/todo.js":
/*!*****************************!*\
  !*** ./src/modules/todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"todoFactory\": () => (/* binding */ todoFactory),\n/* harmony export */   \"deleteTodo\": () => (/* binding */ deleteTodo)\n/* harmony export */ });\nconst todoFactory = (title, description, date, priority, completed) => {\n    \n    return {title, description, date, priority, completed}\n}\nconst EXISTING_DATA = JSON.parse(localStorage.getItem('Projects')) || []\n\nfunction deleteTodo(index){\n    for(let i = 0; i < EXISTING_DATA.length; i++){\n            EXISTING_DATA[i].todos.splice(index, 1)\n            localStorage.setItem('Projects', JSON.stringify(EXISTING_DATA))\n            location.reload()\n    }\n  }\n\n\n\n\n//# sourceURL=webpack://main-todo/./src/modules/todo.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;