//#region \0rolldown/runtime.js
var e = Object.create, t = Object.defineProperty, n = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, i = Object.getPrototypeOf, a = Object.prototype.hasOwnProperty, o = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), s = (e, i, o, s) => {
	if (i && typeof i == "object" || typeof i == "function") for (var c = r(i), l = 0, u = c.length, d; l < u; l++) d = c[l], !a.call(e, d) && d !== o && t(e, d, {
		get: ((e) => i[e]).bind(null, d),
		enumerable: !(s = n(i, d)) || s.enumerable
	});
	return e;
}, c = (n, r, a) => (a = n == null ? {} : e(i(n)), s(r || !n || !n.__esModule ? t(a, "default", {
	value: n,
	enumerable: !0
}) : a, n)), l = ":host{--chat-grad:linear-gradient(135deg, #007bff 0%, #0056b3 100%);--chat-grad-hover:linear-gradient(135deg, #0056b3 0%, #004085 100%);--chat-primary:#0a66d6;--chat-primary-strong:#0056b3;--chat-on-primary:#fff;--chat-link:#2563eb;--chat-btn-bg:#0f172a;--chat-btn-text:#fff;--chat-bg:#fff;--chat-surface:#f1f1f1;--chat-surface-2:#e9ebee;--chat-header-bg:#fff;--chat-user-bg:#fff;--chat-textarea-bg:#fff;--chat-dropdown-bg:#fff;--chat-item-active:#f1f1f1;--chat-sidebar-bg:#fafafa;--chat-sidebar-border:#0000000a;--chat-fg:#1f2937;--chat-muted:#5b6675;--chat-border:#00000014;--chat-border-strong:#0000002e;--chat-danger:#ff305d;--chat-danger-soft:#fee2e2;--chat-warning:#ff7b00;--chat-warning-soft:#fff4e5;--chat-success:#10b981;--chat-success-soft:#e7f6ec;--chat-tag-bg:#f1f1f1;--chat-tag-text:#1f2937;--chat-tag-border:#0000001a;--chat-code-bg:#fff;--chat-code-fg:#24292e;--chat-radius-sm:6px;--chat-radius:16px;--chat-radius-lg:16px;--chat-radius-pill:999px;--chat-space-1:.25rem;--chat-space-2:.5rem;--chat-space-3:.75rem;--chat-space-4:1rem;--chat-space-5:1.5rem;--chat-shadow-1:0 8px 16px #0000000a, 0 4px 8px #00000008;--chat-shadow-2:0 8px 16px #0000000a, 0 4px 8px #00000008;--chat-shadow-fab:0 8px 16px #0000002e;--chat-font:\"Poppins\", system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;--chat-font-mono:ui-monospace, \"SFMono-Regular\", \"Cascadia Code\", \"Source Code Pro\", Menlo, Consolas, monospace;--chat-fs:.9375rem;--chat-ease:cubic-bezier(.4, 0, .2, 1);--chat-ease-spring:cubic-bezier(.2, .8, .2, 1);--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light;font-family:var(--chat-font);font-size:var(--chat-fs);color:var(--chat-fg);-webkit-text-size-adjust:100%;line-height:1.6;display:block}:host([dark-mode]){--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--chat-primary:#7fa9ff;--chat-primary-strong:#9cbcff;--chat-on-primary:#0b1220;--chat-link:#3b82f6;--chat-btn-bg:#333538;--chat-btn-text:#fff;--chat-bg:#1d1e20;--chat-surface:#27282b;--chat-surface-2:#333538;--chat-header-bg:#1d1e20;--chat-user-bg:#27282b;--chat-textarea-bg:#212224;--chat-dropdown-bg:#2a2b2d;--chat-item-active:#333538;--chat-sidebar-bg:#191a1b;--chat-sidebar-border:#ffffff0a;--chat-fg:#f0eee9;--chat-muted:#9aa6b6;--chat-border:#ffffff14;--chat-border-strong:#ffffff38;--chat-danger:#ff305d;--chat-danger-soft:#7d373740;--chat-warning:#ff7b00;--chat-warning-soft:#3a300f99;--chat-success:#10b981;--chat-success-soft:#14352499;--chat-tag-bg:#2a2b2d;--chat-tag-text:#f0eee9;--chat-tag-border:#ffffff1a;--chat-code-bg:#212224;--chat-code-fg:#e6edf3;--chat-shadow-fab:0 8px 20px #0009}:host([hidden]){display:none}*,:before,:after{box-sizing:border-box}.lc-icon{flex:none}.lc-root{background:var(--chat-bg);block-size:100%;min-block-size:0;color:var(--chat-fg);position:relative;overflow:hidden;container:chat/inline-size}.lc-content{background:var(--chat-bg);block-size:100%;min-block-size:0;transition:margin-inline-start .35s var(--chat-ease);flex-direction:column;margin-inline-start:0;display:flex;position:relative}.lc-main{flex-direction:column;flex:1;min-block-size:0;min-inline-size:0;display:flex}.lc-scroll{scrollbar-width:thin;scrollbar-color:var(--chat-surface) transparent;flex:1;min-block-size:0;overflow:auto}.lc-header-slot:empty{display:none}.lc-scroll::-webkit-scrollbar{block-size:6px;inline-size:6px}.lc-sidebar__list::-webkit-scrollbar{block-size:6px;inline-size:6px}.lc-composer textarea::-webkit-scrollbar{block-size:6px;inline-size:6px}.lc-user__dropdown::-webkit-scrollbar{block-size:6px;inline-size:6px}.lc-docview::-webkit-scrollbar{block-size:6px;inline-size:6px}.lc-modal::-webkit-scrollbar{block-size:6px;inline-size:6px}.lc-notif__pre::-webkit-scrollbar{block-size:6px;inline-size:6px}.lc-scroll::-webkit-scrollbar-thumb{background:var(--chat-surface);border-radius:8px}.lc-sidebar__list::-webkit-scrollbar-thumb{background:var(--chat-surface);border-radius:8px}.lc-composer textarea::-webkit-scrollbar-thumb{background:var(--chat-surface);border-radius:8px}.lc-user__dropdown::-webkit-scrollbar-thumb{background:var(--chat-surface);border-radius:8px}.lc-docview::-webkit-scrollbar-thumb{background:var(--chat-surface);border-radius:8px}.lc-modal::-webkit-scrollbar-thumb{background:var(--chat-surface);border-radius:8px}.lc-notif__pre::-webkit-scrollbar-thumb{background:var(--chat-surface);border-radius:8px}.lc-scroll::-webkit-scrollbar-track{background:0 0}.lc-sidebar__list::-webkit-scrollbar-track{background:0 0}.lc-composer textarea::-webkit-scrollbar-track{background:0 0}.lc-user__dropdown::-webkit-scrollbar-track{background:0 0}.lc-docview::-webkit-scrollbar-track{background:0 0}.lc-modal::-webkit-scrollbar-track{background:0 0}.lc-notif__pre::-webkit-scrollbar-track{background:0 0}button{font:inherit;color:inherit;cursor:pointer;margin:0}input,textarea,select{font:inherit;color:inherit}a{color:var(--chat-link)}button:focus-visible,a:focus-visible,input:focus-visible,textarea:focus-visible,select:focus-visible,[tabindex]:focus-visible{outline:2px solid var(--chat-primary);outline-offset:2px;border-radius:var(--chat-radius-sm)}.lc-icon-btn,.lc-hd button:not(.lc-user__btn){padding:var(--chat-space-3);border-radius:var(--chat-radius);color:var(--chat-fg);transition:background .25s var(--chat-ease), color .25s var(--chat-ease), transform .25s var(--chat-ease);background:0 0;border:0;justify-content:center;align-items:center;display:inline-flex}:is(.lc-icon-btn,.lc-hd button:not(.lc-user__btn)):hover{background:var(--chat-surface);transform:translateY(-2px)}.lc-hd{align-items:center;gap:var(--chat-space-1);background:var(--chat-header-bg);padding:1.25rem 1.25rem .25rem;display:flex}.lc-hd__left,.lc-hd__right{align-items:center;gap:var(--chat-space-1);min-inline-size:0;display:flex}.lc-hd__spacer{flex:auto;min-inline-size:0}.lc-gallery{max-inline-size:1000px;padding:var(--chat-space-5);margin-inline:auto}.lc-gallery__title{margin:0 0 var(--chat-space-5);letter-spacing:-.02em;font-size:1.55rem;font-weight:600}.lc-gallery__search{align-items:center;gap:var(--chat-space-2);padding:var(--chat-space-3) var(--chat-space-4);border:1px solid var(--chat-border);border-radius:calc(var(--chat-radius) * 1.2);color:var(--chat-muted);background:var(--chat-bg);transition:border-color .25s var(--chat-ease), box-shadow .25s var(--chat-ease);margin-block-end:var(--chat-space-5);display:flex;box-shadow:0 2px 8px #00000008}.lc-gallery__search:focus-within{border-color:var(--chat-btn-bg);box-shadow:0 0 0 3px #3b82f61a}.lc-gallery__search input{background:0 0;border:0;outline:none;flex:1;min-inline-size:0}.lc-gallery__grid{gap:var(--chat-space-4);grid-template-columns:1fr;display:grid}:host([fullscreen]) .lc-gallery__grid{gap:var(--chat-space-5);grid-template-columns:repeat(3,1fr);margin-block-start:var(--chat-space-5)}@container chat (width<=1200px){:host([fullscreen]) .lc-gallery__grid{grid-template-columns:repeat(2,1fr)}}@container chat (width<=768px){:host([fullscreen]) .lc-gallery__grid{grid-template-columns:1fr}}:host([fullscreen]) .lc-gallery{max-inline-size:1200px}:host([fullscreen]) .lc-gallery__search{inline-size:350px}:host([fullscreen]) .lc-card{text-align:center;flex-direction:column;justify-content:center;block-size:100%}:host([fullscreen]) .lc-card__desc{white-space:normal;max-inline-size:85%}.lc-card{align-items:center;gap:var(--chat-space-4);padding:var(--chat-space-4) var(--chat-space-5);text-align:start;border:1px solid var(--chat-border);border-radius:var(--chat-radius-lg);background:var(--chat-user-bg);inline-size:100%;transition:transform .25s var(--chat-ease), box-shadow .25s var(--chat-ease);display:flex}.lc-card:hover{box-shadow:var(--chat-shadow-1);transform:translateY(-6px)}.lc-card:active{transform:translateY(-2px)}.lc-card__avatar{object-fit:cover;border-radius:50%;flex:none;block-size:44px;inline-size:44px}.lc-card__avatar--mono{background:var(--chat-surface);color:var(--chat-fg);place-items:center;font-size:1.05rem;font-weight:600;display:grid}.lc-card__text{flex:1;min-inline-size:0}.lc-card__name{text-overflow:ellipsis;white-space:nowrap;font-weight:600;overflow:hidden}.lc-card__desc{color:var(--chat-muted);text-overflow:ellipsis;white-space:nowrap;margin-block-start:.1rem;font-size:.85rem;overflow:hidden}.lc-sidebar-slot{inline-size:var(--chat-sidebar-width,280px);z-index:5;background:var(--chat-sidebar-bg);border-inline-end:1px solid var(--chat-sidebar-border);transition:inset-inline-start .35s var(--chat-ease);flex-direction:column;display:flex;position:absolute;inset-block:0;inset-inline-start:calc(-1 * var(--chat-sidebar-width,280px));overflow:hidden}.lc-sidebar-slot:empty{display:none}.lc-sidebar{flex-direction:column;block-size:100%;min-block-size:0;display:flex}.lc-sidebar__close{block-size:35px;inline-size:35px;color:var(--chat-color);cursor:pointer;transition:var(--chat-transition,all .25s ease);z-index:1;background:0 0;border:none;border-radius:50%;justify-content:center;align-items:center;display:none;position:absolute;inset-block-start:.85rem;inset-inline-end:.85rem}.lc-sidebar__close:hover{background:var(--chat-second-bg)}:host([sidebar-open]) .lc-sidebar-slot{inset-inline-start:0}:host([sidebar-open]) .lc-content,:host([floating][fullscreen][sidebar-open]) .lc-content{margin-inline-start:var(--chat-sidebar-width,280px)}:host([floating][fullscreen][sidebar-open]) .lc-sidebar-slot{--chat-sidebar-width:280px;box-shadow:none}:host([floating][fullscreen][sidebar-open]) .lc-sidebar-overlay{display:none}.lc-sidebar-overlay{z-index:4;-webkit-backdrop-filter:blur(4px);animation:lc-fade .35s var(--chat-ease-spring);background:#00000061;display:none;position:absolute;inset:0}.lc-sidebar__explore,.lc-sidebar__delete-all{align-items:center;gap:var(--chat-space-3);inline-size:100%;padding:var(--chat-space-3) var(--chat-space-4);text-align:start;color:var(--chat-fg);border-radius:var(--chat-radius);transition:background .25s var(--chat-ease), transform .25s var(--chat-ease);background:0 0;border:0;font-size:.9375rem;font-weight:500;display:flex}:is(.lc-sidebar__explore,.lc-sidebar__delete-all):hover{background:var(--chat-surface);transform:translate(4px)}.lc-sidebar__explore{margin:var(--chat-space-3);inline-size:auto;margin-block-end:0;font-weight:600}.lc-sidebar__delete-all{margin:var(--chat-space-3);border:1px solid var(--chat-border);inline-size:auto;color:var(--chat-danger);justify-content:center}.lc-sidebar__delete-all:hover{background:0 0;transform:translateY(-2px)}.lc-sidebar__footer{border-block-start:1px solid var(--chat-border);margin-block-start:auto;padding-block-start:var(--chat-space-2)}.lc-sidebar__list{padding:var(--chat-space-3);scrollbar-width:thin;scrollbar-color:var(--chat-surface) transparent;flex:1;overflow:auto}.lc-conv{border-radius:var(--chat-radius);transition:background .25s var(--chat-ease), transform .25s var(--chat-ease);align-items:center;margin-block-end:var(--chat-space-1);display:flex}.lc-conv:hover{background:var(--chat-surface);transform:translate(6px)}.lc-conv.is-active{background:var(--chat-item-active)}.lc-conv__open{padding:var(--chat-space-3);text-align:start;background:0 0;border:0;flex-direction:column;flex:1;align-items:start;gap:.1rem;min-inline-size:0;display:flex}.lc-conv__name{text-overflow:ellipsis;white-space:nowrap;max-inline-size:100%;font-size:.875rem;font-weight:600;overflow:hidden}.lc-conv__preview{color:var(--chat-muted);text-overflow:ellipsis;white-space:nowrap;max-inline-size:100%;font-size:.8rem;overflow:hidden}.lc-conv__delete{padding:var(--chat-space-2);color:var(--chat-muted);border-radius:var(--chat-radius);opacity:.6;transition:opacity .25s var(--chat-ease), color .25s var(--chat-ease), background .25s var(--chat-ease);background:0 0;border:0;flex:none}.lc-conv__delete:hover{opacity:1;color:var(--chat-danger);background:var(--chat-surface)}.lc-sidebar__empty{align-items:center;gap:var(--chat-space-2);padding:2.5rem var(--chat-space-4);color:var(--chat-muted);opacity:.6;text-align:center;flex-direction:column;font-size:.875rem;display:flex}.lc-thread{gap:var(--chat-space-2);inline-size:100%;max-inline-size:1000px;padding:var(--chat-space-5);flex-direction:column;min-block-size:100%;margin-inline:auto;display:flex}.lc-welcome{text-align:center;flex-direction:column;align-items:center;gap:.4rem;padding:2rem 1rem 0;display:flex}.lc-welcome__avatar{color:#fff;border-radius:50%;flex-shrink:0;justify-content:center;align-items:center;block-size:64px;inline-size:64px;font-size:1.5rem;font-weight:600;display:flex;overflow:hidden}.lc-welcome__avatar img{object-fit:cover;block-size:100%;inline-size:100%}.lc-welcome__title{color:var(--chat-fg);letter-spacing:-.02em;margin:0;font-size:1.25rem;font-weight:600}.lc-welcome__desc{color:var(--chat-fg);opacity:.8;margin:.25rem 0 0;font-size:.9rem;line-height:1.4}.lc-msg{max-inline-size:80%;padding:var(--chat-space-4) var(--chat-space-5);border-radius:var(--chat-radius-lg);overflow-wrap:anywhere;animation:lc-msg-appear .4s var(--chat-ease-spring) forwards;line-height:1.6}.lc-msg--user{background:var(--chat-user-bg);color:var(--chat-fg);border:1px solid var(--chat-border);border-radius:var(--chat-radius-lg) var(--chat-radius-lg) 0 var(--chat-radius-lg);align-self:flex-end;box-shadow:0 2px 8px #00000005}.lc-msg--bot{background:var(--chat-header-bg);inline-size:100%;max-inline-size:100%;color:var(--chat-fg);border-radius:var(--chat-radius-lg) var(--chat-radius-lg) var(--chat-radius-lg) 0;align-self:flex-start;padding-inline:0}.lc-msg--error{background:var(--chat-danger-soft);max-inline-size:100%;color:var(--chat-danger);border:1px solid var(--chat-danger);align-self:stretch}.lc-msg__body:first-child,.lc-msg__body>:first-child{margin-block-start:0}.lc-msg__body>:last-child{margin-block-end:0}.lc-msg__body p{margin:0 0 var(--chat-space-3);line-height:1.7}.lc-msg__body h1,.lc-msg__body h2,.lc-msg__body h3,.lc-msg__body h4{margin:var(--chat-space-4) 0 var(--chat-space-2);font-weight:600;line-height:1.4}.lc-msg__body h1{font-size:1.2em}.lc-msg__body h2{font-size:1.1em}.lc-msg__body h3{font-size:1em}.lc-msg__body ul,.lc-msg__body ol{margin:var(--chat-space-3) 0 var(--chat-space-3) 1.4em;padding-inline-start:1em}.lc-msg__body li{margin-block:.35rem;line-height:1.6}.lc-msg__body a{color:var(--chat-link);border-block-end:1px dotted var(--chat-link);text-decoration:none}.lc-msg__body a:hover{border-block-end:1px solid var(--chat-link)}.lc-msg__body code{font-family:var(--chat-font-mono);background:var(--chat-surface);border-radius:5px;padding:.2em .4em;font-size:.9em}.lc-msg__body blockquote{margin:var(--chat-space-3) 0;padding:var(--chat-space-3) var(--chat-space-5);border-inline-start:3px solid var(--chat-primary);background:var(--chat-surface);border-radius:0 var(--chat-radius) var(--chat-radius) 0;color:var(--chat-fg)}.lc-msg__body table{border-collapse:separate;border-spacing:0;inline-size:100%;margin:var(--chat-space-3) 0;border:1px solid var(--chat-border);border-radius:var(--chat-radius);font-size:.9em;overflow:hidden}.lc-msg__body th,.lc-msg__body td{border-block-end:1px solid var(--chat-border);border-inline-end:1px solid var(--chat-border);padding:var(--chat-space-3);text-align:start}.lc-msg__body th:last-child,.lc-msg__body td:last-child{border-inline-end:0}.lc-msg__body tr:last-child td{border-block-end:0}.lc-msg__body th{background:var(--chat-surface);font-weight:600}.lc-msg__body hr{border:none;border-block-start:1px solid var(--chat-border);margin:var(--chat-space-5) 0}.lc-msg__body img{border-radius:var(--chat-radius);max-inline-size:100%;margin:var(--chat-space-3) 0}.lc-msg__body pre{margin:var(--chat-space-3) 0;padding:var(--chat-space-5);border:1px solid var(--chat-border);border-radius:var(--chat-radius);background:var(--chat-code-bg);scrollbar-width:thin;position:relative;overflow:auto}.lc-msg__body pre code{color:inherit;background:0 0;padding:0;font-size:.82rem;line-height:1.5}.lc-code-copy{align-items:center;gap:var(--chat-space-2);padding:var(--chat-space-2) var(--chat-space-3);border:1px solid var(--chat-border);border-radius:var(--chat-radius);background:var(--chat-bg);color:var(--chat-fg);cursor:pointer;opacity:.8;transition:background .25s var(--chat-ease), color .25s var(--chat-ease), transform .25s var(--chat-ease);font-size:.85rem;font-weight:500;display:flex;position:absolute;top:10px;right:10px}.lc-code-copy:hover,.lc-code-copy:focus-visible{opacity:1;background:var(--chat-btn-bg);color:var(--chat-btn-text);border-color:var(--chat-btn-bg);transform:translateY(-2px)}.lc-msg--user .lc-msg__body code{background:var(--chat-surface-2)}.lc-citation{color:var(--chat-link);font:inherit;vertical-align:baseline;cursor:pointer;transition:opacity .2s var(--chat-ease);background:0 0;border:0;margin:0;padding:0;font-weight:500;text-decoration:none;display:inline}.lc-citation:hover{opacity:.8;text-decoration:underline}.lc-msg__notifs{align-items:flex-start;gap:var(--chat-space-2);flex-direction:column;margin-block-end:var(--chat-space-2);display:flex}.lc-msg__notifs:empty{display:none}.lc-notif{border-radius:var(--chat-radius);color:var(--chat-fg);animation:lc-fade .3s var(--chat-ease);font-size:.8rem;overflow:hidden}.lc-notif--datasets{color:var(--chat-fg);opacity:.8;align-items:center;gap:6px;padding:6px 0;display:inline-flex}.lc-notif--datasets .lc-icon{color:var(--chat-link)}.lc-notif--datasets:hover{opacity:1}.lc-notif__toggle{border:1px solid var(--chat-border);text-align:start;color:var(--chat-fg);opacity:.8;transition:opacity .25s var(--chat-ease), background .25s var(--chat-ease);background:0 0;border-radius:8px;align-items:center;gap:6px;padding:4px 8px;display:inline-flex}.lc-notif__toggle .lc-icon:first-child{color:var(--chat-link)}.lc-notif__toggle:hover{opacity:1;background:var(--chat-surface)}.lc-notif__toggle .lc-icon:last-child{opacity:.6;transition:transform .2s}.lc-notif__toggle[aria-expanded=true] .lc-icon:last-child{transform:rotate(180deg)}.lc-notif__status{color:var(--chat-link);font-variant-numeric:tabular-nums;margin-inline-start:4px;font-size:.75rem;font-weight:600}.lc-notif[data-status=done] .lc-notif__status{color:var(--chat-success)}.lc-notif[data-status=failed] .lc-notif__toggle{border-color:var(--chat-danger)}.lc-notif[data-status=failed] .lc-notif__status{color:var(--chat-danger)}.lc-notif--datasets .lc-icon:first-child,.lc-notif--tool .lc-notif__toggle .lc-icon:first-child{color:var(--chat-success)}.lc-notif__details{border-block-start:1px solid var(--chat-border);margin-block-start:5px;padding:10px 12px 12px;animation:.25s ease-out lc-expand}.lc-notif__spinner{border:2px solid var(--chat-border);border-block-start-color:var(--chat-primary);border-radius:50%;block-size:14px;inline-size:14px;animation:.8s linear infinite lc-spin}.lc-notif[data-status=done] .lc-notif__spinner,.lc-notif[data-status=failed] .lc-notif__spinner{display:none}@keyframes lc-spin{to{transform:rotate(360deg)}}.lc-notif__pre{margin:var(--chat-space-1) 0 0;white-space:pre-wrap;overflow-wrap:anywhere;font-family:var(--chat-font-mono);background:var(--chat-surface);opacity:.9;border-radius:8px;max-block-size:12.5rem;padding:8px 10px;font-size:.72rem;overflow:auto}.lc-typing{gap:5px;padding:0 10px;display:inline-flex}.lc-typing span{background:var(--chat-fg);opacity:.7;block-size:6px;inline-size:6px;animation:lc-typing 1.4s infinite var(--chat-ease-spring);border-radius:50%}.lc-typing span:first-child{animation-delay:-.32s}.lc-typing span:nth-child(2){animation-delay:-.16s}.lc-caret{color:var(--chat-primary);vertical-align:baseline;margin-inline-start:.1em;font-size:.7em;line-height:1;animation:1s step-end infinite lc-caret;display:inline-block}@keyframes lc-typing{0%,80%,to{transform:scale(0)}40%{transform:scale(1)}}@keyframes lc-caret{50%{opacity:0}}.lc-fb{align-items:center;gap:var(--chat-space-1);flex-wrap:wrap;order:1;display:inline-flex}.lc-fb button{padding:var(--chat-space-1);border-radius:var(--chat-radius-sm);color:var(--chat-fg);opacity:.7;transition:opacity .25s var(--chat-ease), color .25s var(--chat-ease), transform .25s var(--chat-ease);background:0 0;border:0;display:inline-flex}.lc-fb button:hover:not(:disabled){opacity:1;color:var(--chat-link);transform:translateY(-2px)}.lc-fb button.is-active{opacity:1;color:var(--chat-primary)}.lc-fb button:disabled{cursor:default;opacity:.4}.lc-fb__check{color:var(--chat-success);display:inline-flex}.lc-fb__comment-text{padding:var(--chat-space-3);color:var(--chat-fg);opacity:.8;background:var(--chat-surface);border:1px solid var(--chat-border);border-radius:var(--chat-radius);flex-basis:100%;margin-block-start:var(--chat-space-1);font-size:.8rem;font-style:italic}.lc-fb__textarea{resize:vertical;min-block-size:6rem;inline-size:100%;padding:var(--chat-space-3);border:1px solid var(--chat-border);border-radius:var(--chat-radius);background:var(--chat-bg)}.lc-fb__textarea:focus{border-color:var(--chat-border-strong);outline:none}.lc-fb__actions{justify-content:flex-end;margin-block-start:var(--chat-space-3);display:flex}.lc-fb__submit{padding:var(--chat-space-3) var(--chat-space-5);border-radius:var(--chat-radius);background:var(--chat-grad);color:#fff;transition:transform .25s var(--chat-ease), background .25s var(--chat-ease);border:0;font-weight:600}.lc-fb__submit:hover{background:var(--chat-grad-hover);transform:translateY(-2px)}.lc-input{background:var(--chat-bg);-webkit-backdrop-filter:blur(10px);inline-size:100%;padding:.5rem 1.25rem 1.25rem;position:sticky;inset-block-end:0}.lc-composer{border:1px solid var(--chat-border);border-radius:calc(var(--chat-radius-lg) * 1.5);background:var(--chat-textarea-bg);flex-direction:column;inline-size:100%;max-inline-size:1000px;margin-inline:auto;transition:border-color .2s;display:flex;box-shadow:0 4px 12px #00000008}.lc-composer:focus-within{border-color:var(--chat-border-strong)}.lc-composer__inner{align-items:center;display:flex;position:relative}.lc-composer-slot:empty{display:none}.lc-composer textarea{resize:none;scrollbar-width:thin;background:0 0;border:0;flex:1;max-block-size:300px;min-inline-size:0;padding:1rem 1.25rem;padding-inline-end:3.5rem;line-height:1.4}.lc-composer textarea::placeholder{color:var(--chat-muted)}.lc-composer textarea:focus{outline:none}.lc-composer__send{background:var(--chat-btn-bg);block-size:34px;inline-size:34px;color:var(--chat-btn-text);transition:transform .25s var(--chat-ease), opacity .25s var(--chat-ease), box-shadow .25s var(--chat-ease);border:0;border-radius:50%;flex:none;justify-content:center;align-items:center;margin:0 5px;padding:0;display:inline-flex;position:absolute;inset-inline-end:10px}.lc-composer__send:hover:not(:disabled){opacity:.95;transform:scale(1.05)translateY(-2px);box-shadow:0 4px 12px #00000026}.lc-composer__send:disabled{opacity:.6;cursor:not-allowed}.lc-overlay{padding:var(--chat-space-4);-webkit-backdrop-filter:blur(4px);z-index:1000;background:#00000080;place-items:center;animation:.2s ease-out lc-fade;display:grid;position:fixed;inset:0}.lc-modal{background:var(--chat-bg);max-block-size:86vh;inline-size:min(700px,90%);color:var(--chat-fg);border:1px solid var(--chat-border);border-radius:var(--chat-radius-lg);padding:var(--chat-space-5);box-shadow:var(--chat-shadow-2);scrollbar-width:thin;animation:lc-modal-in .3s var(--chat-ease-spring);overflow:auto}.lc-modal__head{justify-content:space-between;align-items:center;gap:var(--chat-space-2);margin-block-end:var(--chat-space-4);display:flex}.lc-modal__title{overflow-wrap:anywhere;margin:0;font-size:1.125rem;font-weight:600}.lc-modal__close{border-radius:var(--chat-radius-sm);block-size:2rem;inline-size:2rem;color:var(--chat-fg);opacity:.7;transition:background .25s var(--chat-ease), opacity .25s var(--chat-ease);background:0 0;border:0;flex:none;justify-content:center;align-items:center;font-size:1.4rem;line-height:1;display:inline-flex}.lc-modal__close:hover{background:var(--chat-surface);opacity:1}.lc-modal__body{min-block-size:0}.lc-source{gap:var(--chat-space-3);flex-direction:column;display:flex}.lc-source__dataset{color:var(--chat-muted);font-size:.8rem}.lc-source__text{padding:var(--chat-space-4);border-inline-start:3px solid var(--chat-primary);background:var(--chat-surface);border-radius:0 var(--chat-radius) var(--chat-radius) 0;white-space:pre-wrap;overflow-wrap:anywhere;line-height:1.6}.lc-source__open-doc{align-items:center;gap:var(--chat-space-3);padding:var(--chat-space-3) var(--chat-space-5);border-radius:var(--chat-radius);background:var(--chat-btn-bg);color:var(--chat-btn-text);transition:transform .25s var(--chat-ease), opacity .25s var(--chat-ease);border:0;align-self:start;font-weight:500;display:inline-flex}.lc-source__open-doc:hover{opacity:.95;transform:translateY(-2px)}.lc-docview{gap:var(--chat-space-3);flex-direction:column;display:flex}.lc-docview__md>:first-child{margin-block-start:0}.lc-docview__md pre{padding:var(--chat-space-4);border-radius:var(--chat-radius);background:var(--chat-code-bg);overflow:auto}.lc-docview__pdf{border:1px solid var(--chat-border);border-radius:var(--chat-radius);block-size:60vh;inline-size:100%}.lc-docview__text{padding:var(--chat-space-4);white-space:pre-wrap;overflow-wrap:anywhere;font-family:var(--chat-font-mono);background:var(--chat-surface);border-radius:var(--chat-radius);margin:0;font-size:.85rem;line-height:1.6}.lc-docview__download{align-items:center;gap:var(--chat-space-3);padding:var(--chat-space-3) var(--chat-space-5);border-radius:var(--chat-radius);background:var(--chat-btn-bg);color:var(--chat-btn-text);transition:transform .25s var(--chat-ease), opacity .25s var(--chat-ease);align-self:start;font-weight:500;text-decoration:none;display:inline-flex}.lc-docview__download:hover{opacity:.95;transform:translateY(-3px)}.lc-error{justify-content:center;align-items:center;gap:var(--chat-space-2);text-align:center;block-size:100%;min-block-size:400px;max-inline-size:400px;color:var(--chat-fg);flex-direction:column;margin-inline:auto;padding:2rem;display:flex}.lc-error .lc-icon{block-size:4rem;inline-size:4rem;color:var(--chat-muted);opacity:.6}.lc-error[data-kind=unauthorized] .lc-icon,.lc-error[data-kind=forbidden] .lc-icon,.lc-error[data-kind=rate-limited] .lc-icon{color:var(--chat-danger);opacity:1}.lc-error[data-kind=unauthorized] .lc-icon svg,.lc-error[data-kind=forbidden] .lc-icon svg,.lc-error[data-kind=rate-limited] .lc-icon svg{stroke:var(--chat-danger)}.lc-error__title{margin:var(--chat-space-4) 0 var(--chat-space-4);color:var(--chat-fg);font-size:1.5rem;font-weight:600}.lc-error__message{margin:0 0 var(--chat-space-2);opacity:.8;line-height:1.5}.lc-error__message:last-of-type{margin-block-end:2rem}.lc-error__retry{align-items:center;gap:var(--chat-space-2);padding:var(--chat-space-3) var(--chat-space-5);border-radius:var(--chat-radius);background:var(--chat-grad);color:#fff;transition:transform .25s var(--chat-ease), background .25s var(--chat-ease);border:0;margin-block-start:var(--chat-space-2);font-weight:500;display:inline-flex}.lc-error__retry:hover{background:var(--chat-grad-hover);transform:translateY(-2px)}.lc-error__retry .lc-icon{opacity:1;block-size:1rem;inline-size:1rem;color:inherit}:host([floating]){--chat-fab-offset:var(--chat-space-5);--chat-fab-size:64px;--chat-floating-z:1050;--chat-panel-width:460px;--chat-panel-height:min(700px, calc(100dvh - var(--chat-fab-size) - 3.5rem));inset:auto var(--chat-fab-offset) var(--chat-fab-offset) auto;z-index:var(--chat-floating-z);block-size:auto;position:fixed}:host([floating]) .lc-fab{inline-size:var(--chat-fab-size);block-size:var(--chat-fab-size);background:var(--chat-grad);color:#fff;box-shadow:var(--chat-shadow-fab);transition:transform .25s var(--chat-ease), background .25s var(--chat-ease), box-shadow .25s var(--chat-ease);border:0;border-radius:50%;place-items:center;display:grid}:host([floating]) .lc-fab:hover{background:var(--chat-grad-hover);transform:translateY(-4px);box-shadow:0 12px 20px #00000026}:host([floating]) .lc-fab:focus-visible{outline:2px solid var(--chat-primary);outline-offset:3px}:host([floating]) .lc-panel{inline-size:min(var(--chat-panel-width), calc(100vw - 2 * var(--chat-space-4)));block-size:var(--chat-panel-height);max-block-size:calc(100dvh - var(--chat-fab-size) - 3.5rem);border:1px solid var(--chat-border);border-radius:calc(var(--chat-radius-lg) * 1.5);background:var(--chat-bg);box-shadow:var(--chat-shadow-2);animation:lc-slide-up .4s var(--chat-ease-spring);position:absolute;inset-block-end:calc(var(--chat-fab-size) + var(--chat-space-3));inset-inline-end:0;overflow:hidden}:host([floating]) .lc-panel[hidden]{display:none}:host([floating]) .lc-panel:only-child{inset-block-end:0}:host([floating][fullscreen]){inset:0}:host([floating][fullscreen]) .lc-panel{border:0;border-radius:0;block-size:100%;max-block-size:none;inline-size:100%;position:fixed;inset:0}@media (max-width:768px){:host([floating]) .lc-panel{border:0;border-radius:0;block-size:100%;max-block-size:none;inline-size:100%;position:fixed;inset:0}}@keyframes lc-slide-up{0%{opacity:0;transform:translateY(40px)}}@keyframes lc-fade{0%{opacity:0}}@keyframes lc-modal-in{0%{opacity:0;transform:translateY(40px)}}@keyframes lc-msg-appear{0%{opacity:0;transform:translateY(16px)}}@keyframes lc-expand{0%{opacity:0;transform:translateY(-5px)}}@keyframes lc-fade-in-up{0%{opacity:0;transform:translateY(10px)}}@container chat (width<=640px){:host([sidebar-open]) .lc-content{margin-inline-start:0}:host([sidebar-open]) .lc-sidebar-slot{--chat-sidebar-width:100%;box-shadow:var(--chat-shadow-2)}:host([sidebar-open]) .lc-sidebar-overlay{display:block}:host([sidebar-open]) .lc-sidebar__close{display:flex}.lc-msg{max-inline-size:90%}}:host([floating]:not([fullscreen])[sidebar-open]) .lc-content{margin-inline-start:0}:host([floating]:not([fullscreen])[sidebar-open]) .lc-sidebar-slot{--chat-sidebar-width:100%;box-shadow:var(--chat-shadow-2)}:host([floating]:not([fullscreen])[sidebar-open]) .lc-sidebar-overlay{display:block}:host([floating]:not([fullscreen])[sidebar-open]) .lc-sidebar__close{display:flex}.hljs{color:var(--chat-code-fg);background:0 0;padding:1em;display:block;overflow-x:auto}.hljs-doctag,.hljs-keyword,.hljs-meta .hljs-keyword,.hljs-template-tag,.hljs-template-variable,.hljs-type,.hljs-variable.language_{color:#d73a49}.hljs-title,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-title.function_{color:#6f42c1}.hljs-attr,.hljs-attribute,.hljs-literal,.hljs-meta,.hljs-number,.hljs-operator,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id,.hljs-variable{color:#005cc5}.hljs-meta .hljs-string,.hljs-regexp,.hljs-string{color:#032f62}.hljs-built_in,.hljs-symbol{color:#e36209}.hljs-code,.hljs-comment,.hljs-formula{color:#6a737d}.hljs-name,.hljs-quote,.hljs-selector-pseudo,.hljs-selector-tag{color:#22863a}.hljs-subst{color:#24292e}.hljs-section{color:#005cc5;font-weight:700}.hljs-bullet{color:#735c0f}.hljs-emphasis{color:#24292e;font-style:italic}.hljs-strong{color:#24292e;font-weight:700}.hljs-addition{color:#22863a;background-color:#f0fff4}.hljs-deletion{color:#b31d28;background-color:#ffeef0}:host([dark-mode]) .hljs-doctag,:host([dark-mode]) .hljs-keyword,:host([dark-mode]) .hljs-meta .hljs-keyword,:host([dark-mode]) .hljs-template-tag,:host([dark-mode]) .hljs-template-variable,:host([dark-mode]) .hljs-type,:host([dark-mode]) .hljs-variable.language_{color:#ff7b72}:host([dark-mode]) .hljs-title,:host([dark-mode]) .hljs-title.class_,:host([dark-mode]) .hljs-title.class_.inherited__,:host([dark-mode]) .hljs-title.function_{color:#d2a8ff}:host([dark-mode]) .hljs-attr,:host([dark-mode]) .hljs-attribute,:host([dark-mode]) .hljs-literal,:host([dark-mode]) .hljs-meta,:host([dark-mode]) .hljs-number,:host([dark-mode]) .hljs-operator,:host([dark-mode]) .hljs-selector-attr,:host([dark-mode]) .hljs-selector-class,:host([dark-mode]) .hljs-selector-id,:host([dark-mode]) .hljs-variable{color:#79c0ff}:host([dark-mode]) .hljs-meta .hljs-string,:host([dark-mode]) .hljs-regexp,:host([dark-mode]) .hljs-string{color:#a5d6ff}:host([dark-mode]) .hljs-built_in,:host([dark-mode]) .hljs-symbol{color:#ffa657}:host([dark-mode]) .hljs-code,:host([dark-mode]) .hljs-comment,:host([dark-mode]) .hljs-formula{color:#8b949e}:host([dark-mode]) .hljs-name,:host([dark-mode]) .hljs-quote,:host([dark-mode]) .hljs-selector-pseudo,:host([dark-mode]) .hljs-selector-tag{color:#7ee787}:host([dark-mode]) .hljs-subst{color:#e6edf3}:host([dark-mode]) .hljs-section{color:#79c0ff;font-weight:700}:host([dark-mode]) .hljs-bullet{color:#eac55f}:host([dark-mode]) .hljs-emphasis{color:#e6edf3;font-style:italic}:host([dark-mode]) .hljs-strong{color:#e6edf3;font-weight:700}:host([dark-mode]) .hljs-addition{color:#7ee787;background-color:#033a16}:host([dark-mode]) .hljs-deletion{color:#ff7b72;background-color:#67060c}.lc-sidebar__header{padding:var(--chat-space-5) var(--chat-space-4) var(--chat-space-2)}.lc-sidebar__logo{max-inline-size:160px;display:block}.lc-sidebar__logo-html{letter-spacing:-.02em;color:var(--chat-fg);align-items:center;font-size:1.1rem;font-weight:600;display:flex}.lc-notif__dataset-list{margin:0;padding-inline-start:1.4rem}.lc-notif__dataset-list li{margin-block:.2rem}.lc-input-actions{padding:0 .9rem .9rem;animation:.3s ease-out lc-fade-in-up;display:flex}.lc-input-actions:not(:has(.lc-new-conv:not([hidden]))){display:none}.lc-actions-container{align-items:center;gap:var(--chat-space-2);inline-size:100%;display:flex}.lc-new-conv{align-items:center;gap:var(--chat-space-2);border:1px solid var(--chat-border);border-radius:var(--chat-radius);color:var(--chat-fg);opacity:.85;cursor:pointer;transition:background .25s var(--chat-ease), border-color .25s var(--chat-ease), transform .25s var(--chat-ease);background:0 0;padding:.3rem .6rem;font-size:.75rem;font-weight:500;animation:.3s ease-out lc-fade-in-up;display:inline-flex}.lc-new-conv:hover{background:var(--chat-surface);border-color:var(--chat-border-strong);opacity:1;transform:translateY(-2px);box-shadow:0 4px 8px #0000001a}.lc-new-conv[hidden]{display:none}.lc-msg__actions{justify-content:flex-end;align-items:center;gap:var(--chat-space-1);margin-block-start:var(--chat-space-2);display:flex}.lc-msg__copy{border-radius:var(--chat-radius);block-size:32px;inline-size:32px;color:var(--chat-fg);opacity:.7;cursor:pointer;transition:color .25s var(--chat-ease), transform .25s var(--chat-ease), opacity .25s var(--chat-ease);background:0 0;border:0;order:2;justify-content:center;align-items:center;padding:0;display:inline-flex}.lc-msg__copy:hover{color:var(--chat-link);opacity:1;transform:translateY(-2px)}.lc-msg__copy.is-copied{color:var(--chat-success);opacity:1}.lc-msg__disclaimer{text-align:end;color:var(--chat-fg);opacity:.6;margin-block-start:var(--chat-space-1);font-size:.75rem;font-style:italic;line-height:1.3}.lc-user{display:inline-block;position:relative}.lc-user__btn{background:var(--chat-link);color:#fff;cursor:pointer;block-size:40px;inline-size:40px;transition:transform .3s var(--chat-ease-spring), box-shadow .3s var(--chat-ease-spring);border:0;border-radius:50%;justify-content:center;align-items:center;padding:0;font-size:.9rem;font-weight:600;display:flex;position:relative}.lc-user__btn:hover{transform:translateY(-2px);box-shadow:0 4px 12px #00000026}.lc-user__btn.is-active{background:var(--chat-btn-bg);color:var(--chat-btn-text);transform:translateY(-2px);box-shadow:0 4px 12px #0003}.lc-user__btn:focus-visible{outline:2px solid var(--chat-link);outline-offset:2px}.lc-user__initials{line-height:1}.lc-user__indicator{background:var(--chat-bg);border:2px solid var(--chat-link);block-size:16px;inline-size:16px;color:var(--chat-link);transition:transform .3s var(--chat-ease-spring);border-radius:50%;justify-content:center;align-items:center;display:flex;position:absolute;inset-block-end:-2px;inset-inline-end:-2px}.lc-user__indicator svg{block-size:12px;inline-size:12px}.lc-user__btn.is-active .lc-user__indicator{transform:rotate(180deg)}@media (prefers-reduced-motion:reduce){.lc-user__btn,.lc-user__indicator{transition:none}}.lc-user__dropdown{background:var(--chat-dropdown-bg);-webkit-backdrop-filter:blur(10px);border:1px solid var(--chat-border);border-radius:var(--chat-radius-lg);max-block-size:calc(100vh - 200px);min-inline-size:280px;box-shadow:var(--chat-shadow-2);opacity:0;visibility:hidden;transition:opacity .3s var(--chat-ease-spring), transform .3s var(--chat-ease-spring), visibility .3s;z-index:6;position:absolute;inset-block-start:calc(100% + .75rem);inset-inline-end:0;overflow:auto;transform:translateY(-15px)scale(.95)}.lc-user__dropdown.is-open{opacity:1;visibility:visible;transform:translateY(0)scale(1)}.lc-user__info{align-items:center;gap:var(--chat-space-4);padding:var(--chat-space-5);border-block-end:1px solid var(--chat-border);display:flex}.lc-user__avatar{background:var(--chat-link);color:#fff;border-radius:50%;flex:none;justify-content:center;align-items:center;block-size:56px;inline-size:56px;font-size:1.25rem;font-weight:600;display:flex;box-shadow:0 2px 8px #0000001a}.lc-user__details{flex:1;overflow:hidden}.lc-user__name{text-transform:capitalize;color:var(--chat-fg);margin-block-end:.25rem;font-size:1rem;font-weight:600;line-height:1.2}.lc-user__email{text-overflow:ellipsis;white-space:nowrap;color:var(--chat-fg);opacity:.7;font-size:.875rem;overflow:hidden}.lc-user__rates{padding:var(--chat-space-4) var(--chat-space-5)}.lc-user__rates-head h4{margin:0 0 var(--chat-space-2);opacity:.8;font-size:.875rem;font-weight:600}.lc-user__rate-item{justify-content:space-between;align-items:center;padding-block:.4rem;display:flex}.lc-user__rate-name{color:var(--chat-fg);font-size:.8rem;font-weight:500}.lc-user__rate-count{color:var(--chat-fg);opacity:.7;font-size:.75rem;font-weight:500}@media (prefers-reduced-motion:reduce){*,:before,:after{transition:none!important;animation:none!important}}";
function u(e) {
	switch (e) {
		case 400: return "BAD_REQUEST";
		case 401: return "UNAUTHORIZED";
		case 403: return "FORBIDDEN";
		case 404: return "NOT_FOUND";
		case 405: return "METHOD_NOT_ALLOWED";
		case 429: return "RATE_LIMITED";
		default: return "SERVER_ERROR";
	}
}
var d = class extends Error {
	constructor(e, t, n) {
		super(n), this.name = "HttpError", this.status = e, this.code = t;
	}
}, f = class {
	constructor({ base: e, origin: t } = {}) {
		this.base = e || "rest/platform/agent/admin", this.origin = t || "";
	}
	resolve(e) {
		let t = String(this.base).replace(/^\/+|\/+$/g, ""), n = String(e).replace(/^\/+/, ""), r = this.origin.replace(/\/+$/, "");
		return `${r ? `${r}/` : ""}${t}/${n}`;
	}
	headers(e) {
		let t = { Accept: "application/json" };
		return e && (t["Content-Type"] = "application/json"), t;
	}
	get(e) {
		return this.request("GET", e);
	}
	post(e, t) {
		return this.request("POST", e, t);
	}
	delete(e) {
		return this.request("DELETE", e);
	}
	postStream(e, t, n = {}) {
		return fetch(this.resolve(e), {
			method: "POST",
			headers: {
				Accept: "text/event-stream",
				"Content-Type": "application/json"
			},
			body: JSON.stringify(t),
			credentials: "same-origin",
			...n
		});
	}
	async request(e, t, n, r = {}) {
		let i = n != null, a = await fetch(this.resolve(t), {
			method: e,
			headers: this.headers(i),
			body: i ? JSON.stringify(n) : void 0,
			credentials: "same-origin",
			...r
		}), o = await a.text(), s = this.parseBody(o);
		if (!a.ok) throw this.toError(a.status, s);
		if (s && s.status === "ERROR") throw this.toError(a.status || 500, s);
		return s && Object.prototype.hasOwnProperty.call(s, "result") ? s.result : s;
	}
	parseBody(e) {
		if (!e) return null;
		try {
			return JSON.parse(e);
		} catch {
			return { _raw: e };
		}
	}
	toError(e, t) {
		let n = u(e), r = "";
		return t && typeof t == "object" && (r = t.message || t.errorCode || t._raw || ""), new d(e, n, r || `HTTP ${e}`);
	}
}, p = class {
	constructor(e) {
		this.http = e;
	}
	listBots() {
		return this.http.get("bots");
	}
	openStream({ botId: e, query: t, conversationUuid: n }, r) {
		let i = {
			botId: e,
			query: t
		};
		return n && (i.conversationUuid = n), this.http.postStream("query/stream", i, { signal: r });
	}
	getConversation(e) {
		return this.http.get(`conversation/${e}`);
	}
	listConversations() {
		return this.http.get("user/conversations");
	}
	deleteConversation(e) {
		return this.http.delete(`conversation/${e}`);
	}
	deleteAllConversations() {
		return this.http.delete("user/conversations");
	}
	getRateLimits() {
		return this.http.get("user/rate");
	}
	documentUrl({ botId: e, datasetId: t, documentId: n }) {
		return this.http.resolve(`document/${e}/${t}/${n}`);
	}
	sendFeedback({ messageId: e, isPositive: t, comment: n }) {
		let r = { isPositive: t };
		return n != null && (r.comment = n), this.http.post(`message/${e}/feedback`, r);
	}
	getUser() {
		return this.http.get("user");
	}
}, m = new Set([
	"BOT_STREAM_COMPLETED",
	"BOT_STREAM_ERROR",
	"error"
]), h = 3e4;
function g(e) {
	return m.has(e);
}
function _(e) {
	let t = e.split("\n"), n = "", r = [];
	for (let e of t) {
		let t = e.replace(/\r$/, "");
		if (t === "" || t.startsWith(":")) continue;
		let i = t.indexOf(":"), a = i === -1 ? t : t.slice(0, i), o = i === -1 ? "" : t.slice(i + 1);
		o.startsWith(" ") && (o = o.slice(1)), a === "event" ? n = o : a === "data" && r.push(o);
	}
	if (r.length === 0) return null;
	let i;
	try {
		i = JSON.parse(r.join("\n"));
	} catch {
		return null;
	}
	return {
		name: n || "message",
		data: i
	};
}
function v(e) {
	if (!e.ok) throw Error(`SSE response not ok: ${e.status}`);
	let t = e.headers.get("Content-Type") || "";
	if (!t.toLowerCase().includes("text/event-stream")) throw Error(`SSE response is not an event-stream (Content-Type: ${t || "none"})`);
}
async function y({ response: e, onEvent: t, onTerminal: n, signal: r, timeout: i = h }) {
	v(e);
	let a = e.body.getReader(), o = new TextDecoder("utf-8"), s = "", c = !1, l = 0;
	function u() {
		!i || i <= 0 || (l && clearTimeout(l), l = setTimeout(() => {
			c = !0, x(a);
		}, i));
	}
	function d() {
		l &&= (clearTimeout(l), 0);
	}
	function f() {
		let e = { errorMessage: "Le flux a expiré (aucune réponse du serveur)." };
		t("BOT_STREAM_ERROR", e), n && n("BOT_STREAM_ERROR", e);
	}
	u();
	try {
		for (;;) {
			let { value: e, done: i } = await a.read();
			if (c) {
				f();
				return;
			}
			if (i) {
				if (s += o.decode(), T(w(s), t, n)) return;
				break;
			}
			if (r && r.aborted) {
				await x(a);
				return;
			}
			u(), s += o.decode(e, { stream: !0 });
			let l = S(s), d = s.slice(0, l.consumed);
			if (s = s.slice(l.consumed), T(C(d), t, n)) {
				await x(a);
				return;
			}
		}
	} catch (e) {
		if (c) {
			f();
			return;
		}
		if (b(e) || r && r.aborted) return;
		throw e;
	} finally {
		d();
	}
}
function b(e) {
	return e && e.name === "AbortError";
}
async function x(e) {
	try {
		await e.cancel();
	} catch {}
}
function S(e) {
	let t = e.lastIndexOf("\n\n"), n = e.lastIndexOf("\r\n\r\n"), r = Math.max(t, n);
	return r === -1 ? { consumed: 0 } : { consumed: r + (r === n && n >= t ? 4 : 2) };
}
function C(e) {
	return e ? e.split(/\r\n\r\n|\n\n/).filter((e) => e.trim() !== "") : [];
}
function w(e) {
	return C(e);
}
function T(e, t, n) {
	for (let r of e) {
		let e = _(r);
		if (e && (t(e.name, e.data), g(e.name))) return n && n(e.name, e.data), !0;
	}
	return !1;
}
//#endregion
//#region src/core/store.js
var ee = Object.freeze({
	IDLE: "idle",
	LOADING: "loading",
	READY: "ready",
	ERROR: "error"
});
Object.freeze({
	WAITING_FIRST_TOKEN: "waiting-first-token",
	STREAMING: "streaming",
	DONE: "done",
	ERROR: "error",
	RATE_LIMITED: "rate-limited"
});
function E(e, t) {
	return Object.is(e, t);
}
var te = class {
	constructor(e = {}) {
		this.state = Object.freeze({ ...e }), this.listeners = /* @__PURE__ */ new Set();
	}
	get() {
		return this.state;
	}
	set(e) {
		let t = !1;
		for (let n of Object.keys(e)) if (!E(this.state[n], e[n])) {
			t = !0;
			break;
		}
		if (t) {
			this.state = Object.freeze({
				...this.state,
				...e
			});
			for (let e of this.listeners) e(this.state);
		}
	}
	subscribe(e) {
		return this.listeners.add(e), () => {
			this.listeners.delete(e);
		};
	}
};
//#endregion
//#region src/ui/dom.js
function D(e, t = {}, n) {
	let r = document.createElement(e);
	for (let [e, n] of Object.entries(t)) n == null || n === !1 || (e === "class" ? r.className = n : e === "onClick" ? r.addEventListener("click", n) : e === "onInput" ? r.addEventListener("input", n) : e === "onKeydown" ? r.addEventListener("keydown", n) : e === "onChange" ? r.addEventListener("change", n) : r.setAttribute(e, n === !0 ? "" : String(n)));
	return O(r, n), r;
}
function O(e, t) {
	if (t == null) return;
	let n = Array.isArray(t) ? t : [t];
	for (let t of n) t == null || t === !1 || e.appendChild(typeof t == "string" ? document.createTextNode(t) : t);
}
function k(e) {
	for (; e.firstChild;) e.removeChild(e.firstChild);
}
var A = "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex=\"-1\"])", j = 0;
function M(e, { title: t, body: n, trigger: r, dismissable: i = !0, signal: a } = {}) {
	let o = r || document.activeElement;
	j += 1;
	let s = `lc-dialog-title-${j}`, c = D("h2", {
		id: s,
		class: "lc-modal__title",
		part: "modal-title"
	}, t), l = D("button", {
		type: "button",
		class: "lc-modal__close",
		part: "modal-close",
		"aria-label": "Fermer"
	}, "×"), u = D("div", {
		role: "dialog",
		"aria-modal": "true",
		"aria-labelledby": s,
		class: "lc-modal",
		part: "modal"
	}, [D("div", { class: "lc-modal__head" }, [c, l]), D("div", { class: "lc-modal__body" }, n)]), d = D("div", {
		class: "lc-overlay",
		part: "overlay"
	}, u), f = !1;
	function p() {
		f || (f = !0, document.removeEventListener("keydown", m, !0), a && a.removeEventListener("abort", p), d.dispatchEvent(new CustomEvent("lc-modal-closed")), d.remove(), o && typeof o.focus == "function" && o.focus());
	}
	function m(e) {
		if (!d.isConnected) return;
		if (e.key === "Escape" && i) {
			e.preventDefault(), p();
			return;
		}
		if (e.key !== "Tab") return;
		let t = [...u.querySelectorAll(A)].filter((e) => e.offsetParent !== null || e === document.activeElement);
		if (t.length === 0) {
			e.preventDefault();
			return;
		}
		let n = t[0], r = t[t.length - 1], a = u.getRootNode().activeElement || document.activeElement;
		e.shiftKey && a === n ? (e.preventDefault(), r.focus()) : !e.shiftKey && a === r && (e.preventDefault(), n.focus());
	}
	if (l.addEventListener("click", p), d.addEventListener("click", (e) => {
		e.target === d && i && p();
	}), document.addEventListener("keydown", m, !0), a) {
		if (a.aborted) return p(), {
			dialog: u,
			overlay: d,
			close: p
		};
		a.addEventListener("abort", p);
	}
	return e.appendChild(d), (u.querySelector(A) || u).focus(), {
		dialog: u,
		overlay: d,
		close: p
	};
}
//#endregion
//#region src/ui/icons.js
var ne = "http://www.w3.org/2000/svg", N = {
	send: ["M10 14l11 -11", "M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"],
	back: [
		"M5 12l14 0",
		"M5 12l6 6",
		"M5 12l6 -6"
	],
	close: ["M18 6l-12 12", "M6 6l12 12"],
	apps: [
		"M4 4h6v6h-6z",
		"M14 4h6v6h-6z",
		"M4 14h6v6h-6z",
		"M14 14h6v6h-6z"
	],
	menu: [
		"M4 6l16 0",
		"M4 12l16 0",
		"M4 18l16 0"
	],
	sun: [
		"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",
		"M3 12h1",
		"M20 12h1",
		"M12 3v1",
		"M12 20v1",
		"M5.6 5.6l.7 .7",
		"M17.7 17.7l.7 .7",
		"M18.4 5.6l-.7 .7",
		"M6.3 17.7l-.7 .7"
	],
	moon: ["M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"],
	fullscreen: [
		"M16 20l4 0l0 -4",
		"M14 14l6 6",
		"M8 4l-4 0l0 4",
		"M4 4l6 6"
	],
	compress: [
		"M18 10h-4v-4",
		"M14 10l6 -6",
		"M6 14h4v4",
		"M10 14l-6 6"
	],
	trash: [
		"M4 7l16 0",
		"M10 11l0 6",
		"M14 11l0 6",
		"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12",
		"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"
	],
	plus: ["M12 5l0 14", "M5 12l14 0"],
	thumbUp: ["M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3"],
	thumbDown: ["M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2 -2h-7a3 3 0 0 0 -3 3"],
	copy: ["M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z", "M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"],
	check: ["M5 12l5 5l10 -10"],
	message: [
		"M8 9h8",
		"M8 13h6",
		"M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"
	],
	chevron: ["M6 9l6 6l6 -6"],
	document: ["M14 3v4a1 1 0 0 0 1 1h4", "M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"],
	tool: ["M7 10h3v -3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6 -6a6 6 0 0 1 -8 -8l3.5 3.5"],
	search: ["M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0", "M21 21l-6 -6"],
	database: [
		"M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0",
		"M4 6v6a8 3 0 0 0 16 0v-6",
		"M4 12v6a8 3 0 0 0 16 0v-6"
	],
	alert: [
		"M12 9v4",
		"M12 16v.01",
		"M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75"
	]
};
function P(e, { size: t = 20 } = {}) {
	let n = document.createElementNS(ne, "svg");
	n.setAttribute("viewBox", "0 0 24 24"), n.setAttribute("width", String(t)), n.setAttribute("height", String(t)), n.setAttribute("fill", "none"), n.setAttribute("stroke", "currentColor"), n.setAttribute("stroke-width", "2"), n.setAttribute("stroke-linecap", "round"), n.setAttribute("stroke-linejoin", "round"), n.setAttribute("aria-hidden", "true"), n.classList.add("lc-icon");
	for (let t of N[e] || []) {
		let e = document.createElementNS(ne, "path");
		e.setAttribute("d", t), n.appendChild(e);
	}
	return n;
}
//#endregion
//#region src/ui/header.js
function re(e, t = {}) {
	k(e);
	let n = D("div", { class: "lc-hd__left" });
	if (t.showMenu) {
		let e = F("lc-hd__menu", "menu", "Conversations", t.onMenu);
		e.setAttribute("aria-expanded", t.sidebarOpen ? "true" : "false"), n.appendChild(e);
	}
	t.showBack && n.appendChild(F("lc-hd__back", "back", "Retour", t.onBack));
	let r = D("div", {
		class: "lc-hd__spacer",
		"aria-hidden": "true"
	}), i = D("div", { class: "lc-hd__right" });
	if (t.showExplore && i.appendChild(F("lc-hd__explore", "apps", "Explorer les agents", t.onExplore)), t.showThemeToggle && i.appendChild(F("lc-hd__theme", t.darkMode ? "sun" : "moon", "Changer de thème", t.onTheme)), t.showFullscreen) {
		let e = t.fullscreen ? "compress" : "fullscreen", n = t.fullscreen ? "Réduire la fenêtre" : "Plein écran";
		i.appendChild(F("lc-hd__fullscreen", e, n, t.onFullscreen));
	}
	t.closable && i.appendChild(F("lc-hd__close", "close", "Fermer", t.onClose)), e.appendChild(D("header", {
		class: "lc-hd",
		part: "header",
		"aria-label": t.title || "Barre du chat"
	}, [
		n,
		r,
		i
	]));
}
function F(e, t, n, r) {
	return D("button", {
		type: "button",
		class: e,
		"aria-label": n,
		onClick: r || (() => {})
	}, P(t, { size: 18 }));
}
//#endregion
//#region src/ui/avatar.js
var ie = /^data:image\/(png|jpe?g|gif|webp);base64,[A-Za-z0-9+/=]+$/;
function I(e) {
	return typeof e != "string" || e === "" ? null : ie.test(e) ? e : null;
}
function ae(e) {
	let t = (e || "").trim();
	return t ? t.charAt(0).toUpperCase() : "?";
}
var L = [
	"#2563eb",
	"#7c3aed",
	"#db2777",
	"#ea580c",
	"#16a34a",
	"#0891b2",
	"#4f46e5",
	"#b91c1c"
];
function oe(e) {
	let t = 0, n = e || "";
	for (let e = 0; e < n.length; e += 1) t = t * 31 + n.charCodeAt(e) | 0;
	return L[Math.abs(t) % L.length];
}
//#endregion
//#region src/ui/gallery.js
function R(e, t) {
	let n = I(t);
	if (n) {
		let e = D("img", {
			class: "lc-card__avatar",
			alt: ""
		});
		return e.src = n, e;
	}
	let r = D("div", { class: "lc-card__avatar lc-card__avatar--mono" }, ae(e));
	return r.style.background = oe(e), r;
}
function se({ name: e, description: t, logoBase64: n, onClick: r }) {
	return D("button", {
		type: "button",
		class: "lc-card",
		part: "card",
		"data-key": `${e} ${t}`.toLowerCase(),
		onClick: r
	}, [R(e, n), D("div", { class: "lc-card__text" }, [D("div", { class: "lc-card__name" }, e), t ? D("div", { class: "lc-card__desc" }, t) : null])]);
}
function ce(e, { bots: t = [], firstName: n, onBot: r }) {
	k(e);
	let i = n ? `Bonjour, ${n}` : "Explorer les agents", a = D("div", {
		class: "lc-gallery__grid",
		part: "gallery-grid"
	});
	for (let e of t) a.appendChild(se({
		name: e.botName || "",
		description: e.botDescription || "",
		logoBase64: e.logoBase64,
		onClick: () => r(e)
	}));
	let o = D("div", {
		class: "lc-gallery",
		part: "gallery"
	}, [D("h1", {
		class: "lc-gallery__title",
		part: "gallery-title"
	}, i)]);
	t.length > 5 && o.appendChild(le(a)), o.appendChild(a), e.appendChild(o);
}
function le(e) {
	let t = D("input", {
		type: "search",
		placeholder: "Rechercher un agent...",
		"aria-label": "Rechercher"
	});
	return t.addEventListener("input", () => {
		let n = t.value.trim().toLowerCase();
		for (let t of e.querySelectorAll("button.lc-card")) {
			let e = n && !t.dataset.key.includes(n);
			t.style.display = e ? "none" : "";
		}
	}), D("div", {
		class: "lc-gallery__search",
		part: "gallery-search"
	}, [P("search"), t]);
}
//#endregion
//#region src/ui/sidebar.js
var ue = 30;
function de({ lightLogo: e, darkLogo: t, logoHtml: n, dark: r }) {
	let i = I(r ? t || e : e || t), a = D("div", {
		class: "lc-sidebar__header",
		part: "sidebar-header"
	});
	if (i) {
		let e = D("img", {
			class: "lc-sidebar__logo",
			alt: ""
		});
		e.src = i, a.appendChild(e);
	} else a.appendChild(D("div", { class: "lc-sidebar__logo-html" }, n || "Conversations"));
	return a;
}
function fe(e) {
	if (typeof e == "number") return e;
	if (typeof e == "string") {
		let t = Date.parse(e.replace(" ", "T"));
		return Number.isNaN(t) ? 0 : t;
	}
	return 0;
}
function pe(e) {
	let t = String(e || "").replace(/\s+/g, " ").trim();
	return t.length > ue ? `${t.slice(0, ue)}…` : t;
}
function me({ conv: e, active: t, onOpen: n, onDelete: r, confirm: i }) {
	let a = D("button", {
		type: "button",
		class: "lc-conv__open",
		onClick: () => n(e)
	}, D("span", { class: "lc-conv__preview" }, pe(e.lastMessage) || "Conversation")), o = D("button", {
		type: "button",
		class: "lc-conv__delete",
		"aria-label": "Supprimer la conversation",
		onClick: () => {
			i() && r(e);
		}
	}, P("trash", { size: 16 }));
	return D("div", {
		class: `lc-conv${t ? " is-active" : ""}`,
		part: "conversation",
		"data-uuid": e.conversationUuid
	}, [a, o]);
}
function z(e, { conversations: t = [], activeUuid: n, onOpen: r, onDelete: i, onDeleteAll: a, onExplore: o, onClose: s, showExplore: c = !0, confirm: l, lightLogo: u, darkLogo: d, logoHtml: f, dark: p } = {}) {
	k(e);
	let m = l || (() => window.confirm("Confirmer ?")), h = D("div", {
		class: "lc-sidebar",
		part: "sidebar"
	});
	h.appendChild(de({
		lightLogo: u,
		darkLogo: d,
		logoHtml: f,
		dark: p
	})), s && h.appendChild(D("button", {
		type: "button",
		class: "lc-sidebar__close",
		part: "sidebar-close",
		"aria-label": "Fermer le panneau",
		onClick: () => s()
	}, [P("close", { size: 18 })])), c && h.appendChild(D("button", {
		type: "button",
		class: "lc-sidebar__explore",
		onClick: () => o()
	}, [P("apps", { size: 16 }), D("span", {}, "Explorer les agents")]));
	let g = [...t].sort((e, t) => fe(t.updatedAt) - fe(e.updatedAt));
	if (g.length === 0) {
		h.appendChild(D("div", {
			class: "lc-sidebar__empty",
			part: "sidebar-empty"
		}, [P("message", { size: 24 }), D("span", {}, "Pas de conversation récente")])), e.appendChild(h);
		return;
	}
	let _ = D("div", { class: "lc-sidebar__list" });
	for (let e of g) _.appendChild(me({
		conv: e,
		active: e.conversationUuid === n,
		onOpen: r,
		onDelete: i,
		confirm: m
	}));
	h.appendChild(_), h.appendChild(D("div", { class: "lc-sidebar__footer" }, [D("button", {
		type: "button",
		class: "lc-sidebar__delete-all",
		onClick: () => {
			m() && a();
		}
	}, [P("trash", { size: 16 }), D("span", {}, "Tout supprimer")])])), e.appendChild(h);
}
//#endregion
//#region src/ui/errors.js
var he = {
	unavailable: {
		title: "Service indisponible",
		message: "Le service de chat est momentanément injoignable.",
		action: "Réessayer"
	},
	unauthorized: {
		title: "Session expirée",
		message: "Votre session a expiré. Veuillez vous reconnecter.",
		action: "Réessayer"
	},
	forbidden: {
		title: "Accès refusé",
		message: "Vous n’avez pas accès à ce service.",
		action: "Réessayer"
	},
	empty: {
		title: "Aucun agent disponible",
		message: "Aucun agent n’est disponible pour le moment.",
		action: "Réessayer"
	},
	"rate-limited": {
		title: "Limite atteinte",
		message: "Limite quotidienne atteinte ou trop de conversations simultanées. Réessayez plus tard.",
		action: "Réessayer"
	}
};
function ge(e, { kind: t, onRetry: n } = {}) {
	k(e);
	let r = he[t] || he.unavailable;
	e.appendChild(D("div", {
		class: "lc-error",
		part: "error",
		"data-kind": t || "unavailable",
		role: "alert"
	}, [
		P("alert", { size: 64 }),
		D("h2", { class: "lc-error__title" }, r.title),
		D("p", { class: "lc-error__message" }, r.message),
		D("button", {
			type: "button",
			class: "lc-error__retry",
			onClick: () => n && n()
		}, r.action)
	]));
}
//#endregion
//#region src/ui/feedback.js
function _e(e, { messageId: t, feedback: n, onSend: r, modalHost: i, signal: a } = {}) {
	let o = D("div", {
		class: "lc-fb",
		part: "feedback"
	}), s = D("button", {
		type: "button",
		class: "lc-fb__up",
		"aria-label": "Utile"
	}, P("thumbUp", { size: 16 })), c = D("button", {
		type: "button",
		class: "lc-fb__down",
		"aria-label": "Pas utile"
	}, P("thumbDown", { size: 16 }));
	o.append(s, c);
	function l(e, t) {
		s.disabled = !0, c.disabled = !0, o.dataset.sent = e ? "positive" : "negative", (e ? s : c).classList.add("is-active"), o.querySelector(".lc-fb__check") || o.appendChild(D("span", {
			class: "lc-fb__check",
			"aria-label": "Enregistré"
		}, P("check", { size: 16 }))), t && u(t);
	}
	function u(e) {
		let t = D("div", {
			class: "lc-fb__comment-text",
			hidden: !0
		}, e), n = D("button", {
			type: "button",
			class: "lc-fb__comment",
			"aria-label": "Voir le commentaire",
			onClick: () => {
				t.hidden = !t.hidden;
			}
		}, P("message", { size: 16 }));
		o.append(n, t);
	}
	function d() {
		r({
			messageId: t,
			isPositive: !0
		}), l(!0);
	}
	function f() {
		let n = D("textarea", {
			class: "lc-fb__textarea",
			rows: "4",
			placeholder: "Commentaire (optionnel)",
			"aria-label": "Commentaire"
		}), o, s = D("button", {
			type: "button",
			class: "lc-fb__submit",
			onClick: () => {
				let e = n.value.trim();
				r(e ? {
					messageId: t,
					isPositive: !1,
					comment: e
				} : {
					messageId: t,
					isPositive: !1
				}), o.close(), l(!1, e || void 0);
			}
		}, "Envoyer"), u = D("div", {}, [n, D("div", { class: "lc-fb__actions" }, s)]);
		n.addEventListener("keydown", (e) => {
			e.key === "Enter" && (e.ctrlKey || e.metaKey) && (e.preventDefault(), s.click());
		}), o = M(i || e, {
			title: "Votre retour nous aide",
			body: u,
			trigger: c,
			signal: a
		});
	}
	s.addEventListener("click", d), c.addEventListener("click", f), e.appendChild(o), n && l(!!n.isPositive, n.comment || void 0);
}
//#endregion
//#region src/ui/user-menu.js
function ve(e) {
	let t = (e.firstName || "").trim(), n = (e.lastName || "").trim(), r = `${t.charAt(0)}${n.charAt(0)}`.trim();
	if (r) return r.toUpperCase();
	let i = (e.email || "").trim();
	return i ? i.charAt(0).toUpperCase() : "?";
}
function ye(e, t) {
	let n = (e || []).filter((e) => e.rateLimitByUserByDay > 0);
	if (n.length === 0) return null;
	let r = n.map((e) => {
		let n = (t || []).find((t) => String(t.botId) === String(e.id)), r = n ? n.messageCount : 0, i = Math.max(0, e.rateLimitByUserByDay - r);
		return D("div", { class: "lc-user__rate-item" }, [D("span", { class: "lc-user__rate-name" }, e.botName || "Assistant"), D("span", { class: "lc-user__rate-count" }, `${i} / ${e.rateLimitByUserByDay}`)]);
	});
	return D("div", { class: "lc-user__rates" }, [D("div", { class: "lc-user__rates-head" }, D("h4", {}, "Limites quotidiennes")), ...r]);
}
function be(e, { user: t, bots: n = [], rates: r = [] } = {}) {
	if (!t) return { destroy() {} };
	let i = D("div", { class: "lc-user__avatar" }, ve(t)), a = `${t.firstName || ""} ${t.lastName || ""}`.trim() || t.email || "", o = D("div", {
		class: "lc-user__dropdown",
		part: "user-menu",
		role: "menu"
	}, [D("div", { class: "lc-user__info" }, [i.cloneNode(!0), D("div", { class: "lc-user__details" }, [D("div", { class: "lc-user__name" }, a), D("div", { class: "lc-user__email" }, t.email || "")])]), ye(n, r)]), s = D("button", {
		type: "button",
		class: "lc-user__btn",
		"aria-label": "Menu utilisateur",
		"aria-haspopup": "true",
		"aria-expanded": "false"
	}, [D("span", { class: "lc-user__initials" }, ve(t)), D("span", {
		class: "lc-user__indicator",
		"aria-hidden": "true"
	}, P("chevron", { size: 12 }))]);
	function c(e) {
		o.classList.toggle("is-open", e), s.classList.toggle("is-active", e), s.setAttribute("aria-expanded", String(e));
	}
	function l(e) {
		!d.contains(e.target) && !e.composedPath().includes(d) && c(!1);
	}
	function u(e) {
		e.key === "Escape" && c(!1);
	}
	s.addEventListener("click", (e) => {
		e.stopPropagation(), c(!o.classList.contains("is-open"));
	});
	let d = D("div", { class: "lc-user" }, [s, o]);
	return document.addEventListener("click", l), document.addEventListener("keydown", u), e.appendChild(d), { destroy() {
		document.removeEventListener("click", l), document.removeEventListener("keydown", u);
	} };
}
//#endregion
//#region node_modules/marked/lib/marked.esm.js
function xe() {
	return {
		async: !1,
		breaks: !1,
		extensions: null,
		gfm: !0,
		hooks: null,
		pedantic: !1,
		renderer: null,
		silent: !1,
		tokenizer: null,
		walkTokens: null
	};
}
var Se = xe();
function Ce(e) {
	Se = e;
}
var B = { exec: () => null };
function V(e) {
	let t = [];
	return (n) => {
		let r = Math.max(0, Math.min(3, n - 1)), i = t[r];
		return i || (i = e(r), t[r] = i), i;
	};
}
function H(e, t = "") {
	let n = typeof e == "string" ? e : e.source, r = {
		replace: (e, t) => {
			let i = typeof t == "string" ? t : t.source;
			return i = i.replace(W.caret, "$1"), n = n.replace(e, i), r;
		},
		getRegex: () => new RegExp(n, t)
	};
	return r;
}
var U = ((e = "") => {
	try {
		return !!RegExp("(?<=1)(?<!1)" + e);
	} catch {
		return !1;
	}
})(), W = {
	codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
	outputLinkReplace: /\\([\[\]])/g,
	indentCodeCompensation: /^(\s+)(?:```)/,
	beginningSpace: /^\s+/,
	endingHash: /#$/,
	startingSpaceChar: /^ /,
	endingSpaceChar: / $/,
	nonSpaceChar: /[^ ]/,
	newLineCharGlobal: /\n/g,
	tabCharGlobal: /\t/g,
	multipleSpaceGlobal: /\s+/g,
	blankLine: /^[ \t]*$/,
	doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
	blockquoteStart: /^ {0,3}>/,
	blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
	blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
	listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
	listIsTask: /^\[[ xX]\] +\S/,
	listReplaceTask: /^\[[ xX]\] +/,
	listTaskCheckbox: /\[[ xX]\]/,
	anyLine: /\n.*\n/,
	hrefBrackets: /^<(.*)>$/,
	tableDelimiter: /[:|]/,
	tableAlignChars: /^\||\| *$/g,
	tableRowBlankLine: /\n[ \t]*$/,
	tableAlignRight: /^ *-+: *$/,
	tableAlignCenter: /^ *:-+: *$/,
	tableAlignLeft: /^ *:-+ *$/,
	startATag: /^<a /i,
	endATag: /^<\/a>/i,
	startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
	endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
	startAngleBracket: /^</,
	endAngleBracket: />$/,
	pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
	unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
	escapeTest: /[&<>"']/,
	escapeReplace: /[&<>"']/g,
	escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
	escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
	caret: /(^|[^\[])\^/g,
	percentDecode: /%25/g,
	findPipe: /\|/g,
	splitPipe: / \|/,
	slashPipe: /\\\|/g,
	carriageReturn: /\r\n|\r/g,
	spaceLine: /^ +$/gm,
	notSpaceStart: /^\S*/,
	endingNewline: /\n$/,
	listItemRegex: (e) => RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),
	nextBulletRegex: V((e) => RegExp(`^ {0,${e}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),
	hrRegex: V((e) => RegExp(`^ {0,${e}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)),
	fencesBeginRegex: V((e) => RegExp(`^ {0,${e}}(?:\`\`\`|~~~)`)),
	headingBeginRegex: V((e) => RegExp(`^ {0,${e}}#`)),
	htmlBeginRegex: V((e) => RegExp(`^ {0,${e}}<(?:[a-z].*>|!--)`, "i")),
	blockquoteBeginRegex: V((e) => RegExp(`^ {0,${e}}>`))
}, we = /^(?:[ \t]*(?:\n|$))+/, Te = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, Ee = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, De = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Oe = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, ke = / {0,3}(?:[*+-]|\d{1,9}[.)])/, Ae = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, je = H(Ae).replace(/bull/g, ke).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), Me = H(Ae).replace(/bull/g, ke).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), Ne = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Pe = /^[^\n]+/, Fe = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, Ie = H(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", Fe).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), Le = H(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g, ke).getRegex(), Re = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", ze = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, G = H("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", ze).replace("tag", Re).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), Be = H(Ne).replace("hr", De).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Re).getRegex(), Ve = {
	blockquote: H(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Be).getRegex(),
	code: Te,
	def: Ie,
	fences: Ee,
	heading: Oe,
	hr: De,
	html: G,
	lheading: je,
	list: Le,
	newline: we,
	paragraph: Be,
	table: B,
	text: Pe
}, He = H("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", De).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Re).getRegex(), Ue = {
	...Ve,
	lheading: Me,
	table: He,
	paragraph: H(Ne).replace("hr", De).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", He).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Re).getRegex()
}, We = {
	...Ve,
	html: H("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", ze).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
	def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
	heading: /^(#{1,6})(.*)(?:\n+|$)/,
	fences: B,
	lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
	paragraph: H(Ne).replace("hr", De).replace("heading", " *#{1,6} *[^\n]").replace("lheading", je).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, Ge = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Ke = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, qe = /^( {2,}|\\)\n(?!\s*$)/, Je = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, Ye = /[\p{P}\p{S}]/u, Xe = /[\s\p{P}\p{S}]/u, Ze = /[^\s\p{P}\p{S}]/u, Qe = H(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, Xe).getRegex(), $e = /(?!~)[\p{P}\p{S}]/u, et = /(?!~)[\s\p{P}\p{S}]/u, tt = /(?:[^\s\p{P}\p{S}]|~)/u, nt = H(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", U ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), rt = /^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/, it = H(rt, "u").replace(/punct/g, Ye).getRegex(), at = H(rt, "u").replace(/punct/g, $e).getRegex(), ot = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", st = H(ot, "gu").replace(/notPunctSpace/g, Ze).replace(/punctSpace/g, Xe).replace(/punct/g, Ye).getRegex(), ct = H(ot, "gu").replace(/notPunctSpace/g, tt).replace(/punctSpace/g, et).replace(/punct/g, $e).getRegex(), lt = H("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, Ze).replace(/punctSpace/g, Xe).replace(/punct/g, Ye).getRegex(), ut = H(/^~~?(?:((?!~)punct)|[^\s~])/, "u").replace(/punct/g, Ye).getRegex(), dt = H("^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)", "gu").replace(/notPunctSpace/g, Ze).replace(/punctSpace/g, Xe).replace(/punct/g, Ye).getRegex(), ft = H(/\\(punct)/, "gu").replace(/punct/g, Ye).getRegex(), pt = H(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), mt = H(ze).replace("(?:-->|$)", "-->").getRegex(), ht = H("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", mt).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), gt = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/, _t = H(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label", gt).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), vt = H(/^!?\[(label)\]\[(ref)\]/).replace("label", gt).replace("ref", Fe).getRegex(), yt = H(/^!?\[(ref)\](?:\[\])?/).replace("ref", Fe).getRegex(), bt = H("reflink|nolink(?!\\()", "g").replace("reflink", vt).replace("nolink", yt).getRegex(), xt = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, St = {
	_backpedal: B,
	anyPunctuation: ft,
	autolink: pt,
	blockSkip: nt,
	br: qe,
	code: Ke,
	del: B,
	delLDelim: B,
	delRDelim: B,
	emStrongLDelim: it,
	emStrongRDelimAst: st,
	emStrongRDelimUnd: lt,
	escape: Ge,
	link: _t,
	nolink: yt,
	punctuation: Qe,
	reflink: vt,
	reflinkSearch: bt,
	tag: ht,
	text: Je,
	url: B
}, Ct = {
	...St,
	link: H(/^!?\[(label)\]\((.*?)\)/).replace("label", gt).getRegex(),
	reflink: H(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", gt).getRegex()
}, wt = {
	...St,
	emStrongRDelimAst: ct,
	emStrongLDelim: at,
	delLDelim: ut,
	delRDelim: dt,
	url: H(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", xt).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
	_backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
	del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,
	text: H(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", xt).getRegex()
}, Tt = {
	...wt,
	br: H(qe).replace("{2,}", "*").getRegex(),
	text: H(wt.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, Et = {
	normal: Ve,
	gfm: Ue,
	pedantic: We
}, Dt = {
	normal: St,
	gfm: wt,
	breaks: Tt,
	pedantic: Ct
}, Ot = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"\"": "&quot;",
	"'": "&#39;"
}, kt = (e) => Ot[e];
function At(e, t) {
	if (t) {
		if (W.escapeTest.test(e)) return e.replace(W.escapeReplace, kt);
	} else if (W.escapeTestNoEncode.test(e)) return e.replace(W.escapeReplaceNoEncode, kt);
	return e;
}
function jt(e) {
	try {
		e = encodeURI(e).replace(W.percentDecode, "%");
	} catch {
		return null;
	}
	return e;
}
function Mt(e, t) {
	let n = e.replace(W.findPipe, (e, t, n) => {
		let r = !1, i = t;
		for (; --i >= 0 && n[i] === "\\";) r = !r;
		return r ? "|" : " |";
	}).split(W.splitPipe), r = 0;
	if (n[0].trim() || n.shift(), n.length > 0 && !n.at(-1)?.trim() && n.pop(), t) if (n.length > t) n.splice(t);
	else for (; n.length < t;) n.push("");
	for (; r < n.length; r++) n[r] = n[r].trim().replace(W.slashPipe, "|");
	return n;
}
function Nt(e, t, n) {
	let r = e.length;
	if (r === 0) return "";
	let i = 0;
	for (; i < r;) {
		let a = e.charAt(r - i - 1);
		if (a === t && !n) i++;
		else if (a !== t && n) i++;
		else break;
	}
	return e.slice(0, r - i);
}
function Pt(e) {
	let t = e.split("\n"), n = t.length - 1;
	for (; n >= 0 && W.blankLine.test(t[n]);) n--;
	return t.length - n <= 2 ? e : t.slice(0, n + 1).join("\n");
}
function Ft(e, t) {
	if (e.indexOf(t[1]) === -1) return -1;
	let n = 0;
	for (let r = 0; r < e.length; r++) if (e[r] === "\\") r++;
	else if (e[r] === t[0]) n++;
	else if (e[r] === t[1] && (n--, n < 0)) return r;
	return n > 0 ? -2 : -1;
}
function It(e, t = 0) {
	let n = t, r = "";
	for (let t of e) if (t === "	") {
		let e = 4 - n % 4;
		r += " ".repeat(e), n += e;
	} else r += t, n++;
	return r;
}
function Lt(e, t, n, r, i) {
	let a = t.href, o = t.title || null, s = e[1].replace(i.other.outputLinkReplace, "$1");
	r.state.inLink = !0;
	let c = {
		type: e[0].charAt(0) === "!" ? "image" : "link",
		raw: n,
		href: a,
		title: o,
		text: s,
		tokens: r.inlineTokens(s)
	};
	return r.state.inLink = !1, c;
}
function Rt(e, t, n) {
	let r = e.match(n.other.indentCodeCompensation);
	if (r === null) return t;
	let i = r[1];
	return t.split("\n").map((e) => {
		let t = e.match(n.other.beginningSpace);
		if (t === null) return e;
		let [r] = t;
		return r.length >= i.length ? e.slice(i.length) : e;
	}).join("\n");
}
var zt = class {
	options;
	rules;
	lexer;
	constructor(e) {
		this.options = e || Se;
	}
	space(e) {
		let t = this.rules.block.newline.exec(e);
		if (t && t[0].length > 0) return {
			type: "space",
			raw: t[0]
		};
	}
	code(e) {
		let t = this.rules.block.code.exec(e);
		if (t) {
			let e = this.options.pedantic ? t[0] : Pt(t[0]);
			return {
				type: "code",
				raw: e,
				codeBlockStyle: "indented",
				text: e.replace(this.rules.other.codeRemoveIndent, "")
			};
		}
	}
	fences(e) {
		let t = this.rules.block.fences.exec(e);
		if (t) {
			let e = t[0], n = Rt(e, t[3] || "", this.rules);
			return {
				type: "code",
				raw: e,
				lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2],
				text: n
			};
		}
	}
	heading(e) {
		let t = this.rules.block.heading.exec(e);
		if (t) {
			let e = t[2].trim();
			if (this.rules.other.endingHash.test(e)) {
				let t = Nt(e, "#");
				(this.options.pedantic || !t || this.rules.other.endingSpaceChar.test(t)) && (e = t.trim());
			}
			return {
				type: "heading",
				raw: Nt(t[0], "\n"),
				depth: t[1].length,
				text: e,
				tokens: this.lexer.inline(e)
			};
		}
	}
	hr(e) {
		let t = this.rules.block.hr.exec(e);
		if (t) return {
			type: "hr",
			raw: Nt(t[0], "\n")
		};
	}
	blockquote(e) {
		let t = this.rules.block.blockquote.exec(e);
		if (t) {
			let e = Nt(t[0], "\n").split("\n"), n = "", r = "", i = [];
			for (; e.length > 0;) {
				let t = !1, a = [], o;
				for (o = 0; o < e.length; o++) if (this.rules.other.blockquoteStart.test(e[o])) a.push(e[o]), t = !0;
				else if (!t) a.push(e[o]);
				else break;
				e = e.slice(o);
				let s = a.join("\n"), c = s.replace(this.rules.other.blockquoteSetextReplace, "\n    $1").replace(this.rules.other.blockquoteSetextReplace2, "");
				n = n ? `${n}
${s}` : s, r = r ? `${r}
${c}` : c;
				let l = this.lexer.state.top;
				if (this.lexer.state.top = !0, this.lexer.blockTokens(c, i, !0), this.lexer.state.top = l, e.length === 0) break;
				let u = i.at(-1);
				if (u?.type === "code") break;
				if (u?.type === "blockquote") {
					let t = u, a = t.raw + "\n" + e.join("\n"), o = this.blockquote(a);
					i[i.length - 1] = o, n = n.substring(0, n.length - t.raw.length) + o.raw, r = r.substring(0, r.length - t.text.length) + o.text;
					break;
				} else if (u?.type === "list") {
					let t = u, a = t.raw + "\n" + e.join("\n"), o = this.list(a);
					i[i.length - 1] = o, n = n.substring(0, n.length - u.raw.length) + o.raw, r = r.substring(0, r.length - t.raw.length) + o.raw, e = a.substring(i.at(-1).raw.length).split("\n");
					continue;
				}
			}
			return {
				type: "blockquote",
				raw: n,
				tokens: i,
				text: r
			};
		}
	}
	list(e) {
		let t = this.rules.block.list.exec(e);
		if (t) {
			let n = t[1].trim(), r = n.length > 1, i = {
				type: "list",
				raw: "",
				ordered: r,
				start: r ? +n.slice(0, -1) : "",
				loose: !1,
				items: []
			};
			n = r ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`, this.options.pedantic && (n = r ? n : "[*+-]");
			let a = this.rules.other.listItemRegex(n), o = !1;
			for (; e;) {
				let n = !1, r = "", s = "";
				if (!(t = a.exec(e)) || this.rules.block.hr.test(e)) break;
				r = t[0], e = e.substring(r.length);
				let c = It(t[2].split("\n", 1)[0], t[1].length), l = e.split("\n", 1)[0], u = !c.trim(), d = 0;
				if (this.options.pedantic ? (d = 2, s = c.trimStart()) : u ? d = t[1].length + 1 : (d = c.search(this.rules.other.nonSpaceChar), d = d > 4 ? 1 : d, s = c.slice(d), d += t[1].length), u && this.rules.other.blankLine.test(l) && (r += l + "\n", e = e.substring(l.length + 1), n = !0), !n) {
					let t = this.rules.other.nextBulletRegex(d), n = this.rules.other.hrRegex(d), i = this.rules.other.fencesBeginRegex(d), a = this.rules.other.headingBeginRegex(d), o = this.rules.other.htmlBeginRegex(d), f = this.rules.other.blockquoteBeginRegex(d);
					for (; e;) {
						let p = e.split("\n", 1)[0], m;
						if (l = p, this.options.pedantic ? (l = l.replace(this.rules.other.listReplaceNesting, "  "), m = l) : m = l.replace(this.rules.other.tabCharGlobal, "    "), i.test(l) || a.test(l) || o.test(l) || f.test(l) || t.test(l) || n.test(l)) break;
						if (m.search(this.rules.other.nonSpaceChar) >= d || !l.trim()) s += "\n" + m.slice(d);
						else {
							if (u || c.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || i.test(c) || a.test(c) || n.test(c)) break;
							s += "\n" + l;
						}
						u = !l.trim(), r += p + "\n", e = e.substring(p.length + 1), c = m.slice(d);
					}
				}
				i.loose || (o ? i.loose = !0 : this.rules.other.doubleBlankLine.test(r) && (o = !0)), i.items.push({
					type: "list_item",
					raw: r,
					task: !!this.options.gfm && this.rules.other.listIsTask.test(s),
					loose: !1,
					text: s,
					tokens: []
				}), i.raw += r;
			}
			let s = i.items.at(-1);
			if (s) s.raw = s.raw.trimEnd(), s.text = s.text.trimEnd();
			else return;
			i.raw = i.raw.trimEnd();
			for (let e of i.items) {
				this.lexer.state.top = !1, e.tokens = this.lexer.blockTokens(e.text, []);
				let t = e.tokens[0];
				if (e.task && (t?.type === "text" || t?.type === "paragraph")) {
					e.text = e.text.replace(this.rules.other.listReplaceTask, ""), t.raw = t.raw.replace(this.rules.other.listReplaceTask, ""), t.text = t.text.replace(this.rules.other.listReplaceTask, "");
					for (let e = this.lexer.inlineQueue.length - 1; e >= 0; e--) if (this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)) {
						this.lexer.inlineQueue[e].src = this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask, "");
						break;
					}
					let n = this.rules.other.listTaskCheckbox.exec(e.raw);
					if (n) {
						let t = {
							type: "checkbox",
							raw: n[0] + " ",
							checked: n[0] !== "[ ]"
						};
						e.checked = t.checked, i.loose ? e.tokens[0] && ["paragraph", "text"].includes(e.tokens[0].type) && "tokens" in e.tokens[0] && e.tokens[0].tokens ? (e.tokens[0].raw = t.raw + e.tokens[0].raw, e.tokens[0].text = t.raw + e.tokens[0].text, e.tokens[0].tokens.unshift(t)) : e.tokens.unshift({
							type: "paragraph",
							raw: t.raw,
							text: t.raw,
							tokens: [t]
						}) : e.tokens.unshift(t);
					}
				} else e.task &&= !1;
				if (!i.loose) {
					let t = e.tokens.filter((e) => e.type === "space");
					i.loose = t.length > 0 && t.some((e) => this.rules.other.anyLine.test(e.raw));
				}
			}
			if (i.loose) for (let e of i.items) {
				e.loose = !0;
				for (let t of e.tokens) t.type === "text" && (t.type = "paragraph");
			}
			return i;
		}
	}
	html(e) {
		let t = this.rules.block.html.exec(e);
		if (t) {
			let e = Pt(t[0]);
			return {
				type: "html",
				block: !0,
				raw: e,
				pre: t[1] === "pre" || t[1] === "script" || t[1] === "style",
				text: e
			};
		}
	}
	def(e) {
		let t = this.rules.block.def.exec(e);
		if (t) {
			let e = t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), n = t[2] ? t[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", r = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
			return {
				type: "def",
				tag: e,
				raw: Nt(t[0], "\n"),
				href: n,
				title: r
			};
		}
	}
	table(e) {
		let t = this.rules.block.table.exec(e);
		if (!t || !this.rules.other.tableDelimiter.test(t[2])) return;
		let n = Mt(t[1]), r = t[2].replace(this.rules.other.tableAlignChars, "").split("|"), i = t[3]?.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split("\n") : [], a = {
			type: "table",
			raw: Nt(t[0], "\n"),
			header: [],
			align: [],
			rows: []
		};
		if (n.length === r.length) {
			for (let e of r) this.rules.other.tableAlignRight.test(e) ? a.align.push("right") : this.rules.other.tableAlignCenter.test(e) ? a.align.push("center") : this.rules.other.tableAlignLeft.test(e) ? a.align.push("left") : a.align.push(null);
			for (let e = 0; e < n.length; e++) a.header.push({
				text: n[e],
				tokens: this.lexer.inline(n[e]),
				header: !0,
				align: a.align[e]
			});
			for (let e of i) a.rows.push(Mt(e, a.header.length).map((e, t) => ({
				text: e,
				tokens: this.lexer.inline(e),
				header: !1,
				align: a.align[t]
			})));
			return a;
		}
	}
	lheading(e) {
		let t = this.rules.block.lheading.exec(e);
		if (t) {
			let e = t[1].trim();
			return {
				type: "heading",
				raw: Nt(t[0], "\n"),
				depth: t[2].charAt(0) === "=" ? 1 : 2,
				text: e,
				tokens: this.lexer.inline(e)
			};
		}
	}
	paragraph(e) {
		let t = this.rules.block.paragraph.exec(e);
		if (t) {
			let e = t[1].charAt(t[1].length - 1) === "\n" ? t[1].slice(0, -1) : t[1];
			return {
				type: "paragraph",
				raw: t[0],
				text: e,
				tokens: this.lexer.inline(e)
			};
		}
	}
	text(e) {
		let t = this.rules.block.text.exec(e);
		if (t) return {
			type: "text",
			raw: t[0],
			text: t[0],
			tokens: this.lexer.inline(t[0])
		};
	}
	escape(e) {
		let t = this.rules.inline.escape.exec(e);
		if (t) return {
			type: "escape",
			raw: t[0],
			text: t[1]
		};
	}
	tag(e) {
		let t = this.rules.inline.tag.exec(e);
		if (t) return !this.lexer.state.inLink && this.rules.other.startATag.test(t[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && this.rules.other.endATag.test(t[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(t[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(t[0]) && (this.lexer.state.inRawBlock = !1), {
			type: "html",
			raw: t[0],
			inLink: this.lexer.state.inLink,
			inRawBlock: this.lexer.state.inRawBlock,
			block: !1,
			text: t[0]
		};
	}
	link(e) {
		let t = this.rules.inline.link.exec(e);
		if (t) {
			let e = t[2].trim();
			if (!this.options.pedantic && this.rules.other.startAngleBracket.test(e)) {
				if (!this.rules.other.endAngleBracket.test(e)) return;
				let t = Nt(e.slice(0, -1), "\\");
				if ((e.length - t.length) % 2 == 0) return;
			} else {
				let e = Ft(t[2], "()");
				if (e === -2) return;
				if (e > -1) {
					let n = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + e;
					t[2] = t[2].substring(0, e), t[0] = t[0].substring(0, n).trim(), t[3] = "";
				}
			}
			let n = t[2], r = "";
			if (this.options.pedantic) {
				let e = this.rules.other.pedanticHrefTitle.exec(n);
				e && (n = e[1], r = e[3]);
			} else r = t[3] ? t[3].slice(1, -1) : "";
			return n = n.trim(), this.rules.other.startAngleBracket.test(n) && (n = this.options.pedantic && !this.rules.other.endAngleBracket.test(e) ? n.slice(1) : n.slice(1, -1)), Lt(t, {
				href: n && n.replace(this.rules.inline.anyPunctuation, "$1"),
				title: r && r.replace(this.rules.inline.anyPunctuation, "$1")
			}, t[0], this.lexer, this.rules);
		}
	}
	reflink(e, t) {
		let n;
		if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
			let e = t[(n[2] || n[1]).replace(this.rules.other.multipleSpaceGlobal, " ").toLowerCase()];
			if (!e) {
				let e = n[0].charAt(0);
				return {
					type: "text",
					raw: e,
					text: e
				};
			}
			return Lt(n, e, n[0], this.lexer, this.rules);
		}
	}
	emStrong(e, t, n = "") {
		let r = this.rules.inline.emStrongLDelim.exec(e);
		if (!(!r || !r[1] && !r[2] && !r[3] && !r[4] || r[4] && n.match(this.rules.other.unicodeAlphaNumeric)) && (!(r[1] || r[3]) || !n || this.rules.inline.punctuation.exec(n))) {
			let n = [...r[0]].length - 1, i, a, o = n, s = 0, c = r[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
			for (c.lastIndex = 0, t = t.slice(-1 * e.length + n); (r = c.exec(t)) !== null;) {
				if (i = r[1] || r[2] || r[3] || r[4] || r[5] || r[6], !i) continue;
				if (a = [...i].length, r[3] || r[4]) {
					o += a;
					continue;
				} else if ((r[5] || r[6]) && n % 3 && !((n + a) % 3)) {
					s += a;
					continue;
				}
				if (o -= a, o > 0) continue;
				a = Math.min(a, a + o + s);
				let t = [...r[0]][0].length, c = e.slice(0, n + r.index + t + a);
				if (Math.min(n, a) % 2) {
					let e = c.slice(1, -1);
					return {
						type: "em",
						raw: c,
						text: e,
						tokens: this.lexer.inlineTokens(e)
					};
				}
				let l = c.slice(2, -2);
				return {
					type: "strong",
					raw: c,
					text: l,
					tokens: this.lexer.inlineTokens(l)
				};
			}
		}
	}
	codespan(e) {
		let t = this.rules.inline.code.exec(e);
		if (t) {
			let e = t[2].replace(this.rules.other.newLineCharGlobal, " "), n = this.rules.other.nonSpaceChar.test(e), r = this.rules.other.startingSpaceChar.test(e) && this.rules.other.endingSpaceChar.test(e);
			return n && r && (e = e.substring(1, e.length - 1)), {
				type: "codespan",
				raw: t[0],
				text: e
			};
		}
	}
	br(e) {
		let t = this.rules.inline.br.exec(e);
		if (t) return {
			type: "br",
			raw: t[0]
		};
	}
	del(e, t, n = "") {
		let r = this.rules.inline.delLDelim.exec(e);
		if (r && (!r[1] || !n || this.rules.inline.punctuation.exec(n))) {
			let n = [...r[0]].length - 1, i, a, o = n, s = this.rules.inline.delRDelim;
			for (s.lastIndex = 0, t = t.slice(-1 * e.length + n); (r = s.exec(t)) !== null;) {
				if (i = r[1] || r[2] || r[3] || r[4] || r[5] || r[6], !i || (a = [...i].length, a !== n)) continue;
				if (r[3] || r[4]) {
					o += a;
					continue;
				}
				if (o -= a, o > 0) continue;
				a = Math.min(a, a + o);
				let t = [...r[0]][0].length, s = e.slice(0, n + r.index + t + a), c = s.slice(n, -n);
				return {
					type: "del",
					raw: s,
					text: c,
					tokens: this.lexer.inlineTokens(c)
				};
			}
		}
	}
	autolink(e) {
		let t = this.rules.inline.autolink.exec(e);
		if (t) {
			let e, n;
			return t[2] === "@" ? (e = t[1], n = "mailto:" + e) : (e = t[1], n = e), {
				type: "link",
				raw: t[0],
				text: e,
				href: n,
				tokens: [{
					type: "text",
					raw: e,
					text: e
				}]
			};
		}
	}
	url(e) {
		let t;
		if (t = this.rules.inline.url.exec(e)) {
			let e, n;
			if (t[2] === "@") e = t[0], n = "mailto:" + e;
			else {
				let r;
				do
					r = t[0], t[0] = this.rules.inline._backpedal.exec(t[0])?.[0] ?? "";
				while (r !== t[0]);
				e = t[0], n = t[1] === "www." ? "http://" + t[0] : t[0];
			}
			return {
				type: "link",
				raw: t[0],
				text: e,
				href: n,
				tokens: [{
					type: "text",
					raw: e,
					text: e
				}]
			};
		}
	}
	inlineText(e) {
		let t = this.rules.inline.text.exec(e);
		if (t) {
			let e = this.lexer.state.inRawBlock;
			return {
				type: "text",
				raw: t[0],
				text: t[0],
				escaped: e
			};
		}
	}
}, Bt = class e {
	tokens;
	options;
	state;
	inlineQueue;
	tokenizer;
	constructor(e) {
		this.tokens = [], this.tokens.links = Object.create(null), this.options = e || Se, this.options.tokenizer = this.options.tokenizer || new zt(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
			inLink: !1,
			inRawBlock: !1,
			top: !0
		};
		let t = {
			other: W,
			block: Et.normal,
			inline: Dt.normal
		};
		this.options.pedantic ? (t.block = Et.pedantic, t.inline = Dt.pedantic) : this.options.gfm && (t.block = Et.gfm, this.options.breaks ? t.inline = Dt.breaks : t.inline = Dt.gfm), this.tokenizer.rules = t;
	}
	static get rules() {
		return {
			block: Et,
			inline: Dt
		};
	}
	static lex(t, n) {
		return new e(n).lex(t);
	}
	static lexInline(t, n) {
		return new e(n).inlineTokens(t);
	}
	lex(e) {
		e = e.replace(W.carriageReturn, "\n"), this.blockTokens(e, this.tokens);
		for (let e = 0; e < this.inlineQueue.length; e++) {
			let t = this.inlineQueue[e];
			this.inlineTokens(t.src, t.tokens);
		}
		return this.inlineQueue = [], this.tokens;
	}
	blockTokens(e, t = [], n = !1) {
		this.tokenizer.lexer = this, this.options.pedantic && (e = e.replace(W.tabCharGlobal, "    ").replace(W.spaceLine, ""));
		let r = Infinity;
		for (; e;) {
			if (e.length < r) r = e.length;
			else {
				this.infiniteLoopError(e.charCodeAt(0));
				break;
			}
			let i;
			if (this.options.extensions?.block?.some((n) => (i = n.call({ lexer: this }, e, t)) ? (e = e.substring(i.raw.length), t.push(i), !0) : !1)) continue;
			if (i = this.tokenizer.space(e)) {
				e = e.substring(i.raw.length);
				let n = t.at(-1);
				i.raw.length === 1 && n !== void 0 ? n.raw += "\n" : t.push(i);
				continue;
			}
			if (i = this.tokenizer.code(e)) {
				e = e.substring(i.raw.length);
				let n = t.at(-1);
				n?.type === "paragraph" || n?.type === "text" ? (n.raw += (n.raw.endsWith("\n") ? "" : "\n") + i.raw, n.text += "\n" + i.text, this.inlineQueue.at(-1).src = n.text) : t.push(i);
				continue;
			}
			if (i = this.tokenizer.fences(e)) {
				e = e.substring(i.raw.length), t.push(i);
				continue;
			}
			if (i = this.tokenizer.heading(e)) {
				e = e.substring(i.raw.length), t.push(i);
				continue;
			}
			if (i = this.tokenizer.hr(e)) {
				e = e.substring(i.raw.length), t.push(i);
				continue;
			}
			if (i = this.tokenizer.blockquote(e)) {
				e = e.substring(i.raw.length), t.push(i);
				continue;
			}
			if (i = this.tokenizer.list(e)) {
				e = e.substring(i.raw.length), t.push(i);
				continue;
			}
			if (i = this.tokenizer.html(e)) {
				e = e.substring(i.raw.length), t.push(i);
				continue;
			}
			if (i = this.tokenizer.def(e)) {
				e = e.substring(i.raw.length);
				let n = t.at(-1);
				n?.type === "paragraph" || n?.type === "text" ? (n.raw += (n.raw.endsWith("\n") ? "" : "\n") + i.raw, n.text += "\n" + i.raw, this.inlineQueue.at(-1).src = n.text) : this.tokens.links[i.tag] || (this.tokens.links[i.tag] = {
					href: i.href,
					title: i.title
				}, t.push(i));
				continue;
			}
			if (i = this.tokenizer.table(e)) {
				e = e.substring(i.raw.length), t.push(i);
				continue;
			}
			if (i = this.tokenizer.lheading(e)) {
				e = e.substring(i.raw.length), t.push(i);
				continue;
			}
			let a = e;
			if (this.options.extensions?.startBlock) {
				let t = Infinity, n = e.slice(1), r;
				this.options.extensions.startBlock.forEach((e) => {
					r = e.call({ lexer: this }, n), typeof r == "number" && r >= 0 && (t = Math.min(t, r));
				}), t < Infinity && t >= 0 && (a = e.substring(0, t + 1));
			}
			if (this.state.top && (i = this.tokenizer.paragraph(a))) {
				let r = t.at(-1);
				n && r?.type === "paragraph" ? (r.raw += (r.raw.endsWith("\n") ? "" : "\n") + i.raw, r.text += "\n" + i.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = r.text) : t.push(i), n = a.length !== e.length, e = e.substring(i.raw.length);
				continue;
			}
			if (i = this.tokenizer.text(e)) {
				e = e.substring(i.raw.length);
				let n = t.at(-1);
				n?.type === "text" ? (n.raw += (n.raw.endsWith("\n") ? "" : "\n") + i.raw, n.text += "\n" + i.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = n.text) : t.push(i);
				continue;
			}
			if (e) {
				this.infiniteLoopError(e.charCodeAt(0));
				break;
			}
		}
		return this.state.top = !0, t;
	}
	inline(e, t = []) {
		return this.inlineQueue.push({
			src: e,
			tokens: t
		}), t;
	}
	inlineTokens(e, t = []) {
		this.tokenizer.lexer = this;
		let n = e, r = null;
		if (this.tokens.links) {
			let e = Object.keys(this.tokens.links);
			if (e.length > 0) for (; (r = this.tokenizer.rules.inline.reflinkSearch.exec(n)) !== null;) e.includes(r[0].slice(r[0].lastIndexOf("[") + 1, -1)) && (n = n.slice(0, r.index) + "[" + "a".repeat(r[0].length - 2) + "]" + n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
		}
		for (; (r = this.tokenizer.rules.inline.anyPunctuation.exec(n)) !== null;) n = n.slice(0, r.index) + "++" + n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
		let i;
		for (; (r = this.tokenizer.rules.inline.blockSkip.exec(n)) !== null;) i = r[2] ? r[2].length : 0, n = n.slice(0, r.index + i) + "[" + "a".repeat(r[0].length - i - 2) + "]" + n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
		n = this.options.hooks?.emStrongMask?.call({ lexer: this }, n) ?? n;
		let a = !1, o = "", s = Infinity;
		for (; e;) {
			if (e.length < s) s = e.length;
			else {
				this.infiniteLoopError(e.charCodeAt(0));
				break;
			}
			a || (o = ""), a = !1;
			let r;
			if (this.options.extensions?.inline?.some((n) => (r = n.call({ lexer: this }, e, t)) ? (e = e.substring(r.raw.length), t.push(r), !0) : !1)) continue;
			if (r = this.tokenizer.escape(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.tag(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.link(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.reflink(e, this.tokens.links)) {
				e = e.substring(r.raw.length);
				let n = t.at(-1);
				r.type === "text" && n?.type === "text" ? (n.raw += r.raw, n.text += r.text) : t.push(r);
				continue;
			}
			if (r = this.tokenizer.emStrong(e, n, o)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.codespan(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.br(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.del(e, n, o)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.autolink(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (!this.state.inLink && (r = this.tokenizer.url(e))) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			let i = e;
			if (this.options.extensions?.startInline) {
				let t = Infinity, n = e.slice(1), r;
				this.options.extensions.startInline.forEach((e) => {
					r = e.call({ lexer: this }, n), typeof r == "number" && r >= 0 && (t = Math.min(t, r));
				}), t < Infinity && t >= 0 && (i = e.substring(0, t + 1));
			}
			if (r = this.tokenizer.inlineText(i)) {
				e = e.substring(r.raw.length), r.raw.slice(-1) !== "_" && (o = r.raw.slice(-1)), a = !0;
				let n = t.at(-1);
				n?.type === "text" ? (n.raw += r.raw, n.text += r.text) : t.push(r);
				continue;
			}
			if (e) {
				this.infiniteLoopError(e.charCodeAt(0));
				break;
			}
		}
		return t;
	}
	infiniteLoopError(e) {
		let t = "Infinite loop on byte: " + e;
		if (this.options.silent) console.error(t);
		else throw Error(t);
	}
}, Vt = class {
	options;
	parser;
	constructor(e) {
		this.options = e || Se;
	}
	space(e) {
		return "";
	}
	code({ text: e, lang: t, escaped: n }) {
		let r = (t || "").match(W.notSpaceStart)?.[0], i = e.replace(W.endingNewline, "") + "\n";
		return r ? "<pre><code class=\"language-" + At(r) + "\">" + (n ? i : At(i, !0)) + "</code></pre>\n" : "<pre><code>" + (n ? i : At(i, !0)) + "</code></pre>\n";
	}
	blockquote({ tokens: e }) {
		return `<blockquote>
${this.parser.parse(e)}</blockquote>
`;
	}
	html({ text: e }) {
		return e;
	}
	def(e) {
		return "";
	}
	heading({ tokens: e, depth: t }) {
		return `<h${t}>${this.parser.parseInline(e)}</h${t}>
`;
	}
	hr(e) {
		return "<hr>\n";
	}
	list(e) {
		let t = e.ordered, n = e.start, r = "";
		for (let t = 0; t < e.items.length; t++) {
			let n = e.items[t];
			r += this.listitem(n);
		}
		let i = t ? "ol" : "ul", a = t && n !== 1 ? " start=\"" + n + "\"" : "";
		return "<" + i + a + ">\n" + r + "</" + i + ">\n";
	}
	listitem(e) {
		return `<li>${this.parser.parse(e.tokens)}</li>
`;
	}
	checkbox({ checked: e }) {
		return "<input " + (e ? "checked=\"\" " : "") + "disabled=\"\" type=\"checkbox\"> ";
	}
	paragraph({ tokens: e }) {
		return `<p>${this.parser.parseInline(e)}</p>
`;
	}
	table(e) {
		let t = "", n = "";
		for (let t = 0; t < e.header.length; t++) n += this.tablecell(e.header[t]);
		t += this.tablerow({ text: n });
		let r = "";
		for (let t = 0; t < e.rows.length; t++) {
			let i = e.rows[t];
			n = "";
			for (let e = 0; e < i.length; e++) n += this.tablecell(i[e]);
			r += this.tablerow({ text: n });
		}
		return r &&= `<tbody>${r}</tbody>`, "<table>\n<thead>\n" + t + "</thead>\n" + r + "</table>\n";
	}
	tablerow({ text: e }) {
		return `<tr>
${e}</tr>
`;
	}
	tablecell(e) {
		let t = this.parser.parseInline(e.tokens), n = e.header ? "th" : "td";
		return (e.align ? `<${n} align="${e.align}">` : `<${n}>`) + t + `</${n}>
`;
	}
	strong({ tokens: e }) {
		return `<strong>${this.parser.parseInline(e)}</strong>`;
	}
	em({ tokens: e }) {
		return `<em>${this.parser.parseInline(e)}</em>`;
	}
	codespan({ text: e }) {
		return `<code>${At(e, !0)}</code>`;
	}
	br(e) {
		return "<br>";
	}
	del({ tokens: e }) {
		return `<del>${this.parser.parseInline(e)}</del>`;
	}
	link({ href: e, title: t, tokens: n }) {
		let r = this.parser.parseInline(n), i = jt(e);
		if (i === null) return r;
		e = i;
		let a = "<a href=\"" + e + "\"";
		return t && (a += " title=\"" + At(t) + "\""), a += ">" + r + "</a>", a;
	}
	image({ href: e, title: t, text: n, tokens: r }) {
		r && (n = this.parser.parseInline(r, this.parser.textRenderer));
		let i = jt(e);
		if (i === null) return At(n);
		e = i;
		let a = `<img src="${e}" alt="${At(n)}"`;
		return t && (a += ` title="${At(t)}"`), a += ">", a;
	}
	text(e) {
		return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : "escaped" in e && e.escaped ? e.text : At(e.text);
	}
}, Ht = class {
	strong({ text: e }) {
		return e;
	}
	em({ text: e }) {
		return e;
	}
	codespan({ text: e }) {
		return e;
	}
	del({ text: e }) {
		return e;
	}
	html({ text: e }) {
		return e;
	}
	text({ text: e }) {
		return e;
	}
	link({ text: e }) {
		return "" + e;
	}
	image({ text: e }) {
		return "" + e;
	}
	br() {
		return "";
	}
	checkbox({ raw: e }) {
		return e;
	}
}, Ut = class e {
	options;
	renderer;
	textRenderer;
	constructor(e) {
		this.options = e || Se, this.options.renderer = this.options.renderer || new Vt(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new Ht();
	}
	static parse(t, n) {
		return new e(n).parse(t);
	}
	static parseInline(t, n) {
		return new e(n).parseInline(t);
	}
	parse(e) {
		this.renderer.parser = this;
		let t = "";
		for (let n = 0; n < e.length; n++) {
			let r = e[n];
			if (this.options.extensions?.renderers?.[r.type]) {
				let e = r, n = this.options.extensions.renderers[e.type].call({ parser: this }, e);
				if (n !== !1 || ![
					"space",
					"hr",
					"heading",
					"code",
					"table",
					"blockquote",
					"list",
					"html",
					"def",
					"paragraph",
					"text"
				].includes(e.type)) {
					t += n || "";
					continue;
				}
			}
			let i = r;
			switch (i.type) {
				case "space":
					t += this.renderer.space(i);
					break;
				case "hr":
					t += this.renderer.hr(i);
					break;
				case "heading":
					t += this.renderer.heading(i);
					break;
				case "code":
					t += this.renderer.code(i);
					break;
				case "table":
					t += this.renderer.table(i);
					break;
				case "blockquote":
					t += this.renderer.blockquote(i);
					break;
				case "list":
					t += this.renderer.list(i);
					break;
				case "checkbox":
					t += this.renderer.checkbox(i);
					break;
				case "html":
					t += this.renderer.html(i);
					break;
				case "def":
					t += this.renderer.def(i);
					break;
				case "paragraph":
					t += this.renderer.paragraph(i);
					break;
				case "text":
					t += this.renderer.text(i);
					break;
				default: {
					let e = "Token with \"" + i.type + "\" type was not found.";
					if (this.options.silent) return console.error(e), "";
					throw Error(e);
				}
			}
		}
		return t;
	}
	parseInline(e, t = this.renderer) {
		this.renderer.parser = this;
		let n = "";
		for (let r = 0; r < e.length; r++) {
			let i = e[r];
			if (this.options.extensions?.renderers?.[i.type]) {
				let e = this.options.extensions.renderers[i.type].call({ parser: this }, i);
				if (e !== !1 || ![
					"escape",
					"html",
					"link",
					"image",
					"strong",
					"em",
					"codespan",
					"br",
					"del",
					"text"
				].includes(i.type)) {
					n += e || "";
					continue;
				}
			}
			let a = i;
			switch (a.type) {
				case "escape":
					n += t.text(a);
					break;
				case "html":
					n += t.html(a);
					break;
				case "link":
					n += t.link(a);
					break;
				case "image":
					n += t.image(a);
					break;
				case "checkbox":
					n += t.checkbox(a);
					break;
				case "strong":
					n += t.strong(a);
					break;
				case "em":
					n += t.em(a);
					break;
				case "codespan":
					n += t.codespan(a);
					break;
				case "br":
					n += t.br(a);
					break;
				case "del":
					n += t.del(a);
					break;
				case "text":
					n += t.text(a);
					break;
				default: {
					let e = "Token with \"" + a.type + "\" type was not found.";
					if (this.options.silent) return console.error(e), "";
					throw Error(e);
				}
			}
		}
		return n;
	}
}, Wt = class {
	options;
	block;
	constructor(e) {
		this.options = e || Se;
	}
	static passThroughHooks = new Set([
		"preprocess",
		"postprocess",
		"processAllTokens",
		"emStrongMask"
	]);
	static passThroughHooksRespectAsync = new Set([
		"preprocess",
		"postprocess",
		"processAllTokens"
	]);
	preprocess(e) {
		return e;
	}
	postprocess(e) {
		return e;
	}
	processAllTokens(e) {
		return e;
	}
	emStrongMask(e) {
		return e;
	}
	provideLexer(e = this.block) {
		return e ? Bt.lex : Bt.lexInline;
	}
	provideParser(e = this.block) {
		return e ? Ut.parse : Ut.parseInline;
	}
}, Gt = new class {
	defaults = xe();
	options = this.setOptions;
	parse = this.parseMarkdown(!0);
	parseInline = this.parseMarkdown(!1);
	Parser = Ut;
	Renderer = Vt;
	TextRenderer = Ht;
	Lexer = Bt;
	Tokenizer = zt;
	Hooks = Wt;
	constructor(...e) {
		this.use(...e);
	}
	walkTokens(e, t) {
		let n = [];
		for (let r of e) switch (n = n.concat(t.call(this, r)), r.type) {
			case "table": {
				let e = r;
				for (let r of e.header) n = n.concat(this.walkTokens(r.tokens, t));
				for (let r of e.rows) for (let e of r) n = n.concat(this.walkTokens(e.tokens, t));
				break;
			}
			case "list": {
				let e = r;
				n = n.concat(this.walkTokens(e.items, t));
				break;
			}
			default: {
				let e = r;
				this.defaults.extensions?.childTokens?.[e.type] ? this.defaults.extensions.childTokens[e.type].forEach((r) => {
					let i = e[r].flat(Infinity);
					n = n.concat(this.walkTokens(i, t));
				}) : e.tokens && (n = n.concat(this.walkTokens(e.tokens, t)));
			}
		}
		return n;
	}
	use(...e) {
		let t = this.defaults.extensions || {
			renderers: {},
			childTokens: {}
		};
		return e.forEach((e) => {
			let n = { ...e };
			if (n.async = this.defaults.async || n.async || !1, e.extensions && (e.extensions.forEach((e) => {
				if (!e.name) throw Error("extension name required");
				if ("renderer" in e) {
					let n = t.renderers[e.name];
					n ? t.renderers[e.name] = function(...t) {
						let r = e.renderer.apply(this, t);
						return r === !1 && (r = n.apply(this, t)), r;
					} : t.renderers[e.name] = e.renderer;
				}
				if ("tokenizer" in e) {
					if (!e.level || e.level !== "block" && e.level !== "inline") throw Error("extension level must be 'block' or 'inline'");
					let n = t[e.level];
					n ? n.unshift(e.tokenizer) : t[e.level] = [e.tokenizer], e.start && (e.level === "block" ? t.startBlock ? t.startBlock.push(e.start) : t.startBlock = [e.start] : e.level === "inline" && (t.startInline ? t.startInline.push(e.start) : t.startInline = [e.start]));
				}
				"childTokens" in e && e.childTokens && (t.childTokens[e.name] = e.childTokens);
			}), n.extensions = t), e.renderer) {
				let t = this.defaults.renderer || new Vt(this.defaults);
				for (let n in e.renderer) {
					if (!(n in t)) throw Error(`renderer '${n}' does not exist`);
					if (["options", "parser"].includes(n)) continue;
					let r = n, i = e.renderer[r], a = t[r];
					t[r] = (...e) => {
						let n = i.apply(t, e);
						return n === !1 && (n = a.apply(t, e)), n || "";
					};
				}
				n.renderer = t;
			}
			if (e.tokenizer) {
				let t = this.defaults.tokenizer || new zt(this.defaults);
				for (let n in e.tokenizer) {
					if (!(n in t)) throw Error(`tokenizer '${n}' does not exist`);
					if ([
						"options",
						"rules",
						"lexer"
					].includes(n)) continue;
					let r = n, i = e.tokenizer[r], a = t[r];
					t[r] = (...e) => {
						let n = i.apply(t, e);
						return n === !1 && (n = a.apply(t, e)), n;
					};
				}
				n.tokenizer = t;
			}
			if (e.hooks) {
				let t = this.defaults.hooks || new Wt();
				for (let n in e.hooks) {
					if (!(n in t)) throw Error(`hook '${n}' does not exist`);
					if (["options", "block"].includes(n)) continue;
					let r = n, i = e.hooks[r], a = t[r];
					Wt.passThroughHooks.has(n) ? t[r] = (e) => {
						if (this.defaults.async && Wt.passThroughHooksRespectAsync.has(n)) return (async () => {
							let n = await i.call(t, e);
							return a.call(t, n);
						})();
						let r = i.call(t, e);
						return a.call(t, r);
					} : t[r] = (...e) => {
						if (this.defaults.async) return (async () => {
							let n = await i.apply(t, e);
							return n === !1 && (n = await a.apply(t, e)), n;
						})();
						let n = i.apply(t, e);
						return n === !1 && (n = a.apply(t, e)), n;
					};
				}
				n.hooks = t;
			}
			if (e.walkTokens) {
				let t = this.defaults.walkTokens, r = e.walkTokens;
				n.walkTokens = function(e) {
					let n = [];
					return n.push(r.call(this, e)), t && (n = n.concat(t.call(this, e))), n;
				};
			}
			this.defaults = {
				...this.defaults,
				...n
			};
		}), this;
	}
	setOptions(e) {
		return this.defaults = {
			...this.defaults,
			...e
		}, this;
	}
	lexer(e, t) {
		return Bt.lex(e, t ?? this.defaults);
	}
	parser(e, t) {
		return Ut.parse(e, t ?? this.defaults);
	}
	parseMarkdown(e) {
		return (t, n) => {
			let r = { ...n }, i = {
				...this.defaults,
				...r
			}, a = this.onError(!!i.silent, !!i.async);
			if (this.defaults.async === !0 && r.async === !1) return a(/* @__PURE__ */ Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
			if (typeof t > "u" || t === null) return a(/* @__PURE__ */ Error("marked(): input parameter is undefined or null"));
			if (typeof t != "string") return a(/* @__PURE__ */ Error("marked(): input parameter is of type " + Object.prototype.toString.call(t) + ", string expected"));
			if (i.hooks && (i.hooks.options = i, i.hooks.block = e), i.async) return (async () => {
				let n = i.hooks ? await i.hooks.preprocess(t) : t, r = await (i.hooks ? await i.hooks.provideLexer(e) : e ? Bt.lex : Bt.lexInline)(n, i), a = i.hooks ? await i.hooks.processAllTokens(r) : r;
				i.walkTokens && await Promise.all(this.walkTokens(a, i.walkTokens));
				let o = await (i.hooks ? await i.hooks.provideParser(e) : e ? Ut.parse : Ut.parseInline)(a, i);
				return i.hooks ? await i.hooks.postprocess(o) : o;
			})().catch(a);
			try {
				i.hooks && (t = i.hooks.preprocess(t));
				let n = (i.hooks ? i.hooks.provideLexer(e) : e ? Bt.lex : Bt.lexInline)(t, i);
				i.hooks && (n = i.hooks.processAllTokens(n)), i.walkTokens && this.walkTokens(n, i.walkTokens);
				let r = (i.hooks ? i.hooks.provideParser(e) : e ? Ut.parse : Ut.parseInline)(n, i);
				return i.hooks && (r = i.hooks.postprocess(r)), r;
			} catch (e) {
				return a(e);
			}
		};
	}
	onError(e, t) {
		return (n) => {
			if (n.message += "\nPlease report this to https://github.com/markedjs/marked.", e) {
				let e = "<p>An error occurred:</p><pre>" + At(n.message + "", !0) + "</pre>";
				return t ? Promise.resolve(e) : e;
			}
			if (t) return Promise.reject(n);
			throw n;
		};
	}
}();
function K(e, t) {
	return Gt.parse(e, t);
}
K.options = K.setOptions = function(e) {
	return Gt.setOptions(e), K.defaults = Gt.defaults, Ce(K.defaults), K;
}, K.getDefaults = xe, K.defaults = Se, K.use = function(...e) {
	return Gt.use(...e), K.defaults = Gt.defaults, Ce(K.defaults), K;
}, K.walkTokens = function(e, t) {
	return Gt.walkTokens(e, t);
}, K.parseInline = Gt.parseInline, K.Parser = Ut, K.parser = Ut.parse, K.Renderer = Vt, K.TextRenderer = Ht, K.Lexer = Bt, K.lexer = Bt.lex, K.Tokenizer = zt, K.Hooks = Wt, K.parse = K, K.options, K.setOptions, K.use, K.walkTokens, K.parseInline, Ut.parse, Bt.lex;
//#endregion
//#region node_modules/dompurify/dist/purify.es.mjs
function Kt(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function qt(e) {
	if (Array.isArray(e)) return e;
}
function Jt(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t !== 0) for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function Yt() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function Xt(e, t) {
	return qt(e) || Jt(e, t) || Zt(e, t) || Yt();
}
function Zt(e, t) {
	if (e) {
		if (typeof e == "string") return Kt(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Kt(e, t) : void 0;
	}
}
var Qt = Object.entries, $t = Object.setPrototypeOf, en = Object.isFrozen, tn = Object.getPrototypeOf, nn = Object.getOwnPropertyDescriptor, q = Object.freeze, rn = Object.seal, an = Object.create, on = typeof Reflect < "u" && Reflect, sn = on.apply, cn = on.construct;
q ||= function(e) {
	return e;
}, rn ||= function(e) {
	return e;
}, sn ||= function(e, t) {
	var n = [...arguments].slice(2);
	return e.apply(t, n);
}, cn ||= function(e) {
	return new e(...[...arguments].slice(1));
};
var ln = Z(Array.prototype.forEach), un = Z(Array.prototype.lastIndexOf), dn = Z(Array.prototype.pop), fn = Z(Array.prototype.push), pn = Z(Array.prototype.splice), J = Array.isArray, mn = Z(String.prototype.toLowerCase), hn = Z(String.prototype.toString), gn = Z(String.prototype.match), _n = Z(String.prototype.replace), vn = Z(String.prototype.indexOf), yn = Z(String.prototype.trim), bn = Z(Number.prototype.toString), xn = Z(Boolean.prototype.toString), Sn = typeof BigInt > "u" ? null : Z(BigInt.prototype.toString), Cn = typeof Symbol > "u" ? null : Z(Symbol.prototype.toString), Y = Z(Object.prototype.hasOwnProperty), wn = Z(Object.prototype.toString), X = Z(RegExp.prototype.test), Tn = En(TypeError);
function Z(e) {
	return function(t) {
		t instanceof RegExp && (t.lastIndex = 0);
		var n = [...arguments].slice(1);
		return sn(e, t, n);
	};
}
function En(e) {
	return function() {
		return cn(e, [...arguments]);
	};
}
function Q(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : mn;
	if ($t && $t(e, null), !J(t)) return e;
	let r = t.length;
	for (; r--;) {
		let i = t[r];
		if (typeof i == "string") {
			let e = n(i);
			e !== i && (en(t) || (t[r] = e), i = e);
		}
		e[i] = !0;
	}
	return e;
}
function Dn(e) {
	for (let t = 0; t < e.length; t++) Y(e, t) || (e[t] = null);
	return e;
}
function $(e) {
	let t = an(null);
	for (let r of Qt(e)) {
		var n = Xt(r, 2);
		let i = n[0], a = n[1];
		Y(e, i) && (J(a) ? t[i] = Dn(a) : a && typeof a == "object" && a.constructor === Object ? t[i] = $(a) : t[i] = a);
	}
	return t;
}
function On(e) {
	switch (typeof e) {
		case "string": return e;
		case "number": return bn(e);
		case "boolean": return xn(e);
		case "bigint": return Sn ? Sn(e) : "0";
		case "symbol": return Cn ? Cn(e) : "Symbol()";
		case "undefined": return wn(e);
		case "function":
		case "object": {
			if (e === null) return wn(e);
			let t = e, n = kn(t, "toString");
			if (typeof n == "function") {
				let e = n(t);
				return typeof e == "string" ? e : wn(e);
			}
			return wn(e);
		}
		default: return wn(e);
	}
}
function kn(e, t) {
	for (; e !== null;) {
		let n = nn(e, t);
		if (n) {
			if (n.get) return Z(n.get);
			if (typeof n.value == "function") return Z(n.value);
		}
		e = tn(e);
	}
	function n() {
		return null;
	}
	return n;
}
function An(e) {
	try {
		return X(e, ""), !0;
	} catch {
		return !1;
	}
}
var jn = q(/* @__PURE__ */ "a.abbr.acronym.address.area.article.aside.audio.b.bdi.bdo.big.blink.blockquote.body.br.button.canvas.caption.center.cite.code.col.colgroup.content.data.datalist.dd.decorator.del.details.dfn.dialog.dir.div.dl.dt.element.em.fieldset.figcaption.figure.font.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.img.input.ins.kbd.label.legend.li.main.map.mark.marquee.menu.menuitem.meter.nav.nobr.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.shadow.slot.small.source.spacer.span.strike.strong.style.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.track.tt.u.ul.var.video.wbr".split(".")), Mn = q(/* @__PURE__ */ "svg.a.altglyph.altglyphdef.altglyphitem.animatecolor.animatemotion.animatetransform.circle.clippath.defs.desc.ellipse.enterkeyhint.exportparts.filter.font.g.glyph.glyphref.hkern.image.inputmode.line.lineargradient.marker.mask.metadata.mpath.part.path.pattern.polygon.polyline.radialgradient.rect.stop.style.switch.symbol.text.textpath.title.tref.tspan.view.vkern".split(".")), Nn = q([
	"feBlend",
	"feColorMatrix",
	"feComponentTransfer",
	"feComposite",
	"feConvolveMatrix",
	"feDiffuseLighting",
	"feDisplacementMap",
	"feDistantLight",
	"feDropShadow",
	"feFlood",
	"feFuncA",
	"feFuncB",
	"feFuncG",
	"feFuncR",
	"feGaussianBlur",
	"feImage",
	"feMerge",
	"feMergeNode",
	"feMorphology",
	"feOffset",
	"fePointLight",
	"feSpecularLighting",
	"feSpotLight",
	"feTile",
	"feTurbulence"
]), Pn = q([
	"animate",
	"color-profile",
	"cursor",
	"discard",
	"font-face",
	"font-face-format",
	"font-face-name",
	"font-face-src",
	"font-face-uri",
	"foreignobject",
	"hatch",
	"hatchpath",
	"mesh",
	"meshgradient",
	"meshpatch",
	"meshrow",
	"missing-glyph",
	"script",
	"set",
	"solidcolor",
	"unknown",
	"use"
]), Fn = q(/* @__PURE__ */ "math.menclose.merror.mfenced.mfrac.mglyph.mi.mlabeledtr.mmultiscripts.mn.mo.mover.mpadded.mphantom.mroot.mrow.ms.mspace.msqrt.mstyle.msub.msup.msubsup.mtable.mtd.mtext.mtr.munder.munderover.mprescripts".split(".")), In = q([
	"maction",
	"maligngroup",
	"malignmark",
	"mlongdiv",
	"mscarries",
	"mscarry",
	"msgroup",
	"mstack",
	"msline",
	"msrow",
	"semantics",
	"annotation",
	"annotation-xml",
	"mprescripts",
	"none"
]), Ln = q(["#text"]), Rn = q(/* @__PURE__ */ "accept.action.align.alt.autocapitalize.autocomplete.autopictureinpicture.autoplay.background.bgcolor.border.capture.cellpadding.cellspacing.checked.cite.class.clear.color.cols.colspan.command.commandfor.controls.controlslist.coords.crossorigin.datetime.decoding.default.dir.disabled.disablepictureinpicture.disableremoteplayback.download.draggable.enctype.enterkeyhint.exportparts.face.for.headers.height.hidden.high.href.hreflang.id.inert.inputmode.integrity.ismap.kind.label.lang.list.loading.loop.low.max.maxlength.media.method.min.minlength.multiple.muted.name.nonce.noshade.novalidate.nowrap.open.optimum.part.pattern.placeholder.playsinline.popover.popovertarget.popovertargetaction.poster.preload.pubdate.radiogroup.readonly.rel.required.rev.reversed.role.rows.rowspan.spellcheck.scope.selected.shape.size.sizes.slot.span.srclang.start.src.srcset.step.style.summary.tabindex.title.translate.type.usemap.valign.value.width.wrap.xmlns".split(".")), zn = q(/* @__PURE__ */ "accent-height.accumulate.additive.alignment-baseline.amplitude.ascent.attributename.attributetype.azimuth.basefrequency.baseline-shift.begin.bias.by.class.clip.clippathunits.clip-path.clip-rule.color.color-interpolation.color-interpolation-filters.color-profile.color-rendering.cx.cy.d.dx.dy.diffuseconstant.direction.display.divisor.dur.edgemode.elevation.end.exponent.fill.fill-opacity.fill-rule.filter.filterunits.flood-color.flood-opacity.font-family.font-size.font-size-adjust.font-stretch.font-style.font-variant.font-weight.fx.fy.g1.g2.glyph-name.glyphref.gradientunits.gradienttransform.height.href.id.image-rendering.in.in2.intercept.k.k1.k2.k3.k4.kerning.keypoints.keysplines.keytimes.lang.lengthadjust.letter-spacing.kernelmatrix.kernelunitlength.lighting-color.local.marker-end.marker-mid.marker-start.markerheight.markerunits.markerwidth.maskcontentunits.maskunits.max.mask.mask-type.media.method.mode.min.name.numoctaves.offset.operator.opacity.order.orient.orientation.origin.overflow.paint-order.path.pathlength.patterncontentunits.patterntransform.patternunits.points.preservealpha.preserveaspectratio.primitiveunits.r.rx.ry.radius.refx.refy.repeatcount.repeatdur.restart.result.rotate.scale.seed.shape-rendering.slope.specularconstant.specularexponent.spreadmethod.startoffset.stddeviation.stitchtiles.stop-color.stop-opacity.stroke-dasharray.stroke-dashoffset.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-opacity.stroke.stroke-width.style.surfacescale.systemlanguage.tabindex.tablevalues.targetx.targety.transform.transform-origin.text-anchor.text-decoration.text-rendering.textlength.type.u1.u2.unicode.values.viewbox.visibility.version.vert-adv-y.vert-origin-x.vert-origin-y.width.word-spacing.wrap.writing-mode.xchannelselector.ychannelselector.x.x1.x2.xmlns.y.y1.y2.z.zoomandpan".split(".")), Bn = q(/* @__PURE__ */ "accent.accentunder.align.bevelled.close.columnalign.columnlines.columnspacing.columnspan.denomalign.depth.dir.display.displaystyle.encoding.fence.frame.height.href.id.largeop.length.linethickness.lquote.lspace.mathbackground.mathcolor.mathsize.mathvariant.maxsize.minsize.movablelimits.notation.numalign.open.rowalign.rowlines.rowspacing.rowspan.rspace.rquote.scriptlevel.scriptminsize.scriptsizemultiplier.selection.separator.separators.stretchy.subscriptshift.supscriptshift.symmetric.voffset.width.xmlns".split(".")), Vn = q([
	"xlink:href",
	"xml:id",
	"xlink:title",
	"xml:space",
	"xmlns:xlink"
]), Hn = rn(/{{[\w\W]*|^[\w\W]*}}/g), Un = rn(/<%[\w\W]*|^[\w\W]*%>/g), Wn = rn(/\${[\w\W]*/g), Gn = rn(/^data-[\-\w.\u00B7-\uFFFF]+$/), Kn = rn(/^aria-[\-\w]+$/), qn = rn(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), Jn = rn(/^(?:\w+script|data):/i), Yn = rn(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), Xn = rn(/^html$/i), Zn = rn(/^[a-z][.\w]*(-[.\w]+)+$/i), Qn = {
	element: 1,
	attribute: 2,
	text: 3,
	cdataSection: 4,
	entityReference: 5,
	entityNode: 6,
	progressingInstruction: 7,
	comment: 8,
	document: 9,
	documentType: 10,
	documentFragment: 11,
	notation: 12
}, $n = function() {
	return typeof window > "u" ? null : window;
}, er = function(e, t) {
	if (typeof e != "object" || typeof e.createPolicy != "function") return null;
	let n = null, r = "data-tt-policy-suffix";
	t && t.hasAttribute(r) && (n = t.getAttribute(r));
	let i = "dompurify" + (n ? "#" + n : "");
	try {
		return e.createPolicy(i, {
			createHTML(e) {
				return e;
			},
			createScriptURL(e) {
				return e;
			}
		});
	} catch {
		return console.warn("TrustedTypes policy " + i + " could not be created."), null;
	}
}, tr = function() {
	return {
		afterSanitizeAttributes: [],
		afterSanitizeElements: [],
		afterSanitizeShadowDOM: [],
		beforeSanitizeAttributes: [],
		beforeSanitizeElements: [],
		beforeSanitizeShadowDOM: [],
		uponSanitizeAttribute: [],
		uponSanitizeElement: [],
		uponSanitizeShadowNode: []
	};
};
function nr() {
	let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : $n(), t = (e) => nr(e);
	if (t.version = "3.4.8", t.removed = [], !e || !e.document || e.document.nodeType !== Qn.document || !e.Element) return t.isSupported = !1, t;
	let n = e.document, r = n, i = r.currentScript;
	e.DocumentFragment;
	let a = e.HTMLTemplateElement, o = e.Node, s = e.Element, c = e.NodeFilter;
	e.NamedNodeMap === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
	let l = e.DOMParser, u = e.trustedTypes, d = s.prototype, f = kn(d, "cloneNode"), p = kn(d, "remove"), m = kn(d, "nextSibling"), h = kn(d, "childNodes"), g = kn(d, "parentNode"), _ = kn(d, "shadowRoot"), v = kn(d, "attributes"), y = o && o.prototype ? kn(o.prototype, "nodeType") : null, b = o && o.prototype ? kn(o.prototype, "nodeName") : null;
	if (typeof a == "function") {
		let e = n.createElement("template");
		e.content && e.content.ownerDocument && (n = e.content.ownerDocument);
	}
	let x, S = "", C = 0, w = function(e) {
		if (C > 0) throw Tn("The configured TRUSTED_TYPES_POLICY.createHTML must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose createHTML wraps DOMPurify as TRUSTED_TYPES_POLICY; see the \"DOMPurify and Trusted Types\" section of the README.");
		C++;
		try {
			return x.createHTML(e);
		} finally {
			C--;
		}
	}, T = n, ee = T.implementation, E = T.createNodeIterator, te = T.createDocumentFragment, D = T.getElementsByTagName, O = r.importNode, k = tr();
	t.isSupported = typeof Qt == "function" && typeof g == "function" && ee && ee.createHTMLDocument !== void 0;
	let A = Hn, j = Un, M = Wn, ne = Gn, N = Kn, P = Jn, re = Yn, F = Zn, ie = qn, I = null, ae = Q({}, [
		...jn,
		...Mn,
		...Nn,
		...Fn,
		...Ln
	]), L = null, oe = Q({}, [
		...Rn,
		...zn,
		...Bn,
		...Vn
	]), R = Object.seal(an(null, {
		tagNameCheck: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: null
		},
		attributeNameCheck: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: null
		},
		allowCustomizedBuiltInElements: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: !1
		}
	})), se = null, ce = null, le = Object.seal(an(null, {
		tagCheck: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: null
		},
		attributeCheck: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: null
		}
	})), ue = !0, de = !0, fe = !1, pe = !0, me = !1, z = !0, he = !1, ge = !1, _e = !1, ve = !1, ye = !1, be = !1, xe = !0, Se = !1, Ce = "user-content-", B = !0, V = !1, H = {}, U = null, W = Q({}, [
		"annotation-xml",
		"audio",
		"colgroup",
		"desc",
		"foreignobject",
		"head",
		"iframe",
		"math",
		"mi",
		"mn",
		"mo",
		"ms",
		"mtext",
		"noembed",
		"noframes",
		"noscript",
		"plaintext",
		"script",
		"style",
		"svg",
		"template",
		"thead",
		"title",
		"video",
		"xmp"
	]), we = null, Te = Q({}, [
		"audio",
		"video",
		"img",
		"source",
		"image",
		"track"
	]), Ee = null, De = Q({}, [
		"alt",
		"class",
		"for",
		"id",
		"label",
		"name",
		"pattern",
		"placeholder",
		"role",
		"summary",
		"title",
		"value",
		"style",
		"xmlns"
	]), Oe = "http://www.w3.org/1998/Math/MathML", ke = "http://www.w3.org/2000/svg", Ae = "http://www.w3.org/1999/xhtml", je = Ae, Me = !1, Ne = null, Pe = Q({}, [
		Oe,
		ke,
		Ae
	], hn), Fe = Q({}, [
		"mi",
		"mo",
		"mn",
		"ms",
		"mtext"
	]), Ie = Q({}, ["annotation-xml"]), Le = Q({}, [
		"title",
		"style",
		"font",
		"a",
		"script"
	]), Re = null, ze = ["application/xhtml+xml", "text/html"], G = null, Be = null, Ve = n.createElement("form"), He = function(e) {
		return e instanceof RegExp || e instanceof Function;
	}, Ue = function() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		if (Be && Be === e) return;
		(!e || typeof e != "object") && (e = {}), e = $(e), Re = ze.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? "text/html" : e.PARSER_MEDIA_TYPE, G = Re === "application/xhtml+xml" ? hn : mn, I = Y(e, "ALLOWED_TAGS") && J(e.ALLOWED_TAGS) ? Q({}, e.ALLOWED_TAGS, G) : ae, L = Y(e, "ALLOWED_ATTR") && J(e.ALLOWED_ATTR) ? Q({}, e.ALLOWED_ATTR, G) : oe, Ne = Y(e, "ALLOWED_NAMESPACES") && J(e.ALLOWED_NAMESPACES) ? Q({}, e.ALLOWED_NAMESPACES, hn) : Pe, Ee = Y(e, "ADD_URI_SAFE_ATTR") && J(e.ADD_URI_SAFE_ATTR) ? Q($(De), e.ADD_URI_SAFE_ATTR, G) : De, we = Y(e, "ADD_DATA_URI_TAGS") && J(e.ADD_DATA_URI_TAGS) ? Q($(Te), e.ADD_DATA_URI_TAGS, G) : Te, U = Y(e, "FORBID_CONTENTS") && J(e.FORBID_CONTENTS) ? Q({}, e.FORBID_CONTENTS, G) : W, se = Y(e, "FORBID_TAGS") && J(e.FORBID_TAGS) ? Q({}, e.FORBID_TAGS, G) : $({}), ce = Y(e, "FORBID_ATTR") && J(e.FORBID_ATTR) ? Q({}, e.FORBID_ATTR, G) : $({}), H = Y(e, "USE_PROFILES") ? e.USE_PROFILES && typeof e.USE_PROFILES == "object" ? $(e.USE_PROFILES) : e.USE_PROFILES : !1, ue = e.ALLOW_ARIA_ATTR !== !1, de = e.ALLOW_DATA_ATTR !== !1, fe = e.ALLOW_UNKNOWN_PROTOCOLS || !1, pe = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, me = e.SAFE_FOR_TEMPLATES || !1, z = e.SAFE_FOR_XML !== !1, he = e.WHOLE_DOCUMENT || !1, ve = e.RETURN_DOM || !1, ye = e.RETURN_DOM_FRAGMENT || !1, be = e.RETURN_TRUSTED_TYPE || !1, _e = e.FORCE_BODY || !1, xe = e.SANITIZE_DOM !== !1, Se = e.SANITIZE_NAMED_PROPS || !1, B = e.KEEP_CONTENT !== !1, V = e.IN_PLACE || !1, ie = An(e.ALLOWED_URI_REGEXP) ? e.ALLOWED_URI_REGEXP : qn, je = typeof e.NAMESPACE == "string" ? e.NAMESPACE : Ae, Fe = Y(e, "MATHML_TEXT_INTEGRATION_POINTS") && e.MATHML_TEXT_INTEGRATION_POINTS && typeof e.MATHML_TEXT_INTEGRATION_POINTS == "object" ? $(e.MATHML_TEXT_INTEGRATION_POINTS) : Q({}, [
			"mi",
			"mo",
			"mn",
			"ms",
			"mtext"
		]), Ie = Y(e, "HTML_INTEGRATION_POINTS") && e.HTML_INTEGRATION_POINTS && typeof e.HTML_INTEGRATION_POINTS == "object" ? $(e.HTML_INTEGRATION_POINTS) : Q({}, ["annotation-xml"]);
		let t = Y(e, "CUSTOM_ELEMENT_HANDLING") && e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING == "object" ? $(e.CUSTOM_ELEMENT_HANDLING) : an(null);
		if (R = an(null), Y(t, "tagNameCheck") && He(t.tagNameCheck) && (R.tagNameCheck = t.tagNameCheck), Y(t, "attributeNameCheck") && He(t.attributeNameCheck) && (R.attributeNameCheck = t.attributeNameCheck), Y(t, "allowCustomizedBuiltInElements") && typeof t.allowCustomizedBuiltInElements == "boolean" && (R.allowCustomizedBuiltInElements = t.allowCustomizedBuiltInElements), me && (de = !1), ye && (ve = !0), H && (I = Q({}, Ln), L = an(null), H.html === !0 && (Q(I, jn), Q(L, Rn)), H.svg === !0 && (Q(I, Mn), Q(L, zn), Q(L, Vn)), H.svgFilters === !0 && (Q(I, Nn), Q(L, zn), Q(L, Vn)), H.mathMl === !0 && (Q(I, Fn), Q(L, Bn), Q(L, Vn))), le.tagCheck = null, le.attributeCheck = null, Y(e, "ADD_TAGS") && (typeof e.ADD_TAGS == "function" ? le.tagCheck = e.ADD_TAGS : J(e.ADD_TAGS) && (I === ae && (I = $(I)), Q(I, e.ADD_TAGS, G))), Y(e, "ADD_ATTR") && (typeof e.ADD_ATTR == "function" ? le.attributeCheck = e.ADD_ATTR : J(e.ADD_ATTR) && (L === oe && (L = $(L)), Q(L, e.ADD_ATTR, G))), Y(e, "ADD_URI_SAFE_ATTR") && J(e.ADD_URI_SAFE_ATTR) && Q(Ee, e.ADD_URI_SAFE_ATTR, G), Y(e, "FORBID_CONTENTS") && J(e.FORBID_CONTENTS) && (U === W && (U = $(U)), Q(U, e.FORBID_CONTENTS, G)), Y(e, "ADD_FORBID_CONTENTS") && J(e.ADD_FORBID_CONTENTS) && (U === W && (U = $(U)), Q(U, e.ADD_FORBID_CONTENTS, G)), B && (I["#text"] = !0), he && Q(I, [
			"html",
			"head",
			"body"
		]), I.table && (Q(I, ["tbody"]), delete se.tbody), e.TRUSTED_TYPES_POLICY) {
			if (typeof e.TRUSTED_TYPES_POLICY.createHTML != "function") throw Tn("TRUSTED_TYPES_POLICY configuration option must provide a \"createHTML\" hook.");
			if (typeof e.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw Tn("TRUSTED_TYPES_POLICY configuration option must provide a \"createScriptURL\" hook.");
			let t = x;
			x = e.TRUSTED_TYPES_POLICY;
			try {
				S = w("");
			} catch (e) {
				throw x = t, e;
			}
		} else x === void 0 && e.TRUSTED_TYPES_POLICY !== null && (x = er(u, i)), x && typeof S == "string" && (S = w(""));
		(k.uponSanitizeElement.length > 0 || k.uponSanitizeAttribute.length > 0) && I === ae && (I = $(I)), k.uponSanitizeAttribute.length > 0 && L === oe && (L = $(L)), q && q(e), Be = e;
	}, We = Q({}, [
		...Mn,
		...Nn,
		...Pn
	]), Ge = Q({}, [...Fn, ...In]), Ke = function(e) {
		let t = g(e);
		(!t || !t.tagName) && (t = {
			namespaceURI: je,
			tagName: "template"
		});
		let n = mn(e.tagName), r = mn(t.tagName);
		return Ne[e.namespaceURI] ? e.namespaceURI === ke ? t.namespaceURI === Ae ? n === "svg" : t.namespaceURI === Oe ? n === "svg" && (r === "annotation-xml" || Fe[r]) : !!We[n] : e.namespaceURI === Oe ? t.namespaceURI === Ae ? n === "math" : t.namespaceURI === ke ? n === "math" && Ie[r] : !!Ge[n] : e.namespaceURI === Ae ? t.namespaceURI === ke && !Ie[r] || t.namespaceURI === Oe && !Fe[r] ? !1 : !Ge[n] && (Le[n] || !We[n]) : !!(Re === "application/xhtml+xml" && Ne[e.namespaceURI]) : !1;
	}, qe = function(e) {
		fn(t.removed, { element: e });
		try {
			g(e).removeChild(e);
		} catch {
			p(e);
		}
	}, Je = function(e, n) {
		try {
			fn(t.removed, {
				attribute: n.getAttributeNode(e),
				from: n
			});
		} catch {
			fn(t.removed, {
				attribute: null,
				from: n
			});
		}
		if (n.removeAttribute(e), e === "is") if (ve || ye) try {
			qe(n);
		} catch {}
		else try {
			n.setAttribute(e, "");
		} catch {}
	}, Ye = function(e) {
		let t = null, r = null;
		if (_e) e = "<remove></remove>" + e;
		else {
			let t = gn(e, /^[\r\n\t ]+/);
			r = t && t[0];
		}
		Re === "application/xhtml+xml" && je === Ae && (e = "<html xmlns=\"http://www.w3.org/1999/xhtml\"><head></head><body>" + e + "</body></html>");
		let i = x ? w(e) : e;
		if (je === Ae) try {
			t = new l().parseFromString(i, Re);
		} catch {}
		if (!t || !t.documentElement) {
			t = ee.createDocument(je, "template", null);
			try {
				t.documentElement.innerHTML = Me ? S : i;
			} catch {}
		}
		let a = t.body || t.documentElement;
		return e && r && a.insertBefore(n.createTextNode(r), a.childNodes[0] || null), je === Ae ? D.call(t, he ? "html" : "body")[0] : he ? t.documentElement : a;
	}, Xe = function(e) {
		return E.call(e.ownerDocument || e, e, c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION, null);
	}, Ze = function(e) {
		e.normalize();
		let t = E.call(e.ownerDocument || e, e, c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION, null), n = t.nextNode();
		for (; n;) {
			let e = n.data;
			ln([
				A,
				j,
				M
			], (t) => {
				e = _n(e, t, " ");
			}), n.data = e, n = t.nextNode();
		}
		let r = e.querySelectorAll?.call(e, "template") ?? [];
		ln(Array.from(r), (e) => {
			$e(e.content) && Ze(e.content);
		});
	}, Qe = function(e) {
		let t = b ? b(e) : null;
		return typeof t != "string" || G(t) !== "form" ? !1 : typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || e.attributes !== v(e) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function" || e.nodeType !== y(e) || e.childNodes !== h(e);
	}, $e = function(e) {
		if (!y || typeof e != "object" || !e) return !1;
		try {
			return y(e) === Qn.documentFragment;
		} catch {
			return !1;
		}
	}, et = function(e) {
		if (!y || typeof e != "object" || !e) return !1;
		try {
			return typeof y(e) == "number";
		} catch {
			return !1;
		}
	};
	function tt(e, n, r) {
		ln(e, (e) => {
			e.call(t, n, r, Be);
		});
	}
	let nt = function(e) {
		let n = null;
		if (tt(k.beforeSanitizeElements, e, null), Qe(e)) return qe(e), !0;
		let r = G(b ? b(e) : e.nodeName);
		if (tt(k.uponSanitizeElement, e, {
			tagName: r,
			allowedTags: I
		}), z && e.hasChildNodes() && !et(e.firstElementChild) && X(/<[/\w!]/g, e.innerHTML) && X(/<[/\w!]/g, e.textContent) || z && e.namespaceURI === Ae && r === "style" && et(e.firstElementChild) || e.nodeType === Qn.progressingInstruction || z && e.nodeType === Qn.comment && X(/<[/\w]/g, e.data)) return qe(e), !0;
		if (se[r] || !(le.tagCheck instanceof Function && le.tagCheck(r)) && !I[r]) {
			if (!se[r] && at(r) && (R.tagNameCheck instanceof RegExp && X(R.tagNameCheck, r) || R.tagNameCheck instanceof Function && R.tagNameCheck(r))) return !1;
			if (B && !U[r]) {
				let t = g(e), n = h(e);
				if (n && t) {
					let r = n.length;
					for (let i = r - 1; i >= 0; --i) {
						let r = f(n[i], !0);
						t.insertBefore(r, m(e));
					}
				}
			}
			return qe(e), !0;
		}
		return (y ? y(e) : e.nodeType) === Qn.element && !Ke(e) || (r === "noscript" || r === "noembed" || r === "noframes") && X(/<\/no(script|embed|frames)/i, e.innerHTML) ? (qe(e), !0) : (me && e.nodeType === Qn.text && (n = e.textContent, ln([
			A,
			j,
			M
		], (e) => {
			n = _n(n, e, " ");
		}), e.textContent !== n && (fn(t.removed, { element: e.cloneNode() }), e.textContent = n)), tt(k.afterSanitizeElements, e, null), !1);
	}, rt = function(e, t, r) {
		if (ce[t] || xe && (t === "id" || t === "name") && (r in n || r in Ve)) return !1;
		let i = L[t] || le.attributeCheck instanceof Function && le.attributeCheck(t, e);
		if (!(de && !ce[t] && X(ne, t)) && !(ue && X(N, t))) {
			if (!i || ce[t]) {
				if (!(at(e) && (R.tagNameCheck instanceof RegExp && X(R.tagNameCheck, e) || R.tagNameCheck instanceof Function && R.tagNameCheck(e)) && (R.attributeNameCheck instanceof RegExp && X(R.attributeNameCheck, t) || R.attributeNameCheck instanceof Function && R.attributeNameCheck(t, e)) || t === "is" && R.allowCustomizedBuiltInElements && (R.tagNameCheck instanceof RegExp && X(R.tagNameCheck, r) || R.tagNameCheck instanceof Function && R.tagNameCheck(r)))) return !1;
			} else if (!Ee[t] && !X(ie, _n(r, re, "")) && !((t === "src" || t === "xlink:href" || t === "href") && e !== "script" && vn(r, "data:") === 0 && we[e]) && !(fe && !X(P, _n(r, re, ""))) && r) return !1;
		}
		return !0;
	}, it = Q({}, [
		"annotation-xml",
		"color-profile",
		"font-face",
		"font-face-format",
		"font-face-name",
		"font-face-src",
		"font-face-uri",
		"missing-glyph"
	]), at = function(e) {
		return !it[mn(e)] && X(F, e);
	}, ot = function(e) {
		tt(k.beforeSanitizeAttributes, e, null);
		let n = e.attributes;
		if (!n || Qe(e)) return;
		let r = {
			attrName: "",
			attrValue: "",
			keepAttr: !0,
			allowedAttributes: L,
			forceKeepAttr: void 0
		}, i = n.length;
		for (; i--;) {
			let a = n[i], o = a.name, s = a.namespaceURI, c = a.value, l = G(o), d = c, f = o === "value" ? d : yn(d);
			if (r.attrName = l, r.attrValue = f, r.keepAttr = !0, r.forceKeepAttr = void 0, tt(k.uponSanitizeAttribute, e, r), f = r.attrValue, Se && (l === "id" || l === "name") && vn(f, Ce) !== 0 && (Je(o, e), f = Ce + f), z && X(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, f)) {
				Je(o, e);
				continue;
			}
			if (l === "attributename" && gn(f, "href")) {
				Je(o, e);
				continue;
			}
			if (r.forceKeepAttr) continue;
			if (!r.keepAttr) {
				Je(o, e);
				continue;
			}
			if (!pe && X(/\/>/i, f)) {
				Je(o, e);
				continue;
			}
			me && ln([
				A,
				j,
				M
			], (e) => {
				f = _n(f, e, " ");
			});
			let p = G(e.nodeName);
			if (!rt(p, l, f)) {
				Je(o, e);
				continue;
			}
			if (x && typeof u == "object" && typeof u.getAttributeType == "function" && !s) switch (u.getAttributeType(p, l)) {
				case "TrustedHTML":
					f = w(f);
					break;
				case "TrustedScriptURL":
					f = x.createScriptURL(f);
					break;
			}
			if (f !== d) try {
				s ? e.setAttributeNS(s, o, f) : e.setAttribute(o, f), Qe(e) ? qe(e) : dn(t.removed);
			} catch {
				Je(o, e);
			}
		}
		tt(k.afterSanitizeAttributes, e, null);
	}, st = function(e) {
		let t = null, n = Xe(e);
		for (tt(k.beforeSanitizeShadowDOM, e, null); t = n.nextNode();) if (tt(k.uponSanitizeShadowNode, t, null), nt(t), ot(t), $e(t.content) && st(t.content), (y ? y(t) : t.nodeType) === Qn.element) {
			let e = _ ? _(t) : t.shadowRoot;
			$e(e) && (ct(e), st(e));
		}
		tt(k.afterSanitizeShadowDOM, e, null);
	}, ct = function(e) {
		let t = y ? y(e) : e.nodeType;
		if (t === Qn.element) {
			let t = _ ? _(e) : e.shadowRoot;
			$e(t) && (ct(t), st(t));
		}
		let n = h ? h(e) : e.childNodes;
		if (!n) return;
		let r = [];
		ln(n, (e) => {
			fn(r, e);
		});
		for (let e of r) ct(e);
		if (t === Qn.element) {
			let t = b ? b(e) : null;
			if (typeof t == "string" && G(t) === "template") {
				let t = e.content;
				$e(t) && ct(t);
			}
		}
	};
	return t.sanitize = function(e) {
		let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = null, a = null, o = null, s = null;
		if (Me = !e, Me && (e = "<!-->"), typeof e != "string" && !et(e) && (e = On(e), typeof e != "string")) throw Tn("dirty is not a string, aborting");
		if (!t.isSupported) return e;
		if (ge || Ue(n), t.removed = [], typeof e == "string" && (V = !1), V) {
			let t = b ? b(e) : e.nodeName;
			if (typeof t == "string") {
				let e = G(t);
				if (!I[e] || se[e]) throw Tn("root node is forbidden and cannot be sanitized in-place");
			}
			if (Qe(e)) throw Tn("root node is clobbered and cannot be sanitized in-place");
			ct(e);
		} else if (et(e)) i = Ye("<!---->"), a = i.ownerDocument.importNode(e, !0), a.nodeType === Qn.element && a.nodeName === "BODY" || a.nodeName === "HTML" ? i = a : i.appendChild(a), ct(a);
		else {
			if (!ve && !me && !he && e.indexOf("<") === -1) return x && be ? w(e) : e;
			if (i = Ye(e), !i) return ve ? null : be ? S : "";
		}
		i && _e && qe(i.firstChild);
		let c = Xe(V ? e : i);
		for (; o = c.nextNode();) nt(o), ot(o), $e(o.content) && st(o.content);
		if (V) return me && Ze(e), e;
		if (ve) {
			if (me && Ze(i), ye) for (s = te.call(i.ownerDocument); i.firstChild;) s.appendChild(i.firstChild);
			else s = i;
			return (L.shadowroot || L.shadowrootmode) && (s = O.call(r, s, !0)), s;
		}
		let l = he ? i.outerHTML : i.innerHTML;
		return he && I["!doctype"] && i.ownerDocument && i.ownerDocument.doctype && i.ownerDocument.doctype.name && X(Xn, i.ownerDocument.doctype.name) && (l = "<!DOCTYPE " + i.ownerDocument.doctype.name + ">\n" + l), me && ln([
			A,
			j,
			M
		], (e) => {
			l = _n(l, e, " ");
		}), x && be ? w(l) : l;
	}, t.setConfig = function() {
		Ue(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}), ge = !0;
	}, t.clearConfig = function() {
		Be = null, ge = !1;
	}, t.isValidAttribute = function(e, t, n) {
		return Be || Ue({}), rt(G(e), G(t), n);
	}, t.addHook = function(e, t) {
		typeof t == "function" && fn(k[e], t);
	}, t.removeHook = function(e, t) {
		if (t !== void 0) {
			let n = un(k[e], t);
			return n === -1 ? void 0 : pn(k[e], n, 1)[0];
		}
		return dn(k[e]);
	}, t.removeHooks = function(e) {
		k[e] = [];
	}, t.removeAllHooks = function() {
		k = tr();
	}, t;
}
var rr = nr(), ir = (/* @__PURE__ */ c((/* @__PURE__ */ o(((e, t) => {
	function n(e) {
		return e instanceof Map ? e.clear = e.delete = e.set = function() {
			throw Error("map is read-only");
		} : e instanceof Set && (e.add = e.clear = e.delete = function() {
			throw Error("set is read-only");
		}), Object.freeze(e), Object.getOwnPropertyNames(e).forEach((t) => {
			let r = e[t], i = typeof r;
			(i === "object" || i === "function") && !Object.isFrozen(r) && n(r);
		}), e;
	}
	var r = class {
		constructor(e) {
			e.data === void 0 && (e.data = {}), this.data = e.data, this.isMatchIgnored = !1;
		}
		ignoreMatch() {
			this.isMatchIgnored = !0;
		}
	};
	function i(e) {
		return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
	}
	function a(e, ...t) {
		let n = Object.create(null);
		for (let t in e) n[t] = e[t];
		return t.forEach(function(e) {
			for (let t in e) n[t] = e[t];
		}), n;
	}
	var o = "</span>", s = (e) => !!e.scope, c = (e, { prefix: t }) => {
		if (e.startsWith("language:")) return e.replace("language:", "language-");
		if (e.includes(".")) {
			let n = e.split(".");
			return [`${t}${n.shift()}`, ...n.map((e, t) => `${e}${"_".repeat(t + 1)}`)].join(" ");
		}
		return `${t}${e}`;
	}, l = class {
		constructor(e, t) {
			this.buffer = "", this.classPrefix = t.classPrefix, e.walk(this);
		}
		addText(e) {
			this.buffer += i(e);
		}
		openNode(e) {
			if (!s(e)) return;
			let t = c(e.scope, { prefix: this.classPrefix });
			this.span(t);
		}
		closeNode(e) {
			s(e) && (this.buffer += o);
		}
		value() {
			return this.buffer;
		}
		span(e) {
			this.buffer += `<span class="${e}">`;
		}
	}, u = (e = {}) => {
		let t = { children: [] };
		return Object.assign(t, e), t;
	}, d = class e {
		constructor() {
			this.rootNode = u(), this.stack = [this.rootNode];
		}
		get top() {
			return this.stack[this.stack.length - 1];
		}
		get root() {
			return this.rootNode;
		}
		add(e) {
			this.top.children.push(e);
		}
		openNode(e) {
			let t = u({ scope: e });
			this.add(t), this.stack.push(t);
		}
		closeNode() {
			if (this.stack.length > 1) return this.stack.pop();
		}
		closeAllNodes() {
			for (; this.closeNode(););
		}
		toJSON() {
			return JSON.stringify(this.rootNode, null, 4);
		}
		walk(e) {
			return this.constructor._walk(e, this.rootNode);
		}
		static _walk(e, t) {
			return typeof t == "string" ? e.addText(t) : t.children && (e.openNode(t), t.children.forEach((t) => this._walk(e, t)), e.closeNode(t)), e;
		}
		static _collapse(t) {
			typeof t != "string" && t.children && (t.children.every((e) => typeof e == "string") ? t.children = [t.children.join("")] : t.children.forEach((t) => {
				e._collapse(t);
			}));
		}
	}, f = class extends d {
		constructor(e) {
			super(), this.options = e;
		}
		addText(e) {
			e !== "" && this.add(e);
		}
		startScope(e) {
			this.openNode(e);
		}
		endScope() {
			this.closeNode();
		}
		__addSublanguage(e, t) {
			let n = e.root;
			t && (n.scope = `language:${t}`), this.add(n);
		}
		toHTML() {
			return new l(this, this.options).value();
		}
		finalize() {
			return this.closeAllNodes(), !0;
		}
	};
	function p(e) {
		return e ? typeof e == "string" ? e : e.source : null;
	}
	function m(e) {
		return _("(?=", e, ")");
	}
	function h(e) {
		return _("(?:", e, ")*");
	}
	function g(e) {
		return _("(?:", e, ")?");
	}
	function _(...e) {
		return e.map((e) => p(e)).join("");
	}
	function v(e) {
		let t = e[e.length - 1];
		return typeof t == "object" && t.constructor === Object ? (e.splice(e.length - 1, 1), t) : {};
	}
	function y(...e) {
		return "(" + (v(e).capture ? "" : "?:") + e.map((e) => p(e)).join("|") + ")";
	}
	function b(e) {
		return RegExp(e.toString() + "|").exec("").length - 1;
	}
	function x(e, t) {
		let n = e && e.exec(t);
		return n && n.index === 0;
	}
	var S = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
	function C(e, { joinWith: t }) {
		let n = 0;
		return e.map((e) => {
			n += 1;
			let t = n, r = p(e), i = "";
			for (; r.length > 0;) {
				let e = S.exec(r);
				if (!e) {
					i += r;
					break;
				}
				i += r.substring(0, e.index), r = r.substring(e.index + e[0].length), e[0][0] === "\\" && e[1] ? i += "\\" + String(Number(e[1]) + t) : (i += e[0], e[0] === "(" && n++);
			}
			return i;
		}).map((e) => `(${e})`).join(t);
	}
	var w = /\b\B/, T = "[a-zA-Z]\\w*", ee = "[a-zA-Z_]\\w*", E = "\\b\\d+(\\.\\d+)?", te = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", D = "\\b(0b[01]+)", O = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", k = (e = {}) => {
		let t = /^#![ ]*\//;
		return e.binary && (e.begin = _(t, /.*\b/, e.binary, /\b.*/)), a({
			scope: "meta",
			begin: t,
			end: /$/,
			relevance: 0,
			"on:begin": (e, t) => {
				e.index !== 0 && t.ignoreMatch();
			}
		}, e);
	}, A = {
		begin: "\\\\[\\s\\S]",
		relevance: 0
	}, j = {
		scope: "string",
		begin: "'",
		end: "'",
		illegal: "\\n",
		contains: [A]
	}, M = {
		scope: "string",
		begin: "\"",
		end: "\"",
		illegal: "\\n",
		contains: [A]
	}, ne = { begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/ }, N = function(e, t, n = {}) {
		let r = a({
			scope: "comment",
			begin: e,
			end: t,
			contains: []
		}, n);
		r.contains.push({
			scope: "doctag",
			begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
			end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
			excludeBegin: !0,
			relevance: 0
		});
		let i = y("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
		return r.contains.push({ begin: _(/[ ]+/, "(", i, /[.]?[:]?([.][ ]|[ ])/, "){3}") }), r;
	}, P = N("//", "$"), re = N("/\\*", "\\*/"), F = N("#", "$"), ie = /*#__PURE__*/ Object.freeze({
		__proto__: null,
		APOS_STRING_MODE: j,
		BACKSLASH_ESCAPE: A,
		BINARY_NUMBER_MODE: {
			scope: "number",
			begin: D,
			relevance: 0
		},
		BINARY_NUMBER_RE: D,
		COMMENT: N,
		C_BLOCK_COMMENT_MODE: re,
		C_LINE_COMMENT_MODE: P,
		C_NUMBER_MODE: {
			scope: "number",
			begin: te,
			relevance: 0
		},
		C_NUMBER_RE: te,
		END_SAME_AS_BEGIN: function(e) {
			return Object.assign(e, {
				"on:begin": (e, t) => {
					t.data._beginMatch = e[1];
				},
				"on:end": (e, t) => {
					t.data._beginMatch !== e[1] && t.ignoreMatch();
				}
			});
		},
		HASH_COMMENT_MODE: F,
		IDENT_RE: T,
		MATCH_NOTHING_RE: w,
		METHOD_GUARD: {
			begin: "\\.\\s*[a-zA-Z_]\\w*",
			relevance: 0
		},
		NUMBER_MODE: {
			scope: "number",
			begin: E,
			relevance: 0
		},
		NUMBER_RE: E,
		PHRASAL_WORDS_MODE: ne,
		QUOTE_STRING_MODE: M,
		REGEXP_MODE: {
			scope: "regexp",
			begin: /\/(?=[^/\n]*\/)/,
			end: /\/[gimuy]*/,
			contains: [A, {
				begin: /\[/,
				end: /\]/,
				relevance: 0,
				contains: [A]
			}]
		},
		RE_STARTERS_RE: O,
		SHEBANG: k,
		TITLE_MODE: {
			scope: "title",
			begin: T,
			relevance: 0
		},
		UNDERSCORE_IDENT_RE: ee,
		UNDERSCORE_TITLE_MODE: {
			scope: "title",
			begin: ee,
			relevance: 0
		}
	});
	function I(e, t) {
		e.input[e.index - 1] === "." && t.ignoreMatch();
	}
	function ae(e, t) {
		e.className !== void 0 && (e.scope = e.className, delete e.className);
	}
	function L(e, t) {
		t && e.beginKeywords && (e.begin = "\\b(" + e.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", e.__beforeBegin = I, e.keywords = e.keywords || e.beginKeywords, delete e.beginKeywords, e.relevance === void 0 && (e.relevance = 0));
	}
	function oe(e, t) {
		Array.isArray(e.illegal) && (e.illegal = y(...e.illegal));
	}
	function R(e, t) {
		if (e.match) {
			if (e.begin || e.end) throw Error("begin & end are not supported with match");
			e.begin = e.match, delete e.match;
		}
	}
	function se(e, t) {
		e.relevance === void 0 && (e.relevance = 1);
	}
	var ce = (e, t) => {
		if (!e.beforeMatch) return;
		if (e.starts) throw Error("beforeMatch cannot be used with starts");
		let n = Object.assign({}, e);
		Object.keys(e).forEach((t) => {
			delete e[t];
		}), e.keywords = n.keywords, e.begin = _(n.beforeMatch, m(n.begin)), e.starts = {
			relevance: 0,
			contains: [Object.assign(n, { endsParent: !0 })]
		}, e.relevance = 0, delete n.beforeMatch;
	}, le = [
		"of",
		"and",
		"for",
		"in",
		"not",
		"or",
		"if",
		"then",
		"parent",
		"list",
		"value"
	], ue = "keyword";
	function de(e, t, n = ue) {
		let r = Object.create(null);
		return typeof e == "string" ? i(n, e.split(" ")) : Array.isArray(e) ? i(n, e) : Object.keys(e).forEach(function(n) {
			Object.assign(r, de(e[n], t, n));
		}), r;
		function i(e, n) {
			t && (n = n.map((e) => e.toLowerCase())), n.forEach(function(t) {
				let n = t.split("|");
				r[n[0]] = [e, fe(n[0], n[1])];
			});
		}
	}
	function fe(e, t) {
		return t ? Number(t) : +!pe(e);
	}
	function pe(e) {
		return le.includes(e.toLowerCase());
	}
	var me = {}, z = (e) => {
		console.error(e);
	}, he = (e, ...t) => {
		console.log(`WARN: ${e}`, ...t);
	}, ge = (e, t) => {
		me[`${e}/${t}`] || (console.log(`Deprecated as of ${e}. ${t}`), me[`${e}/${t}`] = !0);
	}, _e = /* @__PURE__ */ Error();
	function ve(e, t, { key: n }) {
		let r = 0, i = e[n], a = {}, o = {};
		for (let e = 1; e <= t.length; e++) o[e + r] = i[e], a[e + r] = !0, r += b(t[e - 1]);
		e[n] = o, e[n]._emit = a, e[n]._multi = !0;
	}
	function ye(e) {
		if (Array.isArray(e.begin)) {
			if (e.skip || e.excludeBegin || e.returnBegin) throw z("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), _e;
			if (typeof e.beginScope != "object" || e.beginScope === null) throw z("beginScope must be object"), _e;
			ve(e, e.begin, { key: "beginScope" }), e.begin = C(e.begin, { joinWith: "" });
		}
	}
	function be(e) {
		if (Array.isArray(e.end)) {
			if (e.skip || e.excludeEnd || e.returnEnd) throw z("skip, excludeEnd, returnEnd not compatible with endScope: {}"), _e;
			if (typeof e.endScope != "object" || e.endScope === null) throw z("endScope must be object"), _e;
			ve(e, e.end, { key: "endScope" }), e.end = C(e.end, { joinWith: "" });
		}
	}
	function xe(e) {
		e.scope && typeof e.scope == "object" && e.scope !== null && (e.beginScope = e.scope, delete e.scope);
	}
	function Se(e) {
		xe(e), typeof e.beginScope == "string" && (e.beginScope = { _wrap: e.beginScope }), typeof e.endScope == "string" && (e.endScope = { _wrap: e.endScope }), ye(e), be(e);
	}
	function Ce(e) {
		function t(t, n) {
			return new RegExp(p(t), "m" + (e.case_insensitive ? "i" : "") + (e.unicodeRegex ? "u" : "") + (n ? "g" : ""));
		}
		class n {
			constructor() {
				this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0;
			}
			addRule(e, t) {
				t.position = this.position++, this.matchIndexes[this.matchAt] = t, this.regexes.push([t, e]), this.matchAt += b(e) + 1;
			}
			compile() {
				this.regexes.length === 0 && (this.exec = () => null);
				let e = this.regexes.map((e) => e[1]);
				this.matcherRe = t(C(e, { joinWith: "|" }), !0), this.lastIndex = 0;
			}
			exec(e) {
				this.matcherRe.lastIndex = this.lastIndex;
				let t = this.matcherRe.exec(e);
				if (!t) return null;
				let n = t.findIndex((e, t) => t > 0 && e !== void 0), r = this.matchIndexes[n];
				return t.splice(0, n), Object.assign(t, r);
			}
		}
		class r {
			constructor() {
				this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0;
			}
			getMatcher(e) {
				if (this.multiRegexes[e]) return this.multiRegexes[e];
				let t = new n();
				return this.rules.slice(e).forEach(([e, n]) => t.addRule(e, n)), t.compile(), this.multiRegexes[e] = t, t;
			}
			resumingScanAtSamePosition() {
				return this.regexIndex !== 0;
			}
			considerAll() {
				this.regexIndex = 0;
			}
			addRule(e, t) {
				this.rules.push([e, t]), t.type === "begin" && this.count++;
			}
			exec(e) {
				let t = this.getMatcher(this.regexIndex);
				t.lastIndex = this.lastIndex;
				let n = t.exec(e);
				if (this.resumingScanAtSamePosition() && !(n && n.index === this.lastIndex)) {
					let t = this.getMatcher(0);
					t.lastIndex = this.lastIndex + 1, n = t.exec(e);
				}
				return n && (this.regexIndex += n.position + 1, this.regexIndex === this.count && this.considerAll()), n;
			}
		}
		function i(e) {
			let t = new r();
			return e.contains.forEach((e) => t.addRule(e.begin, {
				rule: e,
				type: "begin"
			})), e.terminatorEnd && t.addRule(e.terminatorEnd, { type: "end" }), e.illegal && t.addRule(e.illegal, { type: "illegal" }), t;
		}
		function o(n, r) {
			let a = n;
			if (n.isCompiled) return a;
			[
				ae,
				R,
				Se,
				ce
			].forEach((e) => e(n, r)), e.compilerExtensions.forEach((e) => e(n, r)), n.__beforeBegin = null, [
				L,
				oe,
				se
			].forEach((e) => e(n, r)), n.isCompiled = !0;
			let s = null;
			return typeof n.keywords == "object" && n.keywords.$pattern && (n.keywords = Object.assign({}, n.keywords), s = n.keywords.$pattern, delete n.keywords.$pattern), s ||= /\w+/, n.keywords &&= de(n.keywords, e.case_insensitive), a.keywordPatternRe = t(s, !0), r && (n.begin ||= /\B|\b/, a.beginRe = t(a.begin), !n.end && !n.endsWithParent && (n.end = /\B|\b/), n.end && (a.endRe = t(a.end)), a.terminatorEnd = p(a.end) || "", n.endsWithParent && r.terminatorEnd && (a.terminatorEnd += (n.end ? "|" : "") + r.terminatorEnd)), n.illegal && (a.illegalRe = t(n.illegal)), n.contains ||= [], n.contains = [].concat(...n.contains.map(function(e) {
				return V(e === "self" ? n : e);
			})), n.contains.forEach(function(e) {
				o(e, a);
			}), n.starts && o(n.starts, r), a.matcher = i(a), a;
		}
		if (e.compilerExtensions ||= [], e.contains && e.contains.includes("self")) throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
		return e.classNameAliases = a(e.classNameAliases || {}), o(e);
	}
	function B(e) {
		return e ? e.endsWithParent || B(e.starts) : !1;
	}
	function V(e) {
		return e.variants && !e.cachedVariants && (e.cachedVariants = e.variants.map(function(t) {
			return a(e, { variants: null }, t);
		})), e.cachedVariants ? e.cachedVariants : B(e) ? a(e, { starts: e.starts ? a(e.starts) : null }) : Object.isFrozen(e) ? a(e) : e;
	}
	var H = "11.11.1", U = class extends Error {
		constructor(e, t) {
			super(e), this.name = "HTMLInjectionError", this.html = t;
		}
	}, W = i, we = a, Te = Symbol("nomatch"), Ee = 7, De = function(e) {
		let t = Object.create(null), i = Object.create(null), a = [], o = !0, s = "Could not find the language '{}', did you forget to load/include a language module?", c = {
			disableAutodetect: !0,
			name: "Plain text",
			contains: []
		}, l = {
			ignoreUnescapedHTML: !1,
			throwUnescapedHTML: !1,
			noHighlightRe: /^(no-?highlight)$/i,
			languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
			classPrefix: "hljs-",
			cssSelector: "pre code",
			languages: null,
			__emitter: f
		};
		function u(e) {
			return l.noHighlightRe.test(e);
		}
		function d(e) {
			let t = e.className + " ";
			t += e.parentNode ? e.parentNode.className : "";
			let n = l.languageDetectRe.exec(t);
			if (n) {
				let t = j(n[1]);
				return t || (he(s.replace("{}", n[1])), he("Falling back to no-highlight mode for this block.", e)), t ? n[1] : "no-highlight";
			}
			return t.split(/\s+/).find((e) => u(e) || j(e));
		}
		function p(e, t, n) {
			let r = "", i = "";
			typeof t == "object" ? (r = e, n = t.ignoreIllegals, i = t.language) : (ge("10.7.0", "highlight(lang, code, ...args) has been deprecated."), ge("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), i = e, r = t), n === void 0 && (n = !0);
			let a = {
				code: r,
				language: i
			};
			F("before:highlight", a);
			let o = a.result ? a.result : v(a.language, a.code, n);
			return o.code = a.code, F("after:highlight", o), o;
		}
		function v(e, n, i, a) {
			let c = Object.create(null);
			function u(e, t) {
				return e.keywords[t];
			}
			function d() {
				if (!O.keywords) {
					A.addText(M);
					return;
				}
				let e = 0;
				O.keywordPatternRe.lastIndex = 0;
				let t = O.keywordPatternRe.exec(M), n = "";
				for (; t;) {
					n += M.substring(e, t.index);
					let r = E.case_insensitive ? t[0].toLowerCase() : t[0], i = u(O, r);
					if (i) {
						let [e, a] = i;
						if (A.addText(n), n = "", c[r] = (c[r] || 0) + 1, c[r] <= Ee && (ne += a), e.startsWith("_")) n += t[0];
						else {
							let n = E.classNameAliases[e] || e;
							m(t[0], n);
						}
					} else n += t[0];
					e = O.keywordPatternRe.lastIndex, t = O.keywordPatternRe.exec(M);
				}
				n += M.substring(e), A.addText(n);
			}
			function f() {
				if (M === "") return;
				let e = null;
				if (typeof O.subLanguage == "string") {
					if (!t[O.subLanguage]) {
						A.addText(M);
						return;
					}
					e = v(O.subLanguage, M, !0, k[O.subLanguage]), k[O.subLanguage] = e._top;
				} else e = S(M, O.subLanguage.length ? O.subLanguage : null);
				O.relevance > 0 && (ne += e.relevance), A.__addSublanguage(e._emitter, e.language);
			}
			function p() {
				O.subLanguage == null ? d() : f(), M = "";
			}
			function m(e, t) {
				e !== "" && (A.startScope(t), A.addText(e), A.endScope());
			}
			function h(e, t) {
				let n = 1, r = t.length - 1;
				for (; n <= r;) {
					if (!e._emit[n]) {
						n++;
						continue;
					}
					let r = E.classNameAliases[e[n]] || e[n], i = t[n];
					r ? m(i, r) : (M = i, d(), M = ""), n++;
				}
			}
			function g(e, t) {
				return e.scope && typeof e.scope == "string" && A.openNode(E.classNameAliases[e.scope] || e.scope), e.beginScope && (e.beginScope._wrap ? (m(M, E.classNameAliases[e.beginScope._wrap] || e.beginScope._wrap), M = "") : e.beginScope._multi && (h(e.beginScope, t), M = "")), O = Object.create(e, { parent: { value: O } }), O;
			}
			function _(e, t, n) {
				let i = x(e.endRe, n);
				if (i) {
					if (e["on:end"]) {
						let n = new r(e);
						e["on:end"](t, n), n.isMatchIgnored && (i = !1);
					}
					if (i) {
						for (; e.endsParent && e.parent;) e = e.parent;
						return e;
					}
				}
				if (e.endsWithParent) return _(e.parent, t, n);
			}
			function y(e) {
				return O.matcher.regexIndex === 0 ? (M += e[0], 1) : (re = !0, 0);
			}
			function b(e) {
				let t = e[0], n = e.rule, i = new r(n), a = [n.__beforeBegin, n["on:begin"]];
				for (let n of a) if (n && (n(e, i), i.isMatchIgnored)) return y(t);
				return n.skip ? M += t : (n.excludeBegin && (M += t), p(), !n.returnBegin && !n.excludeBegin && (M = t)), g(n, e), n.returnBegin ? 0 : t.length;
			}
			function C(e) {
				let t = e[0], r = n.substring(e.index), i = _(O, e, r);
				if (!i) return Te;
				let a = O;
				O.endScope && O.endScope._wrap ? (p(), m(t, O.endScope._wrap)) : O.endScope && O.endScope._multi ? (p(), h(O.endScope, e)) : a.skip ? M += t : (a.returnEnd || a.excludeEnd || (M += t), p(), a.excludeEnd && (M = t));
				do
					O.scope && A.closeNode(), !O.skip && !O.subLanguage && (ne += O.relevance), O = O.parent;
				while (O !== i.parent);
				return i.starts && g(i.starts, e), a.returnEnd ? 0 : t.length;
			}
			function w() {
				let e = [];
				for (let t = O; t !== E; t = t.parent) t.scope && e.unshift(t.scope);
				e.forEach((e) => A.openNode(e));
			}
			let T = {};
			function ee(t, r) {
				let a = r && r[0];
				if (M += t, a == null) return p(), 0;
				if (T.type === "begin" && r.type === "end" && T.index === r.index && a === "") {
					if (M += n.slice(r.index, r.index + 1), !o) {
						let t = /* @__PURE__ */ Error(`0 width match regex (${e})`);
						throw t.languageName = e, t.badRule = T.rule, t;
					}
					return 1;
				}
				if (T = r, r.type === "begin") return b(r);
				if (r.type === "illegal" && !i) {
					let e = /* @__PURE__ */ Error("Illegal lexeme \"" + a + "\" for mode \"" + (O.scope || "<unnamed>") + "\"");
					throw e.mode = O, e;
				} else if (r.type === "end") {
					let e = C(r);
					if (e !== Te) return e;
				}
				if (r.type === "illegal" && a === "") return M += "\n", 1;
				if (P > 1e5 && P > r.index * 3) throw /* @__PURE__ */ Error("potential infinite loop, way more iterations than matches");
				return M += a, a.length;
			}
			let E = j(e);
			if (!E) throw z(s.replace("{}", e)), Error("Unknown language: \"" + e + "\"");
			let te = Ce(E), D = "", O = a || te, k = {}, A = new l.__emitter(l);
			w();
			let M = "", ne = 0, N = 0, P = 0, re = !1;
			try {
				if (E.__emitTokens) E.__emitTokens(n, A);
				else {
					for (O.matcher.considerAll();;) {
						P++, re ? re = !1 : O.matcher.considerAll(), O.matcher.lastIndex = N;
						let e = O.matcher.exec(n);
						if (!e) break;
						let t = ee(n.substring(N, e.index), e);
						N = e.index + t;
					}
					ee(n.substring(N));
				}
				return A.finalize(), D = A.toHTML(), {
					language: e,
					value: D,
					relevance: ne,
					illegal: !1,
					_emitter: A,
					_top: O
				};
			} catch (t) {
				if (t.message && t.message.includes("Illegal")) return {
					language: e,
					value: W(n),
					illegal: !0,
					relevance: 0,
					_illegalBy: {
						message: t.message,
						index: N,
						context: n.slice(N - 100, N + 100),
						mode: t.mode,
						resultSoFar: D
					},
					_emitter: A
				};
				if (o) return {
					language: e,
					value: W(n),
					illegal: !1,
					relevance: 0,
					errorRaised: t,
					_emitter: A,
					_top: O
				};
				throw t;
			}
		}
		function b(e) {
			let t = {
				value: W(e),
				illegal: !1,
				relevance: 0,
				_top: c,
				_emitter: new l.__emitter(l)
			};
			return t._emitter.addText(e), t;
		}
		function S(e, n) {
			n = n || l.languages || Object.keys(t);
			let r = b(e), i = n.filter(j).filter(ne).map((t) => v(t, e, !1));
			i.unshift(r);
			let [a, o] = i.sort((e, t) => {
				if (e.relevance !== t.relevance) return t.relevance - e.relevance;
				if (e.language && t.language) {
					if (j(e.language).supersetOf === t.language) return 1;
					if (j(t.language).supersetOf === e.language) return -1;
				}
				return 0;
			}), s = a;
			return s.secondBest = o, s;
		}
		function C(e, t, n) {
			let r = t && i[t] || n;
			e.classList.add("hljs"), e.classList.add(`language-${r}`);
		}
		function w(e) {
			let t = null, n = d(e);
			if (u(n)) return;
			if (F("before:highlightElement", {
				el: e,
				language: n
			}), e.dataset.highlighted) {
				console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", e);
				return;
			}
			if (e.children.length > 0 && (l.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(e)), l.throwUnescapedHTML)) throw new U("One of your code blocks includes unescaped HTML.", e.innerHTML);
			t = e;
			let r = t.textContent, i = n ? p(r, {
				language: n,
				ignoreIllegals: !0
			}) : S(r);
			e.innerHTML = i.value, e.dataset.highlighted = "yes", C(e, n, i.language), e.result = {
				language: i.language,
				re: i.relevance,
				relevance: i.relevance
			}, i.secondBest && (e.secondBest = {
				language: i.secondBest.language,
				relevance: i.secondBest.relevance
			}), F("after:highlightElement", {
				el: e,
				result: i,
				text: r
			});
		}
		function T(e) {
			l = we(l, e);
		}
		let ee = () => {
			D(), ge("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
		};
		function E() {
			D(), ge("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
		}
		let te = !1;
		function D() {
			function e() {
				D();
			}
			if (document.readyState === "loading") {
				te || window.addEventListener("DOMContentLoaded", e, !1), te = !0;
				return;
			}
			document.querySelectorAll(l.cssSelector).forEach(w);
		}
		function O(n, r) {
			let i = null;
			try {
				i = r(e);
			} catch (e) {
				if (z("Language definition for '{}' could not be registered.".replace("{}", n)), o) z(e);
				else throw e;
				i = c;
			}
			i.name ||= n, t[n] = i, i.rawDefinition = r.bind(null, e), i.aliases && M(i.aliases, { languageName: n });
		}
		function k(e) {
			delete t[e];
			for (let t of Object.keys(i)) i[t] === e && delete i[t];
		}
		function A() {
			return Object.keys(t);
		}
		function j(e) {
			return e = (e || "").toLowerCase(), t[e] || t[i[e]];
		}
		function M(e, { languageName: t }) {
			typeof e == "string" && (e = [e]), e.forEach((e) => {
				i[e.toLowerCase()] = t;
			});
		}
		function ne(e) {
			let t = j(e);
			return t && !t.disableAutodetect;
		}
		function N(e) {
			e["before:highlightBlock"] && !e["before:highlightElement"] && (e["before:highlightElement"] = (t) => {
				e["before:highlightBlock"](Object.assign({ block: t.el }, t));
			}), e["after:highlightBlock"] && !e["after:highlightElement"] && (e["after:highlightElement"] = (t) => {
				e["after:highlightBlock"](Object.assign({ block: t.el }, t));
			});
		}
		function P(e) {
			N(e), a.push(e);
		}
		function re(e) {
			let t = a.indexOf(e);
			t !== -1 && a.splice(t, 1);
		}
		function F(e, t) {
			let n = e;
			a.forEach(function(e) {
				e[n] && e[n](t);
			});
		}
		function I(e) {
			return ge("10.7.0", "highlightBlock will be removed entirely in v12.0"), ge("10.7.0", "Please use highlightElement now."), w(e);
		}
		Object.assign(e, {
			highlight: p,
			highlightAuto: S,
			highlightAll: D,
			highlightElement: w,
			highlightBlock: I,
			configure: T,
			initHighlighting: ee,
			initHighlightingOnLoad: E,
			registerLanguage: O,
			unregisterLanguage: k,
			listLanguages: A,
			getLanguage: j,
			registerAliases: M,
			autoDetection: ne,
			inherit: we,
			addPlugin: P,
			removePlugin: re
		}), e.debugMode = function() {
			o = !1;
		}, e.safeMode = function() {
			o = !0;
		}, e.versionString = H, e.regex = {
			concat: _,
			lookahead: m,
			either: y,
			optional: g,
			anyNumberOfTimes: h
		};
		for (let e in ie) typeof ie[e] == "object" && n(ie[e]);
		return Object.assign(e, ie), e;
	}, Oe = De({});
	Oe.newInstance = () => De({}), t.exports = Oe, Oe.HighlightJS = Oe, Oe.default = Oe;
})))())).default, ar = "[A-Za-z$_][0-9A-Za-z$_]*", or = /* @__PURE__ */ "as.in.of.if.for.while.finally.var.new.function.do.return.void.else.break.catch.instanceof.with.throw.case.default.try.switch.continue.typeof.delete.let.yield.const.class.debugger.async.await.static.import.from.export.extends.using".split("."), sr = [
	"true",
	"false",
	"null",
	"undefined",
	"NaN",
	"Infinity"
], cr = /* @__PURE__ */ "Object.Function.Boolean.Symbol.Math.Date.Number.BigInt.String.RegExp.Array.Float32Array.Float64Array.Int8Array.Uint8Array.Uint8ClampedArray.Int16Array.Int32Array.Uint16Array.Uint32Array.BigInt64Array.BigUint64Array.Set.Map.WeakSet.WeakMap.ArrayBuffer.SharedArrayBuffer.Atomics.DataView.JSON.Promise.Generator.GeneratorFunction.AsyncFunction.Reflect.Proxy.Intl.WebAssembly".split("."), lr = [
	"Error",
	"EvalError",
	"InternalError",
	"RangeError",
	"ReferenceError",
	"SyntaxError",
	"TypeError",
	"URIError"
], ur = [
	"setInterval",
	"setTimeout",
	"clearInterval",
	"clearTimeout",
	"require",
	"exports",
	"eval",
	"isFinite",
	"isNaN",
	"parseFloat",
	"parseInt",
	"decodeURI",
	"decodeURIComponent",
	"encodeURI",
	"encodeURIComponent",
	"escape",
	"unescape"
], dr = [
	"arguments",
	"this",
	"super",
	"console",
	"window",
	"document",
	"localStorage",
	"sessionStorage",
	"module",
	"global"
], fr = [].concat(ur, cr, lr);
function pr(e) {
	let t = e.regex, n = (e, { after: t }) => {
		let n = "</" + e[0].slice(1);
		return e.input.indexOf(n, t) !== -1;
	}, r = ar, i = {
		begin: "<>",
		end: "</>"
	}, a = /<[A-Za-z0-9\\._:-]+\s*\/>/, o = {
		begin: /<[A-Za-z0-9\\._:-]+/,
		end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
		isTrulyOpeningTag: (e, t) => {
			let r = e[0].length + e.index, i = e.input[r];
			if (i === "<" || i === ",") {
				t.ignoreMatch();
				return;
			}
			i === ">" && (n(e, { after: r }) || t.ignoreMatch());
			let a, o = e.input.substring(r);
			if (a = o.match(/^\s*=/)) {
				t.ignoreMatch();
				return;
			}
			if ((a = o.match(/^\s+extends\s+/)) && a.index === 0) {
				t.ignoreMatch();
				return;
			}
		}
	}, s = {
		$pattern: ar,
		keyword: or,
		literal: sr,
		built_in: fr,
		"variable.language": dr
	}, c = "[0-9](_?[0-9])*", l = `\\.(${c})`, u = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", d = {
		className: "number",
		variants: [
			{ begin: `(\\b(${u})((${l})|\\.)?|(${l}))[eE][+-]?(${c})\\b` },
			{ begin: `\\b(${u})\\b((${l})\\b|\\.)?|(${l})\\b` },
			{ begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
			{ begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
			{ begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
			{ begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
			{ begin: "\\b0[0-7]+n?\\b" }
		],
		relevance: 0
	}, f = {
		className: "subst",
		begin: "\\$\\{",
		end: "\\}",
		keywords: s,
		contains: []
	}, p = {
		begin: ".?html`",
		end: "",
		starts: {
			end: "`",
			returnEnd: !1,
			contains: [e.BACKSLASH_ESCAPE, f],
			subLanguage: "xml"
		}
	}, m = {
		begin: ".?css`",
		end: "",
		starts: {
			end: "`",
			returnEnd: !1,
			contains: [e.BACKSLASH_ESCAPE, f],
			subLanguage: "css"
		}
	}, h = {
		begin: ".?gql`",
		end: "",
		starts: {
			end: "`",
			returnEnd: !1,
			contains: [e.BACKSLASH_ESCAPE, f],
			subLanguage: "graphql"
		}
	}, g = {
		className: "string",
		begin: "`",
		end: "`",
		contains: [e.BACKSLASH_ESCAPE, f]
	}, _ = {
		className: "comment",
		variants: [
			e.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
				relevance: 0,
				contains: [{
					begin: "(?=@[A-Za-z]+)",
					relevance: 0,
					contains: [
						{
							className: "doctag",
							begin: "@[A-Za-z]+"
						},
						{
							className: "type",
							begin: "\\{",
							end: "\\}",
							excludeEnd: !0,
							excludeBegin: !0,
							relevance: 0
						},
						{
							className: "variable",
							begin: "[A-Za-z$_][0-9A-Za-z$_]*(?=\\s*(-)|$)",
							endsParent: !0,
							relevance: 0
						},
						{
							begin: /(?=[^\n])\s/,
							relevance: 0
						}
					]
				}]
			}),
			e.C_BLOCK_COMMENT_MODE,
			e.C_LINE_COMMENT_MODE
		]
	}, v = [
		e.APOS_STRING_MODE,
		e.QUOTE_STRING_MODE,
		p,
		m,
		h,
		g,
		{ match: /\$\d+/ },
		d
	];
	f.contains = v.concat({
		begin: /\{/,
		end: /\}/,
		keywords: s,
		contains: ["self"].concat(v)
	});
	let y = [].concat(_, f.contains), b = y.concat([{
		begin: /(\s*)\(/,
		end: /\)/,
		keywords: s,
		contains: ["self"].concat(y)
	}]), x = {
		className: "params",
		begin: /(\s*)\(/,
		end: /\)/,
		excludeBegin: !0,
		excludeEnd: !0,
		keywords: s,
		contains: b
	}, S = { variants: [{
		match: [
			/class/,
			/\s+/,
			r,
			/\s+/,
			/extends/,
			/\s+/,
			t.concat(r, "(", t.concat(/\./, r), ")*")
		],
		scope: {
			1: "keyword",
			3: "title.class",
			5: "keyword",
			7: "title.class.inherited"
		}
	}, {
		match: [
			/class/,
			/\s+/,
			r
		],
		scope: {
			1: "keyword",
			3: "title.class"
		}
	}] }, C = {
		relevance: 0,
		match: t.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
		className: "title.class",
		keywords: { _: [...cr, ...lr] }
	}, w = {
		label: "use_strict",
		className: "meta",
		relevance: 10,
		begin: /^\s*['"]use (strict|asm)['"]/
	}, T = {
		variants: [{ match: [
			/function/,
			/\s+/,
			r,
			/(?=\s*\()/
		] }, { match: [/function/, /\s*(?=\()/] }],
		className: {
			1: "keyword",
			3: "title.function"
		},
		label: "func.def",
		contains: [x],
		illegal: /%/
	}, ee = {
		relevance: 0,
		match: /\b[A-Z][A-Z_0-9]+\b/,
		className: "variable.constant"
	};
	function E(e) {
		return t.concat("(?!", e.join("|"), ")");
	}
	let te = {
		match: t.concat(/\b/, E([
			...ur,
			"super",
			"import"
		].map((e) => `${e}\\s*\\(`)), r, t.lookahead(/\s*\(/)),
		className: "title.function",
		relevance: 0
	}, D = {
		begin: t.concat(/\./, t.lookahead(t.concat(r, /(?![0-9A-Za-z$_(])/))),
		end: r,
		excludeBegin: !0,
		keywords: "prototype",
		className: "property",
		relevance: 0
	}, O = {
		match: [
			/get|set/,
			/\s+/,
			r,
			/(?=\()/
		],
		className: {
			1: "keyword",
			3: "title.function"
		},
		contains: [{ begin: /\(\)/ }, x]
	}, k = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>", A = {
		match: [
			/const|var|let/,
			/\s+/,
			r,
			/\s*/,
			/=\s*/,
			/(async\s*)?/,
			t.lookahead(k)
		],
		keywords: "async",
		className: {
			1: "keyword",
			3: "title.function"
		},
		contains: [x]
	};
	return {
		name: "JavaScript",
		aliases: [
			"js",
			"jsx",
			"mjs",
			"cjs"
		],
		keywords: s,
		exports: {
			PARAMS_CONTAINS: b,
			CLASS_REFERENCE: C
		},
		illegal: /#(?![$_A-z])/,
		contains: [
			e.SHEBANG({
				label: "shebang",
				binary: "node",
				relevance: 5
			}),
			w,
			e.APOS_STRING_MODE,
			e.QUOTE_STRING_MODE,
			p,
			m,
			h,
			g,
			_,
			{ match: /\$\d+/ },
			d,
			C,
			{
				scope: "attr",
				match: r + t.lookahead(":"),
				relevance: 0
			},
			A,
			{
				begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
				keywords: "return throw case",
				relevance: 0,
				contains: [
					_,
					e.REGEXP_MODE,
					{
						className: "function",
						begin: k,
						returnBegin: !0,
						end: "\\s*=>",
						contains: [{
							className: "params",
							variants: [
								{
									begin: e.UNDERSCORE_IDENT_RE,
									relevance: 0
								},
								{
									className: null,
									begin: /\(\s*\)/,
									skip: !0
								},
								{
									begin: /(\s*)\(/,
									end: /\)/,
									excludeBegin: !0,
									excludeEnd: !0,
									keywords: s,
									contains: b
								}
							]
						}]
					},
					{
						begin: /,/,
						relevance: 0
					},
					{
						match: /\s+/,
						relevance: 0
					},
					{
						variants: [
							{
								begin: i.begin,
								end: i.end
							},
							{ match: a },
							{
								begin: o.begin,
								"on:begin": o.isTrulyOpeningTag,
								end: o.end
							}
						],
						subLanguage: "xml",
						contains: [{
							begin: o.begin,
							end: o.end,
							skip: !0,
							contains: ["self"]
						}]
					}
				]
			},
			T,
			{ beginKeywords: "while if switch catch for" },
			{
				begin: "\\b(?!function)" + e.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
				returnBegin: !0,
				label: "func.def",
				contains: [x, e.inherit(e.TITLE_MODE, {
					begin: r,
					className: "title.function"
				})]
			},
			{
				match: /\.\.\./,
				relevance: 0
			},
			D,
			{
				match: "\\$[A-Za-z$_][0-9A-Za-z$_]*",
				relevance: 0
			},
			{
				match: [/\bconstructor(?=\s*\()/],
				className: { 1: "title.function" },
				contains: [x]
			},
			te,
			ee,
			S,
			O,
			{ match: /\$[(.]/ }
		]
	};
}
//#endregion
//#region node_modules/highlight.js/es/languages/typescript.js
var mr = "[A-Za-z$_][0-9A-Za-z$_]*", hr = /* @__PURE__ */ "as.in.of.if.for.while.finally.var.new.function.do.return.void.else.break.catch.instanceof.with.throw.case.default.try.switch.continue.typeof.delete.let.yield.const.class.debugger.async.await.static.import.from.export.extends.using".split("."), gr = [
	"true",
	"false",
	"null",
	"undefined",
	"NaN",
	"Infinity"
], _r = /* @__PURE__ */ "Object.Function.Boolean.Symbol.Math.Date.Number.BigInt.String.RegExp.Array.Float32Array.Float64Array.Int8Array.Uint8Array.Uint8ClampedArray.Int16Array.Int32Array.Uint16Array.Uint32Array.BigInt64Array.BigUint64Array.Set.Map.WeakSet.WeakMap.ArrayBuffer.SharedArrayBuffer.Atomics.DataView.JSON.Promise.Generator.GeneratorFunction.AsyncFunction.Reflect.Proxy.Intl.WebAssembly".split("."), vr = [
	"Error",
	"EvalError",
	"InternalError",
	"RangeError",
	"ReferenceError",
	"SyntaxError",
	"TypeError",
	"URIError"
], yr = [
	"setInterval",
	"setTimeout",
	"clearInterval",
	"clearTimeout",
	"require",
	"exports",
	"eval",
	"isFinite",
	"isNaN",
	"parseFloat",
	"parseInt",
	"decodeURI",
	"decodeURIComponent",
	"encodeURI",
	"encodeURIComponent",
	"escape",
	"unescape"
], br = [
	"arguments",
	"this",
	"super",
	"console",
	"window",
	"document",
	"localStorage",
	"sessionStorage",
	"module",
	"global"
], xr = [].concat(yr, _r, vr);
function Sr(e) {
	let t = e.regex, n = (e, { after: t }) => {
		let n = "</" + e[0].slice(1);
		return e.input.indexOf(n, t) !== -1;
	}, r = mr, i = {
		begin: "<>",
		end: "</>"
	}, a = /<[A-Za-z0-9\\._:-]+\s*\/>/, o = {
		begin: /<[A-Za-z0-9\\._:-]+/,
		end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
		isTrulyOpeningTag: (e, t) => {
			let r = e[0].length + e.index, i = e.input[r];
			if (i === "<" || i === ",") {
				t.ignoreMatch();
				return;
			}
			i === ">" && (n(e, { after: r }) || t.ignoreMatch());
			let a, o = e.input.substring(r);
			if (a = o.match(/^\s*=/)) {
				t.ignoreMatch();
				return;
			}
			if ((a = o.match(/^\s+extends\s+/)) && a.index === 0) {
				t.ignoreMatch();
				return;
			}
		}
	}, s = {
		$pattern: mr,
		keyword: hr,
		literal: gr,
		built_in: xr,
		"variable.language": br
	}, c = "[0-9](_?[0-9])*", l = `\\.(${c})`, u = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", d = {
		className: "number",
		variants: [
			{ begin: `(\\b(${u})((${l})|\\.)?|(${l}))[eE][+-]?(${c})\\b` },
			{ begin: `\\b(${u})\\b((${l})\\b|\\.)?|(${l})\\b` },
			{ begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
			{ begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
			{ begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
			{ begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
			{ begin: "\\b0[0-7]+n?\\b" }
		],
		relevance: 0
	}, f = {
		className: "subst",
		begin: "\\$\\{",
		end: "\\}",
		keywords: s,
		contains: []
	}, p = {
		begin: ".?html`",
		end: "",
		starts: {
			end: "`",
			returnEnd: !1,
			contains: [e.BACKSLASH_ESCAPE, f],
			subLanguage: "xml"
		}
	}, m = {
		begin: ".?css`",
		end: "",
		starts: {
			end: "`",
			returnEnd: !1,
			contains: [e.BACKSLASH_ESCAPE, f],
			subLanguage: "css"
		}
	}, h = {
		begin: ".?gql`",
		end: "",
		starts: {
			end: "`",
			returnEnd: !1,
			contains: [e.BACKSLASH_ESCAPE, f],
			subLanguage: "graphql"
		}
	}, g = {
		className: "string",
		begin: "`",
		end: "`",
		contains: [e.BACKSLASH_ESCAPE, f]
	}, _ = {
		className: "comment",
		variants: [
			e.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
				relevance: 0,
				contains: [{
					begin: "(?=@[A-Za-z]+)",
					relevance: 0,
					contains: [
						{
							className: "doctag",
							begin: "@[A-Za-z]+"
						},
						{
							className: "type",
							begin: "\\{",
							end: "\\}",
							excludeEnd: !0,
							excludeBegin: !0,
							relevance: 0
						},
						{
							className: "variable",
							begin: "[A-Za-z$_][0-9A-Za-z$_]*(?=\\s*(-)|$)",
							endsParent: !0,
							relevance: 0
						},
						{
							begin: /(?=[^\n])\s/,
							relevance: 0
						}
					]
				}]
			}),
			e.C_BLOCK_COMMENT_MODE,
			e.C_LINE_COMMENT_MODE
		]
	}, v = [
		e.APOS_STRING_MODE,
		e.QUOTE_STRING_MODE,
		p,
		m,
		h,
		g,
		{ match: /\$\d+/ },
		d
	];
	f.contains = v.concat({
		begin: /\{/,
		end: /\}/,
		keywords: s,
		contains: ["self"].concat(v)
	});
	let y = [].concat(_, f.contains), b = y.concat([{
		begin: /(\s*)\(/,
		end: /\)/,
		keywords: s,
		contains: ["self"].concat(y)
	}]), x = {
		className: "params",
		begin: /(\s*)\(/,
		end: /\)/,
		excludeBegin: !0,
		excludeEnd: !0,
		keywords: s,
		contains: b
	}, S = { variants: [{
		match: [
			/class/,
			/\s+/,
			r,
			/\s+/,
			/extends/,
			/\s+/,
			t.concat(r, "(", t.concat(/\./, r), ")*")
		],
		scope: {
			1: "keyword",
			3: "title.class",
			5: "keyword",
			7: "title.class.inherited"
		}
	}, {
		match: [
			/class/,
			/\s+/,
			r
		],
		scope: {
			1: "keyword",
			3: "title.class"
		}
	}] }, C = {
		relevance: 0,
		match: t.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
		className: "title.class",
		keywords: { _: [..._r, ...vr] }
	}, w = {
		label: "use_strict",
		className: "meta",
		relevance: 10,
		begin: /^\s*['"]use (strict|asm)['"]/
	}, T = {
		variants: [{ match: [
			/function/,
			/\s+/,
			r,
			/(?=\s*\()/
		] }, { match: [/function/, /\s*(?=\()/] }],
		className: {
			1: "keyword",
			3: "title.function"
		},
		label: "func.def",
		contains: [x],
		illegal: /%/
	}, ee = {
		relevance: 0,
		match: /\b[A-Z][A-Z_0-9]+\b/,
		className: "variable.constant"
	};
	function E(e) {
		return t.concat("(?!", e.join("|"), ")");
	}
	let te = {
		match: t.concat(/\b/, E([
			...yr,
			"super",
			"import"
		].map((e) => `${e}\\s*\\(`)), r, t.lookahead(/\s*\(/)),
		className: "title.function",
		relevance: 0
	}, D = {
		begin: t.concat(/\./, t.lookahead(t.concat(r, /(?![0-9A-Za-z$_(])/))),
		end: r,
		excludeBegin: !0,
		keywords: "prototype",
		className: "property",
		relevance: 0
	}, O = {
		match: [
			/get|set/,
			/\s+/,
			r,
			/(?=\()/
		],
		className: {
			1: "keyword",
			3: "title.function"
		},
		contains: [{ begin: /\(\)/ }, x]
	}, k = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>", A = {
		match: [
			/const|var|let/,
			/\s+/,
			r,
			/\s*/,
			/=\s*/,
			/(async\s*)?/,
			t.lookahead(k)
		],
		keywords: "async",
		className: {
			1: "keyword",
			3: "title.function"
		},
		contains: [x]
	};
	return {
		name: "JavaScript",
		aliases: [
			"js",
			"jsx",
			"mjs",
			"cjs"
		],
		keywords: s,
		exports: {
			PARAMS_CONTAINS: b,
			CLASS_REFERENCE: C
		},
		illegal: /#(?![$_A-z])/,
		contains: [
			e.SHEBANG({
				label: "shebang",
				binary: "node",
				relevance: 5
			}),
			w,
			e.APOS_STRING_MODE,
			e.QUOTE_STRING_MODE,
			p,
			m,
			h,
			g,
			_,
			{ match: /\$\d+/ },
			d,
			C,
			{
				scope: "attr",
				match: r + t.lookahead(":"),
				relevance: 0
			},
			A,
			{
				begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
				keywords: "return throw case",
				relevance: 0,
				contains: [
					_,
					e.REGEXP_MODE,
					{
						className: "function",
						begin: k,
						returnBegin: !0,
						end: "\\s*=>",
						contains: [{
							className: "params",
							variants: [
								{
									begin: e.UNDERSCORE_IDENT_RE,
									relevance: 0
								},
								{
									className: null,
									begin: /\(\s*\)/,
									skip: !0
								},
								{
									begin: /(\s*)\(/,
									end: /\)/,
									excludeBegin: !0,
									excludeEnd: !0,
									keywords: s,
									contains: b
								}
							]
						}]
					},
					{
						begin: /,/,
						relevance: 0
					},
					{
						match: /\s+/,
						relevance: 0
					},
					{
						variants: [
							{
								begin: i.begin,
								end: i.end
							},
							{ match: a },
							{
								begin: o.begin,
								"on:begin": o.isTrulyOpeningTag,
								end: o.end
							}
						],
						subLanguage: "xml",
						contains: [{
							begin: o.begin,
							end: o.end,
							skip: !0,
							contains: ["self"]
						}]
					}
				]
			},
			T,
			{ beginKeywords: "while if switch catch for" },
			{
				begin: "\\b(?!function)" + e.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
				returnBegin: !0,
				label: "func.def",
				contains: [x, e.inherit(e.TITLE_MODE, {
					begin: r,
					className: "title.function"
				})]
			},
			{
				match: /\.\.\./,
				relevance: 0
			},
			D,
			{
				match: "\\$[A-Za-z$_][0-9A-Za-z$_]*",
				relevance: 0
			},
			{
				match: [/\bconstructor(?=\s*\()/],
				className: { 1: "title.function" },
				contains: [x]
			},
			te,
			ee,
			S,
			O,
			{ match: /\$[(.]/ }
		]
	};
}
function Cr(e) {
	let t = e.regex, n = Sr(e), r = mr, i = [
		"any",
		"void",
		"number",
		"boolean",
		"string",
		"object",
		"never",
		"symbol",
		"bigint",
		"unknown"
	], a = {
		begin: [
			/namespace/,
			/\s+/,
			e.IDENT_RE
		],
		beginScope: {
			1: "keyword",
			3: "title.class"
		}
	}, o = {
		beginKeywords: "interface",
		end: /\{/,
		excludeEnd: !0,
		keywords: {
			keyword: "interface extends",
			built_in: i
		},
		contains: [n.exports.CLASS_REFERENCE]
	}, s = {
		className: "meta",
		relevance: 10,
		begin: /^\s*['"]use strict['"]/
	}, c = {
		$pattern: mr,
		keyword: hr.concat([
			"type",
			"interface",
			"public",
			"private",
			"protected",
			"implements",
			"declare",
			"abstract",
			"readonly",
			"enum",
			"override",
			"satisfies"
		]),
		literal: gr,
		built_in: xr.concat(i),
		"variable.language": br
	}, l = {
		className: "meta",
		begin: "@[A-Za-z$_][0-9A-Za-z$_]*"
	}, u = (e, t, n) => {
		let r = e.contains.findIndex((e) => e.label === t);
		if (r === -1) throw Error("can not find mode to replace");
		e.contains.splice(r, 1, n);
	};
	Object.assign(n.keywords, c), n.exports.PARAMS_CONTAINS.push(l);
	let d = n.contains.find((e) => e.scope === "attr"), f = Object.assign({}, d, { match: t.concat(r, t.lookahead(/\s*\?:/)) });
	n.exports.PARAMS_CONTAINS.push([
		n.exports.CLASS_REFERENCE,
		d,
		f
	]), n.contains = n.contains.concat([
		l,
		a,
		o,
		f
	]), u(n, "shebang", e.SHEBANG()), u(n, "use_strict", s);
	let p = n.contains.find((e) => e.label === "func.def");
	return p.relevance = 0, Object.assign(n, {
		name: "TypeScript",
		aliases: [
			"ts",
			"tsx",
			"mts",
			"cts"
		]
	}), n;
}
//#endregion
//#region node_modules/highlight.js/es/languages/xml.js
function wr(e) {
	let t = e.regex, n = t.concat(/[\p{L}_]/u, t.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u), r = /[\p{L}0-9._:-]+/u, i = {
		className: "symbol",
		begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
	}, a = {
		begin: /\s/,
		contains: [{
			className: "keyword",
			begin: /#?[a-z_][a-z1-9_-]+/,
			illegal: /\n/
		}]
	}, o = e.inherit(a, {
		begin: /\(/,
		end: /\)/
	}), s = e.inherit(e.APOS_STRING_MODE, { className: "string" }), c = e.inherit(e.QUOTE_STRING_MODE, { className: "string" }), l = {
		endsWithParent: !0,
		illegal: /</,
		relevance: 0,
		contains: [{
			className: "attr",
			begin: r,
			relevance: 0
		}, {
			begin: /=\s*/,
			relevance: 0,
			contains: [{
				className: "string",
				endsParent: !0,
				variants: [
					{
						begin: /"/,
						end: /"/,
						contains: [i]
					},
					{
						begin: /'/,
						end: /'/,
						contains: [i]
					},
					{ begin: /[^\s"'=<>`]+/ }
				]
			}]
		}]
	};
	return {
		name: "HTML, XML",
		aliases: [
			"html",
			"xhtml",
			"rss",
			"atom",
			"xjb",
			"xsd",
			"xsl",
			"plist",
			"wsf",
			"svg"
		],
		case_insensitive: !0,
		unicodeRegex: !0,
		contains: [
			{
				className: "meta",
				begin: /<![a-z]/,
				end: />/,
				relevance: 10,
				contains: [
					a,
					c,
					s,
					o,
					{
						begin: /\[/,
						end: /\]/,
						contains: [{
							className: "meta",
							begin: /<![a-z]/,
							end: />/,
							contains: [
								a,
								o,
								c,
								s
							]
						}]
					}
				]
			},
			e.COMMENT(/<!--/, /-->/, { relevance: 10 }),
			{
				begin: /<!\[CDATA\[/,
				end: /\]\]>/,
				relevance: 10
			},
			i,
			{
				className: "meta",
				end: /\?>/,
				variants: [{
					begin: /<\?xml/,
					relevance: 10,
					contains: [c]
				}, { begin: /<\?[a-z][a-z0-9]+/ }]
			},
			{
				className: "tag",
				begin: /<style(?=\s|>)/,
				end: />/,
				keywords: { name: "style" },
				contains: [l],
				starts: {
					end: /<\/style>/,
					returnEnd: !0,
					subLanguage: ["css", "xml"]
				}
			},
			{
				className: "tag",
				begin: /<script(?=\s|>)/,
				end: />/,
				keywords: { name: "script" },
				contains: [l],
				starts: {
					end: /<\/script>/,
					returnEnd: !0,
					subLanguage: [
						"javascript",
						"handlebars",
						"xml"
					]
				}
			},
			{
				className: "tag",
				begin: /<>|<\/>/
			},
			{
				className: "tag",
				begin: t.concat(/</, t.lookahead(t.concat(n, t.either(/\/>/, />/, /\s/)))),
				end: /\/?>/,
				contains: [{
					className: "name",
					begin: n,
					relevance: 0,
					starts: l
				}]
			},
			{
				className: "tag",
				begin: t.concat(/<\//, t.lookahead(t.concat(n, />/))),
				contains: [{
					className: "name",
					begin: n,
					relevance: 0
				}, {
					begin: />/,
					relevance: 0,
					endsParent: !0
				}]
			}
		]
	};
}
//#endregion
//#region node_modules/highlight.js/es/languages/css.js
var Tr = (e) => ({
	IMPORTANT: {
		scope: "meta",
		begin: "!important"
	},
	BLOCK_COMMENT: e.C_BLOCK_COMMENT_MODE,
	HEXCOLOR: {
		scope: "number",
		begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
	},
	FUNCTION_DISPATCH: {
		className: "built_in",
		begin: /[\w-]+(?=\()/
	},
	ATTRIBUTE_SELECTOR_MODE: {
		scope: "selector-attr",
		begin: /\[/,
		end: /\]/,
		illegal: "$",
		contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
	},
	CSS_NUMBER_MODE: {
		scope: "number",
		begin: e.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
		relevance: 0
	},
	CSS_VARIABLE: {
		className: "attr",
		begin: /--[A-Za-z_][A-Za-z0-9_-]*/
	}
}), Er = /* @__PURE__ */ "a.abbr.address.article.aside.audio.b.blockquote.body.button.canvas.caption.cite.code.dd.del.details.dfn.div.dl.dt.em.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.header.hgroup.html.i.iframe.img.input.ins.kbd.label.legend.li.main.mark.menu.nav.object.ol.optgroup.option.p.picture.q.quote.samp.section.select.source.span.strong.summary.sup.table.tbody.td.textarea.tfoot.th.thead.time.tr.ul.var.video".split("."), Dr = /* @__PURE__ */ "defs.g.marker.mask.pattern.svg.switch.symbol.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feFlood.feGaussianBlur.feImage.feMerge.feMorphology.feOffset.feSpecularLighting.feTile.feTurbulence.linearGradient.radialGradient.stop.circle.ellipse.image.line.path.polygon.polyline.rect.text.use.textPath.tspan.foreignObject.clipPath".split("."), Or = [...Er, ...Dr], kr = (/* @__PURE__ */ "any-hover.any-pointer.aspect-ratio.color.color-gamut.color-index.device-aspect-ratio.device-height.device-width.display-mode.forced-colors.grid.height.hover.inverted-colors.monochrome.orientation.overflow-block.overflow-inline.pointer.prefers-color-scheme.prefers-contrast.prefers-reduced-motion.prefers-reduced-transparency.resolution.scan.scripting.update.width.min-width.max-width.min-height.max-height".split(".")).sort().reverse(), Ar = (/* @__PURE__ */ "active.any-link.blank.checked.current.default.defined.dir.disabled.drop.empty.enabled.first.first-child.first-of-type.fullscreen.future.focus.focus-visible.focus-within.has.host.host-context.hover.indeterminate.in-range.invalid.is.lang.last-child.last-of-type.left.link.local-link.not.nth-child.nth-col.nth-last-child.nth-last-col.nth-last-of-type.nth-of-type.only-child.only-of-type.optional.out-of-range.past.placeholder-shown.read-only.read-write.required.right.root.scope.target.target-within.user-invalid.valid.visited.where".split(".")).sort().reverse(), jr = [
	"after",
	"backdrop",
	"before",
	"cue",
	"cue-region",
	"first-letter",
	"first-line",
	"grammar-error",
	"marker",
	"part",
	"placeholder",
	"selection",
	"slotted",
	"spelling-error"
].sort().reverse(), Mr = (/* @__PURE__ */ "accent-color.align-content.align-items.align-self.alignment-baseline.all.anchor-name.animation.animation-composition.animation-delay.animation-direction.animation-duration.animation-fill-mode.animation-iteration-count.animation-name.animation-play-state.animation-range.animation-range-end.animation-range-start.animation-timeline.animation-timing-function.appearance.aspect-ratio.backdrop-filter.backface-visibility.background.background-attachment.background-blend-mode.background-clip.background-color.background-image.background-origin.background-position.background-position-x.background-position-y.background-repeat.background-size.baseline-shift.block-size.border.border-block.border-block-color.border-block-end.border-block-end-color.border-block-end-style.border-block-end-width.border-block-start.border-block-start-color.border-block-start-style.border-block-start-width.border-block-style.border-block-width.border-bottom.border-bottom-color.border-bottom-left-radius.border-bottom-right-radius.border-bottom-style.border-bottom-width.border-collapse.border-color.border-end-end-radius.border-end-start-radius.border-image.border-image-outset.border-image-repeat.border-image-slice.border-image-source.border-image-width.border-inline.border-inline-color.border-inline-end.border-inline-end-color.border-inline-end-style.border-inline-end-width.border-inline-start.border-inline-start-color.border-inline-start-style.border-inline-start-width.border-inline-style.border-inline-width.border-left.border-left-color.border-left-style.border-left-width.border-radius.border-right.border-right-color.border-right-style.border-right-width.border-spacing.border-start-end-radius.border-start-start-radius.border-style.border-top.border-top-color.border-top-left-radius.border-top-right-radius.border-top-style.border-top-width.border-width.bottom.box-align.box-decoration-break.box-direction.box-flex.box-flex-group.box-lines.box-ordinal-group.box-orient.box-pack.box-shadow.box-sizing.break-after.break-before.break-inside.caption-side.caret-color.clear.clip.clip-path.clip-rule.color.color-interpolation.color-interpolation-filters.color-profile.color-rendering.color-scheme.column-count.column-fill.column-gap.column-rule.column-rule-color.column-rule-style.column-rule-width.column-span.column-width.columns.contain.contain-intrinsic-block-size.contain-intrinsic-height.contain-intrinsic-inline-size.contain-intrinsic-size.contain-intrinsic-width.container.container-name.container-type.content.content-visibility.counter-increment.counter-reset.counter-set.cue.cue-after.cue-before.cursor.cx.cy.direction.display.dominant-baseline.empty-cells.enable-background.field-sizing.fill.fill-opacity.fill-rule.filter.flex.flex-basis.flex-direction.flex-flow.flex-grow.flex-shrink.flex-wrap.float.flood-color.flood-opacity.flow.font.font-display.font-family.font-feature-settings.font-kerning.font-language-override.font-optical-sizing.font-palette.font-size.font-size-adjust.font-smooth.font-smoothing.font-stretch.font-style.font-synthesis.font-synthesis-position.font-synthesis-small-caps.font-synthesis-style.font-synthesis-weight.font-variant.font-variant-alternates.font-variant-caps.font-variant-east-asian.font-variant-emoji.font-variant-ligatures.font-variant-numeric.font-variant-position.font-variation-settings.font-weight.forced-color-adjust.gap.glyph-orientation-horizontal.glyph-orientation-vertical.grid.grid-area.grid-auto-columns.grid-auto-flow.grid-auto-rows.grid-column.grid-column-end.grid-column-start.grid-gap.grid-row.grid-row-end.grid-row-start.grid-template.grid-template-areas.grid-template-columns.grid-template-rows.hanging-punctuation.height.hyphenate-character.hyphenate-limit-chars.hyphens.icon.image-orientation.image-rendering.image-resolution.ime-mode.initial-letter.initial-letter-align.inline-size.inset.inset-area.inset-block.inset-block-end.inset-block-start.inset-inline.inset-inline-end.inset-inline-start.isolation.justify-content.justify-items.justify-self.kerning.left.letter-spacing.lighting-color.line-break.line-height.line-height-step.list-style.list-style-image.list-style-position.list-style-type.margin.margin-block.margin-block-end.margin-block-start.margin-bottom.margin-inline.margin-inline-end.margin-inline-start.margin-left.margin-right.margin-top.margin-trim.marker.marker-end.marker-mid.marker-start.marks.mask.mask-border.mask-border-mode.mask-border-outset.mask-border-repeat.mask-border-slice.mask-border-source.mask-border-width.mask-clip.mask-composite.mask-image.mask-mode.mask-origin.mask-position.mask-repeat.mask-size.mask-type.masonry-auto-flow.math-depth.math-shift.math-style.max-block-size.max-height.max-inline-size.max-width.min-block-size.min-height.min-inline-size.min-width.mix-blend-mode.nav-down.nav-index.nav-left.nav-right.nav-up.none.normal.object-fit.object-position.offset.offset-anchor.offset-distance.offset-path.offset-position.offset-rotate.opacity.order.orphans.outline.outline-color.outline-offset.outline-style.outline-width.overflow.overflow-anchor.overflow-block.overflow-clip-margin.overflow-inline.overflow-wrap.overflow-x.overflow-y.overlay.overscroll-behavior.overscroll-behavior-block.overscroll-behavior-inline.overscroll-behavior-x.overscroll-behavior-y.padding.padding-block.padding-block-end.padding-block-start.padding-bottom.padding-inline.padding-inline-end.padding-inline-start.padding-left.padding-right.padding-top.page.page-break-after.page-break-before.page-break-inside.paint-order.pause.pause-after.pause-before.perspective.perspective-origin.place-content.place-items.place-self.pointer-events.position.position-anchor.position-visibility.print-color-adjust.quotes.r.resize.rest.rest-after.rest-before.right.rotate.row-gap.ruby-align.ruby-position.scale.scroll-behavior.scroll-margin.scroll-margin-block.scroll-margin-block-end.scroll-margin-block-start.scroll-margin-bottom.scroll-margin-inline.scroll-margin-inline-end.scroll-margin-inline-start.scroll-margin-left.scroll-margin-right.scroll-margin-top.scroll-padding.scroll-padding-block.scroll-padding-block-end.scroll-padding-block-start.scroll-padding-bottom.scroll-padding-inline.scroll-padding-inline-end.scroll-padding-inline-start.scroll-padding-left.scroll-padding-right.scroll-padding-top.scroll-snap-align.scroll-snap-stop.scroll-snap-type.scroll-timeline.scroll-timeline-axis.scroll-timeline-name.scrollbar-color.scrollbar-gutter.scrollbar-width.shape-image-threshold.shape-margin.shape-outside.shape-rendering.speak.speak-as.src.stop-color.stop-opacity.stroke.stroke-dasharray.stroke-dashoffset.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-opacity.stroke-width.tab-size.table-layout.text-align.text-align-all.text-align-last.text-anchor.text-combine-upright.text-decoration.text-decoration-color.text-decoration-line.text-decoration-skip.text-decoration-skip-ink.text-decoration-style.text-decoration-thickness.text-emphasis.text-emphasis-color.text-emphasis-position.text-emphasis-style.text-indent.text-justify.text-orientation.text-overflow.text-rendering.text-shadow.text-size-adjust.text-transform.text-underline-offset.text-underline-position.text-wrap.text-wrap-mode.text-wrap-style.timeline-scope.top.touch-action.transform.transform-box.transform-origin.transform-style.transition.transition-behavior.transition-delay.transition-duration.transition-property.transition-timing-function.translate.unicode-bidi.user-modify.user-select.vector-effect.vertical-align.view-timeline.view-timeline-axis.view-timeline-inset.view-timeline-name.view-transition-name.visibility.voice-balance.voice-duration.voice-family.voice-pitch.voice-range.voice-rate.voice-stress.voice-volume.white-space.white-space-collapse.widows.width.will-change.word-break.word-spacing.word-wrap.writing-mode.x.y.z-index.zoom".split(".")).sort().reverse();
function Nr(e) {
	let t = e.regex, n = Tr(e), r = { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ }, i = /@-?\w[\w]*(-\w+)*/, a = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE];
	return {
		name: "CSS",
		case_insensitive: !0,
		illegal: /[=|'\$]/,
		keywords: { keyframePosition: "from to" },
		classNameAliases: { keyframePosition: "selector-tag" },
		contains: [
			n.BLOCK_COMMENT,
			r,
			n.CSS_NUMBER_MODE,
			{
				className: "selector-id",
				begin: /#[A-Za-z0-9_-]+/,
				relevance: 0
			},
			{
				className: "selector-class",
				begin: "\\.[a-zA-Z-][a-zA-Z0-9_-]*",
				relevance: 0
			},
			n.ATTRIBUTE_SELECTOR_MODE,
			{
				className: "selector-pseudo",
				variants: [{ begin: ":(" + Ar.join("|") + ")" }, { begin: ":(:)?(" + jr.join("|") + ")" }]
			},
			n.CSS_VARIABLE,
			{
				className: "attribute",
				begin: "\\b(" + Mr.join("|") + ")\\b"
			},
			{
				begin: /:/,
				end: /[;}{]/,
				contains: [
					n.BLOCK_COMMENT,
					n.HEXCOLOR,
					n.IMPORTANT,
					n.CSS_NUMBER_MODE,
					...a,
					{
						begin: /(url|data-uri)\(/,
						end: /\)/,
						relevance: 0,
						keywords: { built_in: "url data-uri" },
						contains: [...a, {
							className: "string",
							begin: /[^)]/,
							endsWithParent: !0,
							excludeEnd: !0
						}]
					},
					n.FUNCTION_DISPATCH
				]
			},
			{
				begin: t.lookahead(/@/),
				end: "[{;]",
				relevance: 0,
				illegal: /:/,
				contains: [{
					className: "keyword",
					begin: i
				}, {
					begin: /\s/,
					endsWithParent: !0,
					excludeEnd: !0,
					relevance: 0,
					keywords: {
						$pattern: /[a-z-]+/,
						keyword: "and or not only",
						attribute: kr.join(" ")
					},
					contains: [
						{
							begin: /[a-z-]+(?=:)/,
							className: "attribute"
						},
						...a,
						n.CSS_NUMBER_MODE
					]
				}]
			},
			{
				className: "selector-tag",
				begin: "\\b(" + Or.join("|") + ")\\b"
			}
		]
	};
}
//#endregion
//#region node_modules/highlight.js/es/languages/json.js
function Pr(e) {
	let t = {
		className: "attr",
		begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/,
		relevance: 1.01
	}, n = {
		match: /[{}[\],:]/,
		className: "punctuation",
		relevance: 0
	}, r = [
		"true",
		"false",
		"null"
	], i = {
		scope: "literal",
		beginKeywords: r.join(" ")
	};
	return {
		name: "JSON",
		aliases: ["jsonc"],
		keywords: { literal: r },
		contains: [
			t,
			n,
			e.QUOTE_STRING_MODE,
			i,
			e.C_NUMBER_MODE,
			e.C_LINE_COMMENT_MODE,
			e.C_BLOCK_COMMENT_MODE
		],
		illegal: "\\S"
	};
}
//#endregion
//#region node_modules/highlight.js/es/languages/bash.js
function Fr(e) {
	let t = e.regex, n = {}, r = {
		begin: /\$\{/,
		end: /\}/,
		contains: ["self", {
			begin: /:-/,
			contains: [n]
		}]
	};
	Object.assign(n, {
		className: "variable",
		variants: [{ begin: t.concat(/\$[\w\d#@][\w\d_]*/, "(?![\\w\\d])(?![$])") }, r]
	});
	let i = {
		className: "subst",
		begin: /\$\(/,
		end: /\)/,
		contains: [e.BACKSLASH_ESCAPE]
	}, a = e.inherit(e.COMMENT(), {
		match: [/(^|\s)/, /#.*$/],
		scope: { 2: "comment" }
	}), o = {
		begin: /<<-?\s*(?=\w+)/,
		starts: { contains: [e.END_SAME_AS_BEGIN({
			begin: /(\w+)/,
			end: /(\w+)/,
			className: "string"
		})] }
	}, s = {
		className: "string",
		begin: /"/,
		end: /"/,
		contains: [
			e.BACKSLASH_ESCAPE,
			n,
			i
		]
	};
	i.contains.push(s);
	let c = { match: /\\"/ }, l = {
		className: "string",
		begin: /'/,
		end: /'/
	}, u = { match: /\\'/ }, d = {
		begin: /\$?\(\(/,
		end: /\)\)/,
		contains: [
			{
				begin: /\d+#[0-9a-f]+/,
				className: "number"
			},
			e.NUMBER_MODE,
			n
		]
	}, f = e.SHEBANG({
		binary: `(${[
			"fish",
			"bash",
			"zsh",
			"sh",
			"csh",
			"ksh",
			"tcsh",
			"dash",
			"scsh"
		].join("|")})`,
		relevance: 10
	}), p = {
		className: "function",
		begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
		returnBegin: !0,
		contains: [e.inherit(e.TITLE_MODE, { begin: /\w[\w\d_]*/ })],
		relevance: 0
	}, m = [
		"if",
		"then",
		"else",
		"elif",
		"fi",
		"time",
		"for",
		"while",
		"until",
		"in",
		"do",
		"done",
		"case",
		"esac",
		"coproc",
		"function",
		"select"
	], h = ["true", "false"], g = { match: /(\/[a-z._-]+)+/ }, _ = [
		"break",
		"cd",
		"continue",
		"eval",
		"exec",
		"exit",
		"export",
		"getopts",
		"hash",
		"pwd",
		"readonly",
		"return",
		"shift",
		"test",
		"times",
		"trap",
		"umask",
		"unset"
	], v = [
		"alias",
		"bind",
		"builtin",
		"caller",
		"command",
		"declare",
		"echo",
		"enable",
		"help",
		"let",
		"local",
		"logout",
		"mapfile",
		"printf",
		"read",
		"readarray",
		"source",
		"sudo",
		"type",
		"typeset",
		"ulimit",
		"unalias"
	], y = /* @__PURE__ */ "autoload.bg.bindkey.bye.cap.chdir.clone.comparguments.compcall.compctl.compdescribe.compfiles.compgroups.compquote.comptags.comptry.compvalues.dirs.disable.disown.echotc.echoti.emulate.fc.fg.float.functions.getcap.getln.history.integer.jobs.kill.limit.log.noglob.popd.print.pushd.pushln.rehash.sched.setcap.setopt.stat.suspend.ttyctl.unfunction.unhash.unlimit.unsetopt.vared.wait.whence.where.which.zcompile.zformat.zftp.zle.zmodload.zparseopts.zprof.zpty.zregexparse.zsocket.zstyle.ztcp".split("."), b = /* @__PURE__ */ "chcon.chgrp.chown.chmod.cp.dd.df.dir.dircolors.ln.ls.mkdir.mkfifo.mknod.mktemp.mv.realpath.rm.rmdir.shred.sync.touch.truncate.vdir.b2sum.base32.base64.cat.cksum.comm.csplit.cut.expand.fmt.fold.head.join.md5sum.nl.numfmt.od.paste.ptx.pr.sha1sum.sha224sum.sha256sum.sha384sum.sha512sum.shuf.sort.split.sum.tac.tail.tr.tsort.unexpand.uniq.wc.arch.basename.chroot.date.dirname.du.echo.env.expr.factor.groups.hostid.id.link.logname.nice.nohup.nproc.pathchk.pinky.printenv.printf.pwd.readlink.runcon.seq.sleep.stat.stdbuf.stty.tee.test.timeout.tty.uname.unlink.uptime.users.who.whoami.yes".split(".");
	return {
		name: "Bash",
		aliases: ["sh", "zsh"],
		keywords: {
			$pattern: /\b[a-z][a-z0-9._-]+\b/,
			keyword: m,
			literal: h,
			built_in: [
				..._,
				...v,
				"set",
				"shopt",
				...y,
				...b
			]
		},
		contains: [
			f,
			e.SHEBANG(),
			p,
			d,
			a,
			o,
			g,
			s,
			c,
			l,
			u,
			n
		]
	};
}
//#endregion
//#region node_modules/highlight.js/es/languages/python.js
function Ir(e) {
	let t = e.regex, n = /[\p{XID_Start}_]\p{XID_Continue}*/u, r = /* @__PURE__ */ "and.as.assert.async.await.break.case.class.continue.def.del.elif.else.except.finally.for.from.global.if.import.in.is.lambda.match.nonlocal|10.not.or.pass.raise.return.try.while.with.yield".split("."), i = {
		$pattern: /[A-Za-z]\w+|__\w+__/,
		keyword: r,
		built_in: /* @__PURE__ */ "__import__.abs.all.any.ascii.bin.bool.breakpoint.bytearray.bytes.callable.chr.classmethod.compile.complex.delattr.dict.dir.divmod.enumerate.eval.exec.filter.float.format.frozenset.getattr.globals.hasattr.hash.help.hex.id.input.int.isinstance.issubclass.iter.len.list.locals.map.max.memoryview.min.next.object.oct.open.ord.pow.print.property.range.repr.reversed.round.set.setattr.slice.sorted.staticmethod.str.sum.super.tuple.type.vars.zip".split("."),
		literal: [
			"__debug__",
			"Ellipsis",
			"False",
			"None",
			"NotImplemented",
			"True"
		],
		type: [
			"Any",
			"Callable",
			"Coroutine",
			"Dict",
			"List",
			"Literal",
			"Generic",
			"Optional",
			"Sequence",
			"Set",
			"Tuple",
			"Type",
			"Union"
		]
	}, a = {
		className: "meta",
		begin: /^(>>>|\.\.\.) /
	}, o = {
		className: "subst",
		begin: /\{/,
		end: /\}/,
		keywords: i,
		illegal: /#/
	}, s = {
		begin: /\{\{/,
		relevance: 0
	}, c = {
		className: "string",
		contains: [e.BACKSLASH_ESCAPE],
		variants: [
			{
				begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
				end: /'''/,
				contains: [e.BACKSLASH_ESCAPE, a],
				relevance: 10
			},
			{
				begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
				end: /"""/,
				contains: [e.BACKSLASH_ESCAPE, a],
				relevance: 10
			},
			{
				begin: /([fF][rR]|[rR][fF]|[fF])'''/,
				end: /'''/,
				contains: [
					e.BACKSLASH_ESCAPE,
					a,
					s,
					o
				]
			},
			{
				begin: /([fF][rR]|[rR][fF]|[fF])"""/,
				end: /"""/,
				contains: [
					e.BACKSLASH_ESCAPE,
					a,
					s,
					o
				]
			},
			{
				begin: /([uU]|[rR])'/,
				end: /'/,
				relevance: 10
			},
			{
				begin: /([uU]|[rR])"/,
				end: /"/,
				relevance: 10
			},
			{
				begin: /([bB]|[bB][rR]|[rR][bB])'/,
				end: /'/
			},
			{
				begin: /([bB]|[bB][rR]|[rR][bB])"/,
				end: /"/
			},
			{
				begin: /([fF][rR]|[rR][fF]|[fF])'/,
				end: /'/,
				contains: [
					e.BACKSLASH_ESCAPE,
					s,
					o
				]
			},
			{
				begin: /([fF][rR]|[rR][fF]|[fF])"/,
				end: /"/,
				contains: [
					e.BACKSLASH_ESCAPE,
					s,
					o
				]
			},
			e.APOS_STRING_MODE,
			e.QUOTE_STRING_MODE
		]
	}, l = "[0-9](_?[0-9])*", u = `(\\b(${l}))?\\.(${l})|\\b(${l})\\.`, d = `\\b|${r.join("|")}`, f = {
		className: "number",
		relevance: 0,
		variants: [
			{ begin: `(\\b(${l})|(${u}))[eE][+-]?(${l})[jJ]?(?=${d})` },
			{ begin: `(${u})[jJ]?` },
			{ begin: `\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${d})` },
			{ begin: `\\b0[bB](_?[01])+[lL]?(?=${d})` },
			{ begin: `\\b0[oO](_?[0-7])+[lL]?(?=${d})` },
			{ begin: `\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${d})` },
			{ begin: `\\b(${l})[jJ](?=${d})` }
		]
	}, p = {
		className: "comment",
		begin: t.lookahead(/# type:/),
		end: /$/,
		keywords: i,
		contains: [{ begin: /# type:/ }, {
			begin: /#/,
			end: /\b\B/,
			endsWithParent: !0
		}]
	}, m = {
		className: "params",
		variants: [{
			className: "",
			begin: /\(\s*\)/,
			skip: !0
		}, {
			begin: /\(/,
			end: /\)/,
			excludeBegin: !0,
			excludeEnd: !0,
			keywords: i,
			contains: [
				"self",
				a,
				f,
				c,
				e.HASH_COMMENT_MODE
			]
		}]
	};
	return o.contains = [
		c,
		f,
		a
	], {
		name: "Python",
		aliases: [
			"py",
			"gyp",
			"ipython"
		],
		unicodeRegex: !0,
		keywords: i,
		illegal: /(<\/|\?)|=>/,
		contains: [
			a,
			f,
			{
				scope: "variable.language",
				match: /\bself\b/
			},
			{
				beginKeywords: "if",
				relevance: 0
			},
			{
				match: /\bor\b/,
				scope: "keyword"
			},
			c,
			p,
			e.HASH_COMMENT_MODE,
			{
				match: [
					/\bdef/,
					/\s+/,
					n
				],
				scope: {
					1: "keyword",
					3: "title.function"
				},
				contains: [m]
			},
			{
				variants: [{ match: [
					/\bclass/,
					/\s+/,
					n,
					/\s*/,
					/\(\s*/,
					n,
					/\s*\)/
				] }, { match: [
					/\bclass/,
					/\s+/,
					n
				] }],
				scope: {
					1: "keyword",
					3: "title.class",
					6: "title.class.inherited"
				}
			},
			{
				className: "meta",
				begin: /^[\t ]*@/,
				end: /(?=#)|$/,
				contains: [
					f,
					m,
					c
				]
			}
		]
	};
}
//#endregion
//#region node_modules/highlight.js/es/languages/java.js
var Lr = "[0-9](_*[0-9])*", Rr = `\\.(${Lr})`, zr = "[0-9a-fA-F](_*[0-9a-fA-F])*", Br = {
	className: "number",
	variants: [
		{ begin: `(\\b(${Lr})((${Rr})|\\.)?|(${Rr}))[eE][+-]?(${Lr})[fFdD]?\\b` },
		{ begin: `\\b(${Lr})((${Rr})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
		{ begin: `(${Rr})[fFdD]?\\b` },
		{ begin: `\\b(${Lr})[fFdD]\\b` },
		{ begin: `\\b0[xX]((${zr})\\.?|(${zr})?\\.(${zr}))[pP][+-]?(${Lr})[fFdD]?\\b` },
		{ begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b" },
		{ begin: `\\b0[xX](${zr})[lL]?\\b` },
		{ begin: "\\b0(_*[0-7])*[lL]?\\b" },
		{ begin: "\\b0[bB][01](_*[01])*[lL]?\\b" }
	],
	relevance: 0
};
function Vr(e, t, n) {
	return n === -1 ? "" : e.replace(t, (r) => Vr(e, t, n - 1));
}
function Hr(e) {
	let t = e.regex, n = "[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*", r = n + Vr("(?:<[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*~~~(?:\\s*,\\s*[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*~~~)*>)?", /~~~/g, 2), i = {
		keyword: /* @__PURE__ */ "synchronized.abstract.private.var.static.if.const .for.while.strictfp.finally.protected.import.native.final.void.enum.else.break.transient.catch.instanceof.volatile.case.assert.package.default.public.try.switch.continue.throws.protected.public.private.module.requires.exports.do.sealed.yield.permits.goto.when".split("."),
		literal: [
			"false",
			"true",
			"null"
		],
		type: [
			"char",
			"boolean",
			"long",
			"float",
			"int",
			"byte",
			"short",
			"double"
		],
		built_in: ["super", "this"]
	}, a = {
		className: "meta",
		begin: "@[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*",
		contains: [{
			begin: /\(/,
			end: /\)/,
			contains: ["self"]
		}]
	}, o = {
		className: "params",
		begin: /\(/,
		end: /\)/,
		keywords: i,
		relevance: 0,
		contains: [e.C_BLOCK_COMMENT_MODE],
		endsParent: !0
	};
	return {
		name: "Java",
		aliases: ["jsp"],
		keywords: i,
		illegal: /<\/|#/,
		contains: [
			e.COMMENT("/\\*\\*", "\\*/", {
				relevance: 0,
				contains: [{
					begin: /\w+@/,
					relevance: 0
				}, {
					className: "doctag",
					begin: "@[A-Za-z]+"
				}]
			}),
			{
				begin: /import java\.[a-z]+\./,
				keywords: "import",
				relevance: 2
			},
			e.C_LINE_COMMENT_MODE,
			e.C_BLOCK_COMMENT_MODE,
			{
				begin: /"""/,
				end: /"""/,
				className: "string",
				contains: [e.BACKSLASH_ESCAPE]
			},
			e.APOS_STRING_MODE,
			e.QUOTE_STRING_MODE,
			{
				match: [
					/\b(?:class|interface|enum|extends|implements|new)/,
					/\s+/,
					n
				],
				className: {
					1: "keyword",
					3: "title.class"
				}
			},
			{
				match: /non-sealed/,
				scope: "keyword"
			},
			{
				begin: [
					t.concat(/(?!else)/, n),
					/\s+/,
					n,
					/\s+/,
					/=(?!=)/
				],
				className: {
					1: "type",
					3: "variable",
					5: "operator"
				}
			},
			{
				begin: [
					/record/,
					/\s+/,
					n
				],
				className: {
					1: "keyword",
					3: "title.class"
				},
				contains: [
					o,
					e.C_LINE_COMMENT_MODE,
					e.C_BLOCK_COMMENT_MODE
				]
			},
			{
				beginKeywords: "new throw return else",
				relevance: 0
			},
			{
				begin: [
					"(?:" + r + "\\s+)",
					e.UNDERSCORE_IDENT_RE,
					/\s*(?=\()/
				],
				className: { 2: "title.function" },
				keywords: i,
				contains: [
					{
						className: "params",
						begin: /\(/,
						end: /\)/,
						keywords: i,
						relevance: 0,
						contains: [
							a,
							e.APOS_STRING_MODE,
							e.QUOTE_STRING_MODE,
							Br,
							e.C_BLOCK_COMMENT_MODE
						]
					},
					e.C_LINE_COMMENT_MODE,
					e.C_BLOCK_COMMENT_MODE
				]
			},
			Br,
			a
		]
	};
}
//#endregion
//#region node_modules/highlight.js/es/languages/sql.js
function Ur(e) {
	let t = e.regex, n = e.COMMENT("--", "$"), r = {
		scope: "string",
		variants: [{
			begin: /'/,
			end: /'/,
			contains: [{ match: /''/ }]
		}]
	}, i = {
		begin: /"/,
		end: /"/,
		contains: [{ match: /""/ }]
	}, a = [
		"true",
		"false",
		"unknown"
	], o = [
		"double precision",
		"large object",
		"with timezone",
		"without timezone"
	], s = /* @__PURE__ */ "bigint.binary.blob.boolean.char.character.clob.date.dec.decfloat.decimal.float.int.integer.interval.nchar.nclob.national.numeric.real.row.smallint.time.timestamp.varchar.varying.varbinary".split("."), c = [
		"add",
		"asc",
		"collation",
		"desc",
		"final",
		"first",
		"last",
		"view"
	], l = /* @__PURE__ */ "abs.acos.all.allocate.alter.and.any.are.array.array_agg.array_max_cardinality.as.asensitive.asin.asymmetric.at.atan.atomic.authorization.avg.begin.begin_frame.begin_partition.between.bigint.binary.blob.boolean.both.by.call.called.cardinality.cascaded.case.cast.ceil.ceiling.char.char_length.character.character_length.check.classifier.clob.close.coalesce.collate.collect.column.commit.condition.connect.constraint.contains.convert.copy.corr.corresponding.cos.cosh.count.covar_pop.covar_samp.create.cross.cube.cume_dist.current.current_catalog.current_date.current_default_transform_group.current_path.current_role.current_row.current_schema.current_time.current_timestamp.current_path.current_role.current_transform_group_for_type.current_user.cursor.cycle.date.day.deallocate.dec.decimal.decfloat.declare.default.define.delete.dense_rank.deref.describe.deterministic.disconnect.distinct.double.drop.dynamic.each.element.else.empty.end.end_frame.end_partition.end-exec.equals.escape.every.except.exec.execute.exists.exp.external.extract.false.fetch.filter.first_value.float.floor.for.foreign.frame_row.free.from.full.function.fusion.get.global.grant.group.grouping.groups.having.hold.hour.identity.in.indicator.initial.inner.inout.insensitive.insert.int.integer.intersect.intersection.interval.into.is.join.json_array.json_arrayagg.json_exists.json_object.json_objectagg.json_query.json_table.json_table_primitive.json_value.lag.language.large.last_value.lateral.lead.leading.left.like.like_regex.listagg.ln.local.localtime.localtimestamp.log.log10.lower.match.match_number.match_recognize.matches.max.member.merge.method.min.minute.mod.modifies.module.month.multiset.national.natural.nchar.nclob.new.no.none.normalize.not.nth_value.ntile.null.nullif.numeric.octet_length.occurrences_regex.of.offset.old.omit.on.one.only.open.or.order.out.outer.over.overlaps.overlay.parameter.partition.pattern.per.percent.percent_rank.percentile_cont.percentile_disc.period.portion.position.position_regex.power.precedes.precision.prepare.primary.procedure.ptf.range.rank.reads.real.recursive.ref.references.referencing.regr_avgx.regr_avgy.regr_count.regr_intercept.regr_r2.regr_slope.regr_sxx.regr_sxy.regr_syy.release.result.return.returns.revoke.right.rollback.rollup.row.row_number.rows.running.savepoint.scope.scroll.search.second.seek.select.sensitive.session_user.set.show.similar.sin.sinh.skip.smallint.some.specific.specifictype.sql.sqlexception.sqlstate.sqlwarning.sqrt.start.static.stddev_pop.stddev_samp.submultiset.subset.substring.substring_regex.succeeds.sum.symmetric.system.system_time.system_user.table.tablesample.tan.tanh.then.time.timestamp.timezone_hour.timezone_minute.to.trailing.translate.translate_regex.translation.treat.trigger.trim.trim_array.true.truncate.uescape.union.unique.unknown.unnest.update.upper.user.using.value.values.value_of.var_pop.var_samp.varbinary.varchar.varying.versioning.when.whenever.where.width_bucket.window.with.within.without.year".split("."), u = /* @__PURE__ */ "abs.acos.array_agg.asin.atan.avg.cast.ceil.ceiling.coalesce.corr.cos.cosh.count.covar_pop.covar_samp.cume_dist.dense_rank.deref.element.exp.extract.first_value.floor.json_array.json_arrayagg.json_exists.json_object.json_objectagg.json_query.json_table.json_table_primitive.json_value.lag.last_value.lead.listagg.ln.log.log10.lower.max.min.mod.nth_value.ntile.nullif.percent_rank.percentile_cont.percentile_disc.position.position_regex.power.rank.regr_avgx.regr_avgy.regr_count.regr_intercept.regr_r2.regr_slope.regr_sxx.regr_sxy.regr_syy.row_number.sin.sinh.sqrt.stddev_pop.stddev_samp.substring.substring_regex.sum.tan.tanh.translate.translate_regex.treat.trim.trim_array.unnest.upper.value_of.var_pop.var_samp.width_bucket".split("."), d = [
		"current_catalog",
		"current_date",
		"current_default_transform_group",
		"current_path",
		"current_role",
		"current_schema",
		"current_transform_group_for_type",
		"current_user",
		"session_user",
		"system_time",
		"system_user",
		"current_time",
		"localtime",
		"current_timestamp",
		"localtimestamp"
	], f = [
		"create table",
		"insert into",
		"primary key",
		"foreign key",
		"not null",
		"alter table",
		"add constraint",
		"grouping sets",
		"on overflow",
		"character set",
		"respect nulls",
		"ignore nulls",
		"nulls first",
		"nulls last",
		"depth first",
		"breadth first"
	], p = u, m = [...l, ...c].filter((e) => !u.includes(e)), h = {
		scope: "variable",
		match: /@[a-z0-9][a-z0-9_]*/
	}, g = {
		scope: "operator",
		match: /[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,
		relevance: 0
	}, _ = {
		match: t.concat(/\b/, t.either(...p), /\s*\(/),
		relevance: 0,
		keywords: { built_in: p }
	};
	function v(e) {
		return t.concat(/\b/, t.either(...e.map((e) => e.replace(/\s+/, "\\s+"))), /\b/);
	}
	let y = {
		scope: "keyword",
		match: v(f),
		relevance: 0
	};
	function b(e, { exceptions: t, when: n } = {}) {
		let r = n;
		return t ||= [], e.map((e) => e.match(/\|\d+$/) || t.includes(e) ? e : r(e) ? `${e}|0` : e);
	}
	return {
		name: "SQL",
		case_insensitive: !0,
		illegal: /[{}]|<\//,
		keywords: {
			$pattern: /\b[\w\.]+/,
			keyword: b(m, { when: (e) => e.length < 3 }),
			literal: a,
			type: s,
			built_in: d
		},
		contains: [
			{
				scope: "type",
				match: v(o)
			},
			y,
			_,
			h,
			r,
			i,
			e.C_NUMBER_MODE,
			e.C_BLOCK_COMMENT_MODE,
			n,
			g
		]
	};
}
ir.registerLanguage("javascript", pr), ir.registerLanguage("typescript", Cr), ir.registerLanguage("xml", wr), ir.registerLanguage("css", Nr), ir.registerLanguage("json", Pr), ir.registerLanguage("bash", Fr), ir.registerLanguage("python", Ir), ir.registerLanguage("java", Hr), ir.registerLanguage("sql", Ur);
var Wr = {
	js: "javascript",
	ts: "typescript",
	html: "xml",
	sh: "bash",
	shell: "bash",
	py: "python",
	yml: "yaml"
}, Gr = /* @__PURE__ */ new WeakMap(), Kr = new K.Renderer();
Kr.code = ({ text: e, lang: t }) => {
	let n = (t || "").trim().toLowerCase(), r = Wr[n] || n, i, a;
	if (r && ir.getLanguage(r)) i = ir.highlight(e, { language: r }).value, a = `language-${r}`;
	else {
		let t = ir.highlightAuto(e);
		i = t.value, a = t.language ? `language-${t.language}` : "language-plaintext";
	}
	return `<pre><code class="hljs ${a}" data-raw-code="${encodeURIComponent(e)}">${i}</code></pre>`;
}, K.setOptions({
	renderer: Kr,
	breaks: !1,
	gfm: !0
});
var qr = {
	USE_PROFILES: { html: !0 },
	ADD_ATTR: ["data-raw-code"]
};
function Jr(e) {
	return e == null || e === "" ? "" : rr.sanitize(K.parse(String(e)), qr);
}
function Yr(e, t) {
	e.innerHTML = Jr(t);
	let n = e.querySelectorAll("code[data-raw-code]");
	for (let e of n) {
		let t = e.getAttribute("data-raw-code");
		Gr.set(e, decodeURIComponent(t)), e.removeAttribute("data-raw-code"), Xr(e);
	}
}
function Xr(e) {
	let t = e.parentElement;
	if (!t || t.tagName !== "PRE" || t.querySelector(".lc-code-copy")) return;
	let n = document.createElement("button");
	n.type = "button", n.className = "lc-code-copy", n.setAttribute("aria-label", "Copier le code"), n.textContent = "Copier", n.addEventListener("click", async () => {
		let t = Zr(e);
		if (t !== null) {
			try {
				await navigator.clipboard.writeText(t), n.textContent = "Copié!";
			} catch {
				n.textContent = "Échec";
			}
			setTimeout(() => {
				n.textContent = "Copier";
			}, 1500);
		}
	}), t.appendChild(n);
}
function Zr(e) {
	return Gr.has(e) ? Gr.get(e) : null;
}
//#endregion
//#region src/ui/tool-labels.js
var Qr = {
	grep: {
		label: "Recherche par motif",
		icon: "search"
	},
	searchInDataset: {
		label: "Recherche sémantique",
		icon: "search"
	},
	searchInDocument: {
		label: "Recherche dans le document",
		icon: "search"
	},
	listFolders: {
		label: "Lister les dossiers",
		icon: "database"
	},
	findFolders: {
		label: "Rechercher des dossiers",
		icon: "database"
	},
	listDocuments: {
		label: "Lister les documents",
		icon: "document"
	},
	findDocuments: {
		label: "Rechercher des documents",
		icon: "document"
	},
	readDocument: {
		label: "Lire un document",
		icon: "document"
	}
};
function $r(e) {
	return Qr[e] && Qr[e].label || e || "Outil";
}
function ei(e) {
	return P(Qr[e] && Qr[e].icon || "tool", { size: 16 });
}
//#endregion
//#region src/ui/chat.js
var ti = /<rag_context>[\s\S]*?<\/rag_context>/gi, ni = /\[Source\s+(\d+)\]/g;
function ri(e) {
	return String(e || "").replace(ti, "").trim();
}
var ii = class {
	constructor(e, { onCitation: t, onFeedback: n } = {}) {
		this.host = e, this.onCitation = t || (() => {}), this.onFeedback = n || null, this.list = D("div", {
			class: "lc-thread",
			part: "thread"
		}), k(e), e.appendChild(this.list), this.current = null, this.buffer = "", this.rafId = 0, this.sources = [];
	}
	addUserMessage(e) {
		let t = D("div", {
			class: "lc-msg lc-msg--user",
			part: "message-user"
		}, [D("div", { class: "lc-msg__body" }, e)]);
		this.list.appendChild(t), this.scroll();
	}
	startBotMessage() {
		let e = D("div", {
			class: "lc-msg__notifs",
			part: "notifications"
		}), t = D("div", {
			class: "lc-msg__body",
			part: "message-bot-body",
			"aria-live": "polite"
		}), n = D("div", {
			class: "lc-typing",
			"aria-hidden": "true"
		}, [
			D("span", {}, ""),
			D("span", {}, ""),
			D("span", {}, "")
		]), r = D("div", {
			class: "lc-msg lc-msg--bot",
			part: "message-bot",
			"aria-busy": "true"
		}, [
			e,
			t,
			n
		]);
		this.list.appendChild(r), this.current = {
			bubble: r,
			notifs: e,
			body: t,
			typing: n,
			tools: /* @__PURE__ */ new Map()
		}, this.buffer = "", this.sources = [], this.scroll();
	}
	onSseEvent(e, t) {
		switch (e) {
			case "DATASETS_ROUTED":
				this.renderDatasets(t.datasets || []);
				break;
			case "BOT_TOKEN_STREAMED":
				this.appendToken(t.token || "");
				break;
			case "BOT_BUILTIN_TOOL_STARTED":
				this.upsertTool("tool", t, "running");
				break;
			case "BOT_BUILTIN_TOOL_COMPLETED":
				this.upsertTool("tool", t, "done");
				break;
			case "BOT_BUILTIN_TOOL_FAILED":
				this.upsertTool("tool", t, "failed");
				break;
			case "BOT_TOOL_PIPELINE_STARTED":
				this.upsertTool("pipeline-tool", t, "running");
				break;
			case "BOT_TOOL_PIPELINE_COMPLETED":
				this.upsertTool("pipeline-tool", t, "done");
				break;
			case "BOT_TOOL_PIPELINE_FAILED":
				this.upsertTool("pipeline-tool", t, "failed");
				break;
			case "BOT_SOURCES_RETRIEVED":
				this.sources = t.sources || [], this.scheduleFlush();
				break;
			case "BOT_STREAM_ERROR":
				this.renderError(t.errorMessage || "Erreur de génération.", t.errorDetails);
				break;
			case "error":
				this.renderError(t.error || "Erreur.", null);
				break;
			default: break;
		}
	}
	renderDatasets(e) {
		if (!this.current || e.length === 0) return;
		let t = e.map((e) => e.name).filter(Boolean), n = D("div", {
			class: "lc-notif__details",
			hidden: !0
		}, D("ul", { class: "lc-notif__dataset-list" }, t.map((e) => D("li", {}, e)))), r = D("button", {
			type: "button",
			class: "lc-notif__toggle",
			"aria-expanded": "false"
		}, [
			P("database", { size: 16 }),
			D("span", {}, `Recherche dans : ${t.join(", ")}`),
			P("chevron", { size: 14 })
		]);
		r.addEventListener("click", () => {
			let e = n.hidden;
			n.hidden = !e, r.setAttribute("aria-expanded", e ? "true" : "false");
		});
		let i = D("div", {
			class: "lc-notif lc-notif--datasets",
			part: "notif-datasets",
			role: "status"
		}, [r, n]);
		this.current.notifs.appendChild(i), this.scroll();
	}
	upsertTool(e, t, n) {
		if (!this.current) return;
		let r = `${e}:${t.toolName}`, i = this.current.tools.get(r);
		i || (i = this.buildToolNotif(e, t), this.current.tools.set(r, i), this.current.notifs.appendChild(i.notif)), i.notif.dataset.status = n, i.statusLabel.textContent = n === "running" ? "…" : n === "failed" ? "échec" : "terminé";
		let a = n === "failed" ? t.errorMessage : n === "done" ? t.resultPreview : t.toolArgs;
		this.fillDetails(i.details, a), this.scroll();
	}
	buildToolNotif(e, t) {
		let n = $r(t.toolName), r = D("span", { class: "lc-notif__status" }, "…"), i = D("span", {
			class: "lc-notif__spinner",
			"aria-hidden": "true"
		}), a = D("div", {
			class: "lc-notif__details",
			hidden: !0
		}), o = D("button", {
			type: "button",
			class: "lc-notif__toggle",
			"aria-expanded": "false"
		}, [
			e === "pipeline-tool" ? P("tool", { size: 16 }) : ei(t.toolName),
			D("span", {}, n),
			i,
			r,
			P("chevron", { size: 14 })
		]);
		return o.addEventListener("click", () => {
			let e = a.hidden;
			a.hidden = !e, o.setAttribute("aria-expanded", e ? "true" : "false");
		}), {
			notif: D("div", {
				class: `lc-notif lc-notif--${e}`,
				part: `notif-${e}`,
				role: "status",
				"data-status": "running"
			}, [o, a]),
			statusLabel: r,
			details: a
		};
	}
	fillDetails(e, t) {
		k(e), !(t == null || t === "") && e.appendChild(D("pre", { class: "lc-notif__pre" }, String(t)));
	}
	appendToken(e) {
		this.current || this.startBotMessage(), this.current.typing && (this.current.typing.remove(), this.current.typing = null), this.buffer += e, this.scheduleFlush();
	}
	scheduleFlush() {
		this.rafId || !this.current || (this.rafId = requestAnimationFrame(() => {
			this.rafId = 0, this.flush();
		}));
	}
	flush() {
		this.current && (Yr(this.current.body, this.buffer), this.current.body.classList.add("lc-msg__body--streaming"), this.upgradeCitations(this.current.body), this.current.body.appendChild(D("span", {
			class: "lc-caret",
			"aria-hidden": "true"
		}, "●")), this.scroll());
	}
	upgradeCitations(e) {
		let t = document.createTreeWalker(e, NodeFilter.SHOW_TEXT), n = [];
		for (let e = t.nextNode(); e; e = t.nextNode()) e.parentElement && e.parentElement.closest("button.lc-citation") || (ni.test(e.nodeValue) && n.push(e), ni.lastIndex = 0);
		for (let e of n) this.replaceCitations(e);
	}
	replaceCitations(e) {
		let t = e.nodeValue, n = document.createDocumentFragment(), r = 0, i;
		for (ni.lastIndex = 0; (i = ni.exec(t)) !== null;) i.index > r && n.appendChild(document.createTextNode(t.slice(r, i.index))), n.appendChild(this.citationButton(i[1])), r = i.index + i[0].length;
		r < t.length && n.appendChild(document.createTextNode(t.slice(r))), e.parentNode.replaceChild(n, e);
	}
	citationButton(e) {
		let t = this.sources.find((t) => String(t.source_number) === String(e)) || { source_number: e };
		return D("button", {
			type: "button",
			class: "lc-citation",
			part: "citation",
			"aria-label": `Voir la source ${e}`,
			onClick: () => this.onCitation(t)
		}, `Source ${e}`);
	}
	finishBotMessage() {
		if (!this.current) return;
		this.rafId &&= (cancelAnimationFrame(this.rafId), 0), this.flush(), this.current.body.classList.remove("lc-msg__body--streaming");
		let e = this.current.body.querySelector(".lc-caret");
		e && e.remove(), this.current.bubble.setAttribute("aria-busy", "false"), this.current.typing && (this.current.typing.remove(), this.current.typing = null), this.current = null, this.buffer = "";
	}
	renderError(e, t) {
		t && console.error("lutece-chat stream error:", t), this.rafId &&= (cancelAnimationFrame(this.rafId), 0);
		let n = D("div", {
			class: "lc-msg lc-msg--error",
			part: "message-error",
			role: "alert"
		}, e);
		this.current ? (this.current.typing && (this.current.typing.remove(), this.current.typing = null), this.current.bubble.setAttribute("aria-busy", "false"), this.current.bubble.appendChild(n), this.current = null) : this.list.appendChild(n), this.buffer = "", this.scroll();
	}
	renderHistory(e) {
		k(this.list);
		for (let t of e || []) if (t.role === "user") this.addUserMessage(ri(t.message));
		else {
			let e = D("div", { class: "lc-msg__body" });
			Yr(e, t.message || ""), this.sources = [], this.upgradeCitations(e);
			let n = D("div", {
				class: "lc-msg lc-msg--bot",
				part: "message-bot",
				"data-message-id": t.id == null ? "" : String(t.id)
			}, e);
			this.list.appendChild(n);
		}
		this.scroll();
	}
	attachCopyButton(e) {
		if (!e || e.querySelector(".lc-msg__copy")) return;
		let t = e.querySelector(".lc-msg__body");
		if (!t) return;
		let n = D("button", {
			type: "button",
			class: "lc-msg__copy",
			"aria-label": "Copier le message"
		}, [P("copy", { size: 16 })]);
		n.addEventListener("click", () => {
			let e = t.cloneNode(!0);
			e.querySelectorAll("pre, .lc-caret").forEach((e) => e.remove());
			let r = e.textContent.trim();
			Promise.resolve(navigator.clipboard && navigator.clipboard.writeText(r)).then(() => {
				n.classList.add("is-copied"), setTimeout(() => n.classList.remove("is-copied"), 1500);
			});
		}), this.actionsRow(e).appendChild(n);
	}
	actionsRow(e) {
		let t = e.querySelector(".lc-msg__actions");
		return t || (t = D("div", { class: "lc-msg__actions" }), e.insertBefore(t, e.querySelector(".lc-msg__disclaimer"))), t;
	}
	updateDisclaimers() {
		let e = [...this.list.querySelectorAll(".lc-msg--bot")];
		e.forEach((t, n) => {
			let r = t.querySelector(".lc-msg__disclaimer"), i = n === e.length - 1;
			i && !r ? t.appendChild(D("div", { class: "lc-msg__disclaimer" }, "Les assistants peuvent faire des erreurs.")) : !i && r && r.remove();
		});
	}
	scrollParent() {
		let e = this.host;
		for (; e && e.nodeType === 1;) {
			let t = e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e) : null, n = t ? t.overflowY : "";
			if ((n === "auto" || n === "scroll") && e.scrollHeight > e.clientHeight) return e;
			e = e.parentElement;
		}
		return this.host;
	}
	scroll() {
		requestAnimationFrame(() => {
			let e = this.scrollParent();
			e.scrollTop = e.scrollHeight;
		});
	}
	destroy() {
		this.rafId &&= (cancelAnimationFrame(this.rafId), 0);
	}
};
//#endregion
//#region src/ui/sources.js
function ai(e, { source: t, onOpenDocument: n, trigger: r, signal: i } = {}) {
	let a = D("button", {
		type: "button",
		class: "lc-source__open-doc",
		onClick: () => n(t)
	}, [P("document", { size: 16 }), D("span", {}, "Voir le document complet")]), o = D("div", { class: "lc-source" }, [
		t.dataset_name ? D("div", { class: "lc-source__dataset" }, `Dataset : ${t.dataset_name}`) : null,
		D("div", { class: "lc-source__text" }, t.text || ""),
		a
	]);
	return M(e, {
		title: t.document_name || "Source",
		body: o,
		trigger: r,
		signal: i
	});
}
function oi({ filename: e, contentType: t, text: n, url: r }) {
	let i = (t || "").toLowerCase(), a = D("div", {
		class: "lc-docview",
		part: "docview"
	});
	if (i.includes("markdown")) {
		let e = D("div", { class: "lc-docview__md" });
		e.innerHTML = Jr(n || ""), a.appendChild(e);
	} else if (i.includes("pdf")) {
		let t = D("iframe", {
			class: "lc-docview__pdf",
			title: e || "Document",
			sandbox: "allow-same-origin"
		});
		t.src = r, a.appendChild(t);
	} else a.appendChild(D("pre", { class: "lc-docview__text" }, n || ""));
	let o = D("a", {
		class: "lc-docview__download",
		href: r,
		download: "",
		rel: "noopener"
	}, [P("document", { size: 16 }), D("span", {}, e || "Télécharger")]);
	return a.appendChild(o), a;
}
function si(e, { filename: t, contentType: n, text: r, url: i, trigger: a, signal: o } = {}) {
	let s = oi({
		filename: t,
		contentType: n,
		text: r,
		url: i
	});
	return M(e, {
		title: t || "Document",
		body: s,
		trigger: a,
		signal: o
	});
}
//#endregion
//#region src/lutece-chat.js
var ci = new CSSStyleSheet();
ci.replaceSync(l);
var li = 0;
function ui(e) {
	switch (e) {
		case "UNAUTHORIZED": return "unauthorized";
		case "FORBIDDEN": return "forbidden";
		case "RATE_LIMITED": return "rate-limited";
		default: return "unavailable";
	}
}
var di = class extends HTMLElement {
	static get observedAttributes() {
		return ["bot-id", "dark-mode"];
	}
	constructor() {
		super(), this.attachShadow({ mode: "open" }), this.internals = this.attachInternals ? this.attachInternals() : null, this._instanceId = `i${li += 1}`, this._initialized = !1, this._abortController = null, this._streamController = null, this._rafId = 0, this._endpoints = null, this._sidebar = null, this._customCSS = null, this._customSheet = null, this._panelOpen = !1, this._fabEl = null, this._panelEl = null, this._api = null, this._store = new te({ state: ee.IDLE }), this._bots = [], this._currentBot = null, this._conversationUuid = null, this._thread = null, this._headerContext = null, this._openModals = /* @__PURE__ */ new Set(), this._sidebarOpen = !1, this._sidebarOverlayEl = null, this._user = null, this._rates = [], this._userMenu = null;
	}
	connectedCallback() {
		this._initialized || (this._initialized = !0, this.shadowRoot.adoptedStyleSheets = [ci], this._customCSS && this.applyCustomCss(this._customCSS), this.upgradeProperty("botId"), this.upgradeProperty("darkMode"), this.restoreTheme(), this._abortController = new AbortController(), window.addEventListener("resize", this.handleResize), document.addEventListener("keydown", this.handleKeydown), this.buildApi(), this.renderShell(), this.loadUser().finally(() => this.loadGallery()));
	}
	disconnectedCallback() {
		this.abortStream(), this._abortController &&= (this._abortController.abort(), null), this._rafId &&= (cancelAnimationFrame(this._rafId), 0), this._thread && this._thread.destroy(), this._userMenu &&= (this._userMenu.destroy(), null), this.closeModals(), window.removeEventListener("resize", this.handleResize), document.removeEventListener("keydown", this.handleKeydown), this._initialized = !1;
	}
	attributeChangedCallback(e, t, n) {
		t === n || !this._initialized || (e === "bot-id" ? this.routeToBot(n) : e === "dark-mode" && this.reflectTheme());
	}
	upgradeProperty(e) {
		if (Object.prototype.hasOwnProperty.call(this, e)) {
			let t = this[e];
			delete this[e], this[e] = t;
		}
	}
	get botId() {
		return this.getAttribute("bot-id");
	}
	set botId(e) {
		e == null ? this.removeAttribute("bot-id") : this.setAttribute("bot-id", String(e));
	}
	get darkMode() {
		return this.hasAttribute("dark-mode");
	}
	set darkMode(e) {
		e ? this.setAttribute("dark-mode", "") : this.removeAttribute("dark-mode");
		try {
			localStorage.setItem(this.themeStorageKey(), e ? "1" : "0");
		} catch {}
	}
	themeStorageKey() {
		return `lutece-chat:${this.getAttribute("storage-key") || this.getAttribute("container") || this.getAttribute("bot-id") || "default"}:dark-mode`;
	}
	restoreTheme() {
		if (this.hasAttribute("dark-mode")) return;
		let e = null;
		try {
			e = localStorage.getItem(this.themeStorageKey());
		} catch {
			e = null;
		}
		e === "1" && this.setAttribute("dark-mode", "");
	}
	get endpoints() {
		return this._endpoints;
	}
	set endpoints(e) {
		this._endpoints = e, this._initialized && this.buildApi();
	}
	get sidebar() {
		return this._sidebar;
	}
	set sidebar(e) {
		this._sidebar = e;
	}
	get customCSS() {
		return this._customCSS;
	}
	set customCSS(e) {
		this._customCSS = e, this._initialized && this.applyCustomCss(e);
	}
	applyCustomCss(e) {
		this._customSheet || (this._customSheet = new CSSStyleSheet(), this.shadowRoot.adoptedStyleSheets = [ci, this._customSheet]), this._customSheet.replaceSync(e || "");
	}
	reflectTheme() {
		this._headerContext && this.renderHeaderFor(this._headerContext);
	}
	buildApi() {
		let e = this._endpoints || {}, t = new f({
			origin: e.origin,
			base: e.base
		});
		this._api = new p(t);
	}
	get signal() {
		return this._abortController ? this._abortController.signal : void 0;
	}
	startStream() {
		return this.abortStream(), this._streamController = new AbortController(), this._streamController.signal;
	}
	abortStream() {
		this._streamController &&= (this._streamController.abort(), null);
	}
	get floating() {
		return this.hasAttribute("floating");
	}
	renderShell() {
		k(this.shadowRoot), this._headerEl = D("div", { class: "lc-header-slot" }), this._sidebarEl = D("div", { class: "lc-sidebar-slot" }), this._mainEl = D("div", {
			class: "lc-scroll",
			part: "main"
		}), this._composerEl = D("div", { class: "lc-composer-slot" }), this._modalLayer = D("div", { class: "lc-modal-layer" }), this._sidebarOverlayEl = D("div", {
			class: "lc-sidebar-overlay",
			part: "overlay",
			"aria-hidden": "true",
			onClick: () => this.setSidebarOpen(!1)
		});
		let e = D("div", { class: "lc-main" }, [this._mainEl, this._composerEl]), t = D("div", { class: "lc-content" }, [this._headerEl, e]), n = D("div", {
			class: "lc-root",
			part: "root"
		}, [
			this._sidebarEl,
			this._sidebarOverlayEl,
			t,
			this._modalLayer
		]);
		this.floating ? this.renderFloatingShell(n) : this.shadowRoot.appendChild(n);
	}
	renderFloatingShell(e) {
		let t = this.getAttribute("closable") === "false";
		this._panelOpen = t, this._panelEl = D("div", {
			class: "lc-panel",
			part: "panel"
		}, e), this._panelEl.hidden = !this._panelOpen, this.shadowRoot.appendChild(this._panelEl), t || (this._fabEl = D("button", {
			type: "button",
			class: "lc-fab",
			part: "fab",
			"aria-label": "Ouvrir le chat",
			"aria-expanded": "false",
			onClick: () => this.togglePanel()
		}, P("message", { size: 26 })), this.shadowRoot.appendChild(this._fabEl));
	}
	togglePanel() {
		this.setPanelOpen(!this._panelOpen);
	}
	setPanelOpen(e) {
		this._panelOpen = e, this._panelEl && (this._panelEl.hidden = !e), this._fabEl && this._fabEl.setAttribute("aria-expanded", String(e));
	}
	async loadUser() {
		try {
			this._user = await this._api.getUser();
		} catch {
			this._user = null;
		}
		try {
			let e = await this._api.getRateLimits();
			this._rates = Array.isArray(e) ? e : [];
		} catch {
			this._rates = [];
		}
	}
	async loadGallery() {
		try {
			let e = await this._api.listBots();
			if (this._bots = Array.isArray(e) ? e : [], this._bots.length === 0) {
				this.showError("empty");
				return;
			}
			let t = this.readUrlState();
			this.botId ? this.routeToBot(this.botId) : t.bot ? this.routeToBot(t.bot, t.conv) : this.showGallery();
		} catch (e) {
			this.showError(ui(e.code));
		}
	}
	readUrlState() {
		try {
			let e = new URLSearchParams(window.location.search);
			return {
				bot: e.get("lc-bot"),
				conv: e.get("lc-conv")
			};
		} catch {
			return {
				bot: null,
				conv: null
			};
		}
	}
	writeUrlState({ bot: e, conv: t }) {
		if (!(typeof window > "u" || !window.history || !window.history.replaceState)) try {
			let n = new URL(window.location.href);
			this.setOrDelete(n.searchParams, "lc-bot", e), this.setOrDelete(n.searchParams, "lc-conv", t), window.history.replaceState(window.history.state, "", n.toString());
		} catch {}
	}
	setOrDelete(e, t, n) {
		n == null || n === "" ? e.delete(t) : e.set(t, String(n));
	}
	showError(e) {
		k(this._headerEl), k(this._sidebarEl), k(this._composerEl), ge(this._mainEl, {
			kind: e,
			onRetry: () => this.loadGallery()
		});
	}
	showGallery() {
		this.abortStream(), this._currentBot = null, this._conversationUuid = null, this._thread = null, this._sidebarOpen = !1, this.reflectSidebar(), k(this._sidebarEl), k(this._composerEl), this.writeUrlState({
			bot: null,
			conv: null
		}), this.renderHeaderFor({
			explore: !0,
			title: "Assistant"
		}), ce(this._mainEl, {
			bots: this._bots,
			firstName: this._user && this._user.firstName || this._endpoints && this._endpoints.firstName,
			onBot: (e) => this.openBot(e)
		});
	}
	renderHeaderFor({ explore: e, title: t }) {
		this._headerContext = {
			explore: e,
			title: t
		};
		let n = this.getAttribute("show-bot-list") !== "false";
		re(this._headerEl, {
			title: t,
			showBack: !e && n,
			showExplore: !e && n,
			showMenu: !e,
			showThemeToggle: this.getAttribute("show-theme-toggle") !== "false",
			darkMode: this.darkMode,
			showFullscreen: this.floating,
			fullscreen: this.hasAttribute("fullscreen"),
			sidebarOpen: this._sidebarOpen,
			closable: this.getAttribute("closable") !== "false" && this.floating,
			onBack: () => this.showGallery(),
			onExplore: () => this.showGallery(),
			onMenu: () => this.toggleSidebar(),
			onTheme: () => {
				this.darkMode = !this.darkMode;
			},
			onFullscreen: () => this.toggleFullscreen(),
			onClose: () => this.close()
		}), this.renderUserMenuIntoHeader();
	}
	renderUserMenuIntoHeader() {
		if (this._userMenu &&= (this._userMenu.destroy(), null), !this._user) return;
		let e = this._headerEl.querySelector(".lc-hd__right");
		e && (this._userMenu = be(e, {
			user: this._user,
			bots: this._bots,
			rates: this._rates
		}));
	}
	routeToBot(e, t) {
		if (!this._api) return;
		let n = this._bots.find((t) => String(t.id) === String(e));
		n ? (this.openBot(n), t && this.openConversation({ conversationUuid: t })) : this._bots.length > 0 && this.showGallery();
	}
	openBot(e) {
		this.abortStream(), this._currentBot = e, this._conversationUuid = null, this._sidebarOpen = this.sidebarOpensByDefault(), this.reflectSidebar(), this.renderHeaderFor({
			explore: !1,
			title: e.botName || "Assistant"
		}), this._thread = new ii(this._mainEl, {
			onCitation: (e) => this.openSource(e),
			onFeedback: (e, t) => this.sendFeedback(e, t)
		}), this.renderComposer(), this.loadConversations(), this.renderWelcome(e), this.writeUrlState({
			bot: e.id,
			conv: null
		});
	}
	renderWelcome(e) {
		this._thread.list.appendChild(this.buildWelcomeHero(e)), e.welcomeMessage && this._thread.list.appendChild(D("div", {
			class: "lc-msg lc-msg--bot",
			part: "message-bot"
		}, [D("div", { class: "lc-msg__body" }, e.welcomeMessage)]));
	}
	buildWelcomeHero(e) {
		let t = e.botName || "Assistant", n = e.botDescription || "", r = I(e.logoBase64), i;
		return r ? i = D("div", {
			class: "lc-welcome__avatar",
			part: "welcome-avatar"
		}, D("img", {
			src: r,
			alt: ""
		})) : (i = D("div", {
			class: "lc-welcome__avatar",
			part: "welcome-avatar"
		}, ae(t)), i.style.background = oe(t)), D("div", {
			class: "lc-welcome",
			part: "welcome"
		}, [
			i,
			D("h2", { class: "lc-welcome__title" }, t),
			D("p", {
				class: "lc-welcome__desc",
				hidden: !n
			}, n)
		]);
	}
	newConversation() {
		this._currentBot && (this.abortStream(), this._conversationUuid = null, this._thread = new ii(this._mainEl, {
			onCitation: (e) => this.openSource(e),
			onFeedback: (e, t) => this.sendFeedback(e, t)
		}), this.renderComposer(), this.renderWelcome(this._currentBot), this.loadConversations(), this.writeUrlState({
			bot: this._currentBot.id,
			conv: null
		}));
	}
	renderComposer() {
		k(this._composerEl);
		let e = D("textarea", {
			rows: "1",
			placeholder: "Poser une question...",
			"aria-label": "Votre message"
		}), t = D("button", {
			type: "button",
			class: "lc-composer__send",
			"aria-label": "Envoyer"
		}, P("send", { size: 18 })), n = () => {
			if (this._sendBtn && this._sendBtn.disabled) return;
			let t = e.value.trim();
			t && (e.value = "", e.style.height = "auto", this.sendMessage(t));
		};
		e.addEventListener("keydown", (e) => {
			e.key === "Enter" && !e.shiftKey && (e.preventDefault(), n());
		}), e.addEventListener("input", () => {
			e.style.height = "auto", e.style.height = `${Math.min(300, Math.max(60, e.scrollHeight))}px`;
		}), t.addEventListener("click", n), this._sendBtn = t, this._newConvBtn = D("button", {
			type: "button",
			class: "lc-new-conv",
			"aria-label": "Nouvelle conversation",
			hidden: !0,
			onClick: () => this.newConversation()
		}, [P("plus", { size: 16 }), D("span", {}, "Nouvelle conversation")]);
		let r = D("div", { class: "lc-input-actions" }, D("div", { class: "lc-actions-container" }, [this._newConvBtn])), i = D("div", {
			class: "lc-composer",
			part: "composer"
		}, [D("div", { class: "lc-composer__inner" }, [e, t]), r]);
		this._composerEl.appendChild(D("div", {
			class: "lc-input",
			part: "input"
		}, i));
	}
	showNewConvButton() {
		this._newConvBtn && (this._newConvBtn.hidden = !1);
	}
	async sendMessage(e) {
		let t = this._currentBot, n = this._thread, r = this._sendBtn, i = this.startStream();
		n.addUserMessage(e), n.startBotMessage(), this.showNewConvButton(), r && (r.disabled = !0), this.emit("message-sent", {
			botId: t.id,
			conversationUuid: this._conversationUuid,
			text: e
		});
		try {
			let r = await this._api.openStream({
				botId: t.id,
				query: e,
				conversationUuid: this._conversationUuid || void 0
			}, i);
			if (!r.ok) throw await this.readStreamError(r);
			await y({
				response: r,
				signal: i,
				onEvent: (e, t) => {
					this._thread === n && n.onSseEvent(e, t);
				},
				onTerminal: (e, r) => {
					this._thread === n && this.onStreamTerminal(e, r, t, n);
				}
			});
		} catch (e) {
			this._thread === n && this.onStreamError(e, n);
		} finally {
			r && this._sendBtn === r && (r.disabled = !1);
		}
	}
	async readStreamError(e) {
		let t = "";
		try {
			let n = await e.json();
			t = n.message || n.errorCode || "";
		} catch {}
		let n = Error(t || `HTTP ${e.status}`);
		return n.code = u(e.status), n.status = e.status, n;
	}
	onStreamTerminal(e, t, n, r) {
		if (e === "BOT_STREAM_COMPLETED") {
			this._conversationUuid = t.conversationUuid || this._conversationUuid, r.finishBotMessage(), r.updateDisclaimers();
			let e = [...this._mainEl.querySelectorAll(".lc-msg--bot")].pop();
			e && r.attachCopyButton(e), this.writeUrlState({
				bot: n.id,
				conv: this._conversationUuid
			}), this.emit("response-complete", {
				botId: n.id,
				conversationUuid: this._conversationUuid
			}), this.loadConversations(), this.attachFeedbackToLast();
		} else e === "BOT_STREAM_ERROR" ? this.emit("error", {
			code: "BOT_STREAM_ERROR",
			message: t.errorMessage || "Erreur de génération."
		}) : e === "error" && this.emit("error", {
			code: "STREAM_ERROR",
			message: t.error || "Erreur."
		});
	}
	onStreamError(e, t) {
		if (e && e.name === "AbortError") return;
		let n = e && e.message || "Erreur de connexion.", r = t || this._thread;
		r && r.renderError(n, e), this.emit("error", {
			code: e && e.code || "STREAM_ERROR",
			message: n
		});
	}
	async attachFeedbackToLast() {
		let e = this._mainEl.querySelectorAll(".lc-msg--bot"), t = e[e.length - 1];
		if (!t || t.querySelector(".lc-fb") || !this._conversationUuid) return;
		let n;
		try {
			let e = ((await this._api.getConversation(this._conversationUuid)).messages || []).filter((e) => e.role !== "user"), t = e[e.length - 1];
			n = t && t.id;
		} catch (e) {
			(!e || e.name !== "AbortError") && console.error("feedback id resolution failed", e);
		}
		n != null && (t.querySelector(".lc-fb") || _e(this._thread.actionsRow(t), {
			messageId: n,
			modalHost: this._modalLayer,
			signal: this.signal,
			onSend: (e) => this._api.sendFeedback(e).catch((e) => console.error("feedback failed", e))
		}));
	}
	async loadConversations() {
		try {
			let e = await this._api.listConversations(), t = Array.isArray(e) ? e : [], n = this._currentBot ? t.filter((e) => String(e.botId) === String(this._currentBot.id)) : t;
			z(this._sidebarEl, {
				conversations: n,
				activeUuid: this._conversationUuid,
				onOpen: (e) => this.openConversation(e),
				onDelete: (e) => this._api.deleteConversation(e.conversationUuid).then(() => this.loadConversations()),
				onDeleteAll: () => this._api.deleteAllConversations().then(() => this.loadConversations()),
				onExplore: () => this.showGallery(),
				onClose: () => this.setSidebarOpen(!1),
				showExplore: this.getAttribute("show-bot-list") !== "false",
				lightLogo: this._sidebar && this._sidebar.lightLogo,
				darkLogo: this._sidebar && this._sidebar.darkLogo,
				logoHtml: this._sidebar && this._sidebar.logoHtml,
				dark: this.darkMode
			});
		} catch (e) {
			this._initialized && (!e || e.name !== "AbortError") && console.error("conversations load failed", e);
		}
	}
	async openConversation(e) {
		this.abortStream(), this._conversationUuid = e.conversationUuid, this.isSidebarPushMode() || this.setSidebarOpen(!1);
		try {
			let t = await this._api.getConversation(e.conversationUuid);
			this._thread = new ii(this._mainEl, { onCitation: (e) => this.openSource(e) }), this._thread.renderHistory(t.messages || []), this.renderHistoryFeedback(t.messages || []), this._thread.updateDisclaimers();
			let n = [...this._mainEl.querySelectorAll(".lc-msg--bot")].pop();
			n && this._thread.attachCopyButton(n), this.renderComposer(), this.showNewConvButton(), this.loadConversations(), this.writeUrlState({
				bot: this._currentBot && this._currentBot.id,
				conv: this._conversationUuid
			});
		} catch (e) {
			console.error("conversation open failed", e);
		}
	}
	renderHistoryFeedback(e) {
		let t = [...this._mainEl.querySelectorAll(".lc-msg--bot")], n = e.filter((e) => e.role !== "user");
		t.forEach((e, t) => {
			let r = n[t];
			r && _e(this._thread.actionsRow(e), {
				messageId: r.id,
				feedback: r.feedback || void 0,
				modalHost: this._modalLayer,
				signal: this.signal,
				onSend: (e) => this._api.sendFeedback(e).catch((e) => console.error("feedback failed", e))
			});
		});
	}
	openSource(e) {
		this.trackModal(ai(this._modalLayer, {
			source: e,
			onOpenDocument: () => this.openDocument(e),
			signal: this.signal
		}));
	}
	trackModal(e) {
		e && (this._openModals.add(e), e.overlay && e.overlay.addEventListener("lc-modal-closed", () => this._openModals.delete(e)));
	}
	closeModals() {
		for (let e of this._openModals) e.close();
		this._openModals.clear();
	}
	async openDocument(e) {
		let t = this._api.documentUrl({
			botId: this._currentBot.id,
			datasetId: e.dataset_id,
			documentId: e.document_id
		});
		try {
			let n = await fetch(t, {
				headers: { Accept: "*/*" },
				credentials: "same-origin",
				signal: this.signal
			}), r = n.ok && n.headers.get("Content-Type") || "", i = n.ok ? r.includes("pdf") ? "" : await n.text() : "Document indisponible. Utilisez le lien de téléchargement ci-dessous.";
			this.trackModal(si(this._modalLayer, {
				filename: e.document_name,
				contentType: r,
				text: i,
				url: t,
				signal: this.signal
			}));
		} catch (e) {
			console.error("document open failed", e);
		}
	}
	sendFeedback(e, t) {
		return this._api.sendFeedback({
			messageId: e.id,
			isPositive: t
		});
	}
	toggleSidebar() {
		this.setSidebarOpen(!this._sidebarOpen);
	}
	setSidebarOpen(e) {
		this._sidebarOpen !== e && (this._sidebarOpen = e, this.reflectSidebar(), this._headerContext && !this._headerContext.explore && this.renderHeaderFor(this._headerContext));
	}
	reflectSidebar() {
		this.toggleAttribute("sidebar-open", this._sidebarOpen);
	}
	sidebarOpensByDefault() {
		return !!(this._sidebar && this._sidebar.open) && this.isSidebarPushMode();
	}
	isSidebarPushMode() {
		return this.floating ? this.hasAttribute("fullscreen") : this.clientWidth > 640;
	}
	toggleFullscreen() {
		this.toggleAttribute("fullscreen"), this._headerContext && this.renderHeaderFor(this._headerContext);
	}
	handleKeydown = (e) => {
		e.key === "Escape" && this._sidebarOpen && this.setSidebarOpen(!1);
	};
	close() {
		this.floating ? this.setPanelOpen(!1) : this.hidden = !0;
	}
	handleResize = () => {};
	emit(e, t) {
		this.dispatchEvent(new CustomEvent(`lutece-chat:${e}`, {
			bubbles: !0,
			composed: !0,
			detail: Object.freeze({ ...t })
		}));
	}
}, fi = "2.0.0";
customElements.get("lutece-chat") || customElements.define("lutece-chat", di);
var pi = {
	botId: "bot-id",
	darkMode: "dark-mode",
	fullscreen: "fullscreen",
	closable: "closable",
	floating: "floating",
	showBotList: "show-bot-list",
	showThemeToggle: "show-theme-toggle",
	storageKey: "storage-key"
}, mi = new Set([
	"closable",
	"show-bot-list",
	"show-theme-toggle"
]), hi = new Set([
	"endpoints",
	"sidebar",
	"customCSS"
]);
function gi(e) {
	return e ? e instanceof Element ? e : typeof e == "string" ? document.querySelector(e) || document.getElementById(e) : null : null;
}
function _i(e = {}) {
	let t = document.createElement("lutece-chat"), n = gi(e.container), r = n ? e : {
		...e,
		floating: !0
	};
	for (let [e, n] of Object.entries(pi)) r[e] === void 0 || r[e] === null || (mi.has(n) ? t.setAttribute(n, String(r[e] !== !1)) : typeof r[e] == "boolean" ? r[e] && t.setAttribute(n, "") : t.setAttribute(n, String(r[e])));
	for (let n of hi) e[n] !== void 0 && (t[n] = e[n]);
	return (n || document.body).appendChild(t), t;
}
//#endregion
export { di as LuteceChat, fi as VERSION, _i as createLuteceChat };

//# sourceMappingURL=lutece-chat-bundle.js.map