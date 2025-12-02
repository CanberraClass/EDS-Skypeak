EDSFormats.TTSG = {
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

EDSFormats.TTSG.pids = EDSFormats.SMRT.pids;

EDSData.TTSG = {
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
    1111: {
        1: {
            front: {
                renderType: "message",
                text: "OFF SERVICE",
                font: "Arial-12",
                spacing: 2
            },
            pids: {
                renderType: "pids",
                serviceNumber: "",
                destination: "OFF SERVICE",
                scrolls: [""]
            }
        }
    }, 
    41: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "41",
                destination: {
                    text: "JLN ANAK BUKIT",
                    font: "LECIP-Tower16"
                },
                scrolls: [
		    {
			renderType: "destoNumber",
			text: "41",
		    }
		],
                scrollFont: ""
            },
            pids: {
                renderType: "pids",
                serviceNumber: "41",
                destination: "JALAN ANAK BUKIT",
                scrolls: [
                    "JURONG EAST INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "41",
                destination: {
                    text: "JURONG EAST",
                    font: "LECIP-Tower16"
                },
                scrolls: [],
                scrollFont: "Arial-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "41",
                destination: "JURONG EAST INT",
                scrolls: [
                    "JURONG EAST INT"
                ]
            }
        }
    }, 
    49: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "49",
                destination: {
                    text: "JUR WEST ST 42",
                    font: "LECIP-Tower16"
                },
                scrolls: [],
                scrollFont: ""
            },
            pids: {
                renderType: "pids",
                serviceNumber: "49",
                destination: "JURONG WEST ST 42",
                scrolls: [
                    "JURONG EAST INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "49",
                destination: {
                    text: "JURONG EAST",
                    font: "LECIP-Tower16"
                },
                scrolls: [],
                scrollFont: "Arial-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "49",
                destination: "JURONG EAST INT",
                scrolls: [
                    "JURONG EAST INT"
                ]
            }
        }
    }, 
    66: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "66",
                destination: {
                    text: "UPP BT TIMAH RD",
                    font: "LECIP-Tower16"
                },
                scrolls: [],
                scrollFont: ""
            },
            pids: {
                renderType: "pids",
                serviceNumber: "66",
                destination: "UPPER BT TIMAH ROAD",
                scrolls: [
		    "JURONG EAST INT",
		    "BLK 131",
		    "BLK 134",
		    "S'PORE SCIENCE CTR",
		    "AFT S'PORE SCIENCE CTR",
		    "OPP BLK 114",
		    "OPP BLK 227",
		    "BLK 303",
		    "AFT PIE",
		    "BLK 168",
		    "BLK 154A",
		    "BLK 109",
		    "OPP BT BATOK SWIM CLPX",
		    "BT VIEW SEC SCH",
		    "OPP BLK 291A/BLK 292 MSCP", 
		    "CH OF ST. MARY",
		    "AUTOBACS",
		    "AFT BT BATOK EAST AVE 6",
		    "THE HILLFORD",
		    "AFT CHUN TIN RD",
		    "OPP BLK 19",
		    "OPP BEAUTY WORLD STN",
		    "PEI HWA PRESEBY PRI SCH"
		]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "66",
                destination: {
                    text: "JURONG EAST",
                    font: "LECIP-Tower16"
                },
                scrolls: [],
                scrollFont: ""
            },
            pids: {
                renderType: "pids",
                serviceNumber: "66",
                destination: "JURONG EAST INT",
                scrolls: [
		    "BEAUTY WORLD STN EXIT C",
		    "BLK 18",
		    "SIGNATURE PK CONDO",
		    "OPP THE HILLFORD",
		    "BEF BT BATOK EAST AVE 6",
		    "PARK NATURA",
		    "BLK 288C",
		    "BLK 291A/OPP BLK 292 MSCP",
		    "OPP BT VIEW SEC SCH",
		    "BT BATOK SWIM CLPX",
		    "BLK 185",
		    "BLK 183",
		    "BLK 169",
		    "BEF PIE",
		    "BLK 253",
		    "BLK 228",
		    "BLK 114",
		    "BLK 118/BEF S'PORE SCIENCE CTR",
		    "OPP S'PORE SCIENCE CTR",
		    "BLK 124",
                    "JURONG EAST INT"
		]
            }
        }
    },
    77: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "77",
                destination: {
                    text: "RAFFLES BLVD",
                    font: "LECIP-Tower16"
                },
                scrolls: [],
                scrollFont: ""
            },
            pids: {
                renderType: "pids",
                serviceNumber: "77",
                destination: "MARINA CTR TER",
                scrolls: [
                    "BT BATOK INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "77",
                destination: {
                    text: "BUKIT BATOK",
                    font: "LECIP-Tower16"
                },
                scrolls: [],
                scrollFont: "Arial-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "77",
                destination: "BT BATOK INT",
                scrolls: [
                    "AFT S'PORE FLYER"
                ]
            }
        }
    },
    78: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "78",
                destination: {
                    text: "CLEMENTI AVE 3",
                    font: "LECIP-Tower16"
                },
                scrolls: [],
                scrollFont: ""
            },
            pids: {
                renderType: "pids",
                serviceNumber: "78",
                destination: "CLEMENTI AVE 3",
                scrolls: [
                    "JURONG TOWN HALL INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",  
                scrolls: [],
                scrollFont: "Arial-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "78",
                destination: "JURONG TOWN HALL INT",
                scrolls: [
                    "JURONG TOWN HALL INT"
                ]
            }
        }
    },
    79: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "79",
                destination: {
                    text: "BOON LAY",
                    font: "LECIP-Tower16"
                },
                scrolls: [],
                scrollFont: ""
            },
            pids: {
                renderType: "pids",
                serviceNumber: "79",
                destination: "BOON LAY INT",
                scrolls: [
                    "JURONG TOWN HALL INT",
		    "BOON LAY INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "79",
                destination: {
                    text: "JUR TOWN HALL",
                    font: "LECIP-Tower16"
                },
                scrolls: [],
                scrollFont: "Arial-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "79",
                destination: "JURONG TOWN HALL INT",
                scrolls: [
		    "BOON LAY INT",
                    "JURONG TOWN HALL INT"
                ]
            }
        }
    },
    96: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "96",
                destination: {
                    text: "CLEMENTI NUS",
                    font: "LECIP-Tower16"
                },
                scrolls: [],
                scrollFont: ""
            },
            pids: {
                renderType: "pids",
                serviceNumber: "96",
                destination: "CLEMENTI INT",
                scrolls: [
                    "CLEMENTI INT"
                ]
            }
        }
    },
    97: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "97",
                destination: {
                    text: "RAFFLES BLVD",
                    font: "LECIP-Tower16"
                },
                scrolls: [],
                scrollFont: ""
            },
            pids: {
                renderType: "pids",
                serviceNumber: "97",
                destination: "MARINA CTR TER",
                scrolls: [
                    "JURONG EAST INT",
                    "JURONG TOWN HALL INT",
                    "GERMAN CTR",
                    "OPP CYCLE/CARRIGE",
                    "OPP THE INFINITI",
                    "OPP THE NEWWEST",
                    "BLK 431",
                    "BLK 436",
                    "AFT CLEMENTI AVE 2",
                    "PROMENADE STN/PAN PACIFIC"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "97",
                destination: {
                    text: "JURONG EAST",
                    font: "LECIP-Tower16"
                },
                scrolls: [],
                scrollFont: "Arial-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "97",
                destination: "JURONG EAST INT",
                scrolls: [
                    "AFT S'PORE FLYER",
                    "THE FLOAT @ MARINA BAY",
                    "THE ESPLNADE",
                    "SUNTEC CONVETION CTR",
                    "AFT PROMENADE STN EXIT C",
                    "OPP RITZ-CARTON",
                    "JURONG EAST INT"
                ]
            }
        }
    },
    98: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "98",
                destination: {
                    text: "JUR PIER WAY",
                    font: "LECIP-Tower16"
                },
                scrolls: [],
                scrollFont: ""
            },
            pids: {
                renderType: "pids",
                serviceNumber: "98",
                destination: "JURONG PIER WAY",
                scrolls: [
                    "JURONG EAST INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "98",
                destination: {
                    text: "JURONG EAST",
                    font: "LECIP-Tower16"
                },
                scrolls: [],
                scrollFont: "Arial-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "98",
                destination: "JURONG EAST INT",
                scrolls: [
                    "JURONG EAST INT"
                ]
            }
        }
    },
    106: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "106",
                destination: {
                    text: "SHENTON WAY",
                    font: "LECIP-Tower16"
                },
                scrolls: [],
                scrollFont: ""
            },
            pids: {
                renderType: "pids",
                serviceNumber: "106",
                destination: "SHENTON WAY",
                scrolls: [
                    "JURONG EAST INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "106",
                destination: {
                    text: "BUKIT BATOK",
                    font: "LECIP-Tower16"
                },
                scrolls: [],
                scrollFont: "Arial-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "106",
                destination: "BUKIT BATOK INT",
                scrolls: [
                    ""
                ]
            }
        }
    },
    189: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "189",
                destination: {
                    text: "CLEMENTI AVE 1",
                    font: "LECIP-Tower16"
                },
                scrolls: [],
                scrollFont: ""
            },
            pids: {
                renderType: "pids",
                serviceNumber: "189",
                destination: "CLEMENTI AVE 1",
                scrolls: [
                    "JURONG EAST INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "106",
                destination: {
                    text: "BUKIT BATOK",
                    font: "LECIP-Tower16"
                },
                scrolls: [],
                scrollFont: "Arial-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "98",
                destination: "JURONG EAST INT",
                scrolls: [
                    "JURONG EAST INT"
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

EDSImages.TTSG = {
    "logo": [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
}
