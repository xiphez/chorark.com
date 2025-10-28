/* tslint:disable */
/* eslint-disable */
export function main(): void;
export class Game {
  free(): void;
  [Symbol.dispose](): void;
  constructor();
  /**
   * Check if the game is fully initialized and ready to start
   */
  is_ready(): boolean;
  /**
   * Initialize audio system (must be called after user interaction)
   */
  initialize_audio(): void;
  /**
   * Check if audio is initialized
   */
  is_audio_ready(): boolean;
  /**
   * Set master volume (0.0 to 1.0)
   */
  set_master_volume(volume: number): void;
  /**
   * Get master volume
   */
  get_master_volume(): number;
  /**
   * Resume audio context (required after user interaction)
   */
  resume_audio(): void;
  key_down(key: string): void;
  key_up(key: string): void;
  mouse_move(x: number, y: number): void;
  mouse_down(x: number, y: number): void;
  mouse_up(x: number, y: number): void;
  mouse_click(x: number, y: number): void;
  toggle_bounding_boxes(): void;
  toggle_health_display(): void;
  toggle_fps_display(): void;
  toggle_ship_names(): void;
  toggle_test_enemy(): void;
  trigger_screen_shake(intensity: number, duration: number): void;
  get_screen_shake_x(): number;
  get_screen_shake_y(): number;
  toggle_wave_timer(): void;
  start_game(): void;
  start_airshow(): void;
  start_frequency_lab(): void;
  start_levels(): void;
  exit_airshow(): void;
  exit_frequency_lab(): void;
  exit_levels(): void;
  back_to_menu(): void;
  get_state(): string;
  get_version_info(): string;
  update(delta_time: number): void;
  render(): void;
  update_internal(delta_time: number): void;
  render_internal(): void;
  /**
   * Emit explosion event with spatial data
   */
  emit_explosion(x: number, y: number, intensity: number): void;
  /**
   * Emit shield hit event with spatial data
   */
  emit_shield_hit(x: number, y: number): void;
  /**
   * Validate all game configurations
   * This should be called from JavaScript after the game is created but before starting the game loop
   */
  validate_configurations(): void;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly main: () => void;
  readonly __wbg_game_free: (a: number, b: number) => void;
  readonly game_new: () => [number, number, number];
  readonly game_is_ready: (a: number) => number;
  readonly game_initialize_audio: (a: number) => [number, number];
  readonly game_is_audio_ready: (a: number) => number;
  readonly game_set_master_volume: (a: number, b: number) => void;
  readonly game_get_master_volume: (a: number) => number;
  readonly game_resume_audio: (a: number) => [number, number];
  readonly game_key_down: (a: number, b: number, c: number) => [number, number];
  readonly game_key_up: (a: number, b: number, c: number) => void;
  readonly game_mouse_move: (a: number, b: number, c: number) => void;
  readonly game_mouse_down: (a: number, b: number, c: number) => void;
  readonly game_mouse_up: (a: number, b: number, c: number) => void;
  readonly game_mouse_click: (a: number, b: number, c: number) => void;
  readonly game_toggle_bounding_boxes: (a: number) => void;
  readonly game_toggle_health_display: (a: number) => void;
  readonly game_toggle_fps_display: (a: number) => void;
  readonly game_toggle_ship_names: (a: number) => void;
  readonly game_toggle_test_enemy: (a: number) => void;
  readonly game_trigger_screen_shake: (a: number, b: number, c: number) => void;
  readonly game_get_screen_shake_x: (a: number) => number;
  readonly game_get_screen_shake_y: (a: number) => number;
  readonly game_toggle_wave_timer: (a: number) => void;
  readonly game_start_game: (a: number) => void;
  readonly game_start_airshow: (a: number) => void;
  readonly game_start_frequency_lab: (a: number) => void;
  readonly game_start_levels: (a: number) => void;
  readonly game_exit_airshow: (a: number) => void;
  readonly game_exit_frequency_lab: (a: number) => void;
  readonly game_exit_levels: (a: number) => void;
  readonly game_back_to_menu: (a: number) => void;
  readonly game_get_state: (a: number) => [number, number];
  readonly game_get_version_info: (a: number) => [number, number];
  readonly game_update: (a: number, b: number) => void;
  readonly game_render: (a: number) => void;
  readonly game_update_internal: (a: number, b: number) => [number, number];
  readonly game_render_internal: (a: number) => [number, number];
  readonly game_emit_explosion: (a: number, b: number, c: number, d: number) => void;
  readonly game_emit_shield_hit: (a: number, b: number, c: number) => void;
  readonly game_validate_configurations: (a: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly __externref_table_alloc: () => number;
  readonly __wbindgen_export_2: WebAssembly.Table;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __externref_table_dealloc: (a: number) => void;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
