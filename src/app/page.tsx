import PixelBlast from '@/components/PixelBlast';
import RotatingText from '@/components/RotatingText';
import TypeDecryptText from '@/components/TypeDecryptText';

export default function Home() {
  return (
    <div className="min-h-screen relative bg-black scroll-smooth">
      {/* Background PixelBlast */}
      <div className="fixed inset-0 z-0">
        <PixelBlast
          variant="circle"
          pixelSize={6}
          color="#4C1D95"
          patternScale={3}
          patternDensity={0.8}
          pixelSizeJitter={0.5}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.6}
          edgeFade={0.25}
          transparent={false}
        />
      </div>

      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/3 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <nav className="flex justify-center">
            <ul className="flex gap-3 sm:gap-6 md:gap-8 text-sm sm:text-base md:text-lg">
              <li>
                <a href="#about" className="text-white hover:text-[#C6F103] transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-white hover:text-[#C6F103] transition-colors duration-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-white hover:text-[#C6F103] transition-colors duration-300">
                  Skills
                </a>
          </li>
              <li>
                <a href="#contact" className="text-white hover:text-[#C6F103] transition-colors duration-300">
                  Contact
                </a>
          </li>
              <li className="hidden sm:block">
                <a 
                  href="#projects"
                  className="bg-[#AF69EE] text-black px-4 sm:px-6 py-2 rounded-lg text-sm sm:text-lg font-semibold hover:bg-[#B8E603] transition-all duration-300 inline-block"
                >
                  View My Work
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center pt-16 sm:pt-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-8">
          {/* Hero Section */}
          <div className="mb-12">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-bold">rRas</h1>
              <RotatingText
                texts={['Be Anything', 'Developer', 'Designer', 'Creative']}
                mainClassName="px-3 sm:px-4 md:px-5 bg-[#784b84] text-black overflow-hidden py-1 sm:py-2 md:py-3 justify-center rounded-lg text-2xl sm:text-3xl md:text-4xl font-bold inline-flex transition-all"
                staggerFrom="last"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-120%", opacity: 0 }}
                staggerDuration={0.05}
                splitLevelClassName="overflow-hidden pb-1 sm:pb-2 md:pb-2"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2500}
              />
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              <TypeDecryptText
                text="Creative Developer & Designer"
                typeSpeed={150}
                decryptSpeed={50}
                maxIterations={1000}
                revealDirection="center"
                className="text-white"
                encryptedClassName="text-[#C6F103]"
                showCursor={true}
                cursorChar="|"
                pauseTime={1000}
                animateOn="view"
              />
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-[#C6F103] to-purple-400 mx-auto rounded-full"></div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="relative z-10 py-12 sm:py-20 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
            <TypeDecryptText
              text="About Me"
              typeSpeed={150}
              decryptSpeed={50}
              maxIterations={1000}
              revealDirection="center"
              className="text-white"
              encryptedClassName="text-[#C6F103]"
              showCursor={true}
              cursorChar="|"
              pauseTime={1000}
              animateOn="view"
            />
          </h2>
          <div className="bg-white/3 backdrop-blur-xl rounded-2xl p-6 sm:p-8 md:p-12 border border-white/5">
            <p className="text-lg text-white/90 leading-relaxed mb-6">
              <TypeDecryptText
                text="I'm a passionate developer and designer who loves creating beautiful, interactive experiences. With expertise in modern web technologies, I bring ideas to life through code and creativity."
                typeSpeed={30}
                decryptSpeed={20}
                maxIterations={1000}
                revealDirection="start"
                className="text-white/90"
                encryptedClassName="text-[#C6F103]"
                showCursor={true}
                cursorChar="|"
                pauseTime={800}
                animateOn="view"
              />
            </p>
            <p className="text-lg text-white/90 leading-relaxed">
              <TypeDecryptText
                text="  "
                typeSpeed={30}
                decryptSpeed={20}
                maxIterations={1000}
                revealDirection="start"
                className="text-white/90"
                encryptedClassName="text-[#C6F103]"
                showCursor={true}
                cursorChar="|"
                pauseTime={800}
                animateOn="view"
              />
            </p>
          </div>
        </div>
      </section>
      {/* Experience & Education Section */}
      <section id="experience" className="relative z-10 py-8 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Experience Section */}
          <div className="mb-2">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
              <TypeDecryptText
                text="Experience"
                typeSpeed={150}
                decryptSpeed={50}
                maxIterations={1000}
                revealDirection="center"
                className="text-white"
                encryptedClassName="text-[#C6F103]"
                showCursor={true}
                cursorChar="|"
                pauseTime={1000}
                animateOn="view"
              />
            </h2>
            
            {/* Fullstack Developer */}
            <div className="mb-6">
              <div className="bg-white/3 backdrop-blur-xl rounded-2xl p-6 sm:p-8 md:p-12 border border-white/5">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white">
                    <TypeDecryptText
                      text="Fullstack Developer"
                      typeSpeed={100}
                      decryptSpeed={30}
                      maxIterations={500}
                      revealDirection="start"
                      className="text-white"
                      encryptedClassName="text-[#C6F103]"
                      showCursor={true}
                      cursorChar="|"
                      pauseTime={800}
                      animateOn="view"
                    />
                  </h3>
                </div>
                <p className="text-gray-400 mb-4 text-lg">Freelance</p>
                <div className="space-y-3 text-lg text-white/90 leading-relaxed">
                  <p>
                    <TypeDecryptText
                      text="Mengembangkan aplikasi web full-stack menggunakan Next.js, Laravel, dan Express.js."
                      typeSpeed={30}
                      decryptSpeed={20}
                      maxIterations={1000}
                      revealDirection="start"
                      className="text-white/90"
                      encryptedClassName="text-[#C6F103]"
                      showCursor={true}
                      cursorChar="|"
                      pauseTime={800}
                      animateOn="view"
                    />
                  </p>
                  <p>
                    <TypeDecryptText
                      text="Mengelola proyek dari database design hingga deployment dengan fokus pada performa dan user experience."
                      typeSpeed={30}
                      decryptSpeed={20}
                      maxIterations={1000}
                      revealDirection="start"
                      className="text-white/90"
                      encryptedClassName="text-[#C6F103]"
                      showCursor={true}
                      cursorChar="|"
                      pauseTime={800}
                      animateOn="view"
                    />
                  </p>
                </div>
              </div>
            </div>

            {/* GitHub Projects */}
            <div className="mb-6">
              <div className="bg-white/3 backdrop-blur-xl rounded-2xl p-6 sm:p-8 md:p-12 border border-white/5">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white">
                    <TypeDecryptText
                      text="GitHub Projects"
                      typeSpeed={100}
                      decryptSpeed={30}
                      maxIterations={500}
                      revealDirection="start"
                      className="text-white"
                      encryptedClassName="text-[#C6F103]"
                      showCursor={true}
                      cursorChar="|"
                      pauseTime={800}
                      animateOn="view"
                    />
                  </h3>
                </div>
                <p className="text-gray-400 mb-4 text-lg">Open Source</p>
                <div className="text-lg text-white/90 leading-relaxed">
                  <p>
                    <TypeDecryptText
                      text="Aktif berkontribusi di GitHub dengan berbagai project seperti Cloud Storage System, EMR Backend, Telegram Bot, dan Portal Data Industri."
                      typeSpeed={30}
                      decryptSpeed={20}
                      maxIterations={1000}
                      revealDirection="start"
                      className="text-white/90"
                      encryptedClassName="text-[#C6F103]"
                      showCursor={true}
                      cursorChar="|"
                      pauseTime={800}
                      animateOn="view"
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
              <TypeDecryptText
                text="My Education"
                typeSpeed={150}
                decryptSpeed={50}
                maxIterations={1000}
                revealDirection="center"
                className="text-white"
                encryptedClassName="text-[#C6F103]"
                showCursor={true}
                cursorChar="|"
                pauseTime={1000}
                animateOn="view"
              />
            </h2>
            
            {/* Self-Taught Developer */}
            <div>
              <div className="bg-white/3 backdrop-blur-xl rounded-2xl p-6 sm:p-8 md:p-12 border border-white/5">
                <h3 className="text-2xl font-bold text-white mb-4">
                  <TypeDecryptText
                    text="Learning in School"
                    typeSpeed={100}
                    decryptSpeed={30}
                    maxIterations={500}
                    revealDirection="start"
                    className="text-white"
                    encryptedClassName="text-[#C6F103]"
                    showCursor={true}
                    cursorChar="|"
                    pauseTime={800}
                    animateOn="view"
                  />
                </h3>
                <p className="text-gray-400 mb-4 text-lg">College</p>
                <div className="text-lg text-white/90 leading-relaxed">
                  <p>
                    <TypeDecryptText
                      text="Saya memulai perjalanan dalam bidang programming ketika menempuh pendidikan di Universitas Binaniaga Indonesia, jurusan Teknik Informatika."
                      typeSpeed={30}
                      decryptSpeed={20}
                      maxIterations={1000}
                      revealDirection="start"
                      className="text-white/90"
                      encryptedClassName="text-[#C6F103]"
                      showCursor={true}
                      cursorChar="|"
                      pauseTime={800}
                      animateOn="view"
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-12 sm:py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
            My Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Cloud Storage System */}
              <div className="bg-white/3 backdrop-blur-xl rounded-xl p-6 hover:bg-white/5 transition-all duration-300 transform hover:scale-105 border border-white/5">
              <div className="w-full h-48 bg-white/3 backdrop-blur-xl rounded-lg mb-4 flex items-center justify-center border border-white/5">
                <div className="text-gray-400 text-sm">Dashboard Screenshot</div>
              </div>
              <h3 className="text-lg font-bold text-blue-400 mb-2">Cloud Storage System</h3>
              <p className="text-blue-300 text-sm mb-3">Web Development</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs">Python</span>
                <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs">Flask</span>
                <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs">MySQL</span>
                <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs">+3</span>
              </div>
            </div>

            {/* EMR Backend System */}
              <div className="bg-white/3 backdrop-blur-xl rounded-xl p-6 hover:bg-white/5 transition-all duration-300 transform hover:scale-105 border border-white/5">
              <div className="w-full h-48 bg-white/3 backdrop-blur-xl rounded-lg mb-4 flex items-center justify-center border border-white/5">
                <div className="text-gray-500 text-sm">Backend System</div>
              </div>
              <h3 className="text-lg font-bold text-blue-400 mb-2">EMR Backend System</h3>
              <p className="text-blue-300 text-sm mb-3">Web Development</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs">Node.js</span>
                <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs">Express.js</span>
                <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs">MySQL</span>
                <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs">+1</span>
              </div>
            </div>

            {/* Portal Data Industri */}
              <div className="bg-white/3 backdrop-blur-xl rounded-xl p-6 hover:bg-white/5 transition-all duration-300 transform hover:scale-105 border border-white/5">
              <div className="w-full h-48 bg-white/3 backdrop-blur-xl rounded-lg mb-4 flex items-center justify-center border border-white/5">
                <div className="text-gray-500 text-sm">Data Portal</div>
              </div>
              <h3 className="text-lg font-bold text-blue-400 mb-2">Portal Data Industri</h3>
              <p className="text-blue-300 text-sm mb-3">Web Application</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs">Laravel</span>
                <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs">React</span>
                <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs">TypeScript</span>
                <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs">+1</span>
              </div>
            </div>

            {/* Telegram Bot */}
              <div className="bg-white/3 backdrop-blur-xl rounded-xl p-6 hover:bg-white/5 transition-all duration-300 transform hover:scale-105 border border-white/5">
              <div className="w-full h-48 bg-white/3 backdrop-blur-xl rounded-lg mb-4 flex items-center justify-center border border-white/5">
                <div className="text-gray-400 text-sm">Bot Interface</div>
              </div>
              <h3 className="text-lg font-bold text-blue-400 mb-2">Telegram Bot</h3>
              <p className="text-blue-300 text-sm mb-3">Web Application</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs">Python</span>
                <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs">Telegram Bot API</span>
                <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs">SQLite</span>
                <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs">+1</span>
              </div>
            </div>

            {/* Website Biodata */}
              <div className="bg-white/3 backdrop-blur-xl rounded-xl p-6 hover:bg-white/5 transition-all duration-300 transform hover:scale-105 border border-white/5">
              <div className="w-full h-48 bg-white/3 backdrop-blur-xl rounded-lg mb-4 flex items-center justify-center border border-white/5">
                <div className="text-gray-500 text-sm">Portfolio Design</div>
              </div>
              <h3 className="text-lg font-bold text-blue-400 mb-2">Website Biodata</h3>
              <p className="text-blue-300 text-sm mb-3">Web Design</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs">Next.js</span>
                <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs">TypeScript</span>
                <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs">Tailwind CSS</span>
                <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs">+1</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 py-12 sm:py-20 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Next.js */}
            <div className="bg-white/3 backdrop-blur-xl rounded-xl p-6 text-center hover:bg-white/5 transition-all duration-300 transform hover:scale-105 group border border-white/5">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-white group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7v10l10 5 10-5V7l-10-5z"/>
                  <path d="M12 4.84L19.14 7.5 12 10.16 4.86 7.5 12 4.84z"/>
                  <path d="M4 8.5v7l8 4v-7l-8-4z"/>
                  <path d="M16 8.5v7l8-4v-7l-8 4z"/>
                </svg>
              </div>
              <div className="text-white font-semibold">Next.js</div>
            </div>

            {/* Laravel */}
            <div className="bg-white/3 backdrop-blur-xl rounded-xl p-6 text-center hover:bg-white/5 transition-all duration-300 transform hover:scale-105 group border border-white/5">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-white group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7v10l10 5 10-5V7l-10-5z"/>
                  <path d="M12 4.84L19.14 7.5 12 10.16 4.86 7.5 12 4.84z"/>
                  <path d="M4 8.5v7l8 4v-7l-8-4z"/>
                  <path d="M16 8.5v7l8-4v-7l-8 4z"/>
                </svg>
              </div>
              <div className="text-white font-semibold">Laravel</div>
            </div>

            {/* Express.js */}
            <div className="bg-white/3 backdrop-blur-xl rounded-xl p-6 text-center hover:bg-white/5 transition-all duration-300 transform hover:scale-105 group border border-white/5">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-white group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7v10l10 5 10-5V7l-10-5z"/>
                  <path d="M12 4.84L19.14 7.5 12 10.16 4.86 7.5 12 4.84z"/>
                  <path d="M4 8.5v7l8 4v-7l-8-4z"/>
                  <path d="M16 8.5v7l8-4v-7l-8 4z"/>
                </svg>
              </div>
              <div className="text-white font-semibold">Express.js</div>
            </div>

            {/* MySQL */}
            <div className="bg-white/3 backdrop-blur-xl rounded-xl p-6 text-center hover:bg-white/5 transition-all duration-300 transform hover:scale-105 group border border-white/5">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-white group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                  <ellipse cx="12" cy="8" rx="8" ry="3" opacity="0.7"/>
                  <ellipse cx="12" cy="12" rx="8" ry="3" opacity="0.5"/>
                  <ellipse cx="12" cy="16" rx="8" ry="3" opacity="0.3"/>
                </svg>
              </div>
              <div className="text-white font-semibold">MySQL</div>
            </div>

            {/* React */}
            <div className="bg-white/3 backdrop-blur-xl rounded-xl p-6 text-center hover:bg-white/5 transition-all duration-300 transform hover:scale-105 group border border-white/5">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-white group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="2"/>
                  <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1"/>
                  <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(60 12 12)"/>
                  <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(120 12 12)"/>
                </svg>
              </div>
              <div className="text-white font-semibold">React</div>
            </div>

            {/* Node.js */}
            <div className="bg-white/3 backdrop-blur-xl rounded-xl p-6 text-center hover:bg-white/5 transition-all duration-300 transform hover:scale-105 group border border-white/5">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-white group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7v10l10 5 10-5V7l-10-5z"/>
                  <path d="M12 4.84L19.14 7.5 12 10.16 4.86 7.5 12 4.84z"/>
                  <path d="M4 8.5v7l8 4v-7l-8-4z"/>
                  <path d="M16 8.5v7l8-4v-7l-8 4z"/>
                </svg>
              </div>
              <div className="text-white font-semibold">Node.js</div>
            </div>

            {/* JavaScript */}
            <div className="bg-white/3 backdrop-blur-xl rounded-xl p-6 text-center hover:bg-white/5 transition-all duration-300 transform hover:scale-105 group border border-white/5">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-white group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="4" y="4" width="16" height="16" rx="2" fill="#F7DF1E"/>
                  <text x="12" y="16" textAnchor="middle" fontSize="8" fill="black" fontWeight="bold">JS</text>
                </svg>
              </div>
              <div className="text-white font-semibold">JavaScript</div>
            </div>

            {/* TypeScript */}
            <div className="bg-white/3 backdrop-blur-xl rounded-xl p-6 text-center hover:bg-white/5 transition-all duration-300 transform hover:scale-105 group border border-white/5">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-white group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="4" y="4" width="16" height="16" rx="2" fill="#3178C6"/>
                  <text x="12" y="16" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">TS</text>
                </svg>
              </div>
              <div className="text-white font-semibold">TypeScript</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-12 sm:py-20 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Get In Touch
          </h2>
          <p className="text-lg text-white/90 mb-12">
            Ready to work together? Let&apos;s create something amazing!
          </p>
          
          {/* Contact Links */}
          <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 mb-12 flex-wrap">
            {/* GitHub */}
            <a 
              href="https://github.com/Faraskousei" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 sm:w-16 sm:h-16 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 group backdrop-blur-xl border border-white/10"
            >
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>

            {/* WhatsApp */}
            <a 
              href="https://wa.me/87778346369" 
            target="_blank"
            rel="noopener noreferrer"
              className="w-12 h-12 sm:w-16 sm:h-16 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 group backdrop-blur-xl border border-white/10"
            >
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/m-faras-azzikri-b1a954347/" 
            target="_blank"
            rel="noopener noreferrer"
              className="w-12 h-12 sm:w-16 sm:h-16 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 group backdrop-blur-xl border border-white/10"
          >
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
          </a>

            {/* Telegram */}
        <a
              href="https://t.me/ras_cry" 
          target="_blank"
          rel="noopener noreferrer"
              className="w-12 h-12 sm:w-16 sm:h-16 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 group backdrop-blur-xl border border-white/10"
            >
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a 
              href="https://instagram.com/faras.original" 
          target="_blank"
          rel="noopener noreferrer"
              className="w-12 h-12 sm:w-16 sm:h-16 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 group backdrop-blur-xl border border-white/10"
            >
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>

          {/* Additional CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <a 
              href="mailto:rras@example.com"
              className="bg-white text-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Send Email
        </a>
        <a
              href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
              className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              View Resume
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-6 sm:py-8 px-4 sm:px-8 text-center">
        <p className="text-white/60">
          © 2024 Portfolio. Built with Love by Me.
        </p>
      </footer>
    </div>
  );
}