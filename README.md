# 🌌 SOLAR.EXE

An interactive 3D Solar System simulator built with **Three.js** featuring realistic planets, moons, orbit animations, procedural textures, cinematic camera movement, particles, and immersive UI systems.

---

# 🚀 Features

## 🌍 Interactive Solar System
- Real-time rotating planets
- Orbit simulation
- Planet self-rotation
- Moon systems
- Sun glow effects
- Saturn ring system
- Asteroid belt
- Animated comet

---

## 🎮 Camera Controls
- Mouse drag rotation
- Zoom with mouse wheel
- Touch support for mobile
- Smooth cinematic transitions
- Auto focus on planets

---

## 🔍 Search & Navigation
- Planet search panel
- Carousel planet selector
- Click planets to focus
- Keyboard shortcuts

---

## 🪐 Information System
- Planet detail cards
- Overview tab
- Stats tab
- Moon tab
- Dynamic size comparison
- Fun facts

---

## ✨ Visual Effects
- Particle bursts
- Ripple animations
- Dynamic labels
- Orbit lines
- Procedural textures
- Animated UI

---

# 🎨 Procedural Planet Textures

Textures are generated dynamically using the Canvas API:
- Earth continents & clouds
- Jupiter storm bands
- Saturn atmosphere
- Mars terrain
- Moon craters
- Europa ice cracks
- Io volcanic surface
- Neptune storms

---

# 🛠 Technologies Used

- HTML5
- CSS3
- JavaScript
- Three.js
- Canvas API

---

# 📁 Project Structure

```txt
project/
│
├── index.html
├── main.css
├── solar.js
├── README.md

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/solar-exe.git
```

---

# ▶️ Running the Project

Open:

```txt
index.html
```

in your browser.

For best experience use **VS Code Live Server**.

---

# 🎮 Controls

| Action | Control |
|---|---|
| Rotate Camera | Left Mouse Drag |
| Zoom | Mouse Wheel |
| Focus Planet | Click Planet |
| Open Search | `/` or `F` |
| Reset Camera | `R` |
| Close Panels | `ESC` |

---

# 🌠 Main Systems

## Orbit System

```js
const ang=t*BASE_SPD*(365/pd.period);
```

---

## Camera System

```js
cam.theta += (cam.targetTheta-cam.theta)*LF;
```

---

## Particle Effects

Focus events generate:
- Sparks
- Ripple waves
- Glow effects

---

# 📱 Mobile Support

Supports:
- Touch drag
- Pinch zoom
- Responsive UI

---

# ⚡ Performance Optimizations

- Canvas-generated textures
- Reduced geometry complexity
- Smooth lerp camera
- Efficient orbit calculations
- Dynamic label visibility

---



# 🌌 Included Celestial Objects

## ☀️ Star
- Sun

## 🪐 Planets
- Mercury
- Venus
- Earth
- Mars
- Jupiter
- Saturn
- Uranus
- Neptune

## 🌕 Moons
- Moon
- Io
- Europa
- Ganymede
- Callisto
- Titan
- Enceladus
- Triton

---

# 🔮 Future Improvements

- NASA API integration
- Planet destruction system
- Black holes
- Spaceship exploration
- VR support
- Dynamic shadows
- Multiplayer mode

---


# 👨‍💻 Author

Created by **Anurag Singh**

---

# ⭐ Credits

- Three.js
- NASA Inspiration
- Solar System References

---

# 🌟 Final Notes

SOLAR.EXE demonstrates:
- Real-time 3D rendering
- Procedural generation
- Interactive UI systems
- Advanced JavaScript graphics
- Three.js scene management

A cinematic space exploration experience built for modern browsers.
