EDSFormats.SKPK = {
    standardService: {
        serviceNumber: {
            align: "right,centre-y",
            margin: {
                right: 7
            },
            text: "$serviceNumber",
            font: "LECIP-Tower24",
            spacing: 2
        },
        destination: {
            align: "centre-x,top",
            margin: {
                top: 3,
                right: "width(serviceNumber) + len(7)"
            },
            text: "$destination",
            spacing: 1
        },

        text: "$destination"
    },
    message: {
        display: {
            align: "centre-x,centre-y",
            text: "$text",
            font: "$font",
            spacing: "$spacing"
        },

        text: "$text"
    },
    destoNumber: {
            display: {
            align: "centre-x,centre-y",
            text: "$text",
            font: "LECIP-Tower24",
            spacing: "12"
        },

        text: "$text"
    },
    logo: {
        logo: {
            align: "centre-x,centre-y",
            image: "$image"
        },

        text: "$text"
    },
}

EDSFormats.SKPK.pids = EDSFormats.SMRT.pids;

EDSData.SKPK = {
    0: {
        1: {
            front: {
                renderType: "message",
                text: "",
                font: "",
                spacing: 0
            },
            pids: {
                renderType: "pids",
                serviceNumber: "",
                destination: "",
                scrolls: [""]
            }
        }
    }, 
    1: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "1",
                destination: {
                    text: "CHOA CHU KANG",
                    font: "LECIP-Tower16"
                },
                scrolls: [],
                scrollFont: ""
            },
            pids: {
                renderType: "pids",
                serviceNumber: "1",
                destination: "CHOA CHU KANG TER",
                scrolls: [
                    "10-220-222 DEPOT",
		    "10-216-222 DEPOT",
		    "BLK 292B",
		    "BLK 292A",
		    "BLOCK 292A STN EXIT 1",
		    "BLOCK 293C STN EXIT 2",
		    "BLK 293C",
		    "CHOA CHU KANG TER",
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "1",
                destination: {
                    text: "10 216 222",
                    font: "LECIP-Tower16"
                },
                scrolls: [],
                scrollFont: "Arial-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "1",
                destination: "10-220-222 DEPOT",
                scrolls: [
		    "CHOA CHU KANG TER",
		    "BLOCK 293C STN EXIT 1",
		    "BLOCK 292A STN EXIT 2",
		    "BLK 292A",
		    "BLK 292B",
		    "10-216-222 DEPOT",
                    "10-220-222 DEPOT"
                ]
            }
        }
    }, 
    4444: {
        1: {
            front: {
                renderType: "message",
                text: "ON TEST",
                font: "Arial-12",
                spacing: 2
            },
            pids: {
                renderType: "pids",
                serviceNumber: "",
                destination: "ON TEST",
                scrolls: [""]
            }
        }
    }      
}
