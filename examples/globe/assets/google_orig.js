function SightControls(t, e) {
    this.camera = t, this.element = e || document, this.init(), this.setupEvents()
}! function(t) {
    "use strict"
}(window),
function(t) {
    "use strict";
    var e = {};
    e.earthRadius = 1e4, e.worldSize = 1e8, e.goalCount = 3, e.pinHeight = 10950, e.inAreaDetectionDistance = 1200, e.autopilotEndDistance = 700, e.chapterTimeLimit = 3e5, e.freeModeCategoryChangeInterval = 18e4, e.messageBackgroundOpacity = .5, e.realisticEarth = !1, e.models = {
        earthPath: "models/planets/earth_one_material.json",
        questionPath: "models/questionmark.json",
        cloudPath: "models/cloud.json",
        cloudBaseHeight: e.earthRadius + 1e3
    }, e.player = {
        speed: 900,
        accSpeed: 2e3,
        slowDownSpeed: 200,
        disengageSpeed: 100,
        accelerationTime: 3e3,
        autopilotDuration: 1e4,
        initPosition: {
            x: -8530,
            y: 6103,
            z: -7680
        },
        disengagePosition: {
            x: -18860.16266838722,
            y: 4341.204441673258,
            z: -15825.555538987232
        },
        minDistance: e.earthRadius + 1200,
        maxDistance: e.earthRadius + 1e4
    }, e.disengageFigureScale = 3, e.disengageBorderDegree = 100, e.lights = {
        ambient: {
            color: 16777215
        },
        directional: {
            color: 3355443,
            intensity: 1,
            position: {
                x: e.worldSize,
                y: e.worldSize,
                z: e.worldSize
            }
        }
    }, e.StereoEffect = {
        separation: 1,
        focalLength: 15
    }, e.json = {
        figuresPath: "json/figures.json",
        trendsPath: "json/trends.json",
        areasPath: "json/areas.json",
        pegmansPath: "json/pegmans.json"
    }, e.font = {
        defaultFontFamily: '"Roboto", "Noto Sans Japanese"'
    }, e.audio = {
        bgmSrc: "https://storage.googleapis.com/searching-planet/theme.mp3",
        bgmEDSrc: "https://storage.googleapis.com/searching-planet/ending.mp3"
    }, t.Settings = e
}(window),
function(t) {
    "use strict";
    var e = {},
        i = Object.prototype,
        o = Array.prototype,
        n = o.slice,
        r = i.toString;
    e.hasProp = function(t, e) {
        return i.hasOwnProperty.call(t, e)
    }, e.isObject = function(t) {
        return "[object Object]" === r.call(t)
    }, e.isFunction = function(t) {
        return "[object Function]" === r.call(t)
    }, e.isString = function(t) {
        return "[object String]" === r.call(t)
    }, e.isNumber = function(t) {
        return "[object Number]" === r.call(t)
    }, e.isBoolean = function(t) {
        return "[object Boolean]" === r.call(t)
    }, e.isNull = function(t) {
        return null === t
    }, e.isUndefined = function(t) {
        return void 0 === t
    }, e.isArray = Array.isArray || function(t) {
        return "[object Array]" === r.call(t)
    }, e.isReference = function(t) {
        return e.isFunction(t) || e.isArray(t) || e.isObject(t)
    }, e.getQuery = function() {
        var t = decodeURIComponent(location.search).slice(1);
        if (0 === t.length) return {};
        var e = t.split("&"),
            i = {};
        return e.forEach(function(t, e) {
            var o = t.split("=");
            if (o.length > 1) {
                var n = o[0],
                    r = o[1];
                i[n] = r
            } else i[o[0]] = null
        }), i
    }, e.pow2 = function(t) {
        return Math.pow(2, Math.floor(Math.log2(t - 1)) + 1)
    }, e.copyClone = function(t) {
        var i, o = n.call(arguments, 1),
            r = !1;
        e.isBoolean(o[o.length - 1]) && (r = o.pop());
        for (var s = 0, a = o.length; s < a; s++) {
            i = o[s];
            for (var l in i) !r && t[l] || (t[l] = o[s][l])
        }
        return t
    }, e.generateUUID = function() {
        var t, e = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
            i = new Array(36),
            o = 0;
        return function() {
            for (var n = 0; n < 36; n++) 8 === n || 13 === n || 18 === n || 23 === n ? i[n] = "-" : 14 === n ? i[n] = "4" : (o <= 2 && (o = 33554432 + 16777216 * Math.random() | 0), t = 15 & o, o >>= 4, i[n] = e[19 === n ? 3 & t | 8 : t]);
            return i.join("")
        }
    }(), e.measureWidth = function() {
        var t = document.createElement("canvas"),
            e = t.getContext("2d");
        return e.textAlign = "left", e.textBaseline = "top",
            function(t, i) {
                return e.font = i.font, Math.ceil(e.measureText(t).width)
            }
    }(), e.measureMaxWidth = function(e, i) {
        for (var o = e.split("\n"), n = 0, r = 0, s = o.length; r < s; r++) {
            var a = t.Utility.measureWidth(o[r], i);
            n = Math.max(n, a)
        }
        return n
    }, e.makeMultiLineText = function() {
        var t = document.createElement("canvas"),
            e = t.getContext("2d");
        return function(t, i, o) {
            e.font = o.font, e.textAlign = o.textAlign, e.textBaseline = o.textBaseline;
            for (var n = [""], r = 0, s = 0; s < t.length; s++) {
                var a = t.charAt(s);
                "\n" !== a ? (e.measureText(n[r] + a).width > i && (r++, n[r] = ""), n[r] += a) : (r++, n[r] = "")
            }
            return n
        }
    }(), e.measureHeight = function() {
        var t = document.createElement("canvas"),
            i = t.getContext("2d");
        return i.textAlign = "left", i.textBaseline = "top",
            function(t, o, n) {
                i.font = n.font;
                var r = e.makeMultiLineText(t, o, n);
                return 1.18 * (r.length * n.lineHeight - (n.lineHeight - n.fontSize))
            }
    }(), e.fillMultiLineText = function(t, i, o, n) {
        var r = n.font,
            s = t.font;
        t.font = r;
        var a = n.textAlign,
            l = t.textAlign;
        t.textAlign = a;
        var c = 0,
            h = n.lineHeight;
        switch (a) {
            case "left":
                c = 0;
                break;
            case "right":
                c = o;
                break;
            case "center":
                c = o / 2
        }
        for (var p = e.makeMultiLineText(i, o, n), u = 0; u < p.length; u++) t.fillText(p[u], c, h * u);
        t.font = s, t.textAlign = l
    }, e.latLonFromXYZ = function(t, e, i) {
        var o = Math.sqrt(Math.pow(t, 2) + Math.pow(e, 2) + Math.pow(i, 2)),
            n = Math.asin(e / o),
            r = Math.atan2(t, i) - Math.PI / 2;
        return r < -Math.PI && (r += 2 * Math.PI), {
            lat: n,
            lon: r
        }
    }, e.xyzFromLatLon = function(t, e) {
        var i = t * Math.PI / 180,
            o = (e + 180) * Math.PI / 180,
            n = -Math.cos(i) * Math.cos(o),
            r = Math.sin(i),
            s = Math.cos(i) * Math.sin(o);
        return {
            x: n,
            y: r,
            z: s
        }
    }, e.distanceOnSphere = function(t, e) {
        var i = new THREE.Vector3(t.x, t.y, t.z),
            o = i.length(),
            n = new THREE.Vector3(e.x, e.y, e.z);
        n.setLength(o);
        var r = n.sub(i).length();
        return r
    }, e.inAreaOnSphere = function(t, e, i) {
        var o = this.distanceOnSphere(t, i);
        return o <= e
    }, e.getAzimuth = function(t, e) {
        var i = this.latLonFromXYZ(t.x, t.y, t.z),
            o = this.latLonFromXYZ(e.x, e.y, e.z),
            n = Math.atan2(-(o.lon - i.lon), o.lat - i.lat);
        return n
    }, e.standUpright = function() {
        var t = new THREE.Vector3,
            e = new THREE.Vector3,
            i = new THREE.Vector3;
        return function(o) {
            t.copy(o.position).normalize(), e.copy(o.up).normalize(), i.crossVectors(t, e).normalize();
            var n = -Math.acos(t.dot(e));
            o.quaternion.setFromAxisAngle(i, n)
        }
    }(), e.shuffle = function(t) {
        for (var e, i, o = t.length; o;) i = Math.floor(Math.random() * o--), e = t[o], t[o] = t[i], t[i] = e;
        return t
    }, e.arrayContains = function(t, i) {
        if (e.isFunction(t.includes)) return t.includes(i);
        var o = Object(t),
            n = parseInt(o.length) || 0;
        if (0 === n) return !1;
        for (var r, s = 0; s < n;) {
            if (r = o[s], i === r || i !== i && r !== r) return !0;
            s++
        }
        return !1
    }, e.arrayFind = function(t, i, o) {
        if (e.isFunction(t.find)) return t.find(i);
        if (!e.isFunction(i)) throw new TypeError("callback must be a function");
        for (var n, r = Object(t), s = r.length >>> 0, a = 0; a < s; a++)
            if (n = r[a], i.call(o, n, a, r)) return n
    }, e.createCanvas = function(t, i) {
        var o = window.devicePixelRatio;
        o = e.pow2(o) || 1;
        var n = document.createElement("canvas");
        n.width = t * o, n.height = i * o;
        var r = n.getContext("2d");
        return r.scale(o, o), n
    }, t.Utility = e
}(window),
function(t) {
    "use strict";
    var e = {get isLandscape() {
            var t = Math.abs(window.orientation);
            return 90 === t
        },
        get isPortrait() {
            var t = Math.abs(window.orientation);
            return 90 !== t
        }
    };
    t.DetectOrientation = e
}(window),
function(t) {
    "use strict";

    function e(t) {
        this.inflate(t)
    }
    e.prototype = {
        constructor: e,
        $class: "FontAttribute",
        lineHeight: 12,
        fontSize: 12,
        fontWeight: "normal",
        fontFamily: t.Settings.font.defaultFontFamily,
        textAlign: "left",
        textBaseline: "top",
        inflate: function(t) {
            t && (["lineHeight", "fontSize", "fontWeight", "fontFamily", "textAlign", "textBaseline"].forEach(function(e, i) {
                void 0 !== t[e] && (this[e] = t[e])
            }, this), void 0 === t.lineHeight && void 0 !== t.fontSize && (this.lineHeight = t.fontSize))
        },
        get font() {
            return this.fontWeight + " " + this.fontSize + "px " + this.fontFamily
        }
    }, t.FontAttribute = e
}(window),
function(t) {
    "use strict";

    function e() {
        this.handlers = {}
    }

    function i(t, e) {
        this.copyObject(e), this.eventType = t
    }
    e.prototype = {
        constructor: e,
        isDirty: !1,
        handlers: null,
        addListener: function(t, e, i) {
            return t ? void(e && (this.handlers[t] || (this.handlers[t] = []), i = i || this, this.handlers[t].push([e, i]))) : void console.warn("Event name must be taken.")
        },
        removeListener: function(t, e) {
            if (0 === arguments.length) return void(this.handlers = {});
            if (!t) return void console.warn("Must take a event name if dont want to remove all listeners.");
            if (this.handlers[t])
                for (var i = this.handlers[t], o = 0, n = i.length; o < n; o++)
                    if (i[o][0] === e) {
                        i.splice(o, 1);
                        break
                    }
        },
        one: function(t, e, i) {
            var o = this,
                n = function() {
                    e.call(i || o), o.isDirty = !0;
                    for (var r = -1, s = 0, a = o.handlers[t].length; s < a; s++)
                        if (o.handlers[t][s][0] === n) {
                            r = s;
                            break
                        }
                    o.handlers[t][r] = null, n = null
                };
            this.addListener(t, n, i)
        },
        fire: function(e, o) {
            if (this.handlers[e]) {
                o = o || {}, t.Utility.copyClone(o, {
                    target: this
                });
                for (var n = new i(e, o), r = this.handlers[e], s = 0, a = r.length; s < a; s++)
                    if (r[s]) {
                        var l = r[s][0],
                            c = r[s][1];
                        l.call(c, n)
                    }
                this.isDirty && (this.handlers[e] = this.handlers[e].filter(function(t, e) {
                    return null !== t && t
                }), this.isDirty = !1)
            }
        },
        dispose: function() {
            this.removeListener(), this.handlers = null
        }
    }, i.prototype = {
        constructor: i,
        eventType: null,
        copyObject: function(t) {
            if (t)
                for (var e in t) this[e] = t[e]
        }
    }, t.EventDispatcher = e
}(window),
function(t) {
    "use strict";

    function e(e, i) {
        t.EventDispatcher.call(this), this.id = e ? e : t.Utility.generateUUID(), this.storage = {}, this.load()
    }
    e.EventType = {
        Update: "update"
    }, e.prototype = Object.create(t.EventDispatcher.prototype), e.prototype.constructor = e, e.prototype.$class = "Model", e.prototype.load = function() {}, e.prototype.get = function(t, e) {
        var i = this.storage[t];
        return void 0 === i ? e : i
    }, e.prototype.set = function(t, i, o) {
        var n = this.storage[t];
        this.storage[t] = i, o || this.fire(e.EventType.Update, {
            property: t,
            newValue: i,
            oldValue: n
        })
    }, e.prototype.setDefault = function(t, e) {
        var i = this.get(t);
        void 0 === i && this.set(t, e, !0)
    }, e.prototype.setDefaults = function(t) {
        for (var e in t) this.setDefault(e, t[e])
    }, e.prototype.inflate = function(t) {}, e.defaultModelName = "defaultModel", t.Model = e
}(window),
function(t) {
    "use strict";

    function e(e, i) {
        t.Model.call(this, e, i), this.setDefaults({
            data: null
        })
    }
    var i = {};
    i.LANGUAGES = ["ja", "en"], i.DEFAULT_LANGUAGE = "ja", i.COOKIE_KEY = "myLanguage", i.lang = function() {
        for (var e = [], o = document.cookie.replace(/\s/g, "").split(";"), n = 0; n < o.length; n++) {
            var r = o[n].split("=")[0];
            e[r] = o[n].split("=")[1]
        }
        var s = e[i.COOKIE_KEY];
        return t.Utility.arrayContains(i.LANGUAGES, s) ? s : i.DEFAULT_LANGUAGE
    }(), e.prototype = Object.create(t.Model.prototype), e.prototype.constructor = e, e.prototype.$class = "LocalizationModel", e.prototype.loadedPromise = null, e.prototype.load = function() {
        var t = this;
        t.loadedPromise = new Promise(function(e, o) {
            var n = new THREE.XHRLoader,
                r = "localize/text." + i.lang + ".json";
            n.load(r, function(i) {
                var o = JSON.parse(i);
                t.set("data", o), e()
            })
        })
    }, e.prototype.getText = function(e, i) {
        var o = this.get("data")[e];
        if (void 0 === o) return console.warn("Localization text not exists for key [" + e + "]"), "";
        if (t.Utility.isObject(i))
            for (var n in i) o = o.replace("{{" + n + "}}", i[n]);
        return o
    }, t.Localization = i, t.LocalizationModel = e
}(window),
function(t) {
    "use strict";

    function e(e, i) {
        t.Model.call(this, e, i), this.localization = t.ModelLocator.getInstance().getModel(t.LocalizationModel, t.Model.defaultModelName), this.setDefaults({
            figureOnCountries: []
        })
    }
    e.Type = {
        Animals: "animals",
        Foods: "foods",
        Sports: "sports"
    }, e.prototype = Object.create(t.Model.prototype), e.prototype.constructor = e, e.prototype.$class = "CategoryModel", e.prototype.localization = null, e.prototype.getType = function() {
        return this.id
    }, e.prototype.getName = function() {
        var t = this.getType(),
            e = "category_" + t,
            i = this.localization.getText(e);
        return i
    }, e.prototype.extractGoalsWithCountry = function(e) {
        var i = t.ModelLocator.getInstance(),
            o = [],
            n = this.get("figureOnCountries");
        return e.forEach(function(e) {
            var r = t.Utility.arrayFind(n, function(t) {
                    var i = t.get("country");
                    return i.id === e
                }, this),
                s = i.getModel(t.GoalModel);
            s.inflate({
                figureOnCountry: r
            }), o.push(s)
        }, this), o
    }, t.CategoryModel = e
}(window),
function(t) {
    "use strict";

    function e(e, i) {
        t.Model.call(this, e, i), this.setDefaults({
            currentTime: 0,
            timeLimit: 3e5,
            timeorver: !1
        })
    }
    e.EventType = {
        Timeover: "timeover"
    }, e.prototype = Object.create(t.Model.prototype), e.prototype.constructor = e, e.prototype.$class = "TimerModel", e.prototype.inflate = function(t) {
        this.set("timeLimit", t.timeLimit, !0), void 0 !== t.currentTime && this.set("currentTime", t.currentTime, !0)
    }, e.prototype.updateTime = function() {
        if (!this.get("timeorver")) {
            var t = this.get("currentTime");
            t += Time.deltaTime;
            var i = this.get("timeLimit");
            return t >= i ? (t = i, this.set("timeorver", !0, !0), this.set("currentTime", t), void this.fire(e.EventType.Timeover)) : void this.set("currentTime", t)
        }
    }, e.prototype.getTimeString = function() {
        var t = this.get("timeLimit") - this.get("currentTime"),
            e = t % 1e3 / 10 | 0,
            i = t / 1e3 % 60 | 0,
            o = t / 1e3 / 60 | 0;
        return ("0" + o).slice(-2) + "'" + ("0" + i).slice(-2) + '"' + ("0" + e).slice(-2)
    }, e.prototype.getCurrentTime = function() {
        return this.get("currentTime")
    }, e.prototype.reset = function() {
        this.set("currentTime", 0, !0), this.set("timeorver", !1, !1)
    }, t.TimerModel = e
}(window),
function(t) {
    "use strict";

    function e(e, i) {
        this.path = i.path, t.Model.call(this, e, i), this.setDefaults({
            image: null,
            loaded: !1
        })
    }
    e.EventType = {
        Loaded: "loaded"
    }, e.prototype = Object.create(t.Model.prototype), e.prototype.constructor = e, e.prototype.$class = "ImageModel", e.prototype.load = function() {
        (new THREE.ImageLoader).load(this.path, this.loadHandler.bind(this))
    }, e.prototype.isLoaded = function() {
        return this.get("loaded")
    }, e.prototype.loadHandler = function(t) {
        this.set("image", t, !0), this.set("loaded", !0, !0), this.fire(e.EventType.Loaded, {
            image: t
        })
    }, t.ImageModel = e
}(window),
function(t) {
    "use strict";

    function e(e, i) {
        i = i || {}, this.path = i.path, this.Loader = i.loader || THREE.JSONLoader, t.Model.call(this, e, i), this.localization = t.ModelLocator.getInstance().getModel(t.LocalizationModel, t.Model.defaultModelName), this.setDefaults({
            type: null,
            nameKey: null,
            category: null,
            scale: 1,
            altitude: 0,
            shading: "flat",
            transparent: !1,
            renderOrder: 0,
            adjustX: 0,
            adjustY: 0,
            yaw: 0,
            roll: 0,
            mesh: null,
            loaded: !1
        })
    }
    e.Type = {
        Animals: "animals",
        Foods: "foods",
        Sports: "sports",
        Landmarks: "landmarks"
    }, e.EventType = {
        Loaded: "loaded"
    }, e.prototype = Object.create(t.Model.prototype), e.prototype.constructor = e, e.prototype.$class = "FigureMeshModel", e.prototype.Loader = null, e.prototype.localization = null, e.prototype.loadingPromise = null, e.prototype.inflate = function(t) {
        void 0 !== t.type && this.set("type", t.type, !0), void 0 !== t.nameKey && this.set("nameKey", t.nameKey, !0), void 0 !== t.category && this.set("category", t.category, !0), void 0 !== t.scale && this.set("scale", t.scale, !0), void 0 !== t.altitude && this.set("altitude", t.altitude, !0), void 0 !== t.shading && this.set("shading", t.shading, !0), void 0 !== t.transparent && this.set("transparent", t.transparent, !0), void 0 !== t.renderOrder && this.set("renderOrder", t.renderOrder, !0), void 0 !== t.adjustX && this.set("adjustX", t.adjustX, !0), void 0 !== t.adjustY && this.set("adjustY", t.adjustY, !0), void 0 !== t.yaw && this.set("yaw", t.yaw, !0), void 0 !== t.roll && this.set("roll", t.roll, !0)
    }, e.prototype.load = function() {
        var t = this;
        t.loadingPromise = new Promise(function(e, i) {
            if (t.path)(new t.Loader).load(t.path, function(i, o) {
                t.loadHandler(i, o), e()
            });
            else {
                console.warn("FigureMeshModel[id: " + t.id + "] path empty");
                var o = "models/" + (t.get("category") || "animals") + "/__dummy__.json";
                (new t.Loader).load(o, function(i, o) {
                    t.loadHandler(i, o), e()
                })
            }
        })
    }, e.prototype.waitLoad = function() {
        return this.loadingPromise
    }, e.prototype.isLoaded = function() {
        return this.get("loaded")
    }, e.prototype.loadHandler = function(t, i) {
        if (!i) throw new Error("materials not exists. path: " + this.path);
        for (var o = 0, n = i.length; o < n; o++) "flat" === this.get("shading") && (i[o].shading = THREE.FlatShading), i[o].transparent = this.get("transparent");
        var r = new THREE.MeshFaceMaterial(i),
            s = new THREE.Mesh(t, r),
            a = this.get("renderOrder");
        s.renderOrder = a;
        var l = this.get("adjustX");
        s.position.x = l;
        var c = this.get("adjustY");
        s.position.y = c;
        var h = this.get("yaw");
        s.rotation.y = h;
        var p = this.get("roll");
        s.rotation.z = p, this.set("mesh", s, !0), this.set("loaded", !0, !0), this.fire(e.EventType.Loaded, {
            mesh: s
        })
    }, e.prototype.getMesh = function() {
        var e = this.get("mesh");
        if (!e) return null;
        var i = e.clone();
        if (t.DEBUG) {
            var o = new THREE.AxisHelper(3);
            i.add(o)
        }
        return i
    }, e.prototype.getName = function() {
        var t = this.get("category") + "_" + this.id,
            e = this.localization.getText(t);
        return e
    }, t.FigureMeshModel = e
}(window),
function(t) {
    "use strict";

    function e(e, i) {
        i = i || {}, t.FigureMeshModel.call(this, e, i), this.setDefaults({
            code: null,
            category: "pegman",
            latitude: 0,
            longitude: 0
        }), this.animationController = t.AnimateController.getInstance()
    }
    e.prototype = Object.create(t.FigureMeshModel.prototype), e.prototype.constructor = e, e.prototype.$class = "PegmanMeshModel", e.prototype.inflate = function(e) {
        t.FigureMeshModel.prototype.inflate.call(this, e), void 0 !== e.code && this.set("code", e.code, !0), void 0 !== e.latitude && this.set("latitude", e.latitude, !0), void 0 !== e.longitude && this.set("longitude", e.longitude, !0)
    }, e.prototype.getPosition = function() {
        var e = this.get("latitude"),
            i = this.get("longitude"),
            o = this.get("altitude"),
            n = t.Utility.xyzFromLatLon(e, i),
            r = new THREE.Vector3(n.x, n.y, n.z).setLength(t.Settings.earthRadius + o);
        return r
    }, e.prototype.setupObject = function() {
        var e = new THREE.Object3D,
            i = this.getMesh(),
            o = this.get("scale"),
            n = this.get("yaw"),
            r = this.get("renderOrder");
        return i.scale.set(o, o, o), i.rotation.y = n, i.renderOrder = r, e.add(i), e.position.copy(this.getPosition()), t.Utility.standUpright(e), this.animationController.createRotationAnimator(i, {
            duration: 5e3
        }), this.set("object", e, !0), Promise.resolve(e)
    }, e.prototype.getObject = function() {
        var t = this.get("object");
        return t
    }, e.prototype.onDisengageStart = function(e) {
        var i = t.Settings.disengageBorderDegree,
            o = Math.cos(i * Math.PI / 180),
            n = t.Settings.disengageFigureScale,
            r = this.getObject(),
            s = r.position.clone().normalize(),
            a = e.dot(s);
        return a < o ? void(r.visible = !1) : void r.scale.set(n, n, n)
    }, e.prototype.onDisengageFinish = function() {
        var t = this.getObject();
        t.visible = !0, t.scale.set(1, 1, 1)
    }, t.PegmanMeshModel = e
}(window),
function(t) {
    "use strict";

    function e(e, i) {
        this.path = i.path, this.Loader = i.loader || THREE.JSONLoader, t.Model.call(this, e, i), this.localization = t.ModelLocator.getInstance().getModel(t.LocalizationModel, t.Model.defaultModelName), this.setDefaults({
            figureMesh: null,
            latitude: 0,
            longitude: 0,
            position: null
        })
    }
    e.prototype = Object.create(t.Model.prototype), e.prototype.constructor = e, e.prototype.$class = "FigureModel", e.prototype.localization = null, e.prototype.inflate = function(t) {
        void 0 !== t.figureMesh && this.set("figureMesh", t.figureMesh, !0), void 0 !== t.latitude && this.set("latitude", t.latitude, !0), void 0 !== t.longitude && this.set("longitude", t.longitude, !0), void 0 !== t.position && this.set("position", t.position, !0)
    }, e.prototype.getPosition = function() {
        var e = this.get("position");
        if (null === e) {
            var i = this.get("figureMesh");
            if (null !== i) {
                var o = this.get("latitude"),
                    n = this.get("longitude"),
                    r = i.get("altitude"),
                    s = t.Utility.xyzFromLatLon(o, n);
                e = new THREE.Vector3(s.x, s.y, s.z).setLength(r), this.set("position", e, !0)
            }
        }
        return e
    }, t.FigureModel = e
}(window),
function(t) {
    "use strict";

    function e(e, i) {
        t.Model.call(this, e, i), this.setDefaults({
            total: 0,
            current: 0
        })
    }
    e.EventType = {
        Progress: "progress",
        Loaded: "loaded"
    }, e.prototype = Object.create(t.Model.prototype), e.prototype.constructor = e, e.prototype.$class = "PreloadModel", e.prototype.addTotal = function(t) {
        var e = this.get("total");
        e += t, this.set("total", e)
    }, e.prototype.addCount = function(t) {
        var i = this.get("total"),
            o = this.get("current");
        o += t, this.set("current", o, !0), this.fire(e.EventType.Progress, {
            total: i,
            current: o,
            progress: o / i
        }), i <= o && this.fire(e.EventType.Loaded, {
            total: i
        })
    }, e.prototype.increment = function() {
        this.addCount(1)
    }, t.PreloadModel = e
}(window),
function(t) {
    "use strict";

    function e(e, i) {
        t.Model.call(this, e, i), this.localization = t.ModelLocator.getInstance().getModel(t.LocalizationModel, t.Model.defaultModelName), this.setDefaults({
            areaCode: null,
            latitude: null,
            longitude: null,
            landmarkFigure: null
        })
    }
    e.prototype = Object.create(t.Model.prototype), e.prototype.constructor = e, e.prototype.$class = "CountryModel", e.prototype.localization = null, e.prototype.inflate = function(t) {
        void 0 !== t.areaCode && this.set("areaCode", t.areaCode, !0), void 0 !== t.latitude && this.set("latitude", t.latitude, !0), void 0 !== t.longitude && this.set("longitude", t.longitude, !0), void 0 !== t.landmarkFigure && this.set("landmarkFigure", t.landmarkFigure, !0)
    }, e.prototype.getPosition = function() {
        var e = t.Utility.xyzFromLatLon(this.get("latitude"), this.get("longitude")),
            i = new THREE.Vector3(e.x, e.y, e.z);
        return i.setLength(t.Settings.earthRadius), i
    }, e.prototype.isInArea = function(e, i) {
        var o = this.getPosition();
        return t.Utility.inAreaOnSphere(o, i, e)
    }, e.prototype.getCountryName = function() {
        var t = "country_" + this.get("areaCode"),
            e = this.localization.getText(t);
        return e
    }, e.prototype.getCityName = function() {
        var t = "city_" + this.get("areaCode"),
            e = this.localization.getText(t);
        return e
    }, e.prototype.getInCountryText = function() {
        var t = "in_country_" + this.get("areaCode"),
            e = this.localization.getText(t);
        return e
    }, e.prototype.getTargetString = function() {
        var t = this.getCityName() + " (" + this.getCountryName() + ")";
        return t
    }, t.CountryModel = e
}(window),
function(t) {
    "use strict";

    function e(e, i) {
        t.Model.call(this, e, i), this.localization = t.ModelLocator.getInstance().getModel(t.LocalizationModel, t.Model.defaultModelName), this.setDefaults({
            category: null,
            country: null,
            figureMesh: null,
            latitude: null,
            longitude: null,
            adjustHeight: null,
            shift: null
        })
    }
    e.prototype = Object.create(t.Model.prototype), e.prototype.constructor = e, e.prototype.$class = "FigureOnCountryModel", e.prototype.localization = null, e.prototype.inflate = function(t) {
        void 0 !== t.category && this.set("category", t.category, !0), void 0 !== t.country && this.set("country", t.country, !0), void 0 !== t.figureMesh && this.set("figureMesh", t.figureMesh, !0), void 0 !== t.latitude && this.set("latitude", t.latitude, !0), void 0 !== t.longitude && this.set("longitude", t.longitude, !0), void 0 !== t.adjustHeight && this.set("adjustHeight", t.adjustHeight, !0), void 0 !== t.shift && this.set("shift", t.shift, !0)
    }, e.prototype.getFigureMesh = function() {
        var t = this.get("figureMesh");
        return t
    }, e.prototype.getMesh = function() {
        var e = this.get("figureMesh");
        if (!e) return null;
        var i = e.get("mesh");
        if (!i) return null;
        var o = i.clone();
        if (t.DEBUG) {
            var n = new THREE.AxisHelper(3);
            o.add(n)
        }
        return o
    }, e.prototype.getCountry = function() {
        var t = this.get("country");
        return t
    }, e.prototype.getPosition = function() {
        var e = this.get("figureMesh"),
            i = this.get("latitude"),
            o = this.get("longitude"),
            n = this.get("adjustHeight"),
            r = e.get("altitude"),
            s = this.get("shift");
        s && (o -= 2);
        var a = t.Utility.xyzFromLatLon(i, o),
            l = new THREE.Vector3(a.x, a.y, a.z).setLength(t.Settings.earthRadius + r + n);
        return l
    }, t.FigureOnCountryModel = e
}(window),
function(t) {
    "use strict";

    function e(e, i) {
        t.Model.call(this, e, i), this.localization = t.ModelLocator.getInstance().getModel(t.LocalizationModel, t.Model.defaultModelName), this.setDefaults({
            chapter: null,
            figureOnCountry: null,
            goalAreaRadius: t.Settings.inAreaDetectionDistance
        })
    }
    e.EventType = {
        Goal: "goal"
    }, e.prototype = Object.create(t.Model.prototype), e.prototype.constructor = e, e.prototype.$class = "GoalModel", e.prototype.localization = null, e.prototype.inflate = function(t) {
        void 0 !== t.chapter && this.set("chapter", t.chapter, !0), void 0 !== t.figureOnCountry && this.set("figureOnCountry", t.figureOnCountry, !0), void 0 !== t.goalAreaRadius && this.set("goalAreaRadius", t.goalAreaRadius, !0)
    }, e.prototype.getCountry = function() {
        var t = this.get("figureOnCountry"),
            e = t.get("country");
        return e
    }, e.prototype.checkGoal = function(t) {
        var e = this.getCountry(),
            i = this.get("goalAreaRadius"),
            o = e.isInArea(t, i);
        return o
    }, e.prototype.getTargetString = function() {
        var t = this.getCountry();
        return t.getTargetString()
    }, e.prototype.isSuccess = function() {
        var t = this.get("chapter");
        if (t.completed) return !0;
        var e = t.get("currentGoalIndex"),
            i = t.getGoals(),
            o = i.indexOf(this),
            n = o < e;
        return n
    }, t.GoalModel = e
}(window),
function(t) {
    "use strict";

    function e(e, i) {
        t.Model.call(this, e, i), this.setDefaults({
            goalAreaRadius: t.Settings.inAreaDetectionDistance,
            timeLimit: t.Settings.chapterTimeLimit,
            currentGoalIndex: -1,
            category: null
        }), this.goals = []
    }
    e.EventType = {
        Success: "success",
        GoalChange: "goalChange",
        Goal: "goal"
    }, e.prototype = Object.create(t.Model.prototype), e.prototype.constructor = e, e.prototype.$class = "ChapterModel", e.prototype.goals = null, e.prototype.started = !1, e.prototype.completed = !1, e.prototype.addGoal = function(t) {
        this.goals.push(t), t.set("chapter", this, !0)
    }, e.prototype.start = function() {
        this.started = !0, this.get("currentGoalIndex") < 0 && (this.set("currentGoalIndex", 0), this._onStart())
    }, e.prototype.stop = function() {
        this.started = !1
    }, e.prototype.rewind = function() {
        this.completed = !1, this.set("currentGoalIndex", -1)
    }, e.prototype.currentGoal = function() {
        var t = this.get("currentGoalIndex");
        if (!this.goals || t < 0) return null;
        var e = this.goals[t];
        return e
    }, e.prototype.currentCountry = function() {
        var t = this.currentGoal();
        return t ? t.getCountry() : null
    }, e.prototype.getGoals = function() {
        var t = [].slice.call(this.goals);
        return t
    }, e.prototype.checkGoal = function(t) {
        return !1
    }, e.prototype.hasNext = function() {
        var t = this.get("currentGoalIndex");
        return t + 1 < this.goals.length
    }, e.prototype.moveNext = function() {
        if (!this.hasNext()) return void this.success();
        var t = this.get("currentGoalIndex");
        this.set("currentGoalIndex", t + 1), this._onStart()
    }, e.prototype._onStart = function() {
        var t = this.currentGoal(),
            i = t.getCountry();
        this._updateCheckGoal(i, this.get("goalAreaRadius")), this.fire(e.EventType.GoalChange, {
            goal: t
        })
    }, e.prototype._updateCheckGoal = function(t, e) {
        this.checkGoal = function(i) {
            if (!this.started) return !1;
            var o = t.isInArea(i, e);
            return o && this.goal(), o
        }
    }, e.prototype.goal = function() {
        if (!this.completed) {
            var t = this.currentGoal();
            this.fire(e.EventType.Goal, {
                goal: t
            }), this.moveNext()
        }
    }, e.prototype.success = function() {
        this.completed || (this.set("currentGoalIndex", this.goals.length, !0), this.completed = !0, this.fire(e.EventType.Success))
    }, t.ChapterModel = e
}(window),
function(t) {
    "use strict";

    function e() {
        this.models = {}
    }
    e.prototype = {
        constructor: e,
        $class: "ModelLocator",
        getModel: function(t, e, i) {
            var o = t.prototype.$class;
            if (this.models[o] || (this.models[o] = []), this.contains(this.models[o], e)) return this.find(this.models[o], e);
            var n = new t(e, i);
            return this.add(o, n), n
        },
        getModels: function(t) {
            var e = t.prototype.$class,
                i = this.models[e];
            if (!i) return [];
            var o = [].slice.call(i);
            return o
        },
        add: function(t, e) {
            this.models[t] || (this.models[t] = []), this.models[t].push(e)
        },
        contains: function(t, e) {
            for (var i = 0, o = t.length; i < o; i++)
                if (t[i].id === e) return !0;
            return !1
        },
        find: function(t, e) {
            for (var i = 0, o = t.length; i < o; i++)
                if (t[i].id === e) return t[i];
            return null
        }
    };
    var i = null;
    e.getInstance = function() {
        return i || (i = new e), i
    }, t.ModelLocator = e
}(window),
function(t) {
    "use strict";

    function e() {
        this.pool = []
    }
    e.prototype = {
        constructor: e,
        $class: "PreLoader",
        pool: null,
        add: function(t) {
            Utility.isArray(t) || (t = [t]), t = t.forEach(function(t, e) {
                this.contains(t) || this.pool.push(t)
            }, this)
        },
        contains: function(t) {
            return this.pool.indexOf(t) !== -1
        },
        startLoad: function() {
            console.log("start preload.");
            var e = t.ModelLocator.getInstance().getModel(t.PreloadModel, t.Model.defaultModelName);
            return e.addTotal(this.pool.length), Promise.resolve()
        }
    }, t.PreLoader = e
}(window),
function(t) {
    "use strict";

    function e() {
        t.PreLoader.call(this)
    }
    e.prototype = Object.create(t.PreLoader.prototype), e.prototype.constructor = e, e.prototype.$class = "PreImageLoader", e.prototype.startLoad = function() {
        t.PreLoader.prototype.startLoad.call(this);
        var e = t.ModelLocator.getInstance(),
            i = e.getModel(t.PreloadModel, t.Model.defaultModelName),
            o = this.pool.map(function(o, n) {
                return new Promise(function(n, r) {
                    function s(e) {
                        a.removeListener(t.PreloadModel.EventType.Loaded, s), n(), a = null, i.increment()
                    }
                    var a = e.getModel(t.ImageModel, o, {
                        path: o
                    });
                    a.addListener(t.PreloadModel.EventType.Loaded, s)
                })
            });
        return Promise.all(o)
    }, t.PreImageLoader = e
}(window),
function(t) {
    "use strict";

    function e() {
        t.PreLoader.call(this)
    }
    e.prototype = Object.create(t.PreLoader.prototype), e.prototype.constructor = e, e.prototype.$class = "PreModelLoader", e.prototype.startLoad = function() {
        t.PreLoader.prototype.startLoad.call(this);
        var e = t.ModelLocator.getInstance(),
            i = e.getModel(t.PreloadModel, t.Model.defaultModelName),
            o = this.pool.map(function(o, n) {
                return new Promise(function(n, r) {
                    function s(e) {
                        a.removeListener(t.PreloadModel.EventType.Loaded, s), n(), a = null, i.increment()
                    }
                    var a = e.getModel(t.FigureMeshModel, o, {
                        path: o
                    });
                    a.addListener(t.PreloadModel.EventType.Loaded, s)
                })
            });
        return Promise.all(o)
    }, t.PreModelLoader = e
}(window),
function(t) {
    "use strict";

    function e(t) {
        this.model = t, this.initialize()
    }
    e.prototype = {
        constructor: e,
        model: null,
        object: null,
        mesh: null,
        autoFaceTarget: null,
        position: null,
        initialize: function() {
            var t = (this.model.getCountry(), this.model.getFigureMesh());
            this.object = new THREE.Object3D, this.mesh = this.model.getMesh();
            var e = t.get("scale");
            this.mesh.scale.set(e, e, e), this.position = this.model.getPosition(), this.object.position.copy(this.position), this.object.add(this.mesh), this.standUpright()
        },
        getObject: function() {
            return this.object
        },
        standUpright: function() {
            t.Utility.standUpright(this.object)
        },
        update: function() {
            this.mesh && this.autoFaceTarget && this.faceTo(this.autoFaceTarget.position)
        },
        faceTo: function() {
            var t = new THREE.Vector3,
                e = new THREE.Vector3(0, 1, 0);
            return function(i) {
                t.subVectors(i, this.object.position);
                var o = this.mesh.worldToLocal(t),
                    n = Math.atan(o.x / o.z);
                o.z < 0 && (n += Math.PI), this.mesh.rotateOnAxis(e, n)
            }
        }(),
        autoFaceTo: function(t) {
            this.autoFaceTarget = t
        },
        onDisengageStart: function(e) {
            var i = t.Settings.disengageBorderDegree,
                o = Math.cos(i * Math.PI / 180),
                n = t.Settings.disengageFigureScale,
                r = this.getObject(),
                s = r.position.clone().normalize(),
                a = e.dot(s);
            return a < o ? void(r.visible = !1) : void(this.model.get("category").getType() !== FigureMeshModel.Type.Landmarks && r.scale.set(n, n, n))
        },
        onDisengageFinish: function() {
            var t = this.getObject();
            t.visible = !0, t.scale.set(1, 1, 1)
        },
        dispose: function() {
            this.mesh.material.materials && this.mesh.material.materials.forEach(function(e) {
                t.Utility.isFunction(e.dispose) && e.dispose()
            }), t.Utility.isFunction(this.mesh.material.dispose) && this.mesh.material.dispose(), this.object.parent.remove(this.object), this.object = null, this.mesh = null
        }
    }, t.FigureOnCountry = e
}(window),
function(t) {
    "use strict";

    function e() {
        this.initialize()
    }
    e.prototype = Object.create(t.EventDispatcher.prototype), e.prototype.constructor = e, e.prototype.$class = "FigureManager", e.prototype.initializePromise = null, e.prototype.figureData = null, e.prototype.trendsData = null, e.prototype.xhrLoader = new THREE.XHRLoader, e.prototype.locator = t.ModelLocator.getInstance(), e.prototype.sceneController = null, e.prototype.animationController = null, e.prototype.haloEffectController = null, e.prototype.trendsHaloEffect = null, e.prototype.currentTrendsType = null, e.prototype.trendsFigures = null, e.prototype.landmarkFigures = null, e.TrendsTypes = [t.FigureMeshModel.Type.Animals, t.FigureMeshModel.Type.Foods, t.FigureMeshModel.Type.Sports], e.prototype.initialize = function() {
        this.animationController = t.AnimateController.getInstance(), this.trendsFigures = [], this.landmarkFigures = [], this.initializePromise = Promise.all([this.initializeFigures(), this.initializeTrends()])
    }, e.prototype.initializeFigures = function() {
        return new Promise(function(e, i) {
            this.figureData = {}, this.xhrLoader.load(t.Settings.json.figuresPath, function(i) {
                var o = JSON.parse(i);
                for (var n in t.FigureMeshModel.Type) {
                    var r = t.FigureMeshModel.Type[n];
                    this.figureData[r] = o[r]
                }
                e()
            }.bind(this))
        }.bind(this))
    }, e.prototype.initializeTrends = function() {
        return new Promise(function(e, i) {
            this.trendsData = {}, this.xhrLoader.load(t.Settings.json.trendsPath, function(i) {
                var o = JSON.parse(i);
                for (var n in t.FigureMeshModel.Type) {
                    var r = t.FigureMeshModel.Type[n];
                    this.trendsData[r] = o[r]
                }
                e()
            }.bind(this))
        }.bind(this))
    }, e.prototype.setSceneController = function(t) {
        this.sceneController = t
    }, e.prototype.setHaloEffectController = function(t) {
        this.haloEffectController = t
    }, e.prototype.getFigureMeshes = function(t) {
        var e = this.initializePromise.then(function() {
            return this._getFigureMeshes(t)
        }.bind(this));
        return e
    }, e.prototype._getFigureMeshes = function(e) {
        return new Promise(function(i, o) {
            var n = [],
                r = this.figureData[e],
                s = [];
            r.forEach(function(e) {
                var i = this.locator.getModel(t.FigureMeshModel, e.code, {
                    path: e.path
                });
                i.inflate(e), n.push(i), s.push(i.waitLoad())
            }, this), Promise.all(s).then(function() {
                i(n)
            })
        }.bind(this))
    }, e.prototype.getFigureOnCountries = function(t) {
        var e = this.getFigureMeshes(t).then(function() {
            return this._getFigureOnCountries(t)
        }.bind(this));
        return e
    }, e.prototype._getFigureOnCountries = function(e) {
        return new Promise(function(i, o) {
            var n = [],
                r = this.trendsData[e];
            r.forEach(function(i) {
                var o = i.areaCode,
                    r = i.code,
                    s = i.latitude,
                    a = i.longitude,
                    l = i.adjustHeight,
                    c = i.shift,
                    h = e + "_" + o,
                    p = this.locator.getModel(t.FigureOnCountryModel, h),
                    u = this.locator.getModel(t.CategoryModel, e),
                    d = this.locator.getModel(t.CountryModel, o),
                    f = this.locator.getModel(t.FigureMeshModel, r);
                p.inflate({
                    category: u,
                    country: d,
                    figureMesh: f,
                    latitude: s,
                    longitude: a,
                    adjustHeight: l,
                    shift: c
                }), n.push(p)
            }, this), i(n)
        }.bind(this))
    }, e.prototype.putTrendsFigures = function(e) {
        this.currentTrendsType !== e && (this.removeTrendsFigures(), this.getFigureOnCountries(e).then(function(e) {
            e.forEach(function(e, i) {
                var o = new t.FigureOnCountry(e),
                    n = o.getObject();
                this.animationController.createRotationAnimator(o.mesh, {
                    duration: 5e3
                }), this.sceneController.scene.add(n), this.trendsFigures.push(o)
            }, this)
        }.bind(this)), this.currentTrendsType = e)
    }, e.prototype.removeTrendsFigures = function() {
        t.Utility.isArray(this.trendsFigures) && this.trendsFigures.forEach(function(t) {
            t.dispose()
        }, this), this.trendsFigures = [], this.currentTrendsType = null
    }, e.prototype.putLandmarkFigures = function() {
        var e = t.FigureMeshModel.Type.Landmarks;
        this.landmarkFigures && this.landmarkFigures.length > 0 && this.landmarkFigures.forEach(function(t) {
            t.dispose()
        }, this), this.landmarkFigures = [], this.getFigureOnCountries(e).then(function(t) {
            t.forEach(function(t, e) {
                var i = new FigureOnCountry(t),
                    o = i.getObject();
                this.sceneController.scene.add(o), this.landmarkFigures.push(i)
            }, this)
        }.bind(this))
    }, e.prototype.putPegmanFigures = function() {
        return new Promise(function(e, i) {
            this.xhrLoader.load(t.Settings.json.pegmansPath, function(e) {
                var i = JSON.parse(e),
                    o = i.pegmans,
                    n = [];
                o.forEach(function(e) {
                    var i = e.code,
                        o = this.locator.getModel(t.PegmanMeshModel, i, {
                            path: e.path
                        });
                    o.inflate(e), n.push(o)
                }, this), Promise.all(n.map(function(t) {
                    return t.waitLoad()
                })).then(function() {
                    n.forEach(function(t) {
                        t.setupObject();
                        var e = t.getObject();
                        this.sceneController.scene.add(e)
                    }, this)
                }.bind(this))
            }.bind(this))
        }.bind(this))
    }, e.prototype.getPegmanModels = function() {
        var e = this.locator.getModels(t.PegmanMeshModel);
        return e
    }, e.prototype.removePegmans = function() {
        var t = this.getPegmanModels();
        t.forEach(function(t) {
            var e = t.getObject();
            this.sceneController.scene.remove(e)
        }, this)
    }, e.prototype.putCloudsRandom = function(e) {
        return new Promise(function(i, o) {
            (new THREE.JSONLoader).load(t.Settings.models.cloudPath, function(o, n) {
                var r = new THREE.MeshBasicMaterial({
                    shading: THREE.FlatShading,
                    transparent: !1,
                    color: 16777215
                });
                this.cloud = new THREE.Mesh(o, r), this.cloud.name = "Cloud";
                for (var s = 0; s < e; s++) {
                    var a = this.cloud.clone(),
                        l = new THREE.Vector3(Math.random() - .5, Math.random() - .5, Math.random() - .5);
                    l.setLength(t.Settings.models.cloudBaseHeight + 500 * Math.random()), a.position.copy(l);
                    var c = 100 + 200 * Math.random();
                    a.scale.set(c, c, c), t.Utility.standUpright(a), this.sceneController.scene.add(a)
                }
                i()
            }.bind(this))
        }.bind(this))
    }, e.prototype._debugPutFigureOnCountries = function(t) {
        this.getFigureOnCountries(t).then(function(t) {
            t.forEach(function(t, e) {
                var i = new FigureOnCountry(t),
                    o = i.getObject(),
                    n = new THREE.Vector3(400 * e, 1e4, (-1e3)).setLength(11e3);
                o.position.copy(n), i.standUpright(), this.sceneController.scene.add(o)
            }, this)
        }.bind(this))
    }, e.prototype.setTrendsHaloEffect = function(e) {
        var i = this.sceneController.player;
        this.trendsHaloEffect || (this.trendsHaloEffect = this.haloEffectController.generate(i));
        var o = t.Utility.arrayFind(this.trendsFigures, function(t) {
            var i = t.model;
            return i.id === e.id
        });
        if (!o) return this.trendsHaloEffect.hide(), !1;
        var n = o.model.getPosition();
        n.setLength(n.length() + 200), this.trendsHaloEffect.setPosition(n), this.sceneController.scene.add(this.trendsHaloEffect.object), this.trendsHaloEffect.show()
    }, e.prototype.hideTrendsHaloEffect = function() {
        this.trendsHaloEffect && this.trendsHaloEffect.hide()
    }, e.prototype.reset = function() {
        this.removeTrendsFigures(), this.removePegmans()
    }, e.prototype.onDisengageStart = function() {
        var e = (new THREE.Vector3).copy(t.Settings.player.disengagePosition).normalize();
        t.Utility.isArray(this.trendsFigures) && this.trendsFigures.forEach(function(t) {
            t.onDisengageStart(e)
        }), t.Utility.isArray(this.landmarkFigures) && this.landmarkFigures.forEach(function(t) {
            t.onDisengageStart(e)
        });
        var i = this.getPegmanModels();
        t.Utility.isArray(i) && i.forEach(function(t) {
            t.onDisengageStart(e)
        })
    }, e.prototype.onDisengageFinish = function() {
        t.Utility.isArray(this.trendsFigures) && this.trendsFigures.forEach(function(t) {
            t.onDisengageFinish()
        }), t.Utility.isArray(this.landmarkFigures) && this.landmarkFigures.forEach(function(t) {
            t.onDisengageFinish()
        });
        var e = this.getPegmanModels();
        t.Utility.isArray(e) && e.forEach(function(t) {
            t.onDisengageFinish()
        })
    };
    var i = null;
    e.getInstance = function() {
        return i || (i = new e), i
    }, t.FigureManager = e
}(window),
function(t) {
    "use strict";

    function e(e, i) {
        t.EventDispatcher.call(this), i = i || {};
        var o = {
            minDistance: 0,
            maxDistance: null
        };
        this.object = new THREE.Object3D, this.object.name = "Player", this.camera = e, this.minDistance = i.minDistance || o.minDistance, this.maxDistance = i.maxDistance || o.maxDistance, this.seeking = !1, this.stopMove(), this.initialize()
    }
    e.movingMode = {
        normal: 0,
        slowDown: 1,
        accelerate: 2,
        stop: -1
    }, e.HeightLevel = {
        Low: 12e3,
        Middle: 13e3,
        High: 15e3
    }, e.EventType = {
        HeightLevelChange: "heightLevelChange"
    }, e.prototype = Object.create(t.EventDispatcher.prototype), e.prototype.constructor = e, e.prototype.$class = "Player", e.prototype.movingMode = e.movingMode.normal, e.prototype.object = null, e.prototype.camera = null, e.prototype.cockpitView = null, e.prototype.hudCanvas = null, e.prototype.startPosition = null, e.prototype.startLookingAt = null, e.prototype.chapterModel = null, e.prototype.accWait = null, e.prototype.fadeSpeedAnimator = null, e.prototype.autopilotAnimator = null, e.prototype.isDisengage = !1, e.prototype.needsCursor = !1, e.prototype.sceneChanger = null, e.prototype.controls = null, e.prototype.cursor = null, e.prototype.heightLevel = e.HeightLevel.Low, e.prototype.initialize = function() {
        this.object.add(this.camera), this.setupCockpitView(), this.setupControls(), this.setModeNone(), this.setupCursor(), this.origin = new THREE.Vector3(0, 0, 0), this.position = new THREE.Vector3(0, 1, 0), this.forward = new THREE.Vector3(0, 0, 1), this.previousForward = new THREE.Vector3(0, 0, 1), this.sceneChanger = new t.SceneChanger(this), this.initializedPose = !1
    }, e.prototype.setupCursor = function() {
        var t = 1,
            e = new THREE.PlaneGeometry(t, t),
            i = new THREE.MeshBasicMaterial({
                map: (new THREE.TextureLoader).load("img/cursor.png"),
                transparent: !0
            });
        this.cursor = new THREE.Mesh(e, i), this.cursor.position.z = -30, this.cursor.name = "Cursor", this.cursor.renderOrder = 1e4, this.camera.add(this.cursor)
    }, e.prototype.setupControls = function() {
        function e(t) {
            console.log("deviceorientation"), t.alpha && (i.controls = new THREE.DeviceOrientationControls(i.camera, (!0)), i.controls.connect(), i.controls.update(), window.removeEventListener("deviceorientation", e, !1))
        }
        this.controls = new t.SightControls(this.camera);
        var i = this;
        window.addEventListener("deviceorientation", e, !1)
    }, e.prototype.setupCockpitView = function() {
        this.hudCanvas = new t.HUD.Canvas(this.camera), this.cockpitView = new t.CockpitView(this)
    }, e.prototype.initPose = function() {
        var t = this.forward.normalize(),
            e = this.position.clone().sub(this.origin).normalize(),
            i = e.clone().cross(t).normalize();
        this.previousForward = t;
        var o = new THREE.Matrix4,
            n = o.elements;
        n[0] = i.x, n[1] = i.y, n[2] = i.z, n[3] = 0, n[4] = e.x, n[5] = e.y, n[6] = e.z, n[7] = 0, n[8] = t.x, n[9] = t.y, n[10] = t.z, n[11] = 0, n[12] = this.position.x, n[13] = this.position.y, n[14] = this.position.z, n[15] = 1, this.object.matrixAutoUpdate = !1, this.object.matrix = o, this.object.updateMatrixWorld()
    }, e.prototype.getUp = function() {
        var t = new THREE.Vector3,
            e = new THREE.Vector3,
            i = new THREE.Vector3;
        return function() {
            return this.camera.matrixWorld.extractBasis(t, e, i), e
        }
    }(), e.prototype.getForward = function() {
        var t = new THREE.Vector3,
            e = new THREE.Vector3,
            i = new THREE.Vector3;
        return function() {
            return this.camera.matrixWorld.extractBasis(t, e, i), i
        }
    }(), e.prototype.update = function() {
        this.move(), this.cockpitView.update(), this.updateOpacity(), this.controls && this.controls.update(), this.seeking && this.checkGoal(), this.isDisengage && this.moveDisengage()
    }, e.prototype.updateOpacity = function() {
        var t = this.position.clone().normalize(),
            e = this.getForward().negate(),
            i = e.dot(t),
            o = THREE.Math.clamp(i, 0, 1);
        this.needsCursor ? this.cursor.material.opacity = 1 : this.cursor.material.opacity = o;
        var n = 1 - o;
        this.cockpitView.opacity = n
    }, e.prototype.moveDisengage = function() {
        var e = new THREE.Vector3(0, 0, 0),
            i = new THREE.Vector3;
        return function() {
            var o = t.Settings.player.disengageSpeed * (Time.deltaTime / 1e3);
            i.subVectors(this.position, e).setLength(o), this.position.add(i)
        }
    }(), e.prototype.move = function() {
        this.initializedPose || (this.initPose(), this.initializedPose = !0);
        var t = this.speed * (Time.deltaTime / 1e3),
            i = this.getForward().setLength(t);
        if (this.position.sub(i), !this.isDisengage) {
            var o = this.position.length();
            o < this.minDistance ? this.position.setLength(this.minDistance) : null !== this.maxDistance && o > this.maxDistance && this.position.setLength(this.maxDistance);
            var n = this.position.length();
            n > e.HeightLevel.High ? this.heightLevel !== e.HeightLevel.High && (this.heightLevel = e.HeightLevel.High, this.fire(e.EventType.HeightLevelChange, {
                level: e.HeightLevel.High
            })) : n > e.HeightLevel.Middle && this.heightLevel !== e.HeightLevel.Middle && (this.heightLevel = e.HeightLevel.Middle, this.fire(e.EventType.HeightLevelChange, {
                level: e.HeightLevel.Middle
            })), n < e.HeightLevel.Low ? this.heightLevel !== e.HeightLevel.Low && (this.heightLevel = e.HeightLevel.Low, this.fire(e.EventType.HeightLevelChange, {
                level: e.HeightLevel.Low
            })) : n < e.HeightLevel.Middle && this.heightLevel !== e.HeightLevel.Middle && (this.heightLevel = e.HeightLevel.Middle, this.fire(e.EventType.HeightLevelChange, {
                level: e.HeightLevel.Middle
            }))
        }
        var r = this.position.clone().sub(this.origin).normalize(),
            s = r.clone().cross(this.previousForward).normalize(),
            a = s.clone().cross(r).normalize();
        this.previousForward = a;
        var l = new THREE.Matrix4,
            c = l.elements;
        c[0] = s.x, c[1] = s.y, c[2] = s.z, c[3] = 0, c[4] = r.x, c[5] = r.y, c[6] = r.z, c[7] = 0, c[8] = a.x, c[9] = a.y, c[10] = a.z, c[11] = 0, c[12] = this.position.x, c[13] = this.position.y, c[14] = this.position.z, c[15] = 1, this.object.matrixAutoUpdate = !1, this.object.matrix = l, this.object.updateMatrixWorld()
    }, e.prototype.getLatLonAzimuth = function() {
        var e = this.position.clone(),
            i = e.clone().sub(this.getForward()),
            o = t.Utility.latLonFromXYZ(e.x, e.y, e.z),
            n = t.Utility.latLonFromXYZ(i.x, i.y, i.z),
            r = Math.atan2(-(n.lon - o.lon), n.lat - o.lat);
        return {
            lat: o.lat,
            lon: o.lon,
            azimuth: r
        }
    }, e.prototype.getCamera = function() {
        return this.camera
    }, e.prototype.setSpeed = function(t) {
        this.speed = t
    }, e.prototype.slowDownMove = function() {
        this.cancelMovingModeTransition(), this.cancelAutopilot(), this.movingMode = e.movingMode.slowDown, this.setSpeed(t.Settings.player.slowDownSpeed)
    }, e.prototype.normalMove = function(i) {
        this.cancelMovingModeTransition(), this.cancelAutopilot(), this.movingMode = e.movingMode.normal, i ? this.fadeSpeedAnimator = t.AnimateController.createLinearAnimator({
            duration: 1e3,
            fromValue: this.speed,
            toValue: t.Settings.player.speed,
            callback: function(t) {
                this.setSpeed(t)
            }.bind(this)
        }) : this.setSpeed(t.Settings.player.speed)
    }, e.prototype.accMove = function() {
        if (this.movingMode !== e.movingMode.accelerate) {
            var i = this.movingMode;
            this.cancelMovingModeTransition(), this.cancelAutopilot(), this.movingMode = e.movingMode.accelerate, this.setSpeed(t.Settings.player.accSpeed), this.accWait = new Wait(t.Settings.player.accelerationTime, function() {
                this.setMovingMode(i), this.accWait = null
            }.bind(this))
        }
    }, e.prototype.stopMove = function() {
        this.cancelMovingModeTransition(), this.cancelAutopilot(), this.movingMode = e.movingMode.stop, this.setSpeed(0)
    }, e.prototype.cancelMovingModeTransition = function() {
        this.accWait && (this.accWait.cancel(), this.accWait = null), this.fadeSpeedAnimator && (this.fadeSpeedAnimator.cancel(), this.fadeSpeedAnimator = null)
    }, e.prototype.setMovingMode = function(t) {
        switch (t) {
            case e.movingMode.normal:
                this.normalMove();
                break;
            case e.movingMode.slowDown:
                this.slowDownMove();
                break;
            case e.movingMode.accelerate:
                this.accMove();
                break;
            case e.movingMode.stop:
                this.stopMove()
        }
    }, e.prototype.getHudCanvas = function() {
        return this.hudCanvas
    }, e.prototype.setStart = function(t, e) {
        this.startPosition = t, this.startLookingAt = e
    }, e.prototype.setChapterModel = function(e) {
        this.chapterModel && this.chapterModel.removeListener(t.ChapterModel.EventType.GoalChange, this.goalChangeHandler.bind(this)), e.addListener(t.ChapterModel.EventType.GoalChange, this.goalChangeHandler.bind(this), e), this.chapterModel = e
    }, e.prototype.goalChangeHandler = function(t) {
        this.cockpitView.setGoal(t.goal)
    }, e.prototype.startSeek = function() {
        this.seeking = !0, this.chapterModel.start()
    }, e.prototype.stopSeek = function() {
        this.seeking = !1, this.setModeNone(), this.chapterModel && this.chapterModel.stop()
    }, e.prototype.checkGoal = function() {
        this.chapterModel.checkGoal(this.position)
    }, e.prototype.autopilot = function(e, i) {
        return new Promise(function(o, n) {
            console.log("Player autopilot start.");
            var r = this;
            r.stopMove();
            var s = this.position.clone();
            this.autopilotAnimator = t.AnimateController.createEaseOutAnimator({
                duration: t.Settings.player.autopilotDuration,
                fromValue: 0,
                toValue: 1,
                callback: function(t) {
                    var o = new THREE.Vector3,
                        n = r.getForward().clone().setLength(i);
                    o.addVectors(e, n), r.position.lerpVectors(s, o, t)
                },
                finish: function() {
                    o(), console.log("Player autopilot finish.")
                }
            })
        }.bind(this))
    }, e.prototype.cancelAutopilot = function() {
        this.autopilotAnimator && !this.autopilotAnimator.stopped && (console.log("Player autopilot cancel."), this.autopilotAnimator.cancel(), this.autopilotAnimator = null)
    }, e.prototype.disengage = function() {
        this.cancelAutopilot(), this.setMovingMode(e.movingMode.stop);
        var i = t.Settings.player.disengagePosition.x,
            o = t.Settings.player.disengagePosition.y,
            n = t.Settings.player.disengagePosition.z;
        this.position.set(i, o, n), this.isDisengage = !0
    }, e.prototype.cancelDisengage = function() {
        this.setMovingMode(e.movingMode.slowDown), this.isDisengage = !1
    }, e.prototype.setModeNone = function() {
        this.cockpitView.state = new t.CockpitViewStateNone
    }, e.prototype.setModeNormal = function() {
        this.cockpitView.state = new t.CockpitViewStateNormal
    }, e.prototype.setModeMiniMapMode = function() {
        this.cockpitView.state = new t.CockpitViewStateMiniMapMode
    }, e.prototype.setModeFreeMode = function() {
        this.cockpitView.state = new t.CockpitViewStateFreeMode
    }, e.prototype.setModeSeek = function() {
        this.cockpitView.state = new t.CockpitViewStateSeek
    }, e.prototype.setModeGoal = function() {
        this.cockpitView.state = new t.CockpitViewStateGoal
    }, e.prototype.setStarsCount = function(t) {
        this.cockpitView.setStarsCount(t)
    }, e.prototype.nextStar = function() {
        return this.cockpitView.stars.nextStar()
    }, e.prototype.fadeIn = function(t) {
        return this.sceneChanger.fadeIn(t)
    }, e.prototype.fadeOut = function(t) {
        return this.sceneChanger.fadeOut(t)
    }, e.prototype.fadeOutIn = function(e) {
        return new Promise(function(i, o) {
            this.fadeOut().then(function() {
                t.Utility.isFunction(e) && e(), this.fadeIn().then(i)
            }.bind(this))
        }.bind(this))
    }, e.prototype.align = function() {
        this.controls.align()
    }, e.prototype.alignToBottom = function() {
        this.controls.alignToBottom()
    }, e.prototype.startDisengage = function(e) {
        return this.alignToBottom(), this.disengage(), this.setModeNone(), t.ApplicationController.sceneController.fogEnabled = !1, t.ApplicationController.sceneController.highCameraEnabled = !0, this.fadeIn()
    }, Object.defineProperty(e.prototype, "opacity", {
        get: function() {
            return this.cockpitView.opacity
        },
        set: function(t) {
            this.cockpitView.opacity = t
        }
    }), t.Player = e
}(window), SightControls.prototype = {
        constructor: SightControls,
        init: function() {
            this.mouse = {
                x: 0,
                y: 0
            }, this.previousMouse = {
                x: 0,
                y: 0
            }, this.quaternion = new THREE.Quaternion
        },
        setupEvents: function() {
            this.element.addEventListener("mousemove", this, !1), document.addEventListener("keydown", this, !1), document.addEventListener("keyup", this, !1)
        },
        handleKeyDown: function(t) {
            t.altKey && (this.previousMouse.x = 0, this.previousMouse.y = 0)
        },
        handleKeyUp: function(t) {
            this.previousMouse.x = 0, this.previousMouse.y = 0
        },
        handleMouseMove: function(t) {
            if (t.altKey) {
                if (0 === this.previousMouse.x && 0 === this.previousMouse.y) return this.previousMouse.x = t.pageX, void(this.previousMouse.y = t.pageY);
                var e = t.pageX - this.previousMouse.x,
                    i = t.pageY - this.previousMouse.y;
                this.mouse.x -= e, this.mouse.y -= i, this.mouse.x <= -180 ? this.mouse.x += 360 : this.mouse.x > 180 && (this.mouse.x -= 360), this.mouse.y = THREE.Math.clamp(this.mouse.y, -85, 85), this.previousMouse.x = t.pageX, this.previousMouse.y = t.pageY
            }
        },
        handleEvent: function(t) {
            "mousemove" === t.type ? this.handleMouseMove(t) : "keydown" === t.type ? this.handleKeyDown(t) : "keyup" === t.type && this.handleKeyUp(t)
        },
        align: function() {
            this.mouse.x = 0, this.mouse.y = 0, this.update()
        },
        alignToBottom: function() {
            this.mouse.x = 0, this.mouse.y = -85, this.update()
        },
        update: function() {
            var t = THREE.Math.degToRad(this.mouse.x),
                e = THREE.Math.degToRad(this.mouse.y),
                i = new THREE.Euler(e, t, .01, "YXZ");
            this.quaternion.setFromEuler(i), this.camera.rotation.setFromQuaternion(this.quaternion)
        }
    },
    function(t) {
        "use strict";

        function e() {
            this.initialize()
        }

        function i(t) {
            this.initialize(t)
        }
        e.prototype = {
            constructor: e,
            $class: "HaloEffectController",
            effects: null,
            initialize: function() {
                this.effects = []
            },
            generate: function(t) {
                var e = new i(t);
                return this.effects.push(e), e
            },
            update: function() {
                this.effects.forEach(function(t) {
                    t.update()
                })
            }
        }, i.prototype = {
            constructor: i,
            $class: "HaloEffect",
            bgScale: 1500,
            particleSize: 40,
            particleScale: 70,
            object: null,
            player: null,
            bgPlane: null,
            particles: null,
            initialize: function(t) {
                var e = this;
                e.player = t, e.object = new THREE.Object3D, e.object.name = "HaloEffect", e.inflate()
            },
            inflate: function() {
                var t = "textures/halo_bg.png",
                    e = "textures/halo_particle.png",
                    i = (new THREE.TextureLoader).load(t),
                    o = (new THREE.TextureLoader).load(e);
                return function() {
                    var t = this,
                        e = new THREE.MeshBasicMaterial({
                            map: i,
                            fog: !1,
                            transparent: !0,
                            depthWrite: !1
                        }),
                        n = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), e);
                    n.scale.set(t.bgScale, t.bgScale, t.bgScale), n.name = "halo_bg_plane", n.position.z = -180, n.renderOrder = 0, t.object.add(n), t.bgPlane = n;
                    var r = new THREE.Geometry;
                    r.vertices.push(new THREE.Vector3(Math.random() - .5, Math.random() - .5, Math.random() - .5).setLength(.5), new THREE.Vector3(Math.random() - .5, Math.random() - .5, Math.random() - .5).setLength(1), new THREE.Vector3(Math.random() - .5, Math.random() - .5, Math.random() - .5).setLength(1.5), new THREE.Vector3(Math.random() - .5, Math.random() - .5, Math.random() - .5).setLength(2), new THREE.Vector3(Math.random() - .5, Math.random() - .5, Math.random() - .5).setLength(2.5));
                    var s = new THREE.PointsMaterial({
                            map: o,
                            size: t.particleSize,
                            fog: !1,
                            transparent: !0
                        }),
                        a = new THREE.Points(r, s);
                    a.name = "halo_particles", a.renderOrder = 0, a.scale.set(t.particleScale, t.particleScale, t.particleScale), t.object.add(a), t.particles = a
                }
            }(),
            update: function() {
                this.object.lookAt(this.player.position);
                var t = Time.deltaTime;
                this.particles.geometry.vertices.forEach(function(e) {
                    var i = e.length() * (1 + t / 1e3);
                    i > 7 ? (e.x = Math.random() - .5, e.y = Math.random() - .5, e.z = Math.random() - .5) : e.setLength(i)
                }), this.particles.geometry.verticesNeedUpdate = !0, this.particles.rotation.y = this.particles.rotation.y + .03
            },
            setPosition: function(t) {
                this.object.position.copy(t), this.standUpright()
            },
            standUpright: function() {
                t.Utility.standUpright(this.object)
            },
            show: function() {
                this.object.visible = !0
            },
            hide: function() {
                this.object.visible = !1
            },
            clone: function() {
                var t = new i(this.player);
                return t
            }
        }, t.HaloEffectController = e, t.HaloEffect = i
    }(window),
    function(t) {
        "use strict";

        function e(t, e) {
            this.player = t, this.position = e, this.initialize()
        }
        e.prototype = {
            constructor: e,
            $class: "DestinationPin",
            _visible: !1,
            player: null,
            object: null,
            pinMesh: null,
            position: null,
            animationController: null,
            initialize: function() {
                this.object = new THREE.Object3D, this.object.name = "DestinationPin", this.animationController = t.AnimateController.getInstance(), this.setPosition(this.position), this.initializePinMesh()
            },
            initializePinMesh: function() {
                var t = (new THREE.TextureLoader).load("img/pin.png"),
                    e = new THREE.PlaneGeometry(1, 1),
                    i = new THREE.MeshBasicMaterial({
                        map: t,
                        transparent: !0,
                        side: THREE.DoubleSide
                    }),
                    o = new THREE.Mesh(e, i);
                o.position.y = .5;
                var n = 200;
                o.scale.set(n, n, n), o.renderOrder = 0, this.object.add(o), this.pinMesh = o, this.animationController.createRotationAnimator(this.pinMesh, {
                    duration: 5e3
                })
            },
            getObject: function() {
                return this.object
            },
            update: function() {},
            setPosition: function(t) {
                this.object.position.copy(t), this.standUpright()
            },
            standUpright: function() {
                t.Utility.standUpright(this.object)
            },
            faceTo: function() {
                var t = new THREE.Vector3,
                    e = new THREE.Vector3(0, 1, 0);
                return function(i) {
                    t.subVectors(i, this.object.position);
                    var o = this.pinMesh.worldToLocal(t),
                        n = Math.atan(o.x / o.z);
                    o.z < 0 && (n += Math.PI), this.pinMesh.rotateOnAxis(e, n)
                }
            }(),
            jumpUp: function() {
                return new Promise(function(t, e) {
                    var i = this.object.position,
                        o = i.length();
                    this.animationController.createLinearAnimator({
                        duration: 2e3,
                        fromValue: 0,
                        toValue: 2e3,
                        callback: function(t) {
                            i.setLength(o + t), this.setPosition(i)
                        }.bind(this),
                        finish: function() {
                            this.visible = !1, t()
                        }.bind(this)
                    })
                }.bind(this))
            },
            dispose: function() {
                this.pinMesh.material.dispose(), this.object = null
            },
            get visible() {
                return this._visible
            },
            set visible(t) {
                this._visible = t, this.element.visible = t
            }
        }, Object.defineProperty(e.prototype, "visible", {
            get: function() {
                return this._visible
            },
            set: function(t) {
                this._visible = t, this.pinMesh && (this.pinMesh.visible = t)
            }
        }), t.DestinationPin = e
    }(window),
    function(t) {
        "use strict";

        function e(t, e) {
            this.x = t, this.y = e, this.hudX = 0, this.hudY = 0
        }

        function i(t, i) {
            e.call(this), this.xFromCenter = t, this.yFromCenter = i, this.adjust()
        }

        function o(t, e) {
            this.width = t, this.height = e, this.halfWidth = t / 2, this.halfHeight = e / 2, this.hudWidth = 0, this.hudHeight = 0
        }

        function n(t, i, n, r) {
            e.prototype.isPrototypeOf(t) ? (this.position = t, this.size = i) : o.prototype.isPrototypeOf(n) ? (this.position = new e(t, i), this.size = n) : (this.position = new e(t, i), this.size = new o(n, r))
        }

        function r(t) {
            this.init(t)
        }
        var s = t.HUD ? t.HUD : t.HUD = {};
        s.isVR = !1, s.SCREEN_WIDTH = window.innerWidth, s.SCREEN_HEIGHT = window.innerHeight, e.prototype.adjust = function() {}, s.Position = e, i.prototype = Object.create(e.prototype), i.prototype.constructor = i, i.prototype.adjust = function() {
            return this.x = s.SCREEN_WIDTH / 2 + this.xFromCenter * (s.isVR ? 2 : 1), this.y = s.SCREEN_HEIGHT / 2 + this.yFromCenter, this
        }, s.PositionFromCenter = i, o.prototype = {
            constructor: o,
            multiplyScalar: function(t) {
                this.width *= t, this.height *= t, this.halfWidth = this.width / 2, this.halfHeight = this.height / 2, this.hudWidth *= t, this.hudHeight *= t
            }
        }, s.Size = o, s.Frame = n, r.prototype = {
            constructor: r,
            object: null,
            camera: null,
            distance: 50,
            huds: null,
            init: function(e) {
                this.camera = e, this.object = new THREE.Object3D, this.object.name = "HUD Canvas", s.isVR ? (this.object.position.z = -(1.5 * this.distance), this.object.position.y = -5) : (this.object.position.z = -(1.05 * this.distance), this.object.position.y = 0), this.camera.add(this.object), this.huds = [];
                var i = THREE.Math.degToRad(.5 * this.camera.fov);
                this.heightUnit = this.distance * Math.tan(i) * 2, this.widthUnit = this.heightUnit * this.camera.aspect * (s.isVR ? .5 : 1), t.DEBUG && this._debugLayoutGuide()
            },
            _debugLayoutGuide: function() {
                var e = new THREE.PlaneGeometry(1, 1),
                    i = new THREE.MeshBasicMaterial({
                        color: 16711680,
                        wireframe: !0
                    }),
                    o = new THREE.Mesh(e, i),
                    n = new THREE.RingGeometry(.45, .31, 16, 2),
                    r = new THREE.MeshBasicMaterial({
                        color: 16711680,
                        wireframe: !0
                    }),
                    a = new THREE.Mesh(n, r),
                    l = new THREE.RingGeometry(.31, .25, 16, 1),
                    c = new THREE.MeshBasicMaterial({
                        color: 7829248,
                        wireframe: !0
                    }),
                    h = new THREE.Mesh(l, c);
                o.add(a), o.add(h), o.position.z = -.01;
                var p = new t.HUD.Size(420, 420),
                    u = new t.HUD.PositionFromCenter((-p.halfWidth), (-p.halfHeight));
                this._dummy = new s.ObjectElement({
                    frame: new s.Frame(u, p),
                    object: o,
                    modelHeight: 1
                }), this.add(this._dummy)
            },
            add: function(e) {
                if (!t.HUD.Element.prototype.isPrototypeOf(e)) throw new Error("Must take an argument of `HUDElement`.");
                e.HUDCanvas = this, e.adjust(), e.realize(), this.huds.push(e), this.object.add(e.object)
            },
            remove: function(t) {
                t.HUDCanvas = null, this.object.remove(t.object);
                var e = this.huds.indexOf(t);
                e !== -1 && this.huds.splice(e, 1)
            }
        }, s.Canvas = r
    }(window),
    function(t) {
        "use strict";

        function e(t) {
            this.initialize(t)
        }

        function i(t) {
            e.call(this, t)
        }

        function o(t) {
            this.initialize(t)
        }

        function n(t) {
            e.call(this, t)
        }

        function r(e) {
            t.HUD.Element.call(this, e)
        }

        function s(t) {
            this.initialize(t)
        }

        function a(t) {
            e.call(this, t)
        }
        var l = t.HUD ? t.HUD : t.HUD = {};
        l.TarnsparentTexture = (new THREE.TextureLoader).load("img/transparent_texture.png"), e.prototype = {
            constructor: e,
            $class: "Element",
            object: null,
            canvas: null,
            HUDCanvas: null,
            context: null,
            texture: null,
            quad: null,
            position: null,
            initialize: function(e) {
                this.object = new THREE.Object3D, this.object.name = this.$class, this.size = e.frame.size, this.position = e.frame.position, this.canvas = t.Utility.createCanvas(this.size.width, this.size.height), this.context = this.canvas.getContext("2d")
            },
            update: function() {
                this.texture && (this.texture.needsUpdate = !0)
            },
            setPosition: function(t, e) {
                this.position.x = t, this.position.y = e, this.adjust(), this.quad.position.x = this.position.hudX, this.quad.position.y = this.position.hudY
            },
            createQuad: function() {
                return new THREE.Object3D
            },
            realize: function() {
                this.quad = this.createQuad(), this.object.add(this.quad)
            },
            adjust: function() {
                this.position.adjust();
                var t = this.HUDCanvas.widthUnit,
                    e = this.HUDCanvas.heightUnit,
                    i = this.size.width / l.SCREEN_WIDTH * (l.isVR ? 2 : 1),
                    o = this.size.height / l.SCREEN_HEIGHT;
                this.size.hudWidth = i * t, this.size.hudHeight = o * e;
                var n = this.position.x / l.SCREEN_WIDTH,
                    r = this.position.y / l.SCREEN_HEIGHT;
                n = 2 * n - 1, r = 1 - 2 * r;
                this.position.y / l.SCREEN_HEIGHT * (e / 2);
                this.position.hudX = (n + i) * t / 2, this.position.hudY = (r - o) * e / 2
            },
            clear: function() {
                this.context && this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
            },
            setOpacity: function(t) {
                this.quad.material.opacity = t
            },
            setRenderOrder: function(t) {
                this.quad && (this.quad.renderOrder = t)
            },
            hide: function() {
                return this.object.visible = !1, Promise.resolve()
            },
            show: function() {
                return this.object.visible = !0, Promise.resolve()
            },
            fadeIn: function(e) {
                var i = this;
                return e = e || 3e3, new Promise(function(o, n) {
                    i.show(), t.AnimateController.createAnimator({
                        duration: e,
                        fromValue: 0,
                        toValue: 1,
                        callback: function(t) {
                            i.setOpacity(t)
                        },
                        finish: function() {
                            o()
                        }
                    })
                })
            },
            fadeOut: function(e) {
                var i = this;
                return e = e || 3e3, new Promise(function(o, n) {
                    t.AnimateController.createAnimator({
                        duration: e,
                        fromValue: 1,
                        toValue: 0,
                        callback: function(t) {
                            i.setOpacity(t)
                        },
                        finish: function() {
                            i.hide(), o()
                        }
                    })
                })
            },
            dispose: function() {
                return this.quad.parent && this.quad.parent.remove(this.quad), this.quad.geometry.dispose(), this.quad.material.dispose(), this.quad = null, this.object.parent && this.object.parent.remove(this.object), this.object = null, this.texture && (this.texture.dispose(), this.texture = null), this.size = null, this.position = null, this.canvas = null, this.context = null, Promise.resolve()
            },
            get visible() {
                return this.object.visible
            },
            set visible(t) {
                this.object.visible = t
            }
        }, l.Element = e, i.prototype = Object.create(e.prototype), i.prototype.constructor = i, i.prototype.$class = "TextElement", i.prototype._text = "", Object.defineProperty(i.prototype, "text", {
            get: function() {
                return this._text
            },
            set: function(t) {
                this._text = t, this.drawText()
            }
        }), i.prototype.initialize = function(e) {
            t.HUD.Element.prototype.initialize.call(this, e), this.text = e.text, this.context.fillStyle = e.color || "white", this.context.font = e.font || "16px " + t.Settings.font.defaultFontFamily, this.context.textAlign = "left", this.context.textBaseline = "top", this.drawText(), this.texture = new THREE.Texture(this.canvas), this.texture.needsUpdate = !0
        }, i.prototype.createQuad = function() {
            var t = new THREE.MeshLambertMaterial({
                    map: this.texture,
                    transparent: !0
                }),
                e = new THREE.PlaneGeometry(this.size.hudWidth, this.size.hudHeight),
                i = new THREE.Mesh(e, t);
            return i.renderOrder = 1e3, i.position.x = this.position.hudX, i.position.y = this.position.hudY, i
        }, i.prototype.drawText = function() {
            this.clear();
            var t = this.text.split("\n"),
                e = this.context.measureText("　").width;
            t.forEach(function(t, i) {
                this.context.fillText(t, 0, e * i)
            }, this), this.update()
        }, l.TextElement = i, o.prototype = Object.create(i.prototype), o.prototype.constructor = o, o.prototype.$class = "TextElementCentered", o.prototype.initialize = function(e) {
            this.object = new THREE.Object3D, this.object.name = this.$class, this.centerX = e.centerX || 0, this.centerY = e.centerY || 0, this.fontSize = e.fontSize || 16, this.fontFamily = e.fontFamily || t.Settings.font.defaultFontFamily, this.fontWeight = e.fontWeight || "normal", this.lineHeight = e.lineHeight || this.fontSize, this.color = e.color || "white", this.fontAttribute = new t.FontAttribute({
                textAlign: "center",
                fontSize: this.fontSize,
                fontFamily: this.fontFamily,
                fontWeight: this.fontWeight,
                lineHeight: this.lineHeight
            }), this.text = e.text
        }, o.prototype.drawText = function() {
            this.clear();
            var e = t.Utility.measureMaxWidth(this.text, this.fontAttribute),
                i = t.Utility.measureHeight(this.text, e, this.fontAttribute);
            this.size = new t.HUD.Size(e, i), this.position = new t.HUD.PositionFromCenter(-this.size.halfWidth + this.centerX, -this.size.halfHeight + this.centerY), this.canvas = t.Utility.createCanvas(e, i), this.context = this.canvas.getContext("2d"), this.context.textAlign = "left", this.context.textBaseline = "top", this.context.fillStyle = this.color, this.context.font = this.fontAttribute.font, t.Utility.fillMultiLineText(this.context, this.text, e, this.fontAttribute), this.texture = new THREE.Texture(this.canvas), this.update()
        }, l.TextElementCentered = o, n.prototype = Object.create(e.prototype), n.prototype.constructor = n, n.prototype.$class = "ImageElement", n.prototype.initialize = function(e) {
            t.HUD.Element.prototype.initialize.call(this, e), this.path = e.path
        }, n.prototype.createQuad = function() {
            var t = new THREE.PlaneGeometry(this.size.hudWidth, this.size.hudHeight),
                e = new THREE.MeshBasicMaterial({
                    map: l.TarnsparentTexture,
                    transparent: !0
                }),
                i = new THREE.Mesh(t, e);
            i.name = "ImageElement-image", i.renderOrder = 1e3, i.position.x = this.position.hudX, i.position.y = this.position.hudY;
            var o = new THREE.TextureLoader;
            return o.load(this.path, function(t) {
                this.texture = t, e.map = t, e = null
            }.bind(this)), i
        }, l.ImageElement = n, r.prototype = Object.create(e.prototype), r.prototype.constructor = r, r.prototype.$class = "CanvasElement", r.prototype.initialize = function(e) {
            t.HUD.Element.prototype.initialize.call(this, e), this.canvas = e.canvas, this.canvas || (this.canvas = t.Utility.createCanvas(this.size.width, this.size.height)), this.context = this.canvas.getContext("2d"), this.texture = new THREE.Texture(this.canvas), this.texture.needsUpdate = !0
        }, r.prototype.createQuad = function() {
            var t = new THREE.PlaneGeometry(this.size.hudWidth, this.size.hudHeight),
                e = new THREE.MeshLambertMaterial({
                    map: this.texture,
                    transparent: !0
                }),
                i = new THREE.Mesh(t, e);
            return i.renderOrder = 1e3, i.position.x = this.position.hudX, i.position.y = this.position.hudY, i
        }, l.CanvasElement = r, s.prototype = Object.create(r.prototype), s.prototype.constructor = s, s.prototype.$class = "CanvasBracketFrameElement", s.prototype.initialize = function(e) {
            t.HUD.CanvasElement.prototype.initialize.call(this, e);
            var i = this.size.width,
                o = this.size.height,
                n = 3,
                r = n / 2,
                s = 28;
            this.context.lineCap = "square", this.context.lineWidth = n, this.context.strokeStyle = "rgba(255, 255, 255, 1.0)", this.context.moveTo(r + s, r), this.context.lineTo(r, r), this.context.lineTo(r, r + s), this.context.moveTo(r + s, o - r), this.context.lineTo(r, o - r), this.context.lineTo(r, o - r - s), this.context.moveTo(i - r - s, r), this.context.lineTo(i - r, r), this.context.lineTo(i - r, r + s), this.context.moveTo(i - r - s, o - r), this.context.lineTo(i - r, o - r), this.context.lineTo(i - r, o - r - s), this.context.stroke(), this.context.fillStyle = "rgba(255, 255, 255, 0.2)", this.context.fillRect(r, r, i - 2 * r, o - 2 * r)
        }, s.prototype.createQuad = function() {
            var e = t.HUD.CanvasElement.prototype.createQuad.call(this);
            return e.position.z = -.1, e
        }, l.CanvasBracketFrameElement = s, a.prototype = Object.create(e.prototype), a.prototype.constructor = a, a.prototype.$class = "ObjectElement", a.prototype.child = null, a.prototype.modelHeight = null, a.prototype.initialize = function(e) {
            t.HUD.Element.prototype.initialize.call(this, e), this.child = e.object, this.child.material && (this.child.material.transparent = !0, this.child.material.materials && this.child.material.materials.forEach(function(t) {
                t.transparent = !0
            })), this.modelHeight = void 0 !== e.modelHeight ? e.modelHeight : 1
        }, a.prototype.createQuad = function() {
            var t = new THREE.Object3D;
            t.add(this.child), t.renderOrder = 1e3, t.position.x = this.position.hudX, t.position.y = this.position.hudY;
            var e = this.modelHeight,
                i = this.size.height,
                o = i / e * (this.HUDCanvas.heightUnit / l.SCREEN_HEIGHT);
            return t.scale.set(o, o, o), t
        }, a.prototype.setOpacity = function(t) {
            this.child.material.opacity = t, this.child.material.materials && this.child.material.materials.forEach(function(e) {
                e.opacity = t
            })
        }, a.prototype.dispose = function() {
            return this.quad.parent && this.quad.parent.remove(this.quad), this.child.parent.remove(this.child), this.child.geometry.dispose(), t.Utility.isFunction(this.child.material.dispose) && this.child.material.dispose(), this.child = null, this.quad = null, this.object.parent && this.object.parent.remove(this.object), this.object = null, this.size = null, this.position = null, this.canvas = null, this.context = null, Promise.resolve()
        }, l.ObjectElement = a, t.HUD = l
    }(window),
    function(t) {
        "use strict";

        function e() {
            this.init()
        }

        function i(t) {
            this.player = t
        }

        function o(e) {
            t.EventDispatcher.call(this), this.object = e
        }

        function n(t) {
            this.init()
        }
        e.EventType = {
            Hover: "hover",
            Unhover: "unhover",
            Click: "click"
        }, e.prototype = {
            constructor: e,
            clickableObjects: null,
            threeObjects: null,
            detectedObject: null,
            createClicker: function(t) {
                this.clicker = new i(t);
                var e = new n;
                return this.clicker.setTimerView(e), this.clicker
            },
            createClickable: function(t) {
                var e = new o(t);
                return this.add(e), e
            },
            init: function() {
                this.clickableObjects = [], this.threeObjects = []
            },
            add: function(t) {
                return o.prototype.isPrototypeOf(t) ? void(this.contains(t) || (this.clickableObjects.push(t),
                    this.threeObjects.push(t.object))) : void console.error(t + " is not prototype of `SightClickable`")
            },
            remove: function(t) {
                if (!o.prototype.isPrototypeOf(t)) return void console.error(t + " is not prototype of `SightClickable`");
                if (this.contains(t)) {
                    var e = this.clickableObjects.indexOf(t);
                    this.clickableObjects.splice(e, 1);
                    var i = this.threeObjects.indexOf(t.object);
                    this.threeObjects.splice(i, 1)
                }
            },
            contains: function(t) {
                return ~~this.clickableObjects.indexOf(t) !== -1
            },
            findClickable: function(t) {
                if (!t) return null;
                for (var e = 0, i = this.clickableObjects.length; e < i; e++)
                    if (this.clickableObjects[e].object === t) return this.clickableObjects[e];
                return null
            },
            search: function(t) {
                var e = new THREE.Raycaster(t.getPosition(), t.getForwerd()),
                    i = e.intersectObjects(this.threeObjects);
                if (0 !== i.length) this.detectedObject !== i[0].object && this.setDetectedObject(i[0].object, t);
                else if (this.detectedObject) {
                    var o = this.findClickable(this.detectedObject);
                    o && o.unhover(), this.detectedObject = null
                }
            },
            setDetectedObject: function(t, e) {
                var i = this.findClickable(this.detectedObject);
                i && i.unhover(), this.detectedObject = t;
                var o = this.findClickable(this.detectedObject);
                e.setClickable(o), o.hover()
            },
            reset: function() {
                this.clicker.endClick()
            }
        };
        var r = null;
        e.getInstance = function() {
            return r || (r = new e), r
        }, e.CLICK_DURATION = 3e3, i.prototype = {
            constructor: i,
            player: null,
            timerView: null,
            clickable: null,
            timerId: -1,
            setupListeners: function() {
                this.clickable && (this.clickable.addListener(e.EventType.Hover, this.startClick, this), this.clickable.addListener(e.EventType.Unhover, this.endClick, this))
            },
            clearListeners: function() {
                this.clickable && (this.clickable.removeListener(e.EventType.Hover, this.startClick), this.clickable.removeListener(e.EventType.Unhover, this.endClick))
            },
            setTimerView: function(t) {
                this.timerView = t, this.timerView.quad.position.x = 0, this.timerView.quad.position.y = 0, this.timerView.quad.position.z = this.player.position.z - 400, this.timerView.quad.visible = !1, this.player.camera.add(this.timerView.quad)
            },
            setClickable: function(t) {
                this.clearListeners(), this.clickable = t, this.setupListeners()
            },
            startClick: function() {
                var t = this;
                t.timerView.quad.visible = !0;
                var i = e.CLICK_DURATION,
                    o = 0,
                    n = Date.now();
                ! function r() {
                    var e = Date.now(),
                        s = e - n;
                    o += s, n = e;
                    var a = o / i;
                    return a >= 1 ? (t.update(1), void t.clickable.click()) : (t.update(a), void(t.timerId = setTimeout(r, 16)))
                }()
            },
            update: function(t) {
                this.timerView && this.timerView.update(t)
            },
            endClick: function() {
                this.timerView.quad.visible = !1, clearTimeout(this.timerId)
            },
            getPosition: function() {
                return this.player.position
            },
            getForwerd: function() {
                var t = new THREE.Vector4(0, 0, 1, 0).applyMatrix4(this.player.camera.matrixWorld);
                return new THREE.Vector3(t.x, t.y, t.z).normalize().negate()
            }
        }, o.prototype = Object.create(t.EventDispatcher.prototype), o.prototype.constructor = o, o.prototype.hover = function() {
            this.fire(e.EventType.Hover)
        }, o.prototype.unhover = function() {
            this.fire(e.EventType.Unhover)
        }, o.prototype.click = function() {
            this.fire(e.EventType.Click)
        }, n.prototype = {
            constructor: n,
            clickable: null,
            quad: null,
            init: function() {
                var t = ["varying vec2 vUv;", "void main(void) {", "vUv = uv;", "vec3 pos = position;", "gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);", "}"].join(""),
                    e = ["precision mediump float;\n", "const float PI = 3.141592653589793;\n", "uniform float Width;\n", "uniform float Cutoff;\n", "varying vec2 vUv;\n", "void main(void) {\n", "vec2 pos = (vUv - vec2(0.5)) * 2.0;\n", "// 上記の位置から角度を算出（0〜1の範囲）\n", "// また今回は上端から（つまり90度）のところから時計回りに徐々に透明にしたいので\n", "// 90度だけ回転した状態に変換しておく\n", "float tan = pos.y / pos.x;\n", "float angle = (atan(pos.y, pos.x) - atan(1.0, 0.0)) / (PI * 2.0);\n", "// atan2では-180〜180度の値が返されるので、0〜360になるように正規化する\n", "// 角度を0〜1にしているため、実質足すのは1。\n", "if (angle < 0.0) {\n", "    angle += 1.0;\n", "}\n", "float len = length(pos);\n", "// 縁の長さ。極端に短いとエッジがギザギザになる\n", "float edge = 0.03;\n", "float width = 1.0 - Width;\n", "float inner = smoothstep(width, width + edge, len);\n", "float outer = smoothstep(1.0 - edge, 1.00, len);\n", "float opaque = inner - outer;\n", "float cut = angle < Cutoff ? 0.0 : 1.0;\n", "float alpha = opaque * cut;\n", "gl_FragColor = vec4(0.0, 0.0, 0.8, alpha);\n", "}"].join(""),
                    i = new THREE.ShaderMaterial({
                        fragmentShader: e,
                        vertexShader: t,
                        uniforms: {
                            Width: {
                                type: "f",
                                value: .4
                            },
                            Cutoff: {
                                type: "f",
                                value: 0
                            }
                        },
                        transparent: !0
                    }),
                    o = new THREE.PlaneGeometry(30, 30),
                    n = new THREE.Mesh(o, i);
                n.name = "SightTimerView", this.quad = n
            },
            update: function(t) {
                this.quad.material.uniforms.Cutoff.value = 1 - t
            }
        }, t.SightClickSystem = e
    }(window),
    function(t) {
        "use strict";
        var e = function() {
            var t = 0,
                e = 0,
                i = 0,
                o = 1,
                n = !1;
            return {
                start: function() {
                    n = !0, i = Date.now()
                },
                stop: function() {
                    n = !1
                },
                update: function() {
                    if (n) {
                        var r = Date.now();
                        e = r - i, e *= o, t += e, i = r
                    }
                },
                get timeScale() {
                    return o
                },
                set timeScale(t) {
                    o = t
                },
                get time() {
                    return t
                },
                get deltaTime() {
                    return e
                }
            }
        }();
        t.Time = e
    }(window),
    function(t) {
        "use strict";

        function e(t) {
            THREE.Object3D.call(this), this.player = t, this.initialize()
        }
        e.prototype = Object.create(THREE.Object3D.prototype), e.prototype.constructor = e, e.prototype.$class = "ArrowIndicator", e.prototype._opacity = 1, e.prototype.path = "models/arrow.json", e.prototype.player = null, e.prototype.arrow = null, e.prototype.target = null, e.prototype.setTarget = function(t) {
            this.target.copy(t)
        }, e.prototype.loadModel = function() {
            (new THREE.JSONLoader).load(this.path, function(t, e) {
                e.forEach(function(t, e) {
                    t.transparent = !0
                });
                var i = new THREE.MeshFaceMaterial(e);
                this.arrow = new THREE.Mesh(t, i), this.arrow.name = "Arrow inidicator model", this.add(this.arrow)
            }.bind(this)), this.rotation.x = Math.PI / 12
        }, e.prototype.initialize = function() {
            this.name = "Arrow indicator", this.target = new THREE.Vector3, this.loadModel()
        }, e.prototype.update = function() {
            var t, e = new THREE.Matrix4,
                i = new THREE.Vector3,
                o = new THREE.Vector3,
                n = new THREE.Vector3,
                r = new THREE.Vector3,
                s = new THREE.Vector3;
            return function() {
                r = this.player.getForward().clone().normalize(), o = this.player.position.clone().normalize(), i.crossVectors(o, r), n.crossVectors(i, o), e.makeBasis(i, o, n).transpose(), s = this.target.clone(), s.applyMatrix4(e), t = Math.atan2(s.z, s.x) + Math.PI / 2, this.arrow.rotation.y = -t
            }
        }(), Object.defineProperty(e.prototype, "opacity", {
            get: function() {
                return this._opacity
            },
            set: function(t) {
                this._opacity = t, this.arrow.material.materials.forEach(function(e, i) {
                    e.opacity = t
                })
            }
        }), t.ArrowIndicator = e
    }(window),
    function(t) {
        "use strict";
        var e = function(t) {
            this.player = t, this.init()
        };
        e.prototype = {
            constructor: e,
            _visible: !1,
            _opacity: 1,
            object: null,
            map: null,
            arrow: null,
            mapSize: {
                w: 128,
                h: 64
            },
            player: null,
            init: function() {
                var t = this;
                t.object = new THREE.Object3D, t.initMap(), t.initArrow(), t.object.position.z = -2, this.object.visible = this._visible
            },
            initMap: function() {
                var t = this,
                    e = (new THREE.TextureLoader).load("textures/minimap.png"),
                    i = new THREE.PlaneGeometry(t.mapSize.w, t.mapSize.h),
                    o = new THREE.MeshBasicMaterial({
                        color: 16777215,
                        map: e,
                        transparent: !0,
                        opacity: .7
                    });
                t.map = new THREE.Mesh(i, o), t.map.renderOrder = 1e3, t.object.add(t.map)
            },
            initArrow: function() {
                var t = this,
                    e = (new THREE.TextureLoader).load("textures/mini_arrow.png"),
                    i = new THREE.PlaneGeometry(32, 32),
                    o = new THREE.MeshBasicMaterial({
                        color: 16777215,
                        map: e,
                        transparent: !0,
                        opacity: .7
                    });
                t.arrow = new THREE.Mesh(i, o), t.arrow.renderOrder = 1e3, t.arrow.position.z = 1;
                var n = .7;
                t.arrow.scale.set(n, n, n), t.object.add(t.arrow)
            },
            getObject: function() {
                return this.object
            },
            update: function() {
                this.updateArrow()
            },
            updateArrow: function() {
                if (this.player) {
                    var t = this.player.getLatLonAzimuth();
                    this.arrow.rotation.z = t.azimuth;
                    var e = t.lat,
                        i = t.lon,
                        o = i * this.mapSize.w / (2 * Math.PI),
                        n = e * this.mapSize.h / Math.PI;
                    this.arrow.position.x = o, this.arrow.position.y = n
                }
            },
            get visible() {
                return this._visible
            },
            set visible(t) {
                this._visible = t, this.object.visible = t
            },
            get opacity() {
                return this._opacity
            },
            set opacity(t) {
                this._opacity = t, this.map.material.opacity = t, this.arrow.material.opacity = t
            }
        }, t.MiniMap = e
    }(window),
    function(t) {
        "use strict";

        function e(t) {
            THREE.Object3D.call(this), this.player = t, this.initialize()
        }
        e.prototype = Object.create(THREE.Object3D.prototype), e.prototype.constructor = e, e.prototype.$class = "Compass", e.prototype.object = null, e.prototype.mapSize = {
            w: 512,
            h: 512
        }, e.prototype.player = null, e.prototype._opacity = 1, e.prototype.initialize = function() {
            this.name = "Compass";
            var t = (new THREE.TextureLoader).load("img/compass.png"),
                e = new THREE.RingGeometry(.8 * this.mapSize.w, this.mapSize.w, 32),
                i = new THREE.MeshBasicMaterial({
                    color: 16777215,
                    map: t,
                    transparent: !0,
                    opacity: .7
                });
            this.object = new THREE.Mesh(e, i), this.object.renderOrder = 1e3, this.add(this.object)
        }, e.prototype.getObject = function() {
            return this.object
        }, e.prototype.update = function() {
            var t = this.player.getLatLonAzimuth();
            this.object.rotation.z = -t.azimuth
        }, Object.defineProperty(e.prototype, "opacity", {
            get: function() {
                return this._opacity
            },
            set: function(t) {
                this._opacity = t, this.object.material.opacity = t
            }
        }), t.Compass = e
    }(window),
    function(t) {
        "use strict";

        function e() {}

        function i() {
            t.CockpitViewState.call(this)
        }

        function o() {
            t.CockpitViewState.call(this)
        }

        function n() {
            t.CockpitViewState.call(this)
        }

        function r() {
            t.CockpitViewState.call(this)
        }

        function s() {
            t.CockpitViewState.call(this)
        }

        function a() {
            t.CockpitViewState.call(this)
        }

        function l() {
            t.CockpitViewState.call(this)
        }

        function c(t) {
            this.player = t, this.hudCanvas = t.getHudCanvas(), this.initialize()
        }
        e.prototype = {
            constructor: e,
            $class: "CockpitViewState",
            cockpitView: null,
            _opacityValue: -1,
            enter: function() {},
            exec: function() {},
            exit: function() {},
            get opacity() {
                return this._opacityValue
            },
            set opacity(t) {
                this._opacityValue !== t && (t < 0 || (t > 1 && (t = 1), this._opacityValue = t, this._applyOpacity()))
            },
            _applyOpacity: function() {}
        }, i.prototype = Object.create(e.prototype), i.prototype.constructor = i, i.prototype.$class = "CockpitViewStateNone", i.prototype.exec = function() {
            this.cockpitView.icon && (this.cockpitView.icon.visible = !1), this.cockpitView.timer.visible = !1, this.cockpitView.stars.visible = !1, this.cockpitView.currentLocationView.visible = !1, this.cockpitView.arrowIndicator.visible = !1, this.cockpitView.compass.visible = !1, this.cockpitView.miniMap.visible = !1, this.cockpitView.destinationView && (this.cockpitView.destinationView.visible = !1)
        }, o.prototype = Object.create(e.prototype), o.prototype.constructor = o, o.prototype.$class = "CockpitViewStateNormal", o.prototype.exec = function() {
            this.cockpitView.icon && (this.cockpitView.icon.visible = !0), this.cockpitView.timer.visible = !0, this.cockpitView.stars.visible = !0, this.cockpitView.currentLocationView.visible = !0, this.cockpitView.arrowIndicator.visible = !0, this.cockpitView.compass.visible = !0, this.cockpitView.miniMap.visible = !0, this.cockpitView.destinationView && (this.cockpitView.destinationView.visible = !0)
        }, o.prototype._applyOpacity = function() {
            var t = this._opacityValue;
            this.cockpitView.icon && this.cockpitView.icon.setOpacity(t), this.cockpitView.timer.opacity = t, this.cockpitView.stars.opacity = t, this.cockpitView.currentLocationView.opacity = t, this.cockpitView.arrowIndicator.opacity = t, this.cockpitView.compass.opacity = t, this.cockpitView.miniMap.opacity = t, this.cockpitView.destinationView && (this.cockpitView.destinationView.opacity = t)
        }, n.prototype = Object.create(e.prototype), n.prototype.constructor = n, n.prototype.$class = "CockpitViewStateMiniMapMode", n.prototype.exec = function() {
            this.cockpitView.icon && (this.cockpitView.icon.visible = !1), this.cockpitView.timer.visible = !1, this.cockpitView.stars.visible = !1, this.cockpitView.currentLocationView.visible = !0, this.cockpitView.arrowIndicator.visible = !1, this.cockpitView.compass.visible = !1, this.cockpitView.miniMap.visible = !0, this.cockpitView.destinationView && (this.cockpitView.destinationView.visible = !1)
        }, n.prototype._applyOpacity = function() {
            var t = this._opacityValue;
            this.cockpitView.currentLocationView.opacity = t, this.cockpitView.miniMap.opacity = t
        }, r.prototype = Object.create(e.prototype), r.prototype.constructor = r, r.prototype.$class = "CockpitViewStateFreeMode", r.prototype.exec = function() {
            this.cockpitView.icon && (this.cockpitView.icon.visible = !1), this.cockpitView.timer.visible = !1, this.cockpitView.stars.visible = !1, this.cockpitView.currentLocationView.visible = !0, this.cockpitView.arrowIndicator.visible = !1, this.cockpitView.compass.visible = !0, this.cockpitView.miniMap.visible = !0, this.cockpitView.destinationView && (this.cockpitView.destinationView.visible = !1)
        }, r.prototype._applyOpacity = function() {
            var t = this._opacityValue;
            this.cockpitView.currentLocationView.opacity = t, this.cockpitView.compass.opacity = t, this.cockpitView.miniMap.opacity = t
        }, s.prototype = Object.create(e.prototype), s.prototype.constructor = s, s.prototype.$class = "CockpitViewStateSeek", s.prototype.intervalTime = 15e3, s.prototype.intervalWait = null, s.prototype.enter = function() {
            this.intervalWait = new t.Wait(this.intervalTime, function() {
                this.cockpitView.state = new t.CockpitViewStateNoSeek
            }.bind(this))
        }, s.prototype.exit = function() {
            this.intervalWait.cancel()
        }, s.prototype.exec = function() {
            this.cockpitView.icon && (this.cockpitView.icon.visible = !0), this.cockpitView.timer.visible = !0, this.cockpitView.stars.visible = !0, this.cockpitView.currentLocationView.visible = !0, this.cockpitView.arrowIndicator.visible = !0, this.cockpitView.compass.visible = !0, this.cockpitView.miniMap.visible = !0, this.cockpitView.destinationView && (this.cockpitView.destinationView.visible = !0)
        }, s.prototype._applyOpacity = function() {
            var t = this._opacityValue;
            this.cockpitView.icon && this.cockpitView.icon.setOpacity(t), this.cockpitView.timer.opacity = t, this.cockpitView.stars.opacity = t, this.cockpitView.currentLocationView.opacity = t, this.cockpitView.arrowIndicator.opacity = t, this.cockpitView.compass.opacity = t, this.cockpitView.miniMap.opacity = t, this.cockpitView.destinationView && (this.cockpitView.destinationView.opacity = t)
        }, a.prototype = Object.create(e.prototype), a.prototype.constructor = a, a.prototype.$class = "CockpitViewStateNoSeek", a.prototype.intervalTime = 45e3, a.prototype.intervalWait = null, a.prototype.enter = function() {
            this.intervalWait = new t.Wait(this.intervalTime, function() {
                this.cockpitView.state = new t.CockpitViewStateSeek
            }.bind(this))
        }, a.prototype.exit = function() {
            this.intervalWait.cancel()
        }, a.prototype.exec = function() {
            this.cockpitView.icon && (this.cockpitView.icon.visible = !0), this.cockpitView.timer.visible = !0, this.cockpitView.stars.visible = !0, this.cockpitView.currentLocationView.visible = !0, this.cockpitView.arrowIndicator.visible = !0, this.cockpitView.compass.visible = !0, this.cockpitView.miniMap.visible = !0, this.cockpitView.destinationView && (this.cockpitView.destinationView.visible = !1)
        }, a.prototype._applyOpacity = function() {
            var t = this._opacityValue;
            this.cockpitView.icon && this.cockpitView.icon.setOpacity(t), this.cockpitView.timer.opacity = t, this.cockpitView.stars.opacity = t, this.cockpitView.currentLocationView.opacity = t, this.cockpitView.arrowIndicator.opacity = t, this.cockpitView.compass.opacity = t, this.cockpitView.miniMap.opacity = t
        }, l.prototype = Object.create(e.prototype), l.prototype.constructor = l, l.prototype.$class = "CockpitViewStateGoal", l.prototype.exec = function() {
            this.cockpitView.icon && (this.cockpitView.icon.visible = !0), this.cockpitView.timer.visible = !0, this.cockpitView.stars.visible = !0, this.cockpitView.currentLocationView.visible = !0, this.cockpitView.arrowIndicator.visible = !0, this.cockpitView.compass.visible = !0, this.cockpitView.miniMap.visible = !0, this.cockpitView.destinationView && (this.cockpitView.destinationView.visible = !1)
        }, l.prototype._applyOpacity = function() {
            var t = this._opacityValue;
            this.cockpitView.icon && this.cockpitView.icon.setOpacity(t), this.cockpitView.timer.opacity = t, this.cockpitView.stars.opacity = t, this.cockpitView.currentLocationView.opacity = t, this.cockpitView.arrowIndicator.opacity = t, this.cockpitView.compass.opacity = t, this.cockpitView.miniMap.opacity = t
        }, c.prototype = {
            constructor: c,
            _visible: !1,
            hudCanvas: null,
            icon: null,
            timer: null,
            stars: null,
            arrowIndicator: null,
            compass: null,
            destinationView: null,
            currentLocationView: null,
            miniMap: null,
            goalCountry: null,
            initialized: !1,
            _state: null,
            get state() {
                return this._state
            },
            set state(t) {
                this._state && (console.log("Exit state " + this._state.$class), this._state.exit());
                var e = this._state;
                this._state = t, this._state.cockpitView = this, e && (this._state.opacity = e.opacity, e = null), console.log("Enter state " + this._state.$class), this._state.enter(), this._state.exec()
            },
            setupIcon: function() {
                var e = !0;
                if (this.icon && (e = this.icon.visible, this.icon.dispose()), this.iconType) {
                    var i = new t.HUD.Size(32, 32),
                        o = new t.HUD.PositionFromCenter((-80), (-108));
                    this.icon = new t.HUD.ImageElement({
                        frame: new t.HUD.Frame(o, i),
                        path: "img/icon_" + this.iconType + ".png"
                    }), this.hudCanvas.add(this.icon), this.icon.visible = e
                }
            },
            setupTimer: function() {
                var e = new t.HUD.Size(128, 32),
                    i = new t.HUD.PositionFromCenter((-38), (-102)),
                    o = new t.HUD.Frame(i, e);
                this.timer = new t.Timer(o), this.hudCanvas.add(this.timer.element)
            },
            setupStars: function() {
                var e = new t.HUD.PositionFromCenter((-40), (-140));
                this.stars = new t.Stars(e, this.hudCanvas)
            },
            setupIndicator: function() {
                this.arrowIndicator = new t.ArrowIndicator(this.player), this.arrowIndicator.position.z = -.05;
                var e = new t.HUD.Size(35, 35),
                    i = -45,
                    o = new t.HUD.PositionFromCenter((-e.halfWidth), -e.halfHeight + i);
                this.arrowIndicatorElement = new t.HUD.ObjectElement({
                    frame: new t.HUD.Frame(o, e),
                    object: this.arrowIndicator,
                    modelHeight: .01
                }), this.hudCanvas.add(this.arrowIndicatorElement)
            },
            setupCompass: function() {
                var e = new t.Compass(this.player);
                e.position.z = -10, this.compass = e;
                var i = new t.HUD.Size(80, 80),
                    o = new t.HUD.PositionFromCenter((-i.halfWidth), (-i.halfHeight));
                this.compassElement = new t.HUD.ObjectElement({
                    frame: new t.HUD.Frame(o, i),
                    object: this.compass,
                    modelHeight: 512
                }), this.hudCanvas.add(this.compassElement)
            },
            setupDestinationView: function(e) {
                this.destinationView && this.destinationView.dispose(), this.destinationView = new t.DestinationView(e, this.hudCanvas), this.destinationView.visible = this._visible
            },
            setupCurrentLocationView: function() {
                var e = new t.CurrentLocationView(this.player, this.hudCanvas);
                this.currentLocationView = e
            },
            setupMiniMap: function() {
                this.miniMap = new t.MiniMap(this.player);
                var e = this.miniMap.getObject(),
                    i = new t.HUD.Size(80, 40),
                    o = 100,
                    n = new t.HUD.PositionFromCenter((-i.halfWidth), -i.halfHeight + o);
                this.miniMapElement = new t.HUD.ObjectElement({
                    frame: new t.HUD.Frame(n, i),
                    object: e,
                    modelHeight: 64
                }), this.hudCanvas.add(this.miniMapElement)
            },
            initialize: function() {
                this.setupIcon(), this.setupTimer(), this.setupStars(), this.setupIndicator(), this.setupCompass(), this.setupCurrentLocationView(), this.setupMiniMap(), this.state = new t.CockpitViewStateNone, this.initialized = !0
            },
            update: function() {
                this.initialized && (this.currentLocationView.update(), this.arrowIndicator.update(), this.compass.update(), this.miniMap.update(), this.destinationView && this.destinationView.update())
            },
            setStarsCount: function(t) {
                this.stars.setStarsCount(t)
            },
            setGoal: function(t) {
                this.goalCountry = t.getCountry(), this.setupDestinationView(this.goalCountry), this.arrowIndicator.setTarget(this.goalCountry.getPosition());
                var e = t.get("chapter"),
                    i = e.get("category"),
                    o = i.getType();
                this.iconType = o, this.setupIcon()
            },
            animateDestination: function() {
                this.destinationView.visible && this.destinationView.animate()
            },
            get visible() {
                return this._visible
            },
            set visible(t) {
                this._visible = t
            },
            get opacity() {
                return this.state.opacity
            },
            set opacity(t) {
                this.state.opacity = t
            }
        }, t.CockpitView = c, t.CockpitViewState = e, t.CockpitViewStateNone = i, t.CockpitViewStateNormal = o, t.CockpitViewStateMiniMapMode = n, t.CockpitViewStateFreeMode = r, t.CockpitViewStateGoal = l, t.CockpitViewStateSeek = s, t.CockpitViewStateNoSeek = a
    }(window),
    function(t) {
        "use strict";

        function e(t) {
            this.player = t, THREE.Object3D.call(this), this.initialize()
        }
        e.prototype = Object.create(THREE.Object3D.prototype), e.prototype.constructor = e, e.prototype.$class = "ChapterMenu", e.prototype.initialized = !1, e.prototype.isGlanced = !1, e.prototype.isRestarting = !1, e.prototype.player = null, e.prototype.buttonsMaterial = null, e.prototype.textMaterial = null, e.prototype.title = null, e.prototype.retryButton = null, e.prototype.retryButtonText = null, e.prototype.retryButtonEffect = null, e.prototype.retryButtonEffectAnimation = null, e.prototype.nextButton = null, e.prototype.nextButtonText = null, e.prototype.nextButtonEffect = null, e.prototype.nextButtonEffectAnimation = null, e.prototype.retryButtonClickable = null, e.prototype.nextButtonClickable = null, e.prototype.makeHoverEffect = function() {
            var t = new THREE.RingGeometry(.01, 70, 32, 0),
                e = new THREE.MeshBasicMaterial({
                    color: 4045030
                }),
                i = new THREE.Mesh(t, e),
                o = 0;
            return i.scale.set(o, o, o), i.visible = !1, i
        }, e.prototype.setupTitle = function() {
            this.title && (this.title.geometry.dispose(), this.title.material.dispose(), this.title = null);
            var t = new THREE.PlaneGeometry(512, 128),
                e = new THREE.MeshBasicMaterial({
                    map: (new THREE.TextureLoader).load("img/txt_ceiling_" + Localization.lang + ".png"),
                    transparent: !0
                });
            this.title = new THREE.Mesh(t, e), this.add(this.title)
        }, e.prototype.setupRetryButton = function() {
            this.retryButton && (this.retryButton.geometry.dispose(), this.retryButton.material.dispose(), this.retryButton = null);
            var e = new THREE.PlaneGeometry(256, 256);
            this.retryButton = new THREE.Mesh(e, this.buttonsMaterial), this.retryButton.position.x = -128, this.retryButton.position.y = -300, e.faceVertexUvs[0][0] = [new THREE.Vector2(0, 1), new THREE.Vector2(0, 0), new THREE.Vector2(.5, 1)], e.faceVertexUvs[0][1] = [new THREE.Vector2(0, 0), new THREE.Vector2(.5, 0), new THREE.Vector2(.5, 1)], this.add(this.retryButton), this.retryButtonEffect = this.makeHoverEffect(), this.retryButtonEffect.position.x = -128, this.retryButtonEffect.position.y = -300, this.retryButtonEffect.position.z = -3, this.add(this.retryButtonEffect), this.retryButtonClickable = t.SightClickSystem.getInstance().createClickable(this.retryButton), this.retryButtonClickable.addListener(t.SightClickSystem.EventType.Click, this.retryClickHandler, this), this.retryButtonClickable.addListener(t.SightClickSystem.EventType.Hover, this.retryHoverHandler, this), this.retryButtonClickable.addListener(t.SightClickSystem.EventType.Unhover, this.retryUnhoverHandler, this)
        }, e.prototype.setupRetryButtonText = function() {
            this.retryButtonText && (this.retryButtonText.geometry.dispose(), this.retryButtonText.material.dispose(), this.retryButtonText = null);
            var t = new THREE.PlaneGeometry(256, 32);
            this.retryButtonText = new THREE.Mesh(t, this.textMaterial), this.retryButtonText.position.x = -128, this.retryButtonText.position.y = -420, t.faceVertexUvs[0][0] = [new THREE.Vector2(0, 1), new THREE.Vector2(0, 0), new THREE.Vector2(.5, 1)], t.faceVertexUvs[0][1] = [new THREE.Vector2(0, 0), new THREE.Vector2(.5, 0), new THREE.Vector2(.5, 1)], this.add(this.retryButtonText)
        }, e.prototype.setupNextButton = function() {
            this.nextButton && (this.nextButton.geometry.dispose(), this.nextButton.material.dispose(), this.nextButton = null);
            var e = new THREE.PlaneGeometry(256, 256);
            this.nextButton = new THREE.Mesh(e, this.buttonsMaterial), this.nextButton.position.x = 128, this.nextButton.position.y = -300, e.faceVertexUvs[0][0] = [new THREE.Vector2(.5, 1), new THREE.Vector2(.5, 0), new THREE.Vector2(1, 1)], e.faceVertexUvs[0][1] = [new THREE.Vector2(.5, 0), new THREE.Vector2(1, 0), new THREE.Vector2(1, 1)], this.add(this.nextButton), this.nextButtonEffect = this.makeHoverEffect(), this.nextButtonEffect.position.x = 128, this.nextButtonEffect.position.y = -300, this.nextButtonEffect.position.z = -3, this.add(this.nextButtonEffect), this.nextButtonClickable = t.SightClickSystem.getInstance().createClickable(this.nextButton), this.nextButtonClickable.addListener(t.SightClickSystem.EventType.Click, this.nextClickHandler, this), this.nextButtonClickable.addListener(t.SightClickSystem.EventType.Hover, this.nextHoverHandler, this), this.nextButtonClickable.addListener(t.SightClickSystem.EventType.Unhover, this.nextUnhoverHandler, this)
        }, e.prototype.setupNextButtonText = function() {
            this.nextButtonText && (this.nextButtonText.geometry.dispose(), this.nextButtonText.material.dispose(), this.nextButtonText = null);
            var t = new THREE.PlaneGeometry(256, 32);
            this.nextButtonText = new THREE.Mesh(t, this.textMaterial), this.nextButtonText.position.x = 128, this.nextButtonText.position.y = -420, t.faceVertexUvs[0][0] = [new THREE.Vector2(.5, 1), new THREE.Vector2(.5, 0), new THREE.Vector2(1, 1)], t.faceVertexUvs[0][1] = [new THREE.Vector2(.5, 0), new THREE.Vector2(1, 0), new THREE.Vector2(1, 1)], this.add(this.nextButtonText)
        }, e.prototype.glance = function(t) {
            this.isGlanced = !0, this.title.visible = !1, this.retryButtonText.visible = !1, this.nextButtonText.visible = !1
        }, e.prototype.retryClickHandler = function(e) {
            this.isRestarting || (console.log("Click retry on the menu."), this.isRestarting = !0, this.glance(), this.isRestarting = !1, t.ApplicationController.instance.applicationRestart())
        }, e.prototype.retryHoverHandler = function(e) {
            this.isGlanced && (this.retryButtonText.visible = !0), this.retryButtonEffectAnimation && this.retryButtonEffectAnimation.dispose();
            var i = this;
            i.retryButtonEffect.visible = !0, this.retryButtonEffectAnimation = t.AnimateController.getInstance().createLinearAnimator({
                duration: SightClickSystem.CLICK_DURATION,
                fromValue: 0,
                toValue: 1,
                callback: function(t) {
                    i.retryButtonEffect.scale.set(t, t, t)
                },
                finish: function() {
                    i.retryButtonEffect.visible = !1, i.retryButtonEffect.scale.set(0, 0, 0), i = null
                }
            })
        }, e.prototype.retryUnhoverHandler = function(t) {
            this.isGlanced && (this.retryButtonText.visible = !1), this.retryButtonEffectAnimation && (this.retryButtonEffectAnimation.cancel(), this.retryButtonEffectAnimation.dispose(), this.retryButtonEffectAnimation = null)
        }, e.prototype.nextClickHandler = function(e) {
            console.log("next"), this.glance(), t.ApplicationController.instance.getNotification().fire(t.ApplicationController.EventType.ChapterSkip)
        }, e.prototype.nextHoverHandler = function(e) {
            this.isGlanced && (this.nextButtonText.visible = !0), this.nextButtonEffectAnimation && this.nextButtonEffectAnimation.dispose();
            var i = this;
            i.nextButtonEffect.visible = !0, this.nextButtonEffectAnimation = t.AnimateController.getInstance().createLinearAnimator({
                duration: SightClickSystem.CLICK_DURATION,
                fromValue: 0,
                toValue: 1,
                callback: function(t) {
                    i.nextButtonEffect.scale.set(t, t, t)
                },
                finish: function() {
                    i.nextButtonEffect.visible = !1, i.nextButtonEffect.scale.set(0, 0, 0), i = null
                }
            })
        }, e.prototype.nextUnhoverHandler = function(t) {
            this.isGlanced && (this.nextButtonText.visible = !1), this.nextButtonEffectAnimation && (this.nextButtonEffectAnimation.cancel(), this.nextButtonEffectAnimation.dispose(), this.nextButtonEffectAnimation = null)
        }, e.prototype.initialize = function() {
            this.buttonsMaterial = new THREE.MeshBasicMaterial({
                map: (new THREE.TextureLoader).load("img/btn_sprite_menu.png"),
                transparent: !0
            }), this.textMaterial = new THREE.MeshBasicMaterial({
                map: (new THREE.TextureLoader).load("img/txt_sprite_menu_" + t.Localization.lang + ".png"),
                transparent: !0
            }), this.setupTitle(), this.setupRetryButton(), this.setupRetryButtonText(), this.setupNextButton(), this.setupNextButtonText(), this.initialized = !0
        }, e.prototype.update = function(t) {
            !this.initialized
        }, e.prototype.show = function() {
            this.isGlanced ? (this.title.visible = !1, this.retryButton.visible = !0, this.retryButtonText.visible = !1, this.retryButtonEffect.visible = !1, this.retryButtonEffectAnimation && (this.retryButtonEffectAnimation.dispose(), this.retryButtonEffectAnimation = null), this.nextButton.visible = !0, this.nextButtonText.visible = !1, this.nextButtonEffect.visible = !1, this.nextButtonEffectAnimation && (this.nextButtonEffectAnimation.dispose(), this.nextButtonEffectAnimation = null)) : (this.title.visible = !0, this.retryButton.visible = !0, this.retryButtonText.visible = !0, this.retryButtonEffect.visible = !1, this.retryButtonEffectAnimation && (this.retryButtonEffectAnimation.dispose(), this.retryButtonEffectAnimation = null), this.nextButton.visible = !0, this.nextButtonText.visible = !0, this.nextButtonEffect.visible = !1, this.nextButtonEffectAnimation && (this.nextButtonEffectAnimation.dispose(), this.nextButtonEffectAnimation = null))
        }, e.prototype.hide = function() {
            this.title.visible = !1, this.retryButton.visible = !1, this.retryButtonText.visible = !1, this.retryButtonEffect.visible = !1, this.retryButtonEffectAnimation && (this.retryButtonEffectAnimation.dispose(), this.retryButtonEffectAnimation = null), this.nextButton.visible = !1, this.nextButtonText.visible = !1, this.nextButtonEffect.visible = !1, this.nextButtonEffectAnimation && (this.nextButtonEffectAnimation.dispose(), this.nextButtonEffectAnimation = null)
        }, e.prototype.dispose = function() {
            this.title && (this.remove(this.title), this.title.geometry.dispose(), this.title.material.dispose(), this.title = null), this.retryButton && (this.remove(this.retryButton), this.retryButton.geometry.dispose(), this.retryButton.material.dispose(), this.retryButton = null), this.nextButton && (this.remove(this.nextButton), this.nextButton.geometry.dispose(), this.nextButton.material.dispose(), this.nextButton = null), this.retryButtonClickable && (this.retryButtonClickable.removeListener(), t.SightClickSystem.getInstance().remove(this.retryButtonClickable), this.retryButtonClickable = null), this.nextButtonClickable && (this.nextButtonClickable.removeListener(), t.SightClickSystem.getInstance().remove(this.nextButtonClickable), this.nextButtonClickable = null)
        }, t.ChapterMenu = e
    }(window),
    function(t) {
        "use strict";

        function e(t) {
            this.player = t, this.initialize()
        }
        e.prototype = {
            constructor: e,
            $class: "GetStarEffect",
            player: null,
            startPoint: null,
            endPoint: null,
            distanceVector: new THREE.Vector3(0, 50, 5),
            star: null,
            initialize: function() {
                var t = this.player.nextStar();
                this.calcEndPoint(t), this.star && (this.star.geometry.dispose(), this.star = null), this.star = this.makeStar(t), this.player.camera.add(this.star)
            },
            calcEndPoint: function(t) {
                for (var e = new THREE.Matrix4, i = t;;) {
                    if (i === this.player.camera) break;
                    if (!i) break;
                    e.multiply(i.matrix), i = i.parent
                }
                var o = new THREE.Vector3;
                this.endPoint = o.applyMatrix4(e), this.startPoint = this.endPoint.clone(), this.startPoint.add(this.distanceVector)
            },
            makeStar: function(t) {
                t.geometry.computeBoundingBox();
                var e = t.geometry.boundingBox,
                    i = Math.abs(e.min.x) + Math.abs(e.max.x),
                    o = Math.abs(e.min.y) + Math.abs(e.max.y),
                    n = new THREE.PlaneGeometry(i, o),
                    r = new THREE.MeshBasicMaterial({
                        map: (new THREE.TextureLoader).load("img/img_clear_star.png"),
                        transparent: !0
                    }),
                    s = new THREE.Mesh(n, r);
                return s.renderOrder = 11e3, s
            },
            start: function() {
                var e = this;
                return new Promise(function(i, o) {
                    t.AnimateController.getInstance().createVectorAnimator(e.star, {
                        type: "position",
                        duration: 1500,
                        fromValue: e.startPoint,
                        toValue: e.endPoint,
                        finish: function() {
                            i()
                        }
                    })
                })
            },
            dispose: function() {
                this.star.parent.remove(this.star), this.star.geometry.dispose(), this.star = null, this.player = null, this.startPoint = null, this.endPoint = null
            }
        }, t.GetStarEffect = e
    }(window),
    function(t) {
        "use strict";

        function e(e) {
            this.player = e, t.EventDispatcher.call(this), this.initialize()
        }
        e.prototype = Object.create(t.EventDispatcher.prototype), e.prototype.constructor = e, e.prototype.$class = "SceneChanger", e.prototype.distance = 100, e.prototype.duration = 3e3, e.prototype.fadeAnimator = null, e.prototype.initialize = function() {
            var t = .5 * this.player.camera.fov,
                e = Math.tan(THREE.Math.degToRad(t)) * this.distance * 2,
                i = e * this.player.camera.aspect,
                o = new THREE.PlaneGeometry(i, e),
                n = new THREE.MeshBasicMaterial({
                    color: 0,
                    transparent: !0,
                    opacity: 0
                });
            this.mesh = new THREE.Mesh(o, n), this.mesh.name = "SceneChanger", this.mesh.position.z = -this.distance, this.mesh.visible = !1, this.player.camera.add(this.mesh)
        }, e.prototype.fadeIn = function(e) {
            var i = this;
            return e = e || {}, new Promise(function(o, n) {
                var r = i.mesh,
                    s = i.mesh.material;
                r.visible = !0;
                var a = void 0 !== e.duration ? e.duration : i.duration,
                    l = s.opacity,
                    c = void 0 !== e.toValue ? e.toValue : 0;
                i.fadeAnimator = t.AnimateController.getInstance().createAnimator({
                    duration: a,
                    fromValue: l,
                    toValue: c,
                    callback: function(t) {
                        s.opacity = t
                    },
                    finish: function() {
                        i.fadeAnimator = null, r.visible = !1, o()
                    }
                })
            })
        }, e.prototype.fadeOut = function(e) {
            var i = this;
            return e = e || {}, new Promise(function(o, n) {
                var r = i.mesh,
                    s = i.mesh.material;
                r.visible = !0;
                var a = void 0 !== e.duration ? e.duration : i.duration,
                    l = s.opacity,
                    c = void 0 !== e.toValue ? e.toValue : 1;
                i.fadeAnimator = t.AnimateController.getInstance().createAnimator({
                    duration: a,
                    fromValue: l,
                    toValue: c,
                    callback: function(t) {
                        s.opacity = t
                    },
                    finish: function() {
                        i.fadeAnimator = null, o()
                    }
                })
            })
        }, e.prototype.dispose = function() {
            this.mesh && (this.mesh.parent.remove(this.mesh), this.mesh.geometry.dispose(), this.mesh.material.dispose(), this.mesh = null)
        }, t.SceneChanger = e
    }(window),
    function(t) {
        "use strict";

        function e(t, e, i) {
            this.message = t, this.fontAttribute = e ? e : new FontAttribute, i = i || {}, this.position = i.position, this.initialize()
        }
        e.prototype = {
            constructor: e,
            $class: "MessageView",
            canvas: null,
            context: null,
            element: null,
            position: null,
            size: null,
            width: 0,
            height: 0,
            initialize: function() {
                this.width = t.Utility.measureMaxWidth(this.message, this.fontAttribute), this.height = t.Utility.measureHeight(this.message, this.width, this.fontAttribute), this.canvas = t.Utility.createCanvas(this.width, this.height),
                    this.context = this.canvas.getContext("2d"), this.context.textAlign = "left", this.context.textBaseline = "top", this.context.fillStyle = "white", this.context.font = this.fontAttribute.font, this.fillText(), this.size = new t.HUD.Size(this.width, this.height), this.position || (this.position = new t.HUD.PositionFromCenter((-this.size.halfWidth), (-this.size.halfHeight))), this.element = new t.HUD.CanvasElement({
                        canvas: this.canvas,
                        frame: new t.HUD.Frame(this.position, this.size)
                    })
            },
            fillText: function() {
                t.Utility.fillMultiLineText(this.context, this.message, this.width, this.fontAttribute)
            },
            show: function() {
                return this.element.quad && (this.element.quad.visible = !0), Promise.resolve()
            },
            hide: function() {
                return this.element.quad && (this.element.quad.visible = !1), Promise.resolve()
            },
            fadeIn: function() {
                var e = this;
                return new Promise(function(i, o) {
                    e.show(), t.AnimateController.getInstance().createAnimator({
                        duration: 3e3,
                        fromValue: 0,
                        toValue: 1,
                        callback: function(t) {
                            e.element.quad.material.opacity = t
                        },
                        finish: function() {
                            i()
                        }
                    })
                })
            },
            fadeOut: function() {
                var e = this;
                return new Promise(function(i, o) {
                    t.AnimateController.getInstance().createAnimator({
                        duration: 3e3,
                        fromValue: 1,
                        toValue: 0,
                        callback: function(t) {
                            e.element.quad.material.opacity = t
                        },
                        finish: function() {
                            e.hide(), i()
                        }
                    })
                })
            },
            dispose: function() {
                return this.element.HUDCanvas.remove(this.element), this.element.quad.geometry.dispose(), this.element = null, this.canvas = null, this.context = null, Promise.resolve()
            }
        }, t.MessageView = e
    }(window),
    function(t) {
        "use strict";

        function e(t, e) {
            this.initialize(t, e)
        }

        function i(t) {
            this.init(t)
        }

        function o(t) {
            this.initialize(t)
        }
        e.prototype = {
            constructor: e,
            $class: "MessageParagraph",
            messageView: null,
            message: null,
            waitTime: null,
            durationTime: null,
            isFadeIn: null,
            isFadeOut: null,
            fontSize: null,
            lineHeight: null,
            textAlign: null,
            defaults: {
                waitTime: 0,
                durationTime: 0,
                isFadeIn: !0,
                isFadeOut: !0,
                fontSize: 14,
                lineHeight: 24,
                textAlign: "center"
            },
            initialize: function(t, e) {
                this.message = t, e = e || {}, this.waitTime = e.waitTime || this.defaults.waitTime, this.durationTime = e.durationTime || this.defaults.durationTime, this.isFadeIn = void 0 !== e.isFadeIn ? e.isFadeIn : this.defaults.isFadeIn, this.isFadeOut = void 0 !== e.isFadeOut ? e.isFadeOut : this.defaults.isFadeOut, this.fontSize = e.fontSize || this.defaults.fontSize, this.lineHeight = e.lineHeight || this.defaults.lineHeight, this.textAlign = e.textAlign || this.defaults.textAlign
            },
            run: function(t) {
                var e = this;
                return e.setup(), t.add(e.messageView.element), e.messageView.hide(), e.wait(e.waitTime).then(e.show.bind(e)).then(function() {
                    return e.wait(e.durationTime)
                }).then(e.hide.bind(e))
            },
            setup: function() {
                this.messageView = new t.MessageView(this.message, new t.FontAttribute({
                    lineHeight: this.lineHeight,
                    fontSize: this.fontSize,
                    textAlign: this.textAlign
                }))
            },
            wait: function(e) {
                return new Promise(function(i, o) {
                    new t.Wait(e, function() {
                        i()
                    })
                }.bind(this))
            },
            show: function() {
                return this.isFadeIn ? this.messageView.fadeIn() : this.messageView.show()
            },
            hide: function() {
                return this.isFadeOut ? this.messageView.fadeOut() : this.messageView.hide()
            },
            dispose: function() {
                return this.messageView.dispose()
            }
        }, i.prototype = {
            constructor: i,
            $class: "MessageViewController",
            isStopped: !0,
            hud: null,
            messageView: null,
            paragraphs: null,
            currentParagraph: null,
            defaults: {
                waitTime: 0,
                durationTime: 3e3,
                fontSize: 24,
                textAlign: "center"
            },
            init: function(t) {
                this.hud = t, this.paragraphs = []
            },
            addParagraph: function(t) {
                this.paragraphs.push(t)
            },
            generateParagraph: function(e) {
                var i = new t.MessageViewBaseParagraph(e);
                return this.paragraphs.push(i), i
            },
            generateCircleBoard: function(e, i) {
                var o = this.generateParagraph(i),
                    e = e,
                    n = 40,
                    r = 40,
                    s = new t.HUD.TextElementCentered({
                        text: e,
                        color: "white",
                        fontSize: n,
                        fontFamily: "Roboto",
                        fontWeight: 100,
                        lineHeight: r,
                        centerX: 0,
                        centerY: 0
                    });
                o.addElement(s);
                var a = 170,
                    l = new THREE.RingGeometry(a / 2, a / 2 - 1, 64, 0),
                    c = new THREE.MeshBasicMaterial({
                        color: 16777215,
                        side: THREE.DoubleSide
                    }),
                    h = new THREE.Mesh(l, c);
                h.name = "paragraph circle[" + e + "]";
                var p = new t.HUD.Size(a, a),
                    u = new t.HUD.PositionFromCenter((-p.halfWidth), (-p.halfHeight)),
                    s = new t.HUD.ObjectElement({
                        frame: new t.HUD.Frame(u, p),
                        object: h,
                        modelHeight: a
                    });
                return o.addElement(s), o
            },
            run: function() {
                var t = this;
                return t.isStopped = !1, Promise.resolve(0).then(function e(i) {
                    if (t.isStopped) return Promise.resolve(i);
                    var o = t.paragraphs[i];
                    return o ? (t.currentParagraph = o, new Promise(function(e, n) {
                        o.run(t.hud).then(function() {
                            t.currentParagraph = null, e(i + 1)
                        })
                    }).then(e)) : Promise.resolve(i)
                })
            },
            stop: function() {
                this.isStopped = !0, this.currentParagraph && (this.currentParagraph.hide(), this.currentParagraph = null)
            }
        }, o.prototype = {
            constructor: o,
            $class: "MessageViewBaseParagraph",
            elements: null,
            waitTime: null,
            duration: null,
            fadeDuration: null,
            isFadeIn: null,
            isFadeOut: null,
            beforeCallback: null,
            afterCallback: null,
            defaults: {
                waitTime: 0,
                duration: 3e3,
                fadeDuration: 1e3,
                isFadeIn: !0,
                isFadeOut: !0
            },
            initialize: function(t) {
                this.elements = [], this.waitTime = void 0 !== t.waitTime ? t.waitTime : this.defaults.waitTime, this.duration = void 0 !== t.duration ? t.duration : this.defaults.duration, this.fadeDuration = void 0 !== t.fadeDuration ? t.fadeDuration : this.defaults.fadeDuration, this.isFadeIn = void 0 !== t.isFadeIn ? t.isFadeIn : this.defaults.isFadeIn, this.isFadeOut = void 0 !== t.isFadeOut ? t.isFadeOut : this.defaults.isFadeOut, this.beforeCallback = void 0 !== t.beforeCallback ? t.beforeCallback : this.defaults.beforeCallback, this.afterCallback = void 0 !== t.afterCallback ? t.afterCallback : this.defaults.afterCallback
            },
            addElement: function(t) {
                this.elements.push(t)
            },
            run: function(t) {
                return this.elements.forEach(function(e) {
                    t.add(e), e.hide()
                }), this.wait().then(this.show.bind(this)).then(this.persist.bind(this)).then(this.hide.bind(this))
            },
            wait: function() {
                return new Promise(function(e, i) {
                    new t.Wait(this.waitTime, function() {
                        e()
                    }.bind(this))
                }.bind(this))
            },
            show: function() {
                return t.Utility.isFunction(this.beforeCallback) && this.beforeCallback(), this.isFadeIn ? Promise.all(this.elements.map(function(t) {
                    return t.fadeIn(this.fadeDuration)
                }, this)) : Promise.all(this.elements.map(function(t) {
                    return t.show()
                }, this))
            },
            persist: function() {
                return new Promise(function(e, i) {
                    new t.Wait(this.duration, function() {
                        e()
                    }.bind(this))
                }.bind(this))
            },
            hide: function() {
                return this.isFadeOut ? Promise.all(this.elements.map(function(e) {
                    return e.fadeOut(this.fadeDuration).then(function() {
                        t.Utility.isFunction(this.afterCallback) && this.afterCallback()
                    }.bind(this))
                }, this)) : Promise.all(this.elements.map(function(e) {
                    return e.hide().then(function() {
                        t.Utility.isFunction(this.afterCallback) && this.afterCallback()
                    }.bind(this))
                }, this))
            },
            dispose: function() {
                return Promise.all(this.elements.map(function(t) {
                    return t.dispose()
                }))
            }
        }, t.MessageViewController = i, t.MessageParagraph = e, t.MessageViewBaseParagraph = o
    }(window),
    function(t) {
        "use strict";

        function e(e) {
            t.EventDispatcher.call(this), this.frame = e, this.initialize()
        }
        e.prototype = Object.create(t.EventDispatcher.prototype), e.prototype.constructor = e, e.prototype.$class = "Timer", e.prototype.isRunning = !1, e.prototype._visible = !1, e.prototype._opacity = 1, e.prototype.element = null, e.prototype.model = null, e.prototype.initialize = function() {
            this.model = t.ModelLocator.getInstance().getModel(t.TimerModel, t.Model.defaultModelName), this.model.addListener(t.Model.EventType.Update, this.updateHandler, this), this.element = new t.HUD.TextElement({
                text: this.model.getTimeString(),
                color: "white",
                font: "20px " + t.Settings.font.defaultFontFamily,
                frame: this.frame
            })
        }, e.prototype.start = function() {
            this.isRunning = !0
        }, e.prototype.stop = function() {
            this.isRunning = !1
        }, e.prototype.updateHandler = function() {
            this.element.text = this.model.getTimeString()
        }, e.prototype.update = function() {
            this.isRunning && this.model.updateTime()
        }, Object.defineProperty(e.prototype, "visible", {
            get: function() {
                return this._visible
            },
            set: function(t) {
                this._visible = t, this.element.visible = t
            }
        }), Object.defineProperty(e.prototype, "opacity", {
            get: function() {
                return this._opacity
            },
            set: function(t) {
                this._opacity = t, this.element.setOpacity(t)
            }
        }), t.Timer = e
    }(window),
    function(t) {
        "use strict";

        function e(e, i) {
            t.EventDispatcher.call(this), this.position = e, this.hudCanvas = i, this.initialize()
        }
        e.prototype = Object.create(t.EventDispatcher.prototype), e.prototype.constructor = e, e.prototype.$class = "Stars", e.prototype._visible = !1, e.prototype._opacity = 1, e.prototype.count = 0, e.prototype.stars = null, e.prototype.model = null, e.prototype.position = null, e.prototype.hudCanvas = null, e.prototype.initialize = function() {
            this.stars = [];
            for (var t = 0; t < 3; t++) this.stars.push(this.setupStar(t))
        }, e.prototype.setupStar = function(e) {
            var i = new t.HUD.Size(32, 32),
                o = 25 / (t.HUD.isVR ? .5 : 1),
                n = this.position.x + o * e,
                r = this.position.y,
                s = new t.HUD.Position(n, r),
                a = new t.HUD.ImageElement({
                    frame: new t.HUD.Frame(s, i),
                    path: "img/img_star_score.png"
                });
            return this.hudCanvas.add(a), a.quad.geometry.faceVertexUvs[0][0] = [new THREE.Vector2(0, 1), new THREE.Vector2(0, .5), new THREE.Vector2(1, 1)], a.quad.geometry.faceVertexUvs[0][1] = [new THREE.Vector2(0, .5), new THREE.Vector2(1, .5), new THREE.Vector2(1, 1)], a
        }, e.prototype.resetCount = function() {
            for (var t = 0; t < this.stars.length; t++) {
                var e = this.stars[t].quad.geometry;
                e.faceVertexUvs[0][0][0].set(0, 1), e.faceVertexUvs[0][0][1].set(0, .5), e.faceVertexUvs[0][0][2].set(1, 1), e.faceVertexUvs[0][1][0].set(0, .5), e.faceVertexUvs[0][1][1].set(1, .5), e.faceVertexUvs[0][1][2].set(1, 1), e.uvsNeedUpdate = !0
            }
        }, e.prototype.setStarsCount = function(t) {
            this.resetCount();
            for (var e = 0; e < t; e++) {
                var i = this.stars[e].quad.geometry;
                i.faceVertexUvs[0][0][0].set(0, .5), i.faceVertexUvs[0][0][1].set(0, 0), i.faceVertexUvs[0][0][2].set(1, .5), i.faceVertexUvs[0][1][0].set(0, 0), i.faceVertexUvs[0][1][1].set(1, 0), i.faceVertexUvs[0][1][2].set(1, .5), i.uvsNeedUpdate = !0
            }
            this.count = t
        }, e.prototype.nextStar = function() {
            var t = this.stars[this.count];
            return t ? t : null
        }, Object.defineProperty(e.prototype, "visible", {
            get: function() {
                return this._visible
            },
            set: function(t) {
                this._visible = t, this.stars && this.stars.forEach(function(e, i) {
                    e.visible = t
                })
            }
        }), Object.defineProperty(e.prototype, "opacity", {
            get: function() {
                return this._opacity
            },
            set: function(t) {
                this._opacity = t, this.stars && this.stars.forEach(function(e, i) {
                    e.setOpacity(t)
                })
            }
        }), t.Stars = e
    }(window),
    function(t) {
        "use strict";

        function e(t, e) {
            this.country = t, this.hudCanvas = e, this.initialize()
        }
        e.settings = {
            margins: {
                titleBottom: 10,
                targetBottom: 6
            },
            title: {
                fontAttribute: new t.FontAttribute({
                    fontSize: 8,
                    fontFamily: t.Settings.font.defaultFontFamily
                })
            },
            target: {
                fontAttribute: new t.FontAttribute({
                    fontSize: 17,
                    fontFamily: t.Settings.font.defaultFontFamily
                })
            },
            subTitle: {
                fontAttribute: new t.FontAttribute({
                    fontSize: 9,
                    fontFamily: t.Settings.font.defaultFontFamily
                })
            }
        }, e.prototype = {
            constructor: e,
            _visible: !1,
            _opacity: 1,
            country: null,
            startedAt: 0,
            timerModel: null,
            localization: null,
            initialize: function() {
                this.timerModel = t.ModelLocator.getInstance().getModel(t.TimerModel, t.Model.defaultModelName), this.localization = t.ModelLocator.getInstance().getModel(t.LocalizationModel, t.Model.defaultModelName);
                var i = e.settings.title.fontAttribute,
                    o = this.localization.getText("destination"),
                    n = Utility.measureWidth(o, i),
                    r = Utility.measureHeight(o, n, i),
                    s = e.settings.target.fontAttribute,
                    a = this.country.getCityName(),
                    l = Utility.measureWidth(a, s),
                    c = Utility.measureHeight(a, l, s),
                    h = e.settings.subTitle.fontAttribute,
                    p = this.country.getCountryName(),
                    u = Utility.measureWidth(p, h),
                    d = Utility.measureHeight(p, u, h),
                    f = Math.max(n, l, u),
                    y = f / 2 - n / 2,
                    g = f / 2 - l / 2,
                    m = f / 2 - u / 2,
                    v = e.settings.margins.titleBottom,
                    w = e.settings.margins.targetBottom,
                    E = r + v + c + w + d;
                this.canvas = t.Utility.createCanvas(f, E), this.context = this.canvas.getContext("2d"), this.canvasAnim = t.Utility.createCanvas(f, E), this.contextAnim = this.canvasAnim.getContext("2d"), this.context.textAlign = "left", this.context.textBaseline = "top", this.context.fillStyle = "white", this.contextAnim.textAlign = "left", this.contextAnim.textBaseline = "top", this.contextAnim.fillStyle = "white", this.context.font = i.font, this.context.fillText(o, y, 0), this.contextAnim.font = s.font, this.contextAnim.fillText(a, g, r + v), this.context.font = h.font, this.context.fillText(p, m, r + v + c + w);
                var b = new t.HUD.Size(f, E),
                    M = new t.HUD.PositionFromCenter((-b.halfWidth), -b.halfHeight + 15);
                this.element = new t.HUD.CanvasElement({
                    canvas: this.canvas,
                    frame: new t.HUD.Frame(M, b)
                }), this.elementAnim = new t.HUD.CanvasElement({
                    canvas: this.canvasAnim,
                    frame: new t.HUD.Frame(M, b)
                }), this.hudCanvas.add(this.element), this.hudCanvas.add(this.elementAnim)
            },
            update: function() {},
            animate: function() {
                return new Promise(function(e, i) {
                    var o = this.elementAnim.object;
                    t.AnimateController.createVectorAnimator(o, {
                        type: "scale",
                        duration: 400,
                        fromValue: new THREE.Vector3(3, 3, 3),
                        toValue: new THREE.Vector3(1, 1, 1),
                        finish: e,
                        timingFunction: t.AnimateController.timingFunction.quarticEaseOut3v
                    })
                }.bind(this))
            },
            dispose: function() {
                this.element.HUDCanvas.remove(this.element), this.element.dispose(), this.element = null, this.canvas = null, this.context = null, this.elementAnim.HUDCanvas.remove(this.elementAnim), this.elementAnim.dispose(), this.elementAnim = null, this.canvasAnim = null, this.contextAnim = null
            },
            get visible() {
                return this._visible
            },
            set visible(t) {
                this._visible = t, this.element.visible = t, this.elementAnim.visible = t
            },
            get opacity() {
                return this._opacity
            },
            set opacity(t) {
                this._opacity = t, this.element.setOpacity(t), this.elementAnim.setOpacity(t)
            }
        }, t.DestinationView = e
    }(window),
    function(t) {
        "use strict";
        var e = function(t, e, i) {
            this.player = t, this.hudCanvas = e, this.position = i, this.initialize()
        };
        e.prototype = {
            constructor: e,
            _opacity: 1,
            player: null,
            hudCanvas: null,
            elements: null,
            currentIndicationArea: null,
            fontSize: 10,
            fontName: t.Settings.font.defaultFontFamily,
            localization: null,
            initialize: function() {
                this.localization = t.ModelLocator.getInstance().getModel(t.LocalizationModel, t.Model.defaultModelName), this.localization.loadedPromise.then(function() {
                    this.initializeElements()
                }.bind(this))
            },
            initializeElements: function() {
                this.elements = {}, this.areas.forEach(function(e) {
                    var i = e.textKey,
                        o = this.localization.getText(i),
                        n = new t.HUD.TextElementCentered({
                            text: o,
                            color: "white",
                            fontSize: this.fontSize,
                            fontName: this.fontName,
                            centerX: 0,
                            centerY: 130
                        });
                    this.hudCanvas.add(n), n.hide(), this.elements[i] = n
                }, this)
            },
            update: function() {
                if (this._visible) {
                    var t = this.currentIndicationArea,
                        e = this.getCurrentArea();
                    if (t !== e && e) {
                        if (t) {
                            var i = this.elements[t.textKey];
                            i && i.hide()
                        }
                        var o = this.elements[e.textKey];
                        o.show(), this.currentIndicationArea = e
                    }
                }
            },
            getCurrentArea: function() {
                if (!this.player) return null;
                var t = this.player.position,
                    e = Settings.earthRadius,
                    i = this.areas.find(function(i) {
                        var o = Utility.xyzFromLatLon(i.lat, i.lon),
                            n = new THREE.Vector3(o.x * e, o.y * e, o.z * e),
                            r = Utility.inAreaOnSphere(n, i.radius, t);
                        return r
                    }, this);
                return i
            },
            get visible() {
                return this._visible
            },
            set visible(t) {
                if (this._visible = t, !t)
                    for (var e in this.elements) this.elements[e].visible = !1
            },
            get opacity() {
                return this._opacity
            },
            set opacity(t) {
                this._opacity = t;
                for (var e in this.elements) this.elements[e].setOpacity(t)
            },
            areas: [{
                textKey: "area_arctic",
                lat: 90,
                lon: 0,
                radius: 2500,
                debugColor: 16777215
            }, {
                textKey: "area_antarctic",
                lat: -90,
                lon: 0,
                radius: 4e3,
                debugColor: 16777215
            }, {
                textKey: "area_oceania",
                lat: -27,
                lon: 133,
                radius: 3200,
                debugColor: 16755370
            }, {
                textKey: "area_africa",
                lat: 0,
                lon: 13,
                radius: 6e3,
                debugColor: 11184810
            }, {
                textKey: "area_europe",
                lat: 50,
                lon: 22,
                radius: 4e3,
                debugColor: 11206570
            }, {
                textKey: "area_asia",
                lat: 40,
                lon: 82,
                radius: 6500,
                debugColor: 16777130
            }, {
                textKey: "area_asia",
                lat: 55,
                lon: 110,
                radius: 4e3,
                debugColor: 16777130
            }, {
                textKey: "area_north_america",
                lat: 46,
                lon: -105,
                radius: 5500,
                debugColor: 16755370
            }, {
                textKey: "area_south_america",
                lat: -20,
                lon: -62,
                radius: 5500,
                debugColor: 16755455
            }, {
                textKey: "area_indian_ocean",
                lat: -25,
                lon: 70,
                radius: 7e3,
                debugColor: 16777215
            }, {
                textKey: "area_pacific_ocean",
                lat: 0,
                lon: -175,
                radius: 9800,
                debugColor: 16777215
            }, {
                textKey: "area_atlantic_ocean",
                lat: 30,
                lon: -45,
                radius: 5500,
                debugColor: 16777215
            }, {
                textKey: "area_atlantic_ocean",
                lat: -40,
                lon: -20,
                radius: 5500,
                debugColor: 16777215
            }]
        }, t.CurrentLocationView = e
    }(window),
    function(t) {
        "use strict";

        function e() {
            this.initialize()
        }

        function i() {
            this.initialize()
        }
        e.EarthType = {
            Normal: 0,
            Simple: 1
        }, e.prototype = {
            constructor: e,
            scene: null,
            camera: null,
            debugCamera: null,
            enableDebugCamera: !1,
            _fogEnabled: !1,
            _highCameraEnabled: !1,
            _chapterMenuEnabled: !0,
            renderer: null,
            container: null,
            effect: null,
            element: null,
            figures: null,
            player: null,
            chapterMenu: null,
            skydome: null,
            earth: null,
            simpleEarth: null,
            _earthType: e.EarthType.Normal,
            cameraNear: 1,
            cameraFar: 8e3,
            resize: function() {
                var t = window.innerWidth,
                    e = window.innerHeight;
                this.camera.aspect = t / e, this.camera.updateProjectionMatrix(), this.debugCamera && (this.debugCamera.aspect = t / e, this.debugCamera.updateProjectionMatrix()), this.renderer.setSize(t, e), this.effect.setSize(t, e)
            },
            setupScene: function() {
                window.scene = this.scene = new THREE.Scene, this.fogEnabled = !0
            },
            setupCamera: function() {
                window.camera = this.camera = this.makeCamera(this.cameraNear, this.cameraFar), this.camera.position.set(0, 0, 0)
            },
            makeCamera: function(t, e) {
                var i = 60,
                    o = window.innerWidth / window.innerHeight;
                return new THREE.PerspectiveCamera(i, o, t, e)
            },
            setupLights: function() {
                var e = new THREE.AmbientLight(t.Settings.lights.ambient.color);
                this.scene.add(e);
                var i = new THREE.DirectionalLight(t.Settings.lights.directional.color, t.Settings.lights.directional.intensity);
                i.position.x = t.Settings.lights.directional.position.x, i.position.y = t.Settings.lights.directional.position.y, i.position.z = t.Settings.lights.directional.position.z, this.scene.add(i)
            },
            setupRenderer: function() {
                this.renderer = new THREE.WebGLRenderer({
                    antialias: !0
                }), this.renderer.setClearColor(0), this.renderer.setSize(window.innerWidth, window.innerHeight), this.renderer.autoClear = !1, window.devicePixelRatio && this.renderer.setPixelRatio(window.devicePixelRatio), this.element = this.renderer.domElement, this.container = document.querySelector(".container main"), this.container.appendChild(this.element)
            },
            setupControls: function() {
                this.effect = new THREE.StereoEffect(this.renderer), this.effect.separation = t.Settings.StereoEffect.separation, this.effect.focalLength = t.Settings.StereoEffect.focalLength
            },
            setupPlayer: function() {
                this.player = new t.Player(this.camera, {
                    speed: t.Settings.player.speed,
                    minDistance: t.Settings.player.minDistance,
                    maxDistance: t.Settings.player.maxDistance
                }), this.player.addListener(Player.EventType.HeightLevelChange, function(t) {
                    t.level >= Player.HeightLevel.Middle ? this.highCameraEnabled = !0 : this.highCameraEnabled = !1
                }, this), this.resetPlayerPosition(), this.scene.add(this.player.object)
            },
            resetPlayerPosition: function() {
                this.player.position.x = t.Settings.player.initPosition.x, this.player.position.y = t.Settings.player.initPosition.y, this.player.position.z = t.Settings.player.initPosition.z
            },
            setupCeilingMenu: function() {
                this.chapterMenu = new t.ChapterMenu(this.player), this.chapterMenu.position.y = 1500, this.chapterMenu.rotation.x = Math.PI / 2, this.chapterMenu.rotation.z = Math.PI, this.player.object.add(this.chapterMenu), this.chapterMenuEnabled = !1
            },
            setupFigures: function() {
                this.setupSkybox(), this.createEarth(), this.rimLight = new i, this.skydome.scene.add(this.rimLight.object), this.rimLight.targetTo(this.player.position)
            },
            setupEvents: function() {
                window.addEventListener("resize", this.resize.bind(this), !1), this.container.addEventListener("click", this.fullscreen, !1)
            },
            createEarth: function() {
                var e = this;
                if (t.Settings.realisticEarth) {
                    var i = new THREE.SphereGeometry(t.Settings.earthRadius, 128, 128),
                        o = new THREE.MeshBasicMaterial({
                            map: (new THREE.TextureLoader).load("textures/earth_atmos_2048.jpg")
                        });
                    this.earth = new THREE.Mesh(i, o), this.simpleEarth = this.earth, this.earth.name = "Earth", e.scene.add(this.earth)
                } else {
                    var n = new THREE.JSONLoader,
                        r = t.Settings.models.earthPath,
                        s = 10250;
                    n.load(r, function(i, o) {
                        o.forEach(function(t) {
                            t.shading = THREE.FlatShading
                        }), e.earth = new THREE.Mesh(i, new THREE.MeshFaceMaterial(o)), e.earth.scale.set(s, s, s), e.earth.name = "Earth", e.earth.rotation.y = Math.PI / 2, e.scene.add(e.earth);
                        var n = new THREE.SphereGeometry(t.Settings.earthRadius, 128, 128),
                            r = new THREE.MeshLambertMaterial({
                                map: (new THREE.TextureLoader).load("textures/img_earth_disengage.jpg")
                            });
                        e.simpleEarth = new THREE.Mesh(n, r), e.simpleEarth.visible = !1, e.simpleEarth.name = "SimpleEarth", e.simpleEarth.rotation.y = .18, e.scene.add(e.simpleEarth)
                    })
                }
            },
            setupSkybox: function() {
                var e = this;
                e.skydome = {
                    scene: new THREE.Scene,
                    camera: e.makeCamera(this.cameraNear, t.Settings.worldSize)
                }, e.skydome.scene.add(e.skydome.camera);
                var i = ["textures/galaxy_px.png", "textures/galaxy_nx.png", "textures/galaxy_py.png", "textures/galaxy_ny.png", "textures/galaxy_pz.png", "textures/galaxy_nz.png"];
                (new THREE.CubeTextureLoader).load(i, function(i) {
                    i.mapping = THREE.CubeRefractionMapping;
                    var o = THREE.ShaderLib.cube;
                    o.uniforms.tCube.value = i;
                    var n = new THREE.ShaderMaterial({
                            fragmentShader: o.fragmentShader,
                            vertexShader: o.vertexShader,
                            uniforms: o.uniforms,
                            side: THREE.BackSide,
                            depthTest: !1,
                            depthWrite: !1
                        }),
                        r = new THREE.Mesh(new THREE.BoxGeometry(t.Settings.worldSize, t.Settings.worldSize, t.Settings.worldSize), n);
                    e.skydome.scene.add(r)
                })
            },
            initialize: function() {
                this.figures = [], this.enableDebugCamera = !1, this.setupScene(), this.setupCamera(), this.setupLights(), this.setupRenderer(), this.setupControls(), this.setupPlayer(), this.setupCeilingMenu(), this.setupEvents(), this.resize()
            },
            update: function() {
                for (var t = 0; t < this.figures.length; t++) this.figures[t].animate();
                this.player.update(), this.rimLight && this.rimLight.targetTo(this.player.position), this.haloEffectController && this.haloEffectController.update(), this.render()
            },
            setDebugCamera: function(t) {
                t ? (this.enableDebugCamera = !0, this.debugCamera = t, this.renderer.setSize(window.innerWidth, window.innerHeight), this.fogEnabled = !1) : (this.enableDebugCamera = !1, this.debugCamera = null, this.fogEnabled = !1)
            },
            reset: function() {
                this.fogEnabled = !0, this.chapterMenuEnabled = !1, this.highCameraEnabled = !1, this.earthType = this.constructor.EarthType.Normal, this.player.cancelDisengage(), this.player.align(), this.player.needsCursor = !1, this.resetPlayerPosition()
            },
            render: function() {
                this.enableDebugCamera ? this.renderer.render(this.scene, this.debugCamera) : (this.skydome.camera.position.copy(this.player.position), this.skydome.camera.quaternion.copy(this.camera.getWorldQuaternion()), t.HUD.isVR ? (this.renderer.clear(), this.effect.render(this.skydome.scene, this.skydome.camera), this.effect.render(this.scene, this.camera)) : (this.renderer.clear(), this.renderer.render(this.skydome.scene, this.skydome.camera), this.renderer.render(this.scene, this.camera)))
            },
            fullscreen: function(t) {
                t.currentTarget.requestFullscreen ? t.currentTarget.requestFullscreen() : t.currentTarget.msRequestFullscreen ? t.currentTarget.msRequestFullscreen() : t.currentTarget.mozRequestFullScreen ? t.currentTarget.mozRequestFullScreen() : t.currentTarget.webkitRequestFullscreen && t.currentTarget.webkitRequestFullscreen()
            },
            get earthType() {
                return this._earthType
            },
            set earthType(t) {
                if (this._earthType !== t) switch (this._earthType = t, t) {
                    case e.EarthType.Normal:
                        this.earth.visible = !0, this.simpleEarth.visible = !1;
                        break;
                    case e.EarthType.Simple:
                        this.earth.visible = !1, this.simpleEarth.visible = !0
                }
            }
        }, i.prototype = {
            constructor: i,
            initialize: function() {
                var t = this;
                t.object = new THREE.Object3D, t.object.name = "EarthRimEffect";
                for (var e = (new THREE.TextureLoader).load("textures/rim.png"), i = [], o = 3; o < 10; o++) i.push(new THREE.Vector2(10 * Math.sin(.2 * o), 2 * (o - 2.2)));
                var n = new THREE.LatheGeometry(i, 24),
                    r = new THREE.MeshBasicMaterial({
                        map: e,
                        transparent: !0,
                        side: THREE.BackSide,
                        fog: !1,
                        shading: THREE.SmoothShading,
                        depthTest: !1,
                        depthWrite: !1
                    }),
                    s = new THREE.Mesh(n, r),
                    a = 750;
                s.scale.set(a, a, a), s.rotation.x = Math.PI / 2, t.object.add(s)
            },
            targetTo: function(t) {
                this.object.lookAt(t)
            }
        }, Object.defineProperty(e.prototype, "fogEnabled", {
            get: function() {
                return this._fogEnabled
            },
            set: function(e) {
                this._fogEnabled = e, this._fogEnabled ? this.scene.fog = new THREE.Fog(13421772, 50, 1.2 * t.Settings.earthRadius) : this.scene.fog = null
            }
        }), Object.defineProperty(e.prototype, "highCameraEnabled", {
            get: function() {
                return this._highCameraEnabled
            },
            set: function(e) {
                this._highCameraEnabled = e, this._highCameraEnabled ? (this.camera.far = t.Settings.worldSize, this.camera.updateProjectionMatrix()) : (this.camera.far = this.cameraFar, this.camera.updateProjectionMatrix())
            }
        }), Object.defineProperty(e.prototype, "chapterMenuEnabled", {
            get: function() {
                return this._chapterMenuEnabled
            },
            set: function(t) {
                this._chapterMenuEnabled !== t && (this._chapterMenuEnabled = t, this._chapterMenuEnabled ? this.chapterMenu.show() : this.chapterMenu.hide())
            }
        }), t.SceneController = e
    }(window),
    function(t) {
        "use strict";

        function e(e, o) {
            t.EventDispatcher.call(this), this.interval = e, this.callback = o, i.getInstance().add(this)
        }

        function i() {
            this.pool = []
        }
        e.EventType = {
            End: "end"
        }, e.prototype = Object.create(t.EventDispatcher.prototype), e.prototype.constructor = e, e.prototype.$class = "Wait", e.prototype.currentTime = 0, e.prototype.interval = 0, e.prototype.ended = !1, e.prototype.cancel = function() {
            this.ended || (console.log("Cancel wait"), this.ended = !0, this.fire(e.EventType.End, {
                canceled: !0
            }))
        }, e.prototype.update = function() {
            this.ended || (this.currentTime += Time.deltaTime, this.currentTime >= this.interval && (console.log("End wait"), this.ended = !0, this.callback && this.callback(), this.fire(e.EventType.End, {
                canceled: !1
            })))
        }, i.prototype.contains = function(t) {
            return this.pool.indexOf(t) !== -1
        }, i.prototype.add = function(t) {
            this.contains(t) || (t.addListener(e.EventType.End, this.handleEnd, this), this.pool.push(t))
        }, i.prototype.remove = function(t) {
            var e = this.pool.indexOf(t);
            e !== -1 && this.pool.splice(e, 1)
        }, i.prototype.update = function() {
            0 !== this.pool.length && this.pool.forEach(function(t, e) {
                t.update()
            })
        }, i.prototype.reset = function() {
            this.pool.forEach(function(t, e) {
                t.cancel()
            }), this.pool = []
        }, i.prototype.handleEnd = function(t) {
            this.remove(t.target)
        };
        var o = null;
        i.getInstance = function() {
            return o || (o = new i), o
        }, t.Wait = e, t.WaitManager = i
    }(window),
    function(t) {
        "use strict";

        function e() {
            t.EventDispatcher.call(this), this._initialize()
        }
        e.EventType = {
            WillStart: "willStart",
            DidStart: "didStart",
            Start: "start",
            WillClose: "willClose",
            Close: "close"
        }, e.prototype = Object.create(t.EventDispatcher.prototype), e.prototype.constructor = e, e.prototype.$class = "Act", e.prototype.isOnetime = !1, e.prototype.isClosed = !1, e.prototype.children = null, e.prototype.currentChildAct = null, e.prototype.parent = null, e.prototype._initialize = function() {
            this.clear(), this.isClosed = !1, this.initialize()
        }, e.prototype.clear = function() {
            Utility.isArray(this.children) && this.each(function(t, e) {
                t.dispose()
            }), this.children = []
        }, e.prototype.initialize = function() {}, e.prototype.add = function(t) {
            return e.prototype.isPrototypeOf(t) ? void(this.contains(t) || (t.addListener(e.EventType.Close, this.closeHandler, this), t.parent && t.parent.remove(t), t.parent = this, this.children.push(t))) : void console.warn("act must be Act instance.")
        }, e.prototype.remove = function(t) {
            if (this.contains(t)) {
                var e = this.children.indexOf(t);
                e !== -1 && (t.parent = null, this.children.splice(e, 1))
            }
        }, e.prototype.removeAllChildren = function() {
            this.children = []
        }, e.prototype.contains = function(t) {
            return this.children.indexOf(t) !== -1
        }, e.prototype._start = function() {
            return console.log("Start " + this.$class), this.isClosed = !1, this._willStart(), 0 === this.children.length ? (this.fire(e.EventType.Start), this.start(), void this._didStart()) : void this._startNextChild()
        }, e.prototype.reset = function() {
            this.close(), this.isClosed = !1
        }, e.prototype._startNextChild = function() {
            var t = this.nextChild();
            return t ? void this._startChildren(t) : (this.currentChildAct = null, this.fire(e.EventType.Start), void this.start())
        }, e.prototype._startChildren = function(t) {
            this.currentChildAct = t, t._start()
        }, e.prototype.start = function() {
            this.close()
        }, e.prototype._willStart = function() {
            console.log(this.$class + " will start."), this.fire(e.EventType.WillStart), this.willStart()
        }, e.prototype.willStart = function() {}, e.prototype._didStart = function() {
            console.log(this.$class + " did start."), this.fire(e.EventType.DidStart), this.didStart()
        }, e.prototype.didStart = function() {}, e.prototype._update = function() {
            this.currentChildAct && this.currentChildAct._update(), this.update()
        }, e.prototype.update = function() {}, e.prototype.willClose = function() {
            this.fire(e.EventType.WillClose)
        }, e.prototype.close = function() {
            this.isClosed || (this.willClose(), this.isClosed = !0, console.log("Close " + this.$class), this.each(function(t, e) {
                t.close()
            }), this.fire(e.EventType.Close))
        }, e.prototype.nextChild = function() {
            for (var t = 0, e = this.children.length; t < e; t++)
                if (!this.children[t].isClosed) return this.children[t];
            return null
        }, e.prototype.each = function(t) {
            0 !== this.children.length && this.children.forEach(t, this)
        }, e.prototype.dispose = function() {
            this.each(function(t, e) {
                t.dispose()
            }), t.EventDispatcher.prototype.dispose.call(this)
        }, e.prototype.closeHandler = function(t) {
            return this.allChildrenIsClosed ? void this.start() : void this._startNextChild()
        }, Object.defineProperty(e.prototype, "allChildrenIsClosed", {
            get: function() {
                return this.children.every(function(t, e) {
                    return t.isClosed
                })
            }
        }), t.Act = e
    }(window),
    function(t) {
        "use strict";

        function e(e) {
            this.player = e, this.localization = t.ModelLocator.getInstance().getModel(t.LocalizationModel, t.Model.defaultModelName), t.Act.call(this)
        }
        e.prototype = Object.create(t.Act.prototype), e.prototype.constructor = e, e.prototype.$class = "MessageAct", e.prototype.messageViewController = null, e.prototype.initialize = function() {
            var e = this.player.getHudCanvas();
            this.messageViewController = new t.MessageViewController(e)
        }, e.prototype.start = function() {
            this.messageViewController.run().then(function() {
                this.close()
            }.bind(this))
        }, e.prototype.close = function() {
            this.messageViewController.stop(), t.Act.prototype.close.call(this)
        }, e.prototype.addParagraph = function(t) {
            this.messageViewController.addParagraph(t)
        }, t.MessageAct = e
    }(window),
    function(t) {
        "use strict";

        function e() {
            t.Act.call(this)
        }
        e.prototype = Object.create(t.Act.prototype), e.prototype.constructor = e, e.prototype.$class = "ChapterConditionalAct", e.prototype.start = function() {}, t.ChapterConditionalAct = e
    }(window),
    function(t) {
        "use strict";

        function e(e) {
            this.player = t.ApplicationController.player, this.goal = e, this.localization = t.ModelLocator.getInstance().getModel(t.LocalizationModel, t.Model.defaultModelName), this.animateController = t.AnimateController.getInstance(), t.Act.call(this)
        }
        e.prototype = Object.create(t.Act.prototype), e.prototype.constructor = e, e.prototype.$class = "ChapterResultAct", e.prototype.localization = null, e.prototype.isOnetime = !0, e.prototype.initialize = function() {
            var t = this.makeResultMessageAct();
            this.add(t)
        }, e.prototype.makeResultMessageAct = function() {
            var e = this.goal.get("figureOnCountry"),
                i = e.getCountry(),
                o = e.get("figureMesh"),
                n = o.getName(),
                r = new t.MessageAct(this.player),
                s = r.messageViewController.generateParagraph({
                    waitTime: 0
                }),
                a = i.getCountryName(),
                l = this.localization.getText("text_chapter_result", {
                    country: a
                }),
                c = 16,
                h = 24,
                p = new t.HUD.TextElementCentered({
                    text: l,
                    color: "white",
                    fontSize: c,
                    fontFamily: t.Settings.font.defaultFontFamily,
                    lineHeight: h,
                    centerX: 0,
                    centerY: -75
                });
            s.addElement(p), "en" === Localization.lang && (n = n.replace("\n", " "));
            var l = n,
                c = 32,
                h = 32,
                p = new t.HUD.TextElementCentered({
                    text: l,
                    color: "white",
                    fontSize: c,
                    fontFamily: t.Settings.font.defaultFontFamily,
                    lineHeight: h,
                    centerX: 0,
                    centerY: -10
                });
            s.addElement(p);
            var l = this.localization.getText("text_chapter_result_most", {
                    country: a
                }),
                c = 14,
                h = 14,
                p = new t.HUD.TextElementCentered({
                    text: l,
                    color: "white",
                    fontSize: c,
                    fontFamily: t.Settings.font.defaultFontFamily,
                    lineHeight: h,
                    centerX: 0,
                    centerY: 30
                });
            s.addElement(p);
            var u = o.getMesh();
            u.material = u.material.clone();
            var d = new t.HUD.Size(50, 50),
                f = new t.HUD.PositionFromCenter((-d.halfWidth), -d.halfHeight + 138),
                p = new t.HUD.ObjectElement({
                    frame: new t.HUD.Frame(f, d),
                    object: u,
                    modelHeight: 1
                });
            return s.addElement(p), p.object.position.z = -10, this.animateController.createRotationAnimator(u, {
                duration: 5e3
            }), r
        }, t.ChapterResultAct = e
    }(window),
    function(t) {
        "use strict";

        function e(e) {
            this.player = t.ApplicationController.player, this.goal = e, t.Act.call(this)
        }

        function i(e) {
            this.player = t.ApplicationController.player, this.star = e, t.Act.call(this)
        }

        function o(e) {
            this.player = t.ApplicationController.player, this.star = e, t.Act.call(this)
        }

        function n(e) {
            this.player = t.ApplicationController.player, this.star = e, t.Act.call(this)
        }

        function r(e) {
            this.player = t.ApplicationController.player, this.star = e, t.Act.call(this)
        }

        function s(e) {
            this.player = t.ApplicationController.player, this.star = e, t.Act.call(this)
        }
        e.prototype = Object.create(t.Act.prototype), e.prototype.constructor = e, e.prototype.$class = "ChapterResultPinAct", e.prototype.localization = null, e.prototype.star = null, e.prototype.initialize = function() {
            this.star = this.makeStar(), this.player.camera.add(this.star);
            var e = new t.ChapterResultShowStarAct(this.star);
            this.add(e);
            var i = new t.ChapterResultGlowStarAct(this.star);
            this.add(i);
            var o = new t.ChapterResultMoveStarAct(this.star);
            this.add(o)
        }, e.prototype.makeStar = function() {
            var t = this.player.nextStar().size,
                e = new THREE.PlaneGeometry(t.hudWidth, t.hudHeight),
                i = new THREE.MeshBasicMaterial({
                    map: (new THREE.TextureLoader).load("img/img_clear_star.png"),
                    transparent: !0
                }),
                o = new THREE.Mesh(e, i);
            return o.name = "Star", o.visible = !1, o.renderOrder = 11e3, o
        }, e.prototype.close = function() {
            var e = this.goal.get("chapter").get("currentGoalIndex");
            this.player.setStarsCount(e), this.star && (this.star.parent.remove(this.star), this.star.geometry.dispose(), this.star = null);
            new t.Wait(500, function() {
                t.Act.prototype.close.call(this)
            }.bind(this))
        }, e.prototype.dispose = function() {
            this.star && (this.star.parent.remove(this.star), this.star.geometry.dispose(), this.star = null), t.Act.prototype.dispose.call(this)
        }, i.prototype = Object.create(t.Act.prototype), i.prototype.constructor = i, i.prototype.$class = "ChapterResultShowStarAct", i.prototype.player = null, i.prototype.star = null, i.prototype.findDestinationPin = function() {
            for (var e = this.parent; e && !t.ChapterStage.prototype.isPrototypeOf(e);) e = e.parent;
            if (!e) return null;
            var i = e.destinationPin;
            return i ? i : null
        }, i.prototype.jumpUpPin = function() {
            var t = this.findDestinationPin();
            return t ? t.jumpUp() : Promise.reject("DestinationPin not exists, skip jumpUp")
        }, i.prototype.start = function() {
            this.jumpUpPin().then(this.showStar.bind(this))["catch"](function(t) {
                console.warn(t)
            })
        }, i.prototype.showStar = function() {
            this.star.visible = !0, t.AnimateController.createAnimator({
                duration: 800,
                fromValue: 0,
                toValue: -11.4,
                callback: function(t) {
                    this.star.position.z = t
                }.bind(this),
                finish: function() {
                    this.close()
                }.bind(this)
            })
        }, o.prototype = Object.create(t.Act.prototype), o.prototype.constructor = o, o.prototype.$class = "ChapterResultGlowStarAct", o.prototype.player = null, o.prototype.star = null, o.prototype.glowEffect = null, o.prototype.glowAnimator = null, o.prototype.waitInterval = 2e3, o.prototype.initialize = function() {
            var t = new THREE.PlaneGeometry(15, 15),
                e = new THREE.MeshBasicMaterial({
                    map: (new THREE.TextureLoader).load("img/img_star_glow.png"),
                    transparent: !0,
                    opacity: 0
                });
            this.glowEffect = new THREE.Mesh(t, e), this.glowEffect.name = "StarGlowEffect", this.glowEffect.visible = !1, this.glowEffect.renderOrder = 11100, this.star.parent.add(this.glowEffect)
        }, o.prototype.start = function() {
            this.glowEffect.visible = !0, this.glowEffect.position.copy(this.star.position), this.glowEffect.position.z += .01, this.glowAnimator = t.AnimateController.createCyclicAnimator(this.glowEffect, {
                duration: 1100
            }), this.glowAnimator.callback = function(t, e) {
                var i = e * Math.PI * 2,
                    o = (Math.sin(i) + 1) / 2;
                t.material.opacity = .6 * o
            };
            new t.Wait(this.waitInterval, function() {
                this.close()
            }.bind(this))
        }, o.prototype.close = function() {
            this.glowEffect.visible = !1, this.glowAnimator.cancel(), t.Act.prototype.close.call(this)
        }, o.prototype.dispose = function() {
            this.glowEffect && (this.glowEffect.parent.remove(this.haloEffect), this.glowEffect.geometry.dispose(), this.glowEffect = null), this.glowAnimator && (this.glowAnimator.dispose(), this.glowAnimator = null), t.Act.prototype.dispose.call(this)
        }, t.ChapterResultGlowStarAct = o, n.prototype = Object.create(t.Act.prototype), n.prototype.constructor = n, n.prototype.$class = "ChapterResultHaloStarAct", n.prototype.player = null, n.prototype.star = null, n.prototype.haloEffect = null, n.prototype.haloAnimator = null, n.prototype.waitInterval = 2e3, n.prototype.initialize = function() {
            var t = new THREE.PlaneGeometry(12, 12),
                e = new THREE.MeshBasicMaterial({
                    map: (new THREE.TextureLoader).load("img/img_star_light.png"),
                    transparent: !0,
                    opacity: 0
                });
            this.haloEffect = new THREE.Mesh(t, e), this.haloEffect.name = "StarhaloEffect", this.haloEffect.visible = !1, this.star.parent.add(this.haloEffect)
        }, n.prototype.start = function() {
            this.haloEffect.visible = !0, this.haloEffect.position.copy(this.star.position), this.haloEffect.position.z -= 1, t.AnimateController.createAnimator({
                duration: 1e3,
                fromValue: 0,
                toValue: 1,
                callback: function(t) {
                    this.haloEffect.material.opacity = t
                }.bind(this)
            }), this.haloAnimator = t.AnimateController.createCyclicAnimator(this.haloEffect, {
                duration: 2e4
            }), this.haloAnimator.callback = function(t, e) {
                t.rotation.z = e * Math.PI * 2
            };
            new t.Wait(this.waitInterval, function() {
                this.endAnimation()
            }.bind(this))
        }, n.prototype.endAnimation = function() {
            t.AnimateController.createAnimator({
                duration: 1e3,
                fromValue: 1,
                toValue: 0,
                callback: function(t) {
                    this.haloEffect.material.opacity = t
                }.bind(this),
                finish: function() {
                    this.close()
                }.bind(this)
            })
        }, n.prototype.close = function() {
            this.haloEffect.visible = !1, this.haloAnimator.cancel(), t.Act.prototype.close.call(this)
        }, n.prototype.dispose = function() {
            this.haloEffect && (this.haloEffect.parent.remove(this.haloEffect), this.haloEffect.geometry.dispose(), this.haloEffect = null), this.haloAnimator && (this.haloAnimator.dispose(), this.haloAnimator = null), t.Act.prototype.dispose.call(this)
        }, r.prototype = Object.create(t.Act.prototype), r.prototype.constructor = r, r.prototype.$class = "ChapterResultMoveStarAct", r.prototype.player = null, r.prototype.star = null, r.prototype.startPoint = null, r.prototype.endPoint = null, r.prototype.start = function() {
            this.player.setModeGoal();
            var e = this.player.nextStar().quad;
            this.startPoint = this.star.position.clone(), this.endPoint = this.calcEndPoint(e), t.AnimateController.createVectorAnimator(this.star, {
                type: "position",
                duration: 800,
                fromValue: this.startPoint,
                toValue: this.endPoint,
                finish: function() {
                    this.close()
                }.bind(this)
            })
        }, r.prototype.calcEndPoint = function(t) {
            for (var e = new THREE.Matrix4, i = t;;) {
                if (i === this.player.camera) break;
                if (!i) break;
                e.multiplyMatrices(i.matrix, e), i = i.parent
            }
            var o = new THREE.Vector3;
            return o.z += .1, o.applyMatrix4(e)
        }, s.prototype = Object.create(t.Act.prototype), s.prototype.constructor = s, s.prototype.$class = "ChapterResultBlinkStarAct", s.prototype.player = null, s.prototype.star = null, s.prototype.blinkStar = null, s.prototype.blinkAnimator = null, s.prototype.waitInterval = 2e3, s.prototype.initialize = function() {
            var t = this.player.nextStar().size,
                e = 2.3 * t.hudWidth,
                i = 2.4 * t.hudHeight,
                o = new THREE.PlaneGeometry(e, i),
                n = new THREE.MeshBasicMaterial({
                    map: (new THREE.TextureLoader).load("img/img_star_blink.png"),
                    transparent: !0,
                    opacity: 0
                });
            this.blinkStar = new THREE.Mesh(o, n), this.blinkStar.name = "BlinkStar", this.blinkStar.visible = !1, this.blinkStar.renderOrder = 11100, this.star.parent.add(this.blinkStar)
        }, s.prototype.start = function() {
            this.blinkStar.visible = !0, this.blinkStar.position.copy(this.star.position), this.blinkStar.position.z += .1, this.blinkStar.position.y -= .05, this.blinkAnimator = t.AnimateController.createCyclicAnimator(this.blinkStar, {
                duration: 1100
            }), this.blinkAnimator.callback = function(t, e) {
                var i = e * Math.PI * 2,
                    o = (Math.sin(i) + 1) / 2;
                t.material.opacity = o
            };
            new t.Wait(this.waitInterval, function() {
                this.close()
            }.bind(this))
        }, s.prototype.close = function() {
            this.blinkAnimator.cancel(), this.blinkStar && (this.blinkStar.parent.remove(this.blinkStar), this.blinkStar.geometry.dispose(), this.blinkStar = null), t.Act.prototype.close.call(this)
        }, s.prototype.dispose = function() {
            this.blinkStar && (this.blinkStar.parent.remove(this.blinkStar), this.blinkStar.geometry.dispose(), this.blinkStar = null), this.blinkAnimator && (this.blinkAnimator.dispose(), this.blinkAnimator = null), t.Act.prototype.close.call(this)
        }, t.ChapterResultPinAct = e, t.ChapterResultShowStarAct = i, t.ChapterResultHaloStarAct = n, t.ChapterResultMoveStarAct = r, t.ChapterResultBlinkStarAct = s
    }(window),
    function(t) {
        "use strict";

        function e(e, i) {
            this.chapterModel = i, t.MessageAct.call(this, e)
        }
        e.prototype = Object.create(t.MessageAct.prototype), e.prototype.constructor = e, e.prototype.$class = "ChapterStartAct", e.prototype.player = null, e.prototype.chapterModel = null, e.prototype.category = null, e.prototype.initialize = function() {
            t.MessageAct.prototype.initialize.call(this), this.category = this.chapterModel.get("category"), this.setupParagraphIntro(), this.setupParagraphFirstDestination(), 1 == this.chapterModel.get("no") && this.setupParagraphTutrial(), this.setupParagraphStartBoard()
        }, e.prototype.willStart = function() {
            this.player.fadeOut({
                duration: 1e3,
                toValue: t.Settings.messageBackgroundOpacity
            })
        }, e.prototype.setupParagraphIntro = function() {
            this.paragraph = this.messageViewController.generateParagraph({
                waitTime: 0
            });
            var e, i = "Chapter " + this.chapterModel.get("no"),
                o = 32,
                n = 32,
                r = new t.HUD.TextElementCentered({
                    text: i,
                    color: "white",
                    fontSize: o,
                    fontFamily: "Roboto",
                    fontWeight: 100,
                    lineHeight: n,
                    centerX: 0,
                    centerY: -65
                });
            this.paragraph.addElement(r);
            var i = this.localization.getText("text_chapter_intro", {
                    category: this.category.getName()
                }),
                o = 16,
                n = 26,
                r = new t.HUD.TextElementCentered({
                    text: i,
                    color: "white",
                    fontSize: o,
                    fontFamily: t.Settings.font.defaultFontFamily,
                    lineHeight: n,
                    centerX: 0,
                    centerY: 40
                });
            this.paragraph.addElement(r), e = r.size
        }, e.prototype.setupParagraphGoAround = function() {
            this.paragraph = this.messageViewController.generateParagraph({
                waitTime: 0
            });
            var e = this.chapterModel.getGoals();
            e.forEach(function(i, o) {
                var n = i.getCountry(),
                    r = 75 * o - 95,
                    s = n.getCityName(),
                    a = 24,
                    l = 24,
                    c = new t.HUD.TextElementCentered({
                        text: s,
                        color: "white",
                        fontSize: a,
                        fontFamily: t.Settings.font.defaultFontFamily,
                        lineHeight: l,
                        centerX: 0,
                        centerY: r
                    });
                this.paragraph.addElement(c);
                var s = n.getCountryName(),
                    a = 14,
                    l = 14,
                    c = new t.HUD.TextElementCentered({
                        text: s,
                        color: "white",
                        fontSize: a,
                        fontFamily: t.Settings.font.defaultFontFamily,
                        lineHeight: l,
                        centerX: 0,
                        centerY: r + 28
                    });
                if (this.paragraph.addElement(c), !(o >= e.length - 1)) {
                    var s = "▼",
                        a = 14,
                        l = 14,
                        c = new t.HUD.TextElementCentered({
                            text: s,
                            color: "white",
                            fontSize: a,
                            fontFamily: t.Settings.font.defaultFontFamily,
                            lineHeight: l,
                            centerX: 0,
                            centerY: r + 50
                        });
                    this.paragraph.addElement(c)
                }
            }, this);
            var i = this.localization.getText("text_chapter_go_around"),
                o = 14,
                n = 14,
                r = new t.HUD.TextElementCentered({
                    text: i,
                    color: "white",
                    fontSize: o,
                    fontFamily: t.Settings.font.defaultFontFamily,
                    lineHeight: n,
                    centerX: 0,
                    centerY: 110
                });
            this.paragraph.addElement(r)
        }, e.prototype.setupParagraphTimeLimit = function() {
            this.paragraph = this.messageViewController.generateParagraph({
                waitTime: 0
            });
            var e = this.localization.getText("text_chapter_limit"),
                i = 16,
                o = 16,
                n = new t.HUD.TextElementCentered({
                    text: e,
                    color: "white",
                    fontSize: i,
                    fontFamily: t.Settings.font.defaultFontFamily,
                    lineHeight: o,
                    centerX: 0,
                    centerY: -45
                });
            this.paragraph.addElement(n);
            var r = Math.floor(t.Settings.chapterTimeLimit / 6e4),
                s = Math.floor(t.Settings.chapterTimeLimit - 6e4 * r) / 1e3;
            s < 10 && (s = "0" + s);
            var e = "" + r + ":" + s,
                i = 56,
                o = 56,
                n = new t.HUD.TextElementCentered({
                    text: e,
                    color: "white",
                    fontSize: i,
                    fontFamily: "Roboto",
                    fontWeight: 100,
                    lineHeight: o,
                    centerX: 0,
                    centerY: 10
                });
            this.paragraph.addElement(n)
        }, e.prototype.setupParagraphFirstDestination = function() {
            this.paragraph = this.messageViewController.generateParagraph({
                waitTime: 0
            });
            var e = new t.HUD.Size(32, 64),
                i = new t.HUD.PositionFromCenter((-e.halfWidth), -e.halfHeight - 90),
                o = new t.HUD.ImageElement({
                    frame: new t.HUD.Frame(i, e),
                    path: "img/pin.png"
                });
            this.paragraph.addElement(o);
            var n = this.localization.getText("text_chapter_first"),
                r = 16,
                s = 16,
                o = new t.HUD.TextElementCentered({
                    text: n,
                    color: "white",
                    fontSize: r,
                    fontFamily: t.Settings.font.defaultFontFamily,
                    lineHeight: s,
                    centerX: 0,
                    centerY: -45
                });
            this.paragraph.addElement(o);
            var a = this.chapterModel.getGoals(),
                l = a[0],
                c = l.getCountry(),
                n = c.getCityName(),
                r = 32,
                s = 32,
                o = new t.HUD.TextElementCentered({
                    text: n,
                    color: "white",
                    fontSize: r,
                    fontFamily: t.Settings.font.defaultFontFamily,
                    lineHeight: s,
                    centerX: 0,
                    centerY: 10
                });
            this.paragraph.addElement(o);
            var n = c.getCountryName(),
                r = 14,
                s = 14,
                o = new t.HUD.TextElementCentered({
                    text: n,
                    color: "white",
                    fontSize: r,
                    fontFamily: t.Settings.font.defaultFontFamily,
                    lineHeight: s,
                    centerX: 0,
                    centerY: 45
                });
            this.paragraph.addElement(o)
        }, e.prototype.setupParagraphTutrial = function() {
            var e = this.makeMiniMapMask();
            this.paragraph = this.messageViewController.generateParagraph({
                waitTime: 0,
                isFadeOut: !1,
                beforeCallback: function() {
                    this.player.setModeMiniMapMode(), this.player.fadeIn({
                        duration: 500,
                        toValue: 0
                    }), this.player.hudCanvas.add(e)
                }.bind(this),
                afterCallback: function() {
                    this.player.setModeNone(), this.player.fadeOut({
                        duration: 0,
                        toValue: t.Settings.messageBackgroundOpacity
                    }), this.player.hudCanvas.remove(e)
                }.bind(this)
            });
            var i, o = this.localization.getText("text_chapter_minimap"),
                n = 16,
                r = 32,
                s = new t.HUD.TextElementCentered({
                    text: o,
                    color: "white",
                    fontSize: n,
                    fontFamily: t.Settings.font.defaultFontFamily,
                    lineHeight: r,
                    centerX: 0,
                    centerY: 0
                });
            this.paragraph.addElement(s), i = s.size
        }, e.prototype.setupParagraphStartBoard = function() {
            this.paragraph = this.messageViewController.generateCircleBoard("Start", {
                waitTime: 1e3,
                duration: 1e3,
                isFadeIn: !1,
                isFadeOut: !1,
                beforeCallback: function() {
                    this.player.fadeIn({
                        duration: 200
                    })
                }.bind(this)
            })
        }, e.prototype.makeMiniMapMask = function() {
            var e = 4 * HUD.SCREEN_WIDTH,
                i = 100,
                o = new THREE.RingGeometry(i / 2, e / 2, 64, 1),
                n = new THREE.MeshBasicMaterial({
                    color: 0,
                    side: THREE.DoubleSide,
                    transparent: !0,
                    opacity: t.Settings.messageBackgroundOpacity
                }),
                r = new THREE.Mesh(o, n);
            r.name = "minimap mask", r.position.z = -20, r.position.y = -105;
            var s = new t.HUD.Size(e, e),
                a = new t.HUD.PositionFromCenter((-s.halfWidth), (-s.halfHeight)),
                l = new t.HUD.ObjectElement({
                    frame: new t.HUD.Frame(a, s),
                    object: r,
                    modelHeight: e
                });
            return l
        }, t.ChapterStartAct = e
    }(window),
    function(t) {
        "use strict";

        function e(e) {
            this.player = t.ApplicationController.player, this.chapterModel = e, t.Act.call(this)
        }
        e.prototype = Object.create(t.Act.prototype), e.prototype.constructor = e, e.prototype.$class = "ChapterClearTitleAct", e.prototype.player = null, e.prototype.chapterModel = null, e.prototype.titleElement = null, e.prototype.textElement = null, e.prototype.starsObject = null, e.prototype.particle = null, e.prototype.titleWait = 1300, e.prototype.titleDuration = 800, e.prototype.starsWait = 2300, e.prototype.starsWait2 = 0, e.prototype.textWait = 3300, e.prototype.makeTitle = function() {
            var e = "Congratulations",
                i = 36,
                o = 36,
                n = new t.HUD.TextElementCentered({
                    text: e,
                    color: "white",
                    fontSize: i,
                    fontFamily: "Roboto",
                    fontWeight: 400,
                    lineHeight: o,
                    centerX: 0,
                    centerY: -55
                });
            return n
        }, e.prototype.makeStars = function() {
            for (var e = 3, i = (e - 1) / 2, o = 36, n = [], r = [], s = 0; s < e; s++) {
                var a = o * (s - i),
                    l = new t.HUD.Size(32, 32),
                    c = new t.HUD.PositionFromCenter(-l.halfWidth + a, -l.halfHeight - 5),
                    h = new t.HUD.ImageElement({
                        frame: new t.HUD.Frame(c, l),
                        path: "img/img_clear_star_frame.png"
                    });
                r.push(h);
                var p = new t.HUD.Element({
                    frame: new t.HUD.Frame(c, l)
                });
                n.push(new t.ClearStar(p))
            }
            return {
                elements: r,
                stars: n
            }
        }, e.prototype.makeText = function() {
            var e = t.ModelLocator.getInstance().getModel(t.LocalizationModel, t.Model.defaultModelName),
                i = e.getText("text_chapter_clear_reached_all"),
                o = 14,
                n = 22,
                r = new t.HUD.TextElementCentered({
                    text: i,
                    color: "white",
                    fontSize: o,
                    fontFamily: t.Settings.font.defaultFontFamily,
                    lineHeight: n,
                    centerX: 0,
                    centerY: 50
                });
            return r
        }, e.prototype.start = function() {
            var t = this.showTitle(),
                e = this.showStars(),
                i = this.showText();
            e.then(function() {
                this.particle.fadeOut()
            }.bind(this)), Promise.all([t, e, i]).then(this.closeAnimate.bind(this))
        }, e.prototype.update = function() {
            this.particle && this.particle.update()
        }, e.prototype.showTitle = function() {
            var e = this.player.getHudCanvas();
            this.titleElement = this.makeTitle();
            var i = this;
            return new Promise(function(o, n) {
                new t.Wait(i.titleWait, function() {
                    e.add(i.titleElement), new t.Wait(i.titleDuration - 50, function() {
                        i.particle = new t.ClearParticle(i.titleElement.size), i.particle.object.position.y = i.titleElement.quad.position.y, i.particle.object.position.z = i.titleElement.quad.position.z - .01, i.titleElement.quad.parent.add(i.particle.object)
                    }), t.AnimateController.createVectorAnimator(i.titleElement.quad, {
                        type: "scale",
                        duration: i.titleDuration,
                        fromValue: new THREE.Vector3(0, 0, 0),
                        toValue: new THREE.Vector3(1, 1, 1),
                        finish: o,
                        timingFunction: function(e, i, o, n, r) {
                            var r = 6;
                            return t.AnimateController.timingFunction.easeOutBack3v(e, i, o, n, r)
                        }
                    }), i.titleElement.fadeIn()
                })
            })
        }, e.prototype.showStars = function() {
            var e = this,
                i = e.player.getHudCanvas();
            e.starsObject = e.makeStars();
            var o = e.starsObject.stars,
                n = e.starsObject.elements;
            return new Promise(function(r, s) {
                new t.Wait(e.starsWait, function() {
                    n.forEach(function(t, e) {
                        i.add(t), t.fadeIn()
                    }), new t.Wait(e.starsWait2, function() {
                        var t = 0;
                        ! function e() {
                            if (t >= o.length) return void r();
                            var i = o[t];
                            t++, i.start().then(e)
                        }()
                    })
                })
            })
        }, e.prototype.showText = function() {
            var e = this.player.getHudCanvas();
            this.textElement = this.makeText();
            var i = this;
            return new Promise(function(o, n) {
                new t.Wait(i.textWait, function() {
                    e.add(i.textElement), i.textElement.fadeIn().then(o)
                })
            })
        }, e.prototype.closeAnimate = function() {
            for (var t = this.starsObject.stars, e = this.starsObject.elements, i = 0; i < t.length; i++) {
                var o = t[i],
                    n = e[i];
                n.quad.material.map = o.object.material.map, o.dispose()
            }
            var r = e.concat(this.titleElement, this.textElement),
                s = r.map(function(t, e) {
                    return t.fadeOut()
                });
            Promise.all(s).then(function() {
                this.close()
            }.bind(this))
        }, e.prototype.close = function() {
            this.titleElement && (this.titleElement.dispose(), this.titleElement = null), this.textElement && (this.textElement.dispose(), this.textElement = null), this.starsObject && (this.starsObject.elements.forEach(function(t, e) {
                t.dispose()
            }), this.starsObject = null), this.particle && this.particle.dispose(), t.Act.prototype.close.call(this)
        }, t.ChapterClearTitleAct = e
    }(window),
    function(t) {
        "use strict";

        function e(e, i) {
            this.player = e, this.chapterModel = i, t.Act.call(this)
        }

        function i(e) {
            this.player = t.ApplicationController.player, this.chapterModel = e, t.Act.call(this)
        }
        e.prototype = Object.create(t.Act.prototype), e.prototype.constructor = e, e.prototype.$class = "ChapterClearResultAct", e.prototype.player = null, e.prototype.chapterModel = null, e.prototype.questionFigureMeshModel = null, e.prototype.initialize = function() {
            var e = t.Settings.models.questionPath,
                i = t.ModelLocator.getInstance();
            this.questionFigureMeshModel = i.getModel(t.FigureMeshModel, e, {
                path: e
            }), this.setupParagraph()
        }, e.prototype.setupParagraph = function() {
            var e = this.chapterModel.get("category"),
                i = new t.MessageAct(this.player),
                o = i.messageViewController.generateParagraph({
                    waitTime: 0
                }),
                n = i.localization.getText("text_chapter_clear_result", {
                    category: e.getName()
                }),
                r = 15,
                s = 25,
                a = new t.HUD.TextElementCentered({
                    text: n,
                    color: "white",
                    fontSize: r,
                    fontFamily: t.Settings.font.defaultFontFamily,
                    lineHeight: s,
                    centerX: 0,
                    centerY: -90
                });
            o.addElement(a);
            var l = this.chapterModel.getGoals();
            l.forEach(function(e, i) {
                var n = (l.length - 1) / 2,
                    r = 90 * (i - n),
                    s = 52,
                    a = e.get("figureOnCountry"),
                    c = a.getCountry(),
                    h = a.get("figureMesh");
                h.getName();
                if (e.isSuccess()) var p = h.getName();
                else var p = "???";
                var u = 14,
                    d = 18,
                    f = new t.HUD.TextElementCentered({
                        text: p,
                        color: "white",
                        fontSize: u,
                        lineHeight: d,
                        fontFamily: t.Settings.font.defaultFontFamily,
                        centerX: r,
                        centerY: s
                    });
                o.addElement(f);
                var c = e.getCountry().getCountryName(),
                    p = c,
                    u = 10,
                    f = new t.HUD.TextElementCentered({
                        text: p,
                        color: "white",
                        fontSize: u,
                        fontFamily: t.Settings.font.defaultFontFamily,
                        centerX: r,
                        centerY: s + 28
                    });
                if (o.addElement(f), e.isSuccess()) {
                    var y = h.getMesh();
                    y.material = y.material.clone();
                    var g = 1
                } else var y = this.questionFigureMeshModel.getMesh(),
                    g = 3.6;
                var m = new t.HUD.Size(35, 35),
                    v = new t.HUD.PositionFromCenter(-m.halfWidth + r, -m.halfHeight + s - 35),
                    f = new t.HUD.ObjectElement({
                        frame: new t.HUD.Frame(v, m),
                        object: y,
                        modelHeight: g
                    });
                o.addElement(f)
            }, this), this.add(i)
        }, i.prototype = Object.create(t.Act.prototype), i.prototype.constructor = i, i.prototype.$class = "ChapterClearAct", i.prototype.player = null, i.prototype.chapterModel = null, i.prototype.initialize = function() {
            var e = new t.ChapterClearTitleAct(this.chapterModel);
            this.add(e);
            var i = new t.ChapterClearResultAct(this.player, this.chapterModel);
            this.add(i)
        }, i.prototype.setupParagraphNextBoard = function() {
            var e = new t.MessageAct(this.player),
                i = e.messageViewController;
            i.generateCircleBoard("NEXT", {
                waitTime: 0,
                duration: 1e3,
                isFadeIn: !0,
                isFadeOut: !0
            });
            this.add(e)
        }, i.prototype.start = function() {
            setTimeout(function() {
                this.close()
            }.bind(this), 3e3)
        }, i.prototype.willStart = function() {
            this.player.slowDownMove(), this.player.setModeNone(), this.player.fadeOut({
                duration: 1e3,
                toValue: t.Settings.messageBackgroundOpacity
            })
        }, t.ChapterClearAct = i, t.ChapterClearTitleAct = ChapterClearTitleAct, t.ChapterClearResultAct = e
    }(window),
    function(t) {
        "use strict";

        function e(e, i) {
            this.player = e, this.chapterModel = i, t.Act.call(this)
        }
        e.prototype = Object.create(t.Act.prototype), e.prototype.constructor = e, e.prototype.$class = "ChapterTimeupAct", e.prototype.initialize = function() {
            var e = this.setupParagraphTimeupBoard();
            this.add(e);
            var i = new t.ChapterClearResultAct(this.player, this.chapterModel);
            this.add(i)
        }, e.prototype.willStart = function() {
            this.player.fadeOut({
                duration: 1e3,
                toValue: t.Settings.messageBackgroundOpacity
            })
        }, e.prototype.setupParagraphTimeupBoard = function() {
            var e = new t.MessageAct(this.player),
                i = e.messageViewController;
            i.generateCircleBoard("Time\nUp", {
                waitTime: 0,
                duration: 1e3,
                isFadeIn: !0,
                isFadeOut: !0
            });
            return e
        }, e.prototype.setupParagraphNextBoard = function() {
            var e = new t.MessageAct(this.player),
                i = e.messageViewController;
            i.generateCircleBoard("Next", {
                waitTime: 0,
                duration: 1e3,
                isFadeIn: !0,
                isFadeOut: !0
            });
            return e
        }, t.ChapterTimeupAct = e
    }(window),
    function(t) {
        "use strict";

        function e(e, i) {
            this.player = e, this.goalModel = i, this.localization = t.ModelLocator.getInstance().getModel(t.LocalizationModel, t.Model.defaultModelName), t.Act.call(this)
        }
        e.prototype = Object.create(t.Act.prototype), e.prototype.constructor = e, e.prototype.$class = "ChapterGoalAct", e.prototype.goalModel = null, e.prototype.initialize = function() {
            var e = this.makeGoalMessageAct();
            this.add(e);
            var i = new t.ChapterResultAct(this.goalModel);
            this.add(i);
            var o = new t.ChapterResultPinAct(this.goalModel);
            this.add(o)
        }, e.prototype.willStart = function() {
            this.player.fadeOut({
                duration: 1e3,
                toValue: t.Settings.messageBackgroundOpacity
            });
            var e = this.goalModel.get("figureOnCountry").getPosition();
            this.player.autopilot(e, t.Settings.autopilotEndDistance)
        }, e.prototype.makeGoalMessageAct = function() {
            var e = this.goalModel.getCountry(),
                i = new t.MessageAct(this.player),
                o = i.messageViewController.generateParagraph({
                    waitTime: 2e3
                }),
                n = new t.HUD.Size(32, 64),
                r = new t.HUD.PositionFromCenter((-n.halfWidth), -n.halfHeight - 90),
                s = new t.HUD.ImageElement({
                    frame: new t.HUD.Frame(r, n),
                    path: "img/pin.png"
                });
            o.addElement(s);
            var a = this.localization.getText("text_chapter_goal_title"),
                l = 16,
                c = 16,
                s = new t.HUD.TextElementCentered({
                    text: a,
                    color: "white",
                    fontSize: l,
                    fontFamily: t.Settings.font.defaultFontFamily,
                    lineHeight: c,
                    centerX: 0,
                    centerY: -45
                });
            o.addElement(s);
            var a = e.getCityName(),
                l = 32,
                c = 32,
                s = new t.HUD.TextElementCentered({
                    text: a,
                    color: "white",
                    fontSize: l,
                    fontFamily: t.Settings.font.defaultFontFamily,
                    lineHeight: c,
                    centerX: 0,
                    centerY: 10
                });
            o.addElement(s);
            var a = e.getCountryName(),
                l = 14,
                c = 14,
                s = new t.HUD.TextElementCentered({
                    text: a,
                    color: "white",
                    fontSize: l,
                    fontFamily: t.Settings.font.defaultFontFamily,
                    lineHeight: c,
                    centerX: 0,
                    centerY: 45
                });
            o.addElement(s);
            var a = this.localization.getText("text_chapter_goal_message"),
                l = 12,
                c = 12,
                s = new t.HUD.TextElementCentered({
                    text: a,
                    color: "white",
                    fontSize: l,
                    fontFamily: t.Settings.font.defaultFontFamily,
                    lineHeight: c,
                    centerX: 0,
                    centerY: 95
                });
            return o.addElement(s), i
        }, t.ChapterGoalAct = e
    }(window),
    function(t) {
        "use strict";

        function e(e) {
            this.target = e, this.player = t.ApplicationController.player, t.EventDispatcher.call(this), this.initialize()
        }
        e.prototype = Object.create(t.EventDispatcher.prototype), e.prototype.constructor = e, e.prototype.$class = "ClearStar", e.prototype.target = null, e.prototype.object = null, e.prototype.initialize = function() {
            var t = this.player.getHudCanvas();
            t.add(this.target), t.remove(this.target);
            var e = this.target.size.hudWidth,
                i = this.target.size.hudHeight,
                o = new THREE.PlaneGeometry(e, i),
                n = new THREE.MeshBasicMaterial({
                    map: (new THREE.TextureLoader).load("img/img_clear_star.png"),
                    transparent: !0,
                    depthTest: !1
                });
            this.object = new THREE.Mesh(o, n), this.object.name = "ClearStar", this.object.renderOrder = 11100;
            var r = this.target.position.hudX,
                s = this.target.position.hudY,
                a = .01;
            this.object.position.set(r, s, a)
        }, e.prototype.start = function() {
            this.player.getHudCanvas().object.add(this.object);
            var e = this.object;
            return new Promise(function(i, o) {
                new t.Wait(300, i), t.AnimateController.createVectorAnimator(e, {
                    type: "scale",
                    duration: 700,
                    fromValue: new THREE.Vector3(4, 4, 4),
                    toValue: new THREE.Vector3(1, 1, 1),
                    timingFunction: function(e, i, o, n, r) {
                        var r = 1;
                        return t.AnimateController.timingFunction.easeOutBack3v(e, i, o, n, r)
                    }
                })
            })
        }, e.prototype.dispose = function() {
            this.target = null, this.player = null, this.object && (this.object.visible = !1, this.object.parent.remove(this.object), this.object = null), t.EventDispatcher.prototype.dispose.call(this)
        }, t.ClearStar = e
    }(window),
    function(t) {
        "use strict";

        function e(e) {
            this.player = t.ApplicationController.player, this.size = e, t.EventDispatcher.call(this), this.initialize()
        }
        var i = ["attribute float size;", "attribute float opacity;", "varying float vOpacity;", THREE.ShaderChunk.common, "void main() {", "vOpacity = opacity;", THREE.ShaderChunk.begin_vertex, THREE.ShaderChunk.project_vertex, "gl_PointSize = size;", "}"].join("\n"),
            o = ["uniform float time;", "uniform float timeScale;", "uniform sampler2D map;", "varying float vOpacity;", "#define PI 3.1415", "void main() {", "    vec2 p = gl_PointCoord * 2. - 1.;", "    float c = cos(time * timeScale);", "    float s = sin(time * timeScale);", "    float mid = 0.5;", "    float y = c * p.x - s * p.y + mid;", "    float x = s * p.x + c * p.y + mid;", "    vec2 newUV = vec2(x, y);", "    gl_FragColor = texture2D(map, newUV);", "    gl_FragColor.a *= vOpacity;", "}"].join("\n");
        e.prototype = Object.create(t.EventDispatcher.prototype), e.prototype.constructor = e, e.prototype.$class = "ClearParticle", e.prototype.player = null, e.prototype.object = null, e.prototype.fadeAnimator = null, e.prototype.velocities = null, e.prototype.opacities = null, e.prototype.size = null, e.prototype.particleSize = 75, e.prototype.particleCount = 50, e.prototype.speed = 1.8, e.prototype.opacity = 1, e.prototype.time = 0, e.prototype.lifeTime = 4500, e.prototype.fadeOutTime = 1e3, e.prototype.initialize = function() {
            this.velocities = [], this.opacities = [];
            for (var t = (new THREE.TextureLoader).load("textures/halo_particle.png"), e = new THREE.BufferGeometry, n = this.size.hudWidth / 2, r = this.size.hudHeight / 2, s = new Float32Array(3 * this.particleCount), a = 0; a < s.length; a += 3) {
                var l = Math.random(),
                    c = n * (2 * l - 1);
                l = Math.random();
                var h = r * (2 * l - 1),
                    p = 0;
                s[a + 0] = c, s[a + 1] = h, s[a + 2] = p
            }
            e.addAttribute("position", new THREE.BufferAttribute(s, 3));
            for (var u = e.attributes.position.count, a = 0; a < u; a++) {
                var l = Math.random(),
                    c = this.speed * (2 * l - 1);
                l = Math.random();
                var h = this.speed * (2 * l - 1);
                this.velocities.push(new THREE.Vector2(c, h))
            }
            for (var d = new Float32Array(u), a = 0; a < u; a++) {
                var f = Math.random();
                d[a] = f, this.opacities[a] = f
            }
            e.addAttribute("opacity", new THREE.BufferAttribute(d, 1));
            for (var y = new Float32Array(u), a = 0; a < u; a++) {
                var g = this.particleSize / 2 + this.particleSize / 2 * Math.random();
                y[a] = g
            }
            e.addAttribute("size", new THREE.BufferAttribute(y, 1));
            var m = new THREE.ShaderMaterial({
                vertexShader: i,
                fragmentShader: o,
                uniforms: {
                    time: {
                        type: "t",
                        value: 0
                    },
                    timeScale: {
                        type: "t",
                        value: 3
                    },
                    map: {
                        type: "t",
                        value: t
                    }
                },
                transparent: !0
            });
            this.object = new THREE.Points(e, m), this.object.name = "ClearParticle", this.object.position.z = -10
        }, e.prototype.update = function() {
            var t = Time.deltaTime,
                e = this.opacity;
            this.time > this.lifeTime && (e = this.opacity - this.opacity * ((this.time - this.lifeTime) / this.fadeOutTime)), this.time += t, t /= 1e3;
            for (var i = this.object.geometry.attributes.position.array, o = 0; o < i.length; o += 3) {
                var n = this.velocities[o / 3].clone().multiplyScalar(t);
                i[o + 0] += n.x, i[o + 1] += n.y, i[o + 0] > this.size.hudWidth / 2 ? i[o + 0] = 0 : i[o + 0] < -this.size.hudWidth / 2 && (i[o + 0] = 0), i[o + 1] > this.size.hudHeight / 2 ? i[o + 1] = 0 : i[o + 1] < -this.size.hudHeight / 2 && (i[o + 1] = 0)
            }
            for (var r = this.object.geometry.attributes.opacity.array, o = 0; o < this.opacities.length; o++) this.opacities[o] -= .01, this.opacities[o] <= 0 && (this.opacities[o] = 1), r[o] = this.opacities[o] * this.opacity;
            this.object.material.opacity = e, this.object.material.uniforms.time.value += t, this.object.geometry.attributes.opacity.needsUpdate = !0, this.object.geometry.attributes.position.needsUpdate = !0
        }, e.prototype.fadeOut = function() {
            var e = this;
            this.fadeAnimator = t.AnimateController.createAnimator({
                duration: 3e3,
                fromValue: 1,
                toValue: 0,
                callback: function(t) {
                    e.opacity = t
                },
                finish: function() {
                    e.opacity = 0, e = null
                }
            })
        }, e.prototype.dispose = function() {
            this.object && (this.object.parent.remove(this.object), this.object.geometry.dispose(), this.object = null), this.fadeAnimator && (this.fadeAnimator.dispose(), this.fadeAnimator = null), this.velocities = null, this.opacities = null, t.EventDispatcher.prototype.dispose.call(this)
        }, t.ClearParticle = e
    }(window),
    function(t) {
        "use strict";

        function e(e, i) {
            this.player = e, this.chapterModel = i, t.Act.call(this)
        }
        e.prototype = Object.create(t.Act.prototype), e.prototype.constructor = e, e.prototype.$class = "FlyAct", e.prototype.timerModel = null, e.prototype.chapterModel = null, e.prototype.clickHandlerHolder = null, e.prototype.initialize = function() {
            this.player.setModeNone(), this.timerModel = t.ModelLocator.getInstance().getModel(t.TimerModel, t.Model.defaultModelName), this.timerModel.addListener(t.TimerModel.EventType.Timeover, this.timeoverHandler, this)
        }, e.prototype.willStart = function() {
            this.player.fadeIn({
                duration: 1e3
            })
        }, e.prototype.start = function() {
            this.player.setChapterModel(this.chapterModel), this.player.startSeek(), this.player.setModeSeek(), this.player.normalMove(!0), this.player.cockpitView.animateDestination(), this.setEvent()
        }, e.prototype.setEvent = function() {
            this.clickHandlerHolder = this.clickHandler.bind(this), document.addEventListener("click", this.clickHandlerHolder, !1)
        }, e.prototype.clickHandler = function(t) {
            this.player.accMove()
        }, e.prototype.stop = function() {
            this.player.stopSeek()
        }, e.prototype.close = function() {
            this.stop(), this.player.setModeNone(), document.removeEventListener("click", this.clickHandlerHolder, !1), t.Act.prototype.close.call(this)
        }, e.prototype.dispose = function() {
            this.player = null, this.chapterModel = null, this.timerModel && (this.timerModel.removeListener(t.TimerModel.EventType.Timeover, this.timeoverHandler), this.timerModel = null), document.removeEventListener("click", this.clickHandlerHolder, !1), this.clickHandlerHolder = null, t.Act.prototype.dispose.call(this)
        }, e.prototype.timeoverHandler = function(t) {
            console.log("!! timeover !!"), this.stop(), this.close()
        }, t.FlyAct = e
    }(window),
    function(t) {
        "use strict";

        function e() {
            t.EventDispatcher.call(this), this.initialize()
        }

        function i(e, i) {
            this.player = e, this.options = i, t.Transition.call(this)
        }

        function o(e, i) {
            this.player = e, this.options = i, t.Transition.call(this)
        }
        e.EventType = {
            Start: "start",
            End: "end"
        }, e.prototype = Object.create(t.EventDispatcher.prototype), e.prototype.constructor = e, e.prototype.$class = "Transition", e.prototype.initialize = function() {}, e.prototype._start = function() {
            return this.fire(e.EventType.Start), this.start().then(function() {
                this.fire(e.EventType.End)
            }.bind(this))
        }, e.prototype.start = function() {
            return Promise.resolve()
        }, t.Transition = e, i.prototype = Object.create(t.Transition.prototype), i.prototype.constructor = i, i.prototype.$class = "FadeInTransition", i.prototype.player = null, i.prototype.options = null, i.prototype.initialize = function() {}, i.prototype.start = function() {
            return this.player.fadeIn(this.options)
        }, o.prototype = Object.create(t.Transition.prototype), o.prototype.constructor = o, o.prototype.$class = "FadeOutTransition", o.prototype.player = null, o.prototype.options = null, o.prototype.initialize = function() {}, o.prototype.start = function() {
            return this.player.fadeOut(this.options)
        }, t.FadeInTransition = i, t.FadeOutTransition = o
    }(window),
    function(t) {
        "use strict";

        function e() {
            t.EventDispatcher.call(this), this._initialize()
        }
        e.EventType = {
            Finish: "finish",
            DidFinish: "didFinish"
        }, e.prototype = Object.create(t.EventDispatcher.prototype), e.prototype.constructor = e, e.prototype.$class = "Stage", e.prototype.name = void 0, e.prototype.finished = !1, e.prototype.isOpened = !1, e.prototype.isReseting = !1, e.prototype.isOnetime = !1, e.prototype.startTransition = null, e.prototype.endTransition = null, e.prototype.acts = null, e.prototype.currentActIndex = -1, e.prototype._reset = function() {
            this.isReseting = !0, this.isOpened = !1, this.finished = !1, this.currentActIndex = 0, this.removeOnetimeAct(), this.acts.forEach(function(t, e) {
                t.reset()
            }), this.reset(), this.isReseting = !1
        }, e.prototype.removeOnetimeAct = function() {
            this.acts = this.acts.filter(function(t) {
                return t.isOnetime ? (t.dispose(), null) : t
            })
        }, e.prototype.reset = function() {}, e.prototype.open = function() {
            this.finished = !1, this.isOpened = !0, this.currentActIndex = 0, this.startTransition._start().then(function() {
                this.startAct(0)
            }.bind(this))
        }, e.prototype.startAct = function(t) {
            this.currentAct = this.acts[t], this.currentAct._start()
        }, e.prototype.add = function(e) {
            return t.Act.prototype.isPrototypeOf(e) ? (e.removeListener(t.Act.EventType.Close, this.actCloseHandler), e.addListener(t.Act.EventType.Close, this.actCloseHandler, this), e.parent = this, void this.acts.push(e)) : void console.warn("stage must be `Act` instance.");
        }, e.prototype.remove = function(t) {
            if (this.contains(t)) {
                var e = this.acts.indexOf(t);
                e !== -1 && (t.parent = null, this.acts.splice(e, 1))
            }
        }, e.prototype.removeAllActs = function() {
            this.acts.forEach(function(t, e) {
                t.dispose()
            }), this.acts = []
        }, e.prototype.contains = function(t) {
            return this.acts.indexOf(t) !== -1
        }, e.prototype.nextAct = function() {
            if (this.currentActIndex !== -1) return this.acts[this.currentActIndex + 1]
        }, e.prototype.actCloseHandler = function(t) {
            if (!this.isReseting && this.isOpened) {
                var e = this.nextAct();
                if (!e) return void this.finish();
                this.currentActIndex++, this.startAct(this.currentActIndex)
            }
        }, e.prototype._initialize = function() {
            this.startTransition = new t.Transition, this.endTransition = new t.Transition, this.clearActs(), this.finished = !1, this.initialize()
        }, e.prototype.clearActs = function() {
            Utility.isArray(this.acts) && this.acts.forEach(function(t, e) {
                t.dispose()
            }), this.acts = []
        }, e.prototype.initialize = function() {}, e.prototype.willOpen = function() {
            console.log(this.$class + " will open.")
        }, e.prototype.didOpen = function() {
            console.log(this.$class + " did open.")
        }, e.prototype.willClose = function() {
            console.log(this.$class + " will close.")
        }, e.prototype.didClose = function() {
            console.log(this.$class + " did close.")
        }, e.prototype._update = function(t) {
            this.currentAct && this.currentAct._update(t), this.update(t)
        }, e.prototype.update = function(t) {}, e.prototype.dispose = function() {
            this.clearActs(), this.startTransition = null, this.endTransition = null, t.EventDispatcher.prototype.dispose(this)
        }, e.prototype.finish = function() {
            this.finished || (console.log("Fiinish stage " + this.$class), this.finished = !0, this.isOpened = !1, this.endTransition._start().then(function() {
                this.fire(e.EventType.Finish), this._didFinish()
            }.bind(this)))
        }, e.prototype._didFinish = function() {
            this.fire(e.EventType.DidFinish), this.didFinish()
        }, e.prototype.didFinish = function() {
            console.log(this.$class + " has been finished.")
        }, t.Stage = e
    }(window),
    function(t) {
        "use strict";

        function e(e) {
            this.player = e, this.localization = t.ModelLocator.getInstance().getModel(t.LocalizationModel, t.Model.defaultModelName), t.Stage.call(this)
        }

        function i(e) {
            t.MessageAct.call(this, e)
        }

        function o(e) {
            t.MessageAct.call(this, e)
        }
        e.prototype = Object.create(t.Stage.prototype), e.prototype.constructor = e, e.prototype.$class = "OpeningStage", e.prototype.localization = null, e.prototype.initialize = function() {
            console.log("Initialized opening stage."), this.figureManager = t.FigureManager.getInstance(), this.add(new i(this.player)), this.add(new o(this.player))
        }, e.prototype.willOpen = function() {
            this.player.fadeOut({
                duration: 1e3,
                toValue: t.Settings.messageBackgroundOpacity
            }), this.figureManager.putPegmanFigures(), this.figureManager.putTrendsFigures(t.FigureMeshModel.Type.Animals)
        }, i.prototype = Object.create(t.MessageAct.prototype), i.prototype.constructor = i, i.prototype.$class = "OpeningWelcomeMessageAct", i.prototype.initialize = function() {
            MessageAct.prototype.initialize.call(this);
            var e = this.messageViewController;
            this.paragraph = e.generateParagraph({
                waitTime: 3e3,
                duration: 8e3
            });
            var i = new t.HUD.Size(256, 256),
                o = new t.HUD.PositionFromCenter((-i.halfWidth), -i.halfHeight - 50),
                n = new t.HUD.ImageElement({
                    frame: new t.HUD.Frame(o, i),
                    path: "img/ttl_opening.png"
                });
            this.paragraph.addElement(n);
            var r = this.localization.getText("text_opening_welcome"),
                s = 16,
                n = new t.HUD.TextElementCentered({
                    text: r,
                    color: "white",
                    fontSize: s,
                    fontFamily: t.Settings.font.defaultFontFamily,
                    centerX: 0,
                    centerY: 95
                });
            this.paragraph.addElement(n), n.object.position.z = -.1
        }, o.prototype = Object.create(t.MessageAct.prototype), o.prototype.constructor = o, o.prototype.$class = "OpeningFlyAroundMessageAct", o.prototype.initialize = function() {
            MessageAct.prototype.initialize.call(this);
            var e = this.messageViewController;
            this.paragraph = e.generateParagraph({
                waitTime: 0
            });
            var i, o = this.localization.getText("text_opening_fly_around"),
                n = 18,
                r = 32,
                s = new t.HUD.TextElementCentered({
                    text: o,
                    color: "white",
                    fontSize: n,
                    fontFamily: t.Settings.font.defaultFontFamily,
                    lineHeight: r,
                    centerX: 0,
                    centerY: 0,
                    withBracketFrame: !0
                });
            this.paragraph.addElement(s), i = s.size
        }, t.OpeningStage = e, t.OpeningWelcomeMessageAct = i, t.OpeningFlyAroundMessageAct = o
    }(window),
    function(t) {
        "use strict";

        function e() {
            t.Act.call(this)
        }

        function i(e) {
            this.player = e, t.Stage.call(this)
        }
        e.prototype = Object.create(t.Act.prototype), e.prototype.constructor = e, e.prototype.$class = "RestartAct", e.prototype.isOnetime = !0, e.prototype.start = function() {
            t.ApplicationController.player.fadeOut().then(function() {
                t.ApplicationController.instance.applicationRestart()
            })
        }, t.RestartAct = e, i.prototype = Object.create(t.Stage.prototype), i.prototype.constructor = i, i.prototype.$class = "EndingStage", i.prototype.localization = null, i.prototype.initialize = function() {
            console.log("Initialized ending stage."), this.figureManager = t.FigureManager.getInstance(), this.removeAllActs(), this.endTransition = new t.FadeOutTransition(this.player);
            var e = new t.EndingStartAct(this.player);
            this.add(e);
            var i = new t.MessageAct(this.player);
            i.addListener(t.Act.EventType.WillStart, function() {
                this.player.fadeOut({
                    duration: 1e3,
                    toValue: .7
                })
            }, this), this.localization = t.ModelLocator.getInstance().getModel(t.LocalizationModel, t.Model.defaultModelName);
            var o = this.localization.getText("text_ending_01"),
                n = this.localization.getText("text_ending_02"),
                r = this.localization.getText("text_ending_03"),
                s = [o, n, r].join("\n"),
                a = 3;
            i.addParagraph(new MessageParagraph(s, {
                durationTime: 1500 * a
            }), {
                waitTime: 5e3
            });
            var l = this.localization.getText("text_ending_04"),
                c = this.localization.getText("text_ending_05"),
                h = [l, c].join("\n"),
                p = 2;
            i.addParagraph(new MessageParagraph(h, {
                durationTime: 1500 * p
            }));
            var u = this.localization.getText("text_ending_what");
            i.addParagraph(new MessageParagraph(u, {
                durationTime: 3e3
            })), this.add(i);
            var d = new t.EndingAct(this.player);
            d.addListener(t.EndingAct.EventType.OnRetry, function(e) {
                console.log("Restart app."), t.AudioController.instance.setBGMMode(t.AudioController.BGMMode.Normal), this.figureManager.onDisengageFinish();
                var i = new t.RestartAct;
                this.add(i)
            }, this), d.addListener(t.EndingAct.EventType.OnFreeMode, function(e) {
                console.log("Start free mode."), t.AudioController.instance.setBGMMode(t.AudioController.BGMMode.Normal), this.figureManager.onDisengageFinish(), this.player.cancelDisengage();
                var i = new t.FreeModeStage(this.player);
                t.ApplicationController.stageController.add(i), this.finish()
            }, this), this.add(d)
        }, i.prototype.willOpen = function() {
            t.AudioController.instance.setBGMMode(t.AudioController.BGMMode.Ending), this.figureManager.onDisengageStart()
        }, i.prototype.didFinish = function() {
            t.ApplicationController.sceneController.resetPlayerPosition(), t.ApplicationController.sceneController.earthType = t.SceneController.EarthType.Normal, this.player.align(), this.figureManager.putTrendsFigures(t.FigureMeshModel.Type.Animals), t.Stage.prototype.didFinish.call(this)
        }, t.EndingStage = i
    }(window),
    function(t) {
        "use strict";

        function e(e) {
            this.player = e, t.Act.call(this)
        }
        e.prototype = Object.create(t.Act.prototype), e.prototype.constructor = e, e.prototype.$class = "EndingStartAct", e.prototype.start = function() {
            this.player.startDisengage().then(this.close.bind(this)), t.ApplicationController.sceneController.earthType = SceneController.EarthType.Simple
        }, t.EndingStartAct = e
    }(window),
    function(t) {
        "use strict";

        function e(e) {
            this.player = e, t.Act.call(this)
        }
        e.EventType = {
            OnRetry: "onRetry",
            OnFreeMode: "onFreeMode"
        }, e.prototype = Object.create(t.Act.prototype), e.prototype.constructor = e, e.prototype.$class = "EndingAct", e.prototype.retryButton = null, e.prototype.retryClickable = null, e.prototype.retryButtonEffect = null, e.prototype.retryButtonEffectAnimation = null, e.prototype.freeModeButton = null, e.prototype.freeModeClickable = null, e.prototype.freeModeButtonEffect = null, e.prototype.freeModeButtonEffectAnimation = null, e.prototype.title = null, e.prototype.object = null, e.prototype.initialize = function() {
            var e = new THREE.TextureLoader;
            this.object && this.object.parent.remove(this.object), this.object = new THREE.Object3D, this.object.name = "Ending title place holder";
            var i = .09;
            this.object.scale.set(i, i, i), this.player.object.add(this.object), this.title && (this.title.geometry.dispose(), this.title.material.dispose(), this.title = null), this.title = new THREE.Mesh(new THREE.PlaneGeometry(512, 512), new THREE.MeshLambertMaterial({
                transparent: !0,
                map: e.load("img/title_texture.png")
            })), this.title.visible = !1, this.title.name = "Ending title", this.title.position.y = 250, this.object.add(this.title), this.retryButton && (this.retryButton.geometry.dispose(), this.retryButton.material.dispose(), this.retryButton = null), this.retryButton = new THREE.Mesh(new THREE.PlaneGeometry(256, 256), new THREE.MeshLambertMaterial({
                transparent: !0,
                map: e.load("img/btn_retry_" + Localization.lang + ".png")
            })), this.retryButton.visible = !1, this.retryButton.name = "retryButton", this.retryButton.position.x = -100, this.retryButton.position.y = -150, this.retryButtonEffect = this.makeHoverEffect(), this.retryButtonEffect.name = "retryButtonEffect", this.retryButtonEffect.position.x = -100, this.retryButtonEffect.position.y = -120, this.retryButtonEffect.position.z = -3, this.object.add(this.retryButtonEffect), this.retryClickable = t.SightClickSystem.getInstance().createClickable(this.retryButton), this.retryClickable.addListener(t.SightClickSystem.EventType.Hover, this.retryHoverHandler, this), this.retryClickable.addListener(t.SightClickSystem.EventType.Unhover, this.retryUnhoverHandler, this), this.retryClickable.addListener(t.SightClickSystem.EventType.Click, this.retryClickHandler, this), this.object.add(this.retryButton), this.freeModeButton && (this.freeModeButton.geometry.dispose(), this.freeModeButton.material.dispose(), this.freeModeButton = null), this.freeModeButton = new THREE.Mesh(new THREE.PlaneGeometry(256, 256), new THREE.MeshLambertMaterial({
                transparent: !0,
                map: e.load("img/btn_freemode_" + Localization.lang + ".png")
            })), this.freeModeButton.visible = !1, this.freeModeButton.name = "freeModeButton", this.freeModeButton.position.x = 100, this.freeModeButton.position.y = -150, this.freeModeButtonEffect = this.makeHoverEffect(), this.freeModeButtonEffect.name = "freeModeButtonEffect", this.freeModeButtonEffect.position.x = 100, this.freeModeButtonEffect.position.y = -120, this.freeModeButtonEffect.position.z = -3, this.object.add(this.freeModeButtonEffect), this.freeModeClickable = t.SightClickSystem.getInstance().createClickable(this.freeModeButton), this.freeModeClickable.addListener(t.SightClickSystem.EventType.Hover, this.freeModeHoverHandler, this), this.freeModeClickable.addListener(t.SightClickSystem.EventType.Unhover, this.freeModeUnhoverHandler, this), this.freeModeClickable.addListener(t.SightClickSystem.EventType.Click, this.freeModeClickHandler, this), this.object.add(this.freeModeButton)
        }, e.prototype.alignTitle = function() {
            var t = new THREE.Vector3,
                e = new THREE.Vector3,
                i = new THREE.Vector3,
                o = new THREE.Vector3;
            return function() {
                this.player.camera.matrix.extractBasis(t, e, i), o.copy(this.player.camera.position), i.setLength(90), o.sub(i), this.object.position.copy(o), this.object.quaternion.copy(this.player.camera.quaternion)
            }
        }(), e.prototype.start = function() {
            this.title.visible = !0, this.retryButton.visible = !0, this.freeModeButton.visible = !0, this.player.needsCursor = !0, this.alignTitle()
        }, e.prototype.close = function() {
            this.title.visible = !1, this.retryButton.visible = !1, this.freeModeButton.visible = !1, this.player.needsCursor = !1, t.Act.prototype.close.call(this)
        }, e.prototype.dispose = function() {
            this.title && (this.title.parent.remove(this.title), this.title.geometry.dispose(), this.title.material.dispose(), this.title = null), this.retryButton && (this.retryButton.parent.remove(this.retryButton), this.retryButton.geometry.dispose(), this.retryButton = null), this.freeModeButton && (this.freeModeButton.parent.remove(this.freeModeButton), this.freeModeButton.geometry.dispose(), this.freeModeButton = null), this.retryButtonEffectAnimation && (this.retryButtonEffectAnimation.dispose(), this.retryButtonEffectAnimation = null), this.freeModeButtonEffectAnimation && (this.freeModeButtonEffectAnimation.dispose(), this.freeModeButtonEffectAnimation = null), this.retryClickable && (this.retryClickable.removeListener(), t.SightClickSystem.getInstance().remove(this.retryClickable)), this.freeModeClickable && (this.freeModeClickable.removeListener(), t.SightClickSystem.getInstance().remove(this.freeModeClickable)), t.Act.prototype.close.call(this)
        }, e.prototype.makeHoverEffect = function() {
            var t = new THREE.RingGeometry(.1, 70, 32, 0),
                e = new THREE.MeshBasicMaterial({
                    color: 4045030
                }),
                i = new THREE.Mesh(t, e),
                o = 0;
            return i.scale.set(o, o, o), i.visible = !1, i
        }, e.prototype.retryHoverHandler = function(e) {
            this.retryButtonEffectAnimation && this.retryButtonEffectAnimation.dispose();
            var i = this;
            i.retryButtonEffect.visible = !0, this.retryButtonEffectAnimation = t.AnimateController.getInstance().createLinearAnimator({
                duration: SightClickSystem.CLICK_DURATION,
                fromValue: 0,
                toValue: 1,
                callback: function(t) {
                    i.retryButtonEffect.scale.set(t, t, t)
                },
                finish: function() {
                    i.retryButtonEffect.visible = !1, i.retryButtonEffect.scale.set(0, 0, 0), i = null
                }
            })
        }, e.prototype.retryUnhoverHandler = function(t) {
            this.retryButtonEffectAnimation && (this.retryButtonEffectAnimation.cancel(), this.retryButtonEffectAnimation.dispose(), this.retryButtonEffectAnimation = null)
        }, e.prototype.retryClickHandler = function(t) {
            this.fire(e.EventType.OnRetry), this.close()
        }, e.prototype.freeModeHoverHandler = function(e) {
            this.freeModeButtonEffectAnimation && this.freeModeButtonEffectAnimation.dispose();
            var i = this;
            i.freeModeButtonEffect.visible = !0, this.freeModeButtonEffectAnimation = t.AnimateController.getInstance().createLinearAnimator({
                duration: SightClickSystem.CLICK_DURATION,
                fromValue: 0,
                toValue: 1,
                callback: function(t) {
                    i.freeModeButtonEffect.scale.set(t, t, t)
                },
                finish: function() {
                    i.freeModeButtonEffect.visible = !1, i.freeModeButtonEffect.scale.set(0, 0, 0), i = null
                }
            })
        }, e.prototype.freeModeUnhoverHandler = function(t) {
            this.freeModeButtonEffectAnimation && (this.freeModeButtonEffectAnimation.cancel(), this.freeModeButtonEffectAnimation.dispose(), this.freeModeButtonEffectAnimation = null)
        }, e.prototype.freeModeClickHandler = function(t) {
            this.fire(e.EventType.OnFreeMode), this.close()
        }, t.EndingAct = e
    }(window),
    function(t) {
        "use strict";

        function e() {
            this.player = t.ApplicationController.player, t.Act.call(this)
        }
        e.prototype = Object.create(t.Act.prototype), e.prototype.constructor = e, e.prototype.$class = "FreeModeAct", e.prototype.player = null, e.prototype.clickHandlerHolder = null, e.prototype.intervalWait = null, e.prototype.figureManager = null, e.prototype.currentCategoryIndex = null, e.prototype.categoryOrder = null, e.prototype.skipEventHandlerHolder = null, e.prototype.initialize = function() {
            var e = new t.MessageAct(this.player);
            this.setupParagraphBoard(e.messageViewController), this.add(e), this.clickHandlerHolder = this.clickHandler.bind(this), this.figureManager = t.FigureManager.getInstance(), this.categoryOrder = [t.FigureMeshModel.Type.Animals, t.FigureMeshModel.Type.Sports, t.FigureMeshModel.Type.Foods], this.currentCategoryIndex = 0, this.skipEventHandlerHolder = this.skipEventHandler.bind(this), t.ApplicationController.instance.getNotification().addListener(t.ApplicationController.EventType.ChapterSkip, this.skipEventHandlerHolder, this)
        }, e.prototype.start = function() {
            this.player.setModeFreeMode(), this.player.normalMove(), this.startCategoryInterval(), document.addEventListener("click", this.clickHandlerHolder, !1)
        }, e.prototype.close = function() {
            this.player.setModeNone(), this.player.slowDownMove(), document.removeEventListener("click", this.clickHandlerHolder, !1), t.Act.prototype.close.call(this)
        }, e.prototype.dispose = function() {
            this.player = null, document.removeEventListener("click", this.clickHandlerHolder, !1), this.clickHandlerHolder = null, t.ApplicationController.instance.getNotification().removeListener(t.ApplicationController.EventType.ChapterSkip, this.skipEventHandlerHolder, this), this.skipEventHandlerHolder = null, this.stopCategoryInterval(), this.intervalWait = null, t.Act.prototype.dispose.call(this)
        }, e.prototype.clickHandler = function(t) {
            this.player.accMove()
        }, e.prototype.startCategoryInterval = function(e) {
            this.stopCategoryInterval(), this.intervalWait = new t.Wait(t.Settings.freeModeCategoryChangeInterval, function() {
                this.forwardCategory(), this.startCategoryInterval()
            }.bind(this))
        }, e.prototype.stopCategoryInterval = function(t) {
            this.intervalWait && this.intervalWait.cancel()
        }, e.prototype.forwardCategory = function() {
            this.currentCategoryIndex++, this.currentCategoryIndex >= this.categoryOrder.length && (this.currentCategoryIndex = 0);
            var t = this.categoryOrder[this.currentCategoryIndex];
            this.figureManager.putTrendsFigures(t)
        }, e.prototype.nextChapter = function() {
            this.stopCategoryInterval(), this.player.fadeOutIn(function() {
                t.ApplicationController.sceneController.resetPlayerPosition(), this.player.align(), this.forwardCategory(), this.startCategoryInterval()
            }.bind(this))
        }, e.prototype.setupParagraphBoard = function(t) {
            t.generateCircleBoard("Free\nMode", {
                waitTime: 0,
                duration: 1e3,
                isFadeIn: !0,
                isFadeOut: !0
            })
        }, e.prototype.skipEventHandler = function(t) {
            this.nextChapter()
        }, t.FreeModeAct = e
    }(window),
    function(t) {
        "use strict";

        function e(e) {
            this.player = e, t.Stage.call(this)
        }
        e.prototype = Object.create(t.Stage.prototype), e.prototype.constructor = e, e.prototype.$class = "FreeModeStage", e.prototype.isOnetime = !0, e.prototype.menu = null, e.prototype.initialize = function() {
            console.log("Initialized free mode stage."), this.startTransition = new t.FadeInTransition(this.player), this.endTransition = new t.FadeOutTransition(this.player), this.setupMenu();
            var e = new t.FreeModeAct;
            this.add(e)
        }, e.prototype.setupMenu = function() {
            this.menu = new t.ChapterMenu(this.player), this.menu.position.y = 1500, this.menu.rotation.x = Math.PI / 2, this.menu.rotation.z = Math.PI, this.player.object.add(this.menu)
        }, e.prototype.dispose = function() {
            this.menu && (this.menu.dispose(), this.menu = null), t.Stage.prototype.dispose.call(this)
        }, t.FreeModeStage = e
    }(window),
    function(t) {
        "use strict";

        function e(e, i) {
            this.player = e, this.chapterModel = i, t.Stage.call(this)
        }
        e.prototype = Object.create(t.Stage.prototype), e.prototype.constructor = e, e.prototype.$class = "ChapterStage", e.prototype.player = null, e.prototype.isRunning = !1, e.prototype.chapterModel = null, e.prototype.timerModel = null, e.prototype.flyAct = null, e.prototype.figureManager = null, e.prototype.destinationPin = null, e.prototype.chapterSkipHandlerHolder = null, e.prototype.initialize = function() {
            console.log("Initialized chapter stage."), this.startTransition = new t.FadeInTransition(this.player), this.endTransition = new t.FadeOutTransition(this.player), this.chapterSkipHandlerHolder = this.chapterSkipHandler.bind(this), t.ApplicationController.instance.getNotification().addListener(t.ApplicationController.EventType.ChapterSkip, this.chapterSkipHandlerHolder, this), this.figureManager = t.FigureManager.getInstance();
            var e = this.makeChapterStartAct();
            this.add(e)
        }, e.prototype.willOpen = function() {
            t.Stage.prototype.willOpen.call(this), this.player.setStarsCount(0), this.player.slowDownMove();
            var e = this.chapterModel.get("category");
            this.figureManager.putTrendsFigures(e.getType()), this.setupModels(), this.flight()
        }, e.prototype.willClose = function() {
            t.Stage.prototype.willClose.call(this), t.ApplicationController.sceneController.chapterMenuEnabled = !1, this.__btn && (this.__btn.style.display = "none"), this.__clearBtn && (this.__clearBtn.style.display = "none")
        }, e.prototype.skip = function() {
            this.isOpened && (this.landing(), this.acts.forEach(function(t, e) {
                t.close()
            }), this.finish())
        }, e.prototype.makeChapterStartAct = function() {
            var e = new t.ChapterStartAct(this.player, this.chapterModel);
            return e.addListener(t.Act.EventType.Close, function(e) {
                t.ApplicationController.sceneController.chapterMenuEnabled = !0
            }), e
        }, e.prototype.setupModels = function() {
            this.timerModel && this.timerModel.removeListener(t.TimerModel.EventType.Timeover, this.timeoverHandler), this.chapterModel && (this.chapterModel.removeListener(t.ChapterModel.EventType.Success, this.successHandler), this.chapterModel.removeListener(t.ChapterModel.EventType.Goal, this.goalHandler)), this.timerModel = t.ModelLocator.getInstance().getModel(t.TimerModel, t.Model.defaultModelName), this.timerModel.addListener(t.TimerModel.EventType.Timeover, this.timeoverHandler, this), this.timerModel.set("timeLimit", this.chapterModel.get("timeLimit")), this.timerModel.reset("currentTime"), this.chapterModel.addListener(t.ChapterModel.EventType.Success, this.successHandler, this), this.chapterModel.addListener(t.ChapterModel.EventType.Goal, this.goalHandler, this), this.chapterModel.rewind()
        }, e.prototype.flight = function() {
            this.flyAct && (this.flyAct.dispose(), this.flyAct = null), this.flyAct = new t.FlyAct(this.player, this.chapterModel), this.flyAct.one(t.Act.EventType.Start, this.startFlyHandler, this), this.flyAct.one(t.Act.EventType.DidStart, this.didStartFlyHandler, this), this.add(this.flyAct)
        }, e.prototype.landing = function() {
            this.flyAct && (this.flyAct.close(), this.flyAct = null)
        }, e.prototype.timerStart = function() {
            this.isRunning = !0
        }, e.prototype.timerStop = function() {
            this.isRunning = !1
        }, e.prototype.timeoverHandler = function(e) {
            var i = new t.ChapterTimeupAct(this.player, this.chapterModel);
            this.add(i)
        }, e.prototype.startFlyHandler = function(t) {
            this.timerStart()
        }, e.prototype.didStartFlyHandler = function(t) {
            var e = this.chapterModel.currentGoal(),
                i = e.get("figureOnCountry");
            this.figureManager.setTrendsHaloEffect(i), this.setupPin()
        }, e.prototype.setupPin = function() {
            this.removePin();
            var e = this.chapterModel.currentGoal(),
                i = e.get("figureOnCountry"),
                o = i.getPosition();
            o.setLength(t.Settings.pinHeight), this.destinationPin = new t.DestinationPin(this.player, o);
            var n = t.ApplicationController.instance.getScene();
            n.add(this.destinationPin.getObject())
        }, e.prototype.removePin = function() {
            this.destinationPin && (this.destinationPin.visible = !1, this.destinationPin.dispose(), this.destinationPin = null)
        }, e.prototype.goalHandler = function(e) {
            this.timerStop();
            var i = e.goal,
                o = new t.ChapterGoalAct(this.player, i);
            this.add(o), this.landing(), this.chapterModel.hasNext() && this.flight()
        }, e.prototype.successHandler = function(e) {
            var i = new t.ChapterClearAct(this.chapterModel);
            this.add(i), this.landing()
        }, e.prototype.chapterSkipHandler = function(t) {
            this.skip()
        }, e.prototype.update = function() {
            this.isRunning && this.timerModel.updateTime()
        }, e.prototype.reset = function() {
            this.landing(), this.removeAllActs();
            var t = this.makeChapterStartAct();
            this.add(t)
        }, e.prototype.didFinish = function() {
            t.ApplicationController.sceneController.resetPlayerPosition(), t.Stage.prototype.didFinish.call(this)
        }, e.prototype.didClose = function() {
            t.Stage.prototype.didClose.call(this), this.figureManager.hideTrendsHaloEffect(), this.removePin()
        }, t.ChapterStage = e
    }(window),
    function(t) {
        "use strict";

        function e() {
            t.EventDispatcher.call(this), this.initialize()
        }
        e.EventType = {
            Finish: "finish"
        }, e.prototype = Object.create(t.EventDispatcher.prototype), e.prototype.constructor = e, e.prototype.$class = "StageController", e.prototype.isStarted = !1, e.prototype.isFinished = !1, e.prototype.stages = null, e.prototype.currentStage = null, e.prototype.initialize = function() {
            t.Utility.isArray(this.stages) && this.starges.forEach(function(t, e) {
                t.finish()
            }), this.stages = [], this.currentStageIndex = -1, this.currentStage = null
        }, e.prototype.at = function(t) {
            return this.stages[t]
        }, e.prototype.getByName = function(t) {
            if (!t) return null;
            for (var e = 0, i = this.stages.length; e < i; e++) {
                var o = this.stages[e];
                if (o.name === t) return o
            }
            return null
        }, e.prototype.add = function(e) {
            return t.Stage.prototype.isPrototypeOf(e) ? void(this.contains(e) || (e.addListener(t.Stage.EventType.Finish, this.stageFinishHandler, this), this.stages.push(e), this.isFinished && this.start())) : void console.warn("stage must be `Stage` instance.")
        }, e.prototype.remove = function(t) {
            if (this.contains(t)) {
                var e = this.stages.indexOf(t);
                e !== -1 && this.stage.splice(e, 1)
            }
        }, e.prototype.contains = function(t) {
            return this.stages.indexOf(t) !== -1
        }, e.prototype.nextStage = function() {
            return this.currentStageIndex === -1 ? null : this.stages[this.currentStageIndex + 1]
        }, e.prototype.latestStage = function() {
            for (var t = 0, e = this.stages.length; t < e; t++)
                if (!this.stages[t].finished) return this.stages[t];
            return null
        }, e.prototype.start = function() {
            this.isStarted || (this.isStarted = !0, this.isFinished = !1, this.currentStage || this.openStage(this.latestStage()))
        }, e.prototype.reset = function() {
            this.removeOnetimeStage(), this.stages.forEach(function(t, e) {
                t._reset()
            }), this.isStarted = !1, this.currentStage = null
        }, e.prototype.removeOnetimeStage = function() {
            this.stages = this.stages.filter(function(t) {
                return t.isOnetime ? (t.dispose(), null) : t
            })
        }, e.prototype.stop = function() {
            this.isStarted = !1
        }, e.prototype.startByName = function(t) {
            if (t) {
                var e = this.getByName(t);
                this.openStage(e)
            }
        }, e.prototype.openStage = function(t) {
            return t ? (this.currentStage && this.currentStage.willClose(), t.willOpen(), this.currentStage && this.currentStage.didClose(), this.currentStage = t, this.currentStageIndex = this.stages.indexOf(t), t.open(), void t.didOpen()) : void console.warn("Must be taken any stage.")
        }, e.prototype.closeStage = function() {
            this.currentStage && (this.currentStage.willClose(), this.currentStage.didClose(), this.currentStageIndex = -1, this.currentStage = null)
        }, e.prototype.update = function(t) {
            this.isStarted && this.currentStage && this.currentStage._update(t)
        }, e.prototype.stageFinishHandler = function(t) {
            var i = this.nextStage();
            return i ? void this.openStage(i) : (this.closeStage(this.currentStage), this.isFinished = !0, this.isStarted = !1, void this.fire(e.EventType.Finish))
        }, t.StageController = e
    }(window),
    function(t) {
        "use strict";

        function e() {
            t.EventDispatcher.call(this), this.initialize()
        }
        e.EventType = {
            Loaded: "loaded"
        }, e.prototype = Object.create(t.EventDispatcher.prototype), e.prototype.constructor = e, e.prototype.$class = "BootLoader", e.prototype.isLoaded = !1, e.prototype.preImageLoader = null, e.prototype.preModelLoader = null, e.prototype.initialize = function() {
            this.preImageLoader = new t.PreImageLoader, this.preImageLoader.add(["textures/galaxy_px.png", "textures/galaxy_nx.png", "textures/galaxy_py.png", "textures/galaxy_ny.png", "textures/galaxy_pz.png", "textures/galaxy_nz.png", "models/planets/sea.jpg", "textures/rim.png", "img/btn_freemode_ja.png", "img/btn_freemode_en.png", "img/btn_retry_ja.png", "img/btn_retry_en.png", "img/icon_animals.png", "img/icon_sports.png", "img/icon_foods.png", "img/pin.png", "img/img_clear_star.png", "textures/halo_particle.png"]), this.preModelLoader = new t.PreModelLoader, this.preModelLoader.add([t.Settings.models.earthPath, t.Settings.models.questionPath])
        }, e.prototype.start = function() {
            return Promise.all([this.initializeLocalization(), this.preImageLoader.startLoad(), this.preModelLoader.startLoad(), this.initializeCountryModel(), this.loadModels()]).then(this.preloadHandler.bind(this))
        }, e.prototype.initializeCountryModel = function() {
            return new Promise(function(e, i) {
                var o = new THREE.XHRLoader;
                o.load(t.Settings.json.areasPath, function(i) {
                    var o = JSON.parse(i),
                        n = t.ModelLocator.getInstance();
                    o.areas.forEach(function(e) {
                        var i = n.getModel(t.CountryModel, e.areaCode);
                        i.inflate(e)
                    }), e()
                })
            })
        }, e.prototype.initializeLocalization = function() {
            var e = t.ModelLocator.getInstance(),
                i = e.getModel(t.LocalizationModel, t.Model.defaultModelName);
            return i.loadedPromise
        }, e.prototype.loadModels = function() {
            var e = t.ModelLocator.getInstance(),
                i = t.FigureManager.getInstance(),
                o = [];
            for (var n in t.CategoryModel.Type) {
                var r = t.CategoryModel.Type[n],
                    s = e.getModel(t.CategoryModel, r);
                o.push(s)
            }
            var a = [];
            return o.forEach(function(t) {
                var e = i.getFigureOnCountries(t.getType()).then(function(e) {
                    t.set("figureOnCountries", e, !0)
                });
                a.push(e)
            }, this), Promise.all(a)
        }, e.prototype.preloadHandler = function() {
            console.log("Done preload."), this.isLoaded = !0, this.fire(e.EventType.Loaded)
        }, t.BootLoader = e
    }(window),
    function(t) {
        "use strict";

        function e(t) {
            this.model = t, this.initialize()
        }
        e.prototype = {
            constructor: e,
            $class: "LoadingView",
            model: null,
            element: null,
            initialize: function() {
                var e = document.querySelector(".loading_progress span");
                this.model.addListener(t.PreloadModel.EventType.Progress, function(t) {
                    e.innerHTML = Math.round(100 * t.progress) + "%"
                }), this.model.addListener(t.PreloadModel.EventType.Loaded, this.loadedHandler, this), this.element = document.querySelector(".loading")
            },
            loadedHandler: function(t) {
                this.element.classList.add("loaded")
            },
            hideView: function() {
                var e = this;
                return new Promise(function(i, o) {
                    t.AnimateController.createAnimator({
                        duration: 2e3,
                        fromValue: 1,
                        toValue: 0,
                        callback: function(t) {
                            e.element.style.opacity = t
                        },
                        finish: function() {
                            e.element.parentNode.removeChild(e.element), i()
                        }
                    })
                })
            }
        }, t.LoadingView = e
    }(window),
    function(t) {
        "use strict";

        function e() {
            this.animators = []
        }

        function i(e) {
            t.EventDispatcher.call(this), this.duration = e.duration, this.fromValue = e.fromValue, this.toValue = e.toValue, this.finish = e.finish || this.finish, this.time = 0, this.stopped = !1
        }

        function o(t) {
            i.call(this, t), this.callback = t.callback
        }

        function n(t) {
            i.call(this, t), this.callback = t.callback
        }

        function r(t) {
            i.call(this, t), this.callback = t.callback
        }

        function s(t) {
            i.call(this, t), this.callback = t.callback
        }

        function a(t, e) {
            i.call(this, e), this.object = t, this.type = e.type, this.timingFunction = e.timingFunction || i.easingFunction3v
        }

        function l(t, e) {
            i.call(this, e), this.object = t
        }

        function c(t, e) {
            l.call(this, t, e)
        }
        var h = {
            swing: function(t, e, i, o) {
                var n = t / e,
                    r = .5 * (1 - Math.cos(n * Math.PI));
                return i * (1 - r) + o * r
            },
            swing3v: function(t, e, i, o) {
                var n = t / e,
                    r = .5 * (1 - Math.cos(n * Math.PI)),
                    s = i.x * (1 - r) + o.x * r,
                    a = i.y * (1 - r) + o.y * r,
                    l = i.z * (1 - r) + o.z * r;
                return {
                    x: s,
                    y: a,
                    z: l
                }
            },
            quarticEaseOut: function(t, e, i, o) {
                t /= e, t -= 1;
                var n = o - i;
                return n * (t * t * t + 1) + i
            },
            quarticEaseOut3v: function(t, e, i, o) {
                t /= e, t -= 1;
                var n = {
                        x: o.x - i.x,
                        y: o.y - i.y,
                        z: o.z - i.z
                    },
                    r = t * t * t + 1,
                    s = n.x * r + i.x,
                    a = n.y * r + i.y,
                    l = n.z * r + i.z;
                return {
                    x: s,
                    y: a,
                    z: l
                }
            },
            easeInBack3v: function(t, e, i, o, n) {
                void 0 === n && (n = 1.70158);
                var r = t / e,
                    s = {
                        x: o.x - i.x,
                        y: o.y - i.y,
                        z: o.z - i.z
                    },
                    a = r * r * ((n + 1) * r - n),
                    l = s.x * a + i.x,
                    c = s.y * a + i.y,
                    h = s.z * a + i.z;
                return {
                    x: l,
                    y: c,
                    z: h
                }
            },
            easeOutBack3v: function(t, e, i, o, n) {
                void 0 === n && (n = 1.70158);
                var r = t / e,
                    s = {
                        x: o.x - i.x,
                        y: o.y - i.y,
                        z: o.z - i.z
                    },
                    a = r - 1,
                    l = a * a * ((n + 1) * a + n) + 1,
                    c = s.x * l + i.x,
                    h = s.y * l + i.y,
                    p = s.z * l + i.z;
                return {
                    x: c,
                    y: h,
                    z: p
                }
            },
            easeInOutBack3v: function(t, e, i, o, n) {
                void 0 === n && (n = 1.70158);
                var r = t / e,
                    s = {
                        x: o.x - i.x,
                        y: o.y - i.y,
                        z: o.z - i.z
                    },
                    a = 2 * r;
                if (a < 1) {
                    var l = a * a * (((n *= 1.525) + 1) * a - n),
                        c = s.x / 2 * l + i.x,
                        h = s.y / 2 * l + i.y,
                        p = s.z / 2 * l + i.z;
                    return {
                        x: c,
                        y: h,
                        z: p
                    }
                }
                var l = (a -= 2) * a * (((n *= 1.525) + 1) * a + n) + 2,
                    c = s.x / 2 * l + i.x,
                    h = s.y / 2 * l + i.y,
                    p = s.z / 2 * l + i.z;
                return {
                    x: c,
                    y: h,
                    z: p
                }
            },
            easeInQuad: function(t, e, i, o) {
                t /= e;
                var n = o - i;
                return n * (t * t) + i
            },
            easeOutQuad: function(t, e, i, o) {
                t /= e;
                var n = o - i;
                return -n * (t * (t - 2)) + i
            },
            easeInCubic: function(t, e, i, o) {
                t /= e;
                var n = o - i;
                return n * (t * t * t) + i
            },
            easeOutCubic: function(t, e, i, o) {
                t = t / e - 1;
                var n = o - i;
                return n * (t * t * t + 1) + i
            },
            easeInBack: function(t, e, i, o, n) {
                void 0 === n && (n = 1.70158);
                var r = t / e,
                    s = o - i;
                return s * r * r * ((n + 1) * r - n) + i
            },
            easeOutBack: function(t, e, i, o, n) {
                void 0 === n && (n = 1.70158);
                var r = t / e,
                    s = o - i,
                    a = r - 1;
                return s * (a * a * ((n + 1) * a + n) + 1) + i
            },
            easeInOutBack: function(t, e, i, o, n) {
                void 0 === n && (n = 1.70158);
                var r = t / e,
                    s = o - i,
                    a = 2 * r;
                return a < 1 ? s / 2 * (a * a * (((n *= 1.525) + 1) * a - n)) + i : s / 2 * ((a -= 2) * a * (((n *= 1.525) + 1) * a + n) + 2) + i
            },
            linear: function(t, e, i, o) {
                return i + (o - i) * (t / e)
            },
            increaseRepeatedly: function(t, e) {
                return t % e / e
            }
        };
        e.prototype = {
            constructor: e,
            $class: "AnimateController",
            animators: null,
            createAnimator: function(t) {
                var e = new o(t);
                return this.add(e), e
            },
            createLinearAnimator: function(t) {
                var e = new n(t);
                return this.add(e), e
            },
            createEaseInAnimator: function(t) {
                var e = new r(t);
                return this.add(e), e
            },
            createEaseOutAnimator: function(t) {
                var e = new s(t);
                return this.add(e), e
            },
            createVectorAnimator: function(t, e) {
                var i = new a(t, e);
                return this.add(i), i
            },
            createRotationAnimator: function(t, e) {
                var i = new c(t, e);
                return this.add(i), i
            },
            createCyclicAnimator: function(t, e) {
                var i = new l(t, e);
                return this.add(i), i
            },
            reset: function() {
                this.animators.forEach(function(t, e) {
                    t.dispose()
                }), this.animators = []
            },
            update: function() {
                0 !== this.animators.length && this.animators.forEach(function(t, e) {
                    t._update()
                })
            },
            add: function(t) {
                ~this.animators.indexOf(t) || (t.addListener(o.EventType.Finish, function(e) {
                    this.remove(t), t.dispose(), t = null
                }, this), this.animators.push(t))
            },
            remove: function(t) {
                var e = this.animators.indexOf(t);
                e !== -1 && (this.animators.splice(e, 1), t.removeListener())
            }
        };
        var p = null;
        e.getInstance = function() {
            return p || (p = new e), p
        }, Object.defineProperty(e, "instance", {
            get: function() {
                return e.getInstance()
            }
        }), e.createAnimator = function() {
            return this.instance.createAnimator.apply(this.instance, arguments)
        }, e.createLinearAnimator = function() {
            return this.instance.createLinearAnimator.apply(this.instance, arguments)
        }, e.createVectorAnimator = function() {
            return this.instance.createVectorAnimator.apply(this.instance, arguments)
        }, e.createRotationAnimator = function() {
            return this.instance.createRotationAnimator.apply(this.instance, arguments);
        }, e.createCyclicAnimator = function() {
            return this.instance.createCyclicAnimator.apply(this.instance, arguments)
        }, e.createEaseInAnimator = function() {
            return this.instance.createEaseInAnimator.apply(this.instance, arguments)
        }, e.createEaseOutAnimator = function() {
            return this.instance.createEaseOutAnimator.apply(this.instance, arguments)
        }, e.timingFunction = h, i.easingFunction = h.quarticEaseOut, i.easeInFunction = h.easeInCubic, i.easeOutFunction = h.easeOutCubic, i.easingFunction3v = h.quarticEaseOut3v, i.linearFunction = h.linear, i.prototype = Object.create(t.EventDispatcher.prototype), i.prototype.constructor = i, i.prototype.$class = "AnimatorBase", i.prototype.stopped = !1, i.prototype.time = 0, i.prototype.duration = 0, i.prototype.fromValue = null, i.prototype.toValue = null, i.prototype._update = function() {
            this.stopped || this.update()
        }, i.prototype.update = function() {
            if (this.time += Time.deltaTime, this.time >= this.duration) return this.callback(this.toValue), this.finish(), void this.fire(o.EventType.Finish);
            var t = this.calcValue();
            this.callback(t)
        }, i.prototype.calcValue = function() {}, i.prototype.start = function() {
            this.stopped = !1
        }, i.prototype.stop = function() {
            this.stopped = !0
        }, i.prototype.cancel = function() {
            this.stopped || (this.stopped = !0, this.finish(!0), this.fire(o.EventType.Finish))
        }, i.prototype.finish = function(t) {}, i.prototype.dispose = function() {
            this.stop(), this.fromValue = null, this.toValue = null
        }, o.EventType = {
            Finish: "finish"
        }, o.prototype = Object.create(i.prototype), o.prototype.constructor = o, o.prototype.$class = "Animator", o.prototype.calcValue = function() {
            var t = i.easingFunction(this.time, this.duration, this.fromValue, this.toValue);
            return t
        }, n.prototype = Object.create(i.prototype), n.prototype.constructor = n, n.prototype.$class = "LinearAnimator", n.prototype.calcValue = function() {
            var t = i.linearFunction(this.time, this.duration, this.fromValue, this.toValue);
            return t
        }, r.prototype = Object.create(i.prototype), r.prototype.constructor = r, r.prototype.$class = "EaseInAnimator", r.prototype.calcValue = function() {
            var t = i.easeInFunction(this.time, this.duration, this.fromValue, this.toValue);
            return t
        }, s.prototype = Object.create(i.prototype), s.prototype.constructor = s, s.prototype.$class = "EaseOutAnimator", s.prototype.calcValue = function() {
            var t = i.easeOutFunction(this.time, this.duration, this.fromValue, this.toValue);
            return t
        }, a.prototype = Object.create(i.prototype), a.prototype.constructor = a, a.prototype.$class = "VectorAnimator", a.prototype.update = function() {
            if (this.time += Time.deltaTime, this.time >= this.duration) return this.object[this.type].copy(this.toValue), this.finish(), void this.fire(o.EventType.Finish);
            var t = this.timingFunction(this.time, this.duration, this.fromValue, this.toValue);
            this.object[this.type].set(t.x, t.y, t.z)
        }, l.prototype = Object.create(i.prototype), l.prototype.constructor = l, l.prototype.$class = "CyclicAnimator", l.prototype.callback = null, l.prototype.update = function() {
            this.time += Time.deltaTime;
            var e = this.time % this.duration / this.duration;
            t.Utility.isFunction(this.callback) && this.callback(this.object, e)
        }, c.prototype = Object.create(l.prototype), c.prototype.constructor = c, c.prototype.$class = "RotationAnimator", c.prototype.callback = function(t, e) {
            t.rotation.y = e * Math.PI * 2
        }, t.AnimateController = e
    }(window),
    function(t) {
        "use strict";

        function e() {
            console.log("Create the AudioController."), this.initialize()
        }
        e.BGMMode = {
            None: "none",
            Normal: "normal",
            Ending: "ending"
        }, e.prototype = {
            constructor: e,
            $class: "AudioController",
            currentMode: null,
            soundOn: null,
            bgms: null,
            loaded: null,
            initialize: function() {
                console.log("Initialize AudioController."), this.soundOn = !0, this.currentMode = e.BGMMode.None, this.bgms = {}, this.loaded = !1, this.setupBGM()
            },
            setupBGM: function() {
                var i = new Audio(t.Settings.audio.bgmSrc),
                    o = new Audio(t.Settings.audio.bgmEDSrc);
                i.loop = !0, o.loop = !1, this.bgms[e.BGMMode.Normal] = i, this.bgms[e.BGMMode.Ending] = o, document.addEventListener("click", function(t) {
                    this.loaded || (i.load(), o.load(), this.loaded = !0, this.setupButton(), this.setBGMMode(e.BGMMode.Normal))
                }.bind(this), !1), document.addEventListener("visibilitychange", function() {
                    this.loaded && (document.hidden ? this.pauseBGM() : this.playBGM())
                }.bind(this))
            },
            setBGMMode: function(e) {
                this.currentMode !== e && (this.pauseBGM(), this.currentMode = e, this.loaded && t.Utility.isArray(this.bgms) && this.bgms.forEach(function(t) {
                    t.currentTime = 0
                }), new t.Wait(10, function() {
                    this.playBGM()
                }.bind(this)))
            },
            getCurrentBGM: function() {
                return this.currentMode === e.BGMMode.None ? null : this.bgms[this.currentMode]
            },
            playBGM: function() {
                if (this.soundOn) {
                    var t = this.getCurrentBGM();
                    t && t.play()
                }
            },
            pauseBGM: function() {
                var t = this.getCurrentBGM();
                t && t.pause()
            },
            rewindBGM: function() {
                var t = this.getCurrentBGM();
                t && (t.currentTime = 0)
            },
            reset: function() {
                this.rewindBGM()
            },
            setupButton: function() {
                var e = this,
                    i = location.search.slice(1),
                    o = "vr-mode" === i;
                if (!o) {
                    var n = document.createElement("div");
                    n.classList.add("btn-sound"), n.addEventListener("click", function(t) {
                        n.classList.toggle("btn-sound-off");
                        var i = n.classList.contains("btn-sound-off");
                        e.soundOn = !i, i ? e.pauseBGM() : e.playBGM()
                    }, !1), t.ApplicationController.sceneController.container.appendChild(n)
                }
            }
        };
        var i = null;
        e.getInstance = function() {
            return i || (i = new e), i
        }, Object.defineProperty(e, "instance", {
            get: function() {
                return e.getInstance()
            }
        }), t.AudioController = e
    }(window),
    function(t) {
        "use strict";

        function e() {
            console.log("Create the ApplicationController."), this.initialize()
        }
        e.EventType = {
            ChapterSkip: "chapterSkip"
        }, e.prototype = {
            constructor: e,
            $class: "ApplicationController",
            initialized: !1,
            notification: null,
            animateController: null,
            sceneController: null,
            stageController: null,
            figureManager: null,
            haloEffectController: null,
            waitManager: null,
            audioController: null,
            sightClickSystem: null,
            sightClicker: null,
            bootloader: null,
            initialize: function() {
                console.log("Initialize ApplicationController."), this.setupState(), this.setupControllers(), this.setupNotification(), this.setupDebugTools()
            },
            setupNotification: function() {
                this.notification = new t.EventDispatcher
            },
            setupState: function() {
                console.log("Setting up states for three.js"), THREE.Cache.enabled = !0
            },
            setupControllers: function() {
                console.log("Setting up all controllers."), this.animateController = t.AnimateController.getInstance(), this.stageController = new t.StageController, this.waitManager = t.WaitManager.getInstance(), this.audioController = t.AudioController.getInstance(), this.sceneController = new t.SceneController, this.haloEffectController = new t.HaloEffectController, this.figureManager = t.FigureManager.getInstance(), this.figureManager.setSceneController(this.sceneController), this.figureManager.setHaloEffectController(this.haloEffectController), this.sightClickSystem = t.SightClickSystem.getInstance(), this.sightClicker = this.sightClickSystem.createClicker(this.getPlayer())
            },
            setupDebugTools: function() {
                if ("undefined" != typeof Stats && t.Utility.isFunction(Stats)) {
                    var e = new Stats;
                    e.showPanel(0), this.sceneController.container.appendChild(e.dom), this._fpsStats = e
                }
            },
            started: function() {
                function t() {
                    e.loadingViewer.element.removeEventListener("click", t, !1), e.loadingViewer.hideView().then(function() {
                        e.stageController.start(), e = null
                    }), e.loadingViewer = null
                }
                console.log("Application started."), this.initialized = !0, this.sceneController.setupFigures(), this.figureManager.putLandmarkFigures(), this.setupStages();
                var e = this;
                this.loadingViewer.element.addEventListener("click", t, !1), this.startRunLoop()
            },
            setupStages: function() {
                var e = t.ModelLocator.getInstance(),
                    i = new t.OpeningStage(this.getPlayer());
                this.stageController.add(i);
                var o = e.getModel(t.CategoryModel, t.CategoryModel.Type.Animals),
                    n = e.getModel(t.ChapterModel);
                n.set("category", o, !0), n.set("no", 1, !0);
                var r = ["FR", "BR-RJ", "JP"],
                    s = o.extractGoalsWithCountry(r);
                s.forEach(function(t) {
                    n.addGoal(t)
                }, this);
                var a = new t.ChapterStage(this.getPlayer(), n);
                a.startTransition = new t.Transition, this.stageController.add(a);
                var l = e.getModel(t.CategoryModel, t.CategoryModel.Type.Sports),
                    c = e.getModel(t.ChapterModel);
                c.set("category", l, !0), c.set("no", 2, !0);
                var r = ["US-NY", "DE", "CN-91"],
                    s = l.extractGoalsWithCountry(r);
                s.forEach(function(t) {
                    c.addGoal(t)
                }, this);
                var h = new t.ChapterStage(this.getPlayer(), c);
                this.stageController.add(h);
                var p = e.getModel(t.CategoryModel, t.CategoryModel.Type.Foods),
                    u = e.getModel(t.ChapterModel);
                u.set("category", p, !0), u.set("no", 3, !0);
                var r = ["SE", "AU", "IL"],
                    s = p.extractGoalsWithCountry(r);
                s.forEach(function(t) {
                    u.addGoal(t)
                }, this);
                var d = new t.ChapterStage(this.getPlayer(), u);
                this.stageController.add(d);
                var f = new t.EndingStage(this.getPlayer());
                return this.stageController.add(f), Promise.resolve()
            },
            initDebug: function() {
                if (this._enableDebugCamera = !1, !this.debugCube) {
                    var t = new THREE.Geometry;
                    t.vertices.push(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, (-400)));
                    var e = new THREE.LineBasicMaterial({
                            color: 255
                        }),
                        i = new THREE.Line(t, e);
                    this.debugCube = new THREE.Mesh(new THREE.BoxGeometry(300, 300, 300), new THREE.MeshBasicMaterial({
                        color: 15597568
                    })), this.debugCube.add(i), this.sceneController.camera.add(this.debugCube)
                }
            },
            enableDebugCamera: function(t) {
                this.sceneController.enableDebugCamera = t, this.sceneController.resize()
            },
            getPlayer: function() {
                return this.sceneController.player
            },
            getNotification: function() {
                return this.notification
            },
            getScene: function() {
                return this.sceneController.scene
            },
            applicationStart: function() {
                if (!this.initialized) {
                    document.addEventListener("orientationchange", this.orientationHandler.bind(this), !1), window.addEventListener("resize", this.orientationHandler.bind(this), !1), this.bootloader = new t.BootLoader, this.bootloader.start().then(this.started.bind(this));
                    var e = t.ModelLocator.getInstance().getModel(t.PreloadModel, t.Model.defaultModelName);
                    this.loadingViewer = new t.LoadingView(e)
                }
            },
            applicationRestart: function() {
                return Promise.all([this.animateController.reset(), this.stageController.reset(), this.waitManager.reset(), this.audioController.reset(), this.sceneController.reset(), this.sightClickSystem.reset(), this.figureManager.reset(), this.getPlayer().fadeOut()]).then(function() {
                    return Promise.all([this.getPlayer().fadeIn(), this.stageController.start()])
                }.bind(this))
            },
            startRunLoop: function() {
                var e = this.runLoop.bind(this);
                t.Time.start();
                var i = this;
                ! function o() {
                    i._fpsStats && i._fpsStats.begin(), t.Time.update(), e(), i._fpsStats && i._fpsStats.end(), requestAnimationFrame(o)
                }()
            },
            runLoop: function() {
                this.animateController.update(), this.sceneController.update(), this.haloEffectController.update(), this.stageController.update(), this.waitManager.update(), this.sightClickSystem.search(this.sightClicker)
            },
            pause: function() {
                Time.timeScale = 0
            },
            resume: function() {
                Time.timeScale = 1
            },
            showAlert: function() {
                var t = document.querySelector(".rotate_alert");
                t.style.display = "block";
                var e = document.querySelector(".container main");
                e.style.display = "none", this.pause()
            },
            hideAlert: function() {
                var t = document.querySelector(".rotate_alert");
                t.style.display = "none";
                var e = document.querySelector(".container main");
                e.style.display = "block", this.resume()
            },
            orientationHandler: function() {
                var e = void 0 !== window.orientation && t.DetectOrientation.isPortrait;
                e ? this.showAlert() : this.hideAlert()
            }
        }, e.localizeMessages = function() {
            var t = document.querySelector(".tap_to_play");
            t.innerHTML = "Tap to Play";
            var e = document.querySelector(".loading_explain img");
            e.src = "img/img_googlecardboard_en.png", e.alt = "Put your smartphone into Cardboard";
            var i = document.querySelector(".rotate_alert img");
            i.src = "img/img_rotate_alert_en.png", i.srcset = "img/img_rotate_alert_en@2x.png 2x, img/img_rotate_alert_en@3x.png 3x", i.alt = "Please rotate your phone"
        }, e.orientationHandlerForStart = function() {
            t.DetectOrientation.isLandscape && location.reload()
        }, e.analyze = function() {
            this.suppressLog(), "en" === t.Localization.lang && this.localizeMessages();
            var i = location.search.slice(1),
                o = "vr-mode" === i;
            if (t.HUD.isVR = o, o) {
                var n = document.querySelector(".loading");
                n.classList.add("vrmode")
            }
            var r = void 0 !== window.orientation && t.DetectOrientation.isPortrait;
            r ? (this.instance.showAlert(), document.addEventListener("orientationchange", e.orientationHandlerForStart, !1), window.addEventListener("resize", e.orientationHandlerForStart, !1)) : this.instance.applicationStart()
        }, e.suppressLog = function() {
            var e = t.Utility.getQuery();
            "debug" in e || t.DEBUG || (window.console.log = function() {})
        };
        var i = null;
        e.getInstance = function() {
            return i || (i = new e), i
        }, Object.defineProperty(e, "instance", {
            get: function() {
                return e.getInstance()
            }
        }), Object.defineProperty(e, "player", {
            get: function() {
                return e.getInstance().getPlayer()
            }
        }), Object.defineProperty(e, "sceneController", {
            get: function() {
                return e.getInstance().sceneController
            }
        }), Object.defineProperty(e, "stageController", {
            get: function() {
                return e.getInstance().stageController
            }
        }), t.ApplicationController = e
    }(window),
    function(t) {
        "use strict";

        function e(e) {
            this.interval = e, t.Act.call(this)
        }

        function i(e) {
            this.interval = e, t.Stage.call(this)
        }
        e.prototype = Object.create(t.Act.prototype), e.prototype.constructor = e, e.prototype.$class = "DebugAct", e.prototype.start = function() {
            this.wait = new t.Wait(this.interval), this.wait.addListener(t.Wait.EventType.End, function() {
                this.close()
            }, this)
        }, i.prototype = Object.create(t.Stage.prototype), i.prototype.constructor = i, i.prototype.$class = "DebugStage", i.prototype.initialize = function() {
            console.log("This is debug stage, initialized");
            var t = new e(this.interval);
            this.add(t)
        }, i.prototype.willOpen = function() {
            console.log("This is debug stage, will open")
        }, i.prototype.didOpen = function() {
            console.log("This is debug stage, did open")
        }, i.prototype.willClose = function() {
            console.log("This is debug stage, will close")
        }, i.prototype.didClose = function() {
            console.log("This is debug stage, did close")
        }, i.prototype.update = function() {}, t.DebugStage = i
    }(window);