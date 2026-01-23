# Preloader Audio Track

## Audio File Required

The preloader expects an audio file at: `public/sounds/preloader-ambient.mp3`

### Specifications:
- **Duration**: 5-6 seconds
- **Type**: Ambient, minimal, tech startup vibe
- **Format**: MP3 (128kbps)
- **Volume**: Designed for 15-20% playback
- **File Size**: <100KB

### Options to Create:

1. **AI Music Generator** (Recommended):
   - Suno AI: https://suno.ai
   - Udio: https://udio.com
   - Prompt: "Minimal ambient tech startup intro, 6 seconds, soft synth pads, professional, no vocals"

2. **Royalty-Free Sources**:
   - Artlist.io
   - Epidemic Sound
   - Uppbeat
   - Search for: "tech ambient intro" or "startup logo sound"

3. **Temporary Placeholder**:
   - You can use a silent MP3 for now
   - Replace with branded audio later

### Implementation Status:
- ✅ PreloaderAudio component created
- ✅ Integrated into PreloaderIntro
- ✅ Mute toggle button added
- ⏳ Audio file needs to be added to `/public/sounds/preloader-ambient.mp3`

### Note:
The component will gracefully handle a missing audio file (error caught in console, no UI break).