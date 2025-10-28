const lAudioContext = (typeof AudioContext !== 'undefined' ? AudioContext : (typeof webkitAudioContext !== 'undefined' ? webkitAudioContext : undefined));
let wasm;
export function __wbg_set_wasm(val) {
    wasm = val;
}


let cachedUint8ArrayMemory0 = null;

function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

const MAX_SAFARI_DECODE_BYTES = 2146435072;
let numBytesDecoded = 0;
function decodeText(ptr, len) {
    numBytesDecoded += len;
    if (numBytesDecoded >= MAX_SAFARI_DECODE_BYTES) {
        cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
        cachedTextDecoder.decode();
        numBytesDecoded = len;
    }
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return decodeText(ptr, len);
}

function addToExternrefTable0(obj) {
    const idx = wasm.__externref_table_alloc();
    wasm.__wbindgen_export_2.set(idx, obj);
    return idx;
}

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        const idx = addToExternrefTable0(e);
        wasm.__wbindgen_exn_store(idx);
    }
}

let cachedFloat32ArrayMemory0 = null;

function getFloat32ArrayMemory0() {
    if (cachedFloat32ArrayMemory0 === null || cachedFloat32ArrayMemory0.byteLength === 0) {
        cachedFloat32ArrayMemory0 = new Float32Array(wasm.memory.buffer);
    }
    return cachedFloat32ArrayMemory0;
}

function getArrayF32FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getFloat32ArrayMemory0().subarray(ptr / 4, ptr / 4 + len);
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

function getArrayU8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  `${val}`;
    }
    if (type == 'string') {
        return `"${val}"`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return `Symbol(${description})`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return `Function(${name})`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches && builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of `val`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return `${val.name}: ${val.message}\n${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}

let WASM_VECTOR_LEN = 0;

const cachedTextEncoder = new TextEncoder();

if (!('encodeInto' in cachedTextEncoder)) {
    cachedTextEncoder.encodeInto = function (arg, view) {
        const buf = cachedTextEncoder.encode(arg);
        view.set(buf);
        return {
            read: arg.length,
            written: buf.length
        };
    }
}

function passStringToWasm0(arg, malloc, realloc) {

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8ArrayMemory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
        const ret = cachedTextEncoder.encodeInto(arg, view);

        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

let cachedDataViewMemory0 = null;

function getDataViewMemory0() {
    if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {
        cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
    }
    return cachedDataViewMemory0;
}

export function main() {
    wasm.main();
}

function takeFromExternrefTable0(idx) {
    const value = wasm.__wbindgen_export_2.get(idx);
    wasm.__externref_table_dealloc(idx);
    return value;
}

const GameFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_game_free(ptr >>> 0, 1));

export class Game {

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        GameFinalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_game_free(ptr, 0);
    }
    constructor() {
        const ret = wasm.game_new();
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        this.__wbg_ptr = ret[0] >>> 0;
        GameFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
    /**
     * Check if the game is fully initialized and ready to start
     * @returns {boolean}
     */
    is_ready() {
        const ret = wasm.game_is_ready(this.__wbg_ptr);
        return ret !== 0;
    }
    /**
     * Initialize audio system (must be called after user interaction)
     */
    initialize_audio() {
        const ret = wasm.game_initialize_audio(this.__wbg_ptr);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * Check if audio is initialized
     * @returns {boolean}
     */
    is_audio_ready() {
        const ret = wasm.game_is_audio_ready(this.__wbg_ptr);
        return ret !== 0;
    }
    /**
     * Set master volume (0.0 to 1.0)
     * @param {number} volume
     */
    set_master_volume(volume) {
        wasm.game_set_master_volume(this.__wbg_ptr, volume);
    }
    /**
     * Get master volume
     * @returns {number}
     */
    get_master_volume() {
        const ret = wasm.game_get_master_volume(this.__wbg_ptr);
        return ret;
    }
    /**
     * Resume audio context (required after user interaction)
     */
    resume_audio() {
        const ret = wasm.game_resume_audio(this.__wbg_ptr);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * @param {string} key
     */
    key_down(key) {
        const ptr0 = passStringToWasm0(key, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.game_key_down(this.__wbg_ptr, ptr0, len0);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * @param {string} key
     */
    key_up(key) {
        const ptr0 = passStringToWasm0(key, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.game_key_up(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @param {number} x
     * @param {number} y
     */
    mouse_move(x, y) {
        wasm.game_mouse_move(this.__wbg_ptr, x, y);
    }
    /**
     * @param {number} x
     * @param {number} y
     */
    mouse_down(x, y) {
        wasm.game_mouse_down(this.__wbg_ptr, x, y);
    }
    /**
     * @param {number} x
     * @param {number} y
     */
    mouse_up(x, y) {
        wasm.game_mouse_up(this.__wbg_ptr, x, y);
    }
    /**
     * @param {number} x
     * @param {number} y
     */
    mouse_click(x, y) {
        wasm.game_mouse_click(this.__wbg_ptr, x, y);
    }
    toggle_bounding_boxes() {
        wasm.game_toggle_bounding_boxes(this.__wbg_ptr);
    }
    toggle_health_display() {
        wasm.game_toggle_health_display(this.__wbg_ptr);
    }
    toggle_fps_display() {
        wasm.game_toggle_fps_display(this.__wbg_ptr);
    }
    toggle_ship_names() {
        wasm.game_toggle_ship_names(this.__wbg_ptr);
    }
    toggle_test_enemy() {
        wasm.game_toggle_test_enemy(this.__wbg_ptr);
    }
    /**
     * @param {number} intensity
     * @param {number} duration
     */
    trigger_screen_shake(intensity, duration) {
        wasm.game_trigger_screen_shake(this.__wbg_ptr, intensity, duration);
    }
    /**
     * @returns {number}
     */
    get_screen_shake_x() {
        const ret = wasm.game_get_screen_shake_x(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get_screen_shake_y() {
        const ret = wasm.game_get_screen_shake_x(this.__wbg_ptr);
        return ret;
    }
    toggle_wave_timer() {
        wasm.game_toggle_wave_timer(this.__wbg_ptr);
    }
    start_game() {
        wasm.game_start_game(this.__wbg_ptr);
    }
    start_airshow() {
        wasm.game_start_airshow(this.__wbg_ptr);
    }
    start_frequency_lab() {
        wasm.game_start_frequency_lab(this.__wbg_ptr);
    }
    start_levels() {
        wasm.game_start_levels(this.__wbg_ptr);
    }
    exit_airshow() {
        wasm.game_exit_airshow(this.__wbg_ptr);
    }
    exit_frequency_lab() {
        wasm.game_exit_frequency_lab(this.__wbg_ptr);
    }
    exit_levels() {
        wasm.game_exit_levels(this.__wbg_ptr);
    }
    back_to_menu() {
        wasm.game_back_to_menu(this.__wbg_ptr);
    }
    /**
     * @returns {string}
     */
    get_state() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.game_get_state(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * @returns {string}
     */
    get_version_info() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.game_get_version_info(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * @param {number} delta_time
     */
    update(delta_time) {
        wasm.game_update(this.__wbg_ptr, delta_time);
    }
    render() {
        wasm.game_render(this.__wbg_ptr);
    }
    /**
     * @param {number} delta_time
     */
    update_internal(delta_time) {
        const ret = wasm.game_update_internal(this.__wbg_ptr, delta_time);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    render_internal() {
        const ret = wasm.game_render_internal(this.__wbg_ptr);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * Emit explosion event with spatial data
     * @param {number} x
     * @param {number} y
     * @param {number} intensity
     */
    emit_explosion(x, y, intensity) {
        wasm.game_emit_explosion(this.__wbg_ptr, x, y, intensity);
    }
    /**
     * Emit shield hit event with spatial data
     * @param {number} x
     * @param {number} y
     */
    emit_shield_hit(x, y) {
        wasm.game_emit_shield_hit(this.__wbg_ptr, x, y);
    }
    /**
     * Validate all game configurations
     * This should be called from JavaScript after the game is created but before starting the game loop
     */
    validate_configurations() {
        wasm.game_validate_configurations(this.__wbg_ptr);
    }
}
if (Symbol.dispose) Game.prototype[Symbol.dispose] = Game.prototype.free;

export function __wbg_addColorStop_02d04059a526a3f4() { return handleError(function (arg0, arg1, arg2, arg3) {
    arg0.addColorStop(arg1, getStringFromWasm0(arg2, arg3));
}, arguments) };

export function __wbg_arc_61cbec33cc96a55e() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
    arg0.arc(arg1, arg2, arg3, arg4, arg5);
}, arguments) };

export function __wbg_beginPath_119487ebd04e9e1c(arg0) {
    arg0.beginPath();
};

export function __wbg_bezierCurveTo_ea13a3f830094c0d(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
    arg0.bezierCurveTo(arg1, arg2, arg3, arg4, arg5, arg6);
};

export function __wbg_call_13410aac570ffff7() { return handleError(function (arg0, arg1) {
    const ret = arg0.call(arg1);
    return ret;
}, arguments) };

export function __wbg_call_a5400b25a865cfd8() { return handleError(function (arg0, arg1, arg2) {
    const ret = arg0.call(arg1, arg2);
    return ret;
}, arguments) };

export function __wbg_clip_41d49ab17f9d94c6(arg0) {
    arg0.clip();
};

export function __wbg_closePath_58530240bb00a7fc(arg0) {
    arg0.closePath();
};

export function __wbg_connect_51a3453578e88c8d() { return handleError(function (arg0, arg1) {
    const ret = arg0.connect(arg1);
    return ret;
}, arguments) };

export function __wbg_copyToChannel_a38abe42a50814f2() { return handleError(function (arg0, arg1, arg2, arg3) {
    arg0.copyToChannel(getArrayF32FromWasm0(arg1, arg2), arg3);
}, arguments) };

export function __wbg_createBufferSource_b6e491096b886f1e() { return handleError(function (arg0) {
    const ret = arg0.createBufferSource();
    return ret;
}, arguments) };

export function __wbg_createBuffer_0edaadc8638b54f1() { return handleError(function (arg0, arg1, arg2, arg3) {
    const ret = arg0.createBuffer(arg1 >>> 0, arg2 >>> 0, arg3);
    return ret;
}, arguments) };

export function __wbg_createGain_03f16845eb914fcd() { return handleError(function (arg0) {
    const ret = arg0.createGain();
    return ret;
}, arguments) };

export function __wbg_createLinearGradient_098463fca2d0190f(arg0, arg1, arg2, arg3, arg4) {
    const ret = arg0.createLinearGradient(arg1, arg2, arg3, arg4);
    return ret;
};

export function __wbg_createStereoPanner_3787e639c387d866() { return handleError(function (arg0) {
    const ret = arg0.createStereoPanner();
    return ret;
}, arguments) };

export function __wbg_crypto_574e78ad8b13b65f(arg0) {
    const ret = arg0.crypto;
    return ret;
};

export function __wbg_debug_c906769d2f88c17b(arg0) {
    console.debug(arg0);
};

export function __wbg_destination_1af203eb0da1d3ca(arg0) {
    const ret = arg0.destination;
    return ret;
};

export function __wbg_document_7d29d139bd619045(arg0) {
    const ret = arg0.document;
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
};

export function __wbg_ellipse_a226126ad3505989() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
    arg0.ellipse(arg1, arg2, arg3, arg4, arg5, arg6, arg7);
}, arguments) };

export function __wbg_error_99981e16d476aa5c(arg0) {
    console.error(arg0);
};

export function __wbg_fillRect_a160edfa11fce49b(arg0, arg1, arg2, arg3, arg4) {
    arg0.fillRect(arg1, arg2, arg3, arg4);
};

export function __wbg_fillText_c105710356b625aa() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
    arg0.fillText(getStringFromWasm0(arg1, arg2), arg3, arg4);
}, arguments) };

export function __wbg_fill_7b331ac62ac7c50b(arg0) {
    arg0.fill();
};

export function __wbg_gain_f0079e6d7d572c02(arg0) {
    const ret = arg0.gain;
    return ret;
};

export function __wbg_getContext_15e158d04230a6f6() { return handleError(function (arg0, arg1, arg2) {
    const ret = arg0.getContext(getStringFromWasm0(arg1, arg2));
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}, arguments) };

export function __wbg_getElementById_3c3d00d9a16a01dd(arg0, arg1, arg2) {
    const ret = arg0.getElementById(getStringFromWasm0(arg1, arg2));
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
};

export function __wbg_getRandomValues_b8f5dbd5f3995a9e() { return handleError(function (arg0, arg1) {
    arg0.getRandomValues(arg1);
}, arguments) };

export function __wbg_globalAlpha_25f7621d354be161(arg0) {
    const ret = arg0.globalAlpha;
    return ret;
};

export function __wbg_info_6cf68c1a86a92f6a(arg0) {
    console.info(arg0);
};

export function __wbg_instanceof_CanvasRenderingContext2d_8c616198ec03b12f(arg0) {
    let result;
    try {
        result = arg0 instanceof CanvasRenderingContext2D;
    } catch (_) {
        result = false;
    }
    const ret = result;
    return ret;
};

export function __wbg_instanceof_HtmlCanvasElement_299c60950dbb3428(arg0) {
    let result;
    try {
        result = arg0 instanceof HTMLCanvasElement;
    } catch (_) {
        result = false;
    }
    const ret = result;
    return ret;
};

export function __wbg_instanceof_Window_12d20d558ef92592(arg0) {
    let result;
    try {
        result = arg0 instanceof Window;
    } catch (_) {
        result = false;
    }
    const ret = result;
    return ret;
};

export function __wbg_length_6bb7e81f9d7713e4(arg0) {
    const ret = arg0.length;
    return ret;
};

export function __wbg_lineTo_d9b895383c2303ba(arg0, arg1, arg2) {
    arg0.lineTo(arg1, arg2);
};

export function __wbg_log_6c7b5f4f00b8ce3f(arg0) {
    console.log(arg0);
};

export function __wbg_moveTo_a0b1ec729ba8ee5d(arg0, arg1, arg2) {
    arg0.moveTo(arg1, arg2);
};

export function __wbg_msCrypto_a61aeb35a24c1329(arg0) {
    const ret = arg0.msCrypto;
    return ret;
};

export function __wbg_new_02f07c7a632b3a4e() { return handleError(function () {
    const ret = new lAudioContext();
    return ret;
}, arguments) };

export function __wbg_new_1f3a344cf3123716() {
    const ret = new Array();
    return ret;
};

export function __wbg_newnoargs_254190557c45b4ec(arg0, arg1) {
    const ret = new Function(getStringFromWasm0(arg0, arg1));
    return ret;
};

export function __wbg_newwithlength_a167dcc7aaa3ba77(arg0) {
    const ret = new Uint8Array(arg0 >>> 0);
    return ret;
};

export function __wbg_node_905d3e251edff8a2(arg0) {
    const ret = arg0.node;
    return ret;
};

export function __wbg_now_1e80617bcee43265() {
    const ret = Date.now();
    return ret;
};

export function __wbg_now_2c95c9de01293173(arg0) {
    const ret = arg0.now();
    return ret;
};

export function __wbg_now_465b957a7ef894c8() {
    const ret = performance.now();
    return ret;
};

export function __wbg_pan_c0dd27f92beaea58(arg0) {
    const ret = arg0.pan;
    return ret;
};

export function __wbg_performance_7a3ffd0b17f663ad(arg0) {
    const ret = arg0.performance;
    return ret;
};

export function __wbg_process_dc0fbacc7c1c06f7(arg0) {
    const ret = arg0.process;
    return ret;
};

export function __wbg_prototypesetcall_3d4a26c1ed734349(arg0, arg1, arg2) {
    Uint8Array.prototype.set.call(getArrayU8FromWasm0(arg0, arg1), arg2);
};

export function __wbg_push_330b2eb93e4e1212(arg0, arg1) {
    const ret = arg0.push(arg1);
    return ret;
};

export function __wbg_quadraticCurveTo_218f58926bced202(arg0, arg1, arg2, arg3, arg4) {
    arg0.quadraticCurveTo(arg1, arg2, arg3, arg4);
};

export function __wbg_randomFillSync_ac0988aba3254290() { return handleError(function (arg0, arg1) {
    arg0.randomFillSync(arg1);
}, arguments) };

export function __wbg_rect_e6e24189984df3f5(arg0, arg1, arg2, arg3, arg4) {
    arg0.rect(arg1, arg2, arg3, arg4);
};

export function __wbg_require_60cc747a6bc5215a() { return handleError(function () {
    const ret = module.require;
    return ret;
}, arguments) };

export function __wbg_restore_45dead792d0756f6(arg0) {
    arg0.restore();
};

export function __wbg_resume_3f196d8b2345b719() { return handleError(function (arg0) {
    const ret = arg0.resume();
    return ret;
}, arguments) };

export function __wbg_rotate_a7d254d4ee76a2f3() { return handleError(function (arg0, arg1) {
    arg0.rotate(arg1);
}, arguments) };

export function __wbg_sampleRate_150131c581587995(arg0) {
    const ret = arg0.sampleRate;
    return ret;
};

export function __wbg_save_9c2af6c4f73acbb8(arg0) {
    arg0.save();
};

export function __wbg_scale_348633e5fb4d1f00() { return handleError(function (arg0, arg1, arg2) {
    arg0.scale(arg1, arg2);
}, arguments) };

export function __wbg_setLineDash_5c96338d7fd195f9() { return handleError(function (arg0, arg1) {
    arg0.setLineDash(arg1);
}, arguments) };

export function __wbg_set_453345bcda80b89a() { return handleError(function (arg0, arg1, arg2) {
    const ret = Reflect.set(arg0, arg1, arg2);
    return ret;
}, arguments) };

export function __wbg_setbuffer_1de6dcde63adf30e(arg0, arg1) {
    arg0.buffer = arg1;
};

export function __wbg_setfillStyle_5242e4485d022084(arg0, arg1) {
    arg0.fillStyle = arg1;
};

export function __wbg_setfillStyle_9d745b4440df0b8b(arg0, arg1) {
    arg0.fillStyle = arg1;
};

export function __wbg_setfillStyle_a9ad5b25cf62a5bc(arg0, arg1, arg2) {
    arg0.fillStyle = getStringFromWasm0(arg1, arg2);
};

export function __wbg_setfont_175a33e591a4080a(arg0, arg1, arg2) {
    arg0.font = getStringFromWasm0(arg1, arg2);
};

export function __wbg_setglobalAlpha_3775d2bf14be6337(arg0, arg1) {
    arg0.globalAlpha = arg1;
};

export function __wbg_setheight_4fce583024b2d088(arg0, arg1) {
    arg0.height = arg1 >>> 0;
};

export function __wbg_setlineCap_c4746ffc7c654931(arg0, arg1, arg2) {
    arg0.lineCap = getStringFromWasm0(arg1, arg2);
};

export function __wbg_setlineJoin_30c59321fbc0bd3d(arg0, arg1, arg2) {
    arg0.lineJoin = getStringFromWasm0(arg1, arg2);
};

export function __wbg_setlineWidth_069d571345379833(arg0, arg1) {
    arg0.lineWidth = arg1;
};

export function __wbg_setshadowBlur_f3900459d0e425f6(arg0, arg1) {
    arg0.shadowBlur = arg1;
};

export function __wbg_setshadowColor_ae4af9c91d9b63c8(arg0, arg1, arg2) {
    arg0.shadowColor = getStringFromWasm0(arg1, arg2);
};

export function __wbg_setshadowOffsetX_45b0c4ab00558291(arg0, arg1) {
    arg0.shadowOffsetX = arg1;
};

export function __wbg_setshadowOffsetY_06d83607f47981dc(arg0, arg1) {
    arg0.shadowOffsetY = arg1;
};

export function __wbg_setstrokeStyle_3c450999cfcdcd2f(arg0, arg1, arg2) {
    arg0.strokeStyle = getStringFromWasm0(arg1, arg2);
};

export function __wbg_setstrokeStyle_7f1d68ee3f91420a(arg0, arg1) {
    arg0.strokeStyle = arg1;
};

export function __wbg_settextAlign_45538ab0baa2edad(arg0, arg1, arg2) {
    arg0.textAlign = getStringFromWasm0(arg1, arg2);
};

export function __wbg_settextBaseline_8af6d434952d07cc(arg0, arg1, arg2) {
    arg0.textBaseline = getStringFromWasm0(arg1, arg2);
};

export function __wbg_setvalue_391c4fe004b9fe2c(arg0, arg1) {
    arg0.value = arg1;
};

export function __wbg_setwidth_40a6ed203b92839d(arg0, arg1) {
    arg0.width = arg1 >>> 0;
};

export function __wbg_start_fa96db02cb25190a() { return handleError(function (arg0) {
    arg0.start();
}, arguments) };

export function __wbg_static_accessor_GLOBAL_8921f820c2ce3f12() {
    const ret = typeof global === 'undefined' ? null : global;
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
};

export function __wbg_static_accessor_GLOBAL_THIS_f0a4409105898184() {
    const ret = typeof globalThis === 'undefined' ? null : globalThis;
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
};

export function __wbg_static_accessor_SELF_995b214ae681ff99() {
    const ret = typeof self === 'undefined' ? null : self;
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
};

export function __wbg_static_accessor_WINDOW_cde3890479c675ea() {
    const ret = typeof window === 'undefined' ? null : window;
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
};

export function __wbg_strokeRect_cbddaaf583a64cae(arg0, arg1, arg2, arg3, arg4) {
    arg0.strokeRect(arg1, arg2, arg3, arg4);
};

export function __wbg_strokeText_e92d38031f8db62f() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
    arg0.strokeText(getStringFromWasm0(arg1, arg2), arg3, arg4);
}, arguments) };

export function __wbg_stroke_b53e61cc42965e61(arg0) {
    arg0.stroke();
};

export function __wbg_subarray_70fd07feefe14294(arg0, arg1, arg2) {
    const ret = arg0.subarray(arg1 >>> 0, arg2 >>> 0);
    return ret;
};

export function __wbg_translate_d3a32d4e41c9ac8e() { return handleError(function (arg0, arg1, arg2) {
    arg0.translate(arg1, arg2);
}, arguments) };

export function __wbg_versions_c01dfd4722a88165(arg0) {
    const ret = arg0.versions;
    return ret;
};

export function __wbg_warn_e2ada06313f92f09(arg0) {
    console.warn(arg0);
};

export function __wbg_wbindgendebugstring_99ef257a3ddda34d(arg0, arg1) {
    const ret = debugString(arg1);
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
};

export function __wbg_wbindgenisfunction_8cee7dce3725ae74(arg0) {
    const ret = typeof(arg0) === 'function';
    return ret;
};

export function __wbg_wbindgenisobject_307a53c6bd97fbf8(arg0) {
    const val = arg0;
    const ret = typeof(val) === 'object' && val !== null;
    return ret;
};

export function __wbg_wbindgenisstring_d4fa939789f003b0(arg0) {
    const ret = typeof(arg0) === 'string';
    return ret;
};

export function __wbg_wbindgenisundefined_c4b71d073b92f3c5(arg0) {
    const ret = arg0 === undefined;
    return ret;
};

export function __wbg_wbindgenthrow_451ec1a8469d7eb6(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

export function __wbindgen_cast_2241b6af4c4b2941(arg0, arg1) {
    // Cast intrinsic for `Ref(String) -> Externref`.
    const ret = getStringFromWasm0(arg0, arg1);
    return ret;
};

export function __wbindgen_cast_cb9088102bce6b30(arg0, arg1) {
    // Cast intrinsic for `Ref(Slice(U8)) -> NamedExternref("Uint8Array")`.
    const ret = getArrayU8FromWasm0(arg0, arg1);
    return ret;
};

export function __wbindgen_cast_d6cd19b81560fd6e(arg0) {
    // Cast intrinsic for `F64 -> Externref`.
    const ret = arg0;
    return ret;
};

export function __wbindgen_init_externref_table() {
    const table = wasm.__wbindgen_export_2;
    const offset = table.grow(4);
    table.set(0, undefined);
    table.set(offset + 0, undefined);
    table.set(offset + 1, null);
    table.set(offset + 2, true);
    table.set(offset + 3, false);
    ;
};

