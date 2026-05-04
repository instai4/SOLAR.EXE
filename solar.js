/* =================================================================
   PLANET DATA
================================================================= */
const PLANETS = [
    {
        id: 'mercury', name: 'Mercury', emoji: '🌑', type: 'Terrestrial', symbol: '☿',
        radius: 1.1, orbR: 32, period: 88, tilt: 0.03, rotP: 58.6, inclination: 7.0,
        color: '#a8a8a4', glow: 'rgba(168,168,164,0.3)',
        pillarColor: '#a8a8a4',
        info: {
            diameter: '4,879 km', dist: '57.9M km', period: '88 days', rot: '58.6 days',
            moons: 'None', gravity: '3.7 m/s²', temp: '-180° to 430°C', atm: 'Trace exosphere',
            sizeRel: 4.8,
            funFact: "☿ A day on Mercury lasts longer than its entire year — 176 Earth days vs 88!",
            desc: "The closest planet to the Sun and the smallest in our Solar System. With virtually no atmosphere, Mercury experiences the most extreme temperature swings of any planet — over 600°C between night and day. Its enormous iron core makes up 85% of its radius.",
        },
        moons: []
    },
    {
        id: 'venus', name: 'Venus', emoji: '🟡', type: 'Terrestrial', symbol: '♀',
        radius: 1.8, orbR: 52, period: 225, tilt: 177.4, rotP: -243, inclination: 3.4,
        color: '#e8c472', glow: 'rgba(232,196,114,0.4)',
        pillarColor: '#e8c472',
        info: {
            diameter: '12,104 km', dist: '108M km', period: '225 days', rot: '243 days',
            moons: 'None', gravity: '8.9 m/s²', temp: '465°C constant', atm: 'CO₂ 96%, N₂ 3.5%',
            sizeRel: 12.1,
            funFact: "♀ Venus spins backwards! If you stood there, the Sun would rise in the west.",
            desc: "The hottest planet — hotter than Mercury despite being farther from the Sun. Its thick CO₂ atmosphere traps heat in a runaway greenhouse effect. Venus also rotates so slowly that one day there lasts longer than its entire year.",
        },
        moons: []
    },
    {
        id: 'earth', name: 'Earth', emoji: '🌍', type: 'Terrestrial', symbol: '🜨',
        radius: 2.0, orbR: 75, period: 365, tilt: 23.44, rotP: 1.0, inclination: 0.0,
        color: '#4a9eff', glow: 'rgba(74,158,255,0.4)',
        pillarColor: '#4a9eff',
        info: {
            diameter: '12,756 km', dist: '149.6M km', period: '365.25 days', rot: '24 hours',
            moons: '1 (Moon)', gravity: '9.8 m/s²', temp: '-89° to 58°C', atm: 'N₂ 78%, O₂ 21%',
            sizeRel: 12.7,
            funFact: "🌍 Earth is the only planet not named after a god. Also the densest planet!",
            desc: "Our home — the only known world harboring life. Earth's unique combination of liquid water, plate tectonics, a strong magnetic field, and an oxygen atmosphere makes it extraordinarily special. Over 70% of its surface is covered by oceans.",
        },
        moons: [
            {
                id: 'moon', name: 'Moon', color: '#b8b8b4', orbR: 4.5, period: 27.3, radius: 0.55,
                info: {
                    diameter: '3,474 km', dist: '384,400 km', period: '27.3 days', rot: 'Tidally locked', gravity: '1.62 m/s²', temp: '-173° to 127°C',
                    funFact: "🌕 The Moon is slowly drifting away from Earth at ~3.8 cm per year!",
                    desc: "Earth's only natural satellite and the fifth-largest moon in the Solar System. The Moon stabilizes Earth's axial tilt and drives our tides. Humans walked on it in 1969."
                }
            }
        ]
    },
    {
        id: 'mars', name: 'Mars', emoji: '🔴', type: 'Terrestrial', symbol: '♂',
        radius: 1.4, orbR: 102, period: 687, tilt: 25.19, rotP: 1.03, inclination: 1.85,
        color: '#e05a2b', glow: 'rgba(224,90,43,0.4)',
        pillarColor: '#e05a2b',
        info: {
            diameter: '6,779 km', dist: '228M km', period: '687 days', rot: '24.6 hours',
            moons: '2 (Phobos, Deimos)', gravity: '3.7 m/s²', temp: '-125° to 20°C', atm: 'CO₂ 95%',
            sizeRel: 6.8,
            funFact: "♂ Olympus Mons on Mars is 3× taller than Mount Everest — the tallest volcano known!",
            desc: "The Red Planet — home to the tallest volcano and deepest canyon in the Solar System. Ancient river valleys suggest liquid water flowed on Mars billions of years ago. Mars has a day almost identical to Earth's at 24.6 hours.",
        },
        moons: [
            {
                id: 'phobos', name: 'Phobos', color: '#907060', orbR: 2.5, period: 0.32, radius: 0.25,
                info: {
                    diameter: '22.2 km', dist: '9,376 km', period: '7.7 hours', rot: 'Tidally locked', gravity: '0.006 m/s²', temp: '-40°C avg',
                    funFact: "🌑 Phobos will crash into Mars or shatter into a ring in ~50 million years!",
                    desc: "The larger of Mars's two moons orbits so close that it completes three full orbits in a single Martian day. Tidal forces are slowly pulling it inward to its doom."
                }
            },
            {
                id: 'deimos', name: 'Deimos', color: '#a09070', orbR: 4.0, period: 1.26, radius: 0.18,
                info: {
                    diameter: '12.4 km', dist: '23,460 km', period: '30.3 hours', rot: 'Tidally locked', gravity: '0.003 m/s²', temp: '-40°C avg',
                    funFact: "🌑 From Mars, Deimos looks like a bright star — it's too tiny to appear as a disc!",
                    desc: "The smaller, more distant moon of Mars. Both moons are thought to be captured asteroids. Deimos has a smoother surface than Phobos due to thick layers of dust filling its craters."
                }
            }
        ]
    },
    {
        id: 'jupiter', name: 'Jupiter', emoji: '🟠', type: 'Gas Giant', symbol: '♃',
        radius: 6.2, orbR: 175, period: 4333, tilt: 3.13, rotP: 0.41, inclination: 1.3,
        color: '#c8824a', glow: 'rgba(200,130,74,0.4)',
        pillarColor: '#c8824a',
        info: {
            diameter: '139,820 km', dist: '778.5M km', period: '11.9 years', rot: '9.9 hours',
            moons: '95 confirmed', gravity: '24.8 m/s²', temp: '-108°C (clouds)', atm: 'H₂ 90%, He 10%',
            sizeRel: 100,
            funFact: "♃ Jupiter is so massive — all other planets could fit inside it with room to spare!",
            desc: "The king of planets — a gas giant so massive it acts as the Solar System's vacuum cleaner, shielding inner planets from comets and asteroids with its gravity. The Great Red Spot is a storm that has raged for over 350 years.",
        },
        moons: [
            {
                id: 'io', name: 'Io', color: '#e0b830', orbR: 9.5, period: 1.77, radius: 0.55,
                info: {
                    diameter: '3,643 km', dist: '421,700 km', period: '1.77 days', rot: 'Tidally locked', gravity: '1.8 m/s²', temp: '-143° to 1,600°C',
                    funFact: "🌋 Io has 400+ active volcanoes — the most geologically active world we know!",
                    desc: "The most volcanically active body in the Solar System. Io is squeezed by Jupiter's immense gravity, generating heat that powers hundreds of volcanoes. Some erupt sulfur plumes 500 km high."
                }
            },
            {
                id: 'europa', name: 'Europa', color: '#d4c8a8', orbR: 13.5, period: 3.55, radius: 0.48,
                info: {
                    diameter: '3,122 km', dist: '671,100 km', period: '3.55 days', rot: 'Tidally locked', gravity: '1.3 m/s²', temp: '-160°C (surface)',
                    funFact: "🌊 Europa has more liquid water than all of Earth's oceans combined!",
                    desc: "Covered in a smooth ice shell hiding a vast subsurface ocean. Europa is one of the most promising candidates for extraterrestrial life. Water vapor plumes have been detected erupting from its surface."
                }
            },
            {
                id: 'ganymede', name: 'Ganymede', color: '#887c6a', orbR: 19, period: 7.15, radius: 0.65,
                info: {
                    diameter: '5,268 km', dist: '1,070,400 km', period: '7.15 days', rot: 'Tidally locked', gravity: '1.43 m/s²', temp: '-163°C avg',
                    funFact: "🌍 Ganymede is larger than Mercury and the only moon with its own magnetic field!",
                    desc: "The largest moon in the Solar System — even bigger than the planet Mercury. Ganymede generates its own magnetic field, a unique feature among moons. It likely harbors a subsurface ocean larger than Earth's."
                }
            },
            {
                id: 'callisto', name: 'Callisto', color: '#7a6868', orbR: 26, period: 16.69, radius: 0.60,
                info: {
                    diameter: '4,821 km', dist: '1,882,700 km', period: '16.69 days', rot: 'Tidally locked', gravity: '1.24 m/s²', temp: '-139°C avg',
                    funFact: "🌑 Callisto is the most heavily cratered body in the Solar System — every bit of it!",
                    desc: "The most bombarded world we know — its surface is a testament to 4 billion years of cosmic collisions. Sitting outside Jupiter's intense radiation belts, Callisto is the most hospitable Galilean moon for future missions."
                }
            }
        ]
    },
    {
        id: 'saturn', name: 'Saturn', emoji: '🪐', type: 'Gas Giant', symbol: '♄',
        radius: 5.5, orbR: 260, period: 10759, tilt: 26.73, rotP: 0.44, inclination: 2.49,
        color: '#e4c870', glow: 'rgba(228,200,112,0.4)',
        pillarColor: '#e4c870', hasRings: true,
        info: {
            diameter: '116,460 km', dist: '1.43B km', period: '29.5 years', rot: '10.7 hours',
            moons: '146 confirmed', gravity: '10.4 m/s²', temp: '-139°C (clouds)', atm: 'H₂ 96%, He 3%',
            sizeRel: 95.5,
            funFact: "🪐 Saturn is so light it would FLOAT on water — the least dense planet!",
            desc: "The jewel of the Solar System, renowned for its spectacular ring system stretching 282,000 km but only 10 meters thick in places. Saturn radiates more heat than it receives from the Sun, powered by its slow gravitational contraction.",
        },
        moons: [
            {
                id: 'titan', name: 'Titan', color: '#c0882a', orbR: 12, period: 15.95, radius: 0.72,
                info: {
                    diameter: '5,151 km', dist: '1,221,870 km', period: '15.95 days', rot: 'Tidally locked', gravity: '1.35 m/s²', temp: '-179°C avg',
                    funFact: "🌫 Titan has rain — but it's liquid methane, not water!",
                    desc: "The only moon with a thick atmosphere and the only world besides Earth with stable liquid on its surface. Titan's lakes and seas are filled with liquid methane. Its complex organic chemistry makes it a prime target for life research."
                }
            },
            {
                id: 'enceladus', name: 'Enceladus', color: '#eef0f8', orbR: 7.5, period: 1.37, radius: 0.30,
                info: {
                    diameter: '504 km', dist: '238,020 km', period: '1.37 days', rot: 'Tidally locked', gravity: '0.11 m/s²', temp: '-201°C avg',
                    funFact: "💧 Enceladus shoots water geysers hundreds of kilometers into space!",
                    desc: "A small moon with a giant secret: active geysers shooting water ice into space from a warm subsurface ocean. That ocean contains hydrogen suggesting hydrothermal vents — conditions where life may have first emerged on Earth."
                }
            },
            {
                id: 'rhea', name: 'Rhea', color: '#c0c0b8', orbR: 17, period: 4.52, radius: 0.40,
                info: {
                    diameter: '1,527 km', dist: '527,108 km', period: '4.52 days', rot: 'Tidally locked', gravity: '0.26 m/s²', temp: '-174°C avg',
                    funFact: "🌑 Rhea may have a thin ring system of its own — the first ring around a moon ever found!",
                    desc: "Saturn's second-largest moon, composed mainly of water ice. Heavily cratered and geologically quiet for billions of years, Rhea may have a thin oxygen atmosphere generated by charged particles bombarding its icy surface."
                }
            }
        ]
    },
    {
        id: 'uranus', name: 'Uranus', emoji: '🔵', type: 'Ice Giant', symbol: '⛢',
        radius: 3.4, orbR: 335, period: 30687, tilt: 97.77, rotP: -0.72, inclination: 0.77,
        color: '#72e8e0', glow: 'rgba(114,232,224,0.35)',
        pillarColor: '#72e8e0', hasRings: true, ringThin: true,
        info: {
            diameter: '51,118 km', dist: '2.87B km', period: '84 years', rot: '17.2 hours',
            moons: '28 confirmed', gravity: '8.7 m/s²', temp: '-197°C (clouds)', atm: 'H₂ 83%, He 15%, CH₄ 2%',
            sizeRel: 51.1,
            funFact: "⛢ Uranus rolls around the Sun on its side — its poles face the Sun directly!",
            desc: "The 'sideways planet' rotates with an axial tilt of 97.8°, likely from a massive ancient collision. Unlike the other giants, Uranus emits almost no internal heat. Its blue-green color comes from methane absorbing red light.",
        },
        moons: [
            {
                id: 'titania', name: 'Titania', color: '#b0a090', orbR: 10, period: 8.71, radius: 0.44,
                info: {
                    diameter: '1,578 km', dist: '435,910 km', period: '8.71 days', rot: 'Tidally locked', gravity: '0.38 m/s²', temp: '-203°C avg',
                    funFact: "🌑 Uranus's moons are named after Shakespeare characters — Titania from Midsummer Night's Dream!",
                    desc: "Uranus's largest moon, with a diverse surface of ancient craters and large fault valleys showing evidence of past geological activity. Named after the Queen of the Fairies in Shakespeare's play."
                }
            },
            {
                id: 'oberon', name: 'Oberon', color: '#968888', orbR: 14, period: 13.46, radius: 0.42,
                info: {
                    diameter: '1,523 km', dist: '583,520 km', period: '13.46 days', rot: 'Tidally locked', gravity: '0.35 m/s²', temp: '-203°C avg',
                    funFact: "🌑 Oberon was discovered by William Herschel in 1787 — the same night as Titania!",
                    desc: "The outermost of Uranus's five major moons. Its dark reddish surface material is thought to be organic compounds. Oberon features mountains up to 6 km high, likely the rims of ancient impact craters."
                }
            }
        ]
    },
    {
        id: 'neptune', name: 'Neptune', emoji: '🌀', type: 'Ice Giant', symbol: '♆',
        radius: 3.3, orbR: 405, period: 60190, tilt: 28.32, rotP: 0.67, inclination: 1.77,
        color: '#3858e8', glow: 'rgba(56,88,232,0.4)',
        pillarColor: '#3858e8',
        info: {
            diameter: '49,528 km', dist: '4.5B km', period: '165 years', rot: '16.1 hours',
            moons: '16 confirmed', gravity: '11.2 m/s²', temp: '-201°C (clouds)', atm: 'H₂ 80%, He 19%, CH₄ 1.5%',
            sizeRel: 49.5,
            funFact: "🌀 Neptune has the fastest winds in the Solar System — 2,100 km/h!",
            desc: "The windiest, most distant planet. Neptune was discovered mathematically before it was seen — astronomers predicted its existence from gravitational anomalies in Uranus's orbit. Despite similar size to Uranus, Neptune radiates 2.6× more energy than it receives.",
        },
        moons: [
            {
                id: 'triton', name: 'Triton', color: '#b8ccd8', orbR: 8.5, period: -5.88, radius: 0.52,
                info: {
                    diameter: '2,707 km', dist: '354,760 km', period: '5.88 days', rot: 'Tidally locked', gravity: '0.78 m/s²', temp: '-235°C (coldest known surface!)',
                    funFact: "❄️ Triton is the coldest known surface in the Solar System at -235°C!",
                    desc: "The only large moon that orbits in the opposite direction of its planet's rotation — proof it was captured from the Kuiper Belt. Triton has active nitrogen geysers and is slowly spiraling inward toward eventual destruction."
                }
            }
        ]
    }
];

const SUN = {
    id: 'sun', name: 'Sun', emoji: '☀️', type: 'Star — G-type Main Sequence', symbol: '☉',
    info: {
        diameter: '1,392,700 km', dist: '—', period: '—', rot: '25–36 days',
        moons: '8 planets orbit it', gravity: '274 m/s²', temp: '5,500°C surface / 15M°C core', atm: 'H₂ 73%, He 25%',
        sizeRel: 100,
        funFact: "☀️ The Sun contains 99.86% of all mass in the entire Solar System!",
        desc: "The gravitational center and power source of our Solar System. The Sun fuses 620 million tonnes of hydrogen into helium every second. It has been burning for 4.6 billion years and has roughly 5 billion more to go before becoming a red giant.",
    },
    moons: []
};

/* =================================================================
   TEXTURE FACTORY
================================================================= */
const TX = {};
const rr = (a, b) => a + Math.random() * (b - a);

function makeTex(w, h, fn) {
    const c = document.createElement('canvas'); c.width = w; c.height = h;
    fn(c.getContext('2d'), w, h); return new THREE.CanvasTexture(c);
}

function genTextures() {
    const W = 512, H = 256;

    // SUN
    TX.sun = makeTex(W, H, (ctx, w, h) => {
        const g = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2);
        g.addColorStop(0, '#fffce8'); g.addColorStop(0.15, '#ffe050');
        g.addColorStop(0.5, '#ff9900'); g.addColorStop(0.8, '#e06000');
        g.addColorStop(1, '#b03000');
        ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
        for (let i = 0; i < 200; i++) {
            const x = rr(0, w), y = rr(0, h), r = rr(4, 40);
            const bright = Math.random() > 0.4;
            ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.fillStyle = bright ? `rgba(255,240,100,${rr(0.08, 0.28)})` : `rgba(180,60,0,${rr(0.1, 0.22)})`;
            ctx.fill();
        }
        // Sunspots
        for (let i = 0; i < 12; i++) {
            const x = rr(w * 0.15, w * 0.85), y = rr(h * 0.2, h * 0.8), r = rr(5, 22);
            ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(80,20,0,0.55)'; ctx.fill();
            ctx.beginPath(); ctx.arc(x, y, r * 0.5, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(40,10,0,0.7)'; ctx.fill();
        }
    });


    // MERCURY
    TX.mercury = makeTex(W, H, (ctx, w, h) => {
        ctx.fillStyle = '#6a6a60'; ctx.fillRect(0, 0, w, h);
        for (let i = 0; i < 400; i++) {
            const x = rr(0, w), y = rr(0, h), r = rr(2, 24);
            const v = Math.floor(rr(70, 175));
            ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${v},${v},${v * 0.93},0.5)`; ctx.fill();
        }
        for (let i = 0; i < 100; i++) {
            const x = rr(0, w), y = rr(0, h), r = rr(2, 16);
            ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(30,30,28,0.5)'; ctx.lineWidth = 1.2; ctx.stroke();
            ctx.beginPath(); ctx.arc(x, y, r * 0.4, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(25,25,22,0.6)'; ctx.fill();
        }
        ctx.fillStyle = 'rgba(160,155,148,0.3)';
        ctx.fillRect(0, 0, w, 14); ctx.fillRect(0, h - 14, w, 14);
    });

    // VENUS
    TX.venus = makeTex(W, H, (ctx, w, h) => {
        const g = ctx.createLinearGradient(0, 0, 0, h);
        g.addColorStop(0, '#b89030'); g.addColorStop(0.35, '#e8cc50');
        g.addColorStop(0.65, '#d0b038'); g.addColorStop(1, '#a07a20');
        ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
        for (let y = 0; y < h; y++) {
            const sw = Math.sin(y * 0.10 + 1.2) * 38 + Math.sin(y * 0.04) * 55;
            ctx.fillStyle = `rgba(255,225,120,${0.08 + 0.10 * Math.abs(Math.sin(y * 0.07))})`;
            ctx.fillRect(sw, y, w * 0.45, 1);
            ctx.fillStyle = `rgba(160,100,8,${0.05 + 0.07 * Math.abs(Math.sin(y * 0.11))})`;
            ctx.fillRect(sw + w * 0.55, y, w * 0.3, 1);
        }
        for (let i = 0; i < 50; i++) {
            const x = rr(0, w), y = rr(0, h), r = rr(10, 55);
            ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255,215,90,${rr(0.04, 0.12)})`; ctx.fill();
        }
    });

    // EARTH
    TX.earth = makeTex(W, H, (ctx, w, h) => {
        ctx.fillStyle = '#12396a'; ctx.fillRect(0, 0, w, h);
        // Deeper ocean gradient
        for (let y = 0; y < h; y++) {
            ctx.fillStyle = `rgba(10,35,85,${0.2 + 0.15 * Math.sin(y * 0.04)})`;
            ctx.fillRect(0, y, w, 1);
        }
        // Continents (detailed approximation)
        ctx.fillStyle = '#1e5e18';
        // North America
        ctx.beginPath(); ctx.ellipse(80, 78, 42, 52, Math.PI * 0.05, 0, Math.PI * 2);
        ctx.fill(); ctx.beginPath(); ctx.ellipse(92, 145, 24, 30, Math.PI * 0.1, 0, Math.PI * 2); ctx.fill();
        // South America
        ctx.beginPath(); ctx.ellipse(105, 172, 22, 34, Math.PI * 0.08, 0, Math.PI * 2); ctx.fill();
        // Eurasia
        ctx.beginPath(); ctx.ellipse(215, 80, 72, 50, Math.PI * 0.03, 0, Math.PI * 2);
        ctx.fillStyle = '#256620'; ctx.fill();
        ctx.beginPath(); ctx.ellipse(295, 90, 45, 40, Math.PI * 0.04, 0, Math.PI * 2);
        ctx.fillStyle = '#1e5e18'; ctx.fill();
        // Africa
        ctx.beginPath(); ctx.ellipse(190, 148, 35, 42, Math.PI * 0.02, 0, Math.PI * 2);
        ctx.fillStyle = '#2a6e1c'; ctx.fill();
        // Australia
        ctx.beginPath(); ctx.ellipse(355, 172, 30, 20, Math.PI * 0.05, 0, Math.PI * 2);
        ctx.fillStyle = '#3a8020'; ctx.fill();
        // Antarctica
        ctx.fillStyle = 'rgba(240,248,255,0.85)';
        ctx.fillRect(0, h - 14, w, 14);
        // Arctic
        ctx.fillStyle = 'rgba(235,245,255,0.75)'; ctx.fillRect(0, 0, w, 12);
        // Clouds
        for (let i = 0; i < 100; i++) {
            const x = rr(0, w), y = rr(0, h), rx = rr(12, 72), ry = rr(4, 16);
            ctx.save(); ctx.translate(x, y); ctx.beginPath();
            ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255,255,255,${rr(0.07, 0.2)})`; ctx.fill(); ctx.restore();
        }
        // Atmosphere blue edge
        for (let i = 0; i < 3; i++) {
            ctx.fillStyle = `rgba(100,160,255,${0.04 - i * 0.01})`;
            ctx.fillRect(0, i, w, 2); ctx.fillRect(0, h - 2 - i, w, 2);
        }
    });

    // MARS
    TX.mars = makeTex(W, H, (ctx, w, h) => {
        ctx.fillStyle = '#7a2008'; ctx.fillRect(0, 0, w, h);
        for (let y = 0; y < h; y++) {
            const v = Math.sin(y * 0.035) * 18 + Math.sin(y * 0.11) * 8;
            ctx.fillStyle = `rgba(${175 + v},${55 + v * 0.3},${15 + v * 0.1},0.35)`;
            ctx.fillRect(0, y, w, 1);
        }
        for (let i = 0; i < 250; i++) {
            const x = rr(0, w), y = rr(h * 0.04, h * 0.96), r = rr(4, 52);
            const rv = Math.floor(rr(130, 215)), gv = Math.floor(rr(28, 78));
            ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${rv},${gv},12,0.38)`; ctx.fill();
        }
        // Dark basalt regions
        for (let i = 0; i < 8; i++) {
            const x = rr(w * 0.05, w * 0.95), y = rr(h * 0.15, h * 0.85), r = rr(18, 58);
            ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(80,15,4,0.32)'; ctx.fill();
        }
        // Craters
        for (let i = 0; i < 80; i++) {
            const x = rr(0, w), y = rr(0, h), r = rr(2, 20);
            ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(50,12,4,0.55)'; ctx.lineWidth = 1.4; ctx.stroke();
        }
        // Polar caps
        ctx.fillStyle = 'rgba(252,242,238,0.82)';
        ctx.fillRect(0, 0, w, 16); ctx.fillRect(0, h - 12, w, 12);
    });

    // JUPITER
    TX.jupiter = makeTex(W, H, (ctx, w, h) => {
        const bands = [
            { y: 0, h: 15, c: '#b87030' }, { y: 15, h: 14, c: '#dca050' }, { y: 29, h: 17, c: '#c87838' },
            { y: 46, h: 12, c: '#eebc68' }, { y: 58, h: 19, c: '#c06830' }, { y: 77, h: 15, c: '#e0a058' },
            { y: 92, h: 13, c: '#c87838' }, { y: 105, h: 17, c: '#eecc68' }, { y: 122, h: 13, c: '#c06830' },
            { y: 135, h: 15, c: '#e0a058' }, { y: 150, h: 15, c: '#c47038' }, { y: 165, h: 17, c: '#eab060' },
            { y: 182, h: 12, c: '#c27030' }, { y: 194, h: 15, c: '#eabc68' }, { y: 209, h: 14, c: '#c87038' },
            { y: 223, h: 33, c: '#dcab58' },
        ];
        bands.forEach(b => { ctx.fillStyle = b.c; ctx.fillRect(0, b.y, W, b.h); });
        // Band turbulence
        for (let y = 0; y < h; y++) {
            const wave = Math.sin(y * 0.055) * 14 + Math.sin(y * 0.13) * 7 + Math.sin(y * 0.23) * 4;
            ctx.fillStyle = `rgba(195,95,38,${0.07 + 0.05 * Math.abs(Math.sin(y * 0.09))})`;
            ctx.fillRect(wave, y, W * 0.28, 1);
        }
        // Great Red Spot
        ctx.save(); ctx.translate(W * 0.33, H * 0.61);
        ctx.beginPath(); ctx.ellipse(0, 0, 38, 24, Math.PI * 0.07, 0, Math.PI * 2);
        ctx.fillStyle = '#bc2c1c'; ctx.fill();
        ctx.beginPath(); ctx.ellipse(0, 0, 29, 16, Math.PI * 0.07, 0, Math.PI * 2);
        ctx.fillStyle = '#d83828'; ctx.fill();
        ctx.beginPath(); ctx.ellipse(0, 0, 19, 10, Math.PI * 0.07, 0, Math.PI * 2);
        ctx.fillStyle = '#ff5540'; ctx.fill();
        ctx.restore();
        // Other storms
        for (let i = 0; i < 10; i++) {
            ctx.save(); ctx.translate(rr(0, w), rr(0, h));
            ctx.beginPath(); ctx.ellipse(0, 0, rr(5, 18), rr(4, 11), 0, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(210,155,75,0.22)'; ctx.fill(); ctx.restore();
        }
    });

    // SATURN
    TX.saturn = makeTex(W, H, (ctx, w, h) => {
        const bands = [
            { y: 0, h: 13, c: '#c8a448' }, { y: 13, h: 17, c: '#e0c060' }, { y: 30, h: 13, c: '#c0a040' },
            { y: 43, h: 15, c: '#eeda80' }, { y: 58, h: 17, c: '#c8a84a' }, { y: 75, h: 13, c: '#e4c668' },
            { y: 88, h: 15, c: '#c4a040' }, { y: 103, h: 15, c: '#ecd278' }, { y: 118, h: 13, c: '#d4b060' },
            { y: 131, h: 17, c: '#e6ca70' }, { y: 148, h: 15, c: '#c8a248' }, { y: 163, h: 12, c: '#ead070' },
            { y: 175, h: 15, c: '#c8a248' }, { y: 190, h: 13, c: '#e2c868' }, { y: 203, h: 14, c: '#c8a040' },
            { y: 217, h: 39, c: '#d8b860' },
        ];
        bands.forEach(b => { ctx.fillStyle = b.c; ctx.fillRect(0, b.y, W, b.h); });
        for (let y = 0; y < h; y++) {
            ctx.fillStyle = `rgba(255,238,170,${0.04 + 0.03 * Math.sin(y * 0.07)})`;
            ctx.fillRect(Math.sin(y * 0.065) * 18, y, W * 0.38, 1);
        }
        ctx.beginPath(); ctx.ellipse(W / 2, 16, 42, 15, 0, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(155,115,38,0.18)'; ctx.fill();
    });

    // URANUS
    TX.uranus = makeTex(W, H, (ctx, w, h) => {
        const g = ctx.createLinearGradient(0, 0, 0, h);
        g.addColorStop(0, '#48b8b8'); g.addColorStop(0.5, '#70e0dc'); g.addColorStop(1, '#48b0b8');
        ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
        for (let y = 0; y < h; y++) {
            ctx.fillStyle = `rgba(90,210,220,${0.035 + 0.025 * Math.sin(y * 0.13)})`;
            ctx.fillRect(0, y, w, 1);
        }
        for (let i = 0; i < 7; i++) {
            const y = rr(0, h), bh = rr(7, 22);
            ctx.fillStyle = 'rgba(72,195,210,0.06)'; ctx.fillRect(0, y, w, bh);
        }
        ctx.fillStyle = 'rgba(170,238,244,0.18)';
        ctx.fillRect(0, 0, w, 18); ctx.fillRect(0, h - 18, w, 18);
    });

    // NEPTUNE
    TX.neptune = makeTex(W, H, (ctx, w, h) => {
        const g = ctx.createLinearGradient(0, 0, 0, h);
        g.addColorStop(0, '#142480'); g.addColorStop(0.4, '#2838b0');
        g.addColorStop(0.7, '#1e2898'); g.addColorStop(1, '#101c88');
        ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
        for (let i = 0; i < 5; i++) {
            const x = rr(0, w), y = rr(h * 0.15, h * 0.85);
            ctx.save(); ctx.translate(x, y);
            ctx.beginPath(); ctx.ellipse(0, 0, rr(13, 42), rr(7, 20), 0, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(8,16,72,0.48)'; ctx.fill(); ctx.restore();
        }
        for (let i = 0; i < 25; i++) {
            const y = rr(0, h);
            ctx.fillStyle = `rgba(165,192,255,${rr(0.05, 0.16)})`;
            ctx.fillRect(rr(0, w), y, rr(28, 115), rr(1, 3));
        }
        // Great Dark Spot
        ctx.save(); ctx.translate(W * 0.38, H * 0.44);
        ctx.beginPath(); ctx.ellipse(0, 0, 30, 19, 0, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(8,14,65,0.58)'; ctx.fill(); ctx.restore();
        ctx.fillStyle = 'rgba(90,128,210,0.12)';
        ctx.fillRect(0, 0, w, 20); ctx.fillRect(0, h - 20, w, 20);
    });

    // MOON
    TX.moon = makeTex(W, H, (ctx, w, h) => {
        ctx.fillStyle = '#989890'; ctx.fillRect(0, 0, w, h);
        for (let i = 0; i < 280; i++) {
            const x = rr(0, w), y = rr(0, h), r = rr(3, 28);
            const v = Math.floor(rr(105, 172));
            ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${v},${v},${v * 0.95},0.48)`; ctx.fill();
        }
        for (let i = 0; i < 120; i++) {
            const x = rr(0, w), y = rr(0, h), r = rr(2, 14);
            ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(55,55,52,0.38)'; ctx.lineWidth = 1; ctx.stroke();
        }
        [{ x: 200, y: 88, r: 42 }, { x: 285, y: 112, r: 36 }, { x: 148, y: 128, r: 26 }, { x: 360, y: 80, r: 18 }]
            .forEach(m => {
                ctx.beginPath(); ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(65,65,60,0.38)'; ctx.fill();
            });
    });

    // IO (volcanic sulfur)
    TX.io = makeTex(W, H, (ctx, w, h) => {
        ctx.fillStyle = '#b89020'; ctx.fillRect(0, 0, w, h);
        for (let i = 0; i < 130; i++) {
            const x = rr(0, w), y = rr(0, h), r = rr(4, 42);
            ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${Math.floor(rr(145, 255))},${Math.floor(rr(75, 175))},${Math.floor(rr(0, 35))},0.44)`; ctx.fill();
        }
        for (let i = 0; i < 25; i++) {
            const x = rr(0, w), y = rr(0, h), r = rr(3, 14);
            ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255,50,0,0.58)'; ctx.fill();
            ctx.beginPath(); ctx.arc(x, y, r * 0.55, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255,145,0,0.7)'; ctx.fill();
        }
        for (let i = 0; i < 35; i++) {
            ctx.beginPath(); ctx.arc(rr(0, w), rr(0, h), rr(4, 20), 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(238,225,172,0.32)'; ctx.fill();
        }
    });

    // EUROPA (cracked ice)
    TX.europa = makeTex(W, H, (ctx, w, h) => {
        ctx.fillStyle = '#ccc4aa'; ctx.fillRect(0, 0, w, h);
        for (let i = 0; i < 90; i++) {
            ctx.beginPath(); ctx.arc(rr(0, w), rr(0, h), rr(7, 52), 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(215,208,188,0.45)'; ctx.fill();
        }
        for (let i = 0; i < 80; i++) {
            const x1 = rr(0, w), y1 = rr(0, h);
            ctx.beginPath(); ctx.moveTo(x1, y1);
            ctx.lineTo(x1 + rr(-60, 60), y1 + rr(-40, 40));
            ctx.strokeStyle = `rgba(155,105,55,${rr(0.28, 0.62)})`; ctx.lineWidth = rr(0.6, 2.4); ctx.stroke();
        }
        ctx.fillStyle = 'rgba(235,242,255,0.42)';
        ctx.fillRect(0, 0, w, 15); ctx.fillRect(0, h - 15, w, 15);
    });

    // GANYMEDE
    TX.ganymede = makeTex(W, H, (ctx, w, h) => {
        ctx.fillStyle = '#70685a'; ctx.fillRect(0, 0, w, h);
        for (let i = 0; i < 200; i++) {
            const x = rr(0, w), y = rr(0, h), r = rr(4, 35);
            const v = Math.floor(rr(80, 155));
            ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${v},${v * 0.97},${v * 0.88},0.44)`; ctx.fill();
        }
        for (let i = 0; i < 60; i++) {
            const x = rr(0, w), y = rr(0, h), r = rr(2, 15);
            ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(40,38,30,0.4)'; ctx.lineWidth = 1; ctx.stroke();
        }
    });

    // CALLISTO
    TX.callisto = makeTex(W, H, (ctx, w, h) => {
        ctx.fillStyle = '#5a4e4e'; ctx.fillRect(0, 0, w, h);
        for (let i = 0; i < 320; i++) {
            const x = rr(0, w), y = rr(0, h), r = rr(3, 22);
            const v = Math.floor(rr(72, 148));
            ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${v},${v * 0.96},${v * 0.9},0.5)`; ctx.fill();
        }
        for (let i = 0; i < 150; i++) {
            const x = rr(0, w), y = rr(0, h), r = rr(2, 14);
            ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(30,25,25,0.48)'; ctx.lineWidth = 1; ctx.stroke();
            ctx.beginPath(); ctx.arc(x, y, r * 0.38, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(22,18,18,0.6)'; ctx.fill();
        }
    });

    // TITAN
    TX.titan = makeTex(W, H, (ctx, w, h) => {
        const g = ctx.createLinearGradient(0, 0, 0, h);
        g.addColorStop(0, '#724010'); g.addColorStop(0.5, '#b05820'); g.addColorStop(1, '#803010');
        ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
        for (let y = 0; y < h; y++) {
            ctx.fillStyle = `rgba(188,122,38,${0.1 + 0.08 * Math.sin(y * 0.055)})`;
            ctx.fillRect(Math.sin(y * 0.075) * 28, y, w * 0.32, 1);
        }
        for (let i = 0; i < 14; i++) {
            ctx.save(); ctx.translate(rr(0, w), rr(h * 0.2, h * 0.8));
            ctx.beginPath(); ctx.ellipse(0, 0, rr(9, 32), rr(5, 16), rr(0, Math.PI), 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(50,25,8,0.48)'; ctx.fill(); ctx.restore();
        }
        ctx.fillStyle = 'rgba(215,155,55,0.28)';
        ctx.fillRect(0, 0, w, 22); ctx.fillRect(0, h - 22, w, 22);
    });

    // ENCELADUS
    TX.enceladus = makeTex(W, H, (ctx, w, h) => {
        ctx.fillStyle = '#dce8f4'; ctx.fillRect(0, 0, w, h);
        for (let i = 0; i < 70; i++) {
            ctx.beginPath(); ctx.arc(rr(0, w), rr(0, h), rr(5, 38), 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(235,242,255,0.48)'; ctx.fill();
        }
        for (let i = 0; i < 35; i++) {
            ctx.beginPath(); ctx.arc(rr(0, w), rr(0, h), rr(3, 14), 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(148,182,215,0.38)'; ctx.lineWidth = 1; ctx.stroke();
        }
        for (let i = 0; i < 10; i++) {
            ctx.beginPath(); ctx.moveTo(rr(w * 0.3, w * 0.7), h * 0.65 + i * 6);
            ctx.lineTo(rr(w * 0.25, w * 0.75), h * 0.82 + i * 4);
            ctx.strokeStyle = 'rgba(95,135,195,0.48)'; ctx.lineWidth = 2; ctx.stroke();
        }
    });

    // TRITON
    TX.triton = makeTex(W, H, (ctx, w, h) => {
        ctx.fillStyle = '#a8c0ce'; ctx.fillRect(0, 0, w, h);
        for (let i = 0; i < 140; i++) {
            ctx.beginPath(); ctx.arc(rr(0, w), rr(0, h), rr(3, 26), 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${Math.floor(rr(132, 195))},${Math.floor(rr(172, 218))},${Math.floor(rr(195, 238))},0.38)`; ctx.fill();
        }
        for (let i = 0; i < 55; i++) {
            ctx.beginPath(); ctx.arc(rr(0, w), rr(0, h), rr(2, 11), 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(72,115,152,0.32)'; ctx.lineWidth = 1; ctx.stroke();
        }
        ctx.fillStyle = 'rgba(215,235,248,0.52)';
        ctx.fillRect(0, 0, w, 24); ctx.fillRect(0, h - 24, w, 24);
    });

    // Generic grey moon
    TX.generic = makeTex(W, H, (ctx, w, h) => {
        ctx.fillStyle = '#808878'; ctx.fillRect(0, 0, w, h);
        for (let i = 0; i < 180; i++) {
            const v = Math.floor(rr(78, 148));
            ctx.beginPath(); ctx.arc(rr(0, w), rr(0, h), rr(3, 24), 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${v},${v * 0.97},${v * 0.92},0.48)`; ctx.fill();
        }
        for (let i = 0; i < 60; i++) {
            ctx.beginPath(); ctx.arc(rr(0, w), rr(0, h), rr(2, 12), 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(35,34,30,0.38)'; ctx.lineWidth = 1; ctx.stroke();
        }
    });

    // SATURN RING
    TX.saturnRing = makeTex(512, 512, (ctx, w, h) => {
        ctx.clearRect(0, 0, w, h);
        const cx = w / 2, cy = h / 2;
        const ringDefs = [
            { r1: 0.37, r2: 0.41, a: 0.07, c: '175,135,55' },
            { r1: 0.41, r2: 0.43, a: 0.03, c: '100,78,30' },
            { r1: 0.43, r2: 0.54, a: 0.22, c: '205,162,82' },
            { r1: 0.54, r2: 0.56, a: 0.02, c: '80,62,22' },
            { r1: 0.56, r2: 0.65, a: 0.28, c: '195,155,75' },
            { r1: 0.65, r2: 0.67, a: 0.07, c: '150,118,50' },
            { r1: 0.67, r2: 0.70, a: 0.14, c: '185,148,70' },
            { r1: 0.70, r2: 0.72, a: 0.06, c: '130,100,40' },
        ];
        ringDefs.forEach(rd => {
            const steps = 150;
            for (let s = 0; s < steps; s++) {
                const frac = s / steps;
                const rad = (rd.r1 + (rd.r2 - rd.r1) * frac) * (w / 2);
                ctx.beginPath(); ctx.arc(cx, cy, rad, 0, Math.PI * 2);
                const alpha = rd.a * (0.65 + 0.35 * Math.sin(frac * 28 + rd.r1 * 10));
                ctx.strokeStyle = `rgba(${rd.c},${alpha})`; ctx.lineWidth = 1.5; ctx.stroke();
            }
        });
    });
}

/* =================================================================
   THREE.JS SCENE
================================================================= */
let scene, camera, renderer, raycaster, mouse3;
let planetObjs = []; // {mesh,data,type,pivot,pd,moonObjs,glowMesh}
let orbitMeshes = [];
let labelEls = [];
let focusedObj = null;
let time = 0, timeScale = 1.0;
let asteroidBelt, cometObj, cometTailPts;
let cometAngle = 0;

// Camera
let cam = {
    theta: -0.5, phi: 1.15, radius: 500,
    tx: 0, ty: 0, tz: 0,
    isDragging: false, lastX: 0, lastY: 0,
    targetTheta: -0.5, targetPhi: 1.15, targetR: 500,
    targetTx: 0, targetTy: 0, targetTz: 0,
};
const LF = 0.065;

function initScene() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 25000);
    renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('cv'), antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    raycaster = new THREE.Raycaster();
    raycaster.params.Points = { threshold: 0.5 };
    mouse3 = new THREE.Vector2();

    // Lights
    scene.add(new THREE.AmbientLight(0x111826, 0.55));
    const sunLight = new THREE.PointLight(0xfff0cc, 3.5, 8000, 1.2);
    scene.add(sunLight);

    buildStarfield();
    buildSun();
    buildPlanets();
    buildAsteroidBelt();
    buildComet();
    buildCarousel();
    buildSearchGrid();

    setupEvents();
}


function buildStarfield() {
    const geo = new THREE.BufferGeometry();
    const n = 12000;
    const pos = new Float32Array(n * 3), col = new Float32Array(n * 3), sz = new Float32Array(n);
    for (let i = 0; i < n; i++) {
        const r = rr(2000, 12000), t2 = rr(0, Math.PI * 2), p2 = Math.acos(rr(-1, 1));
        pos[i * 3] = r * Math.sin(p2) * Math.cos(t2);
        pos[i * 3 + 1] = r * Math.sin(p2) * Math.sin(t2);
        pos[i * 3 + 2] = r * Math.cos(p2);
        const tc = Math.random();
        if (tc < 0.18) { col[i * 3] = 0.75; col[i * 3 + 1] = 0.82; col[i * 3 + 2] = 1.0; }
        else if (tc < 0.65) { col[i * 3] = 1.0; col[i * 3 + 1] = 1.0; col[i * 3 + 2] = 0.96; }
        else { col[i * 3] = 1.0; col[i * 3 + 1] = 0.92; col[i * 3 + 2] = 0.72; }
        sz[i] = Math.random() < 0.05 ? 2.5 : 1.2;
    }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    geo.setAttribute('size', new THREE.BufferAttribute(sz, 1));
    const mat = new THREE.PointsMaterial({ size: 1.4, vertexColors: true, sizeAttenuation: false, transparent: true, opacity: 0.88 });
    scene.add(new THREE.Points(geo, mat));
}

function buildSun() {
    const geo = new THREE.SphereGeometry(16, 72, 72);
    const mat = new THREE.MeshBasicMaterial({ map: TX.sun });
    const mesh = new THREE.Mesh(geo, mat);
    scene.add(mesh);

    // Glow layers
    [1.08, 1.18, 1.35, 1.6].forEach((s, i) => {
        const gGeo = new THREE.SphereGeometry(16 * s, 32, 32);
        const alpha = [0.22, 0.13, 0.06, 0.025][i];
        const col = [0xffdd44, 0xff9900, 0xff5500, 0xff2200][i];
        const gMat = new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: alpha, side: THREE.BackSide, depthWrite: false });
        scene.add(new THREE.Mesh(gGeo, gMat));
    });

    planetObjs.push({ mesh, data: SUN, type: 'sun' });
    addLabel(mesh, SUN, '#ffd166', 0, 18);
}

function buildPlanets() {
    const BASE = 0.00014;
    PLANETS.forEach(pd => {
        const pivot = new THREE.Object3D();
        pivot.rotation.z = THREE.MathUtils.degToRad(pd.inclination || 0);
        scene.add(pivot);

        const texKey = pd.id;
        const tex = TX[texKey] || TX.generic;
        const geo = new THREE.SphereGeometry(pd.radius, 72, 72);
        const mat = new THREE.MeshStandardMaterial({
            map: tex,
            roughness: pd.id === 'earth' ? 0.52 : pd.id === 'jupiter' || pd.id === 'saturn' ? 0.28 : 0.75,
            metalness: 0.0,
        });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.rotation.z = THREE.MathUtils.degToRad(pd.tilt || 0);
        pivot.add(mesh);

        // Atmosphere glow
        const glowColor = new THREE.Color(pd.color);
        const glowGeo = new THREE.SphereGeometry(pd.radius * 1.10, 32, 32);
        const glowMat = new THREE.MeshBasicMaterial({ color: glowColor, transparent: true, opacity: 0.09, side: THREE.BackSide, depthWrite: false, blending: THREE.AdditiveBlending });
        const glow = new THREE.Mesh(glowGeo, glowMat);
        mesh.add(glow);

        // Extra outer glow
        const glowGeo2 = new THREE.SphereGeometry(pd.radius * 1.22, 32, 32);
        const glowMat2 = new THREE.MeshBasicMaterial({ color: glowColor, transparent: true, opacity: 0.04, side: THREE.BackSide, depthWrite: false, blending: THREE.AdditiveBlending });
        mesh.add(new THREE.Mesh(glowGeo2, glowMat2));

        // Rings
        if (pd.hasRings) {
            if (pd.id === 'saturn') {
                buildSaturnRings(mesh, pd.radius);
            } else {
                for (let ri = 0; ri < 6; ri++) {
                    const rad = pd.radius * (1.5 + ri * 0.14);
                    const rGeo = new THREE.RingGeometry(rad, rad + 0.35, 128);
                    const rMat = new THREE.MeshBasicMaterial({ color: 0x7adce0, transparent: true, opacity: 0.12 - ri * 0.01, side: THREE.DoubleSide, depthWrite: false });
                    const ring = new THREE.Mesh(rGeo, rMat);
                    ring.rotation.x = Math.PI / 2;
                    mesh.add(ring);
                }
            }
        }

        // Orbit path
        const oPts = [];
        for (let a = 0; a <= 256; a++) {
            const ang = (a / 256) * Math.PI * 2;
            oPts.push(new THREE.Vector3(Math.cos(ang) * pd.orbR, 0, Math.sin(ang) * pd.orbR));
        }
        const oGeo = new THREE.BufferGeometry().setFromPoints(oPts);
        const oMat = new THREE.LineBasicMaterial({ color: new THREE.Color(pd.color), transparent: true, opacity: 0.18, linewidth: 1 });
        const oLine = new THREE.Line(oGeo, oMat);
        oLine.rotation.z = THREE.MathUtils.degToRad(pd.inclination || 0);
        scene.add(oLine);
        orbitMeshes.push(oLine);

        const pObj = { mesh, data: pd, type: 'planet', pivot, pd, moonObjs: [], glow };
        addLabel(mesh, pd, '#ffffff', pd.radius + 1.2, pd.radius);
        planetObjs.push(pObj);

        // Moons
        pd.moons.forEach(md => {
            const mTexKey = md.id;
            const mTex = TX[mTexKey] || TX.generic;
            const mGeo = new THREE.SphereGeometry(md.radius, 32, 32);
            const mMat = new THREE.MeshStandardMaterial({ map: mTex, roughness: 0.82, metalness: 0 });
            const mMesh = new THREE.Mesh(mGeo, mMat);
            mesh.add(mMesh);
            addLabel(mMesh, md, 'rgba(200,195,255,0.9)', md.radius + 0.4, md.radius * 0.7);

            // Moon orbit ring
            const moPts = [];
            for (let a = 0; a <= 128; a++) {
                const ang = (a / 128) * Math.PI * 2;
                moPts.push(new THREE.Vector3(Math.cos(ang) * md.orbR, 0, Math.sin(ang) * md.orbR));
            }
            const moGeo = new THREE.BufferGeometry().setFromPoints(moPts);
            const moMat = new THREE.LineBasicMaterial({ color: 0x445566, transparent: true, opacity: 0.22 });
            const moLine = new THREE.Line(moGeo, moMat);
            mesh.add(moLine);
            orbitMeshes.push(moLine);

            pObj.moonObjs.push({ mesh: mMesh, data: md, type: 'moon', parentPlanet: pd, md, pivot: null });
            planetObjs.push({ mesh: mMesh, data: md, type: 'moon', parentPlanet: pd, md });
        });
    });
}

function buildSaturnRings(planetMesh, pRadius) {
    // Use ring geometry with custom UV for texture
    const ringGeo = new THREE.RingGeometry(pRadius * 1.28, pRadius * 2.55, 256);
    // Fix UVs for radial mapping
    const uvAttr = ringGeo.attributes.uv;
    const posAttr = ringGeo.attributes.position;
    const v3 = new THREE.Vector3();
    const minR = pRadius * 1.28, maxR = pRadius * 2.55;
    for (let i = 0; i < posAttr.count; i++) {
        v3.fromBufferAttribute(posAttr, i);
        const dist = v3.length();
        const u = (dist - minR) / (maxR - minR);
        const angle = (Math.atan2(v3.y, v3.x) + Math.PI) / (Math.PI * 2);
        uvAttr.setXY(i, u, angle);
    }
    const ringMat = new THREE.MeshBasicMaterial({
        map: TX.saturnRing, transparent: true, opacity: 0.9,
        side: THREE.DoubleSide, depthWrite: false,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2;
    planetMesh.add(ring);
}

function buildAsteroidBelt() {
    const n = 2200;
    const pos = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
        const r = rr(130, 162);
        const ang = rr(0, Math.PI * 2);
        const h = rr(-2.5, 2.5);
        pos[i * 3] = Math.cos(ang) * r;
        pos[i * 3 + 1] = h;
        pos[i * 3 + 2] = Math.sin(ang) * r;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const mat = new THREE.PointsMaterial({ color: 0x887766, size: 0.6, transparent: true, opacity: 0.55, sizeAttenuation: true });
    asteroidBelt = new THREE.Points(geo, mat);
    scene.add(asteroidBelt);
}

function buildComet() {
    // Comet head
    const headGeo = new THREE.SphereGeometry(0.8, 12, 12);
    const headMat = new THREE.MeshBasicMaterial({ color: 0xaadeff });
    const head = new THREE.Mesh(headGeo, headMat);
    scene.add(head);
    // Tail
    const tailPts = [new THREE.Vector3(0, 0, 0)];
    for (let i = 1; i <= 22; i++) tailPts.push(new THREE.Vector3(i * 3.5, rr(-0.5, 0.5), rr(-0.5, 0.5)));
    const tailGeo = new THREE.BufferGeometry().setFromPoints(tailPts);
    const tailMat = new THREE.LineBasicMaterial({ color: 0x88ccff, transparent: true, opacity: 0.35 });
    const tail = new THREE.Line(tailGeo, tailMat);
    head.add(tail);
    cometObj = head;
    cometTailPts = tailPts;
}

/* =================================================================
   LABEL SYSTEM (CSS overlay)
================================================================= */
function addLabel(mesh, data, color, yOffset = 0, size = 1) {
    const el = document.createElement('div');
    el.className = 'planet-label';
    const pColor = data.color || data.pillarColor || color;
    el.style.color = pColor;
    el.style.background = `rgba(0,0,0,0.45)`;
    el.style.fontSize = Math.max(8, Math.min(12, size * 4 + 8)) + 'px';
    el.textContent = (data.emoji ? ' ' : '') + data.name;
    labelEls.push({ el, mesh, yOffset: yOffset, pColor });
}

function updateLabels() {
    const canvas = renderer.domElement;
    const w = canvas.width / window.devicePixelRatio;
    const h = canvas.height / window.devicePixelRatio;
    labelEls.forEach(({ el, mesh, yOffset, pColor }) => {
        const wp = new THREE.Vector3();
        mesh.getWorldPosition(wp);
        // Add yOffset in world space
        const up = new THREE.Vector3(0, yOffset, 0);
        wp.add(up);
        wp.project(camera);
        const x = (wp.x * 0.5 + 0.5) * w;
        const y = (-wp.y * 0.5 + 0.5) * h;
        const inFront = wp.z < 1.0;
        const inBounds = x > 30 && x < w - 30 && y > 60 && y < h - 55;
        el.style.opacity = inFront && inBounds ? '1' : '0';
        el.style.left = x + 'px'; el.style.top = y + 'px';
    });
}

/* =================================================================
   CAROUSEL + SEARCH GRID
================================================================= */
function buildCarousel() {
    const inner = document.getElementById('carousel-inner');
    inner.innerHTML = '';
    // Sun pill
    const sunPill = makePill({ id: 'sun', name: 'Sun', emoji: '☀️', color: '#ffd166', pillarColor: '#ffd166' }, 'sun');
    inner.appendChild(sunPill);
    PLANETS.forEach(pd => {
        inner.appendChild(makePill(pd, pd.id));
    });
}
function makePill(pd, id) {
    const pill = document.createElement('div');
    pill.className = 'planet-pill';
    pill.id = 'pill-' + id;
    pill.style.setProperty('--p-border', `${pd.color || pd.pillarColor}88`);
    pill.style.setProperty('--p-shadow', `${pd.color || pd.pillarColor}44`);
    pill.style.setProperty('--p-bg', `rgba(0,0,0,0.4)`);
    // Animate delay
    const delay = PLANETS.indexOf(pd) * 0.08;
    pill.style.animationDelay = delay + 's';
    pill.innerHTML = `
    <div class="pill-orb" style="background:radial-gradient(circle at 35% 35%,${lighten(pd.color || pd.pillarColor)},${pd.color || pd.pillarColor});--p-shadow:${pd.color || pd.pillarColor}44;"></div>
    <span class="pill-name">${pd.name}</span>
  `;
    pill.onclick = () => focusObj(id);
    return pill;
}
function lighten(hex) {
    try {
        const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
        return `rgb(${Math.min(255, r + 60)},${Math.min(255, g + 60)},${Math.min(255, b + 60)})`;
    } catch (e) { return hex; }
}

function buildSearchGrid() {
    const grid = document.getElementById('search-grid');
    [{ id: 'sun', name: 'Sun', emoji: '☀️', ...SUN }, ...PLANETS, ...PLANETS.flatMap(p => p.moons.map(m => ({ ...m, type: 'Moon' })))].forEach(obj => {
        const item = document.createElement('div');
        item.className = 'search-item';
        item.innerHTML = `<div class="si-emoji">${obj.emoji || '🌑'}</div><div class="si-name">${obj.name}</div>`;
        item.onclick = () => { focusObj(obj.id); document.getElementById('search-wrap').classList.remove('visible'); };
        grid.appendChild(item);
    });
}

/* =================================================================
   FOCUS SYSTEM
================================================================= */
function focusObj(id) {
    // Clear existing
    document.querySelectorAll('.planet-pill').forEach(p => p.classList.remove('active'));
    const pill = document.getElementById('pill-' + id);
    if (pill) { pill.classList.add('active'); pill.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' }); }

    // Find object
    const obj = planetObjs.find(o => o.data.id === id);
    if (!obj) {
        // Try sun
        if (id === 'sun') {
            focusedObj = planetObjs.find(o => o.type === 'sun');
            if (focusedObj) {
                const wp = new THREE.Vector3();
                focusedObj.mesh.getWorldPosition(wp);
                cam.targetTx = wp.x; cam.targetTy = wp.y; cam.targetTz = wp.z;
                cam.targetR = 90;
                showCard(focusedObj);
            }
        }
        return;
    }
    focusedObj = obj;
    const wp = new THREE.Vector3();
    obj.mesh.getWorldPosition(wp);
    cam.targetTx = wp.x; cam.targetTy = wp.y; cam.targetTz = wp.z;
    const r = obj.data.radius || 2;
    cam.targetR = Math.max(r * 18 + 20, 35);
    showCard(obj);
    spawnParticles(wp, obj.data.color || '#ffffff');
    document.getElementById('focus-info') && (document.getElementById('focus-info').textContent = '');
}

let activePlanetColor = '#4cc9f0';

function showCard(obj) {
    const d = obj.data;
    const info = d.info || {};
    const col = d.color || d.pillarColor || '#88bbff';
    activePlanetColor = col;

    // Set CSS var for tabs
    document.getElementById('info-card').style.setProperty('--p-color', col);

    const moons = d.moons || [];
    const moonList = moons.length > 0 ? moons.map(m => `
    <div class="moon-item" onclick="focusObj('${m.id}')">
      <div class="moon-dot" style="background:${m.color || '#aaa'};box-shadow:0 0 6px ${m.color || '#aaa'}66;"></div>
      <div><div class="moon-name">${m.name}</div><div class="moon-type">${m.type || 'Natural Satellite'}</div></div>
      <div class="moon-focus">→</div>
    </div>`).join('') : `<div class="no-moons">No known moons</div>`;

    // Stats
    const stats = [];
    if (info.diameter) stats.push({ l: 'Diameter', v: info.diameter });
    if (info.dist) stats.push({ l: 'Distance', v: info.dist });
    if (info.period) stats.push({ l: 'Orbital Period', v: info.period });
    if (info.rot) stats.push({ l: 'Rotation', v: info.rot });
    if (info.gravity) stats.push({ l: 'Gravity', v: info.gravity });
    if (info.temp) stats.push({ l: 'Temperature', v: info.temp });
    if (info.atm) stats.push({ l: 'Atmosphere', v: info.atm });
    if (info.moons) stats.push({ l: 'Known Moons', v: info.moons });

    const sizeBarWidth = Math.min(100, Math.max(2, (info.sizeRel || 1) / 142 * 100));

    document.getElementById('card-inner').innerHTML = `
    <button class="card-close" onclick="closeCard()">✕</button>
    <div class="card-banner" style="background:linear-gradient(135deg,${col}44,${col}18,rgba(5,5,20,0.8));">
      <div class="card-planet-icon">${d.emoji || '🌑'}</div>
      <div class="card-title-wrap">
        <div class="card-type">${d.type || 'Object'}</div>
        <div class="card-name" style="color:#fff;">${d.name}</div>
      </div>
    </div>
    <div class="card-tabs">
      <button class="tab-btn active" onclick="switchTab(0,this)">Overview</button>
      <button class="tab-btn" onclick="switchTab(1,this)">Stats</button>
      <button class="tab-btn" onclick="switchTab(2,this)">Moons</button>
    </div>
    <div class="tab-content active" id="tab-0">
      <div class="size-bar-wrap">
        <div class="size-bar-label">Size relative to Jupiter</div>
        <div class="size-bar-track">
          <div class="size-bar-fill" style="width:${sizeBarWidth}%;background:linear-gradient(90deg,${col},${lighten(col)});" id="sbar"></div>
        </div>
      </div>
      <div class="fun-fact">
        <div class="fun-fact-icon">💡</div>
        <div class="fun-fact-text">${info.funFact || ''}</div>
      </div>
      <div style="height:10px"></div>
      <div class="card-desc">${info.desc || ''}</div>
    </div>
    <div class="tab-content" id="tab-1">
      <div class="stats-grid">${stats.map(s => `<div class="stat-box"><div class="stat-lbl">${s.l}</div><div class="stat-val">${s.v}</div></div>`).join('')}</div>
    </div>
    <div class="tab-content" id="tab-2">
      <div class="moon-list">${moonList}</div>
    </div>
  `;

    document.getElementById('info-card').classList.add('visible');
    // Animate size bar
    setTimeout(() => { const sb = document.getElementById('sbar'); if (sb) sb.style.width = sizeBarWidth + '%'; }, 50);
}

function switchTab(idx, btn) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    const tc = document.getElementById('tab-' + idx);
    if (tc) tc.classList.add('active');
}

function closeCard() {
    document.getElementById('info-card').classList.remove('visible');
    focusedObj = null;
    document.querySelectorAll('.planet-pill').forEach(p => p.classList.remove('active'));
}

/* =================================================================
   PARTICLE EFFECTS
================================================================= */
function spawnParticles(worldPos, color) {
    const wp2d = toScreen(worldPos);
    if (!wp2d) return;
    const container = document.getElementById('particles');
    // Ripple
    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    ripple.style.left = wp2d.x + 'px'; ripple.style.top = wp2d.y + 'px';
    ripple.style.width = '40px'; ripple.style.height = '40px';
    ripple.style.background = 'transparent';
    ripple.style.border = `2px solid ${color}`;
    container.appendChild(ripple);
    setTimeout(() => ripple.remove(), 750);
    // Sparks
    for (let i = 0; i < 20; i++) {
        const s = document.createElement('div');
        s.className = 'spark';
        const ang = rr(0, 360), dist = rr(30, 90);
        s.style.left = wp2d.x + 'px'; s.style.top = wp2d.y + 'px';
        s.style.width = rr(3, 8) + 'px'; s.style.height = s.style.width;
        s.style.background = color;
        s.style.boxShadow = `0 0 6px ${color}`;
        s.style.setProperty('--dx', `${Math.cos(ang * Math.PI / 180) * dist}px`);
        s.style.setProperty('--dy', `${Math.sin(ang * Math.PI / 180) * dist}px`);
        s.style.animationDuration = rr(0.5, 1.0) + 's';
        container.appendChild(s);
        setTimeout(() => s.remove(), 1000);
    }
}

function toScreen(worldPos) {
    const p = worldPos.clone().project(camera);
    const x = (p.x * 0.5 + 0.5) * window.innerWidth;
    const y = (-p.y * 0.5 + 0.5) * window.innerHeight;
    return p.z < 1 ? { x, y } : null;
}

/* =================================================================
   EVENTS
================================================================= */
function setupEvents() {
    const cv = document.getElementById('cv');
    cv.addEventListener('mousedown', e => { camState(e, 'down'); });
    window.addEventListener('mousemove', e => {
        camState(e, 'move');
        document.getElementById('cursor').style.left = e.clientX + 'px';
        document.getElementById('cursor').style.top = e.clientY + 'px';
        mouse3.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouse3.y = -(e.clientY / window.innerHeight) * 2 + 1;
        raycaster.setFromCamera(mouse3, camera);
        const meshes = planetObjs.map(o => o.mesh);
        const hits = raycaster.intersectObjects(meshes);
        const cursor = document.getElementById('cursor');
        if (hits.length > 0) { cursor.classList.add('hovering'); }
        else { cursor.classList.remove('hovering'); }
    });
    window.addEventListener('mouseup', () => { cam.isDragging = false; });
    cv.addEventListener('wheel', e => {
        cam.targetR = Math.max(12, Math.min(1800, cam.targetR + e.deltaY * 0.55));
        e.preventDefault();
    }, { passive: false });
    cv.addEventListener('click', e => {
        if (Math.abs(e.movementX || 0) > 3 || Math.abs(e.movementY || 0) > 3) return;
        mouse3.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouse3.y = -(e.clientY / window.innerHeight) * 2 + 1;
        raycaster.setFromCamera(mouse3, camera);
        const meshes = planetObjs.map(o => o.mesh);
        const hits = raycaster.intersectObjects(meshes);
        if (hits.length > 0) {
            const obj = planetObjs.find(o => o.mesh === hits[0].object);
            if (obj) focusObj(obj.data.id);
        } else {
            closeCard();
        }
    });
    // Touch
    let pinchDist = 0, lastTouchX = 0, lastTouchY = 0;
    cv.addEventListener('touchstart', e => {
        e.preventDefault();
        if (e.touches.length === 1) { cam.isDragging = true; lastTouchX = e.touches[0].clientX; lastTouchY = e.touches[0].clientY; }
        else if (e.touches.length === 2) { pinchDist = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY); }
    }, { passive: false });
    cv.addEventListener('touchmove', e => {
        e.preventDefault();
        if (e.touches.length === 1 && cam.isDragging) {
            const dx = e.touches[0].clientX - lastTouchX, dy = e.touches[0].clientY - lastTouchY;
            cam.targetTheta -= dx * 0.006; cam.targetPhi = Math.max(0.08, Math.min(Math.PI - 0.08, cam.targetPhi + dy * 0.006));
            lastTouchX = e.touches[0].clientX; lastTouchY = e.touches[0].clientY;
        } else if (e.touches.length === 2) {
            const d = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
            cam.targetR = Math.max(12, Math.min(1800, cam.targetR * (pinchDist / d)));
            pinchDist = d;
        }
    }, { passive: false });
    cv.addEventListener('touchend', () => { cam.isDragging = false; });
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
    // Speed
    document.getElementById('speed-slider').addEventListener('input', function () {
        const v = +this.value;
        if (v === 0) { timeScale = 0; document.getElementById('speed-val').textContent = 'Paused'; }
        else { timeScale = Math.pow(v / 28, 2) * 1.5; document.getElementById('speed-val').textContent = timeScale.toFixed(1) + '×'; }
    });
    // Key shortcuts
    window.addEventListener('keydown', e => {
        if (e.key === '/' || e.key === 'f') showSearch();
        if (e.key === 'Escape') { closeCard(); document.getElementById('search-wrap').classList.remove('visible'); }
        if (e.key === 'r') zoomAll();
    });
}

function camState(e, type) {
    if (type === 'down') { cam.isDragging = true; cam.lastX = e.clientX; cam.lastY = e.clientY; }
    else if (type === 'move' && cam.isDragging) {
        const dx = e.clientX - cam.lastX, dy = e.clientY - cam.lastY;
        cam.targetTheta -= dx * 0.0035;
        cam.targetPhi = Math.max(0.08, Math.min(Math.PI - 0.08, cam.targetPhi + dy * 0.0035));
        cam.lastX = e.clientX; cam.lastY = e.clientY;
    }
}

/* =================================================================
   TOGGLE FUNCTIONS
================================================================= */
function toggleOrbits() {
    showOrbits = !showOrbits;
    orbitMeshes.forEach(o => o.visible = showOrbits);
    const btn = document.getElementById('orbit-btn');
    btn.classList.toggle('on', showOrbits);
    btn.textContent = showOrbits ? '◎ Orbits' : '◎ Orbits';
}
function toggleLabels() {
    showLabels = !showLabels;
    const btn = document.getElementById('label-btn');
    btn.classList.toggle('on', showLabels);
    btn.textContent = showLabels ? '🅐 Labels' : '🅐 Labels';
}
function showSearch() { document.getElementById('search-wrap').classList.toggle('visible'); }
function adjustZoom(f) { cam.targetR = Math.max(12, Math.min(1800, cam.targetR * Math.pow(1.35, f))); }
function zoomAll() {
    cam.targetTheta = -0.5; cam.targetPhi = 1.15; cam.targetR = 500;
    cam.targetTx = 0; cam.targetTy = 0; cam.targetTz = 0;
    focusedObj = null;
    document.querySelectorAll('.planet-pill').forEach(p => p.classList.remove('active'));
    closeCard();
}

/* =================================================================
   ORBIT ANIMATION
================================================================= */
const BASE_SPD = 0.00013;
function updateOrbits() {
    if (timeScale === 0) return;
    time += timeScale;
    const t = time;

    PLANETS.forEach(pd => {
        const pObj = planetObjs.find(o => o.type === 'planet' && o.pd === pd);
        if (!pObj) return;
        const ang = t * BASE_SPD * (365 / pd.period);
        pObj.mesh.position.x = Math.cos(ang) * pd.orbR;
        pObj.mesh.position.z = Math.sin(ang) * pd.orbR;
        // Self rotation
        const rotDir = pd.rotP < 0 ? -1 : 1;
        pObj.mesh.rotation.y += timeScale * (BASE_SPD * 55) * (1 / Math.abs(pd.rotP)) * rotDir;

        pd.moons.forEach(md => {
            const mObj = planetObjs.find(o => o.type === 'moon' && o.data.id === md.id);
            if (!mObj) return;
            const mDir = md.period < 0 ? -1 : 1;
            const mAng = t * BASE_SPD * (365 / Math.abs(md.period)) * mDir;
            mObj.mesh.position.x = Math.cos(mAng) * md.orbR;
            mObj.mesh.position.z = Math.sin(mAng) * md.orbR;
            mObj.mesh.rotation.y += timeScale * 0.018;
        });
    });

    // Sun rotation
    const sun = planetObjs.find(o => o.type === 'sun');
    if (sun) sun.mesh.rotation.y += timeScale * 0.0025;

    // Comet
    cometAngle += timeScale * 0.00008;
    const cometR = 420 + Math.sin(cometAngle * 0.7) * 120;
    const cometY = Math.sin(cometAngle * 1.8) * 18;
    if (cometObj) {
        cometObj.position.x = Math.cos(cometAngle) * cometR;
        cometObj.position.z = Math.sin(cometAngle) * cometR;
        cometObj.position.y = cometY;
        cometObj.lookAt(0, 0, 0);
    }

    // Asteroid belt slow rotation
    if (asteroidBelt) asteroidBelt.rotation.y += timeScale * 0.00005;
}

/* =================================================================
   CAMERA UPDATE
================================================================= */
function updateCamera() {
    cam.theta += (cam.targetTheta - cam.theta) * LF;
    cam.phi += (cam.targetPhi - cam.phi) * LF;
    cam.radius += (cam.targetR - cam.radius) * LF;
    cam.tx += (cam.targetTx - cam.tx) * LF;
    cam.ty += (cam.targetTy - cam.ty) * LF;
    cam.tz += (cam.targetTz - cam.tz) * LF;

    // Track focused object
    if (focusedObj) {
        const wp = new THREE.Vector3();
        focusedObj.mesh.getWorldPosition(wp);
        cam.targetTx = wp.x; cam.targetTy = wp.y; cam.targetTz = wp.z;
    }

    const phi = Math.max(0.05, Math.min(Math.PI - 0.05, cam.phi));
    camera.position.x = cam.tx + cam.radius * Math.sin(phi) * Math.sin(cam.theta);
    camera.position.y = cam.ty + cam.radius * Math.cos(phi);
    camera.position.z = cam.tz + cam.radius * Math.sin(phi) * Math.cos(cam.theta);
    camera.lookAt(cam.tx, cam.ty, cam.tz);
}

/* =================================================================
   MAIN LOOP
================================================================= */
function animate() {
    requestAnimationFrame(animate);
    updateOrbits();
    updateCamera();
    updateLabels();
    renderer.render(scene, camera);
}

/* =================================================================
   BOOT
================================================================= */
const LOAD_MSGS = [
    'Generating starfields...', 'Sculpting rocky planets...', 'Inflating gas giants...',
    'Polishing Saturn\'s rings...', 'Herding moons into orbit...',
    'Calibrating gravity wells...', 'Launching one comet...', 'Ready for liftoff! 🚀'
];
let ldI = 0;
const ldInt = setInterval(() => {
    const e = document.getElementById('ld-msg');
    if (e && ldI < LOAD_MSGS.length) e.textContent = LOAD_MSGS[ldI++];
    if (ldI >= LOAD_MSGS.length) clearInterval(ldInt);
}, 290);

// Build loading planet preview
(function () {
    const wrap = document.getElementById('ld-planets');
    const preview = [
        { c: '#ffd166', s: 20, d: 0 }, { c: '#a8a8a4', s: 8, d: 0.1 }, { c: '#e8c472', s: 11, d: 0.2 },
        { c: '#4a9eff', s: 12, d: 0.3 }, { c: '#e05a2b', s: 9, d: 0.4 }, { c: '#c8824a', s: 18, d: 0.5 },
        { c: '#e4c870', s: 16, d: 0.6 }, { c: '#72e8e0', s: 14, d: 0.7 }, { c: '#3858e8', s: 13, d: 0.8 }
    ];
    preview.forEach(p => {
        const d = document.createElement('div');
        d.className = 'ld-planet';
        d.style.cssText = `width:${p.s}px;height:${p.s}px;border-radius:50%;background:radial-gradient(circle at 35% 35%,${lighten(p.c)},${p.c});box-shadow:0 0 ${p.s}px ${p.c}66;animation-delay:${p.d}s;`;
        wrap.appendChild(d);
    });
})();

window.addEventListener('load', () => {
    setTimeout(() => document.getElementById('ld-fill').style.width = '100%', 50);
    setTimeout(() => {
        genTextures();
        initScene();
        animate();
        const ld = document.getElementById('loading');
        ld.style.opacity = '0';
        setTimeout(() => ld.style.display = 'none', 700);
    }, 2500);
});
