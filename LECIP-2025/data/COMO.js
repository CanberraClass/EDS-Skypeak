EDSFormats.COMO = {
    standardService: {
        serviceNumber: {
            align: "right",
            text: "$serviceNumber",
            font: "LECIP-24",
            spacing: 1
        },
        scroll: {
            align: "left,top",
            margin: {
                top: 2,
                left: 2
            },
            scrolls: "$scrolls",
            rotate: true,
            rotateSpeed: 3000,

            font: "$scrollFont",
            spacing: 1
        },
        destination: {
            align: "left,bottom",
            margin: {
                bottom: 1,
                left: 2
            },
            text: "$destination",
            spacing: 1
        },

        text: "$destination"
    },
    swt2: {
        serviceNumber: {
            align: "right",
            text: "$serviceNumber",
            font: "LECIP-24",
            spacing: 1
        },
        scroll: {
            align: "middle,top",
            margin: {
                top: 2,
                left: 2
            },
            scrolls: "$terminatingroad",
            rotate: true,
            rotateSpeed: 3000,

            font: "$scrollFont",
            spacing: 1
        },
        destination: {
            align: "middle,bottom",
            margin: {
                bottom: 1,
                left: 2
            },
            text: "$terminatingbusstop",
            spacing: 1
        },

        text: "$destination"
    },
    swt: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 1
            },
            text: "$serviceNumber",
            font: "LECIP-24",
            spacing: 3
        },
        terminateAt: {
            align: "centre-x,top",
            margin: {
                top: 2,
                right: "width(serviceNumber)"
            },
            text: {
                $$cond: {
                    "$terminateAt === undefined": "TERMINATING AT",
                    "else": "'TERMINATING AT '+$terminateAt"
                }
            },
            font: "LECIP-8",
            spacing: 1
        },
        landmark: {
            align: "centre-x,bottom",
            margin: {
                bottom: 3,
                right: "width(serviceNumber)"
            },
            text: "$landmark",
            font: "LECIP-8",
            spacing: 1
        },

        text: {
            $$cond: {
                "$terminateAt === undefined": "'TERMINATING AT '+$landmark",
                "else": "'TERMINATING AT '+$terminateAt+' '+$landmark"
            }
        }
    }
}

EDSFormats.COMO.pids = EDSFormats.SMRT.pids;


EDSData.COMO = {
    1: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "1",
                destination: {
                    text: "> COMMONWEALTH 16 SHELTER",
                    font: "LECIP-8"
                },
                scrolls: [
                    "BLOCK 93",
                    "BLOCK 95"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "1",
                destination: "C'WEALTH 16 SHELTER",
                secondDestination: {
                    name: "C'WEALTH 16 TER",
                    changeIndex: 4
		},
                scrolls: [
                    "COMMONWEALTH 16 TER",
		    "BLK 91",
		    "BLK 93",
		    "BLK 95/PLAYGROUND",
                    "COMMONWEALTH 16 SHELTER",
		    "OPP BLK 95/PLAYGROUND",
		    "BLK 93",
		    "OPP BLK 91",
                    "COMMONWEALTH 16 TER"  
                ]
            }
        }
    },
    2: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "2",
                destination: {
                    text: "> COMMONWEALTH CL TER",
                    font: "LECIP-8"
                },
                scrolls: [
                    "BLOCK 92",
                    "BLOCK 90",
                    "COMMONWEALTH 16 CHCKPT",
                    "BLOCK 85"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "2",
                destination: "COMMONWEALTH CLOSE TER",
                scrolls: [
                    "COMMONWEALTH 16 TER",
                    "BLOCK 90",
                    "AFT C'WEALTH 16",
                    "COMMONWEALTH 16 CHECKPOINT",
                    "BLK 85",
                    "COMMONWEALTH CLOSE TER"


                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "2",
                destination: {
                    text: "> COMMONWEALTH 16 TER",
                    font: "LECIP-8"
                },
                scrolls: [
                    "BLOCK 85",
                    "COMMONWEALTH 16 CHCKPT",
                    "BLOCK 90",
                    "BLOCK 92"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "2",
                destination: "COMMONWEALTH 16 TER",
                scrolls: [
                    "COMMONWEALTH CLOSE TER",
                    "AFT COMMONWEALTH CL TER",
                    "COMMONWEALTH 16 CHECKPOINT",
                    "BEF C'WEALTH 16",
                    "BLK 90",
                    "BLK 92",
                    "COMMONWEALTH 16 TER"
                ]
            }
        }
    },
    "9999A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "T10",
                destination: {
                    text: ">  KOTA TINGGI",
                    font: "LECIP-8"
                },
                scrolls: [
                    "JALAN YAHA AWAL",
                    "LARKIN TERMINAL",
                    "JALAN TAMPOI",
                    "TEBRAU HIGHWAY",
                    "JALAN KOTA TINGGI",
                    "ULU TIRAM TERMINAL",
                    "JALAN JOHOR"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "T10",
                destination: "KOTA TINGGI",
                scrolls: [
                    "JB SENTRAL TER",
                    "LARKIN TER",
                    "OPP PARAGON MARKET PLACE",
                    "AEON TEBRAU / BEF IKEA",
                    "ULU TIRAM TER",
                    "KOTA TINGGI TER",
                ]
            }
        }
    },
    "9999B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "420",
                destination: {
                    text: ">  PANDAN INDAH",
                    font: "LECIP-8"
                },
                scrolls: [
                    "MALURI",
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "300",
                destination: "PANDAN INDAH",
                scrolls: [
                    "MALURI",
                ]
            }
        }
    }
}
