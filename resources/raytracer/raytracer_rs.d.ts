/* tslint:disable */
/* eslint-disable */
/**
* @param {CanvasRenderingContext2D} ctx 
* @param {number} width 
* @param {number} height 
*/
export function animate(ctx: CanvasRenderingContext2D, width: number, height: number): void;
export class Scene {
  free(): void;
  height: number;
  width: number;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly animate: (a: number, b: number, c: number) => void;
  readonly __wbg_scene_free: (a: number) => void;
  readonly __wbg_get_scene_width: (a: number) => number;
  readonly __wbg_set_scene_width: (a: number, b: number) => void;
  readonly __wbg_get_scene_height: (a: number) => number;
  readonly __wbg_set_scene_height: (a: number, b: number) => void;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_export_2: WebAssembly.Table;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h427a11cb97b7a23d: (a: number, b: number, c: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
        