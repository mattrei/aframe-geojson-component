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
        this.object.add(this.camera), this.setupCockpitView(), this.setupControls(), this.setModeNone(), this.setupCursor(), 
        this.origin = new THREE.Vector3(0, 0, 0), 
        this.position = new THREE.Vector3(0, 1, 0), 
        this.forward = new THREE.Vector3(0, 0, 1), 
        this.previousForward = new THREE.Vector3(0, 0, 1), 
        this.sceneChanger = new t.SceneChanger(this), this.initializedPose = !1
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

            e = this.position.clone().sub(this.origin).normalize(), // NORMALE - Y-VEKTOR

            i = e.clone().cross(t).normalize(); // NORMALE MIT VORWÄRTS CROSS = X VEKTOR

        this.previousForward = t;


        var o = new THREE.Matrix4,
            n = o.elements;
        n[0] = i.x, n[1] = i.y, n[2] = i.z, n[3] = 0,   //STEIGUNG  - X VEKTOR
        n[4] = e.x, n[5] = e.y, n[6] = e.z, n[7] = 0,   // NORMALE  . Y VEKTOR
        n[8] = t.x, n[9] = t.y, n[10] = t.z, n[11] = 0,  // VORWÄRTS  - Z VEKTOR
        n[12] = this.position.x, n[13] = this.position.y, n[14] = this.position.z, n[15] = 1,   // AKTUELLE POSITON

        this.object.matrixAutoUpdate = !1, this.object.matrix = o, this.object.updateMatrixWorld()


    }, e.prototype.getUp = function() {
        var t = new THREE.Vector3,
            e = new THREE.Vector3,
            i = new THREE.Vector3;
        return function() {
            // return the y vector 
            return this.camera.matrixWorld.extractBasis(t, e, i), e
        }
    }(), e.prototype.getForward = function() {

        // EXTRAHIERT DEN Z VEKTOR FÜR RICHTUNG


        var t = new THREE.Vector3,
            e = new THREE.Vector3,
            i = new THREE.Vector3;
        return function() {
            // returns the z vector of the basis
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

        var e = new THREE.Vector3(0, 0, 0), // ORIGIN
            i = new THREE.Vector3;

        return function() {
            var o = t.Settings.player.disengageSpeed * (Time.deltaTime / 1e3);

            i.subVectors(this.position, e).setLength(o),    

            this.position.add(i)    // ?
        }
    }(), e.prototype.move = function() {
        this.initializedPose || (this.initPose(), this.initializedPose = !0);
        var t = this.speed * (Time.deltaTime / 1e3),    // SPEED


            i = this.getForward().setLength(t); //LÄNGE SETZEN FÜR VORWÄRTSBEWEGUNG IN Z RICHTUNG




        if (this.position.sub(i), !this.isDisengage) {  // ABSTAND MESSEN ZWISCHEN AKTUELLER POSTION UND VORWÄRTSBEWEGUNG
            var o = this.position.length();

            // HÖHE ÜBER DEM BODEN SETZEN!
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
        var r = this.position.clone().sub(this.origin).normalize(), // ENTFERNUNG VON URSPRUNG (NORMALE)


            s = r.clone().cross(this.previousForward).normalize(),  // ROTATION VON VORIGEM MALE


            a = s.clone().cross(r).normalize(); // BERECHNE VORIGEN VEKTOR
        this.previousForward = a;
        var l = new THREE.Matrix4,
            c = l.elements;
        c[0] = s.x, c[1] = s.y, c[2] = s.z, c[3] = 0, 
        c[4] = r.x, c[5] = r.y, c[6] = r.z, c[7] = 0, 
        c[8] = a.x, c[9] = a.y, c[10] = a.z, c[11] = 0, 
        c[12] = this.position.x, c[13] = this.position.y, c[14] = this.position.z, c[15] = 1, 
        this.object.matrixAutoUpdate = !1, 
        this.object.matrix = l, 
        this.object.updateMatrixWorld()


    }, e.prototype.getLatLonAzimuth = function() {

        var e = this.position.clone(),

            i = e.clone().sub(this.getForward()),           // EXTRAHIERT DEN ANGESTREBTEN Z-VEKTOR!

            o = t.Utility.latLonFromXYZ(e.x, e.y, e.z),     // AKTUELLE POSITON
            n = t.Utility.latLonFromXYZ(i.x, i.y, i.z),     // VORWÄRTSBEWEGUNG


            // DELTA "VEKTOR" ROTATION BERECHNEN
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