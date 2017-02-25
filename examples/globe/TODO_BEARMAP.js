                vertexShader: `#define GLSLIFY 1\nuniform sampler2D mapTexture;\nuniform sampler2D rippleTexture;\nuniform vec3 globalPosition;\nuniform vec3 sectionPosition;\n
                uniform vec3 globalScale;\nuniform float screenPixelHeight;\nuniform float spriteScale;\nuniform float spriteSpacing;\nuniform float fogFar;\nuniform float fogNear;\n
                uniform float fogDistanceScale;\n\nvarying float uvOffsetX;\nvarying float fogFactor;\n\n
                void main() {\n\n  vec2 worldSpaceLocalPos = position.xy * globalScale.xz;\n  

                	vec2 worldSpaceGlobalPos = worldSpaceLocalPos + sectionPosition.xz;\n  
                	vec2 mapCoord = worldSpaceGlobalPos / spriteSpacing;\n  vec4 rippleTexel = texture2D(rippleTexture, mapCoord);\n  


                	!!!vec4 mapTexel = texture2D(mapTexture, mapCoord);\n\n  

                	!!!vec4 pos = vec4(position.x, mapTexel.r, position.y, 1.0);\n\n  

                	pos.x += rippleTexel.r * 0.1 - 0.05;\n  pos.z += rippleTexel.g * 0.1 - 0.05;\n\n  
                	vec4 eyePos = modelViewMatrix * pos;\n  
                	vec4 projCorner = projectionMatrix * vec4(16.0, 16.0, eyePos.z, eyePos.w);\n  
                	


                	!!!gl_PointSize = screenPixelHeight * projectionMatrix[1][1] / projCorner.w * spriteScale * (mapTexel.g + 0.1);\n  
                	
                	gl_Position = projectionMatrix * eyePos;\n\n  


                	!!!uvOffsetX = mapTexel.g * 0.996;\n\n  

                	float depth = length(worldSpaceGlobalPos - cameraPosition.xz) * fogDistanceScale;\n  
                	fogFactor = smoothstep( fogNear, fogFar, depth );\n  
                	float centerDist = max(abs(mapCoord.x - 0.5), abs(mapCoord.y - 0.5));\n  
                	if(centerDist > 0.438 ) {\n   
                		fogFactor = max(fogFactor, 0.8);\n  
                	}\n}`,


                fragmentShader: `#define GLSLIFY 1\nuniform sampler2D spritesheetTexture;\n\nuniform float nightTime;\n\nuniform vec3 skyColor;\n
                varying float uvOffsetX;\nvarying float fogFactor;\n\n

                varying vec4 texel;\n\n

                void main() {\n  

                	!!!vec2 uv = vec2(gl_PointCoord.x / 32.0 + uvOffsetX, 1.0 - gl_PointCoord.y);\n  

                	gl_FragColor = texture2D(spritesheetTexture, uv) + vec4(nightTime, nightTime, nightTime, 0.0);\n\n  
                	if (gl_FragColor.a < 0.25) {\n    discard;\n  }\n  //unpremultiply for really nice edges\n  

                	gl_FragColor.rbg /= gl_FragColor.a;\n  gl_FragColor.rgb += (skyColor - gl_FragColor.rgb) * fogFactor;\n//  gl_FragColor.rgb = texel.rgb;\n}`,

                transparent: !0,
                alphaTest: .5,
                depthTest: !0,
                depthWrite: !1,
                uniforms: {
                    mapTexture: {
                        type: "t",
                        value: t.mapTexture
                    },
                    rippleTexture: {
                        type: "t",
                        value: t.rippleTexture
                    },
                    spritesheetTexture: {
                        type: "t",
                        value: t.spritesheetTexture
                    },
                    nightTime: {
                        type: "f",
                        value: t.nightTime
                    },
                    screenPixelHeight: {
                        type: "f",
                        value: t.screenPixelHeight
                    },
                    spriteScale: {
                        type: "f",
                        value: t.spriteScale
                    },
                    spriteSpacing: {
                        type: "f",
                        value: t.spriteSpacing
                    },
                    fogNear: {
                        type: "f",
                        value: t.fogNear
                    },
                    fogFar: {
                        type: "f",
                        value: t.fogFar
                    },
                    skyColor: {
                        type: "c",
                        value: t.fogColor
                    },
                    globalScale: {
                        type: "v3",
                        value: t.globalScale
                    },
                    globalPosition: {
                        type: "v3",
                        value: t.globalPosition
                    },
                    cameraPosition: {
                        type: "v3",
                        value: t.cameraPosition
                    },
                    sectionPosition: {
                        type: "v3",
                        value: t.sectionPosition
                    },
                    fogDistanceScale: {
                        type: "f",
                        value: s() ? .7 : 1.95
                    }
                }







! function t(e, i, n) {
    function r(a, s) {
        if (!i[a]) {
            if (!e[a]) {
                var c = "function" == typeof require && require;
                if (!s && c) return c(a, !0);
                if (o) return o(a, !0);
                var l = new Error("Cannot find module '" + a + "'");
                throw l.code = "MODULE_NOT_FOUND", l
            }
            var u = i[a] = {
                exports: {}
            };
            e[a][0].call(u.exports, function(t) {
                var i = e[a][1][t];
                return r(i ? i : t)
            }, u, u.exports, t, e, i, n)
        }
        return i[a].exports
    }
    for (var o = "function" == typeof require && require, a = 0; a < n.length; a++) r(n[a]);
    return r
}({
    1: [function(t, e, i) {
        e.exports = {
            chapterDivisions: ["0:00", "0:42", "2:31", "3:57", "5:58", "8:31", "10:07", "11:35", "13:17", "15:31", "16:19", "17:59", "19:15", "19:38", "20:33", "22:11", "22:24", "99:00"]
        }
    }, {}],
    2: [function(t, e, i) {
        e.exports = {
            date: "2017-02-02T18:47:32.418Z",
            comps: [{
                activeCamera: null,
                duration: 1350.16666666667,
                height: 540,
                id: 56,
                layers: [{
                    blendingMode: 5212,
                    height: 540,
                    inPoint: 0,
                    name: "state",
                    outPoint: 1350.16666666667,
                    source: "$sources.$id:83",
                    startTime: 0,
                    time: 0,
                    width: 960,
                    Transform: {
                        Opacity: 1,
                        Orientation: [0, 0, 0],
                        "X Rotation": 0,
                        "Y Rotation": 0,
                        "Z Rotation": null,
                        Scale: [1, 1, 1],
                        Position: [480, 270, 0],
                        "Anchor Point": [480, 270, 0]
                    },
                    Effects: [{
                        name: "dayTime",
                        Slider: {
                            times: [0, 152.966666666667, 156.5, 504.5, 508.5, 608.8, 612.8, 1078.8, 1082.8, 1161.93333333333, 1179.5, 1229.63333333333, 1233.63333333333, 1330.1, 1333.6, 1344.83333333333, 1348.83333333333],
                            values: [0, 0, .5, .5, 1, 1, 1.5, 1.5, 2, 2, 2.5, 2.5, 3, 3, 3.5, 3.5, 4]
                        }
                    }, {
                        name: "bleakness",
                        Slider: {
                            times: [32.6333333333333, 37.3],
                            values: [1, 0]
                        }
                    }, {
                        name: "cameraPosition",
                        Point: {
                            times: [153.2, 156.5],
                            values: [
                                [487, 567],
                                [487, 544]
                            ]
                        }
                    }, {
                        name: "interactive",
                        Checkbox: {
                            times: [0, 157.066666666667, 157.1, 503.1, 503.133333333333, 614.866666666667, 614.9, 1075.93333333333, 1075.96666666667, 1162.43333333333, 1162.46666666667, 1227.7, 1227.73333333333, 1331.66666666667, 1331.7, 1343.5, 1343.53333333333],
                            values: [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0]
                        }
                    }, {
                        name: "cameraOnRails",
                        Checkbox: {
                            times: [0, 157.066666666667, 157.1],
                            values: [0, 0, 1]
                        }
                    }, {
                        name: "videoVisibility",
                        Slider: {
                            times: [44.9333333333333, 45.9333333333333, 149.9, 150.9, 510.033333333333, 511.033333333333, 607.366666666667, 608.366666666667, 1082.1, 1083.1, 1153.76666666667, 1154.76666666667, 1233.86666666667, 1234.86666666667, 1329.26666666667, 1330.26666666667],
                            values: [0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0]
                        }
                    }, {
                        name: "Slider Control",
                        Slider: {
                            times: [1344.83333333333, 1348.83333333333],
                            values: [1.5, 2]
                        }
                    }],
                    Text: null,
                    "Time Remap": 0
                }, {
                    blendingMode: 5233,
                    height: 540,
                    inPoint: 0,
                    name: "comments",
                    outPoint: 1350.16666666667,
                    source: null,
                    startTime: 0,
                    time: 0,
                    width: 960,
                    Transform: {
                        Opacity: 1,
                        Orientation: [0, 0, 0],
                        "X Rotation": 0,
                        "Y Rotation": 0,
                        "Z Rotation": null,
                        Scale: [1, 1, 1],
                        Position: [476, 474, 0],
                        "Anchor Point": [0, 0, 0]
                    },
                    Effects: [],
                    Text: {
                        "Source Text": {
                            times: [0, .33333333333333, 1, 4.63333333333333, 6.63333333333333, 15.5, 17.7666666666667, 22.8666666666667, 25.0666666666667, 30.0666666666667, 32.6333333333333, 42, 159.566666666667, 164.566666666667, 211.433333333333, 216.666666666667, 420.7, 425.966666666667, 747.233333333333, 752.733333333333, 1349.83333333333],
                            values: ["get ready", "", "nfb logo", "", "this is a 20 minute documentary", "", "many ways for a bear to die", "", "created by", "", "BEAR71", "", "tutorial", "", "remote sensing", "", "canmore has", "", "it is hard", "", "END"]
                        }
                    },
                    "Time Remap": null
                }, {
                    blendingMode: 5212,
                    height: 1024,
                    inPoint: 0,
                    name: "map",
                    outPoint: 1350.16666666667,
                    source: "$sources.$id:132",
                    startTime: 0,
                    time: 0,
                    width: 1024,
                    Transform: {
                        Opacity: 1,
                        Orientation: [0, 0, 0],
                        "X Rotation": 0,
                        "Y Rotation": 0,
                        "Z Rotation": null,
                        Scale: [.28125, .28125, 1],
                        Position: [802, 384, 0],
                        "Anchor Point": [512, 512, 0]
                    },
                    Effects: [],
                    Text: null,
                    "Time Remap": 0
                }],
                name: "control-track",
                proxySource: null,
                time: 0,
                width: 960
            }, {
                activeCamera: null,
                duration: 1350.16666666667,
                height: 540,
                id: 18,
                layers: [{
                    blendingMode: 5212,
                    height: 0,
                    inPoint: 8,
                    name: "ambience.mp3",
                    outPoint: 161.033333333333,
                    source: "$sources.$id:250",
                    startTime: 8,
                    time: 0,
                    width: 0,
                    Transform: {
                        Opacity: 1,
                        Orientation: [0, 0, 0],
                        "X Rotation": 0,
                        "Y Rotation": 0,
                        "Z Rotation": null,
                        Scale: [1, 1, 1],
                        Position: [480, 270, 0],
                        "Anchor Point": [.5, .5, 0]
                    },
                    Effects: [],
                    Text: null,
                    "Time Remap": 0
                }, {
                    blendingMode: 5212,
                    height: 420,
                    inPoint: 45,
                    name: "b71-chapter1.mp4",
                    outPoint: 150.605605605606,
                    source: "$sources.$id:15",
                    startTime: 45,
                    time: 0,
                    width: 746,
                    Transform: {
                        Opacity: 1,
                        Orientation: [0, 0, 0],
                        "X Rotation": 0,
                        "Y Rotation": 0,
                        "Z Rotation": null,
                        Scale: [1.3047619047619, 1.3047619047619, 1],
                        Position: [480, 270, 0],
                        "Anchor Point": [373, 210, 0]
                    },
                    Effects: [],
                    Text: null,
                    "Time Remap": 0
                }, {
                    blendingMode: 5212,
                    height: 0,
                    inPoint: 150.6,
                    name: "Chapter1.mp3",
                    outPoint: 238.684897959184,
                    source: "$sources.$id:4",
                    startTime: 150.6,
                    time: 0,
                    width: 0,
                    Transform: {
                        Opacity: 1,
                        Orientation: [0, 0, 0],
                        "X Rotation": 0,
                        "Y Rotation": 0,
                        "Z Rotation": null,
                        Scale: [1, 1, 1],
                        Position: [480, 270, 0],
                        "Anchor Point": [.5, .5, 0]
                    },
                    Effects: [],
                    Text: null,
                    "Time Remap": 0
                }, {
                    blendingMode: 5212,
                    height: 0,
                    inPoint: 236.666666666667,
                    name: "Chapter2-Elk-Hunt-Technology-and-Instinct-v1.mp3",
                    outPoint: 360.330340136054,
                    source: "$sources.$id:5",
                    startTime: 236.666666666667,
                    time: 0,
                    width: 0,
                    Transform: {
                        Opacity: 1,
                        Orientation: [0, 0, 0],
                        "X Rotation": 0,
                        "Y Rotation": 0,
                        "Z Rotation": null,
                        Scale: [1, 1, 1],
                        Position: [480, 270, 0],
                        "Anchor Point": [.5, .5, 0]
                    },
                    Effects: [],
                    Text: null,
                    "Time Remap": 0
                }, {
                    blendingMode: 5212,
                    height: 0,
                    inPoint: 356.3,
                    name: "Chapter3-Railway-and-Highway-v1.mp3",
                    outPoint: 513.661632653061,
                    source: "$sources.$id:6",
                    startTime: 356.3,
                    time: 0,
                    width: 0,
                    Transform: {
                        Opacity: 1,
                        Orientation: [0, 0, 0],
                        "X Rotation": 0,
                        "Y Rotation": 0,
                        "Z Rotation": null,
                        Scale: [1, 1, 1],
                        Position: [480, 270, 0],
                        "Anchor Point": [.5, .5, 0]
                    },
                    Effects: [],
                    Text: null,
                    "Time Remap": 0
                }, {
                    blendingMode: 5212,
                    height: 0,
                    inPoint: 509.6,
                    name: "Chapter4-People-and-Wildlife-v1.mp3",
                    outPoint: 609.3,
                    source: "$sources.$id:7",
                    startTime: 509.6,
                    time: 0,
                    width: 0,
                    Transform: {
                        Opacity: 1,
                        Orientation: [0, 0, 0],
                        "X Rotation": 0,
                        "Y Rotation": 0,
                        "Z Rotation": null,
                        Scale: [1, 1, 1],
                        Position: [480, 270, 0],
                        "Anchor Point": [.5, .5, 0]
                    },
                    Effects: [],
                    Text: null,
                    "Time Remap": 0
                }, {
                    blendingMode: 5212,
                    height: 540,
                    inPoint: 510.3,
                    name: "b71-video_ambience_only-chapter4.mp4",
                    outPoint: 607.897597597598,
                    source: "$sources.$id:16",
                    startTime: 510.3,
                    time: 0,
                    width: 960,
                    Transform: {
                        Opacity: 1,
                        Orientation: [0, 0, 0],
                        "X Rotation": 0,
                        "Y Rotation": 0,
                        "Z Rotation": null,
                        Scale: [1, 1, 1],
                        Position: [480, 270, 0],
                        "Anchor Point": [480, 270, 0]
                    },
                    Effects: [],
                    Text: null,
                    "Time Remap": 0
                }, {
                    blendingMode: 5212,
                    height: 0,
                    inPoint: 605.266666666667,
                    name: "Chapter5-Rub-Trees-v1.mp3",
                    outPoint: 700.326258503401,
                    source: "$sources.$id:8",
                    startTime: 605.266666666667,
                    time: 0,
                    width: 0,
                    Transform: {
                        Opacity: 1,
                        Orientation: [0, 0, 0],
                        "X Rotation": 0,
                        "Y Rotation": 0,
                        "Z Rotation": null,
                        Scale: [1, 1, 1],
                        Position: [480, 270, 0],
                        "Anchor Point": [.5, .5, 0]
                    },
                    Effects: [],
                    Text: null,
                    "Time Remap": 0
                }, {
                    blendingMode: 5212,
                    height: 0,
                    inPoint: 690.833333333333,
                    name: "Chapter6-Cubs-v1.mp3",
                    outPoint: 798.222721088435,
                    source: "$sources.$id:9",
                    startTime: 690.833333333333,
                    time: 0,
                    width: 0,
                    Transform: {
                        Opacity: 1,
                        Orientation: [0, 0, 0],
                        "X Rotation": 0,
                        "Y Rotation": 0,
                        "Z Rotation": null,
                        Scale: [1, 1, 1],
                        Position: [480, 270, 0],
                        "Anchor Point": [.5, .5, 0]
                    },
                    Effects: [],
                    Text: null,
                    "Time Remap": 0
                }, {
                    blendingMode: 5212,
                    height: 0,
                    inPoint: 796.2,
                    name: "Chapter7-Bear-66-Death-v1.mp3",
                    outPoint: 934.766666666667,
                    source: "$sources.$id:10",
                    startTime: 796.2,
                    time: 0,
                    width: 0,
                    Transform: {
                        Opacity: 1,
                        Orientation: [0, 0, 0],
                        "X Rotation": 0,
                        "Y Rotation": 0,
                        "Z Rotation": null,
                        Scale: [1, 1, 1],
                        Position: [480, 270, 0],
                        "Anchor Point": [.5, .5, 0]
                    },
                    Effects: [],
                    Text: null,
                    "Time Remap": 0
                }, {
                    blendingMode: 5212,
                    height: 0,
                    inPoint: 930.866666666667,
                    name: "Chapter8-Bear-Swim-v1.mp3",
                    outPoint: 979.558911564626,
                    source: "$sources.$id:11",
                    startTime: 930.866666666667,
                    time: 0,
                    width: 0,
                    Transform: {
                        Opacity: 1,
                        Orientation: [0, 0, 0],
                        "X Rotation": 0,
                        "Y Rotation": 0,
                        "Z Rotation": null,
                        Scale: [1, 1, 1],
                        Position: [480, 270, 0],
                        "Anchor Point": [.5, .5, 0]
                    },
                    Effects: [],
                    Text: null,
                    "Time Remap": 0
                }, {
                    blendingMode: 5212,
                    height: 0,
                    inPoint: 978.333333333333,
                    name: "Chapter9-Winter-Kill-v2.mp3",
                    outPoint: 1080.2,
                    source: "$sources.$id:12",
                    startTime: 978.333333333333,
                    time: 0,
                    width: 0,
                    Transform: {
                        Opacity: 1,
                        Orientation: [0, 0, 0],
                        "X Rotation": 0,
                        "Y Rotation": 0,
                        "Z Rotation": null,
                        Scale: [1, 1, 1],
                        Position: [480, 270, 0],
                        "Anchor Point": [.5, .5, 0]
                    },
                    Effects: [],
                    Text: null,
                    "Time Remap": 0
                }, {
                    blendingMode: 5212,
                    height: 0,
                    inPoint: 1078.7,
                    name: "chapter10.mp3",
                    outPoint: 1180.49918367347,
                    source: "$sources.$id:13",
                    startTime: 1078.7,
                    time: 0,
                    width: 0,
                    Transform: {
                        Opacity: 1,
                        Orientation: [0, 0, 0],
                        "X Rotation": 0,
                        "Y Rotation": 0,
                        "Z Rotation": null,
                        Scale: [1, 1, 1],
                        Position: [480, 270, 0],
                        "Anchor Point": [.5, .5, 0]
                    },
                    Effects: [],
                    Text: null,
                    "Time Remap": 0
                }, {
                    blendingMode: 5212,
                    height: 540,
                    inPoint: 1082.1,
                    name: "b71-video_only-chapter10.mp4",
                    outPoint: 1152.13333333333,
                    source: "$sources.$id:17",
                    startTime: 1082.1,
                    time: 0,
                    width: 960,
                    Transform: {
                        Opacity: 1,
                        Orientation: [0, 0, 0],
                        "X Rotation": 0,
                        "Y Rotation": 0,
                        "Z Rotation": null,
                        Scale: [1, 1, 1],
                        Position: [480, 270, 0],
                        "Anchor Point": [480, 270, 0]
                    },
                    Effects: [],
                    Text: null,
                    "Time Remap": 0
                }, {
                    blendingMode: 5212,
                    height: 540,
                    inPoint: 1233.86666666667,
                    name: "b71-video_only-chapter11.mov",
                    outPoint: 1330.42989656323,
                    source: "$sources.$id:253",
                    startTime: 1233.86666666667,
                    time: 0,
                    width: 960,
                    Transform: {
                        Opacity: 1,
                        Orientation: [0, 0, 0],
                        "X Rotation": 0,
                        "Y Rotation": 0,
                        "Z Rotation": null,
                        Scale: [1, 1, 1],
                        Position: [480, 270, 0],
                        "Anchor Point": [480, 270, 0]
                    },
                    Effects: [],
                    Text: null,
                    "Time Remap": 0
                }, {
                    blendingMode: 5212,
                    height: 0,
                    inPoint: 1176.4,
                    name: "chapter11.mp3",
                    outPoint: 1344.46666666667,
                    source: "$sources.$id:14",
                    startTime: 1176.4,
                    time: 0,
                    width: 0,
                    Transform: {
                        Opacity: 1,
                        Orientation: [0, 0, 0],
                        "X Rotation": 0,
                        "Y Rotation": 0,
                        "Z Rotation": null,
                        Scale: [1, 1, 1],
                        Position: [480, 270, 0],
                        "Anchor Point": [.5, .5, 0]
                    },
                    Effects: [],
                    Text: null,
                    "Time Remap": 0
                }, {
                    blendingMode: 5212,
                    height: 540,
                    inPoint: 0,
                    name: "black",
                    outPoint: 1350.16666666667,
                    source: "$sources.$id:123",
                    startTime: 0,
                    time: 0,
                    width: 960,
                    Transform: {
                        Opacity: 1,
                        Orientation: [0, 0, 0],
                        "X Rotation": 0,
                        "Y Rotation": 0,
                        "Z Rotation": null,
                        Scale: [1, 1, 1],
                        Position: [480, 270, 0],
                        "Anchor Point": [480, 270, 0]
                    },
                    Effects: [],
                    Text: null,
                    "Time Remap": 0
                }],
                name: "b71-documentary",
                proxySource: null,
                time: 0,
                width: 960
            }, {
                activeCamera: null,
                duration: 1374,
                height: 1024,
                id: 132,
                layers: [{
                    blendingMode: 5241,
                    height: 1024,
                    inPoint: 0,
                    name: "map mask",
                    outPoint: 1374,
                    source: "$sources.$id:145",
                    startTime: 0,
                    time: 0,
                    width: 1024,
                    Transform: {
                        Opacity: 1,
                        Orientation: [0, 0, 0],
                        "X Rotation": 0,
                        "Y Rotation": 0,
                        "Z Rotation": null,
                        Scale: [1, 1, 1],
                        Position: [512, 512, 0],
                        "Anchor Point": [512, 512, 0]
                    },
                    Effects: [],
                    Text: null,
                    "Time Remap": 0
                }, {
                    blendingMode: 5212,
                    height: 1024,
                    inPoint: 0,
                    name: "user",
                    outPoint: 1374,
                    source: null,
                    startTime: 0,
                    time: 0,
                    width: 1024,
                    Transform: {
                        Opacity: 1,
                        Orientation: [0, 0, 0],
                        "X Rotation": 0,
                        "Y Rotation": 0,
                        "Z Rotation": null,
                        Scale: [1, 1, 1],
                        Position: [512, 512, 0],
                        "Anchor Point": [0, 0, 0]
                    },
                    Effects: [],
                    Text: null,
                    "Time Remap": null
                }, {
                    blendingMode: 5212,
                    height: 1024,
                    inPoint: 0,
                    name: "Adjustment Layer 4",
                    outPoint: 1374,
                    source: "$sources.$id:223",
                    startTime: 0,
                    time: 0,
                    width: 1024,
                    Transform: {
                        Opacity: 1,
                        Orientation: [0, 0, 0],
                        "X Rotation": 0,
                        "Y Rotation": 0,
                        "Z Rotation": null,
                        Scale: [1, 1, 1],
                        Position: [512, 512, 0],
                        "Anchor Point": [512, 512, 0]
                    },
                    Effects: [{
                        name: "Transform",
                        "Anchor Point": [487, 567],
                        Position: [512, 512],
                        "Uniform Scale": 1,
                        "Scale Height": 533.333,
                        "Scale Width": 100,
                        Skew: 0,
                        "Skew Axis": 0,
                        Rotation: 0,
                        Opacity: 100,
                        "Use Composition�s Shutter Angle": 1,
                        "Shutter Angle": 0,
                        Sampling: 1
                    }],
                    Text: null,
                    "Time Remap": 0
                }, {
                    blendingMode: 5212,
                    height: 1024,
                    inPoint: 0,
                    name: "Bear71",
                    outPoint: 1374,
                    source: null,
                    startTime: 0,
                    time: 0,
                    width: 1024,
                    Transform: {
                        Opacity: 1,
                        Orientation: [0, 0, 0],
                        "X Rotation": 0,
                        "Y Rotation": 0,
                        "Z Rotation": null,
                        Scale: [1, 1, 1],
                        Position: [.5, -8.5, 0],
                        "Anchor Point": [0, 0, 0]
                    },
                    Effects: [],
                    Text: {
                        "Source Text": "Bear71"
                    },
                    "Time Remap": null
                }, {
                    blendingMode: 5233,
                    height: 1024,
                    inPoint: 0,
                    name: "bear71",
                    outPoint: 1374,
                    source: null,
                    startTime: 0,
                    time: 0,
                    width: 1024,
                    Transform: {
                        Opacity: 1,
                        Orientation: [0, 0, 0],
                        "X Rotation": 0,
                        "Y Rotation": 0,
                        "Z Rotation": null,
                        Scale: [1, 1, 1],
                        Position: {
                            times: [.33333333333333, 1.1537109375, 1.83733723958333, 2.52099609375, 3.20462239583333, 3.88824869791667, 4.57190755208333, 5.39228515625, 5.93919270833333, 6.48610026041667, 7.0330078125, 7.57991536458333, 8.12682291666667, 8.67373046875, 9.22067057291667, 9.767578125, 10.3144856770833, 10.8613932291667, 11.40830078125, 11.9552083333333, 12.5021484375, 12.6388671875, 13.0217122395833, 16.2758138020833, 16.82275390625, 17.23291015625, 17.6430989583333, 18.0532877604167, 18.4634765625, 18.8736653645833, 19.2838541666667, 19.69404296875, 20.10419921875, 20.5143880208333, 20.9245768229167, 21.471484375, 21.8816731770833, 22.4285807291667, 22.96181640625, 23.3720052083333, 23.7821940104167, 24.1923828125, 24.4658528645833, 24.7392903645833, 25.1494791666667, 25.55966796875, 25.9698567708333, 26.3800455729167, 26.7902018229167, 27.200390625, 137.802766927083, 138.212955729167, 138.62314453125, 139.033333333333, 139.443522135417, 139.9904296875, 140.537337239583, 141.084244791667, 141.767903645833, 167.679622395833, 193.733333333333, 269.666666666667, 348.3, 447.066666666667, 539.366666666667, 638.833333333333, 760.833333333333, 879.633333333333, 988.766666666667, 1101.13333333333, 1191, 1277.7, 1361.16666666667],
                            values: [
                                [515.557910854724, 591, 0],
                                [512.431175716057, 593, 0],
                                [508.262195531168, 592, 0],
                                [505.135460392501, 593, 0],
                                [503.050970300056, 592, 0],
                                [503.050970300056, 589, 0],
                                [502.008725253834, 586, 0],
                                [499.924235161389, 583, 0],
                                [498.881990115166, 581, 0],
                                [497.839745068944, 579, 0],
                                [497.839745068944, 579, 0],
                                [498.881990115166, 577, 0],
                                [496.797500022722, 574, 0],
                                [495.755254976499, 571, 0],
                                [496.797500022722, 569, 0],
                                [497.839745068944, 567, 0],
                                [497.839745068944, 566, 0],
                                [496.797500022722, 565, 0],
                                [496.797500022722, 564, 0],
                                [493.670764884055, 561, 0],
                                [492.628519837832, 557, 0],
                                [491.58627479161, 553, 0],
                                [491.58627479161, 553, 0],
                                [473.346685623612, 534, 0],
                                [483.769136085836, 530, 0],
                                [485.85362617828, 530, 0],
                                [485.85362617828, 530, 0],
                                [481.684645993391, 530, 0],
                                [473.346685623612, 528, 0],
                                [467.093215346278, 528, 0],
                                [460.839745068944, 524, 0],
                                [456.670764884055, 526, 0],
                                [456.670764884055, 522, 0],
                                [454.58627479161, 518, 0],
                                [452.501784699166, 516, 0],
                                [452.501784699166, 512, 0],
                                [450.417294606721, 512, 0],
                                [450.417294606721, 512, 0],
                                [450.417294606721, 512, 0],
                                [452.501784699166, 510, 0],
                                [456.670764884055, 508, 0],
                                [458.755254976499, 512, 0],
                                [465.008725253834, 514, 0],
                                [465.008725253834, 506, 0],
                                [469.177705438723, 504, 0],
                                [473.346685623612, 502, 0],
                                [477.515665808502, 498, 0],
                                [473.346685623612, 496, 0],
                                [479.600155900946, 498, 0],
                                [483.769136085836, 502, 0],
                                [487.938116270725, 504, 0],
                                [494.191586548059, 500, 0],
                                [498.360566732948, 500, 0],
                                [506.698527102727, 498, 0],
                                [510.867507287617, 496, 0],
                                [515.036487472506, 490, 0],
                                [521.28995774984, 494, 0],
                                [527.543428027174, 500, 0],
                                [531.712408212063, 504, 0],
                                [599.712408212063, 505, 0],
                                [739.712408212063, 534, 0],
                                [772.712408212063, 603, 0],
                                [737.712408212063, 529, 0],
                                [728.712408212063, 457, 0],
                                [754.712408212063, 402, 0],
                                [684.712408212063, 413, 0],
                                [642.712408212063, 411, 0],
                                [578.712408212063, 415, 0],
                                [550.712408212063, 445, 0],
                                [512.712408212063, 488, 0],
                                [460.712408212063, 504, 0],
                                [404.712408212063, 497, 0],
                                [368.712408212063, 485, 0]
                            ]
                        },
                        "Anchor Point": [0, 0, 0]
                    },
                    Effects: [],
                    Text: null,
                    "Time Remap": null
                }, {
                    blendingMode: 5212,
                    height: 1024,
                    inPoint: 0,
                    name: "map-legend-raw.png",
                    outPoint: 1374,
                    source: "$sources.$id:130",
                    startTime: 0,
                    time: 0,
                    width: 1024,
                    Transform: {
                        Opacity: 1,
                        Orientation: [0, 0, 0],
                        "X Rotation": 0,
                        "Y Rotation": 0,
                        "Z Rotation": null,
                        Scale: [1, 1, 1],
                        Position: [512, 512, 0],
                        "Anchor Point": [512, 512, 0]
                    },
                    Effects: [],
                    Text: null,
                    "Time Remap": 0
                }],
                name: "map",
                proxySource: null,
                time: 0,
                width: 1024
            }, {
                activeCamera: null,
                duration: 1374,
                height: 1024,
                id: 145,
                layers: [{
                    blendingMode: 5212,
                    height: 1024,
                    inPoint: 0,
                    name: "Adjustment Layer 3",
                    outPoint: 1374,
                    source: "$sources.$id:172",
                    startTime: 0,
                    time: 0,
                    width: 1024,
                    Transform: {
                        Opacity: 1,
                        Orientation: [0, 0, 0],
                        "X Rotation": 0,
                        "Y Rotation": 0,
                        "Z Rotation": null,
                        Scale: [1, 1, 1],
                        Position: [512, 512, 0],
                        "Anchor Point": [512, 512, 0]
                    },
                    Effects: [{
                        name: "Levels",
                        "Channel:": 1,
                        "Input Black": 0,
                        "Input White": 1,
                        Gamma: 1,
                        "Output Black": 0,
                        "Output White": 1,
                        "Clip To Output Black": 3,
                        "Clip To Output White": 3
                    }],
                    Text: null,
                    "Time Remap": 0
                }, {
                    blendingMode: 5215,
                    height: 1024,
                    inPoint: 0,
                    name: "map submask",
                    outPoint: 1374,
                    source: "$sources.$id:157",
                    startTime: 0,
                    time: 0,
                    width: 1024,
                    Transform: {
                        Opacity: 1,
                        Orientation: [0, 0, 0],
                        "X Rotation": 0,
                        "Y Rotation": 0,
                        "Z Rotation": null,
                        Scale: [1, 1, 1],
                        Position: [512, 512, 0],
                        "Anchor Point": [512, 512, 0]
                    },
                    Effects: [],
                    Text: null,
                    "Time Remap": 0
                }, {
                    blendingMode: 5212,
                    height: 1024,
                    inPoint: 0,
                    name: "map submask",
                    outPoint: 1374,
                    source: "$sources.$id:157",
                    startTime: 0,
                    time: 0,
                    width: 1024,
                    Transform: {
                        Opacity: 1,
                        Orientation: [0, 0, 0],
                        "X Rotation": 0,
                        "Y Rotation": 0,
                        "Z Rotation": null,
                        Scale: [1, 1, 1],
                        Position: [512, 512, 0],
                        "Anchor Point": [512, 512, 0]
                    },
                    Effects: [],
                    Text: null,
                    "Time Remap": 0
                }],
                name: "map mask",
                proxySource: null,
                time: 0,
                width: 1024
            }, {
                activeCamera: null,
                duration: 1374,
                height: 1024,
                id: 157,
                layers: [{
                    blendingMode: 5212,
                    height: 1024,
                    inPoint: 0,
                    name: "white",
                    outPoint: 1374,
                    source: "$sources.$id:113",
                    startTime: 0,
                    time: 0,
                    width: 1024,
                    Transform: {
                        Opacity: 1,
                        Orientation: [0, 0, 0],
                        "X Rotation": 0,
                        "Y Rotation": 0,
                        "Z Rotation": null,
                        Scale: [1, 1, 1],
                        Position: [512, 512, 0],
                        "Anchor Point": [512, 512, 0]
                    },
                    Effects: [{
                        name: "Gradient Ramp",
                        "Start of Ramp": [512, 0],
                        "Start Color": [0, 0, 0, 1],
                        "End of Ramp": [512, 512],
                        "End Color": [1, 1, 1, 1],
                        "Ramp Shape": 1,
                        "Ramp Scatter": 0,
                        "Blend With Original": 0
                    }, {
                        name: "Mirror",
                        "Reflection Center": [1024, 512],
                        "Reflection Angle": 90
                    }],
                    Text: null,
                    "Time Remap": 0
                }],
                name: "map submask",
                proxySource: null,
                time: 0,
                width: 1024
            }, {
                activeCamera: null,
                duration: 1800,
                height: 1024,
                id: 102,
                layers: [{
                    blendingMode: 5233,
                    height: 1024,
                    inPoint: 0,
                    name: "VR",
                    outPoint: 1800,
                    source: null,
                    startTime: 0,
                    time: 0,
                    width: 1024,
                    Transform: {
                        Opacity: .3,
                        Orientation: [0, 0, 0],
                        "X Rotation": 0,
                        "Y Rotation": 0,
                        "Z Rotation": null,
                        Scale: [1, 1.82747474747475, 1],
                        Position: [514, 556, 0],
                        "Anchor Point": [0, 0, 0]
                    },
                    Effects: [],
                    Text: {
                        "Source Text": "VR"
                    },
                    "Time Remap": null
                }, {
                    blendingMode: 5212,
                    height: 1024,
                    inPoint: 0,
                    name: "ground",
                    outPoint: 1800,
                    source: "$sources.$id:113",
                    startTime: 0,
                    time: 0,
                    width: 1024,
                    Transform: {
                        Opacity: 1,
                        Orientation: [0, 0, 0],
                        "X Rotation": 0,
                        "Y Rotation": 0,
                        "Z Rotation": null,
                        Scale: [1, 1, 1],
                        Position: [512, 512, 0],
                        "Anchor Point": [512, 512, 0]
                    },
                    Effects: [{
                        name: "Gradient Ramp",
                        "Start of Ramp": [512, 0],
                        "Start Color": [0, 0, 0, 1],
                        "End of Ramp": [512, 512],
                        "End Color": [1, 1, 1, 1],
                        "Ramp Shape": 1,
                        "Ramp Scatter": 0,
                        "Blend With Original": 0
                    }, {
                        name: "Curves",
                        "Channel:": 1
                    }, {
                        name: "Mirror",
                        "Reflection Center": [1024, 512],
                        "Reflection Angle": 90
                    }, {
                        name: "Offset",
                        "Shift Center To": [512, 0],
                        "Blend With Original": 0
                    }, {
                        name: "Transform",
                        "Anchor Point": [512, 512],
                        Position: [512, 512],
                        "Uniform Scale": 1,
                        "Scale Height": 1200,
                        "Scale Width": 100,
                        Skew: 0,
                        "Skew Axis": 0,
                        Rotation: 0,
                        Opacity: 100,
                        "Use Composition�s Shutter Angle": 1,
                        "Shutter Angle": 0,
                        Sampling: 1
                    }],
                    Text: null,
                    "Time Remap": 0
                }, {
                    blendingMode: 5212,
                    height: 1024,
                    inPoint: 0,
                    name: "fog",
                    outPoint: 1800,
                    source: "$sources.$id:113",
                    startTime: 0,
                    time: 0,
                    width: 1024,
                    Transform: {
                        Opacity: 1,
                        Orientation: [0, 0, 0],
                        "X Rotation": 0,
                        "Y Rotation": 0,
                        "Z Rotation": null,
                        Scale: [1, 1, 1],
                        Position: [512, 512, 0],
                        "Anchor Point": [512, 512, 0]
                    },
                    Effects: [{
                        name: "Gradient Ramp",
                        "Start of Ramp": [512, 0],
                        "Start Color": [.360003054142, .360003054142, .360003054142, 1],
                        "End of Ramp": [512, 512],
                        "End Color": [1, 1, 1, 1],
                        "Ramp Shape": 1,
                        "Ramp Scatter": 0,
                        "Blend With Original": 0
                    }, {
                        name: "Curves",
                        "Channel:": 1
                    }, {
                        name: "Mirror",
                        "Reflection Center": [1024, 512],
                        "Reflection Angle": 90
                    }, {
                        name: "Offset",
                        "Shift Center To": [512, 0],
                        "Blend With Original": 0
                    }, {
                        name: "Transform",
                        "Anchor Point": [512, 512],
                        Position: [512, 512],
                        "Uniform Scale": 1,
                        "Scale Height": 1200,
                        "Scale Width": 100,
                        Skew: 0,
                        "Skew Axis": 0,
                        Rotation: 0,
                        Opacity: 100,
                        "Use Composition�s Shutter Angle": 1,
                        "Shutter Angle": 0,
                        Sampling: 1
                    }],
                    Text: null,
                    "Time Remap": 0
                }, {
                    blendingMode: 5212,
                    height: 1024,
                    inPoint: 0,
                    name: "sun and moon",
                    outPoint: 1800,
                    source: "$sources.$id:181",
                    startTime: 0,
                    time: 0,
                    width: 1024,
                    Transform: {
                        Opacity: 1,
                        Orientation: [0, 0, 0],
                        "X Rotation": 0,
                        "Y Rotation": 0,
                        "Z Rotation": null,
                        Scale: [.53125, 1, 1],
                        Position: [512, 512, 0],
                        "Anchor Point": [512, 512, 0]
                    },
                    Effects: [],
                    Text: null,
                    "Time Remap": 0
                }, {
                    blendingMode: 5212,
                    height: 1024,
                    inPoint: 0,
                    name: "white",
                    outPoint: 1800,
                    source: "$sources.$id:113",
                    startTime: 0,
                    time: 0,
                    width: 1024,
                    Transform: {
                        Opacity: 1,
                        Orientation: [0, 0, 0],
                        "X Rotation": 0,
                        "Y Rotation": 0,
                        "Z Rotation": null,
                        Scale: [1, 1, 1],
                        Position: [512, 512, 0],
                        "Anchor Point": [512, 512, 0]
                    },
                    Effects: [{
                        name: "Gradient Ramp",
                        "Start of Ramp": [512, 0],
                        "Start Color": [0, 0, 0, 1],
                        "End of Ramp": [512, 512],
                        "End Color": [0, .71378684043884, 1, 1],
                        "Ramp Shape": 1,
                        "Ramp Scatter": 0,
                        "Blend With Original": 0
                    }, {
                        name: "Curves",
                        "Channel:": 1
                    }, {
                        name: "Mirror",
                        "Reflection Center": [1024, 512],
                        "Reflection Angle": 90
                    }, {
                        name: "Offset",
                        "Shift Center To": [512, 0],
                        "Blend With Original": 0
                    }, {
                        name: "Transform",
                        "Anchor Point": [512, 512],
                        Position: [512, 512],
                        "Uniform Scale": 1,
                        "Scale Height": 1200,
                        "Scale Width": 100,
                        Skew: 0,
                        "Skew Axis": 0,
                        Rotation: 0,
                        Opacity: 100,
                        "Use Composition�s Shutter Angle": 1,
                        "Shutter Angle": 0,
                        Sampling: 1
                    }],
                    Text: null,
                    "Time Remap": 0
                }],
                name: "sky",
                proxySource: null,
                time: 0,
                width: 1024
            }, {
                activeCamera: null,
                duration: 1800,
                height: 1024,
                id: 181,
                layers: [{
                    blendingMode: 5212,
                    height: 1024,
                    inPoint: 0,
                    name: "sun and moon",
                    outPoint: 1800,
                    source: null,
                    startTime: 0,
                    time: 0,
                    width: 1024,
                    Transform: {
                        Opacity: 1,
                        Orientation: [0, 0, 0],
                        "X Rotation": 0,
                        "Y Rotation": 0,
                        "Z Rotation": null,
                        Scale: [1, 1, 1],
                        Position: [512, 512, 0],
                        "Anchor Point": [0, 0, 0]
                    },
                    Effects: [],
                    Text: null,
                    "Time Remap": null
                }],
                name: "sun and moon",
                proxySource: null,
                time: 0,
                width: 1024
            }],
            footages: [{
                duration: 0,
                file: null,
                height: 540,
                id: 83,
                mainSource: {
                    file: "unknown"
                },
                name: "Adjustment Layer 1",
                proxySource: {
                    file: "unknown"
                },
                time: 0,
                width: 960
            }, {
                duration: 193.854693877551,
                file: "ambience.mp3",
                height: 0,
                id: 250,
                mainSource: {
                    file: "ambience.mp3"
                },
                name: "ambience.mp3",
                proxySource: {
                    file: "unknown"
                },
                time: -8,
                width: 0
            }, {
                duration: 105.605605605606,
                file: "b71-chapter1.mp4",
                height: 420,
                id: 15,
                mainSource: {
                    file: "b71-chapter1.mp4"
                },
                name: "b71-chapter1.mp4",
                proxySource: {
                    file: "unknown"
                },
                time: -45,
                width: 746
            }, {
                duration: 88.0848979591837,
                file: "Chapter1.mp3",
                height: 0,
                id: 4,
                mainSource: {
                    file: "Chapter1.mp3"
                },
                name: "Chapter1.mp3",
                proxySource: {
                    file: "unknown"
                },
                time: -150.6,
                width: 0
            }, {
                duration: 123.663673469388,
                file: "Chapter2-Elk-Hunt-Technology-and-Instinct-v1.mp3",
                height: 0,
                id: 5,
                mainSource: {
                    file: "Chapter2-Elk-Hunt-Technology-and-Instinct-v1.mp3"
                },
                name: "Chapter2-Elk-Hunt-Technology-and-Instinct-v1.mp3",
                proxySource: {
                    file: "unknown"
                },
                time: -236.666666666667,
                width: 0
            }, {
                duration: 157.361632653061,
                file: "Chapter3-Railway-and-Highway-v1.mp3",
                height: 0,
                id: 6,
                mainSource: {
                    file: "Chapter3-Railway-and-Highway-v1.mp3"
                },
                name: "Chapter3-Railway-and-Highway-v1.mp3",
                proxySource: {
                    file: "unknown"
                },
                time: -356.3,
                width: 0
            }, {
                duration: 99.709387755102,
                file: "Chapter4-People-and-Wildlife-v1.mp3",
                height: 0,
                id: 7,
                mainSource: {
                    file: "Chapter4-People-and-Wildlife-v1.mp3"
                },
                name: "Chapter4-People-and-Wildlife-v1.mp3",
                proxySource: {
                    file: "unknown"
                },
                time: -509.6,
                width: 0
            }, {
                duration: 97.5975975975976,
                file: "b71-video_ambience_only-chapter4.mp4",
                height: 540,
                id: 16,
                mainSource: {
                    file: "b71-video_ambience_only-chapter4.mp4"
                },
                name: "b71-video_ambience_only-chapter4.mp4",
                proxySource: {
                    file: "unknown"
                },
                time: -510.3,
                width: 960
            }, {
                duration: 95.0595918367347,
                file: "Chapter5-Rub-Trees-v1.mp3",
                height: 0,
                id: 8,
                mainSource: {
                    file: "Chapter5-Rub-Trees-v1.mp3"
                },
                name: "Chapter5-Rub-Trees-v1.mp3",
                proxySource: {
                    file: "unknown"
                },
                time: -605.266666666667,
                width: 0
            }, {
                duration: 107.389387755102,
                file: "Chapter6-Cubs-v1.mp3",
                height: 0,
                id: 9,
                mainSource: {
                    file: "Chapter6-Cubs-v1.mp3"
                },
                name: "Chapter6-Cubs-v1.mp3",
                proxySource: {
                    file: "unknown"
                },
                time: -690.833333333333,
                width: 0
            }, {
                duration: 138.579591836735,
                file: "Chapter7-Bear-66-Death-v1.mp3",
                height: 0,
                id: 10,
                mainSource: {
                    file: "Chapter7-Bear-66-Death-v1.mp3"
                },
                name: "Chapter7-Bear-66-Death-v1.mp3",
                proxySource: {
                    file: "unknown"
                },
                time: -796.2,
                width: 0
            }, {
                duration: 48.6922448979592,
                file: "Chapter8-Bear-Swim-v1.mp3",
                height: 0,
                id: 11,
                mainSource: {
                    file: "Chapter8-Bear-Swim-v1.mp3"
                },
                name: "Chapter8-Bear-Swim-v1.mp3",
                proxySource: {
                    file: "unknown"
                },
                time: -930.866666666667,
                width: 0
            }, {
                duration: 101.877551020408,
                file: "Chapter9-Winter-Kill-v2.mp3",
                height: 0,
                id: 12,
                mainSource: {
                    file: "Chapter9-Winter-Kill-v2.mp3"
                },
                name: "Chapter9-Winter-Kill-v2.mp3",
                proxySource: {
                    file: "unknown"
                },
                time: -978.333333333333,
                width: 0
            }, {
                duration: 101.799183673469,
                file: "chapter10.mp3",
                height: 0,
                id: 13,
                mainSource: {
                    file: "chapter10.mp3"
                },
                name: "chapter10.mp3",
                proxySource: {
                    file: "unknown"
                },
                time: -1078.7,
                width: 0
            }, {
                duration: 70.0367033700367,
                file: "b71-video_only-chapter10.mp4",
                height: 540,
                id: 17,
                mainSource: {
                    file: "b71-video_only-chapter10.mp4"
                },
                name: "b71-video_only-chapter10.mp4",
                proxySource: {
                    file: "unknown"
                },
                time: -1082.1,
                width: 960
            }, {
                duration: 96.5632298965632,
                file: "b71-video_only-chapter11.mov",
                height: 540,
                id: 253,
                mainSource: {
                    file: "b71-video_only-chapter11.mov"
                },
                name: "b71-video_only-chapter11.mov",
                proxySource: {
                    file: "unknown"
                },
                time: -1233.86666666667,
                width: 960
            }, {
                duration: 168.071836734694,
                file: "chapter11.mp3",
                height: 0,
                id: 14,
                mainSource: {
                    file: "chapter11.mp3"
                },
                name: "chapter11.mp3",
                proxySource: {
                    file: "unknown"
                },
                time: -1176.4,
                width: 0
            }, {
                duration: 0,
                file: null,
                height: 540,
                id: 123,
                mainSource: {
                    file: "unknown"
                },
                name: "black",
                proxySource: {
                    file: "unknown"
                },
                time: 0,
                width: 960
            }, {
                duration: 0,
                file: null,
                height: 1024,
                id: 172,
                mainSource: {
                    file: "unknown"
                },
                name: "Adjustment Layer 3",
                proxySource: {
                    file: "unknown"
                },
                time: 0,
                width: 1024
            }, {
                duration: 0,
                file: null,
                height: 1024,
                id: 113,
                mainSource: {
                    file: "unknown"
                },
                name: "white",
                proxySource: {
                    file: "unknown"
                },
                time: 0,
                width: 1024
            }, {
                duration: 0,
                file: null,
                height: 1024,
                id: 223,
                mainSource: {
                    file: "unknown"
                },
                name: "Adjustment Layer 4",
                proxySource: {
                    file: "unknown"
                },
                time: 0,
                width: 1024
            }, {
                duration: 0,
                file: "map-legend-raw.png",
                height: 1024,
                id: 130,
                mainSource: {
                    file: "map-legend-raw.png"
                },
                name: "map-legend-raw.png",
                proxySource: {
                    file: "unknown"
                },
                time: 0,
                width: 1024
            }]
        }
    }, {}],
    3: [function(t, e, i) {
        "use strict";
        window.THREE = t("three"), t("./lib/vendor/three.FlatShadedMaterial"), t("./lib/vendor/VRControls"), t("./lib/vendor/VREffect"), t("webvr-polyfill"), t("./lib/util/fix-iOS-fullscreen"), t("babel-polyfill"), t("fastclick")(document.body);
        var n = t("./lib/assets/loadTexture"),
            r = t("./lib/getApp"),
            o = t("./lib/framework"),
            a = r({
                onVideoReady: o.init.bind(o)
            });
        n.setRenderer(a.renderer)
    }, {
        "./lib/assets/loadTexture": 6,
        "./lib/framework": 13,
        "./lib/getApp": 16,
        "./lib/util/fix-iOS-fullscreen": 109,
        "./lib/vendor/VRControls": 121,
        "./lib/vendor/VREffect": 122,
        "./lib/vendor/three.FlatShadedMaterial": 123,
        "babel-polyfill": 132,
        fastclick: 448,
        three: 520,
        "webvr-polyfill": 538
    }],
    4: [function(t, e, i) {
        "use strict";

        function n(t, e, i) {
            t[e] = i
        }

        function r(t, e, i) {
            return i === t[e]
        }

        function o(t, e, i, n) {
            return (i - e) * n + e
        }

        function a(t) {
            return t
        }

        function s() {}

        function c(t) {
            this.data = t || h, p(this.data), this.compData = this.data.comps[0], this.registeredProperties = []
        }

        function l(t) {
            var e, i = -1,
                n = -1,
                r = t.propertyTrack,
                o = r.times,
                a = r.values;
            t.object[t.objectPropName];
            if (g <= o[0] ? e = a[0] : g >= o[o.length - 1] && (e = a[o.length - 1]), void 0 !== e)
                if (t.workingValue instanceof Array)
                    for (var s = 0; s < t.workingValue.length; s++) t.workingValue[s] = e[s];
                else t.workingValue = e;
            else {
                for (var s = o.length - 1; s >= 0; s--)
                    if (g > o[s]) {
                        i = s, n = s + 1;
                        break
                    }
                var c = o[i],
                    l = o[n],
                    u = t.easingFunction((g - c) / (l - c)),
                    h = a[i],
                    d = a[n];
                t.workingValue = t.lerpMethod(t.workingValue, h, d, u)
            }
            t.compareMethod(t.object, t.objectPropName, t.workingValue) || (t.mapMethod(t.object, t.objectPropName, t.workingValue), t.onChange(t.workingValue))
        }
        var u = t("json-cycle"),
            h = u.retrocycle(t("../design/jsonExports/control-track/scene.masked.min.json")),
            d = t("./util/getSubdataByPath"),
            p = t("./util/relinkAeSources"),
            f = t("lodash.defaults"),
            m = {
                object: null,
                objectPropName: null,
                propertyPath: null,
                mapMethod: n,
                easingFunction: a,
                lerpMethod: o,
                compareMethod: r,
                onChange: s,
                workingValue: 0
            };
        c.prototype.registerProperty = function(t) {
            if (this.registeredProperties.indexOf(t) === -1) {
                if (f(t, m), !t.propertyTrack && (t.propertyTrack = d(this.compData, t.propertyPath), !t.propertyTrack)) throw new Error("No track found!");
                this.registeredProperties.push(t)
            }
        }, c.prototype.unregisterProperty = function(t) {
            var e = this.registeredProperties.indexOf(t);
            e !== -1 && this.registeredProperties.splice(e, 1)
        }, c.prototype.getDataTrack = function(t) {
            return d(this.compData, t)
        };
        var g = 0;
        c.prototype.updateTime = function(t) {
            g = t, this.registeredProperties.forEach(l, this)
        }, e.exports = c
    }, {
        "../design/jsonExports/control-track/scene.masked.min.json": 2,
        "./util/getSubdataByPath": 111,
        "./util/relinkAeSources": 119,
        "json-cycle": 476,
        "lodash.defaults": 484
    }],
    5: [function(t, e, i) {
        (function(i) {
            "use strict";

            function n(t) {
                if (!(t in p)) throw new Error("Trying to load asset that is not in cache: " + t);
                return p[t]
            }

            function r(t, e) {
                console.log("[preload]", t), f(d.extname(t)) ? h(t, e) : a(t, e)
            }

            function o() {
                console.log("Cached Items:"), console.log(JSON.stringify(Object.keys(p), void 0, 2))
            }

            function a(t, e, n) {
                if (!t) throw new TypeError("Must specify url argument");
                if ("function" == typeof e && (n = e, e = {}), n = n || g, e = e || {}, t in p) {
                    var r = function() {
                        var e = p[t];
                        return i.nextTick(function() {
                            return n(null, e)
                        }), {
                            v: e
                        }
                    }();
                    if ("object" === ("undefined" == typeof r ? "undefined" : s(r))) return r.v
                } else {
                    var o = function(e, i) {
                            e ? delete p[t] : p[t] = i, n && n(e, i)
                        },
                        a = e.extension ? e.extension : d.extname(t);
                    if (f(a)) {
                        var h = l(t, e, o);
                        return p[t] = h, h
                    }
                    if (m(d.extname(t))) u(t, o);
                    else if (/\.(txt)$/i.test(a)) return c(t, o)
                }
            }
            var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
                },
                c = t("load-bmfont"),
                l = t("./loadTexture"),
                u = t("load-json-xhr"),
                h = t("load-img"),
                d = t("path"),
                p = {},
                f = function(t) {
                    return /\.(jpe?g|png|gif|bmp|tga|tif)$/i.test(t)
                },
                m = function(t) {
                    return /\.(json)$/i.test(t)
                },
                g = function() {};
            n.load = a, n.preload = r, n.printCache = o, window.printCache = o, e.exports = n
        }).call(this, t("_process"))
    }, {
        "./loadTexture": 6,
        _process: 137,
        "load-bmfont": 479,
        "load-img": 481,
        "load-json-xhr": 482,
        path: 500
    }],
    6: [function(t, e, i) {
        (function(i) {
            "use strict";

            function n() {}
            var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
                },
                o = t("object-assign"),
                a = {},
                s = void 0;
            e.exports = function(t, c, l) {
                if ("function" == typeof c && (l = c, c = {}), c = o({}, c), l = l || function() {}, t in a) {
                    var u = function() {
                        var e = a[t];
                        return i.nextTick(function() {
                            l(null, e)
                        }), {
                            v: e
                        }
                    }();
                    if ("object" === ("undefined" == typeof u ? "undefined" : r(u))) return u.v
                }
                var h = new n;
                h.encoding = c.encoding || THREE.LinearEncoding;
                var d = h.load(t, function(i) {
                    i.name = t, e.exports.setTextureParams(i, c), s && s.setTexture2D(i, 0), l(null, i)
                }, function(t) {}, function() {
                    var e = "Could not load texture " + t;
                    console.error(e), l(new Error(e))
                }, c);
                return a[t] = d, d
            }, e.exports.setRenderer = function(t) {
                s = t
            }, e.exports.setTextureParams = function(t, e) {
                t.needsUpdate = !0, "boolean" == typeof e.flipY && (t.flipY = e.flipY), "undefined" != typeof e.mapping && (t.mapping = e.mapping), "undefined" != typeof e.format && (t.format = e.format), t.wrapS = e.wrapS || THREE.ClampToEdgeWrapping, t.wrapT = e.wrapT || THREE.ClampToEdgeWrapping, t.minFilter = e.minFilter || THREE.LinearMipMapLinearFilter, t.magFilter = e.magFilter || THREE.LinearFilter, t.generateMipmaps = e.generateMipmaps !== !1
            }, n.prototype.load = function(t, e, i, n, r) {
                var o = new THREE.Texture;
                r && r.encoding && (o.encoding = r.encoding);
                var a = new window.Image;
                return a.onload = function() {
                    o.image = a, o.needsUpdate = !0, e(o)
                }, a.onerror = function(t) {
                    n(t)
                }, a.src = t, o
            }
        }).call(this, t("_process"))
    }, {
        _process: 137,
        "object-assign": 490
    }],
    7: [function(t, e, i) {
        "use strict";
        var n = void 0,
            r = t("ios-safe-audio-context");
        e.exports = function() {
            return n ? n : n = r()
        }
    }, {
        "ios-safe-audio-context": 470
    }],
    8: [function(t, e, i) {
        "use strict";
        var n = t("./getAudioContext"),
            r = t("web-audio-player"),
            o = (t("../util/isMobile")(), t("../util/query")()),
            a = t("defined"),
            s = t("gsap"),
            c = function() {};
        e.exports = function(t, e) {
            function i() {
                var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                if (f && !p) {
                    var e = {
                        value: 1
                    };
                    s.to(e, a(t.duration, 1), {
                        delay: t.delay,
                        value: 0,
                        onUpdate: function() {
                            f.volume = e.value
                        },
                        onComplete: function() {
                            f.dispose()
                        }
                    })
                }
            }

            function l() {
                arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                if (!p) {
                    var t = n();
                    f = r("assets/audio/ambience.mp3", {
                        loop: !0,
                        context: t
                    }), f.play(), f.node.connect(t.destination);
                    var e = {
                        value: 0
                    };
                    s.to(e, 3, {
                        value: 1,
                        onUpdate: function() {
                            f.volume = e.value
                        }
                    })
                }
            }

            function u(t) {
                var e = arguments.length <= 1 || void 0 === arguments[1] ? c : arguments[1];
                if (!p) {
                    var i = n();
                    m = r("assets/audio/chapters/" + t, {
                        context: i
                    }), m.on("load", function() {
                        console.log("Audio loaded..."), d.goToDay(), h && h.createGrid(), m.play(), m.node.connect(m.context.destination)
                    }), m.on("end", function() {
                        console.log("Audio ended..."), e()
                    })
                }
            }
            var h = (e.interactions, e.movementMarkers),
                d = e.state,
                p = o.noAudio,
                f = void 0,
                m = void 0;
            return {
                playAmbience: l,
                fadeOutAmbience: i,
                playChapter: u
            }
        }
    }, {
        "../util/isMobile": 114,
        "../util/query": 118,
        "./getAudioContext": 7,
        defined: 440,
        gsap: 465,
        "web-audio-player": 530
    }],
    9: [function(t, e, i) {
        "use strict";
        e.exports = ["Bear", "Big Horn Sheep", "Black Bear", "Bobcat", "Car", "Chipmunk", "Cougar", "Coyote", "Crow", "Deer", "Deer Mouse", "Dog", "Elk", "Fox", "Golden Eagle", "Grizzly Bear", "Hare", "Human", "Lynx", "Merganser", "Moose", "Mouse", "Pine Marten", "Raven", "Train", "Wolf", "Wolverine", "CCTV Camera", "Satellite Dish", "Rub Tree"];
    }, {}],
    10: [function(t, e, i) {
        "use strict";

        function n(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t
        }
        var r, o = {
                water: ["Merganser", "Golden Eagle", "Raven", "Moose", "Raven"],
                grass: ["Bear", "Black Bear", "Bobcat", "Chipmunk", "Cougar", "Coyote", "Crow", "Deer", "Deer Mouse", "Dog", "Elk", "Fox", "Golden Eagle", "Grizzly Bear", "Hare", "Human", "Lynx", "Merganser", "Moose", "Mouse", "Pine Marten", "Raven", "Wolf", "Wolverine", "CCTV Camera", "Satellite Dish", "Rub Tree"],
                grassDry: ["Bear", "Black Bear", "Bobcat", "Cougar", "Coyote", "Crow", "Deer", "Deer Mouse", "Elk", "Fox", "Golden Eagle", "Grizzly Bear", "Lynx", "Merganser", "Moose", "Mouse", "Pine Marten", "Raven", "Wolf", "Wolverine", "CCTV Camera", "Satellite Dish", "Rub Tree"],
                trees: ["Bear", "Black Bear", "Chipmunk", "Coyote", "Crow", "Deer", "Deer Mouse", "Elk", "Fox", "Golden Eagle", "Moose", "Mouse", "Pine Marten", "Raven", "Wolverine", "Rub Tree"],
                rocks: ["Big Horn Sheep", "Bobcat", "Cougar", "Coyote", "Crow", "Deer Mouse", "Golden Eagle", "Lynx", "Mouse", "Raven", "Wolf"],
                mountain: ["Big Horn Sheep", "Bobcat", "Golden Eagle", "Lynx", "Wolf"],
                road: ["Car"],
                railway: ["Train"],
                everyone: ["Bear", "Big Horn Sheep", "Black Bear", "Bobcat", "Car", "Chipmunk", "Cougar", "Coyote", "Crow", "Deer", "Deer Mouse", "Dog", "Elk", "Fox", "Golden Eagle", "Grizzly Bear", "Hare", "Human", "Lynx", "Merganser", "Moose", "Mouse", "Pine Marten", "Raven", "Train", "Wolf", "Wolverine", "CCTV Camera", "Satellite Dish", "Rub Tree"],
                noone: []
            },
            a = (r = {
                empty: "grass",
                placeholder: "noone"
            }, n(r, "placeholder", "noone"), n(r, "placeholder", "noone"), n(r, "greenery1", "grass"), n(r, "greenery-dry1", "grass"), n(r, "placeholder", "noone"), n(r, "placeholder", "noone"), n(r, "greenery2", "grass"), n(r, "greenery-dry2", "grass"), n(r, "placeholder", "noone"), n(r, "placeholder", "noone"), n(r, "road", "road"), n(r, "railway", "railway"), n(r, "placeholder", "noone"), n(r, "placeholder", "noone"), n(r, "greenery3", "trees"), n(r, "greenery-dry3", "trees"), n(r, "water", "water"), n(r, "placeholder", "noone"), n(r, "peak1", "mountain"), n(r, "peak2", "mountain"), n(r, "peak3", "mountain"), n(r, "peak4", "mountain"), n(r, "greenery4", "trees"), n(r, "greenery-dry4", "trees"), n(r, "placeholder", "noone"), n(r, "placeholder", "noone"), n(r, "rocks1", "rocks"), n(r, "rocks2", "rocks"), n(r, "rocks3", "rocks"), n(r, "rocks4", "rocks"), r);
        e.exports = {
            speciesInBiomes: o,
            biomesOfTileTypes: a
        }
    }, {}],
    11: [function(t, e, i) {
        "use strict";
        e.exports = ["empty", "placeholder", "placeholder", "placeholder", "greenery1", "greenery-dry1", "placeholder", "placeholder", "greenery2", "greenery-dry2", "placeholder", "placeholder", "road", "railway", "placeholder", "placeholder", "greenery3", "greenery-dry3", "water", "placeholder", "peak1", "peak2", "peak3", "peak4", "greenery4", "greenery-dry4", "placeholder", "placeholder", "rocks1", "rocks2", "rocks3", "rocks4"]
    }, {}],
    12: [function(t, e, i) {
        "use strict";

        function n() {
            return !0
        }

        function r(t, e) {
            return t === e
        }

        function o(t, e) {
            return t !== e
        }

        function a(t) {
            var e = 8 * s.indexOf(t.tileAlias || "empty");
            switch (t.type) {
                case "noRestrictions":
                    return n;
                case "restrictTo":
                    return r.bind(null, e);
                case "exclude":
                    return o.bind(null, e);
                default:
                    throw new Error("bad data.")
            }
        }
        var s = t("./mapTileTypes"),
            c = {
                noWater: {
                    type: "exclude",
                    tileAlias: "water"
                },
                road: {
                    type: "restrictTo",
                    tileAlias: "road"
                },
                railway: {
                    type: "restrictTo",
                    tileAlias: "railway"
                },
                anywhere: {
                    type: "noRestrictions"
                }
            },
            l = {};
        Object.keys(c).forEach(function(t) {
            var e = a(c[t]);
            l[t] = e
        });
        var u = {
            Bear: {
                sleepDuration: .25,
                moveDuration: .25,
                moveDistance: .25,
                moveAngleDeviation: .5,
                tileCompatibilityMethod: l.noWater
            },
            "Big Horn Sheep": {
                sleepDuration: .5,
                moveDuration: .2,
                moveDistance: .5,
                moveAngleDeviation: 1.5,
                tileCompatibilityMethod: l.noWater
            },
            "Black Bear": {
                sleepDuration: .5,
                moveDuration: .35,
                moveDistance: .25,
                moveAngleDeviation: 1,
                tileCompatibilityMethod: l.noWater
            },
            Bobcat: {
                sleepDuration: .5,
                moveDuration: .2,
                moveDistance: .5,
                moveAngleDeviation: .5,
                tileCompatibilityMethod: l.noWater
            },
            Car: {
                sleepDuration: .001,
                moveDuration: .02,
                moveDistance: .7,
                isVehicle: !0,
                moveAngleDeviation: 1e-5,
                tileCompatibilityMethod: l.road
            },
            Chipmunk: {
                sleepDuration: 1,
                moveDuration: .15,
                moveDistance: .1,
                moveAngleDeviation: 2,
                tileCompatibilityMethod: l.noWater
            },
            Cougar: {
                sleepDuration: .5,
                moveDuration: .2,
                moveDistance: .5,
                moveAngleDeviation: .5,
                tileCompatibilityMethod: l.noWater
            },
            Coyote: {
                sleepDuration: .5,
                moveDuration: .2,
                moveDistance: .5,
                moveAngleDeviation: .5,
                tileCompatibilityMethod: l.noWater
            },
            Crow: {
                sleepDuration: .25,
                moveDuration: .6,
                moveDistance: 1.5,
                moveAngleDeviation: .25,
                tileCompatibilityMethod: l.anywhere
            },
            Deer: {
                sleepDuration: .5,
                moveDuration: .15,
                moveDistance: .5,
                moveAngleDeviation: .5,
                tileCompatibilityMethod: l.noWater
            },
            "Deer Mouse": {
                sleepDuration: .5,
                moveDuration: .1,
                moveDistance: .1,
                moveAngleDeviation: 2.5,
                tileCompatibilityMethod: l.noWater
            },
            Dog: {
                sleepDuration: .2,
                moveDuration: .1,
                moveDistance: .2,
                moveAngleDeviation: 1.5,
                tileCompatibilityMethod: l.noWater
            },
            Elk: {
                sleepDuration: .5,
                moveDuration: .2,
                moveDistance: .5,
                moveAngleDeviation: .5,
                tileCompatibilityMethod: l.noWater
            },
            Fox: {
                sleepDuration: .3,
                moveDuration: .1,
                moveDistance: .3,
                moveAngleDeviation: 1.5,
                tileCompatibilityMethod: l.noWater
            },
            "Golden Eagle": {
                sleepDuration: .5,
                moveDuration: .5,
                moveDistance: 1,
                moveAngleDeviation: .25,
                tileCompatibilityMethod: l.anywhere
            },
            "Grizzly Bear": {
                sleepDuration: .5,
                moveDuration: .2,
                moveDistance: .5,
                moveAngleDeviation: .5,
                tileCompatibilityMethod: l.noWater
            },
            Hare: {
                sleepDuration: .2,
                moveDuration: .1,
                moveDistance: .2,
                moveAngleDeviation: 1.5,
                tileCompatibilityMethod: l.noWater
            },
            Human: {
                sleepDuration: 1.5,
                moveDuration: .5,
                moveDistance: .3,
                moveAngleDeviation: 1.5,
                tileCompatibilityMethod: l.noWater
            },
            Lynx: {
                sleepDuration: .5,
                moveDuration: .2,
                moveDistance: .5,
                moveAngleDeviation: .5,
                tileCompatibilityMethod: l.noWater
            },
            Merganser: {
                sleepDuration: .5,
                moveDuration: .5,
                moveDistance: 1,
                moveAngleDeviation: 1,
                tileCompatibilityMethod: l.anywhere
            },
            Moose: {
                sleepDuration: .5,
                moveDuration: .5,
                moveDistance: .2,
                moveAngleDeviation: 1,
                tileCompatibilityMethod: l.anywhere
            },
            Mouse: {
                sleepDuration: .2,
                moveDuration: .1,
                moveDistance: .1,
                moveAngleDeviation: 2.5,
                tileCompatibilityMethod: l.noWater
            },
            "Pine Marten": {
                sleepDuration: .5,
                moveDuration: .2,
                moveDistance: .5,
                moveAngleDeviation: .5,
                tileCompatibilityMethod: l.noWater
            },
            Raven: {
                sleepDuration: .5,
                moveDuration: .2,
                moveDistance: .5,
                moveAngleDeviation: .5,
                tileCompatibilityMethod: l.anywhere
            },
            Train: {
                sleepDuration: .001,
                moveDuration: .02,
                moveDistance: .9,
                isVehicle: !0,
                moveAngleDeviation: 1e-6,
                tileCompatibilityMethod: l.railway
            },
            Wolf: {
                sleepDuration: .5,
                moveDuration: .2,
                moveDistance: .5,
                moveAngleDeviation: .5,
                tileCompatibilityMethod: l.noWater
            },
            Wolverine: {
                sleepDuration: .5,
                moveDuration: .2,
                moveDistance: .5,
                moveAngleDeviation: .5,
                tileCompatibilityMethod: l.noWater
            },
            "CCTV Camera": {
                sleepDuration: 3,
                moveDuration: 1,
                moveDistance: 0,
                moveAngleDeviation: 0,
                tileCompatibilityMethod: l.anywhere
            },
            "Satellite Dish": {
                sleepDuration: 3,
                moveDuration: 1,
                moveDistance: 0,
                moveAngleDeviation: 0,
                tileCompatibilityMethod: l.anywhere
            },
            "Rub Tree": {
                sleepDuration: 3,
                moveDuration: 1,
                moveDistance: 0,
                moveAngleDeviation: 0,
                tileCompatibilityMethod: l.anywhere
            }
        };
        Object.keys(u).forEach(function(t) {
            var e = u[t];
            e.sleepDuration *= .5, e.moveDuration *= 1, e.moveDistance > 0 && (e.moveDuration /= e.moveDistance)
        }), e.exports = u
    }, {
        "./mapTileTypes": 11
    }],
    13: [function(t, e, i) {
        "use strict";
        var n = t("bigwheel"),
            r = (t("bw-analytics"), t("load-img")),
            o = t("gsap"),
            a = t("./orientation"),
            s = document.querySelector(".background");
        window.addEventListener("touchstart", function(t) {
            window.preventTouchStartDefaultForScrollFix && t.preventDefault()
        }, {
            passive: !1
        }), /(iPhone|iPad)/i.test(navigator.userAgent) && ! function() {
            var t = function() {
                setTimeout(function() {
                    window.scrollTo(0, 1)
                }, 500)
            };
            t(), window.addEventListener("orientationchange", function() {
                t()
            }, !1)
        }();
        var c = n(function(e) {
            function i() {
                o.to(s, .25, {
                    opacity: 1,
                    onComplete: n
                })
            }

            function n() {
                e({
                    overlap: !1,
                    initSection: t("../sections/preload"),
                    routes: t("./routes")
                })
            }
            o.set(s, {
                opacity: 0,
                display: "block"
            }), r("assets/images/background.jpg", i)
        });
        a.listen(), a.disable(), window.send_analytics(), e.exports = c
    }, {
        "../sections/preload": 98,
        "./orientation": 14,
        "./routes": 15,
        bigwheel: 134,
        "bw-analytics": 140,
        gsap: 465,
        "load-img": 481
    }],
    14: [function(t, e, i) {
        "use strict";

        function n() {
            if (o && "number" == typeof window.orientation) {
                var t = 90 !== Math.abs(window.orientation),
                    e = t,
                    i = document.querySelector(".rotate");
                i && (i.style.display = e ? "table" : "none")
            }
        }

        function r() {
            window.addEventListener("orientationchange", n, !1), window.addEventListener("hashchange", n, !1)
        }
        var o = !0;
        e.exports = n, e.exports.enable = function() {
            o = !0
        }, e.exports.disable = function() {
            o = !1
        }, e.exports.listen = r
    }, {}],
    15: [function(t, e, i) {
        "use strict";
        e.exports = {
            "/": t("../sections/splash"),
            "/experience/:cardboard?": {
                section: t("../sections/experience"),
                useURL: !1
            },
            404: "/",
            pushState: !1
        }
    }, {
        "../sections/experience": 97,
        "../sections/splash": 99
    }],
    16: [function(t, e, i) {
        "use strict";
        var n = t("./renderer"),
            r = void 0;
        e.exports = function(t) {
            return r ? r : r = n.createApp(t)
        }
    }, {
        "./renderer": 95
    }],
    17: [function(t, e, i) {
        "use strict";

        function n(t) {
            t = r(t, d), this.app = t.app, this.appState = t.state, this.map = t.map, this.animalWindow = t.animalWindow, this.bear = t.bear, this.distanceToBearAtStop = t.distanceToBearAtStop, o.Object3D.call(this), this.isGroundCollider = !1, this.occludesCursor = !0;
            var e = new o.RingGeometry(.2, .18, 6, 1),
                i = new o.MeshLambertMaterial({
                    color: t.colorBorder,
                    fog: !1
                });
            i.color = t.colorBorder, e.rotateX(Math.PI / 2);
            var n = new o.Mesh(e, i);
            n.renderOrder = 8e3, this.ring = n, this.defaultRingScale = 1, this.hoverRingScale = 1.25, this.ringTween = {
                scale: 0
            }, this.add(n);
            var a = new o.PlaneGeometry(.1, .1, 1, 1);
            a.vertices[0].y -= .1 / 3, a.vertices[2].x += .05, a.vertices[2].y += .05, a.vertices[3].x -= .1 / 3, a.rotateX(-Math.PI / 2), a.rotateY(Math.PI / 4);
            var l = new o.MeshLambertMaterial({
                color: t.colorArrow,
                fog: !1
            });
            l.color = t.colorArrow, this.arrow = new o.Mesh(a, l), this.arrow.position.y += .01, this.arrow.renderOrder = 8001, this.add(this.arrow), this.position.z = -t.radius, this.radius = t.radius * h.userSize, this.minDistance = t.minDistance * h.userSize, this.cameraPosition = t.cameraPosition, this.object3d = this, this.nameTag = new c(this.app, {
                owner: this,
                color: "#423e56",
                size: 2
            }), this.add(this.nameTag), this.nameTag.position.y += .25, this.nameTagOrigPosY = this.nameTag.position.y, this.nameTag.changeText("Find Bear 71"), this.nameTag.animateIn(), this.nameTag.visible = !1, this.collider = new o.Mesh(new o.PlaneGeometry(1, 1.75, 1, 1), s()), this.collider.collisionOwner = this, this.add(this.collider)
        }
        var r = t("lodash.defaults"),
            o = t("three"),
            a = t("gsap"),
            s = t("../getColliderMaterial"),
            c = t("../nameTags/Base"),
            l = t("lerp"),
            u = t("../colors"),
            h = t("../settings"),
            d = {
                app: {},
                map: {},
                bear: {},
                radius: 4,
                minDistance: 11,
                distanceToBearAtStop: 3,
                colorBorder: u.lightGray,
                colorArrow: u.gray
            };
        n.prototype = Object.create(o.Object3D.prototype), n.prototype.update = function(t, e) {
            var i = this.cameraPosition,
                n = this.bear.position,
                r = Math.atan2(n.z - i.z, n.x - i.x),
                o = i.distanceTo(n),
                a = o > this.minDistance && !this.map.isMoving && this.appState.gridInteractive > 0;
            a !== this.visible && (a ? this.map.rippleMap.registerRippler(this) : this.map.rippleMap.unregisterRippler(this), this.visible = a), this.visible && (this.position.copy(i), this.position.z += Math.sin(r) * this.radius, this.position.x += Math.cos(r) * this.radius, this.position.y = this.map.getHeightAtLocationLerped(this.position.x, this.position.z) + .05, this.rotation.y = -r - Math.PI / 2), this.isGroundCollider != this.visible;
            var s = l(this.defaultRingScale, this.hoverRingScale, this.ringTween.scale);
            this.ring.scale.set(s, s, s)
        }, n.prototype.cursorOver = function() {
            a.killTweensOf(this.nameTag.position), a.killTweensOf(this.ringTween), this.nameTag.visible = !0, a.to(this.ringTween, 1, {
                scale: 1,
                ease: Expo.easeOut
            }), a.to(this.nameTag.position, 1, {
                ease: Expo.easeOut,
                y: this.nameTagOrigPosY + .3
            })
        }, n.prototype.cursorOut = function() {
            a.killTweensOf(this.nameTag.position), a.killTweensOf(this.ringTween), a.to(this.ringTween, .5, {
                scale: 0,
                ease: Expo.easeOut
            }), this.nameTag.visible = !1, this.nameTag.position.y = this.nameTagOrigPosY
        };
        var p = new o.Vector3;
        n.prototype.onSelect = function() {
            var t = this.distanceToBearAtStop / this.cameraPosition.distanceTo(this.bear.position);
            p.copy(this.bear.position).lerp(this.cameraPosition, t);
            var e = [p.x, p.z];
            this.bear.position.distanceTo(this.cameraPosition);
            this.map.moveCamera(e, 0, void 0, void 0, !0), this.animalWindow && this.animalWindow.close()
        }, e.exports = n
    }, {
        "../colors": 68,
        "../getColliderMaterial": 69,
        "../nameTags/Base": 77,
        "../settings": 78,
        gsap: 465,
        lerp: 478,
        "lodash.defaults": 484,
        three: 520
    }],
    18: [function(t, e, i) {
        "use strict";

        function n(t) {
            t = r(t, a);
            for (var e = t.context2d, i = t.width, n = t.height, s = e.getImageData(0, 0, i, n).data, c = 0, l = 0; l < s.length; l += 4) s[l] > 0 && c++;
            for (var u = new Float32Array(2 * c), h = new Float32Array(2 * c), d = n / i, p = 0, f = 0; f < n; f++)
                for (var m = 0; m < i; m++) {
                    var l = f * i + m,
                        g = s[4 * l] > 0;
                    g && (u[p] = m / i - .5, u[p + 1] = (f / n - .5) * -d, h[p] = s[4 * l] / 256, h[p + 1] = s[4 * l + 1] / 256, p += 2)
                }
            var v = new o.BufferGeometry;
            return v.addAttribute("position", new o.BufferAttribute(u, 2)), v.addAttribute("timeOffset", new o.BufferAttribute(h, 2)), v.computeBoundingBox(), v.boundingSphere = new o.Sphere(new o.Vector3(0, .5, 0), Math.sqrt(.5)), v.boundingBox = new o.Box3(new o.Vector3((-.5), 0, .5), new o.Vector3(.5, 1, .5)), v
        }
        var r = t("lodash.defaults"),
            o = t("three"),
            a = {};
        e.exports = n
    }, {
        "lodash.defaults": 484,
        three: 520
    }],
    19: [function(t, e, i) {
        "use strict";

        function n(t) {
            t = r(t, a);
            var e = new o.ShaderMaterial({
                vertexShader: "#define GLSLIFY 1\nattribute vec2 timeOffset;\n\nuniform float timer;\nuniform float timeg;\nuniform float spriteScale;\nuniform float screenPixelHeight;\n\nvoid main() {\n  float animatedScale = min(1.0, max(min(timer - timeOffset.x, timeg - timeOffset.y), 0.0) * 5.0);\n  vec4 pos = vec4(position.x, position.y, 0.0, 1.0);\n\n  gl_Position = projectionMatrix * modelViewMatrix * pos;\n\n  vec4 eyePos = modelViewMatrix * pos;\n  vec4 projCorner = projectionMatrix * vec4(16.0, 16.0, eyePos.z, eyePos.w);\n  gl_PointSize = screenPixelHeight * projectionMatrix[1][1] / projCorner.w * animatedScale * spriteScale;\n  gl_Position = projectionMatrix * eyePos;\n}\n",
                fragmentShader: "#define GLSLIFY 1\nuniform vec3 color;\n\nvoid main() {\n  gl_FragColor = vec4(color.rgb, 1.0);\n}\n",
                transparent: !0,
                alphaTest: .5,
                depthTest: !0,
                depthWrite: !0,
                uniforms: {
                    color: {
                        type: "c",
                        value: new o.Color(16777215)
                    },
                    spriteScale: {
                        type: "f",
                        value: t.spriteScale
                    },
                    screenPixelHeight: {
                        type: "f",
                        value: t.screenPixelHeight
                    },
                    timer: {
                        type: "f",
                        value: 0
                    },
                    timeg: {
                        type: "f",
                        value: 0
                    }
                }
            });
            return ["spriteScale", "timer", "timeg", "screenPixelHeight"].forEach(function(t) {
                Object.defineProperty(e, t, {
                    set: function(e) {
                        this.uniforms[t].value = e
                    },
                    get: function() {
                        return this.uniforms[t].value
                    }
                })
            }), e
        }
        var r = t("lodash.defaults"),
            o = t("three"),
            a = {
                spriteScale: 0,
                screenPixelHeight: 320
            };
        e.exports = n
    }, {
        "lodash.defaults": 484,
        three: 520
    }],
    20: [function(t, e, i) {
        "use strict";

        function n(t) {
            t = r(t, c), o.Points.call(this, a(t), s(t))
        }
        var r = t("lodash.defaults"),
            o = t("three"),
            a = t("./getGeometry"),
            s = t("./getMaterial"),
            c = {};
        n.prototype = Object.create(o.Points.prototype), ["spriteScale", "timer", "timeg", "screenPixelHeight"].forEach(function(t) {
            Object.defineProperty(n.prototype, t, {
                set: function(e) {
                    this.material[t] = e
                },
                get: function() {
                    return this.material[t]
                }
            })
        }), e.exports = n
    }, {
        "./getGeometry": 18,
        "./getMaterial": 19,
        "lodash.defaults": 484,
        three: 520
    }],
    21: [function(t, e, i) {
        "use strict";

        function n(t) {
            t = o(t, l), this.params = t, a.Object3D.call(this);
            var e = r.load(t.pointUrl);
            e.premultiplyAlpha = !0, this.spriteTexture = e;
            var i = this;
            r.load(t.logoUrl, {
                minFilter: a.LinearFilter,
                generateMipmaps: !1
            }, function(n, r) {
                var o = r.image,
                    a = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
                a.width = Math.floor(o.width), a.height = Math.floor(o.height);
                var s = a.getContext("2d");
                s.drawImage(o, 0, 0, o.width, o.height, 0, 0, a.width, a.height);
                var l = new c({
                    context2d: s,
                    width: o.width,
                    height: o.height,
                    spriteTexture: e,
                    spriteScale: t.spriteScale,
                    screenPixelHeight: i.screenPixelHeight
                });
                i.add(l), l.renderOrder = 3e3, l.visible = !1, i.pointCloud = l, i.animateInPoints()
            });
            this.screenPixelHeight = t.screenPixelHeight
        }
        var r = t("../../assets"),
            o = t("lodash.defaults"),
            a = t("three"),
            s = t("gsap"),
            c = (t("clamp"), t("./PointCloud")),
            l = {
                logoUrl: "assets/images/b71-logo-pixels.png",
                pointUrl: "assets/images/square-full-particle.png",
                screenPixelHeight: 320,
                spriteScale: .045
            },
            u = {
                white: new a.Color(16777215),
                gray: new a.Color(4473924)
            };
        n.prototype = Object.create(a.Object3D.prototype), n.prototype.animateInPoints = function() {
            this.pointCloud.visible = !0, this.pointCloud.timeg = 1, s.to(this.pointCloud, 2.5, {
                timer: 1
            })
        }, n.prototype.animateOut = function() {
            var t = this;
            s.to(this.pointCloud, 1.5, {
                timeg: 0,
                delay: 1.5,
                onComplete: function() {
                    t.visible = !1
                }
            })
        }, n.prototype.update = function(t, e) {
            if (this.lastDayNightUsed !== e.dayNight && this.pointCloud) {
                this.lastDayNightUsed = e.dayNight;
                var i = e.dayNight;
                this.pointCloud.material.uniforms.color.value.copy(u.white).lerp(u.gray, i)
            }
        }, n.prototype.onResize = function(t, e) {
            this.screenPixelHeight = e * window.devicePixelRatio, this.pointCloud && (this.pointCloud.screenPixelHeight = e)
        }, e.exports = n
    }, {
        "../../assets": 5,
        "./PointCloud": 20,
        clamp: 144,
        gsap: 465,
        "lodash.defaults": 484,
        three: 520
    }],
    22: [function(t, e, i) {
        "use strict";

        function n() {
            THREE.Mesh.call(this, new THREE.BoxGeometry(.2, .2, .2, 1, 1, 1), new THREE.MeshBasicMaterial({
                color: 0,
                transparent: !0,
                opacity: 1,
                depthTest: !1,
                depthWrite: !1,
                side: THREE.DoubleSide
            })), this.renderOrder = 1e5
        }
        var r = t("gsap");
        n.prototype = Object.create(THREE.Mesh.prototype), n.prototype.blink = function(t, e, i) {
            var n = this.material.color;
            i && n.setRGB(1, 1, 1);
            var r = this;
            this.animateIn(function() {
                setTimeout(function() {
                    t && t(), r.animateOut(function() {
                        e(), n.setRGB(0, 0, 0)
                    })
                }, 250)
            })
        }, n.prototype.animateIn = function(t) {
            this.visible = !0, r.to(this.material, 1, {
                opacity: 1,
                onComplete: t
            })
        }, n.prototype.animateOut = function(t) {
            r.to(this.material, 1, {
                opacity: 0,
                onComplete: function() {
                    t && t(), this.visible = !1
                },
                onCompleteScope: this
            })
        }, e.exports = n
    }, {
        gsap: 465
    }],
    23: [function(t, e, i) {
        "use strict";

        function n(t) {
            t = s(t, l), this.objects = [], this.enabled = t.enabled, this.camera = t.camera, this.camera.fov *= 1.2, this.camera.updateProjectionMatrix(), this.maxAngle = t.maxAngle
        }

        function r(t) {
            if (!t.parent) {
                var e = this;
                return void setTimeout(function() {
                    r.call(e, t)
                }, 500)
            }
            if (!t.doNotChase) {
                var i = this.objects.indexOf(t);
                i === -1 && this.objects.push(t), u.set(0, 0, 0), this.camera.localToWorld(u), t.parent.worldToLocal(u), t.chaseVirtualCamPos = u.clone(), t.originalPosition = t.position.clone(), u.copy(t.originalPosition), u.sub(t.chaseVirtualCamPos), t.chaseContentAngleY = Math.atan2(u.z, u.x), t.chaseInitd = !1, t.chaseRadiusY = Math.sqrt(Math.pow(u.x, 2) + Math.pow(u.z, 2)), t.chaseAngleLastDelta = Math.sqrt(Math.pow(u.x, 2) + Math.pow(u.z, 2))
            }
        }

        function o(t) {
            var e = this.objects.indexOf(t);
            e !== -1 && this.objects.splice(e, 1)
        }

        function a(t, e) {
            if (this.enabled)
                for (var i = this.objects.length - 1; i >= 0; i--) {
                    var n = this.objects[i];
                    n.position.copy(n.originalPosition), this.camera.updateMatrixWorld(), u.set(0, 0, 0), this.camera.localToWorld(u), n.parent.worldToLocal(u), h.set(0, 0, -3), this.camera.localToWorld(h), n.parent.worldToLocal(h), h.sub(u);
                    var r = Math.atan2(h.z, h.x),
                        o = r - n.chaseContentAngleY;
                    o > Math.PI && (o -= 2 * Math.PI), o < -Math.PI && (o += 2 * Math.PI);
                    var a = o > 0 ? 1 : -1;
                    o = Math.max(0, Math.abs(o) - this.maxAngle) * a, n.chaseAngleLastDelta -= (n.chaseAngleLastDelta - o) * (n.chaseInitd ? .25 : 1), n.chaseInitd = !0, r = n.chaseContentAngleY + n.chaseAngleLastDelta, n.position.x = Math.cos(r) * n.chaseRadiusY + n.chaseVirtualCamPos.x, n.position.z = Math.sin(r) * n.chaseRadiusY + n.chaseVirtualCamPos.z, n.lookAt(n.chaseVirtualCamPos)
                }
        }
        var s = t("lodash.defaults"),
            c = t("three"),
            l = {
                maxAngle: .85,
                enabled: !1
            },
            u = new c.Vector3,
            h = new c.Vector3;
        n.prototype = {
            register: r,
            unregister: o,
            update: a
        }, e.exports = n
    }, {
        "lodash.defaults": 484,
        three: 520
    }],
    24: [function(t, e, i) {
        "use strict";

        function n(t) {
            t = a(t, c), THREE.Object3D.call(this);
            for (var e = [], i = 0; i < t.totalCircles; i++) {
                var n = new r;
                this.add(n), e.push(n)
            }
            this.circles = e, this.animSpeed = t.animSpeed, this.now = 0;
            var o = 0;
            Object.defineProperty(this, "premultiplyOpacity", {
                set: function(t) {
                    o = t, e.forEach(function(e) {
                        e.premultiplyOpacity = t
                    })
                },
                get: function() {
                    return o
                }
            })
        }

        function r() {
            THREE.Line.call(this, o(), new THREE.LineBasicMaterial({
                color: 16777215,
                transparent: !0,
                opacity: 1,
                blending: THREE.CustomBlending,
                blendEquation: THREE.AddEquation,
                blendDst: THREE.OneMinusSrcAlphaFactor,
                blendSrc: THREE.OneMinusDstColorFactor,
                depthWrite: !1
            })), this.renderOrder = 1e5, this.premultiplyOpacity = 0
        }

        function o() {
            if (!l) {
                l = new THREE.Geometry;
                for (var t = l.vertices, e = 0; e < 32; e++) {
                    var i = e / 32 * Math.PI * 2;
                    t.push(new THREE.Vector3(.5 * Math.cos(i), .5 * Math.sin(i), 0))
                }
                t.push(t[0])
            }
            return l
        }
        var a = t("lodash.defaults"),
            s = t("gsap"),
            c = {
                totalCircles: 4,
                animSpeed: .3
            };
        n.prototype = Object.create(THREE.Object3D.prototype), n.prototype.update = function(t) {
            this.now += t * this.animSpeed;
            for (var e = 0; e < this.circles.length; e++) {
                var i = (this.now + e / this.circles.length) % 1;
                this.circles[e].lerp(i)
            }
        }, n.prototype.animateIn = function(t) {
            s.to(this, 1, {
                delay: t,
                premultiplyOpacity: 1
            })
        }, n.prototype.animateOut = function() {
            s.to(this, .5, {
                premultiplyOpacity: 0
            })
        }, e.exports = n, r.prototype = Object.create(THREE.Line.prototype), r.prototype.lerp = function(t) {
            this.scale.set(t, t, t);
            var e = (1 - t) * this.premultiplyOpacity;
            this.material.color.setRGB(e, e, e), this.material.opacity = e
        };
        var l
    }, {
        gsap: 465,
        "lodash.defaults": 484
    }],
    25: [function(t, e, i) {
        "use strict";

        function n(t) {
            var e = JSON.stringify(t);
            if (!p[e]) {
                var i = new c.CircleGeometry(t.radius, 32);
                l(i, 0);
                var n = 2 * t.radius * t.xRatio,
                    r = n * t.xThicknessRatio,
                    o = new c.PlaneGeometry(n, r),
                    a = (new c.Matrix4).makeRotationFromEuler(new c.Euler(0, 0, .25 * Math.PI)),
                    s = (new c.Matrix4).makeTranslation(.005 * t.radius, 0, 0),
                    u = s.multiply(a);
                l(o, 16777215), i.merge(o, u), s = (new c.Matrix4).makeTranslation(.005 * t.radius, 0, 0), a = (new c.Matrix4).makeRotationFromEuler(new c.Euler(0, 0, Math.PI * -.25)), u = s.multiply(a), i.merge(o, u), p[e] = i
            }
            return p[e]
        }

        function r() {
            var t = new c.MeshBasicMaterial({
                color: 16777215,
                vertexColors: c.VertexColors
            });
            return t
        }

        function o(t) {
            t = s(t, d), c.Object3D.call(this);
            var e = new c.Mesh(n({
                radius: t.radius,
                xRatio: t.xRatio,
                xThicknessRatio: t.xThicknessRatio
            }), r());
            this.add(e);
            var i = 2 * t.hitAreaRadius,
                o = new c.Mesh(new c.PlaneGeometry(i, i, 1, 1), u());
            this.add(o), o.collisionOwner = this, this.onOverScale = t.onOverScale, this.normalScale = t.normalScale, this.collider = o, this.icon = e
        }

        function a(t, e) {
            h.killTweensOf(this.icon.scale), h.to(this.icon.scale, .5, {
                x: t,
                y: t,
                ease: "easeOutExpo"
            }), h.killTweensOf(this.icon.rotation), h.to(this.icon.rotation, .5, {
                z: e,
                ease: "easeOutExpo"
            })
        }
        var s = t("lodash.defaults"),
            c = t("three"),
            l = t("./utils/colorVertices"),
            u = t("./getColliderMaterial"),
            h = t("gsap"),
            d = {
                radius: .3,
                xRatio: .3,
                xThicknessRatio: .1,
                hitAreaRadius: .4,
                onOverScale: 1.15,
                normalScale: 1
            },
            p = [];
        o.prototype = Object.create(c.Object3D.prototype), o.prototype.onSelect = function() {
            console.warn("Replace this method")
        }, o.prototype.cursorOver = function() {
            a.call(this, this.onOverScale, Math.PI)
        }, o.prototype.cursorOut = function() {
            a.call(this, this.normalScale, 0)
        }, e.exports = o
    }, {
        "./getColliderMaterial": 69,
        "./utils/colorVertices": 91,
        gsap: 465,
        "lodash.defaults": 484,
        three: 520
    }],
    26: [function(t, e, i) {
        "use strict";

        function n() {
            this.registeredColors = [], this.registeredColorsForIndex = [], this.lastBlend = 0
        }

        function r(t, e, i) {
            if (this.registeredColorsForIndex.indexOf(t) === -1) {
                if (!(t instanceof THREE.Color && e instanceof THREE.Color && i instanceof THREE.Color)) throw new Error("Please cast your colors as THREE.Color objects first.");
                t.copy(i).lerp(e, this.lastBlend), this.registeredColors.push({
                    actual: t,
                    on: e,
                    off: i
                }), this.registeredColorsForIndex.push(t)
            }
        }

        function o(t) {
            var e = this.registeredColorsForIndex.indexOf(t);
            e !== -1 && (this.registeredColors.splice(e, 1), this.registeredColorsForIndex.splice(e, 1))
        }

        function a(t) {
            if (t !== this.lastBlend) {
                for (var e = 0; e < this.registeredColors.length; e++) {
                    var i = this.registeredColors[e];
                    i.actual.copy(i.off).lerp(i.on, t)
                }
                this.lastBlend = t
            }
        }

        function s(t, e) {
            var i = this.registeredColorsForIndex.indexOf(t);
            if (i !== -1) {
                var t = this.registeredColors[i];
                t.actual.copy(t.off).lerp(t.on, e)
            }
        }
        n.prototype = {
            registerColor: r,
            unregisterColor: o,
            updateAll: a,
            updateColor: s
        }, e.exports = n
    }, {}],
    27: [function(t, e, i) {
        "use strict";

        function n(t) {
            t = a(t, w), s.Object3D.call(this), this.enabled = u("cursor", !0) !== !1;
            var e = new s.Raycaster,
                i = [],
                n = t.colorNormal.clone(),
                r = .15,
                o = new s.RingGeometry(.75, .6, 6, 1);
            this.groundRingMesh = new s.Group, this.groundRingRotationQuaternion = (new s.Quaternion).setFromAxisAngle(new s.Vector3(1, 0, 0), -Math.PI / 2);
            var c = new s.MeshBasicMaterial({
                    color: n,
                    depthTest: !1,
                    depthWrite: !1,
                    side: s.DoubleSide,
                    fog: !1
                }),
                l = new s.Mesh(o, c),
                h = new s.CircleGeometry(.7, 6),
                d = new s.MeshBasicMaterial({
                    color: n,
                    depthTest: !1,
                    depthWrite: !1,
                    side: s.DoubleSide,
                    fog: !1,
                    transparent: !0,
                    opacity: .2
                }),
                p = new s.Mesh(h, d);
            this.groundRingMesh.add(l), this.groundRingMesh.add(p), this.groundRingMesh.material = c, this.circleMesh = p, this.circleMesh.material = d, this.add(this.groundRingMesh), this.appState = t.state, this.groundRingMeshActorScale = 2 * r, this.groundRingMeshDefaultScale = 1 * r, this.groundRingMesh.scale.set(this.groundRingMeshDefaultScale, this.groundRingMeshDefaultScale, this.groundRingMeshDefaultScale), this.actorTween = {
                value: 0,
                isAnimatingIn: !1,
                isAnimatingOut: !1,
                state: x.Default
            };
            var f = .175,
                m = new s.FlatShadedGeometry(new s.CylinderGeometry(.35 * r, 0, f, 6, 1)),
                g = new s.MeshLambertMaterial({
                    color: "hsl(0, 0%, 35%)",
                    shading: s.FlatShading,
                    side: s.DoubleSide,
                    fog: !1
                }),
                v = new s.Mesh(m, g);
            this.add(v), this.coneMesh = v, this.coneMeshTween = {
                scale: 0,
                isAnimatingIn: !1,
                isAnimatingOut: !1
            }, this.coneMeshPositionY = f + .15, this.coneMeshTime = 0, this.coneMesh.position.y = this.coneMeshPositionY, this.coneMesh.visible = !1;
            var y = new s.Vector2;
            this.frustumCulled = !1, this.renderOrder = 3900, this.activeAmountSpeed = 5, this.coneMesh.renderOrder = this.renderOrder, this.groundRingMesh.renderOrder = this.renderOrder, this.object3d = this, this.colliders = i, this.raycaster = e, this.ray = e.ray, this.camera = t.camera, this.interactions = t.interactions, this.color = c.color, this.colorNormal = t.colorNormal, this.colorActive = t.colorActive, this.colorActor = t.colorActor, this.colorActorDefault = this.colorActor.clone(), this.activeAmount = 0, this.oldActiveAmount = 0, this.groundRingRotateSpeed = .15, this.map = t.map, this.state = x.Default, this.rayCoord = y, this.dragPanningState = !1, this.interactions.on("tap", this._handleTap.bind(this)), this.onMoveOrDrag = this._onMoveOrDrag.bind(this), this.toggleDragPanning(!0)
        }

        function r(t) {
            var e = this;
            t !== x.Actor || this.actorTween.state === x.Actor || this.actorTween.isAnimatingIn ? t === x.Actor || this.actorTween.state !== x.Actor || this.actorTween.isAnimatingOut || (this.actorTween.isAnimatingIn = !1, this.actorTween.isAnimatingOut = !0, this.actorTween.state = x.Default, l.killTweensOf(this.actorTween), l.to(this.actorTween, .5, {
                value: 0,
                ease: "easeOutExpo",
                onComplete: function() {
                    e.actorTween.isAnimatingOut = !1, e.actorTween.state = x.Default
                }
            })) : (this.actorTween.isAnimatingIn = !0, this.actorTween.isAnimatingOut = !1, this.actorTween.state = x.Actor, l.killTweensOf(this.actorTween), l.to(this.actorTween, 1, {
                value: 1,
                ease: "easeOutExpo",
                onComplete: function() {
                    e.actorTween.isAnimatingIn = !1, e.actorTween.state = x.Actor
                }
            }))
        }

        function o(t) {
            var e = this;
            t !== x.Ground || this.coneMesh.visible || this.coneMeshTween.isAnimatingIn ? t !== x.Ground && this.coneMesh.visible && !this.coneMeshTween.isAnimatingOut && (this.coneMeshTween.isAnimatingOut = !0, this.coneMeshTween.isAnimatingIn = !1, l.killTweensOf(this.coneMeshTween), l.to(this.coneMeshTween, .5, {
                scale: 0,
                ease: "easeOutExpo",
                onComplete: function() {
                    e.coneMeshTween.isAnimatingOut = !1, e.coneMesh.visible = !1
                }
            })) : (this.coneMesh.visible = !0, this.coneMeshTween.isAnimatingIn = !0, this.coneMeshTween.isAnimatingOut = !1, l.killTweensOf(this.coneMeshTween), l.to(this.coneMeshTween, 1, {
                scale: 1,
                ease: "easeOutExpo",
                onComplete: function() {
                    e.coneMeshTween.isAnimatingIn = !1
                }
            }))
        }
        var a = t("lodash.defaults"),
            s = t("three"),
            c = (t("defined"), t("lerp")),
            l = t("gsap"),
            u = t("urlparam"),
            h = t("../settings"),
            d = (t("../../util/isVR"), new s.Vector3),
            p = new s.Quaternion,
            f = new s.Vector3,
            m = (new s.Vector3, new s.Vector3),
            g = new s.Matrix3,
            v = new s.Matrix4,
            y = new s.Vector3,
            M = 11,
            x = {
                Default: 0,
                Ground: 1,
                Actor: 2
            },
            w = {
                colorNormal: new s.Color(5855577),
                colorActive: new s.Color("#B3B3B3"),
                colorActor: new s.Color("#E6434E")
            };
        n.prototype = Object.create(s.Object3D.prototype), n.prototype._onMoveOrDrag = function(t) {
            this.rayCoord.x = t[0], this.rayCoord.y = t[1]
        }, n.prototype.toggleDragPanning = function(t) {
            t !== this.dragPanningState && (this.dragPanningState = t, t ? (this.interactions.rayEvents.addOnMove(this.onMoveOrDrag), this.interactions.rayEvents.addOnDrag(this.onMoveOrDrag)) : (this.interactions.rayEvents.removeOnMove(this.onMoveOrDrag), this.interactions.rayEvents.removeOnDrag(this.onMoveOrDrag)))
        }, n.prototype._handleTap = function() {
            this.state === x.Ground ? !this.appState.gridInteractive || this.map.isMoving || this.interactions.isModalOpen || (this.animalWindow && this.animalWindow.close(), this.map.moveCamera([this.position.x, this.position.z], void 0, void 0, void 0, !0)) : this.collisionOwner && this.collisionOwner.onSelect && this.collisionOwner.onSelect()
        }, n.prototype.update = function(t) {
            if (this.enabled) {
                this.camera.updateMatrix(), this.camera.updateMatrixWorld(), this.ray.origin.set(0, 0, 0), this.camera.localToWorld(this.ray.origin), this.raycaster.setFromCamera(this.rayCoord, this.camera), this.coneMeshTime += t;
                var e = 3,
                    i = .1,
                    n = Math.sin(this.coneMeshTime * e) * i;
                this.coneMesh.position.y = this.coneMeshPositionY + n;
                var r = Math.max(1e-5, this.appState.gridInteractive),
                    o = Math.max(1e-5, this.coneMeshTween.scale) * r;
                this.coneMesh.scale.set(o, o, o);
                var a = c(this.groundRingMeshDefaultScale, this.groundRingMeshActorScale, this.actorTween.value) * r;
                this.groundRingMesh.scale.set(a, a, a);
                var s = void 0,
                    l = this.appState.interactive > 0,
                    u = l ? this.raycaster.intersectObjects(this.colliders)[0] : null;
                u && (m.set(u.point.x, 0, u.point.z), f.set(this.ray.origin.x, 0, this.ray.origin.z), m.distanceTo(f) > M && (u = null));
                var w = M,
                    T = u ? u.object.collisionOwner || u.object : void 0;
                if (T && T.collisionEnabled !== !1) {
                    this.collisionOwner = T, s = T.isGroundCollider ? x.Ground : x.Actor, s === x.Actor ? (T.parent === this.parent ? d.copy(T.position) : (m.set(0, 0, 0), T.localToWorld(m), d.copy(m)), y.copy(this.up), this.activeActor !== T && (this.activeActor && this.activeActor.cursorOut && this.activeActor.cursorOut(), this.activeActor = T, this.activeActor ? this.colorActor.copy(this.activeActor.labelColor || this.activeActor.color || this.colorActorDefault) : this.colorActor.copy(this.colorActorDefault), this.activeActor.cursorOver && this.activeActor.cursorOver())) : (this._clearActiveCursor(), d.copy(u.point), g.getNormalMatrix(u.object.matrixWorld), y.copy(u.face.normal), y.applyMatrix3(g).normalize()), p.setFromUnitVectors(this.up, y), p.multiply(this.groundRingRotationQuaternion);
                    var _ = !this.interactions.isModalOpen && !isNaN(T.activeAmount),
                        b = T === this.lastActivatedObject;
                    _ && !b && (T.activeAmount += t * this.activeAmountSpeed, T.activeAmount >= 1 && (this.lastActivatedObject = T, T.onSelect && T.onSelect())), this.activeAmount += t * this.activeAmountSpeed, this.activeAmount > 1 && (this.activeAmount = 1)
                } else this._clearActiveCursor(), this.collisionOwner = void 0, this.activeAmount -= t * this.activeAmountSpeed, this.activeAmount < 0 && (this.activeAmount = 0), s = x.Default, d.set(0, 0, -h.cursorDistanceFromCamera), this.camera.localToWorld(d), m.set(0, 0, 0), this.updateMatrixWorld(), this.camera.localToWorld(m), this.worldToLocal(m), v.lookAt(m, this.groundRingMesh.position, this.groundRingMesh.up), p.setFromRotationMatrix(v), w = h.cursorDistanceFromCamera;
                this.state = s, this.updateState(d, p), this.oldActiveAmount !== this.activeAmount && (this.color.copy(this.colorNormal).lerp(this.colorActive, this.activeAmount), this.oldActiveAmount = this.activeAmount), this.groundRingMesh.material.color.copy(this.colorActive).lerp(this.colorActor, this.actorTween.value), this.circleMesh.material.color.copy(this.groundRingMesh.material.color), m.set(0, 0, 0), this.updateMatrixWorld(), this.camera.localToWorld(m);
                var E = c(3.5, 3.5 * (m.distanceTo(this.position) / w), .9);
                this.scale.set(E, E, E);
                var S = !0;
                this.collisionOwner && this.collisionOwner.occludesCursor && (S = !1), S !== this.visible && (S ? this.map.rippleMap.registerRippler(this) : this.map.rippleMap.unregisterRippler(this), this.visible = S)
            }
        }, n.prototype._clearActiveCursor = function() {
            this.activeActor && (this.activeActor.cursorOut && this.activeActor.cursorOut(), this.activeActor = void 0)
        }, n.prototype.updateState = function(t, e) {
            var i = this.state,
                n = this.groundRingRotateSpeed;
            this.groundRingMesh.quaternion.slerp(e, n), this.position.lerp(t, .5), o.call(this, i), r.call(this, i), i === x.Actor ? this.circleMesh.visible = !0 : this.circleMesh.visible = !1
        }, n.prototype.addCollider = function(t) {
            if (!t) throw new Error("collider must be a Mesh.");
            this.colliders.push(t)
        }, n.prototype.removeCollider = function(t) {
            var e = this.colliders.indexOf(t);
            e !== -1 && this.colliders.splice(e, 1)
        }, n.prototype.addColliders = function(t) {
            t.forEach(this.addCollider.bind(this));
        }, e.exports = n
    }, {
        "../../util/isVR": 115,
        "../settings": 78,
        defined: 440,
        gsap: 465,
        lerp: 478,
        "lodash.defaults": 484,
        three: 520,
        urlparam: 529
    }],
    28: [function(t, e, i) {
        "use strict";

        function n(t, e) {
            e = f(e, y), g.call(this, t, e);
            var i = e.weight;
            e.weight = e.weight2;
            var n = m(t, v({}, e, {
                background: !1
            }));
            n.setMaskAnimationEnabled(!0), e.weight = i, n.setText(""), this.add(n.object3d), this.text2 = n
        }

        function r() {
            var t = this.text2;
            this.text2 = this.text, this.text = t
        }

        function o(t) {
            r.call(this), this.setWeight(t), r.call(this)
        }

        function a(t) {
            g.prototype.setSize.call(this, t), this.positionText()
        }

        function s(t) {
            r.call(this), this.setSize(t), r.call(this)
        }

        function c(t) {
            g.prototype.setText.call(this, t), this.positionText()
        }

        function l(t) {
            r.call(this), this.setText(t), r.call(this), this.positionText()
        }

        function u() {
            return this.text.geometry.layout.width + this.text2.geometry.layout.width + this.pixelPadding[0] + this.pixelPadding[2]
        }

        function h() {
            var t = this.text.getComputedScale();
            this.text.object3d.position.x = (this.text.geometry.layout.width + this.pixelPadding[0]) * t, this.text2.object3d.position.x = (this.text2.geometry.layout.width + this.pixelPadding[0]) * t, this.text2.object3d.position.x += this.text.geometry.layout.width * t, "italic" === this.text2.weight && (this.text2.object3d.position.y = 3 * -t)
        }

        function d() {
            var t = g.prototype.getTextBounds.call(this);
            r.call(this);
            var e = g.prototype.getTextBounds.call(this);
            r.call(this);
            var i = this.text.getComputedScale();
            return t.max.x += e.getSize().x - (this.pixelPadding[0] + this.pixelPadding[2]) * i, t
        }

        function p(t, e) {
            g.prototype.positionBackground.call(this, t, e), this.background && (this.background.position.x -= this.pixelPadding[0] * t)
        }
        var f = t("lodash.defaults"),
            m = t("./getText"),
            g = t("./TextLabel"),
            v = (t("lerp"), t("object-assign")),
            y = (t("./meshes/RectangleWithArrow"), t("gsap"), {
                renderOrderOffset: 0,
                pixelPadding: [20, 10, 20, 10],
                color: 16777215,
                size: .85,
                backgroundColor: 0,
                backgroundOpacity: 1,
                align: "left",
                weight: null,
                weight2: "italic"
            });
        n.prototype = Object.create(g.prototype), v(n.prototype, {
            setWeight2: o,
            setSize: a,
            setSize2: s,
            setText: c,
            setText2: l,
            getTextBounds: d,
            getTextLayoutWidth: u,
            positionBackground: p,
            positionText: h
        }), e.exports = n
    }, {
        "./TextLabel": 46,
        "./getText": 72,
        "./meshes/RectangleWithArrow": 76,
        gsap: 465,
        lerp: 478,
        "lodash.defaults": 484,
        "object-assign": 490
    }],
    29: [function(t, e, i) {
        "use strict";

        function n() {
            return a || (a = "#define GLSLIFY 1\nuniform float pointSize;\n\nvoid main() {\n  gl_Position = projectionMatrix * vec4(position.xzy, 1.0);\n  gl_PointSize = pointSize;\n}\n"), a
        }

        function r() {
            return s || (s = "#define GLSLIFY 1\nuniform sampler2D texture;\nuniform float strength;\n\nvoid main() {\n  gl_FragColor = texture2D(texture, gl_PointCoord);\n  gl_FragColor.a *= strength;\n}\n"), s
        }

        function o(t) {
            t = c(t, h), l.ShaderMaterial.call(this, {
                vertexShader: n(),
                fragmentShader: r(),
                depthTest: !1,
                depthWrite: !1,
                side: l.DoubleSide,
                transparent: !0,
                uniforms: {
                    pointSize: {
                        type: "f",
                        value: t.pointSize
                    },
                    strength: {
                        type: "f",
                        value: t.strength
                    },
                    texture: {
                        type: "t",
                        value: u.load(t.mapUrl)
                    }
                }
            })
        }
        var a, s, c = t("lodash.defaults"),
            l = t("three"),
            u = t("../../../assets"),
            h = {
                mapUrl: "assets/images/ripple-normals.png",
                pointSize: 8,
                strength: .5
            };
        o.prototype = Object.create(l.ShaderMaterial.prototype), e.exports = o
    }, {
        "../../../assets": 5,
        "lodash.defaults": 484,
        three: 520
    }],
    30: [function(t, e, i) {
        "use strict";

        function n() {
            for (var t = new o.Geometry, e = 0; e < l; e++) t.vertices.push(c);
            return t
        }

        function r(t) {
            t = a(t, u), o.Points.call(this, n(), new s(t)), this.hiddenVert = c, this.queuedRipplers = [], this.frustumCulled = !1, this.regs = 0
        }
        var o = t("three"),
            a = t("lodash.defaults"),
            s = t("./RippleMaterial"),
            c = new o.Vector3(64, 64, 0),
            l = 40,
            u = {};
        r.prototype = Object.create(o.Points.prototype), r.prototype.update = function() {
            this.geometry.verticesNeedUpdate = !0
        }, r.prototype.register = function(t) {
            if (this.geometry.vertices.indexOf(t.position) !== -1 || this.queuedRipplers.indexOf(t) !== -1) return void console.warn("Already registered!");
            this.regs++;
            var e = this.geometry.vertices.indexOf(c);
            e !== -1 ? this.geometry.vertices[e] = t.position : this.queuedRipplers.push(t)
        }, r.prototype.unregister = function(t) {
            var e = this.geometry.vertices.indexOf(t.position),
                i = this.queuedRipplers.indexOf(t);
            e !== -1 ? (this.regs--, this.queuedRipplers.length > 0 ? this.geometry.vertices[e] = this.queuedRipplers.shift().position : this.geometry.vertices[e] = c) : i !== -1 ? this.queuedRipplers.splice(i, 1) : console.warn("Can't unregister!")
        }, e.exports = r
    }, {
        "./RippleMaterial": 29,
        "lodash.defaults": 484,
        three: 520
    }],
    31: [function(t, e, i) {
        "use strict";

        function n(t) {
            t = o(t, c);
            var e = new r.Scene,
                i = new a(t);
            e.add(i);
            var n = new r.OrthographicCamera(0, 128, 128, 0, 32, (-32));
            e.add(n), r.WebGLRenderTarget.call(this, t.size, t.size, t.imageOptions), this.texture.generateMipmaps = !1, this.ripplePointCloud = i, this.ripplers = [], this.renderer = t.renderer, this.camera = n, this.scene = e;
            var s = new r.Mesh(new r.PlaneGeometry(1, 1, 1, 1), new r.MeshBasicMaterial({
                transparent: !0,
                opacity: .05,
                color: new r.Color(.5, .5, .5),
                side: r.DoubleSide
            }));
            s.scale.set(128, 128, 128), s.position.set(64, 64, 6), e.add(s), this.testTime = 0, this.update = this.firstUpdate
        }
        var r = t("three"),
            o = t("lodash.defaults"),
            a = t("./RipplePointCloud"),
            s = {
                gray: new r.Color(8355711),
                black: new r.Color(0)
            },
            c = {
                map: null,
                renderer: null,
                size: 1024,
                imageOptions: {
                    minFilter: r.NearestFilter,
                    magFilter: r.NearestFilter,
                    depthBuffer: !1,
                    stencilBuffer: !1,
                    wrapS: r.ClampToEdgeWrapping,
                    wrapT: r.ClampToEdgeWrapping,
                    format: r.RGBFormat,
                    flipY: !1
                }
            };
        n.prototype = Object.create(r.WebGLRenderTarget.prototype), n.prototype.firstUpdate = function(t) {
            this.renderer.setClearColor(s.gray, 1), this.renderer.render(this.scene, this.camera, this), this.renderer.setClearColor(s.black, 1), this.update = this.updateReal
        }, n.prototype.updateReal = function(t) {
            this.ripplePointCloud.update(), this.renderer.setClearColor(s.gray, 1), this.renderer.autoClear = !1, this.renderer.render(this.scene, this.camera, this), this.renderer.autoClear = !0, this.renderer.setClearColor(s.black, 1)
        }, n.prototype.registerRippler = function(t) {
            this.ripplePointCloud.register(t)
        }, n.prototype.unregisterRippler = function(t) {
            this.ripplePointCloud.unregister(t)
        }, n.prototype.generatePreviewObject = function() {
            return new r.Mesh(new r.PlaneGeometry(1, 1, 1, 1), new r.MeshBasicMaterial({
                map: this.texture
            }))
        }, e.exports = n
    }, {
        "./RipplePointCloud": 30,
        "lodash.defaults": 484,
        three: 520
    }],
    32: [function(t, e, i) {
        "use strict";

        function n(t) {
            var e = .5 / t;
            if (!r) {
                for (var i = t + 1, n = i * i, a = new Float32Array(2 * n), s = 0; s < i; s++)
                    for (var c = 0; c < i; c++) {
                        var l = 2 * (s * i + c);
                        a[l] = c / t - .5 + e, a[l + 1] = s / t - .5 + e
                    }
                for (var u = t * t * 2, h = new Uint32Array(3 * u), d = 0, s = 0; s < t; s++)
                    for (var c = 0; c < t; c++) h[d] = s * i + c, h[d + 1] = (s + 1) * i + c, h[d + 2] = s * i + c + 1, h[d + 3] = s * i + c + 1, h[d + 5] = (s + 1) * i + c + 1, h[d + 4] = (s + 1) * i + c, d += 6;
                r = new o.BufferGeometry, r.addAttribute("position", new o.BufferAttribute(a, 2)), r.setIndex(new o.BufferAttribute(h, 1)), r.boundingSphere = new o.Sphere(new o.Vector3(0, .5, 0), Math.sqrt(.5)), r.boundingBox = new o.Box3(new o.Vector3((-.5), 0, (-.5)), new o.Vector3(.5, 1, .5))
            }
            return r
        }
        var r, o = t("three");
        e.exports = n
    }, {
        three: 520
    }],
    33: [function(t, e, i) {
        "use strict";

        function n() {
            return a || (a = "#define GLSLIFY 1\nuniform sampler2D mapTexture;\nuniform vec3 sectionPosition;\nuniform vec3 globalScale;\nuniform float spriteSpacing;\nuniform float fogFar;\nuniform float fogNear;\n\nvarying float fogFactor;\n\nvoid main() {\n\n  vec2 worldSpaceLocalPos = position.xy * globalScale.xz;\n  vec2 worldSpaceGlobalPos = worldSpaceLocalPos + sectionPosition.xz;\n  vec2 mapCoord = worldSpaceGlobalPos / spriteSpacing;\n  vec2 fogCoord = worldSpaceGlobalPos - cameraPosition.xz;\n\n  vec4 mapTexel = texture2D(mapTexture, mapCoord);\n\n  vec4 pos = vec4(position.x, mapTexel.b, position.y, 1.0);\n\n  vec4 eyePos = modelViewMatrix * pos;\n  gl_Position = projectionMatrix * eyePos;\n  \n  float depth = length(worldSpaceGlobalPos - cameraPosition.xz) * 0.55;\n  fogFactor = smoothstep( fogNear, fogFar, depth );\n}\n"), a
        }

        function r() {
            return s || (s = "#define GLSLIFY 1\nuniform vec3 color;\nuniform vec3 skyColor;\nvarying float fogFactor;\n\nvoid main() {\n  gl_FragColor = vec4(color, 1.0);\n  gl_FragColor.rgb += (skyColor - gl_FragColor.rgb) * fogFactor;\n}\n"), s
        }

        function o(t) {
            if (t = c(t, u), !t.mapTexture) throw new Error("You must provide a map texture.");
            var e = new l.ShaderMaterial({
                vertexShader: n(),
                fragmentShader: r(),
                depthTest: !0,
                depthWrite: !0,
                uniforms: {
                    mapTexture: {
                        type: "t",
                        value: t.mapTexture
                    },
                    fogNear: {
                        type: "f",
                        value: t.fogNear
                    },
                    fogFar: {
                        type: "f",
                        value: t.fogFar
                    },
                    color: {
                        type: "c",
                        value: t.color
                    },
                    skyColor: {
                        type: "c",
                        value: t.fogColor
                    },
                    spriteSpacing: {
                        type: "f",
                        value: t.spriteSpacing
                    },
                    globalScale: {
                        type: "v3",
                        value: t.globalScale
                    },
                    globalPosition: {
                        type: "v3",
                        value: t.globalPosition
                    },
                    sectionPosition: {
                        type: "v3",
                        value: t.sectionPosition
                    }
                }
            });
            return Object.defineProperty(e, "spriteSpacing", {
                set: function(t) {
                    this.uniforms.spriteSpacing.value = t
                }
            }), e
        }
        var a, s, c = t("lodash.defaults"),
            l = t("three"),
            u = {
                color: new l.Color(65535),
                fogColor: new l.Color(16711680),
                fogNear: 6,
                fogFar: 12
            };
        e.exports = o
    }, {
        "lodash.defaults": 484,
        three: 520
    }],
    34: [function(t, e, i) {
        "use strict";

        function n(t) {
            t = r(t, c);
            var e = {
                mapTexture: t.map.mapTexture,
                globalPosition: t.globalPosition,
                sectionPosition: t.sectionPosition,
                globalScale: t.sectionScale,
                color: t.color,
                fogColor: t.fogColor,
                fogNear: t.fogNear,
                fogFar: t.fogFar,
                spriteSpacing: t.spriteSpacing
            };
            o.Mesh.call(this, a(t.pointsPerAxis), s(e))
        }
        var r = t("lodash.defaults"),
            o = t("three"),
            a = t("./getGeometry"),
            s = t("./getMaterial"),
            c = {
                pointsPerAxis: 32
            };
        n.prototype = Object.create(o.Mesh.prototype), Object.defineProperty(n.prototype, "spriteSpacing", {
            set: function(t) {
                this.material.spriteSpacing = t
            }
        }), e.exports = n
    }, {
        "./getGeometry": 32,
        "./getMaterial": 33,
        "lodash.defaults": 484,
        three: 520
    }],
    35: [function(t, e, i) {
        "use strict";

        function n(t) {
            t = r(t, a);
            for (var e = t.pointsPerAxis, i = t.drawSortX, n = t.drawSortY, s = 0, c = Math.pow(t.borderRadius, 2), l = [], u = new Float32Array(Math.pow(e, 2)), h = new Float32Array(Math.pow(e, 2)), d = 0; d < e; d++)
                for (var p = 0; p < e; p++) {
                    var f = d * e + p,
                        m = (p + .5) / e - .5,
                        g = (d + .5) / e - .5,
                        v = Math.pow(m + i, 2) + Math.pow(g + n, 2);
                    v <= c && (s++, l.push(f), u[f] = m, h[f] = g)
                }
            for (var y = new Float32Array(2 * s), M = new Array(s), d = 0; d < e; d++)
                for (var p = 0; p < e; p++) {
                    var f = d * e + p;
                    l.indexOf(f) !== -1 && (M[f] = {
                        i: f,
                        dist: Math.abs(u[f] + i) + Math.abs(h[f] + n)
                    })
                }
            M = M.sort(function(t, e) {
                return e.dist - t.dist
            }).map(function(t) {
                return t.i
            });
            for (var x = new Array(s), f = 0; f < s; f++) x[M[f]] = f;
            for (var d = 0; d < e; d++)
                for (var p = 0; p < e; p++) {
                    var f = d * e + p;
                    if (l.indexOf(f) !== -1) {
                        var w = 2 * x[f];
                        y[w] = u[f], y[w + 1] = h[f]
                    }
                }
            var T = new o.BufferGeometry;
            return T.addAttribute("position", new o.BufferAttribute(y, 2)), T.boundingSphere = new o.Sphere(new o.Vector3(0, .5, 0), Math.sqrt(.5)), T.boundingBox = new o.Box3(new o.Vector3((-.5), 0, (-.5)), new o.Vector3(.5, 1, .5)), T
        }
        var r = t("lodash.defaults"),
            o = t("three"),
            a = {
                pointsPerAxis: 20,
                drawSortX: 0,
                drawSortY: 0,
                borderRadius: 2
            };
        e.exports = n
    }, {
        "lodash.defaults": 484,
        three: 520
    }],
    36: [function(t, e, i) {
        "use strict";

        function n(t) {
            if (t = r(t, c), !t.mapTexture) throw new Error("You must provide a map texture.");
            var e = new o.ShaderMaterial({
                vertexShader: "#define GLSLIFY 1\nuniform sampler2D mapTexture;\nuniform sampler2D rippleTexture;\nuniform vec3 globalPosition;\nuniform vec3 sectionPosition;\nuniform vec3 globalScale;\nuniform float screenPixelHeight;\nuniform float spriteScale;\nuniform float spriteSpacing;\nuniform float fogFar;\nuniform float fogNear;\nuniform float fogDistanceScale;\n\nvarying float uvOffsetX;\nvarying float fogFactor;\n\nvoid main() {\n\n  vec2 worldSpaceLocalPos = position.xy * globalScale.xz;\n  vec2 worldSpaceGlobalPos = worldSpaceLocalPos + sectionPosition.xz;\n  vec2 mapCoord = worldSpaceGlobalPos / spriteSpacing;\n  vec4 rippleTexel = texture2D(rippleTexture, mapCoord);\n  vec4 mapTexel = texture2D(mapTexture, mapCoord);\n\n  vec4 pos = vec4(position.x, mapTexel.r, position.y, 1.0);\n\n  pos.x += rippleTexel.r * 0.1 - 0.05;\n  pos.z += rippleTexel.g * 0.1 - 0.05;\n\n  vec4 eyePos = modelViewMatrix * pos;\n  vec4 projCorner = projectionMatrix * vec4(16.0, 16.0, eyePos.z, eyePos.w);\n  gl_PointSize = screenPixelHeight * projectionMatrix[1][1] / projCorner.w * spriteScale * (mapTexel.g + 0.1);\n  gl_Position = projectionMatrix * eyePos;\n\n  uvOffsetX = mapTexel.g * 0.996;\n\n  float depth = length(worldSpaceGlobalPos - cameraPosition.xz) * fogDistanceScale;\n  fogFactor = smoothstep( fogNear, fogFar, depth );\n  float centerDist = max(abs(mapCoord.x - 0.5), abs(mapCoord.y - 0.5));\n  if(centerDist > 0.438 ) {\n   fogFactor = max(fogFactor, 0.8);\n  }\n}",
                fragmentShader: "#define GLSLIFY 1\nuniform sampler2D spritesheetTexture;\n\nuniform float nightTime;\n\nuniform vec3 skyColor;\nvarying float uvOffsetX;\nvarying float fogFactor;\n\nvarying vec4 texel;\n\nvoid main() {\n  vec2 uv = vec2(gl_PointCoord.x / 32.0 + uvOffsetX, 1.0 - gl_PointCoord.y);\n  gl_FragColor = texture2D(spritesheetTexture, uv) + vec4(nightTime, nightTime, nightTime, 0.0);\n\n  if (gl_FragColor.a < 0.25) {\n    discard;\n  }\n  //unpremultiply for really nice edges\n  gl_FragColor.rbg /= gl_FragColor.a;\n  gl_FragColor.rgb += (skyColor - gl_FragColor.rgb) * fogFactor;\n//  gl_FragColor.rgb = texel.rgb;\n}",
                transparent: !0,
                alphaTest: .5,
                depthTest: !0,
                depthWrite: !1,
                uniforms: {
                    mapTexture: {
                        type: "t",
                        value: t.mapTexture
                    },
                    rippleTexture: {
                        type: "t",
                        value: t.rippleTexture
                    },
                    spritesheetTexture: {
                        type: "t",
                        value: t.spritesheetTexture
                    },
                    nightTime: {
                        type: "f",
                        value: t.nightTime
                    },
                    screenPixelHeight: {
                        type: "f",
                        value: t.screenPixelHeight
                    },
                    spriteScale: {
                        type: "f",
                        value: t.spriteScale
                    },
                    spriteSpacing: {
                        type: "f",
                        value: t.spriteSpacing
                    },
                    fogNear: {
                        type: "f",
                        value: t.fogNear
                    },
                    fogFar: {
                        type: "f",
                        value: t.fogFar
                    },
                    skyColor: {
                        type: "c",
                        value: t.fogColor
                    },
                    globalScale: {
                        type: "v3",
                        value: t.globalScale
                    },
                    globalPosition: {
                        type: "v3",
                        value: t.globalPosition
                    },
                    cameraPosition: {
                        type: "v3",
                        value: t.cameraPosition
                    },
                    sectionPosition: {
                        type: "v3",
                        value: t.sectionPosition
                    },
                    fogDistanceScale: {
                        type: "f",
                        value: s() ? .7 : 1.95
                    }
                }
            });
            return ["spriteSpacing", "spriteScale", "screenPixelHeight", "nightTime"].forEach(function(t) {
                Object.defineProperty(e, t, {
                    set: function(e) {
                        this.uniforms[t].value = e
                    }
                })
            }), a("sprites", !0) || (e.visible = !1), e
        }
        var r = t("lodash.defaults"),
            o = t("three"),
            a = t("urlparam"),
            s = t("../../../../util/isDesktop"),
            c = {
                fogColor: new o.Color(16711680),
                spriteSpacing: .5,
                nightTime: 0,
                screenPixelHeight: 320,
                fogNear: 10,
                fogFar: 12
            };
        e.exports = n
    }, {
        "../../../../util/isDesktop": 112,
        "lodash.defaults": 484,
        three: 520,
        urlparam: 529
    }],
    37: [function(t, e, i) {
        "use strict";

        function n(t) {
            t = r(t, c);
            var e = Math.floor(Math.sqrt(t.pointCount)),
                i = {
                    pointsPerAxis: e,
                    drawSortX: t.drawSortX,
                    drawSortY: t.drawSortY,
                    borderRadius: t.borderRadius
                },
                n = {
                    mapTexture: t.map.mapTexture,
                    rippleTexture: t.rippleTexture,
                    spritesheetTexture: t.map.spritesheetTexture,
                    globalPosition: t.globalPosition,
                    cameraPosition: t.cameraPosition,
                    sectionPosition: t.sectionPosition,
                    globalScale: t.sectionScale,
                    fogColor: t.fogColor,
                    fogNear: t.fogNear,
                    fogFar: t.fogFar,
                    spriteScale: t.spriteScale,
                    spriteSpacing: t.spriteSpacing
                };
            o.Points.call(this, a(i), s(n))
        }
        var r = t("lodash.defaults"),
            o = t("three"),
            a = t("./getGeometry"),
            s = t("./getMaterial"),
            c = {
                pointCount: 400,
                spriteSpacing: .5
            };
        n.prototype = Object.create(o.Points.prototype), ["spriteSpacing", "spriteScale", "screenPixelHeight", "nightTime"].forEach(function(t) {
            Object.defineProperty(n.prototype, t, {
                set: function(e) {
                    this.material[t] = e
                }
            })
        }), e.exports = n
    }, {
        "./getGeometry": 35,
        "./getMaterial": 36,
        "lodash.defaults": 484,
        three: 520
    }],
    38: [function(t, e, i) {
        "use strict";

        function n(t) {
            if (t = r(t, c), !t.map) throw new Error("You must provide a map");
            o.Object3D.call(this);
            var e = this.position.clone(),
                i = new o.Vector3(t.offsetX, 0, t.offsetY);
            t.globalPosition = e, t.sectionPosition = this.position, t.sectionScale = this.scale;
            var n = new a(t);
            this.add(n), n.renderOrder = t.renderOrder, t.color = t.groundColor;
            var l = new s(t);
            this.add(l), l.position.y = t.groundPlaneOffset, this.cameraPosition = t.cameraPosition, this.globalPosition = e, this.pointCloud = n, this.groundPlane = l, this.colliderPlane = l, this.sectionOffsetPosition = i, this.spritesPerMeter = t.spritesPerMeter
        }
        var r = t("lodash.defaults"),
            o = t("three"),
            a = t("./PointCloud"),
            s = t("./GroundPlane"),
            c = {
                map: null,
                size: 4,
                pointCount: 400,
                groundPlaneOffset: -.05
            };
        n.prototype = Object.create(o.Object3D.prototype), Object.defineProperty(n.prototype, "spriteSpacing", {
            set: function(t) {
                this.pointCloud.spriteSpacing = t, this.groundPlane.spriteSpacing = t
            }
        }), ["spriteScale", "screenPixelHeight", "nightTime"].forEach(function(t) {
            Object.defineProperty(n.prototype, t, {
                set: function(e) {
                    this.pointCloud[t] = e
                }
            })
        }), n.prototype.update = function() {
            this.position.x = this.cameraPosition.x + this.sectionOffsetPosition.x, this.position.z = this.cameraPosition.z + this.sectionOffsetPosition.z, this.position.x = Math.round(this.position.x * this.spritesPerMeter) / this.spritesPerMeter, this.position.z = Math.round(this.position.z * this.spritesPerMeter) / this.spritesPerMeter, this.globalPosition.copy(this.position).add(this.cameraPosition)
        }, e.exports = n
    }, {
        "./GroundPlane": 34,
        "./PointCloud": 37,
        "lodash.defaults": 484,
        three: 520
    }],
    39: [function(t, e, i) {
        "use strict";

        function n() {}

        function r(t) {
            t = u(t, C), t.groundPlaneOffset /= t.elevationScale;
            var e = t.scene;
            d.Object3D.call(this), this.emitter = new v, this.isMoving = !1, this.LOADED = "loaded";
            var i = [],
                n = [];
            this.imageWidth = 1024, this.imageHeight = 1024;
            var r = t.spritesPerMeter,
                o = this,
                a = l.load(t.mapUrl, function(e, i) {
                    function s(t, e, i) {
                        var n = t.positionIndices.indexOf(e);
                        n === -1 && (n = t.positionIndices.length, t.positionIndices.push(e), t.connections.push([])), t.connections[n].push(i), A++
                    }
                    a.magFilter = d.NearestFilter, a.minFilter = d.NearestFilter, a.flipY = !1, a.generateMipmaps = !1, a.needsUpdate = !0;
                    var c = i.image,
                        l = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
                    l.width = Math.floor(c.width), l.height = Math.floor(c.height), o.imageWidth - l.width, o.imageHeight - l.height, console.log("beginning caching of map to typed arrays");
                    var u = l.getContext("2d");
                    if (u.drawImage(c, 0, 0, c.width, c.height, 0, 0, l.width, l.height), o.context2d = u, o.updateMapForCamera(), c.width !== c.height) throw new Error("Image not square. Nonsquare maps not supported.");
                    b.forEach(function(t) {
                        t.spriteSpacing = c.width / r
                    });
                    for (var h = u.getImageData(0, 0, o.imageWidth, o.imageHeight).data, p = o.imageWidth * o.imageHeight, f = new Float32Array(p), m = new Uint8Array(p), g = t.elevationScale, v = Date.now(), y = 0; y < p; y++) f[y] = h[4 * y] / 255 * g, m[y] = h[4 * y + 1];
                    o.heightsTable = f, o.tileIndexTable = m, o.getHeightAtLocation = o.getHeightAtLocationFast, o.getTileIndexAtLocation = o.getTileIndexAtLocationFast, o.getRandomSampleOnEdgeOfView = o.getRandomSampleOnEdgeOfViewFast, console.log("checkin caching of map to typed arrays: " + (Date.now() - v) + "ms");
                    var w = {},
                        T = [M, x];
                    T.forEach(function(t) {
                        w[t] = {
                            positionIndices: [],
                            connections: []
                        }
                    });
                    for (var _ = o.imageWidth, E = o.imageHeight, S = [{
                            x: -1,
                            y: -1
                        }, {
                            x: 0,
                            y: -1
                        }, {
                            x: 1,
                            y: -1
                        }, {
                            x: -1,
                            y: 0
                        }].map(function(t) {
                            return t.y * _ + t.x
                        }), D = S.length, A = 0, N = 0; N < E; N++)
                        for (var L = 0; L < _; L++) {
                            var y = N * _ + L,
                                I = m[y];
                            if (T.indexOf(I) !== -1)
                                for (var C = 0; C < D; C++) {
                                    var j = (y + S[C] + p) % p,
                                        O = m[j];
                                    O === I && (s(w[I], y, j), s(w[I], j, y))
                                }
                        }
                    var P = o.spritesPerMeter,
                        z = 3;
                    Object.keys(w).forEach(function(t, e) {
                        var i = w[t],
                            n = i.connections,
                            r = i.positionIndices,
                            a = r.map(function(t, e) {
                                var i = t % _ / P + .5 / P,
                                    n = ~~(t / _) / P + .5 / P,
                                    r = new d.Vector3(i, o.getHeightAtLocation(i, n), n);
                                return r.index = t, r
                            });
                        i.vertices = a;
                        for (var s = 0; s < z; s++) {
                            var c = a.map(function(t) {
                                var e = t.clone(),
                                    i = r.indexOf(t.index);
                                return n[i].forEach(function(t) {
                                    e.add(a[r.indexOf(t)])
                                }), e.multiplyScalar(1 / (1 + n[i].length)), e
                            });
                            a.forEach(function(t, e) {
                                var i = r.indexOf(t.index);
                                t.x = c[i].x, t.z = c[i].z, t.y = Math.max(t.y, o.getHeightAtLocation(t.x, t.z))
                            })
                        }
                    }), o.roadlikeConnections = w, console.log(A), console.log("completed caching of map to typed arrays: " + (Date.now() - v) + "ms"), o.camera.blindfold.animateOut(), o.isReady = !0, n.forEach(function(t) {
                        t()
                    }), o.emitter.emit(o.LOADED)
                });
            this.mapTexture = a;
            var h = l.load(t.spritesheetUrl);
            h.premultiplyAlpha = !0, this.spritesheetTexture = h;
            for (var p = (Math.pow(t.segments, 2), t.size / t.segments), f = Math.floor(p * r), m = new c({
                    map: this,
                    renderer: t.renderer
                }), g = t.size / t.segments, y = .5 * t.size, w = {
                    cameraPosition: t.cameraPosition,
                    map: this,
                    groundPlaneOffset: t.groundPlaneOffset,
                    fogFar: .5 * t.size / D,
                    fogNear: .5 * t.size * t.fogAmt / D,
                    size: p,
                    borderRadius: y / p,
                    pointCount: Math.pow(f, 2),
                    spriteSpacing: 1024 / r,
                    spritesPerMeter: r,
                    groundColor: t.groundColor,
                    fogColor: t.fogColor,
                    spriteScale: t.spriteScale,
                    rippleTexture: m.texture
                }, T = t.size / (f * t.segments), _ = .5 * T, b = [], E = 0; E < t.segments; E++)
                for (var S = 0; S < t.segments; S++) {
                    var A = (S + .5) * g - y,
                        N = (E + .5) * g - y;
                    w.renderOrder = 1e3 - (Math.abs(A) + Math.abs(N)), w.drawSortX = A / g, w.drawSortY = N / g, w.debug = E === S && 2 === E, w.offsetX = A, w.offsetY = N;
                    var L = new s(w);
                    e.add(L);
                    var I = p;
                    L.scale.set(I, t.elevationScale, I), b.push(L), L.spriteScale = t.spriteScale
                }
            this.sections = b, this.camera = t.camera, this.scene = t.scene, this.cameraPosition = t.cameraPosition, this.pointSpacing = T, this.pointSpacingHalf = _, this.spritesPerMeter = r, this.spriteSize = 1 / r, this.cameraElevationDamped = 0, this.cameraElevation = 0, this.onMapUpdateCallbacks = i, this.rippleMap = m, this.elevationScale = t.elevationScale, this.groundColor = t.groundColor, this.spriteScaleOriginal = t.spriteScale, this.visibleDistance = y, this.onReadyCallbacks = n
        }

        function o(t, e) {
            return (Math.round(Math.atan2(e, t) * k) + 16) % 16
        }

        function a(t, e) {
            return t.distFromOffsetSqr - e.distFromOffsetSqr
        }
        var s = t("./Section"),
            c = t("./RippleMap"),
            l = t("../../assets"),
            u = t("lodash.defaults"),
            h = t("urlparam"),
            d = t("three"),
            p = t("gsap"),
            f = t("clamp"),
            m = t("lerp"),
            g = t("events"),
            v = g.EventEmitter,
            y = t("../../data/mapTileTypes"),
            M = 8 * y.indexOf("road"),
            x = 8 * y.indexOf("railway"),
            w = new d.Vector3,
            T = new d.Vector3,
            _ = t("../settings"),
            b = _.scaleAll,
            E = h("map", "map"),
            S = h("spritesheet", "spritesheet"),
            D = _.userSize,
            A = _.spriteScale,
            N = _.elevation,
            L = _.mapSize,
            I = _.mapSegments,
            C = {
                size: L * b,
                groundPlaneOffset: -.08 * b,
                segments: I,
                spritesPerMeter: 8 / b,
                elevationScale: N * b,
                spriteScale: A * b,
                mapUrl: "assets/images/" + E + ".png",
                spritesheetUrl: "assets/images/" + S + ".png",
                groundColor: new d.Color(32767),
                fogColor: new d.Color(16777215),
                fogAmt: .5
            };
        r.prototype.onReady = function(t) {
            this.onReadyCallbacks.push(t)
        }, r.prototype.updateMapForCamera = function(t) {
            this.sections.forEach(function(t) {
                t.update()
            });
            for (var e = 0; e < this.onMapUpdateCallbacks.length; e++) this.onMapUpdateCallbacks[e]()
        }, Object.defineProperty(r.prototype, "screenPixelHeight", {
            set: function(t) {
                this.sections.forEach(function(e) {
                    e.screenPixelHeight = t
                })
            }
        }), r.prototype.update = function(t, e, i) {
            if (this.lastDayNightUsed !== e.dayNight || i) {
                this.lastDayNightUsed = e.dayNight;
                var n = e.dayNight,
                    r = this.spriteScaleOriginal;
                this.sections.forEach(function(t) {
                    t.spriteScale = r * (.2 + .8 * n) * (1 - e.bleakness), t.nightTime = 1 - n
                })
            }
            this.rippleMap.update(t)
        }, r.prototype.getHeightAtLocation = function(t, e) {
            return 0
        }, r.prototype.getHeightAtLocationFast = function(t, e) {
            return this.heightsTable[~~(t * this.spritesPerMeter) + ~~(e * this.spritesPerMeter) * this.imageWidth]
        }, r.prototype.getHeightAtLocationLerped = function(t, e) {
            t *= this.spritesPerMeter, e *= this.spritesPerMeter;
            var i = Math.floor(t),
                n = Math.ceil(t),
                r = Math.floor(e),
                o = Math.ceil(e),
                a = this.heightsTable[i + r * this.imageWidth],
                s = this.heightsTable[n + r * this.imageWidth],
                c = this.heightsTable[i + o * this.imageWidth],
                l = this.heightsTable[n + o * this.imageWidth],
                u = m(m(a, s, t - i), m(c, l, t - i), e - r);
            return u
        }, r.prototype.getTileIndexAtLocation = function(t, e) {
            return 0
        }, r.prototype.getTileIndexAtLocationFast = function(t, e) {
            return this.tileIndexTable[~~(t * this.spritesPerMeter) + ~~(e * this.spritesPerMeter) * this.imageWidth]
        }, r.prototype.getIndexOfPosition = function(t) {
            return ~~(t.x * this.spritesPerMeter) + ~~(t.z * this.spritesPerMeter) * this.imageWidth
        }, r.prototype.getPositionFromLocation = function(t, e) {
            return new d.Vector3(t, this.getHeightAtLocation(t, e), e)
        }, r.prototype.moveCamera = function(t, e) {
            function i() {
                h.isMoving = !1, r()
            }
            var r = arguments.length <= 2 || void 0 === arguments[2] ? n : arguments[2],
                o = arguments[3],
                a = arguments[4];
            this.isMoving = !0;
            var s = w.set(t[0], void 0 !== o ? o : this.getHeightAtLocation(t[0], t[1]), t[1]);
            if (void 0 === e || null === e) {
                var c = T.copy(this.cameraPosition);
                c.y = s.y;
                var l = c.distanceTo(s),
                    u = 2.1;
                e = l / u
            }
            p.killTweensOf(this.cameraPosition);
            var h = this;
            e > 0 ? p.to(this.cameraPosition, e, {
                x: s.x,
                y: s.y,
                z: s.z,
                ease: _.cameraMovementEasingFunction,
                onUpdate: this.updateMapForCamera,
                onUpdateScope: this,
                onComplete: i
            }) : this.camera.blindfold.blink(function() {
                h.cameraPosition.copy(s), h.updateMapForCamera()
            }, i, a)
        }, r.prototype.stopMovingCamera = function() {
            p.killTweensOf(this.cameraPosition)
        }, r.prototype.addOnUpdateCallback = function(t) {
            this.onMapUpdateCallbacks.push(t)
        }, r.prototype.getColliderPlanes = function() {
            return this.sections.map(function(t) {
                return t.colliderPlane
            })
        };
        var j = new d.Vector2,
            O = new d.Vector3,
            P = {
                imagePos: j,
                worldPos: O,
                sample: [0, 0, 0, 255]
            };
        r.prototype.getRandomSampleOnEdgeOfView = function() {
            return P
        };
        var z = new d.Vector2,
            R = new d.Vector2;
        r.prototype.getRandomSampleOnEdgeOfViewFast = function() {
            var t = Math.atan2(this.cursor.position.z - this.cameraPosition.z, this.cursor.position.x - this.cameraPosition.x);
            t += (Math.random() - .5) * Math.PI * 2, z.set(Math.cos(t), Math.sin(t)), z.normalize().multiplyScalar(.95 * this.visibleDistance), O.x = this.cameraPosition.x + z.x, O.z = this.cameraPosition.z + z.y, O.x = f(O.x, .01, 127.99), O.z = f(O.z, .01, 127.99), j.set(O.x * this.spritesPerMeter, O.z * this.spritesPerMeter);
            var e, i, n = 20,
                r = t + .5 * Math.PI;
            z.set(Math.cos(r), Math.sin(r));
            for (var o = 1; o < n; o++)
                if (R.copy(j).add(z), !(R.x <= 0 || R.x >= this.imageWidth || R.z <= 0 || R.z > this.imageWidth)) {
                    var i = ~~R.x + ~~R.y * this.imageWidth;
                    if (e = this.tileIndexTable[i], e === M || e === x) break;
                    z.multiplyScalar(-1 / (o / (o + 1)))
                }
            return O.x = R.x / this.spritesPerMeter, O.z = R.y / this.spritesPerMeter, P.sample[1] = e, O.y = this.heightsTable[i], O.index = i, P
        };
        for (var k = 16 / Math.PI / 2, B = [], U = -1; U <= 1; U++)
            for (var G = -1; G <= 1; G++) 0 === G && 0 === U || B.push(new d.Vector2(G, U));
        for (var F = [], H = 0; H < 16; H++) {
            var V = H / 16 * Math.PI * 2,
                Y = 4 * Math.cos(V),
                Q = 4 * Math.sin(V),
                W = o(Y, Q),
                X = [].concat(B);
            X.offsetX = Y, X.offsetY = Q, X.forEach(function(t) {
                t.distFromOffsetSqr = Math.pow(t.x - Y, 2) + Math.pow(t.y - Q, 2)
            }), X.sort(a), F[W] = X
        }
        r.prototype.getLocationOfCompatibleTileAlongTrajectory = function(t, e, i, n, r) {
            j.set(~~(t * this.spritesPerMeter), ~~(e * this.spritesPerMeter));
            for (var a, s = o(i, n), c = F[s], l = 0; l < c.length; l++) {
                var u = j.x + c[l].x,
                    h = j.y + c[l].y;
                if (a = this.tileIndexTable[h * this.imageWidth + u], r(a)) {
                    O.x = (u + .5) / this.spritesPerMeter, O.y = this.heightsTable[h * this.imageWidth + u], O.z = (h + .5) / this.spritesPerMeter;
                    break
                }
            }
            return P.recalculateMoveVector = l > 2, P.cantMove = 8 === l, P.sample[1] = a, P
        }, r.prototype.getNextConnectedPosition = function(t, e) {
            var i = this.tileIndexTable[t],
                n = this.roadlikeConnections[i],
                r = n.positionIndices.indexOf(t);
            if (r !== -1) {
                var o = n.connections[r],
                    a = ~~(o.length * Math.random());
                o[a] === e && (a = (a + 1) % o.length);
                var s = o[a];
                return O.copy(n.vertices[r]), P.recalculateMoveVector = !1, P.cantMove = !1, P.positionIndex = s, P.sample[1] = i, P
            }
            throw new Error("nope")
        }, r.prototype.isPositionWithinView = function(t) {
            return Math.abs(t.x - this.cameraPosition.x) < 1.2 * this.visibleDistance && Math.abs(t.z - this.cameraPosition.z) < 1.2 * this.visibleDistance
        }, e.exports = r
    }, {
        "../../assets": 5,
        "../../data/mapTileTypes": 11,
        "../settings": 78,
        "./RippleMap": 31,
        "./Section": 38,
        clamp: 144,
        events: 447,
        gsap: 465,
        lerp: 478,
        "lodash.defaults": 484,
        three: 520,
        urlparam: 529
    }],
    40: [function(t, e, i) {
        "use strict";

        function n(t) {
            t = r(t, a);
            var e = new THREE.PlaneGeometry(t.size, t.size, t.segments, t.segments);
            e.rotateX(-Math.PI / 2);
            var i = o();
            THREE.Mesh.call(this, e, i), this.isGroundCollider = !0, this.matrixAutoUpdate = !1;
            var n = t.x,
                s = t.y,
                c = this;
            setTimeout(function() {
                c.geometry.vertices.forEach(function(e) {
                    var i = e.x + n,
                        r = e.z + s;
                    e.y = t.map.getHeightAtLocation(i, r)
                }), c.geometry.verticesNeedUpdate = !0, c.geometry.computeBoundingBox(), c.geometry.computeBoundingSphere(), c.geometry.computeFaceNormals()
            }, 1500)
        }
        var r = t("lodash.defaults"),
            o = t("../../getColliderMaterial"),
            a = {
                segments: 24
            };
        n.prototype = Object.create(THREE.Mesh.prototype), e.exports = n
    }, {
        "../../getColliderMaterial": 69,
        "lodash.defaults": 484
    }],
    41: [function(t, e, i) {
        "use strict";
        var n = t("./PlaneCollider"),
            r = t("lodash.defaults"),
            o = {
                size: 128,
                segments: 16,
                segmentSize: 8,
                edgePadding: 1
            };
        e.exports = function(t) {
            function e(t, e) {
                return ~~(t / p) + ~~(e / p) * h
            }

            function i(t, i) {
                var n = e(d.x, d.z);
                if (n !== T) {
                    for (var r = 0; r < b.length; r++) b[r].visible = !1;
                    b.length = 0, T = n;
                    for (var o = d.x - _, a = d.z - _, s = d.x + _, c = d.z + _, l = a; l <= c; l += p)
                        for (var u = o; u <= s; u += p) {
                            var h = x[e(u, l)];
                            h && (h.visible = !0, b.push(h))
                        }
                }
            }

            function a() {
                return l
            }
            t = r(t, o);
            for (var s = t.map, c = new THREE.Object3D, l = [], u = {
                    map: s,
                    size: t.segmentSize,
                    container: c
                }, h = t.segments, d = t.cameraPosition, p = t.size / h, f = .5 * p, m = t.edgePadding; m < h - t.edgePadding; m++)
                for (var g = t.edgePadding; g < h - t.edgePadding; g++) {
                    var v = (g + .5) * p,
                        y = (m + .5) * p;
                    u.x = v, u.y = y;
                    var M = new n(u);
                    M.isGround = !0, M.position.x = v, M.position.z = y, l.push(M), c.add(M), M.updateMatrix(), M.updateMatrixWorld(), M.matrixAutoUpdate = !1
                }
            for (var x = new Array(l.length), w = 0; w < l.length; w++) {
                var M = l[w];
                x[e(M.position.x, M.position.z)] = M
            }
            var T = -1,
                _ = Math.max(8, s.visibleDistance) + f,
                b = [];
            return {
                object3d: c,
                getColliderPlanes: a,
                update: function(t, e) {
                    l.forEach(function(t) {
                        t.updateMatrix(), t.updateMatrixWorld(), t.visible = !1
                    }), this.update = i
                }
            }
        }
    }, {
        "./PlaneCollider": 40,
        "lodash.defaults": 484
    }],
    42: [function(t, e, i) {
        "use strict";

        function n() {
            return s || (s = new THREE.SphereGeometry(.5, 16, 8)), s
        }

        function r() {
            return c || (c = new THREE.MeshBasicMaterial({
                color: 16306480,
                transparent: !0,
                opacity: 0,
                fog: !1
            })), c
        }

        function o() {
            return new THREE.MeshBasicMaterial({
                color: 16772735,
                transparent: !0,
                depthWrite: !1,
                opacity: 0,
                fog: !1
            })
        }

        function a() {
            THREE.Object3D.call(this);
            var t = new THREE.Mesh(n(), r());
            t.scale.set(.175, .175, .175), t.renderOrder = 2e3, this.add(t);
            var e = new THREE.Mesh(n(), o());
            e.scale.set(1.2, 1.2, 1.2), e.renderOrder = 2e3, this.add(e), this.visible = !1;
            var i = new THREE.Mesh(n(), h());
            i.scale.set(1.2, 1.2, 1.2), i.collisionOwner = this, this.add(i), this.collider = i, this.activeAmount = 0, this.oldActiveAmount = 0, this.ball = t, this.highlight = e
        }
        var s, c, l = t("gsap"),
            u = function() {},
            h = t("../getColliderMaterial");
        a.prototype = Object.create(THREE.Object3D.prototype), a.prototype.update = function(t) {
            if (this.visible && (this.activeAmount > 0 && (this.activeAmount -= 4 * t, this.activeAmount < 0 ? this.activeAmount = 0 : this.activeAmount > 1 && (this.activeAmount = 1)), this.activeAmount != this.oldActiveAmount)) {
                this.highlight.material.opacity = .05 + .95 * this.activeAmount;
                var e = .2 + 1 * (1 - this.activeAmount);
                this.highlight.scale.set(e, e, e), this.oldActiveAmount = this.activeAmount
            }
        }, a.prototype.animateIn = function() {
            var t = arguments.length <= 0 || void 0 === arguments[0] ? u : arguments[0];
            this.visible = !0, this.collider.visible = !0;
            var e = this.position.y;
            this.position.y -= .2, l.to(this.position, 2, {
                y: e,
                ease: "easeOutExpo"
            }), l.to(this.ball.material, 2, {
                opacity: 1,
                ease: "easeOutExpo"
            }), l.to(this.highlight.material, 1, {
                opacity: .1,
                ease: "easeOutExpo",
                onComplete: function() {
                    t()
                }
            })
        }, a.prototype.animateOut = function() {
            var t = this,
                e = arguments.length <= 0 || void 0 === arguments[0] ? u : arguments[0];
            if (this.visible) {
                var i = this.position.y + .2;
                l.to(this.position, 2, {
                    y: i,
                    ease: "easeOutExpo"
                }), l.to(this.ball.material, 2, {
                    opacity: 0,
                    ease: "easeOutExpo"
                }), l.to(this.highlight.material, 1, {
                    opacity: 0,
                    ease: "easeOutExpo",
                    onComplete: function() {
                        e(), t.position.y -= .2, t.visible = !1, t.collider.visible = !1
                    }
                })
            }
        }, e.exports = a
    }, {
        "../getColliderMaterial": 69,
        gsap: 465
    }],
    43: [function(t, e, i) {
        "use strict";

        function n(t, e) {
            this.app = t, e = o(e, l), r.Object3D.call(this), this.object3d = this, this.hidden = !1, this.isNight, this.isGridCreated = !1, this.updateMarkerVisibility = this.updateMarkerVisibility.bind(this), this.map = e.map, this.cursor = e.cursor, this.markers = [], this.cameraPosition = e.cameraPosition, this.visibleDistanceMin = e.visibleDistanceMin, this.visibleDistanceMax = e.visibleDistanceMax, this.map.addOnUpdateCallback(this.onMapUpdate.bind(this))
        }
        var r = t("three"),
            o = t("lodash.defaults"),
            a = t("./Marker"),
            s = t("urlparam"),
            c = function() {},
            l = {
                cameraPosition: null,
                startRange: 10,
                endRange: 118,
                spacing: 4,
                visibleDistanceMin: 3,
                visibleDistanceMax: 7
            };
        n.prototype = Object.create(r.Object3D.prototype);
        var u = s("testUnstableFPS", !1),
            h = 0;
        n.prototype.update = function(t, e) {
            if (e.dayNight < 1 && this.isNight !== e.dayNight < 1 && (this.isNight = !0, this.hide()), 1 === e.dayNight && this.isNight === !0 && (this.isNight = !1, this.show()), u)
                for (var i = 1e6 * Math.random(), n = 0; n < i; n++) h += Math.random(), h *= Math.random();
            this.markers.forEach(function(e) {
                e.update(t)
            })
        }, n.prototype.onMapUpdate = function() {
            this.hidden || this.markers.forEach(this.updateMarkerVisibility)
        }, n.prototype.updateMarkerVisibility = function(t) {
            var e = Math.abs(t.position.x - this.cameraPosition.x) + Math.abs(t.position.z - this.cameraPosition.z);
            t.visible = e > this.visibleDistanceMin && e < this.visibleDistanceMax, t.collider.visible = t.visible
        }, n.prototype.show = function() {
            this.isNight || (this.hidden = !1, this.markers.forEach(function(t) {
                t.animateIn()
            }), this.onMapUpdate())
        }, n.prototype.hide = function() {
            this.hidden = !0, this.markers.forEach(function(t) {
                t.animateOut()
            })
        }, n.prototype.addNew = function(t, e) {
            var i = this,
                n = arguments.length <= 2 || void 0 === arguments[2] ? c : arguments[2],
                r = t[0],
                o = t[1],
                s = this.map.getHeightAtLocation(r, o) + 2.45,
                l = new a;
            l.position.set(r, s, o);
            var u = 1;
            l.scale.set(u, u, u), this.markers.push(l), l.onSelect = function() {
                i.hidden || (i.map.moveCamera.bind(i.map, [r, o], void 0, c), n(), e && l.animateOut(function() {
                    i.removeMarker(l)
                }))
            }, this.add(l), this.cursor.addCollider(l.collider), l.animateIn(), this.updateMarkerVisibility(l)
        }, n.prototype.createGrid = function(t) {
            if (!this.map.isReady) return this.map.onReady(this.createGrid.bind(this, t)), void console.warn("deferring grid markers until map ready.");
            if (this.isGridCreated) this.show();
            else {
                this.hidden = !1, this.isGridCreated = !0, t = o(t, l);
                for (var e = t.startRange; e <= t.endRange; e += t.spacing)
                    for (var i = t.startRange; i <= t.endRange; i += t.spacing) this.addNew([i, e], !1, this.map.moveCamera.bind(this.map, [i, e], 3, c))
            }
        }, n.prototype.removeMarker = function(t) {
            this.cursor.removeCollider(t.collider), this.remove(t)
        }, n.prototype.updateInteractivity = function(t) {
            this.lastInteractivity !== t && (this.lastInteractivity = t, 1 === t ? this.createGrid() : this.hide())
        }, e.exports = n
    }, {
        "./Marker": 42,
        "lodash.defaults": 484,
        three: 520,
        urlparam: 529
    }],
    44: [function(t, e, i) {
        "use strict";

        function n(t) {
            o.Object3D.call(this);
            var e = this,
                i = t.roadlikeConnections;
            Object.keys(i).forEach(function(n, o) {
                var s = new r(i[n], t, a[o]);
                e.add(s)
            })
        }

        function r(t, e, i) {
            var n = new o.Geometry,
                r = (e.imageWidth, e.imageHeight, t.connections),
                a = t.positionIndices,
                s = (e.spritesPerMeter, t.vertices),
                c = n.vertices;
            s.forEach(function(t, e) {
                r[e].forEach(function(e) {
                    c.push(t), c.push(s[a.indexOf(e)])
                })
            });
            var l = new o.LineBasicMaterial({
                color: i
            });
            o.LineSegments.call(this, n, l)
        }
        var o = t("three"),
            a = [65280, 255];
        n.prototype = Object.create(o.Object3D.prototype), e.exports = n, r.prototype = Object.create(o.LineSegments.prototype)
    }, {
        three: 520
    }],
    45: [function(t, e, i) {
        "use strict";

        function n() {
            var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
            THREE.Mesh.call(this, new THREE.SphereBufferGeometry(1, 32, 16, (void 0), (void 0), 0, .75 * Math.PI), new THREE.ShaderMaterial({
                vertexShader: "#define GLSLIFY 1\nuniform vec3 colorSky;\nuniform vec3 colorFog;\n\nvarying vec3 vAtmosphereColor;\n\nvoid main() {\n  \n  float blend = 1.0 - clamp(position.y, 0.0, 1.0);\n\n  vAtmosphereColor = mix(colorFog, colorSky, 1.0 - blend * blend);\n\n  gl_Position = projectionMatrix *\n                modelViewMatrix *\n                vec4(position ,1.0);\n}\n",
                fragmentShader: "#define GLSLIFY 1\nvarying vec3 vAtmosphereColor;\n\nvoid main() {\n  gl_FragColor = vec4(vAtmosphereColor, 1.0);\n}\n",
                side: THREE.BackSide,
                fog: !1,
                uniforms: {
                    colorSky: {
                        type: "c",
                        value: t.color
                    },
                    colorFog: {
                        type: "c",
                        value: t.fogColor
                    }
                }
            })), this.scale.multiplyScalar(10.5), this.camera = t.camera, this.object3d = this
        }
        n.prototype = Object.create(THREE.Mesh.prototype);
        var r = new THREE.Vector3;
        n.prototype.update = function() {
            r.set(0, 0, 0), this.camera.localToWorld(r), this.position.copy(r)
        }, e.exports = n
    }, {}],
    46: [function(t, e, i) {
        "use strict";

        function n(t, e) {
            e = m(e, x);
            var i = e.width;
            e.backgroundColor instanceof THREE.Color || (e.backgroundColor = new THREE.Color(e.backgroundColor));
            var n = e.pixelPadding;
            2 == n.length && (n.push(n[0]), n.push(n[1])), THREE.Object3D.call(this);
            var r = {
                type: "f",
                value: 0
            };
            e.animationValue = r;
            var o = g(t, e);
            o.setMaskAnimationEnabled(!0);
            var a;
            e.background !== !1 && (a = new y({
                arrow: e.arrow,
                depthTest: e.depthTest !== !1,
                depthWrite: e.depthWrite !== !1,
                color: e.backgroundColor,
                opacity: e.backgroundOpacity,
                animationValue: r,
                transparent: !0
            }), this.add(a), a.renderOrder = 3999 + e.renderOrderOffset, a.position.z = -.005), this.add(o.object3d), this.object3d = this, this.text = o, this.background = a, this.pixelPadding = n, this.fixedWidth = i, this.animationValue = r, this.visible = !1
        }

        function r(t) {
            this.background && this.background.setBackground(t)
        }

        function o(t) {
            this.text.setWeight(t)
        }

        function a(t) {
            this.text.setSize(t)
        }

        function s(t) {
            this.text.setText(t);
            var e = this.text.geometry.layout,
                i = (e.width + this.pixelPadding[0] + this.pixelPadding[2], e.height + e.descender + this.pixelPadding[1] + this.pixelPadding[3], this.text.getComputedScale());
            this.background && this.positionBackground(i, e), this.text.object3d.position.x = (e.width + this.pixelPadding[0]) * i
        }

        function c(t, e) {
            var i, n = this.getTextBounds(),
                r = n.getSize();
            this.fixedWidth ? (i = this.fixedWidth + this.pixelPadding[0] + this.pixelPadding[2], this.background.setSize(i * t, r.y)) : (this.background.setSize(r.x, r.y), i = this.getTextLayoutWidth()), this.background.position.x = i / 2 * t, this.background.rotation.y = Math.PI, this.fixedWidth || (this.background.position.x += this.pixelPadding[0] * t), this.pixelPadding[1] !== this.pixelPadding[3] && (this.background.position.y = -(r.y / 2 - (e.lineHeight / 2 + e.lineHeight / 2 * (e._linesTotal - 1) + this.pixelPadding[1]) * t))
        }

        function l() {
            return this.text.geometry.layout.width
        }

        function u() {
            var t = new THREE.Box3;
            return this.text.geometry.boundingBox || this.text.geometry.computeBoundingBox(), t.copy(this.text.geometry.boundingBox), t.min.x -= this.pixelPadding[0], t.max.x += this.pixelPadding[2], t.min.y -= this.pixelPadding[1], t.max.y += this.pixelPadding[3], this.text.setBounds(t), t.min.multiplyScalar(-this.text.object3d.scale.x), t.max.multiplyScalar(-this.text.object3d.scale.x), t
        }

        function h() {
            this.animationValue.value = 0
        }

        function d() {
            var t = this.text.getComputedScale(),
                e = this.text.geometry.layout;
            return [t * (e.width + this.pixelPadding[0] + this.pixelPadding[2]), t * (e.height + e.descender + this.pixelPadding[1] + this.pixelPadding[3])]
        }

        function p(t) {
            this.visible = !0, this.text.object3d.visible = !0, M.killTweensOf(this.animationValue), M.to(this.animationValue, .65, {
                value: 1,
                delay: t && t.delay,
                ease: "easeOutExpo",
                onComplete: t && t.onComplete
            })
        }

        function f(t) {
            M.killTweensOf(this.animationValue), M.to(this.animationValue, .5, {
                value: 0,
                delay: t && t.delay,
                ease: "easeInExpo",
                onComplete: function() {
                    this.visible = !1, this.text.object3d.visible = !1, t && t.onComplete && t.onComplete()
                },
                onCompleteScope: this
            })
        }
        var m = t("lodash.defaults"),
            g = t("./getText"),
            v = (t("lerp"), t("object-assign")),
            y = t("./meshes/RectangleWithArrow"),
            M = t("gsap"),
            x = {
                renderOrderOffset: 0,
                pixelPadding: [20, 10, 20, 10],
                color: 16777215,
                size: .85,
                backgroundColor: 0,
                backgroundOpacity: 1,
                align: "left"
            };
        n.prototype = Object.create(THREE.Object3D.prototype), v(n.prototype, {
            setWeight: o,
            setSize: a,
            setText: s,
            setAnimatedOut: h,
            getDimensions: d,
            getTextBounds: u,
            getTextLayoutWidth: l,
            positionBackground: c,
            animateIn: p,
            animateOut: f,
            setBackgroundColor: r
        }), e.exports = n
    }, {
        "./getText": 72,
        "./meshes/RectangleWithArrow": 76,
        gsap: 465,
        lerp: 478,
        "lodash.defaults": 484,
        "object-assign": 490
    }],
    47: [function(t, e, i) {
        "use strict";

        function n(t) {
            t = r(t, l), o.Object3D.call(this);
            var e = new o.MeshBasicMaterial({
                    transparent: !0,
                    color: c.red,
                    fog: !1,
                    side: o.DoubleSide
                }),
                i = new o.RingGeometry(.11, .1, 6, 1);
            this.ringMesh = new o.Mesh(i, e), this.ringMesh.renderOrder = 5e3;
            var n = new o.MeshBasicMaterial({
                    transparent: !0,
                    color: c.red,
                    fog: !1,
                    side: o.DoubleSide
                }),
                a = new o.CircleGeometry(.015, 16);
            this.circleMesh = new o.Mesh(a, n), this.circleMesh.renderOrder = 5e3, this.add(this.ringMesh), this.add(this.circleMesh), this.position.z = .01, this.visible = !1
        }
        var r = t("lodash.defaults"),
            o = t("three"),
            a = t("gsap"),
            s = function() {},
            c = {
                red: new o.Color(15090510)
            },
            l = {};
        n.prototype = Object.create(o.Object3D.prototype), n.prototype.setColor = function(t) {
            this.ringMesh.material.color.set(t), this.circleMesh.material.color.set(t)
        }, n.prototype.animateIn = function(t) {
            arguments.length <= 1 || void 0 === arguments[1] ? s : arguments[1];
            a.killTweensOf(this.ringMesh.scale), a.killTweensOf(this.ringMesh.material), this.visible = !0, this.ringMesh.scale.set(.1, .1, 1), this.ringMesh.material.opacity = 0, this.circleMesh.material.opacity = 0, a.to(this.ringMesh.scale, 1, {
                delay: t && t.delay + .2,
                x: 1,
                y: 1,
                ease: Expo.easeInOut
            }), a.to(this.ringMesh.material, .75, {
                delay: t && t.delay + .2,
                opacity: 1,
                ease: Expo.easeInOut
            }), a.to(this.circleMesh.material, .75, {
                delay: t && t.delay,
                opacity: 1,
                ease: Expo.easeInOut
            })
        }, n.prototype.animateOut = function(t) {
            var e = this,
                i = arguments.length <= 1 || void 0 === arguments[1] ? s : arguments[1];
            a.killTweensOf(this.ringMesh.scale), a.killTweensOf(this.ringMesh.material), a.to(this.ringMesh.scale, .6, {
                delay: t && t.delay,
                x: .1,
                y: .1,
                ease: Expo.easeInOut,
                onComplete: function() {
                    i(), e.visible = !1
                }
            }), a.to(this.ringMesh.material, .4, {
                delay: t && t.delay,
                opacity: 0,
                ease: Expo.easeInOut
            }), a.to(this.circleMesh.material, .4, {
                delay: t && t.delay + 2,
                opacity: 0,
                ease: Expo.easeInOut
            })
        }, e.exports = n
    }, {
        gsap: 465,
        "lodash.defaults": 484,
        three: 520
    }],
    48: [function(t, e, i) {
        "use strict";

        function n(t) {
            t = r(t, l), o.Object3D.call(this);
            var e = new o.MeshBasicMaterial({
                    transparent: !0,
                    color: c.red,
                    fog: !1,
                    side: o.DoubleSide
                }),
                i = new o.BufferGeometry,
                n = new Float32Array([-.5, .5, 1, .5, .5, 1, .5, 0, 1, -.5, .5, 1, .5, 0, 1, 0, 0, 1, -.5, .5, 1, 0, 0, 1, 0, -.5, 1, -.5, .5, 1, 0, -.5, 1, -.5, -.5, 1]);
            i.addAttribute("position", new o.BufferAttribute(n, 3)), this.lineMesh = new o.Mesh(i, e), this.lineMesh.renderOrder = 5e3, this.lineMesh.scale.set(.01, .01, .01), this.add(this.lineMesh), this.lineMesh.position.x = .35, this.lineMesh.position.z = .001, this.visible = !1
        }
        var r = t("lodash.defaults"),
            o = t("three"),
            a = t("gsap"),
            s = function() {},
            c = {
                red: new o.Color(15090510)
            },
            l = {};
        n.prototype = Object.create(o.Object3D.prototype), n.prototype.setColor = function(t) {
            this.lineMesh.material.color.set(t)
        }, n.prototype.animateIn = function(t) {
            arguments.length <= 1 || void 0 === arguments[1] ? s : arguments[1];
            a.killTweensOf(this.lineMesh.scale), a.killTweensOf(this.lineMesh.material), this.visible = !0, this.lineMesh.material.opacity = 0, a.to(this.lineMesh.scale, 1, {
                delay: t && t.delay,
                x: .5,
                ease: Expo.easeInOut
            }), a.to(this.lineMesh.material, .75, {
                delay: t && t.delay,
                opacity: 1,
                ease: Expo.easeInOut
            })
        }, n.prototype.animateOut = function(t) {
            var e = this,
                i = arguments.length <= 1 || void 0 === arguments[1] ? s : arguments[1];
            a.killTweensOf(this.lineMesh.scale), a.killTweensOf(this.lineMesh.material), a.to(this.lineMesh.scale, .6, {
                delay: t && t.delay,
                x: .01,
                ease: Expo.easeInOut,
                onComplete: function() {
                    i(), e.visible = !1
                }
            }), a.to(this.lineMesh.material, .4, {
                opacity: 0,
                ease: Expo.easeInOut
            })
        }, e.exports = n
    }, {
        gsap: 465,
        "lodash.defaults": 484,
        three: 520
    }],
    49: [function(t, e, i) {
        "use strict";

        function n(t) {
            function e(t, e, n, r) {
                var o = r ? c : s,
                    a = new o(t.app, t);
                return i.push(a), e.add(a.object3d), a.object3d.position.y = n || 0, a
            }
            t = r(t, g), o.Object3D.call(this), this.object3d = this, this.windowScale = t.windowScale, this.isOpened = !1, this.emitter = new a;
            var i = [],
                n = new o.Group;
            this.add(n), n.position.set(-1.5, 0, 0);
            var h = {
                backgroundColor: m.red,
                size: 2,
                color: m.white,
                pixelPadding: [10, 10]
            };
            r(h, v), this.labelName = e(h, n, .181);
            var y = {
                backgroundColor: m.gray,
                backgroundOpacity: .9,
                weight: null,
                weight2: "italic",
                size: f,
                pixelPadding: [10, 10]
            };
            r(y, v);
            var M = 0;
            this.statLabels = [];
            for (var x = 0; x < 5; x++) {
                var w = e(y, n, 0, !0);
                w.setText("test"), w.setText2("test"), w.object3d.position.y = M, M -= w.getDimensions()[1], this.statLabels.push(w)
            }
            var T = new o.Group;
            this.add(T), T.position.set(.9, 0, 0);
            var _ = {
                width: 450,
                backgroundColor: m.gray,
                backgroundOpacity: .9,
                weight: "italic",
                size: f,
                pixelPadding: [30, 30, 30, 100]
            };
            r(_, v), this.labelTitle = e(_, T, 0);
            var b = t.interactions,
                E = t.state;
            this.video = l(t.app, {
                loop: !0,
                muted: !0,
                scale: 2.5,
                interactions: b,
                state: E,
                owner: this
            }), this.video.object3d.isGroundCollider = !0, this.add(this.video.object3d);
            for (var S = 0; S < i.length; S++) i[S].animateOut();
            this.labels = i, this.leftLabels = [this.labelName].concat(this.statLabels), this.leftContainer = n, this.rightContainer = T, this.visible = !1, this.hexagon = new d, this.labelTitle.object3d.add(this.hexagon), this.line = new p, this.labelTitle.object3d.add(this.line), this.tapToClose = u(t.app), this.tapToClose.object3d.position.y = -.9, this.hitAreas = this.tapToClose, this.add(this.tapToClose.object3d), this.app = t.app, this.map = t.map, this.interactions = t.interactions, this.scale.multiplyScalar(this.windowScale), this.onOpenListeners = []
        }
        var r = t("lodash.defaults"),
            o = t("three"),
            a = t("events").EventEmitter,
            s = t("../TextLabel"),
            c = t("../DoubleTextLabel"),
            l = t("../getVideo"),
            u = t("../getTapToCloseAnimal"),
            h = t("../settings"),
            d = t("./Hexagon"),
            p = t("./Line"),
            f = 1.5,
            m = {
                white: new o.Color(16777215),
                gray: new o.Color(2499629),
                red: new o.Color(15090510)
            },
            g = {
                windowScale: 1
            },
            v = {
                depthTest: !1,
                depthWrite: !1,
                background: !0,
                pixelPadding: [10, 10],
                size: 1
            };
        n.prototype = Object.create(o.Object3D.prototype);
        var y = 0;
        n.prototype.open = function(t, e) {
            if (t !== this.animalAssociated) {
                var i = Date.now();
                if (!(i - y < 1e3) || e) {
                    if (this.isOpened) return void this.close(this.open.bind(this, t, !0));
                    y = i, this.isOpened = !0, this.visible = !0, this.animalAssociated = t, t.collider.visible = !1, this.position.set(t.position.x, t.position.y + h.animalWindowHeight * this.windowScale, t.position.z), this.labelName.setText(t.data.name);
                    var n = t.data.labelColor;
                    this.labelName.setBackgroundColor(n), this.tapToClose.setBackgroundColor(n), this.tapToClose.object3d.onSelect = this.close.bind(this), this.line.setColor(n), this.hexagon.setColor(n), this.statLabels.forEach(function(e, i) {
                        if (!t.data.stats || !t.data.stats[i]) return void e.scale.set(1e-4, 1e-4, 1e-4);
                        e.scale.set(1, 1, 1);
                        var n = t.data.stats[i],
                            r = n.key.toUpperCase();
                        e.setText(r), e.setText2(n.value)
                    }), this.labelTitle.setText(t.data.title);
                    var r = this.labelTitle.getDimensions();
                    this.hexagon.position.y = r[1] / 2 + this.labelTitle.background.position.y, this.line.position.y = -r[1] / 2 + .15, this.video.setSource(t.data.mediaURL), this.video.play(), this.emitter.emit("open"), this.leftLabels.forEach(function(t, e) {
                        t.animateIn({
                            delay: .2 * e + .5
                        })
                    }), this.hexagon.animateIn({
                        delay: 1
                    }), this.labelTitle.animateIn({
                        delay: 1.5
                    }), this.line.animateIn({
                        delay: 1.75
                    }), this.tapToClose.animateIn({
                        delay: 0
                    })
                }
            }
        }, n.prototype.getColliders = function() {
            return [this.tapToClose.collider]
        }, n.prototype.close = function(t) {
            if (this.isOpened) {
                this.isOpened = !1;
                var e = this;
                this.emitter.emit("closing"), this.animalAssociated && (this.animalAssociated.collider.visible = !0, this.animalAssociated.paralyzed = !1, this.animalAssociated = void 0, this.tapToClose.animateOut({
                    delay: 0
                }), this.line.animateOut({
                    delay: .0375
                }), this.labelTitle.animateOut({
                    delay: .075
                }), this.hexagon.animateOut({
                    delay: .1125
                }), this.leftLabels.forEach(function(t, e, i) {
                    t.animateOut({
                        delay: .25 * (.05 * e + .5)
                    })
                }), this.video.close(function() {
                    e.emitter.emit("close"), e.visible = !1, t && t()
                }))
            }
        }, n.prototype.update = function(t, e) {
            if (this.video.update(t, e), this.visible) {
                var i = new o.Vector3(0, 0, 0);
                this.app.camera.localToWorld(i), this.lookAt(i)
            }
        }, e.exports = n
    }, {
        "../DoubleTextLabel": 28,
        "../TextLabel": 46,
        "../getTapToCloseAnimal": 71,
        "../getVideo": 73,
        "../settings": 78,
        "./Hexagon": 47,
        "./Line": 48,
        events: 447,
        "lodash.defaults": 484,
        three: 520
    }],
    50: [function(t, e, i) {
        "use strict";

        function n() {}

        function r() {
            return l || (l = new d.BoxGeometry(.75, .75, .75, 1, 1, 1), l.vertices.forEach(function(t) {
                t.y += .25
            })), l
        }

        function o(t) {
            t instanceof d.Color || (t = new d.Color(t));
            var e = t.getHexString();
            return y[e] || (y[e] = new d.MeshLambertMaterial({
                color: t,
                fog: !0
            })), y[e]
        }

        function a(t) {
            return !0
        }

        function s(t) {
            t = h(t, M), d.Mesh.call(this, t.geometryCreator(), this.getMaterial(t.color)), this.renderOrder = 8e3, this.color = this.material.color, this.camera = t.camera, this.cameraPosition = t.cameraPosition, this.object3d = this;
            var e = t.size * f;
            this.scale.set(e, e, e), this.map = t.map, this.sleepCounter = 0, this.position.x = t.x, this.position.z = t.y, this.animalWindow = t.animalWindow;
            var i = new m(this.app, {
                color: this.color
            });
            this.add(i), this.separationTagY = 5, i.position.y += this.separationTagY, this.nameTag = i, this.nameTagOrigPosY = this.nameTag.position.y, this.nameTag.animateOut(), this.moveVector = new d.Vector2, this.moveAngle = Math.random() * Math.PI * 2, this.moveVector.normalize(), this.sleepDuration = t.sleepDuration, this.moveDuration = t.moveDuration, this.moveDistance = t.moveDistance * f, this.moveAngleDeviation = t.moveAngleDeviation, this.nameTagDistance = t.nameTagDistance, this.nameTagScale = t.nameTagScale, this.tileCompatibilityMethod = t.tileCompatibilityMethod, this.nameTagDistanceSqr = Math.pow(t.nameTagDistance, 2), this.tailObjects = [], this.manageTail = n, this.colliderScale = t.colliderScale;
            var o = new d.Mesh(r(), v());
            o.collisionOwner = this, this.add(o), this.collider = o
        }

        function c(t, e, i) {
            u.to(e.position, i, {
                ease: Linear.easeNone,
                x: t.position.x,
                y: t.position.y,
                z: t.position.z
            });
            var n = t.rotation.y;
            e.rotation.y - n > Math.PI && (e.rotation.y -= 2 * Math.PI), e.rotation.y - n < -Math.PI && (e.rotation.y += 2 * Math.PI), u.to(e.rotation, i, {
                ease: Linear.easeNone,
                y: n
            })
        }
        var l, u = t("gsap"),
            h = t("lodash.defaults"),
            d = t("three"),
            p = (t("clamp"), t("lerp")),
            f = t("../settings").scaleAll,
            m = t("../nameTags/Base"),
            g = t("./geometryLibrary"),
            v = t("../getColliderMaterial"),
            y = {},
            M = {
                x: 0,
                y: 0,
                color: 16596812,
                sleepDuration: .5,
                moveDuration: .2,
                moveDistance: .5,
                moveAngleDeviation: .5,
                size: .0875,
                nameTagDistance: 14,
                nameTagScale: .4,
                geometryCreator: g.getCreator("animal"),
                tileCompatibilityMethod: a
            };
        s.prototype = Object.create(d.Mesh.prototype), Object.defineProperty(s.prototype, "moveAngle", {
            get: function() {
                return this._moveAngle
            },
            set: function(t) {
                this._moveAngle = t, this.moveVector.set(Math.cos(t), Math.sin(t))
            }
        }), s.prototype.getMaterial = o, s.prototype.changeClothes = function(t) {
            for (this.data = t, this.color = t.color, this.material = this.getMaterial(this.color), this.colorDay = t.colorDay, this.colorNight = t.colorNight, this.isVehicle = t.isVehicle, this.nameTag.color = void 0 !== t.labelColor ? t.labelColor : t.color, this.nameTag.changeText(t.name), t.isVehicle ? this.collider.visible = !1 : (this.nameTag.animateIn(), this.collider.visible = !0), this.sleepDuration = t.sleepDuration, this.moveDuration = t.moveDuration, this.moveDistance = t.moveDistance, this.moveAngleDeviation = t.moveAngleDeviation, this.geometry = t.geometryCreator(), this.tileCompatibilityMethod = t.tileCompatibilityMethod, this.nameTag.position.y = t.nameTagHeight + this.separationTagY / 2 || this.separationTagY, this.nameTagOrigPosY = this.nameTag.position.y, this.lastX = 0, this.lastZ = 0; this.tailObjects.length > 0;) {
                var e = this.tailObjects.pop();
                this.map.rippleMap.unregisterRippler(e), e.parent.remove(e)
            }
            if (this.manageTail = n, t.name.indexOf("Train") !== -1) {
                for (var i = ~~(8 * Math.random()) + 8, r = 0; r <= i; r++) {
                    var e = new d.Mesh(g.getCreator(r == i ? "trainCaboose" : "trainCar")(), this.material);
                    this.map.rippleMap.registerRippler(e), this.parent.add(e), e.position.copy(this.position), e.rotation.copy(this.rotation), e.scale.copy(this.scale), this.tailObjects.push(e)
                }
                this.manageTail = this.manageTailObjects
            }
        }, s.prototype.manageTailObjects = function() {
            c(this, this.tailObjects[0], this.moveDuration);
            for (var t = 1; t < this.tailObjects.length; t++) c(this.tailObjects[t - 1], this.tailObjects[t], this.moveDuration)
        }, s.prototype.deviateMoveAngle = function() {
            this.moveAngle += 2 * (Math.random() - .5) * this.moveAngleDeviation
        };
        var x = new d.Vector3;
        s.prototype.reorientNameTag = function() {
            if (this.nameTag.visible) {
                x.set(0, 0, 0), this.camera.localToWorld(x), this.worldToLocal(x), this.nameTag.lookAt(x);
                var t = p(1, x.length() / this.nameTagDistance, .75),
                    e = t * this.colliderScale;
                this.collider.scale.set(e, e, e);
                var i = t * this.nameTagScale;
                this.nameTag.scale.set(i, i, i)
            }
        }, s.prototype.cursorOver = function() {
            u.killTweensOf(this.nameTag.position), u.to(this.nameTag.position, 1, {
                ease: Expo.easeOut,
                y: this.nameTagOrigPosY + 3
            })
        }, s.prototype.cursorOut = function() {
            u.killTweensOf(this.nameTag.position), u.to(this.nameTag.position, .5, {
                ease: Expo.easeOut,
                y: this.nameTagOrigPosY
            })
        }, e.exports = s
    }, {
        "../getColliderMaterial": 69,
        "../nameTags/Base": 77,
        "../settings": 78,
        "./geometryLibrary": 66,
        clamp: 144,
        gsap: 465,
        lerp: 478,
        "lodash.defaults": 484,
        three: 520
    }],
    51: [function(t, e, i) {
        "use strict";

        function n(t) {
            this.data = t;
            var e = {};
            u.forEach(function(t) {
                e[t] = []
            }), this.animalsBySpecies = e;
            var i = t.filter(function(t) {
                return "Bear 71" === t.name && 1 !== t.chapter
            });
            i.forEach(function(e) {
                t.splice(t.indexOf(e), 1)
            }), t.forEach(function(t) {
                var i = new THREE.Color(t.baseColor);
                t.color = i, t.mediaURL = "video/" + t.mediaURL, t.labelColor = new THREE.Color(void 0 !== t.labelColor ? t.labelColor : t.baseColor), t.colorDay = i.clone(), t.colorNight = p.animalAtNight;
                var n = t.name.replace(/\d+/g, "").trim();
                c(t, d[n]), e[n].push(t)
            })
        }

        function r(t) {
            if (isNaN(t)) return null;
            t /= 8;
            var e = l[t],
                i = h.biomesOfTileTypes[e],
                n = h.speciesInBiomes[i],
                r = n[~~(Math.random() * n.length)],
                o = s("species", null);
            o && (o = o.replace(/%20/g, " ").trim(), r = o);
            var a = this.animalsBySpecies[r].filter(function(t) {
                return !t.live
            });
            if (a.length > 0) {
                var c = a[~~(a.length * Math.random())];
                if (!c) throw new Error("No animal!");
                return c
            }
            return null
        }

        function o() {
            return 8 * ~~(32 * Math.random())
        }

        function a(t) {
            var e = this.data.filter(function(e) {
                return e.name === t
            });
            return 1 === e.length ? e[0] : (console.error("There is not one animal with that name"), null)
        }
        var s = t("urlparam"),
            c = t("lodash.defaults"),
            l = t("../../data/mapTileTypes.js"),
            u = t("../../data/animalTypes.js"),
            h = t("../../data/biomes"),
            d = t("../../data/speciesBehaviours"),
            p = t("../../gfx/colors");
        n.prototype = {
            getAnimalForTileIndexType: r,
            getRandomTileIndex: o,
            getAnimalDataByName: a
        }, e.exports = n
    }, {
        "../../data/animalTypes.js": 9,
        "../../data/biomes": 10,
        "../../data/mapTileTypes.js": 11,
        "../../data/speciesBehaviours": 12,
        "../../gfx/colors": 68,
        "lodash.defaults": 484,
        urlparam: 529
    }],
    52: [function(t, e, i) {
        "use strict";

        function n(t) {
            t = h(t, y), this.animalDatabase = new f(t.data), this.cursor = t.cursor, this.animalUpdatesPerTick = t.animalUpdatesPerTick, this.scene = t.scene, this.map = t.map, this.nameTagDistance = t.nameTagDistance * v.userSize, this.graveyard = [];
            for (var e = 0; e < t.poolSize; e++) {
                var i = Math.pow(Math.random(), 2) + .05,
                    n = new THREE.Color(i, 0, 1),
                    r = new d({
                        map: t.map,
                        geometryCreator: m.getCreator("animal"),
                        moveDuration: i,
                        sleepDuration: .125 * i + .05,
                        moveAngleDeviation: .5 * Math.random(),
                        color: n,
                        camera: t.camera,
                        cameraPosition: t.cameraPosition,
                        nameTagScale: v.nameTagSize,
                        nameTagDistance: v.nameTagDistance
                    });
                r.onSelect = a.bind(this, r), this.graveyard.push(r)
            }
            this.sleepingAnimals = [], this.busyAnimals = [], this.cameraPosition = t.cameraPosition, this.camera = t.camera, this.animalWindow = t.animalWindow, this.state = t.state
        }

        function r(t, e) {
            for (var i = this.sleepingAnimals.length - 1; i >= 0; i--) this.sleepingAnimals[i].sleepCounter -= t;
            for (var i = this.busyAnimals.length - 1; i >= 0; i--) this.busyAnimals[i].sleepCounter -= t, this.busyAnimals[i].reorientNameTag();
            if (this.graveyard.length > 0 && e.gridInteractive) {
                var n = this.map.getRandomSampleOnEdgeOfView(),
                    r = 0;
                this.busyAnimals.forEach(function(t) {
                    t.isVehicle || r++
                });
                var a = this.animalDatabase.getAnimalForTileIndexType(n.sample[1]);
                a && (r < v.animalCount || a.isVehicle) && o.call(this, a, n.worldPos)
            }
            for (var s = 0; s < this.animalUpdatesPerTick && this.sleepingAnimals.length > 0 && this.sleepingAnimals[this.sleepingAnimals.length - 1].sleepCounter <= 0;) {
                s++;
                var l = this.sleepingAnimals.pop();
                this.busyAnimals.push(l), l.aeTarget && (l.moveAngle = Math.atan2(-(l.position.z - l.aeTarget.y), -(l.position.x - l.aeTarget.x))), l.deviateMoveAngle();
                var u = l.paralyzed ? 0 : l.moveDistance;
                if (u > 0) {
                    var h;
                    if (l.isVehicle ? (h = this.map.getNextConnectedPosition(l.positionIndex, l.lastPositionIndex), l.lastPositionIndex = l.positionIndex, l.positionIndex = h.positionIndex) : h = this.map.getLocationOfCompatibleTileAlongTrajectory(l.position.x, l.position.z, l.moveVector.x, l.moveVector.y, l.tileCompatibilityMethod), h.cantMove) {
                        console.warn(l.data.name + " cannot move!"), setTimeout(c.bind(this, l), 1e3 * l.moveDuration), M.copy(l.position);
                        continue
                    }
                    if (h.recalculateMoveVector && (l.moveAngle = Math.atan2(-(l.position.z - M.z), -(l.position.x - M.x))), M.copy(h.worldPos), l.lastX = l.position.x, l.lastZ = l.position.z, p.to(l.position, l.moveDuration, {
                            ease: Linear.easeNone,
                            x: M.x,
                            y: M.y,
                            z: M.z,
                            onComplete: c.bind(this, l)
                        }), l.canRotate) {
                        var d = Math.atan2(-(l.position.z - M.z), l.position.x - M.x);
                        l.rotation.y - d > Math.PI && (l.rotation.y -= 2 * Math.PI), l.rotation.y - d < -Math.PI && (l.rotation.y += 2 * Math.PI), p.to(l.rotation, l.moveDuration, {
                            ease: Linear.easeNone,
                            y: d
                        })
                    }
                    l.manageTail()
                } else setTimeout(c.bind(this, l), 1e3 * l.moveDuration), M.copy(l.position);
                !this.animalWindow.isOpened && e.gridInteractive && Math.abs(M.x - this.cameraPosition.x) < l.nameTagDistance && Math.abs(M.z - this.cameraPosition.z) < l.nameTagDistance && !l.paralyzed ? l.isVehicle ? (l.nameTag.animateOut(), l.collider.visible = !1) : (l.nameTag.animateIn(), l.collider.visible = !0) : (l.nameTag.animateOut(), l.collider.visible = !1)
            }
        }

        function o(t, e) {
            var i = this.graveyard.pop();
            this.sleepingAnimals.push(i), this.scene.add(i), this.cursor.addCollider(i.collider), i.position.copy(e), i.moveAngle = Math.atan2(-(i.position.z - this.cameraPosition.z), -(i.position.x - this.cameraPosition.x)), t.live = !0;
            var n = t.name.replace(/\d+/g, "").trim();
            return t.geometryCreator = m.getCreator(n), g.unregisterColor(i.color), i.changeClothes(t), i.nameTagScale = v.nameTagScale, i.colliderScale = v.colliderScale, i.nameTagDistance = v.nameTagDistance, i.isVehicle && (this.map.rippleMap.registerRippler(i), i.positionIndex = this.map.getIndexOfPosition(e)), g.registerColor(i.color, i.colorDay, i.colorNight), i
        }

        function a(t) {
            var e = Date.now();
            if (!(e - w < 2e3)) {
                w = e, t.paralyzed = !0, t.nameTag.animateOut(), p.killTweensOf(t.position), this.sleepingAnimals.push(t);
                var i = new THREE.Vector2(this.cameraPosition.x, this.cameraPosition.z),
                    n = new THREE.Vector3(0, 0, (-1));
                this.camera.localToWorld(n), i.x -= n.x, i.y -= n.z, i.normalize().multiplyScalar(v.distanceToAnimalWindow);
                var r = new THREE.Vector2(t.position.x, t.position.z);
                x.copy(r).add(i);
                var o = [x.x, x.y],
                    a = this.map.getHeightAtLocation(o[0], o[1]);
                this.animalWindow.open(t), this.map.moveCamera(o, void 0, void 0, a)
            }
        }

        function s(t, e) {
            return e.sleepCounter - t.sleepCounter
        }

        function c(t) {
            var e = this.busyAnimals.indexOf(t);
            e !== -1 && this.busyAnimals.splice(e, 1), this.map.isPositionWithinView(t.position) || t.permanent ? (this.sleepingAnimals.push(t), t.sleepCounter = t.sleepDuration, this.sleepingAnimals.sort(s)) : (this.scene.remove(t), t.nameTag.animateOut(), this.cursor.removeCollider(t.collider), this.graveyard.push(t), t.data.live = !1, t.isVehicle && this.map.rippleMap.unregisterRippler(t))
        }

        function l(t, e, i) {
            var n = this.map.getHeightAtLocation(e, i),
                r = this.animalDatabase.getAnimalDataByName(t),
                a = o.call(this, r, new THREE.Vector3(e, n, i));
            return a
        }

        function u() {
            for (var t = this.busyAnimals.length - 1; t >= 0; t--) {
                var e = this.busyAnimals[t];
                p.killTweensOf(e.position), e.position.x = -9999, c.call(this, e)
            }
        }
        var h = t("lodash.defaults"),
            d = t("./Actor"),
            p = (t("urlparam"), t("gsap")),
            f = t("./AnimalDatabase"),
            m = t("./geometryLibrary"),
            g = t("../animatedColors"),
            v = t("../settings"),
            y = {
                poolSize: v.actorCount,
                animalUpdatesPerTick: v.actorUpdates
            },
            M = new THREE.Vector3,
            x = new THREE.Vector2,
            w = 0;
        n.prototype = {
            update: r,
            createSpecificAnimal: l,
            resetAnimals: u
        }, e.exports = n
    }, {
        "../animatedColors": 67,
        "../settings": 78,
        "./Actor": 50,
        "./AnimalDatabase": 51,
        "./geometryLibrary": 66,
        gsap: 465,
        "lodash.defaults": 484,
        urlparam: 529
    }],
    53: [function(t, e, i) {
        "use strict";

        function n() {
            return a || (a = new c.BoxGeometry(.5, .5, .5, 1, 1, 1), a.vertices.forEach(function(t) {
                t.y += .2
            })), a
        }

        function r(t) {
            t instanceof c.Color || (t = new c.Color(t));
            var e = t.getHexString();
            return p[e] || (p[e] = new c.MeshLambertMaterial({
                color: t,
                vertexColors: c.VertexColors,
                fog: !0
            })), p[e]
        }

        function o(t) {
            t = s(t, f), c.Mesh.call(this, t.geometry, r(t.color)), this.renderOrder = 8e3, this.color = this.material.color, this.labelColor = t.labelColor, this.object3d = this, this.data = t.data;
            var e = t.size * u;
            this.scale.set(e, e, e), this.position.x = t.x, this.position.y = t.height, this.position.z = t.y, this.rotation.y = Math.random() * Math.PI * 2;
            var i = new c.Mesh(n(), d());
            i.collisionOwner = this, this.add(i), this.collider = i, this.camera = t.camera, this.throttleCounter = 0, this.throttleTill = 0, this.throttleStep = .5
        }
        var a, s = t("lodash.defaults"),
            c = t("three"),
            l = (t("clamp"), t("lerp")),
            u = t("../settings").scaleAll,
            h = (t("./geometryLibrary"), t("../settings")),
            d = t("../getColliderMaterial"),
            p = {},
            f = {
                x: 0,
                y: 0,
                color: 16596812,
                size: .0875,
                geometry: null,
                height: 0
            };
        o.prototype = Object.create(c.Mesh.prototype);
        var m = new c.Vector3;
        o.prototype.update = function(t) {
            if (this.rotation.y += .6 * t, this.throttleCounter += t, !(this.throttleCounter < this.throttleTill)) {
                this.throttleTill += this.throttleStep, m.set(0, 0, 0), this.camera.localToWorld(m), this.worldToLocal(m);
                var e = l(1, m.length() / h.nameTagDistance, .75) * h.colliderScale;
                this.collider.scale.set(e, e, e)
            }
        }, e.exports = o
    }, {
        "../getColliderMaterial": 69,
        "../settings": 78,
        "./geometryLibrary": 66,
        clamp: 144,
        lerp: 478,
        "lodash.defaults": 484,
        three: 520
    }],
    54: [function(t, e, i) {
        "use strict";

        function n(t) {
            t = o(t, l), this.staticObjectDatabase = new s(t.data);
            var e = [],
                i = t.cursor;
            this.scene = t.scene, this.map = t.map;
            for (var n = 0; n < this.staticObjectDatabase.data.length; n++) {
                var u = this.staticObjectDatabase.data[n];
                u.mediaURL = "staticObjectsContent/" + u.mediaURL, u.x *= .32, u.y *= .32;
                var h = this.map.getHeightAtLocation(u.x, u.y),
                    d = new a({
                        color: u.color,
                        labelColor: u.labelColor,
                        data: u,
                        x: u.x,
                        y: u.y,
                        height: h,
                        geometry: c.getCreator(u.type)(),
                        camera: t.camera
                    });
                e.push(d), d.onSelect = r.bind(this, d), this.scene.add(d), i.addCollider(d.collider)
            }
            this.cameraPosition = t.cameraPosition, this.camera = t.camera, this.animalWindow = t.animalWindow, this.state = t.state, this.distanceToAnimalWindow = t.distanceToAnimalWindow, this.staticObjects = e, this.maxDistanceToAnimatedObjects = t.maxDistanceToAnimatedObjects
        }

        function r(t) {
            if (this.state.gridInteractive) {
                var e = new THREE.Vector2(this.cameraPosition.x, this.cameraPosition.z),
                    i = new THREE.Vector3(0, 0, (-1));
                this.camera.localToWorld(i), e.x -= i.x, e.y -= i.z, e.normalize().multiplyScalar(this.distanceToAnimalWindow);
                var n = new THREE.Vector2(t.position.x, t.position.z);
                u.copy(n).add(e);
                var r = [u.x, u.y],
                    o = this.map.getHeightAtLocation(r[0], r[1]);
                this.animalWindow.open(t), this.map.moveCamera(r, void 0, void 0, o)
            }
        }
        var o = t("lodash.defaults"),
            a = t("./StaticObject"),
            s = (t("urlparam"), t("gsap"), t("./StaticObjectDatabase")),
            c = t("./geometryLibrary"),
            l = (t("../animatedColors"), t("../settings"), {
                distanceToAnimalWindow: 3.5,
                maxDistanceToAnimatedObjects: 12
            }),
            u = (new THREE.Vector3, new THREE.Vector2);
        n.prototype.update = function(t) {
            for (var e = this.staticObjects.length - 1; e >= 0; e--) {
                var i = Math.abs(this.staticObjects[e].position.x - this.cameraPosition.x);
                if (i < this.maxDistanceToAnimatedObjects) {
                    var n = Math.abs(this.staticObjects[e].position.z - this.cameraPosition.z);
                    n < this.maxDistanceToAnimatedObjects && this.staticObjects[e].update(t)
                }
            }
        }, e.exports = n
    }, {
        "../animatedColors": 67,
        "../settings": 78,
        "./StaticObject": 53,
        "./StaticObjectDatabase": 55,
        "./geometryLibrary": 66,
        gsap: 465,
        "lodash.defaults": 484,
        urlparam: 529
    }],
    55: [function(t, e, i) {
        "use strict";

        function n(t) {
            this.data = t, t.forEach(function(t) {
                var e = new THREE.Color(16777215);
                t.color = e, t.colorDay = e.clone(), t.colorNight = r.staticObjectAtNight, t.labelColor = new THREE.Color(void 0 !== t.labelColor ? t.labelColor : t.baseColor)
            })
        }
        var r = t("../../gfx/colors");
        e.exports = n
    }, {
        "../../gfx/colors": 68
    }],
    56: [function(t, e, i) {
        "use strict";

        function n() {
            if (!r) {
                var t = new o.ConeGeometry(.5, 1, 4);
                t.vertices.forEach(function(t) {
                    t.y += .5, t.y *= .8
                }), r = new o.FlatShadedGeometry(t)
            }
            return r
        }
        var r, o = t("three");
        e.exports = n
    }, {
        three: 520
    }],
    57: [function(t, e, i) {
        "use strict";

        function n() {
            if (!r) {
                var t = function(t, e, i, n, r) {
                        for (var s = new o.Geometry, c = (new o.Matrix4).makeRotationFromEuler(new o.Euler(.5 * Math.PI, 0, 0)), u = new Array(4), h = 0, d = -.5; d <= .5; d++)
                            for (var p = -.5; p <= .5; p++) u[y[h]] = new o.Vector2(t + d * e, i * p), h++;
                        u.push(u[0]);
                        for (var h = 0; h < 4; h++) {
                            var f = new o.LatheGeometry(u.slice(h, h + 2), l, n, r);
                            a(f, g), s.merge(f, c)
                        }
                        return s
                    },
                    e = new o.Geometry,
                    i = 1,
                    n = 3 / 16,
                    s = .5 * (i - n),
                    c = .5 * s,
                    l = 16,
                    u = .5 * n + c,
                    h = 1.125,
                    d = 1 / 16,
                    p = 1 / 16,
                    f = c - p;
                c -= .5 * p;
                var m = .5 * n + .5 * p,
                    g = new o.Color(8355711),
                    v = new o.Color(16777215),
                    y = [3, 2, 0, 1],
                    M = t(c, p, h),
                    x = new o.SphereGeometry(1, l, 4, 0, 2 * Math.PI, 0, .25 * Math.PI);
                a(x, v);
                var w = -(1 / 0),
                    T = 1 / 0;
                x.vertices.forEach(function(t) {
                    t.y < T && (T = t.y), t.x > w && (w = t.x)
                });
                var _ = 1 / w * f,
                    b = (new o.Matrix4).makeTranslation(0, -T, 0),
                    E = (new o.Matrix4).makeScale(_, .5 * _, _),
                    S = (new o.Matrix4).makeRotationFromEuler(new o.Euler(.5 * Math.PI, 0, 0)),
                    D = (new o.Matrix4).makeTranslation(0, 0, .5 * h),
                    A = D.multiply(S).multiply(E).multiply(b);
                M.merge(x, A);
                var N = new o.CircleGeometry(f, l);
                a(N, v);
                var L = (new o.Matrix4).makeRotationFromEuler(new o.Euler(Math.PI, 0, 0)),
                    I = (new o.Matrix4).makeTranslation(0, 0, .5 * -h + d),
                    C = I.multiply(L);
                M.merge(N, C);
                var j = (new o.Matrix4).makeTranslation(u, 0, 0);
                e.merge(M, j), j = (new o.Matrix4).makeTranslation(-u, 0, 0), e.merge(M, j);
                var O = t(m, p, .6 * h, .5 * Math.PI, Math.PI);
                e.merge(O);
                var P = (new o.Matrix4).makeScale(3, 3, 3),
                    z = (new o.Matrix4).makeTranslation(0, 3, 0);
                e.applyMatrix(P), e.applyMatrix(z), e.computeFaceNormals(), e.name = "Binoculars", r = e
            }
            return r
        }
        var r, o = t("three"),
            a = (t("./getPrismBox"), t("../../utils/colorVertices"));
        e.exports = n
    }, {
        "../../utils/colorVertices": 91,
        "./getPrismBox": 61,
        three: 520
    }],
    58: [function(t, e, i) {
        "use strict";

        function n() {
            if (!r) {
                var t, e, i, n, c, l, u, h, d, p, f, m, g, v, y, M, x, w, T, _, b;
                ! function() {
                    var E = function(e, i, n, r) {
                            var o = a(e, i, r);
                            t.merge(o)
                        },
                        S = function(e, i, n) {
                            h += .5 * i;
                            var r = new o.CylinderGeometry(e, e, i, 16, 1);
                            s(r, n);
                            var a = (new o.Matrix4).makeRotationFromEuler(new o.Euler(0, 0, .5 * Math.PI)),
                                c = (new o.Matrix4).makeTranslation(h, 0, 0),
                                l = c.multiply(a);
                            t.merge(r, l), h += .5 * i
                        };
                    for (t = new o.Geometry, e = new o.Color(2302755), i = new o.Color(16777215), E(1, 1, 0, e), n = 2 / 15, t.vertices.forEach(function(t) {
                            t.x > 0 && t.x < .45 && (t.x += n)
                        }), c = new o.BoxGeometry(.2, 11 / 15, 11 / 15, 1, 1, 1), s(c, e), l = (new o.Matrix4).makeTranslation(.6, 0, 0), t.merge(c, l), u = new o.BoxGeometry(13 / 15, 13 / 15, 13 / 15, 1, 1, 1), s(u, i), t.merge(u), h = .7, [5, 7, 11].forEach(function(t, i) {
                            var n = t / 15 * .5;
                            S(n, 2 / 15, e)
                        }), d = 8 / 15 * .5, p = new o.SphereGeometry(1, 16, 4, 0, 2 * Math.PI, 0, .25 * Math.PI), s(p, i), f = -(1 / 0), m = 1 / 0, p.vertices.forEach(function(t) {
                            t.y < m && (m = t.y), t.x > f && (f = t.x)
                        }), g = 1 / f * d, v = (new o.Matrix4).makeTranslation(0, -m, 0), y = (new o.Matrix4).makeScale(g, .5 * g, g), M = (new o.Matrix4).makeRotationFromEuler(new o.Euler(0, 0, .5 * -Math.PI)), x = (new o.Matrix4).makeTranslation(h, 0, 0), w = x.multiply(M).multiply(y).multiply(v), t.merge(p, w), T = (new o.Matrix4).makeScale(2, 2, 2), _ = (new o.Matrix4).makeTranslation(0, 3, 0), b = _.multiply(T), t.applyMatrix(b), t.computeFaceNormals(); t.faces.length > t.faceVertexUvs[0].length;) t.faceVertexUvs[0].push(t.faceVertexUvs[0][0]);
                    t.name = "Camera", r = t
                }()
            }
            return r
        }
        var r, o = t("three"),
            a = t("./getPrismBox"),
            s = t("../../utils/colorVertices");
        e.exports = n
    }, {
        "../../utils/colorVertices": 91,
        "./getPrismBox": 61,
        three: 520
    }],
    59: [function(t, e, i) {
        "use strict";

        function n() {
            if (!r) {
                var t = new o.BoxGeometry(.45, .45, .45);
                t.vertices.forEach(function(t) {
                    t.y += .2
                });
                var e = (new o.Matrix4).makeScale(2, 2, 2).multiply((new o.Matrix4).makeRotationY(.5 * Math.PI));
                t.applyMatrix(e), t = new o.FlatShadedGeometry(t), r = t
            }
            return r
        }
        var r, o = t("three");
        e.exports = n
    }, {
        three: 520
    }],
    60: [function(t, e, i) {
        "use strict";

        function n() {
            if (!r) {
                var t, e, i, n, s, c, l, u, h, d, p, f, m, g, v, y, M, x, w, T, _, b, E, S, D, A, N, L, I, C, j, O, P, z, R, k, B, U, G, B, F, T, B, B;
                ! function() {
                    var H = function() {
                            return M[M.length - 1]
                        },
                        V = function(t, e) {
                            x++;
                            var i = H().clone();
                            i.x += t, i.y += e, M.push(i)
                        },
                        Y = function(t, e, i) {
                            x += i;
                            for (var n = H().clone().sub(t), r = n.length(), o = Math.atan2(n.y, n.x), a = 1; a <= i; a++) {
                                var s = o + e * a / i,
                                    c = t.clone();
                                c.x += Math.cos(s) * r, c.y += Math.sin(s) * r, M.push(c)
                            }
                        },
                        Q = function(t, i) {
                            w = x, x = 1, i && M.reverse();
                            var r = new o.LatheGeometry(M, d, 1.5 * Math.PI + (v ? Math.PI / d : 0));
                            i && M.reverse(), a(r, t || n);
                            var s = H();
                            M.length = 0, M.push(s), e.merge(r)
                        },
                        W = function(t) {
                            for (var e = [], i = 0; i < p; i++) {
                                var n = i / p,
                                    r = n * Math.PI * 2;
                                e.push(new o.Vector2(Math.cos(r) * f, Math.sin(r) * f + t))
                            }
                            e.push(e[0]), e.reverse();
                            var a = new o.Shape(e);
                            return a.center = new o.Vector2(0, t), a
                        };
                    for (t = new o.Geometry, e = t, i = new o.Color(2302755), n = new o.Color(196852667), s = .038, c = .119, l = .5 * s, u = .001, h = 5e-4, d = 32, p = 16, f = l / 3, m = c - s, g = .5 * m, v = !0, y = new o.BoxGeometry(s, l, c, 1, 1, 1), a(y, n), M = [new o.Vector2(0, (-.019))], x = 0, w = 0, Y(new o.Vector2(0, 0), .5 * Math.PI, 8), V(0, u), Q(), V(2 * -u, 0), Q(), V(0, u), Q(i), V(2 * u, 0), Q(), V(0, u), T = H().clone(), T.x -= u, Y(T, .5 * Math.PI, 2), V(.5 * -u, 0), Q(), _ = t.vertices, b = [], E = _.length - 1, S = 0; S < d; S++) b.push(E), E -= w;
                    D = _[b[0]].y, A = b.map(function(t) {
                        return new o.Vector2(_[t].x, _[t].z)
                    }), t.vertices.forEach(function(t, e) {
                        t.z > 0 && (t.z += m)
                    }), N = b.map(function(t) {
                        return new o.Vector2(_[t].x, _[t].z)
                    }), L = A.slice(.5 * N.length, N.length), L.reverse(), I = N.slice(.5 * N.length, N.length), C = L.concat(I), C.push(C[0]), j = .009, O = W(g - j), P = W(g + j), z = new o.Shape(C), z.holes.push(O), z.holes.push(P), R = new o.ShapeGeometry(z), k = (new o.Matrix4).makeRotationFromEuler(new o.Euler(.5 * Math.PI, Math.PI, 0)), B = (new o.Matrix4).makeTranslation(0, D, 0), R.applyMatrix(k), R.applyMatrix(B), a(R, n), t.merge(R), M.length = 0, M.push(new o.Vector2(0, .001)), Y(new o.Vector2(0, .05), .113 * -Math.PI, 6), V(-u, 0), Q(null, !0), v = !1, U = new o.Geometry, e = U, M.push(new o.Vector2(0, D)), V(f - 2 * h, 0), V(h, 0), V(0, 3 * -h), V(h, 0), V(h, 3 * h), Q(i, !0), G = new o.BoxGeometry(.005, .0099, 66e-5, 1, 1, 1), a(G, n), U.merge(G), B = (new o.Matrix4).makeTranslation(0, 0, O.center.y), U.applyMatrix(B), t.merge(U), F = new o.Geometry, e = F, M.push(new o.Vector2(0, .0025)), T = new o.Vector2(0, .013), Y(T, .13 * Math.PI * .65, 2), Q(i, !0), V(0, -u), Q(null, !0), V(.666 * u, .5 * h), Q(null, !0), V(0, u), Q(null, !0), Y(T, .13 * Math.PI * .5, 2), V(h, 0), V(0, 3 * -h), V(h, 0), V(0, .0016), Q(i, !0), B = (new o.Matrix4).makeTranslation(0, 0, P.center.y), F.applyMatrix(B), t.merge(F), B = (new o.Matrix4).makeTranslation(0, 0, .5 * -m), t.applyMatrix(B), r = t
                }()
            }
            return r
        }
        var r, o = t("three"),
            a = t("../../utils/colorVertices");
        t("../../utils/normalizeVertices");
        e.exports = n
    }, {
        "../../utils/colorVertices": 91,
        "../../utils/normalizeVertices": 93,
        three: 520
    }],
    61: [function(t, e, i) {
        "use strict";

        function n(t, e, i) {
            var n = o(),
                s = n.clone();
            a(s, i);
            for (var c = new r.Geometry, l = new r.Geometry, u = -1, h = (new r.Matrix4).makeTranslation(0, 2, 0), d = 0; d < e; d++) l.merge(s), s.applyMatrix(h), u += 2;
            var p = (new r.Matrix4).makeTranslation(0, .5 + .5 * -u, 0),
                f = (new r.Matrix4).makeScale(1 / u, 1 / u, 1 / u);
            l.applyMatrix(p), l.applyMatrix(f);
            var m = new r.Geometry,
                g = (new r.Matrix4).makeTranslation(.5, 0, .5);
            l.applyMatrix(g), m.merge(l);
            var v = (new r.Matrix4).makeRotationFromEuler(new r.Euler(0, .5 * Math.PI, 0));
            l.applyMatrix(v), m.merge(l), l.applyMatrix(v), m.merge(l), l.applyMatrix(v), m.merge(l), c.merge(m), v = (new r.Matrix4).makeRotationFromEuler(new r.Euler(.5 * Math.PI, 0, 0)), m.applyMatrix(v), c.merge(m), v = (new r.Matrix4).makeRotationFromEuler(new r.Euler(0, .5 * Math.PI, 0)), m.applyMatrix(v), c.merge(m);
            var y = (new r.Matrix4).makeScale(t, t, t);
            return c.applyMatrix(y), c
        }
        var r = t("three"),
            o = t("./getUnitPrism"),
            a = t("../../utils/colorVertices");
        e.exports = n
    }, {
        "../../utils/colorVertices": 91,
        "./getUnitPrism": 65,
        three: 520
    }],
    62: [function(t, e, i) {
        "use strict";

        function n() {
            if (!r) {
                var t = function(t) {
                        i.push(new o.Color(t))
                    },
                    e = new o.Geometry,
                    i = [];
                t(10170677), t(10700594), t(11361331);
                var n = new o.TorusGeometry(.2, .085, 6, 18),
                    s = new o.Color(4817947);
                a(n, s), e.merge(n);
                for (var c = 0; c < 40; c++) {
                    var n = new o.TorusGeometry(.75 * Math.pow(Math.random(), 2) + .25, .0125, 3, 32),
                        l = (new o.Matrix4).makeRotationFromEuler(new o.Euler(6.28 * Math.random(), 6.28 * Math.random(), 6.28 * Math.random())),
                        u = (new o.Matrix4).makeTranslation(Math.random() - .5, Math.random() - .5, Math.random() - .5),
                        h = u.multiply(l),
                        d = i[c % i.length];
                    a(n, d), e.merge(n, h)
                }
                var p = (new o.Matrix4).makeScale(3, 3, 3),
                    f = (new o.Matrix4).makeTranslation(0, 2, 0),
                    m = f.multiply(p);
                e.applyMatrix(m), e.name = "Rub Tree", r = e
            }
            return r
        }
        var r, o = t("three"),
            a = t("../../utils/colorVertices");
        e.exports = n
    }, {
        "../../utils/colorVertices": 91,
        three: 520
    }],
    63: [function(t, e, i) {
        "use strict";

        function n() {
            if (!r) {
                var t = function(t, i, n, r) {
                        var s = a(t, i, r),
                            c = (new o.Matrix4).makeRotationFromEuler(new o.Euler(.33 * Math.PI, .25 * Math.PI, 0));
                        s.applyMatrix(c), c = (new o.Matrix4).makeRotationFromEuler(new o.Euler(Math.PI * n, 0, 0)), s.applyMatrix(c), e.merge(s)
                    },
                    e = new o.Geometry;
                t(29 / 244, 1, 0, 3355443), t(74 / 244, 5, .33, 6710886), t(142 / 244, 9, .66, 10066329), t(1, 15, 0, 12303291);
                var i = (new o.Matrix4).makeScale(8, 8, 8),
                    n = (new o.Matrix4).makeTranslation(0, 3, 0);
                e.applyMatrix(i), e.applyMatrix(n), e.computeFaceNormals(), e.name = "Satellite", r = e
            }
            return r
        }
        var r, o = t("three"),
            a = t("./getPrismBox");
        e.exports = n
    }, {
        "./getPrismBox": 61,
        three: 520
    }],
    64: [function(t, e, i) {
        "use strict";

        function n() {
            if (!r) {
                var t = new o.BoxGeometry(.45, .45, .45);
                t.vertices.forEach(function(t) {
                    t.y += .2
                }), t = new o.FlatShadedGeometry(t);
                var e = (new o.Matrix4).makeScale(2, 2, 2).multiply((new o.Matrix4).makeRotationY(.5 * Math.PI));
                t.applyMatrix(e), r = t
            }
            return r
        }
        var r, o = t("three");
        e.exports = n
    }, {
        three: 520
    }],
    65: [function(t, e, i) {
        "use strict";

        function n(t, e, i, n) {
            if (!o) {
                var o, a, s;
                ! function() {
                    var t = function(t, e, i) {
                            a.push(new r.Vector3(t, e, i))
                        },
                        e = function(e) {
                            t(0, e, 0), t(-.33, e, 0), t(0, e, -.33)
                        },
                        i = function(t, e, i) {
                            s.push(new r.Face3(t, e, i))
                        };
                    o = new r.Geometry, a = o.vertices, s = o.faces, e(.5), e(-.5), i(0, 2, 1), i(3, 4, 5), i(0, 4, 3), i(0, 1, 4), i(4, 1, 2), i(4, 2, 5), i(2, 3, 5), i(2, 0, 3)
                }()
            }
            return o
        }
        var r = t("three");
        e.exports = n
    }, {
        three: 520
    }],
    66: [function(t, e, i) {
        "use strict";

        function n(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t
        }

        function r(t) {
            if (o[t] || (t = a[t]), !o[t]) throw new Error(t + " is not a geometry in the library.");
            return o[t]
        }
        var o = {
                animal: t("./getAnimal"),
                car: t("./getCar"),
                trainEngine: t("./getTrainMiddle"),
                trainCar: t("./getTrainMiddle"),
                trainCaboose: t("./getTrainMiddle"),
                satellite: t("./getSatelliteDish"),
                camera: t("./getCamera"),
                binoculars: t("./getBinoculars"),
                rubtree: t("./getRubTree"),
                daydreamController: t("./getDaydreamController")
            },
            a = n({
                Bear: "animal",
                "Big Horn Sheep": "animal",
                "Black Bear": "animal",
                Bobcat: "animal",
                Car: "car",
                Chipmunk: "animal",
                Cougar: "animal",
                Coyote: "animal",
                Crow: "animal",
                Deer: "animal",
                "Deer Mouse": "animal",
                Dog: "animal",
                Elk: "animal",
                Fox: "animal",
                "Golden Eagle": "animal",
                "Grizzly Bear": "animal",
                Hare: "animal",
                Human: "animal",
                Lynx: "animal",
                Merganser: "animal",
                Moose: "animal",
                Mouse: "animal",
                "Pine Marten": "animal",
                Raven: "animal",
                Train: "trainEngine",
                Wolf: "animal",
                Wolverine: "animal",
                trailCam: "camera",
                "CCTV Camera": "camera",
                "Satellite Dish": "satellite",
                "Rub Tree": "rubtree",
                teleCom: "satellite",
                rubTree: "rubtree",
                binoculars: "binoculars"
            }, "trailCam", "camera"),
            s = {
                getCreator: r
            };
        e.exports = s
    }, {
        "./getAnimal": 56,
        "./getBinoculars": 57,
        "./getCamera": 58,
        "./getCar": 59,
        "./getDaydreamController": 60,
        "./getRubTree": 62,
        "./getSatelliteDish": 63,
        "./getTrainMiddle": 64
    }],
    67: [function(t, e, i) {
        "use strict";
        var n = t("./ColorAnimator"),
            r = new n;
        r.updateDayNight = r.updateAll, e.exports = r
    }, {
        "./ColorAnimator": 26
    }],
    68: [function(t, e, i) {
        "use strict";
        var n = {
            white: 16777215,
            lightGray: 14211288,
            gray: 2302755,
            darkGray: 1118481,
            black: 0,
            lightBlue: 13425918,
            animalAtNight: 11184810,
            staticObjectAtNight: 6710886
        };
        Object.keys(n).forEach(function(t) {
            n[t] = new THREE.Color(n[t])
        }), e.exports = n
    }, {}],
    69: [function(t, e, i) {
        "use strict";

        function n() {
            return r && !a || (r = new THREE.MeshBasicMaterial({
                color: ~~(16777215 * Math.random()),
                fog: !1,
                wireframe: !0
            }), r.visible = a), r
        }
        var r, o = t("urlparam"),
            a = o("debugColliders", !1);
        e.exports = n
    }, {
        urlparam: 529
    }],
    70: [function(t, e, i) {
        "use strict";
        var n = t("gsap"),
            r = (t("../util/decomposeQuat"), t("../util/query")()),
            o = t("../assets"),
            a = function() {};
        e.exports = function(t) {
            var e = (arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], t.camera),
                i = t.cameraBody,
                s = new THREE.Object3D,
                c = (r.skipIntro, new THREE.Mesh(new THREE.PlaneGeometry(1, 1, 1), new THREE.MeshBasicMaterial({
                    transparent: !0,
                    opacity: 0,
                    fog: !1
                })));
            c.scale.set(.5, .25, 1), c.renderOrder = 4e3, s.add(c);
            var l = function() {
                s.position.y = e.position.y, s.position.z = -1.75, i.add(s)
            };
            return {
                object3d: s,
                update: function(t, e) {},
                play: function(t, e) {
                    var i = this,
                        r = arguments.length <= 2 || void 0 === arguments[2] ? a : arguments[2];
                    o.load("assets/images/" + t, function(t, e) {
                        return t ? void console.error(t) : (c.material.map = e, void h())
                    });
                    var u = function() {
                            n.to(c.material, 1, {
                                opacity: 0,
                                onComplete: r
                            });
                            var t = s.position.y - .5;
                            n.to(s.position, 1, {
                                y: t
                            })
                        },
                        h = function() {
                            n.to(c.material, .2, {
                                opacity: 1,
                                delay: .05,
                                onComplete: function() {
                                    n.to(i, e, {
                                        onComplete: u
                                    })
                                },
                                onStart: function() {
                                    l()
                                }
                            })
                        }
                }
            }
        }
    }, {
        "../assets": 5,
        "../util/decomposeQuat": 108,
        "../util/query": 118,
        gsap: 465
    }],
    71: [function(t, e, i) {
        "use strict";
        var n = t("./getColliderMaterial"),
            r = t("../assets"),
            o = t("gsap");
        e.exports = function(t) {
            var e = new THREE.Object3D;
            e.position.z = .01;
            var i = new THREE.CircleGeometry(1, 6),
                a = new THREE.Object3D;
            a.renderOrder = 5e3, e.add(a);
            var s = .15,
                c = -.5;
            a.scale.multiplyScalar(s), a.position.y = c;
            var l = new THREE.Mesh(i, new THREE.MeshBasicMaterial({
                transparent: !0,
                fog: !1,
                opacity: 0,
                side: THREE.FrontSide,
                depthTest: !1,
                depthWrite: !1
            }));
            l.renderOrder = 5e3, a.add(l);
            var u = new THREE.Mesh(i, new THREE.MeshBasicMaterial({
                transparent: !0,
                fog: !1,
                opacity: 0,
                side: THREE.FrontSide,
                depthTest: !1,
                depthWrite: !1,
                map: r.load("assets/images/close-button-animal.png")
            }));
            u.scale.multiplyScalar(.5), u.renderOrder = 5005, a.add(u);
            var h = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3, 1, 1, 1), n());
            h.scale.multiplyScalar(2 * s), e.add(h), h.collisionOwner = e, e.occludesCursor = !0;
            var d = !1;
            return e.cursorOver = function() {
                d || (o.killTweensOf(a.scale), o.to(a.scale, .3, {
                    x: 1.35 * s,
                    y: 1.35 * s,
                    z: 1.35 * s,
                    overwrite: 1
                }), o.to(a.rotation, .3, {
                    z: Math.PI / 2,
                    overwrite: 1
                }))
            }, e.cursorOut = function() {
                d || (o.killTweensOf(a.scale), o.to(a.scale, .15, {
                    x: s,
                    y: s,
                    z: s,
                    overwrite: 1
                }), o.to(a.rotation, .3, {
                    z: 0,
                    overwrite: 1
                }))
            }, e.collisionEnabled = !1, {
                hitAreas: [h],
                collider: h,
                object3d: e,
                setBackgroundColor: function(t) {
                    l.material.color.set(t)
                },
                update: function(t, e) {},
                animateOut: function(t) {
                    d = !0, o.to(a.scale, .5, {
                        delay: t && t.delay,
                        x: .01 * s,
                        y: .01 * s,
                        z: .01 * s,
                        ease: Quint.easeInOut
                    }), o.to(l.material, .5, {
                        delay: t && t.delay,
                        opacity: 0,
                        overwrite: 1,
                        ease: Quint.easeInOut,
                        onComplete: function() {
                            e.collisionEnabled = !1, h.visible = !1, a.rotation.z = 0
                        }
                    }), o.to(u.material, .5, {
                        delay: t && t.delay,
                        opacity: 0,
                        overwrite: 1,
                        ease: Quint.easeInOut
                    }), o.to(a.position, .5, {
                        delay: t && t.delay,
                        y: c,
                        overwrite: 1,
                        ease: Quint.easeIn
                    })
                },
                animateIn: function(t) {
                    d = !1, o.to(a.position, .25, {
                        delay: t && t.delay,
                        y: 0,
                        overwrite: 1,
                        ease: Quint.easeOut
                    }), o.to(a.scale, .25, {
                        delay: t && t.delay,
                        x: s,
                        y: s,
                        z: s,
                        ease: Quint.easeInOut
                    }), o.to(l.material, .25, {
                        delay: t && t.delay,
                        opacity: 1,
                        overwrite: 1,
                        ease: Quint.easeInOut,
                        onStart: function() {
                            h.visible = !0, e.collisionEnabled = !0
                        }
                    }), o.to(u.material, .25, {
                        delay: t && t.delay,
                        opacity: 1,
                        overwrite: 1,
                        ease: Quint.easeInOut
                    })
                }
            }
        }
    }, {
        "../assets": 5,
        "./getColliderMaterial": 69,
        gsap: 465
    }],
    72: [function(t, e, i) {
        "use strict";
        var n = t("lodash.defaults"),
            r = t("three-bmfont-text"),
            o = t("defined"),
            a = t("../util/omissiveAssign"),
            s = t("three-buffer-vertex-data"),
            c = (t("unlerp"), t("path"), "precision highp float;\n#define GLSLIFY 1\nattribute vec4 position;\nattribute vec2 uv;\nattribute vec4 textStyle;\n\nvarying vec2 vUv;\nvarying vec2 fullTextCoords;\nvarying vec3 vColor;\n\nuniform mat4 projectionMatrix;\nuniform mat4 modelViewMatrix;\nuniform vec4 bounds;\nuniform float animation;\nuniform bool isMask;\n\nvoid main() {\n  float fU = (position.x - bounds.x) / (bounds.z - bounds.x);\n  float fV = (position.y - bounds.y) / (bounds.w - bounds.y);\n\n  vUv = uv;\n  vColor = textStyle.rgb;\n  fullTextCoords = vec2(1.0 - fU, fV);\n  vec4 worldPos = position;\n  // this is in pixel units since the parent object\n  // is the one scaling it into world space\n  if (!isMask) worldPos.y += (1.0 - animation) * 10.0;\n  gl_Position = projectionMatrix *\n                modelViewMatrix *\n                worldPos;\n}\n"),
            l = "#extension GL_OES_standard_derivatives : enable\nprecision highp float;\n#define GLSLIFY 1\n\nfloat aastep(float threshold, float value) {\n  #ifdef GL_OES_standard_derivatives\n    float afwidth = length(vec2(dFdx(value), dFdy(value))) * 0.70710678118654757;\n    return smoothstep(threshold-afwidth, threshold+afwidth, value);\n  #else\n    return step(threshold, value);\n  #endif  \n}\n\nfloat skewClip (vec2 vUv_0, float animate) {\n  float smooth = min(1.0, smoothstep(0.5, 0.0, abs(animate - 0.5)));\n  float steepness = 0.1;\n  float angle = (vUv_0.y) * steepness * smooth;\n  float xOff = vUv_0.x + angle;\n  return step(1.0 - animate, xOff);\n  // return aastep(1.0 - animate, xOff);\n}\n\nuniform float opacity;\nuniform vec3 color;\nuniform sampler2D map;\nuniform float animation;\nvarying vec2 vUv;\nvarying vec3 vColor;\nvarying vec2 fullTextCoords;\n\nuniform bool isMask;\n\nvoid main() {\n  vec4 texColor = texture2D(map, vUv);\n  \n  // get SDF text with anti-aliasing\n  // float alpha = smoothstep(0.5 - 0.001, 0.5 + 0.001, texColor.a);\n  float alpha = aastep(0.5, texColor.a);\n  \n  if (isMask) {\n    alpha *= skewClip(fullTextCoords, animation);\n  } else {\n    alpha *= animation;    \n  }\n  gl_FragColor = vec4(color.rgb, opacity * alpha);\n  if (gl_FragColor.a < 0.0001) discard;\n}\n",
            u = t("../assets"),
            h = -.002,
            d = "assets/fonts/DIN-CondensedRegular.txt",
            p = "assets/fonts/DIN-CondensedMediumItalic.txt",
            f = .2,
            m = .6,
            g = function(t) {
                return u("italic" === t ? p : d)
            },
            v = function(t) {
                var e = "italic" === t ? p : d,
                    i = e.replace(/\.txt$/i, ".png");
                return u.load(i)
            },
            y = {
                width: null,
                color: 0,
                renderOrderOffset: 0,
                align: "left"
            };
        e.exports = function(t, e) {
            function i(t, e) {
                for (var i = 0, n = 0; n < t.length; n++) {
                    var r = t[n],
                        o = r.text,
                        a = o.length;
                    if (e >= i && e < i + a) return n;
                    i += a
                }
                return -1
            }

            function u(t) {
                T.uniforms.bounds.value.set(t.min.x, t.min.y, t.max.x, t.max.y)
            }

            function d(t) {
                E = t;
                var e = t * h;
                b.scale.set(e, e, e)
            }
            e = n(e, y);
            var p = e.weight,
                M = g(p),
                x = r({
                    width: e.width,
                    align: e.align,
                    letterSpacing: e.letterSpacing,
                    lineHeight: e.lineHeight,
                    font: M
                }),
                w = e.color,
                T = new THREE.RawShaderMaterial(a({
                    vertexShader: c,
                    fragmentShader: l,
                    uniforms: {
                        isMask: {
                            type: "i",
                            value: 0
                        },
                        animation: e.animationValue || {
                            type: "f",
                            value: 1
                        },
                        bounds: {
                            type: "v4",
                            value: new THREE.Vector4
                        },
                        opacity: {
                            type: "f",
                            value: o(e.opacity, 1)
                        },
                        map: {
                            type: "t",
                            value: v(p)
                        },
                        color: {
                            type: "c",
                            value: new THREE.Color(w)
                        }
                    },
                    side: THREE.DoubleSide,
                    transparent: !0
                }, e, ["background", "arrow", "width", "animationValue", "align", "backgroundOpacity", "backgroundColor", "renderOrderOffset", "pixelPadding", "color", "size", "weight", "weight2", "letterSpacing"])),
                _ = new THREE.Mesh(x, T);
            _.frustumCulled = !1, _.renderOrder = 4e3 + e.renderOrderOffset;
            var b = new THREE.Object3D;
            b.rotation.y = Math.PI;
            var E = void 0;
            return d(o(e.size, 1)), b.add(_), {
                object3d: b,
                geometry: x,
                setSize: d,
                weight: p,
                material: T,
                setMaskAnimationEnabled: function(t) {
                    T.uniforms.isMask.value = t ? 1 : 0
                },
                getDefaultScale: function() {
                    return Math.abs(h)
                },
                getSize: function() {
                    return E
                },
                getComputedScale: function() {
                    return Math.abs(E * h)
                },
                setBounds: u,
                setWeight: function(t) {
                    t !== p && (this.weight = t, p = t, M = g(p), T.uniforms.map.value = v(p), T.needsUpdate = !0)
                },
                setText: function(t) {
                    Array.isArray(t) || (t = [t]);
                    var e = t.map(function(t) {
                            return "string" == typeof t ? {
                                text: t
                            } : t
                        }),
                        n = e.map(function(t) {
                            return t.text
                        }).join("");
                    x.update({
                        text: n,
                        font: M
                    });
                    var r = [],
                        a = new THREE.Color(w),
                        c = x.visibleGlyphs;
                    c.forEach(function(t) {
                        var n = i(e, t.index);
                        if (n === -1) throw new Error("Got chunks out of range");
                        var s = e[n],
                            c = o(s.color, w);
                        a.setStyle(c);
                        var l = 0,
                            u = [a.r, a.g, a.b, l];
                        r.push(u, u, u, u)
                    }), s.attr(x, "textStyle", r, 4), x.computeBoundingBox(), u(x.boundingBox);
                    var l = x.layout,
                        h = "italic" === p ? m : f;
                    _.position.x = -l.width, _.position.y = l.height / 2 - l.descender * h
                }
            }
        }
    }, {
        "../assets": 5,
        "../util/omissiveAssign": 116,
        defined: 440,
        "lodash.defaults": 484,
        path: 500,
        "three-bmfont-text": 516,
        "three-buffer-vertex-data": 519,
        unlerp: 528
    }],
    73: [function(t, e, i) {
        "use strict";
        var n = t("simple-media-element").video,
            r = t("dom-events"),
            o = t("gsap"),
            a = t("object-assign"),
            s = t("../util/isMobile"),
            c = (t("../util/decomposeQuat"), t("mobile-detect")),
            l = t("iphone-inline-video"),
            u = function() {},
            h = new c(window.navigator.userAgent);
        e.exports = function(t) {
            function e() {
                A.opacity = 0
            }

            function i() {
                var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                A.opacity = 0, N.visible = !0, o.to(A, 2, a({
                    opacity: 1,
                    ease: "easeOutQuad",
                    overwrite: 1
                }, t)), g.owner || v.once("tap", function() {
                    d()
                })
            }

            function c() {
                var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                L = t.callback || u, o.to(A, 1, a({
                    opacity: 0,
                    ease: "easeOutQuad",
                    overwrite: 1,
                    onComplete: function() {
                        N.visible = !1, L()
                    }
                }, t))
            }

            function d(t) {
                I && (I = !1, y.pause(), c({
                    callback: t
                }))
            }

            function p(t) {
                var e = arguments.length <= 1 || void 0 === arguments[1] ? u : arguments[1];
                A.map = THREE.ImageUtils.loadTexture("assets/" + t, null, function(t) {
                    m(t.image.width, t.image.height), I = !0, i(), e()
                }, e)
            }

            function f() {
                var t = arguments.length <= 0 || void 0 === arguments[0] ? u : arguments[0],
                    e = !1,
                    n = function() {
                        e || (e = !0, D.needsUpdate = !0, N.visible = !0, m(y.videoWidth, y.videoHeight), "number" == typeof y.videoWidth && isFinite(y.videoWidth) && y.videoWidth > 0 && (i(), N.position.y = y.videoHeight / y.videoWidth - .48, t()))
                    };
                r.once(y, "canplay", function() {
                    e || n()
                }), setTimeout(function() {
                    e || n()
                }, 4e3)
            }

            function m(t, e) {
                if ("number" == typeof t && isFinite(t) && t > 0) {
                    var i = g.scale;
                    N.scale.set(i, i / (t / e), i)
                }
            }
            var g = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                v = (t.cameraBody, g.interactions);
            g.curvature = g.curvature || .01, g.scale = g.scale || 8, g.distanceYToAnimal = g.distanceYToAnimal || 0;
            var y = n(),
                M = g.muted !== !1;
            g.loop !== !1 && y.setAttribute("loop", "loop"), M && y.setAttribute("muted", "muted"), y.setAttribute("webkit-playsinline", ""), y.setAttribute("playsinline", "playsinline");
            var x = "standalone" in window.navigator && window.navigator.standalone,
                w = !M;
            s && (!x && h.is("iOS") && parseInt(h.version("iOS"), 10) <= 9 ? l(y) : h.is("iOS") && h.is("Chrome") && l(y, w));
            var T = new THREE.PlaneGeometry(1, 1, 16, 9),
                _ = new THREE.Vector3(0, 0, 5 / g.curvature),
                b = new THREE.Box3;
            T.vertices.forEach(function(t) {
                t.y *= .3, t.sub(_), t.normalize(), t.add(_), t.y /= .3, b.expandByPoint(t)
            });
            var E = b.min.clone().add(b.max).multiplyScalar(.5),
                S = b.getSize();
            S.x = 1 / S.x, S.y = 1 / S.y, S.z = 1 / S.z, S.z *= .2 * g.curvature, T.vertices.forEach(function(t) {
                t.sub(E), t.multiply(S)
            });
            var D = new THREE.Texture(y);
            D.format = THREE.RGBFormat, D.minFilter = THREE.LinearFilter, D.generateMipmaps = !1, D.needsUpdate = !0;
            var A = new THREE.MeshBasicMaterial({
                    side: THREE.DoubleSide,
                    transparent: !0,
                    depthTest: !0,
                    depthWrite: !0,
                    map: D,
                    opacity: 0,
                    fog: !1
                }),
                N = new THREE.Mesh(T, A);
            N.visible = !1, N.renderOrder = 3998;
            var L = u,
                I = !1;
            return r.on(y, "playing", function() {
                I = !0
            }), r.on(y, "pause", function() {
                I = !1
            }), r.on(y, "stop", function() {
                I = !1
            }), r.on(y, "ended", function() {
                I = !1, c()
            }), {
                hitAreas: [N],
                object3d: N,
                element: y,
                play: function() {
                    arguments.length <= 0 || void 0 === arguments[0] ? u : arguments[0];
                    try {
                        y.play()
                    } catch (t) {
                        console.error(t)
                    }
                },
                pause: function() {
                    y.pause()
                },
                isPlaying: function() {
                    return I
                },
                setSource: function(t) {
                    var e = arguments.length <= 1 || void 0 === arguments[1] ? u : arguments[1];
                    return N.visible = !1, t.indexOf(".jpg") !== -1 ? void p(t, e) : (A.map = D, I = !1, y.src = "assets/" + t, y.currentTime = 0, void f(e))
                },
                update: function(t, e) {
                    I && y.readyState >= y.HAVE_CURRENT_DATA && (m(y.videoWidth, y.videoHeight), D.needsUpdate = !0)
                },
                animateIn: i,
                animateOut: c,
                setAnimatedOut: e,
                close: d
            }
        }
    }, {
        "../util/decomposeQuat": 108,
        "../util/isMobile": 114,
        "dom-events": 443,
        gsap: 465,
        "iphone-inline-video": 471,
        "mobile-detect": 487,
        "object-assign": 490,
        "simple-media-element": 511
    }],
    74: [function(t, e, i) {
        "use strict";

        function n(t) {
            var e = new r.Geometry,
                i = [
                    [-.5, .5],
                    [.5, .5],
                    [-.5, -.5],
                    [.5, -.5]
                ],
                n = [
                    [0, 1, 2],
                    [2, 1, 3]
                ],
                o = [
                    [.8, 0],
                    [0, 0],
                    [.8, 1],
                    [0, 1]
                ];
            t && (i = i.concat([
                [-.1, .5],
                [.1, .5],
                [0, .6]
            ]), n.push([4, 5, 6]), o = o.concat([
                [.8, 0],
                [.8, 1],
                [1, .5]
            ])), o = o.map(function(t) {
                return new r.Vector2(t[0], t[1])
            });
            for (var a = 0; a < i.length; a++) e.vertices.push(new r.Vector3(i[a][0], i[1], 0));
            for (var a = 0; a < n.length; a++) e.faces.push(new r.Face3(n[a][0], n[a][1], n[a][2]));
            return e.faceVertexUvs[0] = n.map(function(t) {
                return t.map(function(t) {
                    return o[t]
                })
            }), e
        }
        var r = t("three");
        e.exports = n
    }, {
        three: 520
    }],
    75: [function(t, e, i) {
        "use strict";

        function n() {
            return a || (a = "#define GLSLIFY 1\nvarying vec2 vUv;\nvoid main() {\n\tvUv = uv;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n"), a
        }

        function r() {
            return s || (s = "#define GLSLIFY 1\nuniform vec3 color;\nuniform float animation;\nuniform float opacity;\n\nvarying vec2 vUv;\n\nfloat aastep(float threshold, float value) {\n  #ifdef GL_OES_standard_derivatives\n    float afwidth = length(vec2(dFdx(value), dFdy(value))) * 0.70710678118654757;\n    return smoothstep(threshold-afwidth, threshold+afwidth, value);\n  #else\n    return step(threshold, value);\n  #endif  \n}\n\nfloat skewClip (vec2 vUv_0, float animate) {\n  float smooth = min(1.0, smoothstep(0.5, 0.0, abs(animate - 0.5)));\n  float steepness = 0.1;\n  float angle = (vUv_0.y) * steepness * smooth;\n  float xOff = vUv_0.x + angle;\n  return step(1.0 - animate, xOff);\n  // return aastep(1.0 - animate, xOff);\n}\n\nvoid main() {\n  float alpha = animation < 1.0 ? skewClip(1.0 - vUv, animation) : 1.0;\n  // if(animation >= vUv.x) {\n  // \talpha = 1.0;\n  // }\n  if (animation == 0.0) discard;\n  gl_FragColor = vec4(color, alpha * opacity);\n}\n"), s
        }

        function o(t) {
            t = c(t, u);
            var e = new l.ShaderMaterial({
                extensions: {
                    derivatives: !0
                },
                vertexShader: n(),
                fragmentShader: r(),
                depthTest: t.depthTest !== !1,
                depthWrite: t.depthWrite !== !1,
                transparent: void 0 !== t.transparent ? t.transparent : t.opacity < 1,
                uniforms: {
                    color: {
                        type: "c",
                        value: t.color
                    },
                    opacity: {
                        type: "f",
                        value: t.opacity
                    },
                    animation: t.animationValue
                }
            });
            return e.color = t.color, e
        }
        var a, s, c = t("lodash.defaults"),
            l = t("three"),
            u = {
                color: new l.Color(65535),
                fogColor: new l.Color(16711680)
            };
        e.exports = o
    }, {
        "lodash.defaults": 484,
        three: 520
    }],
    76: [function(t, e, i) {
        "use strict";

        function n(t) {
            t = o(t, c), r.Mesh.call(this, a(t.arrow), s(t)), this.arrowSize = t.arrowSize, this.setSize(t.width, t.height)
        }
        var r = t("three"),
            o = t("lodash.defaults"),
            a = t("./getGeometry"),
            s = t("./getMaterial"),
            c = {
                color: 16711680,
                opacity: 1,
                width: .25,
                height: .05,
                arrowSize: .5
            };
        n.prototype = Object.create(r.Mesh.prototype), n.prototype.setBackground = function(t) {
            this.material.uniforms.color.value.set(t)
        }, n.prototype.setSize = function(t, e) {
            var i = .5 * t,
                n = .5 * e,
                r = this.geometry.vertices;
            if (r[0].set(-i, n, 0), r[1].set(i, n, 0), r[2].set(-i, -n, 0), r[3].set(i, -n, 0), r.length > 4) {
                var o = this.arrowSize * e * .5;
                r[4].set(-o, -n, 0), r[5].set(o, -n, 0), r[6].set(0, -n - o, 0)
            }
            this.geometry.verticesNeedUpdate = !0
        }, e.exports = n
    }, {
        "./getGeometry": 74,
        "./getMaterial": 75,
        "lodash.defaults": 484,
        three: 520
    }],
    77: [function(t, e, i) {
        "use strict";

        function n(t, e) {
            e = r(e, s), e.color instanceof o.Color || (e.color = new o.Color(e.color)), o.Object3D.call(this, e);
            var i = new a(t, {
                backgroundColor: e.color,
                letterSpacing: 3,
                size: .75,
                color: 16777215,
                arrow: !0,
                renderOrderOffset: 0
            });
            i.object3d.scale.multiplyScalar(e.size), this.add(i.object3d), i.animateOut(), this.label = i, this.size = e.size, this.shown = !1, this.hide = this.hide.bind(this)
        }
        var r = t("lodash.defaults"),
            o = t("three"),
            a = t("../TextLabel"),
            s = {
                size: 13.5,
                color: "#e6434e"
            };
        n.prototype = Object.create(o.Object3D.prototype), Object.defineProperty(n.prototype, "color", {
            get: function() {
                return this._color
            },
            set: function(t) {
                this._color = t, this.label.background.material.uniforms.color.value = t
            }
        }), n.prototype.animateIn = function() {
            this.shown || (this.shown = !0, this.visible = !0, this.label.animateIn())
        }, n.prototype.animateOut = function() {
            this.shown && (this.shown = !1, this.label.animateOut({
                onComplete: this.hide
            }))
        }, n.prototype.hide = function() {
            this.visible = !1
        }, n.prototype.changeText = function(t) {
            if (t !== this.text) {
                this.text = t;
                var e = this.label;
                e.setText(t.toUpperCase());
                var i = e.getDimensions();
                e.object3d.position.y = .5 * i[1] * this.size, e.object3d.position.x = .5 * -i[0] * this.size, e.object3d.position.z = .1, this.animateOut()
            }
        }, e.exports = n
    }, {
        "../TextLabel": 46,
        "lodash.defaults": 484,
        three: 520
    }],
    78: [function(t, e, i) {
        "use strict";

        function n(t, e) {
            return void 0 !== t ? t : e
        }

        function r(t) {
            return void 0 !== o(t)
        }
        var o = (t("gsap"), t("urlparam")),
            a = t("../util/isDesktop"),
            s = t("../util/isMagicWindow"),
            c = t("./utils/convertEasingFunctionToGsap")(t("eases/quad-in-out")),
            l = {},
            u = {
                scaleAll: 1,
                userSize: .5,
                spriteScale: .175,
                fogRatio: .2,
                mapSize: 16,
                mapSegments: 4,
                elevation: 5,
                nameTagDistance: 5,
                actorUpdates: 6,
                actorCount: 20,
                animalCount: 6,
                cursorDistanceFromCamera: 20,
                distanceToAnimalWindow: 3.5,
                animalWindowScale: 1.5,
                animalWindowHeight: 1,
                userFootHeight: 1.2,
                nameTagScale: .35,
                colliderScale: 2,
                cameraMovementEasingFunction: Linear.easeNone
            },
            h = {
                userSize: 1.45,
                spriteScale: .05,
                nameTagDistance: 7,
                cursorDistanceFromCamera: 12,
                distanceToAnimalWindow: 2,
                animalWindowScale: 1.2,
                animalWindowHeight: 1.5,
                colliderScale: 1,
                cameraMovementEasingFunction: c
            },
            d = {
                nameTagScale: .75,
                colliderScale: 2,
                cameraMovementEasingFunction: c
            };
        Object.keys(u).forEach(function(t) {
            var e = u[t],
                i = n(h[t], u[t]),
                c = n(d[t], u[t]);
            Object.defineProperty(l, t, {
                get: function() {
                    return r(t) ? o(t) : a() ? i : s() ? c : e
                }
            })
        }), e.exports = l
    }, {
        "../util/isDesktop": 112,
        "../util/isMagicWindow": 113,
        "./utils/convertEasingFunctionToGsap": 92,
        "eases/quad-in-out": 446,
        gsap: 465,
        urlparam: 529
    }],
    79: [function(t, e, i) {
        "use strict";

        function n(t) {
            this.app = t, o.Object3D.call(this)
        }
        var r = t("../TextLabel"),
            o = (t("object-assign"), t("three")),
            a = (t("../../getApp"), function() {}),
            s = {
                white: new o.Color(16777215),
                gray: new o.Color(2499629)
            },
            c = {
                backgroundColor: s.gray,
                size: 3,
                weight: "italic",
                pixelPadding: [20, 10]
            };
        n.prototype = Object.create(o.Object3D.prototype), n.prototype.addLabels = function() {
            for (var t = this, e = arguments.length, i = Array(e), n = 0; n < e; n++) i[n] = arguments[n];
            this.labels = i.map(function(e) {
                var i = new r(t.app, c);
                return i.setText(e), i
            }), this.sizes = this.labels.map(function(t) {
                var e = t.getDimensions();
                return e
            });
            for (var o = 0, a = 0; a < this.labels.length; a++) this.labels[a].object3d.position.x = .5 * -this.sizes[a][0], this.labels[a].object3d.position.y = 1.2 * -(this.sizes[a][1] + o), o += this.sizes[a][1], this.add(this.labels[a].object3d);
            this.object3d = this, this.position.y += .5 * o, this.scale.multiplyScalar(.25)
        }, n.prototype.animateIn = function() {
            for (var t = arguments.length <= 0 || void 0 === arguments[0] ? a : arguments[0], e = 0; e < this.labels.length; e++) {
                var i = e === this.labels.length - 1 ? t : void 0;
                this.labels[e].animateIn({
                    delay: .2 * e,
                    onComplete: i
                })
            }
        }, n.prototype.animateOut = function() {
            for (var t = arguments.length <= 0 || void 0 === arguments[0] ? a : arguments[0], e = 0; e < this.labels.length; e++) {
                var i = 0 === e ? t : void 0,
                    n = .05 * (this.labels.length - 1 - e);
                this.labels[e].animateOut({
                    delay: n,
                    onComplete: i
                })
            }
        }, e.exports = n
    }, {
        "../../getApp": 16,
        "../TextLabel": 46,
        "object-assign": 490,
        three: 520
    }],
    80: [function(t, e, i) {
        "use strict";

        function n(t) {
            r.call(this, t), this.addLabels("Canmore has doubled in size", "over the past decade' and it gets", "about five million tourists a", "year.")
        }
        var r = t("./Quote");
        n.prototype = Object.create(r.prototype), e.exports = n
    }, {
        "./Quote": 79
    }],
    81: [function(t, e, i) {
        "use strict";

        function n(t) {
            r.call(this, t), this.addLabels("It's hard to say where the wired", "world ends and the wild one", "begins")
        }
        var r = t("./Quote");
        n.prototype = Object.create(r.prototype), e.exports = n
    }, {
        "./Quote": 79
    }],
    82: [function(t, e, i) {
        "use strict";

        function n(t) {
            r.call(this, t), this.addLabels("15 remote-sensing cameras,", "infrared counters, and barbed-", "wire snags to collect my hair")
        }
        var r = t("./Quote");
        n.prototype = Object.create(r.prototype), e.exports = n
    }, {
        "./Quote": 79
    }],
    83: [function(t, e, i) {
        "use strict";

        function n(t) {
            r.call(this, t), this.addLabels("Click on the land to move")
        }
        var r = t("./Quote");
        n.prototype = Object.create(r.prototype), e.exports = n
    }, {
        "./Quote": 79
    }],
    84: [function(t, e, i) {
        "use strict";

        function n(t) {
            o.Object3D.call(this);
            var e = new r(t, {
                    background: !1,
                    size: 6,
                    color: "#aaaaaa",
                    pixelPadding: [0, 10],
                    letterSpacing: 1
                }),
                i = new r(t, {
                    background: !1,
                    size: 6,
                    pixelPadding: [0, 10],
                    letterSpacing: 1
                }),
                n = new r(t, {
                    background: !1,
                    size: 6,
                    color: "#aaaaaa",
                    letterSpacing: 1
                });
            e.setText("This is a"), i.setText("20:00 minute"), n.setText("Interactive documentary");
            var a = e.getDimensions(),
                s = i.getDimensions(),
                c = n.getDimensions();
            e.object3d.position.x = .5 * -(a[0] + s[0]), i.object3d.position.x = e.object3d.position.x + a[0], n.object3d.position.x = .5 * -c[0], e.object3d.position.y = .3 * a[1], i.object3d.position.y = .3 * s[1], n.object3d.position.y = .4 * -c[1], this.add(e.object3d), this.add(i.object3d), this.add(n.object3d);
            var l = t.videoPlayer.videoElement;
            t.videoPlayer.isInputStartEnabled() && this._setupInputStart(t), this.object3d = this, this.label1 = e, this.label1b = i, this.label2 = n, this.videoElement = l, this.scale.multiplyScalar(.25), this.now = 0, this.daydreamControllerTiltSpeed = 3, this.daydreamControllerTiltRange = .2
        }
        var r = t("../TextLabel"),
            o = (t("object-assign"), t("three")),
            a = t("../animals/geometryLibrary"),
            s = t("../CirclePulse"),
            c = t("gsap");
        n.prototype = Object.create(o.Object3D.prototype), n.prototype._setupInputStart = function(t) {
            var e = this,
                i = new r(t, {
                    background: !1,
                    size: 6,
                    color: "#fff",
                    pixelPadding: [0, 10],
                    letterSpacing: 1
                });
            i.setText("Click to start");
            var n = new o.Mesh(a.getCreator("daydreamController")(), new o.MeshLambertMaterial({
                    vertexColors: o.VertexColors,
                    color: 16777215,
                    opacity: 0,
                    transparent: !0
                })),
                l = .2,
                u = Math.PI / 180;
            n.rotation.x = .5 * Math.PI - 20 * u, n.rotation.y = 30 * u, n.rotation.z = -20 * u, n.rotation.originalY = n.rotation.y, n.position.z = -1.2, n.position.y = 1.305 - l, n.scale.multiplyScalar(2);
            var h = new s;
            h.scale.multiplyScalar(.15), h.rotation.x = .5 * Math.PI, h.position.z = -.04, h.position.y = .005, n.add(h), i.position.z = -1.2, i.position.y = 1.375 - l, i.position.x = .09, i.scale.multiplyScalar(.2), this.daydreamController = n, this.circlePulse = h, this.clickToStartLabel = i, t.videoPlayer.onInputStart(function() {
                h.animateOut(), c.to(n.material, .5, {
                    opacity: 0,
                    ease: "easeOutExpo",
                    onComplete: function() {
                        e.parent.parent.remove(i), e.parent.parent.remove(n)
                    }
                }), i.animateOut()
            })
        }, n.prototype.update = function(t, e) {
            this.now += t, this.daydreamController && (this.daydreamController.rotation.y = this.daydreamController.rotation.originalY + Math.sin(this.now * this.daydreamControllerTiltSpeed) * this.daydreamControllerTiltRange, this.circlePulse.update(t)), this.updateClock()
        }, n.prototype.animateIn = function(t) {
            this.label1.animateIn({
                delay: 2
            }), this.label1b.animateIn({
                delay: 2.2
            }), this.label2.animateIn({
                delay: 2.5,
                onComplete: t
            }), this.clickToStartLabel && (this.parent.parent.add(this.daydreamController), this.parent.parent.add(this.clickToStartLabel), this.daydreamController.material.opacity = 0, c.to(this.daydreamController.material, 3, {
                opacity: 1,
                delay: 2.75,
                ease: "easeOutExpo"
            }), this.circlePulse.animateIn(2.75), this.clickToStartLabel.animateIn({
                delay: 2.75
            }))
        }, n.prototype.animateOut = function(t) {
            console.log("slide 20 minutes out?"), this.label1.animateOut({
                delay: .25,
                onComplete: t
            }), this.label1b.animateOut({
                delay: .12
            }), this.label2.animateOut({
                delay: 0
            })
        }, n.prototype.updateClock = function() {
            var t = this.videoElement.duration - 142 - this.videoElement.currentTime,
                e = Math.floor(t / 60),
                i = Math.floor(t - 60 * e),
                n = ("0" + e).slice(-2) + ":" + ("0" + i).slice(-2) + " minute";
            n !== this.lastTimeString && (this.lastTimeString = n, this.label1b.setText(n))
        }, e.exports = n
    }, {
        "../CirclePulse": 24,
        "../TextLabel": 46,
        "../animals/geometryLibrary": 66,
        gsap: 465,
        "object-assign": 490,
        three: 520
    }],
    85: [function(t, e, i) {
        "use strict";

        function n(t) {
            r.Object3D.call(this);
            var e = new o;
            e.position.y = .45, e.scale.set(4, 4, 1), this.add(e), this.scale.multiplyScalar(.25), this.bear71Logo = e, this.onResize = this.onResize.bind(this)
        }
        var r = (t("gsap"), t("three")),
            o = t("../Bear71Logo");
        ({
            white: new r.Color(16777215),
            gray: new r.Color(4473924)
        });
        n.prototype = Object.create(r.Object3D.prototype), n.prototype.update = function(t, e) {
            this.bear71Logo.update(t, e)
        }, n.prototype.animateIn = function(t) {
            t && t()
        }, n.prototype.animateOut = function(t) {
            this.bear71Logo.animateOut()
        }, n.prototype.onResize = function(t, e) {
            this.bear71Logo.onResize(t, e)
        }, e.exports = n
    }, {
        "../Bear71Logo": 21,
        gsap: 465,
        three: 520
    }],
    86: [function(t, e, i) {
        "use strict";

        function n() {
            r.Object3D.call(this), this.doNotChase = !0
        }
        var r = t("three");
        n.prototype = Object.create(r.Object3D.prototype), n.prototype.animateIn = function(t) {
            setTimeout(t, 100)
        }, n.prototype.animateOut = function(t) {
            setTimeout(t, 100)
        }, e.exports = n
    }, {
        three: 520
    }],
    87: [function(t, e, i) {
        "use strict";

        function n(t) {
            o.Object3D.call(this);
            var e = new r(t, {
                    background: !1,
                    size: 6,
                    letterSpacing: 1
                }),
                i = new r(t, {
                    background: !1,
                    size: 6,
                    letterSpacing: 1,
                    color: "#aaaaaa"
                });
            e.setText("Created by Jeremy Mendes and Leanne Allison"), i.setText("Co-created and Produced by the National Film Board of Canada");
            var n = e.getDimensions(),
                a = i.getDimensions();
            e.object3d.position.x = .5 * -n[0], i.object3d.position.x = .5 * -a[0], e.object3d.position.y = .3 * n[1], i.object3d.position.y = .4 * -a[1], this.add(e.object3d), this.add(i.object3d), this.label1 = e, this.label2 = i, this.scale.multiplyScalar(.175)
        }
        var r = t("../TextLabel"),
            o = t("three");
        n.prototype = Object.create(o.Object3D.prototype), n.prototype.animateIn = function(t) {
            this.label1.animateIn({
                delay: 0
            }), this.label2.animateIn({
                delay: .5,
                onComplete: t
            })
        }, n.prototype.animateOut = function(t) {
            this.label1.animateOut({
                delay: .25,
                onComplete: t
            }), this.label2.animateOut({
                delay: 0
            })
        }, e.exports = n
    }, {
        "../TextLabel": 46,
        three: 520
    }],
    88: [function(t, e, i) {
        "use strict";

        function n(t, e) {
            function i() {
                l.animateOut(function() {
                    t.videoPlayer.seek(0), t.resetAnimals()
                }), t.cursor.removeCollider(c.collider)
            }
            o.Object3D.call(this);
            var n = new r(t, {
                background: !1,
                size: 6
            });
            n.setText("END");
            var s = n.getDimensions();
            n.object3d.position.x = .5 * -s[0], n.object3d.position.y = .8 * s[1], n.animateOut(), this.add(n.object3d), this.label1 = n;
            var c = a(t);
            c.object3d.position.y = -.25, c.object3d.position.x = -.025, this.hitAreas = c, this.add(c.object3d), setTimeout(c.animateIn.bind(c), 2e3), this.scale.multiplyScalar(.35);
            var l = this;
            c.object3d.onSelect = i, t.cursor.addCollider(c.collider), this.tapToClose = c
        }
        var r = t("../TextLabel"),
            o = t("three"),
            a = t("../getTapToCloseAnimal");
        n.prototype = Object.create(o.Object3D.prototype), n.prototype.animateIn = function(t) {
            this.label1.animateIn({
                onComplete: t
            })
        }, n.prototype.animateOut = function(t) {
            this.tapToClose.animateOut(), this.label1.animateOut({
                onComplete: t
            })
        }, e.exports = n
    }, {
        "../TextLabel": 46,
        "../getTapToCloseAnimal": 71,
        three: 520
    }],
    89: [function(t, e, i) {
        "use strict";

        function n(t) {
            r.Object3D.call(this);
            var e = "NFB_Logo.png",
                i = a.load("assets/images/" + e, function(t, e) {
                    if (t) return void console.error(t)
                }),
                n = new r.Mesh(new r.PlaneGeometry(1, 1, 1, 1), new r.MeshBasicMaterial({
                    map: i,
                    transparent: !0,
                    opacity: 0,
                    fog: !1
                }));
            n.scale.set(.35, .175, 1), n.renderOrder = 4e3, this.add(n), this.logo = n
        }
        var r = t("three"),
            o = t("gsap"),
            a = t("../../assets");
        n.prototype = Object.create(r.Object3D.prototype), n.prototype.animateOut = function(t) {
            o.to(this.logo.material, 1, {
                opacity: 0,
                onComplete: t
            })
        }, n.prototype.animateIn = function(t) {
            o.to(this.logo.material, .2, {
                opacity: 1,
                delay: .05
            })
        }, e.exports = n
    }, {
        "../../assets": 5,
        gsap: 465,
        three: 520
    }],
    90: [function(t, e, i) {
        "use strict";

        function n(t) {
            o.Object3D.call(this);
            var e = new r(t, {
                    background: !1,
                    size: 6,
                    letterSpacing: 1
                }),
                i = new r(t, {
                    background: !1,
                    size: 6,
                    letterSpacing: 1,
                    color: "#aaaaaa"
                });
            e.setText("There aren't a lot of ways for a grizzly bear to die."), i.setText("At least, that's the way it was in the wild.");
            var n = e.getDimensions(),
                a = i.getDimensions();
            e.object3d.position.x = .5 * -n[0], i.object3d.position.x = .5 * -a[0], e.object3d.position.y = .3 * n[1], i.object3d.position.y = .4 * -a[1], this.add(e.object3d), this.add(i.object3d), this.label1 = e, this.label2 = i, this.scale.multiplyScalar(.175)
        }
        var r = t("../TextLabel"),
            o = t("three");
        n.prototype = Object.create(o.Object3D.prototype), n.prototype.animateIn = function(t) {
            this.label1.animateIn({
                delay: 0
            }), this.label2.animateIn({
                delay: .5,
                onComplete: t
            })
        }, n.prototype.animateOut = function(t) {
            this.label1.animateOut({
                delay: .25,
                onComplete: t
            }), this.label2.animateOut({
                delay: 0
            })
        }, e.exports = n
    }, {
        "../TextLabel": 46,
        three: 520
    }],
    91: [function(t, e, i) {
        "use strict";

        function n(t, e) {
            if (void 0 === e) throw new Error("You must provide a color");
            e instanceof r.Color || (e = new r.Color(e)), t.faces.forEach(function(t) {
                for (var i = 0; i < 3; i++) t.vertexColors.push(e)
            })
        }
        var r = t("three");
        e.exports = n
    }, {
        three: 520
    }],
    92: [function(t, e, i) {
        "use strict";

        function n(t) {
            if ("function" == typeof t) {
                var e = t;
                return function(t, i, n, r) {
                    var o = n - i;
                    if (0 !== r) {
                        var a = t / r;
                        a = e(a), t = r * a
                    }
                    return o * t / r + i
                }
            }
        }
        e.exports = n
    }, {}],
    93: [function(t, e, i) {
        "use strict";

        function n(t) {
            t.boundingBox || t.computeBoundingBox();
            var e = t.boundingBox,
                i = e.getSize(),
                n = e.getCenter(),
                o = (new r.Matrix4).makeTranslation(-n.x, -n.y, -n.z),
                a = Math.max(Math.max(i.x, i.y), i.z),
                s = (new r.Matrix4).makeScale(1 / a, 1 / a, 1 / a);
            t.applyMatrix(o), t.applyMatrix(s)
        }
        var r = t("three");
        e.exports = n
    }, {
        three: 520
    }],
    94: [function(t, e, i) {
        "use strict";

        function n(t) {
            t = y(t || {}, M);
            var e = g.userSize,
                i = new THREE.PerspectiveCamera(60, 1, .001 / e, 11 / e),
                n = new THREE.Object3D;
            n.scale.set(e, e, e);
            var r = new THREE.Object3D,
                o = new THREE.Object3D;
            r.position.y = t.userFootHeight || 0, n.position.set(t.startX, 0, t.startY), n.add(r), r.add(i), r.add(o), r.contentContainer = o;
            var s = new v;
            i.add(s), i.blindfold = s, this.camera = i, this.cameraBody = n, this.cameraFootstool = r, a.call(this)
        }

        function r() {
            return this.vrControls || (this.vrControls = new THREE.VRControls(this.camera), this.vrControls.standing = !0), this.vrControls
        }

        function o() {
            return this.orbitControls || (this.orbitControls = d({
                distance: 0,
                zoom: !1,
                pinch: !1,
                rotateSpeed: -.1,
                phiBounds: w.intro
            })), this.orbitControls
        }

        function a(t) {
            this.vr !== t && (this.vr = t, this.cameraControls && this.cameraControls.disable && this.cameraControls.disable(), t ? this.cameraControls = r.call(this) : this.cameraControls = o.call(this), this.cameraControls && this.cameraControls.enable && this.cameraControls.enable())
        }

        function s() {
            return this.pastIntro || this.vr ? this.vr ? this.cameraControls.userHeight : 1.6 : -.1
        }

        function c() {
            return this.cameraControls.phiBounds === w.tight
        }

        function l(t) {
            a.call(this, m()), this.cameraControls.update(), this.vr || (this.videoElement && (this.pastIntro && this.videoElement.currentTime < 55 ? (this.pastIntro = !1, this.cameraControls.phiBounds = w.intro) : !this.pastIntro && this.videoElement.currentTime > 55 && (this.pastIntro = !0, this.cameraControls.phiBounds = f() ? w.loose : w.tight)), this.camera.position.fromArray(this.cameraControls.position), this.camera.up.fromArray(this.cameraControls.up), x.fromArray(this.cameraControls.direction), this.camera.lookAt(x), this.camera.position.y += this.getUserHeight())
        }

        function u(t) {
            this.videoElement = t
        }

        function h(t, e) {
            var i = t / e;
            this.camera.aspect = i, this.camera.updateProjectionMatrix()
        }
        var d = t("orbit-controls"),
            p = t("urlparam"),
            f = t("../util/isMobile"),
            m = t("../util/isVR"),
            g = t("../gfx/settings"),
            v = t("../gfx/Blindfold"),
            y = (t("../util/isDesktop"), t("lodash.defaults")),
            M = {
                startX: p("startX", 64),
                startY: p("startY", 64)
            };
        n.prototype = {
            getUserHeight: s,
            isUserLookingDown: c,
            update: l,
            setVideoElement: u,
            resize: h
        };
        var x = new THREE.Vector3,
            w = {
                intro: [.5 * Math.PI, .5 * Math.PI],
                tight: [.2 * Math.PI, .3 * Math.PI],
                loose: [.25 * Math.PI, .75 * Math.PI]
            };
        e.exports = n
    }, {
        "../gfx/Blindfold": 22,
        "../gfx/settings": 78,
        "../util/isDesktop": 112,
        "../util/isMobile": 114,
        "../util/isVR": 115,
        "lodash.defaults": 484,
        "orbit-controls": 492,
        urlparam: 529
    }],
    95: [function(t, e, i) {
        "use strict";

        function n(t) {
            a.interactions !== t && (a.interactions = t, t.resize && a.registerOnResize(t.resize.bind(t)))
        }

        function r() {
            function t(e) {
                return a.cursor ? void a.cursor.toggleDragPanning(!p.isPresenting) : (console.warn("delaying cursor VR match until cursor exists"), void setTimeout(t.bind(null, e), 1e3))
            }

            function e(t) {
                _.push(t), t(window.innerWidth, window.innerHeight)
            }

            function i(t) {
                var e = _.indexOf(t);
                e !== -1 && _.splice(e, 1)
            }

            function r(t) {
                b.indexOf(t) === -1 && b.push(t)
            }

            function d(t) {
                var e = b.indexOf(t);
                e !== -1 && b.splice(e, 1)
            }

            function v() {
                var t = Date.now(),
                    e = .001 * (t - E);
                E = t;
                for (var i = 0; i < b.length; i++) b[i](e, a.state);
                p.render(a.scene, a.camera)
            }

            function M() {
                var t = window.innerWidth,
                    e = window.innerHeight;
                s && (t += 1, e += 1), a.width = t, a.height = e;
                for (var i = 0; i < _.length; i++) _[i](t, e)
            }
            var T = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
            s = /(iPhone|iPad|iPod)/i.test(navigator.userAgent), c = Math.min(3.5, window.devicePixelRatio), l = document.querySelector("#canvas"), u = new THREE.WebGLRenderer(m({
                canvas: l,
                transparent: !1,
                stencil: !1,
                alpha: !1,
                preserveDrawingBuffer: !1,
                antialias: !y
            }, T)), u.setPixelRatio(c), u.setClearColor(0, 1), u.sortObjects = !0, a = {}, p = new THREE.VREffect(u), window.addEventListener("vrdisplaypresentchange", t, !1), h = new x({
                url: "assets/video/b71-documentary.mp4",
                chapterDivisions: w.chapterDivisions,
                autoPlay: !1,
                onReadyToPlay: T.onVideoReady,
                startTime: g("startTime", 0)
            });
            var _ = [],
                b = [];
            e(u.setSize.bind(u)), e(p.setSize.bind(p)), a.registerOnResize = e, a.unregisterOnResize = i, a.registerOnEnterFrame = r, a.unregisterOnEnterFrame = d, a.resize = M, a.onEnterFrame = v;
            var E = Date.now();
            return window.addEventListener("resize", M), f = new THREE.Scene, a.videoPlayer = h, a.vrEffect = p, a.renderer = u, a.canvas = l, a.scene = f, a.setInteractions = n, a.createWorld = o, a
        }

        function o() {
            function t() {
                a.onEnterFrame(), p.requestAnimationFrame(t)
            }

            function e() {
                r.position.x = Math.cos(-d.camera.rotation.z), r.position.y = 1, r.position.z = Math.sin(-d.camera.rotation.z), r.position.normalize()
            }

            function i() {
                return a.vrEffect.isPresenting
            }
            p.requestAnimationFrame(t), window.send_analytics({
                event: "launch_VR"
            }), a.registerOnEnterFrame(h.update.bind(h)), d = new v({
                renderer: u,
                canvas: l,
                userFootHeight: T.userFootHeight
            }), a.registerOnResize(d.resize.bind(d)), a.registerOnEnterFrame(d.update.bind(d)), d.setVideoElement(h.videoElement), f.add(d.cameraBody);
            var n = new THREE.AmbientLight(16777215, .85);
            f.add(n);
            var r = new THREE.DirectionalLight(16777215, .3);
            r.position.set(-1, 1, 0), f.add(r), a.registerOnEnterFrame(e), a.resize(), a.cameraManager = d, a.camera = d.camera, a.cameraBody = d.cameraBody, a.cameraFootstool = d.cameraFootstool, a.isVREnabled = i, M.setCheckMethod(i)
        }
        t("../util/ThreejsObject3DProtoDecorator");
        var a, s, c, l, u, h, d, p, f, m = t("object-assign"),
            g = (t("./vr-raf-loop"), t("urlparam")),
            v = t("./CameraManager"),
            y = (t("dom-css"), t("../util/isMobile")()),
            M = t("../util/isVR"),
            x = t("../video/VideoPlayer"),
            w = t("../../app/assets/data/b71DocumentaryChapterDivisions.json"),
            T = t("../gfx/settings");
        e.exports = {
            createApp: r,
            createWorld: o
        }
    }, {
        "../../app/assets/data/b71DocumentaryChapterDivisions.json": 1,
        "../gfx/settings": 78,
        "../util/ThreejsObject3DProtoDecorator": 105,
        "../util/isMobile": 114,
        "../util/isVR": 115,
        "../video/VideoPlayer": 125,
        "./CameraManager": 94,
        "./vr-raf-loop": 96,
        "dom-css": 441,
        "object-assign": 490,
        urlparam: 529
    }],
    96: [function(t, e, i) {
        "use strict";

        function n(t) {
            return this instanceof n ? (this.running = !1, this.last = a(), this._frame = 0, this._tick = this.tick.bind(this), this.rafVRDisplay = null, this.rafVREnabled = !1, void(t && this.on("tick", t))) : new n(t)
        }
        var r = t("inherits"),
            o = t("events").EventEmitter,
            a = t("right-now"),
            s = t("raf");
        e.exports = n, r(n, o), n.prototype.setRAFVREnabled = function(t) {
            var e = this.running;
            this.stop(), this.rafVREnabled = t, e && this.start()
        }, n.prototype._requestAnimation = function(t) {
            return this.rafVREnabled ? this.rafVRDisplay.requestAnimationFrame(t) : s(t)
        }, n.prototype.start = function() {
            if (!this.running) return this.running = !0, this.last = a(), this._frame = this._requestAnimation(this._tick), this
        }, n.prototype.stop = function() {
            return this.running = !1, 0 !== this._frame && (this.rafVREnabled ? this.rafVRDisplay.cancelAnimationFrame(this._frame) : s.cancel(this._frame)), this._frame = 0, this
        }, n.prototype.tick = function() {
            this._frame = this._requestAnimation(this._tick);
            var t = a(),
                e = t - this.last;
            this.emit("tick", e), this.last = t
        }
    }, {
        events: 447,
        inherits: 468,
        raf: 507,
        "right-now": 509
    }],
    97: [function(t, e, i) {
        "use strict";
        var n = t("gsap"),
            r = t("../util/Stats"),
            o = t("dom-css"),
            a = t("urlparam"),
            s = function() {},
            c = t("../util/createComponentList"),
            l = t("./vr-content"),
            u = t("../util/isMobile")(),
            h = t("../util/RayInteractions"),
            d = (t("dom-events"), t("../util/query")()),
            p = (t("once"), t("../getApp")),
            f = t("../framework/orientation"),
            m = t("../gfx/animatedColors"),
            g = !1;
        e.exports = function() {
            function t() {
                return L.daytime + .5
            }

            function e() {
                return L.daytime + .5
            }

            function i() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? s : arguments[0];
                return L.dayNight % 1 === 0 ? void e() : (n.killTweensOf(L), void n.to(L, 5, {
                    daytime: t(),
                    ease: Quint.easeInOut,
                    onUpdate: y,
                    onComplete: e
                }))
            }

            function v() {
                var t = arguments.length <= 0 || void 0 === arguments[0] ? s : arguments[0];
                return L.dayNight % 1 !== 0 ? void t() : (n.killTweensOf(L), void n.to(L, 3, {
                    daytime: e(),
                    ease: Quint.easeInOut,
                    onUpdate: y,
                    onComplete: t
                }))
            }

            function y() {
                L.dayNight = .5 * Math.cos((L.daytime + .5) * Math.PI * 2) + .5, m.updateDayNight(L.dayNight)
            }

            function M() {
                v(function() {
                    i(M)
                })
            }

            function x(t) {
                D() || (L.time += t), T.isVREnabled() || _.update(), b.update(t, L)
            }

            function w() {
                var t = new r;
                return o(t.domElement, {
                    position: "absolute",
                    display: "none",
                    left: 0,
                    top: 0
                }), t
            }
            var T = p(),
                _ = w();
            document.body.appendChild(_.domElement);
            var b = c(T.scene),
                E = void 0,
                S = !1,
                D = function() {
                    return S
                },
                A = function() {
                    S = !0
                },
                N = function() {
                    S = !1
                },
                L = {
                    time: 0,
                    pauseTime: A,
                    resumeTime: N,
                    isTimePaused: D,
                    daytime: 0,
                    dayNight: 0,
                    bleakness: .99,
                    goToDay: i,
                    goToNight: v,
                    updateDayNight: y,
                    interactive: !0,
                    gridInteractive: !1,
                    cameraOnRails: !1
                };
            T.state = L, a("testDayNight", !1) && M();
            var I = new h(T.canvas);
            T.setInteractions(I);
            d.vr || u;
            return {
                init: function(t) {
                    var e = arguments.length <= 1 || void 0 === arguments[1] ? s : arguments[1];
                    f.enable(), f(), E || (E = !0, l({
                        app: T,
                        components: b,
                        interactions: I,
                        state: L
                    }));
                    var i = t.params.cardboard;
                    g && !i && o(_.domElement, "display", "block"), T.registerOnEnterFrame(x), e()
                },
                destroy: function(t) {
                    var e = arguments.length <= 1 || void 0 === arguments[1] ? s : arguments[1];
                    f.disable(), o(_.domElement, "display", "none"), I.enable(), e()
                },
                animateIn: function(t) {
                    var e = arguments.length <= 1 || void 0 === arguments[1] ? s : arguments[1];
                    I.enable(), e()
                },
                animateOut: function(t) {
                    var e = arguments.length <= 1 || void 0 === arguments[1] ? s : arguments[1];
                    T.stop(), e()
                }
            }
        }
    }, {
        "../framework/orientation": 14,
        "../getApp": 16,
        "../gfx/animatedColors": 67,
        "../util/RayInteractions": 103,
        "../util/Stats": 104,
        "../util/createComponentList": 107,
        "../util/isMobile": 114,
        "../util/query": 118,
        "./vr-content": 100,
        "dom-css": 441,
        "dom-events": 443,
        gsap: 465,
        once: 491,
        urlparam: 529
    }],
    98: [function(t, e, i) {
        "use strict";
        var n = t("../assets"),
            r = t("map-limit"),
            o = 15,
            a = ["assets/fonts/DIN-CondensedRegular.txt", "assets/fonts/DIN-CondensedRegular.png", "assets/fonts/DIN-CondensedMediumItalic.txt", "assets/fonts/DIN-CondensedMediumItalic.png", "assets/fonts/DroidSerif.png", "assets/images/cctv0.jpg", "assets/images/cctv1.jpg", "assets/images/NFB_Logo.jpg", "assets/images/background.jpg", "assets/images/tap-to-start.png", "assets/images/close-button.png", "assets/data/world.json"],
            s = ["assets/images/map.png", "assets/images/ripple-normals.png", "assets/images/spritesheet.png"];
        e.exports = function(t) {
            function e(t) {
                return new Promise(function(e, i) {
                    n.preload(t, function(t, n) {
                        t ? i(t) : e(n)
                    })
                })
            }

            function i() {
                return document.fonts && document.fonts.ready && "function" == typeof document.fonts.ready.then ? document.fonts.ready : Promise.resolve()
            }
            var c = [];
            c.push(i());
            var l = a.map(e);
            return l.forEach(function(t) {
                return c.push(t)
            }), Promise.all(c).then(function() {
                console.log("[preload] Done loading required assets"), r(s, o, n.preload, function() {
                    console.log("[preload] Done loading all assets")
                })
            }, function(t) {
                return console.error(t)
            }).then(function(e) {
                t()
            }), {}
        }
    }, {
        "../assets": 5,
        "map-limit": 485
    }],
    99: [function(t, e, i) {
        "use strict";
        var n = function() {
                function t(t, e) {
                    var i = [],
                        n = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var a, s = t[Symbol.iterator](); !(n = (a = s.next()).done) && (i.push(a.value), !e || i.length !== e); n = !0);
                    } catch (c) {
                        r = !0, o = c
                    } finally {
                        try {
                            !n && s["return"] && s["return"]()
                        } finally {
                            if (r) throw o
                        }
                    }
                    return i
                }
                return function(e, i) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e)) return t(e, i);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            r = t("../framework"),
            o = t("../util/tapEvent"),
            a = t("../getApp"),
            s = t("../util/fullscreen"),
            c = t("../util/isMobile")(),
            l = t("../util/query")(),
            u = t("gsap");
        e.exports = function() {
            function t(t) {
                if (!t.target.classList.contains("active")) {
                    [b, E].forEach(function(t) {
                        return t.classList.remove("active")
                    }), t.target.classList.add("active");
                    var n = document.querySelector("#about-content .copy.active"),
                        r = document.getElementById(t.target.dataset.copy);
                    i(n, e.bind(null, r))
                }
            }

            function e(t, e) {
                w.scrollTop = 0, t.classList.add("active"), u.staggerFromTo(t.querySelectorAll("section, p"), 1, {
                    y: "-20%",
                    opacity: 0
                }, {
                    y: "0%",
                    opacity: 1,
                    ease: Expo.easeOut
                }, .3, function() {
                    e && e()
                })
            }

            function i(t, e) {
                u.staggerTo(t.querySelectorAll("section, p"), .5, {
                    y: "-20%",
                    opacity: 0
                }, 0, function() {
                    t.classList.remove("active"), e && e()
                })
            }

            function h() {
                window.removeEventListener("vrdisplaypresentchange", h, !1), console.log("DAYDREAM READY")
            }
            var d = [],
                p = document.querySelectorAll(".splash section .button"),
                f = n(p, 2),
                m = f[0],
                g = f[1],
                v = document.querySelector(".splash"),
                y = document.querySelector("#canvas"),
                M = [".splash section > *:nth-child(1)", ".splash section > *:nth-child(2)", ".splash section > *:nth-child(3)", ".splash section figure", ".splash section span", ".splash header, .splash footer"],
                x = function(t) {
                    u.staggerTo(M, 1, {
                        ease: Expo.easeOut,
                        y: "0%",
                        opacity: 1
                    }, .5, function() {
                        t && t()
                    })
                };
            x();
            var w = document.getElementById("about"),
                T = document.getElementById("open-about"),
                _ = document.getElementById("close-about"),
                b = document.querySelector('[data-copy="about-copy"]'),
                E = document.querySelector('[data-copy="credits-copy"]'),
                S = "#about .fix-container, #close-about";
            T.addEventListener("click", function() {
                u.to(".splash header", .5, {
                    y: "-100%",
                    opacity: 0
                }), u.to(".splash footer", .5, {
                    y: "100%",
                    opacity: 0,
                    onComplete: function() {
                        u.staggerTo([".splash section figure, .splash section span", ".splash section > *:not(:nth-child(4))"], .5, {
                            ease: Expo.easeIn,
                            y: "50%",
                            opacity: 0
                        }, .5, function() {
                            u.set(w, {
                                autoAlpha: 1
                            }), u.set(S, {
                                y: "-100%",
                                opacity: 0
                            }), u.to(S, .5, {
                                y: "0%",
                                opacity: 1,
                                onComplete: function() {
                                    b.classList.add("active"), e(document.getElementById(b.dataset.copy))
                                }
                            })
                        })
                    }
                })
            }), _.addEventListener("click", function() {
                document.querySelector("#about-content .title.active").classList.remove("active"), i(document.querySelector("#about-content .copy.active"), function() {
                    u.to(S, .5, {
                        y: "-100%",
                        opacity: 0,
                        onComplete: function() {
                            u.set(w, {
                                autoAlpha: 0
                            }), x()
                        }
                    })
                })
            }), b.addEventListener("click", t), E.addEventListener("click", t);
            var D, A = function(t) {
                    try {
                        if (window.screen) {
                            if (window.screen.orientation && window.screen.orientation.lock) return window.screen.orientation.lock(t);
                            if (window.screen.lockOrientation) return window.screen.lockOrientation(t)
                        }
                    } catch (e) {
                        console.warn("Could not lock screen!", e.message)
                    }
                    return !1
                },
                N = a(),
                L = window.__isNativeWebVRAvailable,
                I = function(t, e) {
                    t && (t.preventDefault(), t.stopPropagation()), console.log("PLAYING VIDEO NOW!!"), D = document.querySelector(".background"), D.style.display = "none", N.canvas.style.display = "", r.go(e), c && ("experience" === e && s(document.body), window.scrollTo(0, 0), L || A("landscape"))
                },
                C = function(t) {
                    N.videoPlayer.play(), window.preventTouchStartDefaultForScrollFix = !0, window.send_analytics({
                        event: "user_begin"
                    }), I(t, "experience"), window.viewMode = "desktop"
                },
                j = function(t) {
                    N.vrEffect.requestPresent(!0), window.preventTouchStartDefaultForScrollFix = !0, window.send_analytics({
                        event: "user_begin"
                    }), I(t, "experience/cardboard"), /Android/i.test(window.navigator.userAgent) && window.addEventListener("vrdisplaypresentchange", h, !1), console.log("DAYDREAM PLAY"), N.videoPlayer.play()
                };
            return {
                init: function(t, e) {
                    y.style.display = "none", v.style.display = "flex", l.testCardboard && d.push(o.once(D, j)), d.push(o.once(m, C)), d.push(o.once(g, j)), c || (g.style.display = "none"), e()
                },
                destroy: function(t, e) {
                    v.style.display = "none", y.style.display = "block", d.forEach(function(t) {
                        return t.disable()
                    }), e()
                }
            }
        }
    }, {
        "../framework": 13,
        "../getApp": 16,
        "../util/fullscreen": 110,
        "../util/isMobile": 114,
        "../util/query": 118,
        "../util/tapEvent": 120,
        gsap: 465
    }],
    100: [function(t, e, i) {
        "use strict";

        function n() {}
        var r = t("urlparam"),
            o = t("../gfx/settings"),
            a = (t("../util/isMobile"), t("../util/isVR")),
            s = t("../assets"),
            c = (t("gsap"), t("../gfx/Map")),
            l = t("../gfx/MovementMarkers"),
            u = t("../gfx/DoubleTextLabel"),
            h = t("../gfx/Sky"),
            d = t("../gfx/getImage"),
            p = t("../audio"),
            f = t("../gfx/Cursor"),
            m = t("../gfx/animals/SolipsisticAnimalKingdomController"),
            g = t("../gfx/animals/StaticObjectController"),
            v = t("../gfx/animalWindow"),
            y = t("../gfx/animals/geometryLibrary"),
            M = t("../gfx/MapCollider"),
            x = t("../gfx/RoadConnectionTest"),
            w = t("../video/getVideoMeshOrientator"),
            T = t("../AEPropertyAnimator"),
            _ = t("../util/opacityAutohideMesh"),
            b = t("../util/AETextLayerSlideManager"),
            E = t("../gfx/animatedColors"),
            S = t("../gfx/ColorAnimator"),
            D = t("../gfx/colors"),
            A = t("lerp"),
            N = t("../gfx/animals/geometryLibrary"),
            L = t("../gfx/ArrowToBear"),
            I = t("../gfx/CameraPOVChaseManager"),
            C = (new THREE.Vector3, void 0),
            j = void 0,
            O = void 0,
            P = void 0,
            z = void 0,
            R = void 0,
            k = void 0,
            B = void 0;
        e.exports = function(t) {
            function e() {
                var t = i.cameraBody.position;
                t.y = q.getHeightAtLocation(t.x, t.z), z = new f({
                    map: q,
                    state: F,
                    camera: i.camera,
                    interactions: G
                }), q.rippleMap.registerRippler(z), i.cursor = z, q.cursor = z, r("cursor", !0) && U.add(z);
                var e;
                r("testMovementMarkers") && (e = new l(i, {
                    map: q,
                    cameraPosition: i.cameraBody.position,
                    cursor: z
                }), U.add(e), setTimeout(function() {
                    e && e.createGrid()
                }, 1e3)), C = U.add(M({
                    map: q,
                    cameraPosition: i.cameraBody.position
                })), O = U.add(d(i, {
                    interactions: G
                })), P = U.add(p(i, {
                    interactions: G,
                    state: F
                }));
                var c = new T;
                i.videoPlayer.registerTimeUpdateCallback(c.updateTime.bind(c));
                var h = i.videoPlayer.createMesh();
                h.visible = !1, k = new v({
                    app: i,
                    map: q,
                    interactions: G,
                    state: F,
                    components: U,
                    windowScale: o.animalWindowScale
                }), U.add(k), z.animalWindow = k, z.addColliders(k.getColliders());
                var S = new b({
                    slideParent: i.cameraFootstool.contentContainer,
                    app: i,
                    interactions: G,
                    cameraPOVChaseManager: Z,
                    animalWindow: k,
                    cameraManager: i.cameraManager
                });
                U.add(S), c.registerProperty({
                    object: F,
                    objectPropName: "daytime",
                    propertyPath: 'layers("state").Effects("dayTime").Slider',
                    onChange: F.updateDayNight
                }), c.registerProperty({
                    object: F,
                    objectPropName: "bleakness",
                    propertyPath: 'layers("state").Effects("bleakness").Slider',
                    onChange: function(t) {
                        Q.updateAll(t), E.updateColor(V, F.dayNight), q.update(1 / 60, F, !0)
                    }
                }), c.registerProperty({
                    object: F,
                    objectPropName: "gridInteractive",
                    propertyPath: 'layers("state").Effects("interactive").Checkbox',
                    onChange: function(t) {
                        0 === t && k.close()
                    }
                }), c.registerProperty({
                    object: F,
                    objectPropName: "cameraOnRails",
                    propertyPath: 'layers("state").Effects("cameraOnRails").Checkbox',
                    onChange: function(t) {
                        1 === t ? c.unregisterProperty(st) : c.registerProperty(st)
                    }
                });
                var I = n;
                r("debugVideoHeight") && U.add({
                    update: I.bind(null, h)
                });
                var j = 0;
                c.registerProperty({
                    object: h.material,
                    objectPropName: "opacity",
                    propertyPath: 'layers("state").Effects("videoVisibility").Slider',
                    onChange: function(t) {
                        0 === j && 0 !== t ? (j = t, I(h), Z.register(h)) : 0 !== j && 0 === t && Z.unregister(h), _.call(h)
                    }
                }), c.registerProperty({
                    object: S,
                    objectPropName: "text",
                    propertyPath: 'layers("comments").Text.Source Text',
                    onChange: S.onChange.bind(S),
                    lerpMethod: function(t, e, i, n) {
                        return n < .999999 ? e : i
                    }
                });
                var H = 3;
                h.scale.set(4 * H, 4 * H, 4 * H), setTimeout(function() {
                    a() ? (i.cameraFootstool.add(h), h.rotation.x = .2, I = w(q)) : (i.camera.add(h), h.position.z = -1, h.scale.multiplyScalar(.215))
                }, 2e3), z.addCollider(h.closeButton.collider);
                var Y = s("assets/data/world.json"),
                    W = new m({
                        data: Y.actors,
                        map: q,
                        cursor: z,
                        state: F,
                        animalWindow: k,
                        camera: i.camera,
                        cameraPosition: i.cameraBody.position,
                        scene: i.scene
                    });
                U.add(W), i.resetAnimals = W.resetAnimals.bind(W), z.addColliders(C.getColliderPlanes()), R = W.createSpecificAnimal("Bear 71", 64, 60), R.permanent = !0, R.aeTarget = new THREE.Vector2;
                var X = D.gray.clone(),
                    K = D.lightGray.clone();
                E.registerColor(X, D.gray, D.white), E.registerColor(K, D.lightGray, D.white), B = new L({
                    colorArrow: X,
                    colorBorder: K,
                    app: i,
                    map: q,
                    state: F,
                    bear: R,
                    animalWindow: k,
                    cameraPosition: i.cameraBody.position
                }), U.add(B), z.addCollider(B.collider), q.rippleMap.registerRippler(B);
                var J = new g({
                    data: Y.staticObjects,
                    map: q,
                    cursor: z,
                    state: F,
                    animalWindow: k,
                    camera: i.camera,
                    cameraPosition: i.cameraBody.position,
                    scene: i.scene,
                    distanceToAnimalWindow: o.distanceToAnimalWindow
                });
                U.add(J);
                var $ = r("testGeometry");
                if ($) {
                    for (var tt = function() {
                            et.forEach(function(t) {
                                t.rotation.y += .05
                            })
                        }, et = [], it = 0; it < 1; it++) {
                        var nt = new THREE.Mesh(y.getCreator($)(), new THREE.MeshLambertMaterial({
                            color: 16777215,
                            vertexColors: THREE.VertexColors
                        }));
                        i.cameraFootstool.add(nt), nt.position.set(0, -.5 + 3 * it - 2, -5), nt.scale.multiplyScalar(1), et.push(nt)
                    }
                    setInterval(tt, 100)
                }
                var rt = r("testDoubleText");
                if (rt && (rt = rt.split(":"), 2 === rt.length)) {
                    var nt = new u(i, {});
                    nt.setText(rt[0]), nt.setText2(rt[1]), i.cameraFootstool.add(nt), nt.position.set(0, 2, -5), nt.scale.multiplyScalar(10), setTimeout(nt.animateIn.bind(nt), 1300)
                }
                if (r("debugRoads")) {
                    var nt = new x(q);
                    q.spritesPerMeter;
                    i.scene.add(nt)
                }
                var ot = [0, 0, 0];
                c.registerProperty({
                    object: R.aeTarget,
                    objectPropName: "custom",
                    propertyPath: 'layers("map").source.layers("bear71").Transform.Position',
                    lerpMethod: function(t, e, i, n) {
                        return ot[0] = A(e[0], i[0], n), ot[1] = A(e[1], i[1], n), ot
                    },
                    mapMethod: function(t, e, i) {
                        t.x = i[0] / 8, t.y = i[1] / 8
                    }
                });
                var at = c.getDataTrack('layers("state").Effects("cameraPosition").Point');
                at.values.forEach(function(t) {
                    t[2] = q.getHeightAtLocation(t[0] / 8, t[1] / 8)
                });
                var st = {
                    object: i.cameraBody.position,
                    objectPropName: "custom",
                    propertyPath: 'layers("state").Effects("cameraPosition").Point',
                    workingValue: [64, 64, 0],
                    lerpMethod: function(t, e, i, n) {
                        return t[0] = (i[0] - e[0]) * n + e[0], t[1] = (i[1] - e[1]) * n + e[1], t[2] = (i[2] - e[2]) * n + e[2], t
                    },
                    mapMethod: function(t, e, i) {
                        t.x = i[0] / 8, t.z = i[1] / 8, t.y = i[2]
                    },
                    compareMethod: function(t, e, i) {
                        return i[0] / 8 === t.x && i[1] / 8 === t.z
                    },
                    onChange: q.updateMapForCamera.bind(q)
                };
                c.registerProperty(st), a() && N.getCreator("daydreamController")()
            }
            var i = t.app,
                U = t.components,
                G = t.interactions,
                F = t.state;
            i.createWorld(), G.on("tap", function() {
                return i.videoPlayer.handleTap()
            }), (r("testDocent") || a()) && i.videoPlayer.setInputStartEnabled(!0);
            var H = D.white.clone();
            E.registerColor(H, D.white, D.black);
            var V = D.white.clone(),
                Y = D.darkGray.clone(),
                Q = new S;
            Q.registerColor(Y, D.darkGray, D.gray), E.registerColor(V, D.white, Y);
            var W = D.lightBlue.clone();
            E.registerColor(W, D.lightBlue, D.black);
            var X = 1 - o.fogRatio,
                q = new c({
                    scene: i.scene,
                    fogColor: V,
                    fogAmt: X,
                    groundColor: H,
                    camera: i.camera,
                    cameraPosition: i.cameraBody.position,
                    renderer: i.renderer
                }),
                Z = new I({
                    camera: i.camera,
                    enabled: r("testChase")
                });
            U.add(Z), i.registerOnResize(function(t, e) {
                q.screenPixelHeight = e * window.devicePixelRatio
            });
            var K = o.userSize,
                J = q.visibleDistance / K,
                $ = new THREE.Fog(V, J * X, J);
            if ($.color = V, i.scene.fog = $, U.add(q), r("previewRippleMap", !1)) {
                var tt = q.rippleMap.generatePreviewObject();
                tt.rotation.x = Math.PI * -.5, tt.scale.set(.2, .2, .2), tt.position.y = 1, i.cameraFootstool.add(tt), U.add(tt)
            }
            j = new h({
                color: W,
                fogColor: V,
                camera: i.camera
            }), U.add(j), q.emitter.on(q.LOADED, e)
        }
    }, {
        "../AEPropertyAnimator": 4,
        "../assets": 5,
        "../audio": 8,
        "../gfx/ArrowToBear": 17,
        "../gfx/CameraPOVChaseManager": 23,
        "../gfx/ColorAnimator": 26,
        "../gfx/Cursor": 27,
        "../gfx/DoubleTextLabel": 28,
        "../gfx/Map": 39,
        "../gfx/MapCollider": 41,
        "../gfx/MovementMarkers": 43,
        "../gfx/RoadConnectionTest": 44,
        "../gfx/Sky": 45,
        "../gfx/animalWindow": 49,
        "../gfx/animals/SolipsisticAnimalKingdomController": 52,
        "../gfx/animals/StaticObjectController": 54,
        "../gfx/animals/geometryLibrary": 66,
        "../gfx/animatedColors": 67,
        "../gfx/colors": 68,
        "../gfx/getImage": 70,
        "../gfx/settings": 78,
        "../util/AETextLayerSlideManager": 101,
        "../util/isMobile": 114,
        "../util/isVR": 115,
        "../util/opacityAutohideMesh": 117,
        "../video/getVideoMeshOrientator": 126,
        gsap: 465,
        lerp: 478,
        urlparam: 529
    }],
    101: [function(t, e, i) {
        "use strict";

        function n(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t
        }

        function r(t) {
            var e = this,
                i = t.app,
                n = t.slideParent,
                r = t.interactions,
                o = t.cameraPOVChaseManager,
                s = t.animalWindow;
            this.text = "", this.app = i, this.cameraManager = t.cameraManager, this.interactions = r, this.cameraPOVChaseManager = o;
            var c = new a.Object3D;
            if (n.add(c), this.animalWindow = s, this.slideParent = n, this.slideContainer = c, this.nextSlide = this.nextSlide.bind(this), this.animalWindow) {
                var l = function() {
                    e.slide && !e.slide.__isDiscarded && (e.slide.__isDiscarded = !0, e.slide.animateOut(function() {
                        console.log("slide done discard")
                    }))
                };
                this.animalWindow.emitter.on("open", l)
            }
        }
        var o, a = (t("./decomposeQuat"), t("three")),
            s = (t("object-assign"), t("../gfx/slides/SlideBlank")),
            c = (o = {
                "": s,
                "get ready": s,
                "nfb logo": t("../gfx/slides/SlideImageNfbLogo"),
                "this is a 20 minute documentary": t("../gfx/slides/Slide20Minutes"),
                tutorial: t("../gfx/slides/QuoteItIsHard"),
                "many ways for a bear to die": t("../gfx/slides/SlideManyWaysToDie"),
                "created by": t("../gfx/slides/SlideCreatedBy"),
                BEAR71: t("../gfx/slides/SlideBear71Title"),
                END: t("../gfx/slides/SlideEnd")
            }, n(o, "tutorial", t("../gfx/slides/QuoteTutorial")), n(o, "remote sensing", t("../gfx/slides/QuoteRemote")), n(o, "canmore has", t("../gfx/slides/QuoteCanmore")), n(o, "it is hard", t("../gfx/slides/QuoteItIsHard")), o);
        r.prototype.onChange = function() {
            console.log("slide CHANGE!", this.text);
            var t = c[this.text];
            if (this.nextSlideClass = t, this.slide) {
                if (this.slide instanceof t) return;
                this.slide.__isDiscarded ? (console.log("jump to next slide"), this.nextSlide()) : (console.log("slide animating out"), this.slide.__isDiscarded = !0, this.slide.animateOut(this.nextSlide))
            } else this.nextSlide()
        }, r.prototype.nextSlide = function() {
            console.log("slide next one!"), this.slide && (this.slide.onResize && this.app.unregisterOnResize(this.slide.onResize), this.slideContainer.remove(this.slide), this.cameraPOVChaseManager.unregister(this.slide)), this.slide = void 0, this.animalWindow && this.animalWindow.isOpened || (this.slide = new this.nextSlideClass(this.app, this.interactions), this.slide.onResize && this.app.registerOnResize(this.slide.onResize), this.slideContainer.add(this.slide), this.cameraManager.isUserLookingDown() ? (this.slideContainer.position.set(0, -.25, -1.5), this.slideContainer.scale.set(3, 3, 3), this.slideContainer.rotation.set(-.66, 0, 0)) : (this.slideContainer.position.set(0, this.cameraManager.getUserHeight(), -6), this.slideContainer.scale.set(6, 6, 6), this.slideContainer.rotation.set(0, 0, 0)), this.cameraPOVChaseManager.register(this.slide), this.slide.animateIn())
        };
        new a.Vector3;
        r.prototype.update = function(t, e) {
            this.slide && this.slide.update && this.slide.update(t, e)
        }, e.exports = r
    }, {
        "../gfx/slides/QuoteCanmore": 80,
        "../gfx/slides/QuoteItIsHard": 81,
        "../gfx/slides/QuoteRemote": 82,
        "../gfx/slides/QuoteTutorial": 83,
        "../gfx/slides/Slide20Minutes": 84,
        "../gfx/slides/SlideBear71Title": 85,
        "../gfx/slides/SlideBlank": 86,
        "../gfx/slides/SlideCreatedBy": 87,
        "../gfx/slides/SlideEnd": 88,
        "../gfx/slides/SlideImageNfbLogo": 89,
        "../gfx/slides/SlideManyWaysToDie": 90,
        "./decomposeQuat": 108,
        "object-assign": 490,
        three: 520
    }],
    102: [function(t, e, i) {
        "use strict";

        function n(t) {
            this.lastTime = Date.now(), this.startPos = [0, 0];
            var e = d(t, {
                filtered: !0,
                parent: t
            });
            if (e.on("move", a.bind(this)), e.on("start", r.bind(this)), e.on("end", o.bind(this)), void 0 === t.width) throw new Error("Ray Events are designed to be in clipspace, for quick use in webGL. The element you're listening to doesn't have a size, so we can't use it to calculate clip coordinates.");
            if (this.width = t.clientWidth, this.height = t.clientHeight, void 0 === this.width) throw new Error("Just in case clientWidth isn't available, width needs to be pre-pixelDeviceRatio, so canvas.width does not work.");
            this.touch = e
        }

        function r(t, e) {
            var i = 0 === e[0] && 0 === e[1];
            u.call(this, e), i || this.dispatchOnMove(e), t.preventDefault(), this.startPos = e.slice(), this.lastTime = Date.now(), this.dragging = !0,
                this.dispatchOnStart(e)
        }

        function o(t, e) {
            var i = 0 === e[0] && 0 === e[1];
            u.call(this, e), f() && !m() && (e[0] = e[1] = 0), i || this.dispatchOnMove(e), t.preventDefault();
            var n = Date.now() - this.lastTime,
                r = h(e, this.startPos);
            n < 250 && r < 40 && this.dispatchOnSelect(e), this.dragging = !1, this.dispatchOnEnd(e)
        }

        function a(t, e) {
            var i = 0 === e[0] && 0 === e[1];
            u.call(this, e), i || (this.dragging ? this.dispatchOnDrag(e) : this.dispatchOnMove(e))
        }

        function s(t, e) {
            var i = t.indexOf(e);
            i === -1 ? t.push(e) : console.warn("Callback already registered; ignoring.")
        }

        function c(t, e) {
            var i = t.indexOf(e);
            i === -1 ? console.warn("Callback not registered; can't remove, ignoring.") : t.splice(e, 1)
        }

        function l(t, e) {
            for (var i = 0; i < t.length; i++) t[i](e)
        }

        function u(t) {
            t[0] = 2 * t[0] / this.width - 1, t[1] = -(2 * t[1] / this.height - 1)
        }
        var h = t("gl-vec2/distance"),
            d = t("touches"),
            p = t("./capitalizeFirstLetter"),
            f = t("./isMobile"),
            m = t("./isVR"),
            g = ["start", "end", "move", "drag", "select"],
            v = n.prototype;
        v.resize = function(t, e) {
            this.width = t, this.height = e
        }, g.forEach(function(t) {
            t = "on" + p(t);
            var e = [],
                i = p(t);
            v["add" + i] = s.bind(this, e), v["remove" + i] = c.bind(this, e), v["dispatch" + i] = l.bind(this, e)
        }), e.exports = n
    }, {
        "./capitalizeFirstLetter": 106,
        "./isMobile": 114,
        "./isVR": 115,
        "gl-vec2/distance": 453,
        touches: 526
    }],
    103: [function(t, e, i) {
        "use strict";

        function n(t) {
            u.call(this), this.rayEvents = null, this.isGamepadDown = !1, this.isModalOpen = !1, this.hasGamepadsAPI = "getGamepads" in window.navigator, this.vrTouch = this.emit.bind(this, "tap")
        }

        function r() {
            this.isModalOpen = !0
        }

        function o() {
            this.isModalOpen = !1
        }

        function a() {
            this.rayEvents ? this.rayEvents.enable() : (this.rayEvents = new l(canvas), this.rayEvents.addOnSelect(this.vrTouch))
        }

        function s() {
            this.rayEvents && this.rayEvents.disable()
        }

        function c(t, e) {
            this.rayEvents && this.rayEvents.resize(t, e)
        }
        var l = t("./RayEvents"),
            u = (t("dom-events"), t("./isMobile"), t("events").EventEmitter);
        n.prototype = Object.create(u.prototype);
        var h = n.prototype;
        h.enable = a, h.disable = s, h.openModal = r, h.closeModal = o, h.resize = c, e.exports = n
    }, {
        "./RayEvents": 102,
        "./isMobile": 114,
        "dom-events": 443,
        events: 447
    }],
    104: [function(t, e, i) {
        "use strict";
        var n = function() {
            function t(t, e, i) {
                var n = document.createElement(t);
                return n.id = e, n.style.cssText = i, n
            }

            function e(e, i, n) {
                var r = t("div", e, "padding:0 0 3px 3px;text-align:left;background:" + n),
                    o = t("div", e + "Text", "font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px;color:" + i);
                o.innerHTML = e.toUpperCase(), r.appendChild(o);
                var a = t("div", e + "Graph", "width:74px;height:30px;background:" + i);
                r.appendChild(a);
                for (var s = 0; s < 74; s++) a.appendChild(t("span", "", "width:1px;height:30px;float:left;opacity:0.9;background:" + n));
                return r
            }

            function i(t) {
                for (var e = l.children, i = 0; i < e.length; i++) e[i].style.display = i === t ? "block" : "none";
                c = t
            }

            function n(t, e) {
                var i = t.appendChild(t.firstChild);
                i.style.height = Math.min(30, 30 - 30 * e) + "px"
            }
            var r = self.performance && self.performance.now ? self.performance.now.bind(performance) : Date.now,
                o = r(),
                a = o,
                s = 0,
                c = 0,
                l = t("div", "stats", "width:80px;opacity:0.9;cursor:pointer");
            l.addEventListener("mousedown", function(t) {
                t.preventDefault(), i(++c % l.children.length)
            }, !1);
            var u = 0,
                h = 1 / 0,
                d = 0,
                p = e("fps", "#0ff", "#002"),
                f = p.children[0],
                m = p.children[1];
            l.appendChild(p);
            var g = 0,
                v = 1 / 0,
                y = 0,
                M = e("ms", "#0f0", "#020"),
                x = M.children[0],
                w = M.children[1];
            if (l.appendChild(M), self.performance && self.performance.memory) {
                var T = 0,
                    _ = 1 / 0,
                    b = 0,
                    E = e("mb", "#f08", "#201"),
                    S = E.children[0],
                    D = E.children[1];
                l.appendChild(E)
            }
            return i(c), {
                REVISION: 14,
                domElement: l,
                setMode: i,
                begin: function() {
                    o = r()
                },
                end: function() {
                    var t = r();
                    if (g = t - o, v = Math.min(v, g), y = Math.max(y, g), x.textContent = (0 | g) + " MS (" + (0 | v) + "-" + (0 | y) + ")", n(w, g / 200), s++, t > a + 1e3 && (u = Math.round(1e3 * s / (t - a)), h = Math.min(h, u), d = Math.max(d, u), f.textContent = u + " FPS (" + h + "-" + d + ")", n(m, u / 100), a = t, s = 0, void 0 !== T)) {
                        var e = performance.memory.usedJSHeapSize,
                            i = performance.memory.jsHeapSizeLimit;
                        T = Math.round(9.54e-7 * e), _ = Math.min(_, T), b = Math.max(b, T), S.textContent = T + " MB (" + _ + "-" + b + ")", n(D, e / i)
                    }
                    return t
                },
                getFPS: function() {
                    return u
                },
                update: function() {
                    o = this.end()
                }
            }
        };
        e.exports = n
    }, {}],
    105: [function(t, e, i) {
        "use strict";
        var n = t("three"),
            r = n.Object3D.prototype.updateMatrix,
            o = n.Object3D.prototype.updateMatrixWorld;
        n.Object3D.prototype.updateMatrix = function(t) {
            this.visible && r.call(this, t)
        }, n.Object3D.prototype.updateMatrixWorld = function(t) {
            this.visible && o.call(this, t)
        }
    }, {
        three: 520
    }],
    106: [function(t, e, i) {
        "use strict";

        function n(t) {
            return t.charAt(0).toUpperCase() + t.slice(1)
        }
        e.exports = n
    }, {}],
    107: [function(t, e, i) {
        "use strict";
        e.exports = function(t) {
            function e(e) {
                if (!e) throw new TypeError("must provide item");
                return o.push(e), e.object3d && t.add(e.object3d), "function" == typeof e.onAdd && e.onAdd(), "function" == typeof e.update && a.push(e), e
            }

            function i(e) {
                var i = o.indexOf(e);
                if (i !== -1) return o.splice(i, 1), i = a.indexOf(e), a.splice(i, 1), e.object3d && t.remove(e.object3d), "function" == typeof e.onRemove && e.onRemove(), e
            }

            function n(t, e) {
                for (var i = a.length - 1; i >= 0; i--) a[i].update(t, e)
            }

            function r() {
                o.length = 0, a.length = 0
            }
            var o = [],
                a = [];
            return {
                add: e,
                remove: i,
                update: n,
                clear: r,
                items: o
            }
        }
    }, {}],
    108: [function(t, e, i) {
        "use strict";
        e.exports = function(t, e) {
            e || (e = new THREE.Vector2);
            var i = Math.atan2(2 * t.y * t.w - 2 * t.x * t.z, 1 - 2 * (t.y * t.y) - 2 * (t.z * t.z)),
                n = Math.atan2(2 * t.x * t.w - 2 * t.y * t.z, 1 - 2 * (t.x * t.x) - 2 * (t.z * t.z));
            return e.x = i, e.y = -n, e
        }
    }, {}],
    109: [function(t, e, i) {
        "use strict";
        e.exports = function() {
            /(iPhone|iPad|iPod)/i.test(navigator.userAgent) && ! function() {
                var t = function() {
                    setTimeout(function() {
                        window.scrollTo(0, 1)
                    }, 500)
                };
                t(), window.addEventListener("orientationchange", function() {
                    t()
                }, !1)
            }()
        }
    }, {}],
    110: [function(t, e, i) {
        "use strict";
        e.exports = function(t) {
            var e = t.requestFullscreen || t.webkitRequestFullscreen || t.mozRequestFullscreen;
            return e ? e.call(t) : (console.warn("No fullscreen API!"), !1)
        }, e.exports.cancel = function() {
            var t = document.exitFullscreen || document.webkitExitFullscreen || document.mozCancelFullScreen || document.msExitFullscreen;
            return t ? t.call() : (console.warn("Can't exit full screen, no API!"), !1)
        }
    }, {}],
    111: [function(t, e, i) {
        "use strict";

        function n(t, e, i) {
            return i.indexOf(t) === e
        }

        function r(t) {
            var e = "";
            return e = /"/.test(t) ? t.match(/"(.*?)"/)[1] : /'/.test(t) ? t.match(/'(.*?)'/)[1] : t
        }

        function o(t, e) {
            for (var i = t, o = e.split("."); o.length > 0 && i;) {
                var a = o.shift(),
                    s = /^[^\(]*/.exec(a);
                if (1 === s.length && (s = s[0]), i[s] instanceof Array) {
                    var c = /([^(]*?)(?=\))/.exec(a);
                    c = c.filter(n), 1 === c.length && (c = r(c[0])), i = i[s].find(function(t) {
                        return t.name === c
                    })
                } else i = i[a]
            }
            return i || console.warn("Could not find " + e + " in data."), i
        }
        e.exports = o
    }, {}],
    112: [function(t, e, i) {
        "use strict";
        var n = t("./isVR"),
            r = t("./isMobile");
        e.exports = function() {
            return !n() && !r()
        }
    }, {
        "./isMobile": 114,
        "./isVR": 115
    }],
    113: [function(t, e, i) {
        "use strict";
        var n = t("./isVR"),
            r = t("./isMobile");
        e.exports = function() {
            return !n() && r()
        }
    }, {
        "./isMobile": 114,
        "./isVR": 115
    }],
    114: [function(t, e, i) {
        "use strict";
        e.exports = function() {
            return /(iPad|iPhone|iPod|Android)/i.test(navigator.userAgent)
        }
    }, {}],
    115: [function(t, e, i) {
        "use strict";

        function n() {
            return console.warn("Checking if VR too early. Wait till user decides."), !1
        }

        function r() {
            return a()
        }

        function o(t) {
            a = t
        }
        var a = n;
        r.setCheckMethod = o, e.exports = r
    }, {}],
    116: [function(t, e, i) {
        "use strict";

        function n(t, e, i) {
            for (var n = Object.keys(e), r = n.length - 1; r >= 0; r--) {
                var o = n[r];
                i.indexOf(o) === -1 && (t[o] = e[o])
            }
            return t
        }
        e.exports = n
    }, {}],
    117: [function(t, e, i) {
        "use strict";

        function n() {
            this.visible = this.material.opacity > 0
        }
        e.exports = n
    }, {}],
    118: [function(t, e, i) {
        "use strict";

        function n(t) {
            return "number" == typeof t || (!!/^0x[0-9a-f]+$/i.test(t) || /^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(t))
        }
        var r = t("query-string");
        e.exports = function() {
            var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                e = {
                    bools: {},
                    strings: {}
                },
                i = [].concat(t["boolean"]).filter(Boolean);
            i.forEach(function(t) {
                e.bools[t] = !0
            });
            var o = [].concat(t.string).filter(Boolean);
            o.forEach(function(t) {
                e.strings[t] = !0
            });
            var a = r.parse(window.location.search);
            Object.keys(a).forEach(function(t) {
                null === a[t] && (a[t] = !0), "false" === a[t] && (a[t] = !1), "true" === a[t] && (a[t] = !0), e.bools[t] && (a[t] = Boolean(a[t])), !e.strings[t] && n(a[t]) && (a[t] = Number(a[t]))
            });
            var s = t.defaults || {};
            return Object.keys(s).forEach(function(t) {
                "undefined" == typeof a[t] && (a[t] = s[t])
            }), a
        }
    }, {
        "query-string": 506
    }],
    119: [function(t, e, i) {
        "use strict";

        function n(t) {
            var e = {};
            t.footages.forEach(function(t) {
                e["id" + t.id] = t
            }), t.comps.forEach(function(t) {
                e["id" + t.id] = t
            }), t.comps.forEach(function(t) {
                t.layers.forEach(function(t) {
                    t.source && (t.source = e["id" + t.source.split("$id:")[1]])
                })
            })
        }
        e.exports = n
    }, {}],
    120: [function(t, e, i) {
        "use strict";

        function n(t, e, i) {
            if (!e) throw new Error("You must provide a valid element, or it will attach the event to the whole document: unacceptable.");
            var n, a = Date.now(),
                s = [0, 0];
            return n = o(e, {
                filtered: !0,
                parent: e
            }).on("start", function(t, e) {
                t.preventDefault(), s = e.slice(), a = Date.now()
            }).on("end", function(e, o) {
                e.preventDefault();
                var c = Date.now() - a,
                    l = r(o, s);
                c < 250 && l < 40 && (t && n.disable(), i(e))
            })
        }
        var r = t("gl-vec2/distance"),
            o = t("touches");
        e.exports = n.bind(null, !1), e.exports.on = n.bind(null, !1), e.exports.once = n.bind(null, !0)
    }, {
        "gl-vec2/distance": 453,
        touches: 526
    }],
    121: [function(t, e, i) {
        "use strict";
        THREE.VRControls = function(t, e) {
            function i(t) {
                r = t, t.length > 0 ? n = t[0] : e && e("VR input not available.")
            }
            var n, r, o = this,
                a = new THREE.Matrix4,
                s = null;
            "VRFrameData" in window && (s = new VRFrameData), navigator.getVRDisplays && navigator.getVRDisplays().then(i)["catch"](function() {
                console.warn("THREE.VRControls: Unable to get VR Displays")
            }), this.scale = 1, this.standing = !1, this.userHeight = 1.6, this.getVRDisplay = function() {
                return n
            }, this.setVRDisplay = function(t) {
                n = t
            }, this.getVRDisplays = function() {
                return console.warn("THREE.VRControls: getVRDisplays() is being deprecated."), r
            }, this.getStandingMatrix = function() {
                return a
            }, this.update = function() {
                if (n) {
                    var e;
                    n.getFrameData ? (n.getFrameData(s), e = s.pose) : n.getPose && (e = n.getPose()), null !== e.orientation && t.quaternion.fromArray(e.orientation), null !== e.position ? t.position.fromArray(e.position) : t.position.set(0, 0, 0), this.standing && (n.stageParameters ? (t.updateMatrix(), a.fromArray(n.stageParameters.sittingToStandingTransform), t.applyMatrix(a)) : t.position.setY(t.position.y + this.userHeight)), t.position.multiplyScalar(o.scale)
                }
            }, this.resetPose = function() {
                n && n.resetPose()
            }, this.resetSensor = function() {
                console.warn("THREE.VRControls: .resetSensor() is now .resetPose()."), this.resetPose()
            }, this.zeroSensor = function() {
                console.warn("THREE.VRControls: .zeroSensor() is now .resetPose()."), this.resetPose()
            }, this.dispose = function() {
                n = null
            }
        }
    }, {}],
    122: [function(t, e, i) {
        "use strict";
        THREE.VREffect = function(t, e) {
            function i(t) {
                c = t, t.length > 0 ? s = t[0] : e && e("HMD not available")
            }

            function n() {
                var e = f.isPresenting;
                if (f.isPresenting = void 0 !== s && s.isPresenting, f.isPresenting) {
                    var i = s.getEyeParameters("left"),
                        n = i.renderWidth,
                        r = i.renderHeight;
                    e || (v = t.getPixelRatio(), m = t.getSize(), t.setPixelRatio(1), t.setSize(2 * n, r, !1))
                } else e && (t.setPixelRatio(v), t.setSize(m.width, m.height, g))
            }

            function r(t) {
                var e = 2 / (t.leftTan + t.rightTan),
                    i = (t.leftTan - t.rightTan) * e * .5,
                    n = 2 / (t.upTan + t.downTan),
                    r = (t.upTan - t.downTan) * n * .5;
                return {
                    scale: [e, n],
                    offset: [i, r]
                }
            }

            function o(t, e, i, n) {
                e = void 0 === e || e, i = void 0 === i ? .01 : i, n = void 0 === n ? 1e4 : n;
                var o = e ? -1 : 1,
                    a = new THREE.Matrix4,
                    s = a.elements,
                    c = r(t);
                return s[0] = c.scale[0], s[1] = 0, s[2] = c.offset[0] * o, s[3] = 0, s[4] = 0, s[5] = c.scale[1], s[6] = -c.offset[1] * o, s[7] = 0, s[8] = 0, s[9] = 0, s[10] = n / (i - n) * -o, s[11] = n * i / (i - n), s[12] = 0, s[13] = 0, s[14] = o, s[15] = 0, a.transpose(), a
            }

            function a(t, e, i, n) {
                var r = Math.PI / 180,
                    a = {
                        upTan: Math.tan(t.upDegrees * r),
                        downTan: Math.tan(t.downDegrees * r),
                        leftTan: Math.tan(t.leftDegrees * r),
                        rightTan: Math.tan(t.rightDegrees * r)
                    };
                return o(a, e, i, n)
            }
            var s, c, l, u, h = new THREE.Vector3,
                d = new THREE.Vector3,
                p = null;
            "VRFrameData" in window && (p = new VRFrameData), navigator.getVRDisplays && navigator.getVRDisplays().then(i)["catch"](function() {
                console.warn("THREE.VREffect: Unable to get VR Displays")
            }), this.isPresenting = !1, this.scale = 1;
            var f = this,
                m = t.getSize(),
                g = !1,
                v = t.getPixelRatio();
            this.getVRDisplay = function() {
                return s
            }, this.setVRDisplay = function(t) {
                s = t
            }, this.getVRDisplays = function() {
                return console.warn("THREE.VREffect: getVRDisplays() is being deprecated."), c
            }, this.setSize = function(e, i, n) {
                if (m = {
                        width: e,
                        height: i
                    }, g = n, f.isPresenting) {
                    var r = s.getEyeParameters("left");
                    t.setPixelRatio(1), t.setSize(2 * r.renderWidth, r.renderHeight, !1)
                } else t.setPixelRatio(v), t.setSize(e, i, n)
            };
            var y = t.domElement,
                M = [0, 0, .5, 1],
                x = [.5, 0, .5, 1];
            window.addEventListener("vrdisplaypresentchange", n, !1), this.setFullScreen = function(t) {
                return new Promise(function(e, i) {
                    return void 0 === s ? void i(new Error("No VR hardware found.")) : f.isPresenting === t ? void e() : void e(t ? s.requestPresent([{
                        source: y
                    }]) : s.exitPresent())
                })
            }, this.requestPresent = function() {
                return this.setFullScreen(!0)
            }, this.exitPresent = function() {
                return this.setFullScreen(!1)
            }, this.requestAnimationFrame = function(t) {
                return void 0 !== s ? s.requestAnimationFrame(t) : window.requestAnimationFrame(t)
            }, this.cancelAnimationFrame = function(t) {
                void 0 !== s ? s.cancelAnimationFrame(t) : window.cancelAnimationFrame(t)
            }, this.submitFrame = function() {
                void 0 !== s && f.isPresenting && s.submitFrame()
            }, this.autoSubmitFrame = !0;
            var w = new THREE.PerspectiveCamera;
            w.layers.enable(1);
            var T = new THREE.PerspectiveCamera;
            T.layers.enable(2), this.render = function(e, i, n, r) {
                if (s && f.isPresenting) {
                    var o = e.autoUpdate;
                    o && (e.updateMatrixWorld(), e.autoUpdate = !1);
                    var c = s.getEyeParameters("left"),
                        m = s.getEyeParameters("right");
                    h.fromArray(c.offset), d.fromArray(m.offset), Array.isArray(e) && (console.warn("THREE.VREffect.render() no longer supports arrays. Use object.layers instead."), e = e[0]);
                    var g, v, y = t.getSize(),
                        _ = s.getLayers();
                    if (_.length) {
                        var b = _[0];
                        g = null !== b.leftBounds && 4 === b.leftBounds.length ? b.leftBounds : M, v = null !== b.rightBounds && 4 === b.rightBounds.length ? b.rightBounds : x
                    } else g = M, v = x;
                    l = {
                        x: Math.round(y.width * g[0]),
                        y: Math.round(y.height * g[1]),
                        width: Math.round(y.width * g[2]),
                        height: Math.round(y.height * g[3])
                    }, u = {
                        x: Math.round(y.width * v[0]),
                        y: Math.round(y.height * v[1]),
                        width: Math.round(y.width * v[2]),
                        height: Math.round(y.height * v[3])
                    }, n ? (t.setRenderTarget(n), n.scissorTest = !0) : (t.setRenderTarget(null), t.setScissorTest(!0)), (t.autoClear || r) && t.clear(), null === i.parent && i.updateMatrixWorld(), i.matrixWorld.decompose(w.position, w.quaternion, w.scale), i.matrixWorld.decompose(T.position, T.quaternion, T.scale);
                    var E = this.scale;
                    return w.translateOnAxis(h, E), T.translateOnAxis(d, E), s.getFrameData ? (s.depthNear = i.near, s.depthFar = i.far, s.getFrameData(p), w.projectionMatrix.elements = p.leftProjectionMatrix, T.projectionMatrix.elements = p.rightProjectionMatrix) : (w.projectionMatrix = a(c.fieldOfView, !0, i.near, i.far), T.projectionMatrix = a(m.fieldOfView, !0, i.near, i.far)), n ? (n.viewport.set(l.x, l.y, l.width, l.height), n.scissor.set(l.x, l.y, l.width, l.height)) : (t.setViewport(l.x, l.y, l.width, l.height), t.setScissor(l.x, l.y, l.width, l.height)), t.render(e, w, n, r), n ? (n.viewport.set(u.x, u.y, u.width, u.height), n.scissor.set(u.x, u.y, u.width, u.height)) : (t.setViewport(u.x, u.y, u.width, u.height), t.setScissor(u.x, u.y, u.width, u.height)), t.render(e, T, n, r), n ? (n.viewport.set(0, 0, y.width, y.height), n.scissor.set(0, 0, y.width, y.height), n.scissorTest = !1, t.setRenderTarget(null)) : (t.setViewport(0, 0, y.width, y.height), t.setScissorTest(!1)), o && (e.autoUpdate = !0), void(f.autoSubmitFrame && f.submitFrame())
                }
                t.render(e, i, n, r)
            }, this.dispose = function() {
                window.removeEventListener("vrdisplaypresentchange", n, !1)
            }
        }
    }, {}],
    123: [function(t, e, i) {
        "use strict";
        THREE.FlatShadedGeometry = function(t) {
            var e = t.clone(),
                i = [],
                n = [],
                r = [];
            if (t.morphTargets)
                for (var o = 0; o < t.morphTargets.length; o++) r[o] = {
                    name: t.morphTargets.name,
                    vertices: []
                };
            for (var o = 0; o < t.faces.length; o++) {
                var a = t.faces[o];
                if (i[3 * o] = t.vertices[a.a].clone(), i[3 * o + 1] = t.vertices[a.b].clone(), i[3 * o + 2] = t.vertices[a.c].clone(), n.push(a.clone()), n[o].a = 3 * o, n[o].b = 3 * o + 1, n[o].c = 3 * o + 2, n[o].vertexNormals[0] = a.normal.clone(), n[o].vertexNormals[1] = a.normal.clone(), n[o].vertexNormals[2] = a.normal.clone(), t.morphTargets)
                    for (var s = 0; s < t.morphTargets.length; s++) r[s].vertices[3 * o] = t.morphTargets[s].vertices[a.a].clone(), r[s].vertices[3 * o + 1] = t.morphTargets[s].vertices[a.b].clone(), r[s].vertices[3 * o + 2] = t.morphTargets[s].vertices[a.c].clone()
            }
            return e.vertices = i, e.faces = n, t.morphTargets && (e.morphTargets = r, e.computeVertexNormals(), e.computeMorphNormals()), e
        }
    }, {}],
    124: [function(t, e, i) {
        "use strict";

        function n(t) {
            var e = [],
                i = [];
            t = t.map(function(t) {
                if ("string" == typeof t) {
                    var e = t.split(":");
                    return 2 === e.length && (t = 60 * Number(e[0]) + Number(e[1])), t
                }
            });
            for (var n = 0; n < t.length - 1; n++) e.push(t[n]), i.push(t[n + 1] - t[n]);
            e.push(t[t.length - 1]), i.push(10), this.starts = e, this.ranges = i
        }
        n.prototype.getChapterOfTime = function(t) {
            for (var e = 0; e < this.starts.length; e++)
                if (this.starts[e] > t) return e - 1
        }, n.prototype.getTimeOfNextChapter = function(t) {
            var e = this.getChapterOfTime(t);
            return this.starts[e + 1]
        }, n.prototype.getChapterProgressFromMasterTime = function(t) {
            var e = this.getChapterOfTime(t);
            return (t - this.starts[e]) / this.ranges[e]
        }, e.exports = n
    }, {}],
    125: [function(t, e, i) {
        "use strict";

        function n(t) {
            var e = this;
            t = N(t, k);
            var i = new O(t.chapterDivisions),
                n = T();
            t.url && (n.src = t.url);
            var r = t.muted !== !1;
            t.loop !== !1 && n.setAttribute("loop", "loop"), r && n.setAttribute("muted", "muted"), window.document.body.appendChild(n), n.setAttribute("webkit-playsinline", ""), n.setAttribute("playsinline", ""), n.setAttribute("style", "display:none");
            var o = "standalone" in window.navigator && window.navigator.standalone,
                s = !r;
            b && (!o && R.is("iOS") && parseInt(R.version("iOS"), 10) <= 9 ? A(n) : R.is("iOS") && R.is("Chrome") && A(n, s));
            var c = new I.Texture(n);
            c.format = I.RGBFormat, c.minFilter = I.LinearFilter, c.generateMipmaps = !1, c.needsUpdate = !0, this._needsInputStart = !1, this._inputPauseAfter = 7.5, this._isWaitingForInput = !1, this._isWaitingForStart = !0, this._inputStartCallbacks = [], this.analyticsProgress = 0, this.analyticsLastTime = 0, this.analyticsHasStarted = !1, this.sendAnalytics = !0, this.totalAnalyticsSteps = 0, a.call(this, !1), _.on(n, "playing", function() {
                console.warn("videoElement event: playing"), a.call(e, !0)
            }), _.on(n, "pause", function() {
                console.warn("videoElement event: pause"), a.call(e, !1)
            }), _.on(n, "stop", function() {
                console.warn("videoElement event: stop"), a.call(e, !1)
            }), _.on(n, "ended", function() {
                console.warn("videoElement event: ended"), a.call(e, !1), e.sendAnalytics && window.send_analytics({
                    event: "100%",
                    value: "progress_tracking"
                }), e.sendAnalytics = !1
            }), this.meshes = [], this.timeUpdateCallbacks = [], this.texture = c, this.videoElement = n, this.chapterDivisions = i, this.startTime = t.startTime, "string" == typeof this.startTime && (this.startTime = P(this.startTime)), this.onReadyToPlay = t.onReadyToPlay, this.playbackRate = t.playbackRate, t.url && (this.setSource(t.url), t.autoPlay && this.play())
        }

        function r() {
            try {
                this.videoElement.playbackRate = this.playbackRate, this.videoElement.play(), console.log("PLAYING", this.videoElement.currentTime)
            } catch (t) {
                console.error(t)
            }
        }

        function o(t) {
            this.playbackRate = t, this.videoElement.playbackRate = t
        }

        function a(t) {
            this.playing = t, console.warn("VideoPlayer playing = " + t)
        }

        function s() {
            console.warn("pausing?"), this.videoElement.pause()
        }

        function c(t) {
            console.warn("seeking?"), this.videoElement.currentTime = t, this.videoElement.play()
        }

        function l() {
            var t = this.chapterDivisions.getTimeOfNextChapter(this.videoElement.currentTime);
            this.seek(t)
        }

        function u(t) {
            console.warn("setting source?"), a.call(this, !1), this.videoElement.src = t, this.videoElement.currentTime = this.startTime, this.load()
        }

        function h(t) {
            if ("function" != typeof t) throw new TypeError("cb must be a function");
            this._inputStartCallbacks.push(t)
        }

        function d(t) {
            this._needsInputStart = t
        }

        function p(t) {
            return this._needsInputStart
        }

        function f() {
            this._isWaitingForInput && (this._isWaitingForInput = !1, this.setPlaybackRate(1), this._inputStartCallbacks.forEach(function(t) {
                return t()
            }))
        }

        function m(t, e) {
            var i = !1,
                n = this.videoElement.currentTime,
                r = this.videoElement.duration;
            if (this.playing && this.sendAnalytics && "number" == typeof r) {
                this.analyticsHasStarted || (this.analyticsHasStarted = !0, this.analyticsLastTime = n, this.totalAnalyticsSteps = 20, window.send_analytics({
                    event: "0%",
                    value: "progress_tracking"
                }));
                var o = .05 * r,
                    a = n - this.analyticsLastTime;
                a > o && (a = 0, this.analyticsLastTime = n, this.analyticsProgress++, this.analyticsProgress > this.totalAnalyticsSteps ? this.sendAnalytics = !1 : window.send_analytics({
                    event: 5 * this.analyticsProgress + "%",
                    value: "progress_tracking"
                }))
            }
            for (var s = this.chapterDivisions.getChapterProgressFromMasterTime(n), c = this.meshes.length - 1; c >= 0; c--) {
                var l = this.meshes[c],
                    u = this.closeButton;
                if (u && u.visible !== l.visible && (u.visible = l.visible, u.visible)) {
                    var h = S() ? .06 : .16,
                        d = S() ? .035 : .065;
                    u.scale.set(h, h, h);
                    var p = window.innerWidth / window.innerHeight / (1920 / 1080);
                    u.position.add(l.geometry.vertices[0]), u.position.x *= -p, u.position.x -= d, u.position.y -= d
                }
                l.visible && (l.seekBar && (l.seekBar.material.opacity = l.material.opacity, l.seekBar.material.progress = s), i = !0)
            }
            if (this._needsInputStart && this._isWaitingForStart && n > this._inputPauseAfter && (this._isWaitingForStart = !1, this._isWaitingForInput = !0, this.setPlaybackRate(0)), this.playing && this.videoElement.readyState >= this.videoElement.HAVE_CURRENT_DATA) {
                for (var c = 0; c < this.timeUpdateCallbacks.length; c++) this.timeUpdateCallbacks[c](this.videoElement.currentTime);
                i && (this.texture.needsUpdate = !0)
            }
        }

        function g(t) {
            this.timeUpdateCallbacks.push(t)
        }

        function v() {
            var t = this,
                e = !1,
                i = function() {
                    e || (t.onReadyToPlay(), e = !0)
                };
            _.once(this.videoElement, "canplay", function() {
                e || i()
            }), setTimeout(function() {
                e || (console.warn("Video MIGHT be ready..."), i())
            }, 4e3)
        }

        function y(t) {
            t = N(t, U);
            var e = "";
            if (Object.keys(t).forEach(function(i) {
                    e += t[i] + ";"
                }), !B[e]) {
                var i = new I.PlaneGeometry(1, 1, t.segsX, t.segsY),
                    n = new I.Vector3(0, 0, 5 / t.curvature),
                    r = new I.Box3;
                i.vertices.forEach(function(e) {
                    e.y += t.offsetY * t.aspect, e.y /= t.aspect, e.sub(n), e.normalize(), e.add(n), e.y *= t.aspect, r.expandByPoint(e), e.x *= t.scale
                }), r = t.curveBounds || r;
                var o = r.getCenter(),
                    a = r.getSize();
                a.y = 1 / a.y / t.aspect, a.z = 1 / a.z, a.x = 1 / a.x, a.z *= .2 * t.curvature, i.vertices.forEach(function(e) {
                    e.sub(o), e.multiply(a), e.z += t.offsetZ
                }), i.curveBounds = r, B[e] = i
            }
            return B[e]
        }

        function M() {
            return this.material || (this.material = new I.MeshBasicMaterial({
                map: this.texture,
                fog: !1,
                transparent: !0
            })), this.material.opacity = 0, L("debugVideoHeight") && (this.material.opacity = 1, Object.defineProperty(this.material, "opacity", {
                set: function(t) {},
                get: function() {
                    return 1
                }
            })), this.material
        }

        function x() {
            return this.seekBarMaterial || (this.seekBarMaterial = new j({
                fog: !1,
                transparent: !0,
                color: new I.Color(16777215),
                opacity: 0,
                opacityEmpty: .2
            })), this.seekBarMaterial
        }

        function w() {
            var t = {
                    curvature: E() ? .6 : .01
                },
                e = new I.Mesh(y(t), M.call(this));
            e.object3d = e, t.segsY = 1, E() ? t.offsetY = -.33125 : t.offsetY = -.26225, t.offsetZ = .01;
            var i = window.innerWidth / window.innerHeight / (1920 / 1080);
            t.scale = .95 * i, t.aspect = 16 / 9 * 120, t.curveBounds = e.geometry.curveBounds;
            var n = new I.Mesh(y(t), x.call(this));
            if (!E()) {
                t.aspect /= 12, t.scale = 1 * i, t.offsetZ = .005, t.offsetY = -.27975;
                var r = new I.MeshBasicMaterial({
                        color: 0
                    }),
                    o = new I.Mesh(y(t), r);
                o.renderOrder = 6e3, e.add(o)
            }
            e.seekBar = n;
            var a = new C;
            a.position.z = .005, a.scale.set(.06, .06, .06), e.add(a), e.closeButton = a;
            var s = Date.now(),
                c = this;
            return e.closeButton.onSelect = function() {
                var t = Date.now();
                t - s < 2e3 || (s = t, c.seekEndOfChapter())
            }, a.visible = !1, this.closeButton = a, e.add(n), e.renderOrder = 6e3, n.renderOrder = 6e3, this.meshes.push(e), e
        }
        var T = t("simple-media-element").video,
            _ = t("dom-events"),
            b = t("../util/isMobile"),
            E = t("../util/isVR"),
            S = t("../util/isDesktop"),
            D = t("mobile-detect"),
            A = t("iphone-inline-video"),
            N = t("lodash.defaults"),
            L = t("urlparam"),
            I = t("three"),
            C = t("../gfx/CloseButton"),
            j = t("./seekBar/Material"),
            O = t("./ChapterDivisions"),
            P = t("./timeStringToSeconds"),
            z = function() {},
            R = new D(window.navigator.userAgent),
            k = {
                muted: !1,
                loop: !1,
                url: void 0,
                chapterDivisions: ["0:00", "1:30", "99:00"],
                autoPlay: !1,
                startTime: 0,
                playbackRate: L("playbackRate", 1),
                onReadyToPlay: z
            };
        n.prototype = {
            play: r,
            setPlaybackRate: o,
            pause: s,
            seek: c,
            seekEndOfChapter: l,
            setSource: u,
            onInputStart: h,
            setInputStartEnabled: d,
            isInputStartEnabled: p,
            handleTap: f,
            update: m,
            registerTimeUpdateCallback: g,
            load: v,
            createMesh: w
        };
        var B = {},
            U = {
                curvature: .01,
                aspect: 16 / 9,
                offsetY: 0,
                offsetZ: 0,
                scale: 1,
                segsX: 16,
                segsY: 9,
                curveBounds: null
            };
        e.exports = n
    }, {
        "../gfx/CloseButton": 25,
        "../util/isDesktop": 112,
        "../util/isMobile": 114,
        "../util/isVR": 115,
        "./ChapterDivisions": 124,
        "./seekBar/Material": 127,
        "./timeStringToSeconds": 128,
        "dom-events": 443,
        "iphone-inline-video": 471,
        "lodash.defaults": 484,
        "mobile-detect": 487,
        "simple-media-element": 511,
        three: 520,
        urlparam: 529
    }],
    126: [function(t, e, i) {
        "use strict";

        function n(t) {
            function e(e) {
                e.position.z = -8, e.rotation.set(0, 0, 0);
                var i = 0,
                    n = e.visible;
                e.visible = !0, e.updateMatrix(), e.updateMatrixWorld(), e.seekBar.updateMatrixWorld(), e.visible = n;
                for (var o = 0; o < e.seekBar.geometry.vertices.length; o += 4) r.copy(e.seekBar.geometry.vertices[o]), e.seekBar.localToWorld(r), i = Math.max(i, t.getHeightAtLocation(r.x, r.z));
                r.set(0, 0, 0), e.localToWorld(r), r.y = i + 1.1, e.parent.worldToLocal(r), e.position.copy(r), e.lookAt(r)
            }
            return e
        }
        var r = new THREE.Vector3;
        e.exports = n
    }, {}],
    127: [function(t, e, i) {
        "use strict";

        function n() {
            return a || (a = "#define GLSLIFY 1\nvarying vec2 vUv;\n\nvoid main() {\n  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n  vUv = uv;\n}\n"), a
        }

        function r() {
            return s || (s = "#define GLSLIFY 1\nvarying vec2 vUv;\nuniform vec3 color;\nuniform float opacityEmpty;\nuniform float opacity;\nuniform float progress;\n\nvoid main() {\n\tfloat opacityFinal = opacity;\n\tif(vUv.x >= progress) {\n\t\topacityFinal *= opacityEmpty;\n\t}\n\tgl_FragColor = vec4(color, opacityFinal);\n}\n"), s
        }

        function o(t) {
            t = c(t, u), l.ShaderMaterial.call(this, {
                vertexShader: n(),
                fragmentShader: r(),
                depthTest: !0,
                depthWrite: !0,
                transparent: !0,
                uniforms: {
                    color: {
                        type: "c",
                        value: t.color
                    },
                    progress: {
                        type: "f",
                        value: t.progress
                    },
                    opacityEmpty: {
                        type: "f",
                        value: t.opacityEmpty
                    },
                    opacity: {
                        type: "f",
                        value: t.opacity
                    }
                }
            }), Object.defineProperty(this, "opacity", {
                set: function(t) {
                    this.uniforms.opacity.value = t
                }
            })
        }
        var a, s, c = t("lodash.defaults"),
            l = t("three"),
            u = {
                color: new l.Color(65535),
                opacity: 1,
                opacityEmpty: .2,
                progress: .5
            };
        o.prototype = Object.create(l.ShaderMaterial.prototype), Object.defineProperty(o.prototype, "progress", {
            set: function(t) {
                this.uniforms.progress.value = t
            }
        }), e.exports = o
    }, {
        "lodash.defaults": 484,
        three: 520
    }],
    128: [function(t, e, i) {
        "use strict";

        function n(t) {
            var e = t.split(":");
            if (2 === e.length) return 60 * Number(e[0]) + Number(e[1]);
            throw new Error("time format should be MM:SS")
        }
        e.exports = n
    }, {}],
    129: [function(t, e, i) {
        var n = {
            animationIterationCount: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridRow: !0,
            gridColumn: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            stopOpacity: !0,
            strokeDashoffset: !0,
            strokeOpacity: !0,
            strokeWidth: !0
        };
        e.exports = function(t, e) {
            return "number" != typeof e || n[t] ? e : e + "px"
        }
    }, {}],
    130: [function(t, e, i) {
        function n(t) {
            return t.BYTES_PER_ELEMENT && "[object ArrayBuffer]" === r.call(t.buffer) || Array.isArray(t)
        }
        var r = Object.prototype.toString;
        e.exports = n
    }, {}],
    131: [function(t, e, i) {
        e.exports = function(t, e) {
            return "number" == typeof t ? t : "number" == typeof e ? e : 0
        }
    }, {}],
    132: [function(t, e, i) {
        (function(e) {
            "use strict";

            function i(t, e, i) {
                t[e] || Object[n](t, e, {
                    writable: !0,
                    configurable: !0,
                    value: i
                })
            }
            if (t("core-js/shim"), t("regenerator-runtime/runtime"), t("core-js/fn/regexp/escape"), e._babelPolyfill) throw new Error("only one instance of babel-polyfill is allowed");
            e._babelPolyfill = !0;
            var n = "defineProperty";
            i(String.prototype, "padLeft", "".padStart), i(String.prototype, "padRight", "".padEnd), "pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function(t) {
                [][t] && i(Array, t, Function.call.bind([][t]))
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "core-js/fn/regexp/escape": 145,
        "core-js/shim": 439,
        "regenerator-runtime/runtime": 508
    }],
    133: [function(t, e, i) {
        "use strict";

        function n() {
            for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", e = 0, i = t.length; e < i; ++e) c[e] = t[e], l[t.charCodeAt(e)] = e;
            l["-".charCodeAt(0)] = 62, l["_".charCodeAt(0)] = 63
        }

        function r(t) {
            var e, i, n, r, o, a, s = t.length;
            if (s % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
            o = "=" === t[s - 2] ? 2 : "=" === t[s - 1] ? 1 : 0, a = new u(3 * s / 4 - o), n = o > 0 ? s - 4 : s;
            var c = 0;
            for (e = 0, i = 0; e < n; e += 4, i += 3) r = l[t.charCodeAt(e)] << 18 | l[t.charCodeAt(e + 1)] << 12 | l[t.charCodeAt(e + 2)] << 6 | l[t.charCodeAt(e + 3)], a[c++] = r >> 16 & 255, a[c++] = r >> 8 & 255, a[c++] = 255 & r;
            return 2 === o ? (r = l[t.charCodeAt(e)] << 2 | l[t.charCodeAt(e + 1)] >> 4, a[c++] = 255 & r) : 1 === o && (r = l[t.charCodeAt(e)] << 10 | l[t.charCodeAt(e + 1)] << 4 | l[t.charCodeAt(e + 2)] >> 2, a[c++] = r >> 8 & 255, a[c++] = 255 & r), a
        }

        function o(t) {
            return c[t >> 18 & 63] + c[t >> 12 & 63] + c[t >> 6 & 63] + c[63 & t]
        }

        function a(t, e, i) {
            for (var n, r = [], a = e; a < i; a += 3) n = (t[a] << 16) + (t[a + 1] << 8) + t[a + 2], r.push(o(n));
            return r.join("")
        }

        function s(t) {
            for (var e, i = t.length, n = i % 3, r = "", o = [], s = 16383, l = 0, u = i - n; l < u; l += s) o.push(a(t, l, l + s > u ? u : l + s));
            return 1 === n ? (e = t[i - 1], r += c[e >> 2], r += c[e << 4 & 63], r += "==") : 2 === n && (e = (t[i - 2] << 8) + t[i - 1], r += c[e >> 10], r += c[e >> 4 & 63], r += c[e << 2 & 63], r += "="), o.push(r), o.join("")
        }
        i.toByteArray = r, i.fromByteArray = s;
        var c = [],
            l = [],
            u = "undefined" != typeof Uint8Array ? Uint8Array : Array;
        n()
    }, {}],
    134: [function(t, e, i) {
    