# Portfolio Website - Faras Azzikri

A modern, interactive portfolio website built with Next.js, featuring dynamic text effects and pixel-based background animations.

## 🚀 Features

- **Interactive Background**: PixelBlast component with purple gradient effects
- **Dynamic Text Effects**: TypeDecryptText animations for engaging user experience
- **Rotating Text**: Smooth rotating text animations in hero section
- **Responsive Design**: Fully optimized for mobile and desktop devices
- **Modern UI**: Clean, professional design with glassmorphism effects

## 🛠️ Technologies Used

- **Next.js 15.5.4** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Three.js** - 3D graphics and effects
- **Postprocessing** - Post-processing effects

## 📱 Sections

1. **Hero Section** - Dynamic rotating text with name introduction
2. **About Me** - Personal description with type-decrypt effects
3. **Experience** - Professional experience timeline
4. **Education** - Educational background
5. **Projects** - Featured project showcase
6. **Skills & Technologies** - Technology stack with interactive cards
7. **Contact** - Social media links and contact information

## 🎨 Components

- **PixelBlast**: Interactive pixel-based background
- **RotatingText**: Animated rotating text component
- **TypeDecryptText**: Type and decrypt text animation
- **TypeText**: Basic typing animation
- **DecryptedText**: Text decryption effect

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Faraskousei/Porto-2.git
cd Porto-2
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📄 Project Structure

```
├── src/
│   ├── app/
│   │   ├── page.tsx          # Main page component
│   │   ├── globals.css       # Global styles
│   │   └── layout.tsx        # Root layout
│   ├── components/
│   │   ├── PixelBlast.tsx    # Background animation
│   │   ├── RotatingText.tsx  # Rotating text effect
│   │   ├── TypeDecryptText.tsx # Combined type & decrypt effect
│   │   ├── TypeText.tsx      # Typing animation
│   │   └── DecryptedText.tsx # Decrypt animation
│   └── lib/
│       └── utils.ts          # Utility functions
├── public/                   # Static assets
├── package.json             # Dependencies
└── README.md               # This file
```

## 🎯 Customization

### Colors
The main color scheme can be customized in the Tailwind CSS classes:
- Primary: `#C6F103` (Lime green)
- Secondary: `#4C1D95` (Purple)
- Accent: `#784b84` (Dark purple)

### Text Effects
Adjust animation parameters in the TypeDecryptText components:
- `typeSpeed`: Typing speed (lower = faster)
- `decryptSpeed`: Decryption speed
- `maxIterations`: Number of decryption iterations
- `pauseTime`: Pause duration after typing

## 📞 Contact

- **GitHub**: [@Faraskousei](https://github.com/Faraskousei)
- **LinkedIn**: [M. Faras Azzikri](https://www.linkedin.com/in/m-faras-azzikri-b1a954347/)
- **Instagram**: [@faras.original](https://instagram.com/faras.original)
- **Telegram**: [@ras_cry](https://t.me/ras_cry)
- **WhatsApp**: [+62 877-7834-6369](https://wa.me/87778346369)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- ReactBits for animation inspiration
- Three.js community for 3D graphics examples
- Tailwind CSS for the utility-first CSS framework

---

⭐ Star this repository if you find it helpful!