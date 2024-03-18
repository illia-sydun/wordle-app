import { ISourceOptions } from '@tsparticles/engine';

export const PARTICLES_PRESET = {
    GAME_LOST: {
        key: 'amongUs',
        name: 'Among Us',
        particles: {
            groups: {
                z5000: {
                    number: {
                        value: 70,
                    },
                    zIndex: {
                        value: 50,
                    },
                },
                z7500: {
                    number: {
                        value: 30,
                    },
                    zIndex: {
                        value: 75,
                    },
                },
                z2500: {
                    number: {
                        value: 50,
                    },
                    zIndex: {
                        value: 25,
                    },
                },
                z1000: {
                    number: {
                        value: 40,
                    },
                    zIndex: {
                        value: 10,
                    },
                },
            },
            number: {
                value: 200,
            },
            color: {
                value: '#fff',
                animation: {
                    enable: false,
                    speed: 20,
                    sync: true,
                },
            },
            shape: {
                type: 'circle',
            },
            opacity: {
                value: 1,
            },
            size: {
                value: 3,
            },
            move: {
                angle: {
                    value: 10,
                    offset: 0,
                },
                enable: true,
                speed: 5,
                direction: 'right',
            },
            zIndex: {
                value: 5,
                opacityRate: 0.5,
            },
        },
        background: {
            color: '#000000',
        },
    },
    GAME_WON: {
        key: 'fireworks',
        name: 'Fireworks',
        emitters: {
            direction: 'top',
            life: {
                count: 0,
                duration: 0.1,
                delay: 0.15,
            },
            rate: {
                delay: 0.125,
                quantity: 1,
            },
            size: {
                width: 100,
                height: 0,
            },
            position: {
                y: 100,
                x: 50,
            },
        },
        particles: {
            number: {
                value: 0,
            },
            destroy: {
                bounds: {
                    top: 30,
                },
                mode: 'split',
                split: {
                    count: 1,
                    factor: {
                        value: 0.333333,
                    },
                    rate: {
                        value: 150,
                    },
                    particles: {
                        stroke: {
                            width: 0,
                        },
                        color: {
                            value: [
                                '#ff595e',
                                '#ff595e',
                                '#ffca3a',
                                '#ffca3a',
                                '#8ac926',
                                '#8ac926',
                                '#1982c4',
                                '#1982c4',
                                '#6a4c93',
                                '#6a4c93',
                                '#ffffff',
                                '#ffffff',
                                '#818384',
                            ],
                        },
                        number: {
                            value: 0,
                        },
                        collisions: {
                            enable: false,
                        },
                        destroy: {
                            bounds: {
                                top: 0,
                            },
                        },
                        opacity: {
                            value: {
                                min: 0.1,
                                max: 1,
                            },
                            animation: {
                                enable: true,
                                speed: 0.7,
                                sync: false,
                                startValue: 'max',
                                destroy: 'min',
                            },
                        },
                        shape: {
                            type: 'circle',
                        },
                        size: {
                            value: {
                                min: 1.5,
                                max: 2.5,
                            },
                            animation: {
                                enable: false,
                            },
                        },
                        life: {
                            count: 1,
                            duration: {
                                value: {
                                    min: 1,
                                    max: 2,
                                },
                            },
                        },
                        move: {
                            enable: true,
                            gravity: {
                                enable: true,
                                acceleration: 9.81,
                                inverse: false,
                            },
                            decay: 0.1,
                            speed: {
                                min: 10,
                                max: 25,
                            },
                            direction: 'outside',
                            outModes: 'destroy',
                        },
                    },
                },
            },
            life: {
                count: 1,
            },
            shape: {
                type: 'line',
            },
            size: {
                value: {
                    min: 0.1,
                    max: 50,
                },
                animation: {
                    enable: true,
                    sync: true,
                    speed: 90,
                    startValue: 'max',
                    destroy: 'min',
                },
            },
            stroke: {
                color: {
                    value: '#ffffff',
                },
                width: 1,
            },
            rotate: {
                path: true,
            },
            move: {
                enable: true,
                gravity: {
                    acceleration: 15,
                    enable: true,
                    inverse: true,
                    maxSpeed: 100,
                },
                speed: {
                    min: 10,
                    max: 20,
                },
                outModes: {
                    default: 'destroy',
                    top: 'none',
                },
            },
        },
    },
} as const satisfies Record<string, ISourceOptions>;
