/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game.js */ \"./src/scripts/game.js\");\n/* harmony import */ var _scripts_game_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/game_view.js */ \"./src/scripts/game_view.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvasEl = document.getElementById(\"game-canvas\");\n  canvasEl.width = 1000;\n  canvasEl.height = 700;\n  const ctx = canvasEl.getContext(\"2d\");\n  const game = new _scripts_game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  new _scripts_game_view_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](game, ctx).start();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQXFDO0FBQ1M7QUFFOUNFLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNoRCxNQUFNQyxRQUFRLEdBQUdGLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLGFBQWEsQ0FBQztFQUN2REQsUUFBUSxDQUFDRSxLQUFLLEdBQUcsSUFBSTtFQUNyQkYsUUFBUSxDQUFDRyxNQUFNLEdBQUcsR0FBRztFQUVyQixNQUFNQyxHQUFHLEdBQUdKLFFBQVEsQ0FBQ0ssVUFBVSxDQUFDLElBQUksQ0FBQztFQUNyQyxNQUFNQyxJQUFJLEdBQUcsSUFBSVYsd0RBQUksRUFBRTtFQUN2QixJQUFJQyw2REFBUSxDQUFDUyxJQUFJLEVBQUVGLEdBQUcsQ0FBQyxDQUFDRyxLQUFLLEVBQUU7QUFDbkMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVlcC1zZWEtZGVzdHJveWVycy8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lIGZyb20gXCIuL3NjcmlwdHMvZ2FtZS5qc1wiO1xuaW1wb3J0IEdhbWVWaWV3IGZyb20gXCIuL3NjcmlwdHMvZ2FtZV92aWV3LmpzXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCBjYW52YXNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jYW52YXNcIik7XG4gICAgY2FudmFzRWwud2lkdGggPSAxMDAwO1xuICAgIGNhbnZhc0VsLmhlaWdodCA9IDcwMDtcblxuICAgIGNvbnN0IGN0eCA9IGNhbnZhc0VsLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjb25zdCBnYW1lID0gbmV3IEdhbWUoKTtcbiAgICBuZXcgR2FtZVZpZXcoZ2FtZSwgY3R4KS5zdGFydCgpO1xufSk7Il0sIm5hbWVzIjpbIkdhbWUiLCJHYW1lVmlldyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhc0VsIiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aWR0aCIsImhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJnYW1lIiwic3RhcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/enemy.js":
/*!******************************!*\
  !*** ./src/scripts/enemy.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/scripts/moving_object.js\");\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return typeof key === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (typeof input !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (typeof res !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\nclass Enemy extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    super(options);\n    this.pos = options.pos;\n    this.vel = options.vel;\n    this.radius = Enemy.RADIUS;\n    this.color = Enemy.color;\n    this.health = options.health;\n  }\n}\n_defineProperty(Enemy, \"RADIUS\", 25);\n_defineProperty(Enemy, \"COLOR\", \"brown\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (Enemy);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9lbmVteS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUEyQztBQUUzQyxNQUFNQyxLQUFLLFNBQVNELHNEQUFZO0VBSzVCRSxXQUFXQSxDQUFBLEVBQWM7SUFBQSxJQUFiQyxPQUFPLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLENBQUMsQ0FBQztJQUNwQixLQUFLLENBQUNELE9BQU8sQ0FBQztJQUNkLElBQUksQ0FBQ0ksR0FBRyxHQUFHSixPQUFPLENBQUNJLEdBQUc7SUFDdEIsSUFBSSxDQUFDQyxHQUFHLEdBQUdMLE9BQU8sQ0FBQ0ssR0FBRztJQUN0QixJQUFJLENBQUNDLE1BQU0sR0FBR1IsS0FBSyxDQUFDUyxNQUFNO0lBQzFCLElBQUksQ0FBQ0MsS0FBSyxHQUFHVixLQUFLLENBQUNVLEtBQUs7SUFDeEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdULE9BQU8sQ0FBQ1MsTUFBTTtFQUNoQztBQUVKO0FBQUNDLGVBQUEsQ0FkS1osS0FBSyxZQUVTLEVBQUU7QUFBQVksZUFBQSxDQUZoQlosS0FBSyxXQUdRLE9BQU87QUFhMUIsK0RBQWVBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZWVwLXNlYS1kZXN0cm95ZXJzLy4vc3JjL3NjcmlwdHMvZW5lbXkuanM/ZTM2MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gXCIuL21vdmluZ19vYmplY3RcIjtcblxuY2xhc3MgRW5lbXkgZXh0ZW5kcyBNb3ZpbmdPYmplY3R7XG5cbiAgICBzdGF0aWMgUkFESVVTID0gMjU7XG4gICAgc3RhdGljIENPTE9SID0gXCJicm93blwiO1xuXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KXtcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XG4gICAgICAgIHRoaXMucG9zID0gb3B0aW9ucy5wb3M7XG4gICAgICAgIHRoaXMudmVsID0gb3B0aW9ucy52ZWw7XG4gICAgICAgIHRoaXMucmFkaXVzID0gRW5lbXkuUkFESVVTO1xuICAgICAgICB0aGlzLmNvbG9yID0gRW5lbXkuY29sb3I7XG4gICAgICAgIHRoaXMuaGVhbHRoID0gb3B0aW9ucy5oZWFsdGg7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVuZW15OyAiXSwibmFtZXMiOlsiTW92aW5nT2JqZWN0IiwiRW5lbXkiLCJjb25zdHJ1Y3RvciIsIm9wdGlvbnMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJwb3MiLCJ2ZWwiLCJyYWRpdXMiLCJSQURJVVMiLCJjb2xvciIsImhlYWx0aCIsIl9kZWZpbmVQcm9wZXJ0eSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/enemy.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _enemy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enemy.js */ \"./src/scripts/enemy.js\");\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship.js */ \"./src/scripts/ship.js\");\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return typeof key === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (typeof input !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (typeof res !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\n\nclass Game {\n  constructor() {\n    this.enemies = [];\n    this.projectiles = [];\n    this.ships = [];\n  }\n  draw(ctx) {\n    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n    ctx.fillStyle = Game.BG_COLOR;\n    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);\n    this.allObjects().forEach(object => {\n      object.draw(ctx);\n    });\n  }\n}\n_defineProperty(Game, \"BG_COLOR\", \"#2B65EC\");\n_defineProperty(Game, \"DIM_X\", 1000);\n_defineProperty(Game, \"DIM_Y\", 700);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQjtBQUNGO0FBRTdCLE1BQU1FLElBQUksQ0FBQztFQUNQQyxXQUFXQSxDQUFBLEVBQUU7SUFDVCxJQUFJLENBQUNDLE9BQU8sR0FBRyxFQUFFO0lBQ2pCLElBQUksQ0FBQ0MsV0FBVyxHQUFHLEVBQUU7SUFDckIsSUFBSSxDQUFDQyxLQUFLLEdBQUcsRUFBRTtFQUNuQjtFQU1BQyxJQUFJQSxDQUFDQyxHQUFHLEVBQUU7SUFDTkEsR0FBRyxDQUFDQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRVAsSUFBSSxDQUFDUSxLQUFLLEVBQUVSLElBQUksQ0FBQ1MsS0FBSyxDQUFDO0lBQzNDSCxHQUFHLENBQUNJLFNBQVMsR0FBR1YsSUFBSSxDQUFDVyxRQUFRO0lBQzdCTCxHQUFHLENBQUNNLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFWixJQUFJLENBQUNRLEtBQUssRUFBRVIsSUFBSSxDQUFDUyxLQUFLLENBQUM7SUFFMUMsSUFBSSxDQUFDSSxVQUFVLEVBQUUsQ0FBQ0MsT0FBTyxDQUFFQyxNQUFNLElBQUs7TUFDbENBLE1BQU0sQ0FBQ1YsSUFBSSxDQUFDQyxHQUFHLENBQUM7SUFDcEIsQ0FBQyxDQUFDO0VBQ047QUFFSjtBQUFDVSxlQUFBLENBckJLaEIsSUFBSSxjQU9ZLFNBQVM7QUFBQWdCLGVBQUEsQ0FQekJoQixJQUFJLFdBUVMsSUFBSTtBQUFBZ0IsZUFBQSxDQVJqQmhCLElBQUksV0FTUyxHQUFHO0FBY3RCLCtEQUFlQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVlcC1zZWEtZGVzdHJveWVycy8uL3NyYy9zY3JpcHRzL2dhbWUuanM/Y2RjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRW5lbXkgZnJvbSBcIi4vZW5lbXkuanNcIjtcbmltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXAuanNcIjtcblxuY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5lbmVtaWVzID0gW107XG4gICAgICAgIHRoaXMucHJvamVjdGlsZXMgPSBbXTtcbiAgICAgICAgdGhpcy5zaGlwcyA9IFtdO1xuICAgIH1cblxuICAgIHN0YXRpYyBCR19DT0xPUiA9IFwiIzJCNjVFQ1wiO1xuICAgIHN0YXRpYyBESU1fWCA9IDEwMDA7XG4gICAgc3RhdGljIERJTV9ZID0gNzAwO1xuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBHYW1lLkRJTV9YLCBHYW1lLkRJTV9ZKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IEdhbWUuQkdfQ09MT1I7XG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBHYW1lLkRJTV9YLCBHYW1lLkRJTV9ZKTtcblxuICAgICAgICB0aGlzLmFsbE9iamVjdHMoKS5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICAgICAgICAgIG9iamVjdC5kcmF3KGN0eCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lOyJdLCJuYW1lcyI6WyJFbmVteSIsIlNoaXAiLCJHYW1lIiwiY29uc3RydWN0b3IiLCJlbmVtaWVzIiwicHJvamVjdGlsZXMiLCJzaGlwcyIsImRyYXciLCJjdHgiLCJjbGVhclJlY3QiLCJESU1fWCIsIkRJTV9ZIiwiZmlsbFN0eWxlIiwiQkdfQ09MT1IiLCJmaWxsUmVjdCIsImFsbE9iamVjdHMiLCJmb3JFYWNoIiwib2JqZWN0IiwiX2RlZmluZVByb3BlcnR5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/game_view.js":
/*!**********************************!*\
  !*** ./src/scripts/game_view.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass GameView {\n  constructor(game, ctx) {\n    this.game = game;\n    this.ctx = ctx;\n  }\n  start() {\n    //setInterval(this.game.moveObjects.bind(this.game), 20);\n    setInterval(this.game.draw.bind(this.game, this.ctx), 20);\n    // setInterval(() => {\n    //     this.game.draw(this.ctx);\n    // }, 20)\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameView);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lX3ZpZXcuanMuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLFFBQVE7RUFDVkMsV0FBV0EsQ0FBQ0MsSUFBSSxFQUFFQyxHQUFHLEVBQUU7SUFDbkIsSUFBSSxDQUFDRCxJQUFJLEdBQUdBLElBQUk7SUFDaEIsSUFBSSxDQUFDQyxHQUFHLEdBQUdBLEdBQUc7RUFFbEI7RUFFQUMsS0FBS0EsQ0FBQSxFQUFHO0lBQ0o7SUFDQUMsV0FBVyxDQUFDLElBQUksQ0FBQ0gsSUFBSSxDQUFDSSxJQUFJLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUNMLElBQUksRUFBRSxJQUFJLENBQUNDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUN6RDtJQUNBO0lBQ0E7RUFDSjtBQUVKOztBQUVBLCtEQUFlSCxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVlcC1zZWEtZGVzdHJveWVycy8uL3NyYy9zY3JpcHRzL2dhbWVfdmlldy5qcz84MGVlIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEdhbWVWaWV3e1xuICAgIGNvbnN0cnVjdG9yKGdhbWUsIGN0eCkge1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcblxuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICAvL3NldEludGVydmFsKHRoaXMuZ2FtZS5tb3ZlT2JqZWN0cy5iaW5kKHRoaXMuZ2FtZSksIDIwKTtcbiAgICAgICAgc2V0SW50ZXJ2YWwodGhpcy5nYW1lLmRyYXcuYmluZCh0aGlzLmdhbWUsIHRoaXMuY3R4KSwgMjApO1xuICAgICAgICAvLyBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIC8vICAgICB0aGlzLmdhbWUuZHJhdyh0aGlzLmN0eCk7XG4gICAgICAgIC8vIH0sIDIwKVxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lVmlldzsiXSwibmFtZXMiOlsiR2FtZVZpZXciLCJjb25zdHJ1Y3RvciIsImdhbWUiLCJjdHgiLCJzdGFydCIsInNldEludGVydmFsIiwiZHJhdyIsImJpbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/game_view.js\n");

/***/ }),

/***/ "./src/scripts/moving_object.js":
/*!**************************************!*\
  !*** ./src/scripts/moving_object.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass MovingObject {\n  constructor() {\n    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    this.pos = options.pos;\n    this.vel = options.vel;\n    this.radius = options.radius;\n    this.color = options.color;\n    this.game = options.game;\n  }\n  draw(ctx) {\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n    ctx.fillStyle = this.color;\n    ctx.stroke();\n  }\n  move() {\n    let newxPos = this.pos[0] + this.vel[0];\n    let newyPos = this.pos[1] + this.vel[1];\n    this.pos = this.game.wrap([newxPos, newyPos]);\n  }\n\n  // isCollidedWith(otherObject) {\n  //     let centerDistance = sqrt((this.pos[0] - otherObject.pos[0]) ** 2 + (this.pos[1] - otherObject.pos[1]) ** 2);\n  //     let sumRadii = this.radius + otherObject.radius;\n\n  //     if (centerDistance < sumRadii) {\n  //         return true;\n  //     } else {\n  //         return false;\n  //     }\n  // }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovingObject);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tb3Zpbmdfb2JqZWN0LmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxZQUFZLENBQUM7RUFDZkMsV0FBV0EsQ0FBQSxFQUFlO0lBQUEsSUFBZEMsT0FBTyxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxDQUFDLENBQUM7SUFDcEIsSUFBSSxDQUFDRyxHQUFHLEdBQUdKLE9BQU8sQ0FBQ0ksR0FBRztJQUN0QixJQUFJLENBQUNDLEdBQUcsR0FBR0wsT0FBTyxDQUFDSyxHQUFHO0lBQ3RCLElBQUksQ0FBQ0MsTUFBTSxHQUFHTixPQUFPLENBQUNNLE1BQU07SUFDNUIsSUFBSSxDQUFDQyxLQUFLLEdBQUdQLE9BQU8sQ0FBQ08sS0FBSztJQUMxQixJQUFJLENBQUNDLElBQUksR0FBR1IsT0FBTyxDQUFDUSxJQUFJO0VBQzVCO0VBRUFDLElBQUlBLENBQUNDLEdBQUcsRUFBRTtJQUNOQSxHQUFHLENBQUNDLFNBQVMsRUFBRTtJQUNmRCxHQUFHLENBQUNFLEdBQUcsQ0FBQyxJQUFJLENBQUNSLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUNBLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUNFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHTyxJQUFJLENBQUNDLEVBQUUsQ0FBQztJQUM5REosR0FBRyxDQUFDSyxTQUFTLEdBQUcsSUFBSSxDQUFDUixLQUFLO0lBQzFCRyxHQUFHLENBQUNNLE1BQU0sRUFBRTtFQUNoQjtFQUVBQyxJQUFJQSxDQUFBLEVBQUc7SUFDSCxJQUFJQyxPQUFPLEdBQUcsSUFBSSxDQUFDZCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLElBQUljLE9BQU8sR0FBRyxJQUFJLENBQUNmLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdkMsSUFBSSxDQUFDRCxHQUFHLEdBQUcsSUFBSSxDQUFDSSxJQUFJLENBQUNZLElBQUksQ0FBQyxDQUFDRixPQUFPLEVBQUVDLE9BQU8sQ0FBQyxDQUFDO0VBQ2pEOztFQUVBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7QUFFSjs7QUFFQSwrREFBZXJCLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZWVwLXNlYS1kZXN0cm95ZXJzLy4vc3JjL3NjcmlwdHMvbW92aW5nX29iamVjdC5qcz9jMjAxIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE1vdmluZ09iamVjdCB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHRoaXMucG9zID0gb3B0aW9ucy5wb3M7XG4gICAgICAgIHRoaXMudmVsID0gb3B0aW9ucy52ZWw7XG4gICAgICAgIHRoaXMucmFkaXVzID0gb3B0aW9ucy5yYWRpdXM7XG4gICAgICAgIHRoaXMuY29sb3IgPSBvcHRpb25zLmNvbG9yO1xuICAgICAgICB0aGlzLmdhbWUgPSBvcHRpb25zLmdhbWU7XG4gICAgfVxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSwgdGhpcy5yYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9XG5cbiAgICBtb3ZlKCkge1xuICAgICAgICBsZXQgbmV3eFBvcyA9IHRoaXMucG9zWzBdICsgdGhpcy52ZWxbMF07XG4gICAgICAgIGxldCBuZXd5UG9zID0gdGhpcy5wb3NbMV0gKyB0aGlzLnZlbFsxXTtcbiAgICAgICAgdGhpcy5wb3MgPSB0aGlzLmdhbWUud3JhcChbbmV3eFBvcywgbmV3eVBvc10pO1xuICAgIH1cblxuICAgIC8vIGlzQ29sbGlkZWRXaXRoKG90aGVyT2JqZWN0KSB7XG4gICAgLy8gICAgIGxldCBjZW50ZXJEaXN0YW5jZSA9IHNxcnQoKHRoaXMucG9zWzBdIC0gb3RoZXJPYmplY3QucG9zWzBdKSAqKiAyICsgKHRoaXMucG9zWzFdIC0gb3RoZXJPYmplY3QucG9zWzFdKSAqKiAyKTtcbiAgICAvLyAgICAgbGV0IHN1bVJhZGlpID0gdGhpcy5yYWRpdXMgKyBvdGhlck9iamVjdC5yYWRpdXM7XG5cbiAgICAvLyAgICAgaWYgKGNlbnRlckRpc3RhbmNlIDwgc3VtUmFkaWkpIHtcbiAgICAvLyAgICAgICAgIHJldHVybiB0cnVlO1xuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmluZ09iamVjdDsiXSwibmFtZXMiOlsiTW92aW5nT2JqZWN0IiwiY29uc3RydWN0b3IiLCJvcHRpb25zIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwicG9zIiwidmVsIiwicmFkaXVzIiwiY29sb3IiLCJnYW1lIiwiZHJhdyIsImN0eCIsImJlZ2luUGF0aCIsImFyYyIsIk1hdGgiLCJQSSIsImZpbGxTdHlsZSIsInN0cm9rZSIsIm1vdmUiLCJuZXd4UG9zIiwibmV3eVBvcyIsIndyYXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/moving_object.js\n");

/***/ }),

/***/ "./src/scripts/ship.js":
/*!*****************************!*\
  !*** ./src/scripts/ship.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Ship {\n  constructor(options) {\n    this.pos = options.pos;\n    this.vel = options.vel;\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ship);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9zaGlwLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxJQUFJO0VBQ05DLFdBQVdBLENBQUNDLE9BQU8sRUFBQztJQUNoQixJQUFJLENBQUNDLEdBQUcsR0FBR0QsT0FBTyxDQUFDQyxHQUFHO0lBQ3RCLElBQUksQ0FBQ0MsR0FBRyxHQUFHRixPQUFPLENBQUNFLEdBQUc7RUFDMUI7QUFFSjtBQUVBLCtEQUFlSixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVlcC1zZWEtZGVzdHJveWVycy8uL3NyYy9zY3JpcHRzL3NoaXAuanM/NTUwNiJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTaGlwe1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpe1xuICAgICAgICB0aGlzLnBvcyA9IG9wdGlvbnMucG9zO1xuICAgICAgICB0aGlzLnZlbCA9IG9wdGlvbnMudmVsO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGlwOyJdLCJuYW1lcyI6WyJTaGlwIiwiY29uc3RydWN0b3IiLCJvcHRpb25zIiwicG9zIiwidmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/ship.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZWVwLXNlYS1kZXN0cm95ZXJzLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;