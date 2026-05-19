import React, { useEffect, useState } from "react";
import {
  Heart,
  BookOpen,
  Users,
  Star,
  Home,
  Gift,
  CalendarDays,
  Monitor,
  CheckCircle2,
} from "lucide-react";

const burgundy = "#651625";
const deepBurgundy = "#3f0d18";
const cream = "#fff7e8";
const gold = "#d8a441";

const classroomSlideImages = [
  "https://res.cloudinary.com/dozcy2jve/image/upload/v1779214754/images/ChatGPT_Image_May_20_2026_02_18_55_AM_bktiue.png",
  "https://res.cloudinary.com/dozcy2jve/image/upload/v1779214731/images/ChatGPT_Image_May_20_2026_12_56_05_AM_eke5zk.png",
  "https://res.cloudinary.com/dozcy2jve/image/upload/v1779214725/images/ChatGPT_Image_May_20_2026_12_56_12_AM_m8mz7j.png",
  "https://res.cloudinary.com/dozcy2jve/image/upload/v1779214720/images/ChatGPT_Image_May_20_2026_12_56_17_AM_dry5ln.png",
  "https://res.cloudinary.com/dozcy2jve/image/upload/v1779214715/images/ChatGPT_Image_May_20_2026_12_56_23_AM_nsnhi3.png",
  "https://res.cloudinary.com/dozcy2jve/image/upload/v1779214710/images/ChatGPT_Image_May_20_2026_12_56_52_AM_iayqvh.png",
  "https://res.cloudinary.com/dozcy2jve/image/upload/v1779214705/images/ChatGPT_Image_May_20_2026_12_57_02_AM_wtfzqs.png",
];

function Panda({ variant = "girl" }) {
  const isGirl = variant === "girl";

  return (
    <div className="relative mx-auto h-56 w-44">
      <div className="absolute left-8 top-2 h-32 w-32 rounded-full border-4 border-neutral-900 bg-white shadow-lg">
        <div className="absolute -left-5 top-5 h-12 w-12 rounded-full bg-neutral-950" />
        <div className="absolute -right-5 top-5 h-12 w-12 rounded-full bg-neutral-950" />
        <div className="absolute left-5 top-10 h-10 w-8 rotate-12 rounded-full bg-neutral-950" />
        <div className="absolute right-5 top-10 h-10 w-8 -rotate-12 rounded-full bg-neutral-950" />
        <div className="absolute left-8 top-14 h-4 w-4 rounded-full bg-white" />
        <div className="absolute right-8 top-14 h-4 w-4 rounded-full bg-white" />
        <div className="absolute left-14 top-20 h-4 w-5 rounded-full bg-neutral-950" />
        <div className="absolute left-12 top-[98px] h-8 w-9 rounded-full border-b-4 border-neutral-950" />
        {isGirl && (
          <div className="absolute left-14 -top-5 h-9 w-12 rotate-12 rounded-full border-2 border-white bg-[#9d1f35]" />
        )}
      </div>

      <div
        className={`absolute left-7 top-[120px] h-24 w-[136px] rounded-2xl border-4 border-neutral-900 ${
          isGirl ? "bg-white" : "bg-[#7b1a2c]"
        }`}
      >
        <div
          className="absolute left-10 top-6 text-center text-lg font-black"
          style={{ color: isGirl ? burgundy : cream }}
        >
          ECLC
        </div>
        {!isGirl && <div className="absolute left-2 top-0 h-20 w-5 bg-[#253047]" />}
        {isGirl && (
          <div className="absolute -bottom-10 left-3 h-14 w-28 rounded-b-2xl border-4 border-neutral-900 bg-[#7b1a2c]" />
        )}
      </div>

      <div className="absolute left-1 top-36 h-14 w-10 rotate-12 rounded-full border-4 border-neutral-900 bg-white" />
      <div className="absolute right-1 top-36 h-14 w-10 -rotate-12 rounded-full border-4 border-neutral-900 bg-white" />
    </div>
  );
}

function HorseMascot() {
  return (
    <div className="relative mx-auto h-80 w-full max-w-sm">
      <div className="absolute left-[104px] top-5 h-20 w-24 rotate-12 rounded-full border-4 border-neutral-900 bg-[#df7a2d]" />
      <div className="absolute left-32 top-0 h-16 w-8 rotate-12 rounded-t-full border-4 border-neutral-900 bg-[#df7a2d]" />
      <div className="absolute left-44 top-0 h-16 w-8 rotate-[24deg] rounded-t-full border-4 border-neutral-900 bg-[#df7a2d]" />
      <div className="absolute left-[140px] top-9 h-8 w-8 rounded-full border-2 border-neutral-900 bg-white" />
      <div className="absolute left-[172px] top-12 h-3 w-3 rounded-full bg-neutral-950" />
      <div className="absolute left-[68px] top-20 h-24 w-32 -rotate-12 rounded-[45%] border-4 border-neutral-900 bg-[#b95e27]" />
      <div className="absolute left-12 top-[136px] h-7 w-7 rounded-full bg-neutral-950" />
      <div className="absolute left-10 top-[172px] h-12 w-32 rounded-full border-b-4 border-neutral-900" />
      <div className="absolute left-56 top-[88px] h-28 w-10 rotate-12 rounded-full border-4 border-neutral-900 bg-[#4b3b35]" />
      <div className="absolute left-32 top-[200px] h-28 w-40 rounded-2xl border-4 border-neutral-900 bg-[#263d73] shadow-xl">
        <div className="absolute left-10 top-8 text-5xl font-black text-white">C</div>
        <div className="absolute left-24 top-10 h-8 w-7 rounded border-2 border-white bg-[#d8a441]" />
      </div>
      <div className="absolute left-[72px] top-60 h-14 w-[72px] rotate-12 rounded-full border-4 border-neutral-900 bg-[#263d73]" />
      <div className="absolute right-6 top-60 h-14 w-[72px] -rotate-12 rounded-full border-4 border-neutral-900 bg-[#263d73]" />
      <div className="absolute bottom-4 left-[152px] h-16 w-10 rounded-b-xl border-4 border-neutral-900 bg-white" />
      <div className="absolute bottom-4 left-[220px] h-16 w-10 rounded-b-xl border-4 border-neutral-900 bg-white" />
      <div className="absolute bottom-0 left-[120px] h-9 w-[88px] rounded-full border-4 border-neutral-900 bg-white">
        <span className="absolute left-9 top-3 h-2 w-8 rounded bg-[#c21d36]" />
      </div>
      <div className="absolute bottom-0 left-[200px] h-9 w-[88px] rounded-full border-4 border-neutral-900 bg-white">
        <span className="absolute left-9 top-3 h-2 w-8 rounded bg-[#c21d36]" />
      </div>
    </div>
  );
}

function IconCard({ icon: Icon, title, text, iconImage }) {
  return (
    <div className="rounded-2xl border border-[#ead9bd] bg-white/80 p-5 text-center shadow-sm">
      {iconImage ? (
        <span className="icon-shine-react mx-auto mb-3 block w-fit">
          <img src={iconImage} alt={`${title} icon`} className="h-[80px] w-[80px] object-contain" />
          <span className="icon-shine-react-pass" />
        </span>
      ) : (
        <div
          className="mx-auto mb-3 flex h-[72px] w-[72px] items-center justify-center rounded-full"
          style={{ backgroundColor: burgundy, color: cream }}
        >
          <Icon size={26} />
        </div>
      )}
      <h3 className="font-bold text-[#651625]">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[#5d4b3e]">{text}</p>
    </div>
  );
}

function FeatureRow({ children }) {
  return (
    <li className="flex items-start gap-3">
      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#651625]" />
      <span>{children}</span>
    </li>
  );
}

export default function ECLCLandingPage() {
  const [mainClassroomImageIndex, setMainClassroomImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setMainClassroomImageIndex((prev) => (prev + 1) % classroomSlideImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#5b1120] text-[#351a18]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
        .icon-shine-react {
          position: relative;
          border-radius: 999px;
          overflow: hidden;
          animation: iconGlowReact 2.8s ease-in-out infinite;
        }
        .icon-shine-react-pass {
          position: absolute;
          top: 0;
          left: -70%;
          width: 45%;
          height: 100%;
          background: linear-gradient(110deg, rgba(255,255,255,0) 0%, rgba(255, 236, 179, 0.5) 55%, rgba(255,255,255,0) 100%);
          transform: skewX(-20deg);
          animation: shineSweepReact 2.8s ease-in-out infinite;
          pointer-events: none;
        }
        @keyframes shineSweepReact {
          0% { left: -70%; }
          60%, 100% { left: 130%; }
        }
        @keyframes iconGlowReact {
          0%, 100% { filter: drop-shadow(0 0 0 rgba(216, 164, 65, 0)); }
          45% { filter: drop-shadow(0 0 10px rgba(216, 164, 65, 0.7)); }
        }
        .classroom-slider-track {
          width: max-content;
          animation: classroomSlide 22s linear infinite;
        }
        @keyframes classroomSlide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      <div className="mx-auto w-full max-w-[1366px]">
      <section
        className="relative overflow-hidden"
        style={{
          borderRadius: "30px",
          width: "100%",
          maxWidth: "1366px",
          margin: "0 auto",
          height: "min(768px, 56.25vw)",
          minHeight: "340px",
          backgroundImage:
            "url('https://res.cloudinary.com/dozcy2jve/image/upload/v1779140219/images/Add_a_subheading_8_uliiaa.png')",
          backgroundColor: "#5b1120",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <header className="absolute left-3 right-3 top-3 z-10 flex flex-col items-center justify-between gap-2 rounded-2xl border border-[#ffe7c559] bg-[#3f0d1894] px-3 py-2 backdrop-blur-sm md:left-6 md:right-6 md:top-4 md:flex-row md:rounded-full md:px-4">
          <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.08em] text-[#ffe7c5]">
            <img
              src="https://res.cloudinary.com/dozcy2jve/image/upload/v1777494677/images/xxx_Panda_Buck_Playbook.pdf_1_i803ac.png"
              alt="ECLC logo"
              className="h-[42px] w-[42px] object-contain drop-shadow-[0_0_6px_rgba(255,255,255,0.85)]"
            />
            ECLC
          </div>
          <nav className="flex flex-wrap justify-center gap-3 md:gap-6">
            <a href="#tour" className="text-sm font-bold uppercase tracking-[0.04em] text-[#fff6e9] hover:text-[#f2d39f]">About</a>
            <a href="#enroll" className="text-sm font-bold uppercase tracking-[0.04em] text-[#fff6e9] hover:text-[#f2d39f]">Programs</a>
            <a href="#enroll" className="text-sm font-bold uppercase tracking-[0.04em] text-[#fff6e9] hover:text-[#f2d39f]">Enroll</a>
            <a href="#contact" className="text-sm font-bold uppercase tracking-[0.04em] text-[#fff6e9] hover:text-[#f2d39f]">Contact</a>
            <a href="#shop" className="rounded-full border border-[#f2d39f] bg-[#d8a441] px-4 py-2 text-sm font-bold uppercase tracking-[0.04em] text-[#3f0d18] hover:bg-[#e6bb63]">Shop</a>
          </nav>
        </header>
        <div className="relative grid w-full items-center gap-8 px-6 py-8 lg:grid-cols-[1fr_1.2fr_1fr]">
          <div className="hidden lg:block" />

          <div className="-mt-6 text-center text-[#fff7e8] sm:-mt-8">
          </div>

          <div className="hidden lg:block" />
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <a
            href="#enroll"
            className="rounded-full bg-[#d8a441] px-10 py-5 text-[18px] font-bold text-[#3f0d18] shadow-lg transition hover:scale-105"
            style={{ animation: "heroCtaFloat 2.2s ease-in-out infinite" }}
          >
            Enroll Today
          </a>
        </div>
        <style>{`
          @keyframes heroCtaFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-6px); }
          }
        `}</style>
      </section>

      <section id="tour" className="grid w-full gap-8 bg-[#FFF9EF] px-3 py-8 md:px-6 md:py-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="overflow-hidden rounded-[2rem] border-4 border-white bg-white shadow-xl">
          <div className="h-[320px] bg-[#FFF9EF] p-3 md:h-[500px] md:p-8">
            <div className="flex h-full items-center justify-center overflow-hidden rounded-[2rem] border-4 border-[#8b4a2e] bg-[#FFF9EF] shadow-inner">
              <img
                src="https://res.cloudinary.com/dozcy2jve/image/upload/v1779128865/images/Website_Icon_Logo_GHL_1_uvv9l0.png"
                alt="ECLC logo"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-start rounded-[2rem] border border-[#ead9bd] bg-white/80 px-8 pb-8 pt-12 text-center shadow-xl">
          <p className="mb-2 text-[52px] leading-none text-[#7b4f38]" style={{ fontFamily: "'Great Vibes', cursive" }}>
            Welcome to
          </p>
          <h2 className="mt-0 uppercase text-[#651625]">
            <span className="block whitespace-nowrap text-4xl font-black sm:text-5xl lg:text-6xl">Elite Children</span>
            <span className="block text-4xl font-black sm:text-5xl">Learning Center</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#5d4b3e]">
            At ECLC, we believe every child is a gift with endless potential. Our mission is to provide a safe,
            loving, and stimulating environment where children learn, grow, and thrive academically, socially, and
            emotionally.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <IconCard icon={Heart} iconImage="https://res.cloudinary.com/dozcy2jve/image/upload/v1779147605/images/5_qrvhm3.png" title="Nurturing Hearts" text="We care for every child like family." />
            <IconCard icon={BookOpen} iconImage="https://res.cloudinary.com/dozcy2jve/image/upload/v1779147608/images/6_noaazw.png" title="Building Minds" text="We inspire curiosity and a love for learning." />
            <IconCard icon={Users} iconImage="https://res.cloudinary.com/dozcy2jve/image/upload/v1779140367/images/Stronger_Together_gmeyh1.png" title="Stronger Together" text="We partner with families for lifelong success." />
            <IconCard icon={Star} iconImage="https://res.cloudinary.com/dozcy2jve/image/upload/v1779147617/images/7_bmhypq.png" title="Shaping Futures" text="We prepare children to be confident leaders." />
          </div>
        </div>
      </section>

      <section className="grid w-full gap-8 px-6 pb-14 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="grid min-h-[520px] min-w-0 w-full place-items-center overflow-hidden rounded-[2rem] bg-[#651625] pt-8 pb-8 pl-6 pr-3 text-center text-[#fff7e8] shadow-xl">
          <div className="mx-auto flex w-full max-w-[560px] flex-col items-center">
            <h2 className="text-5xl font-black leading-snug">
              Meet Blaze
              <br />
              <span className="text-[#d8a441]">the Horse</span>
            </h2>
            <p className="mt-4 text-[36px] font-semibold leading-tight">The One’s Classroom Mascot</p>
            <p className="mt-4 leading-relaxed text-[#f7dec1]">
              Blaze is full of energy, curiosity, and a love for adventure, just like our incredible One’s learners.
            </p>
            <div className="mt-6 inline-flex rounded-full bg-[#d8a441] px-5 py-3 text-sm font-black uppercase tracking-wide text-[#3f0d18]">
              One’s Classroom, 1 to 2 years old
            </div>
            <div className="mx-auto mt-6 grid w-full max-w-[520px] grid-cols-3 gap-2">
              <article className="min-w-0 rounded-xl border border-[#dcbf8a] bg-[#fff8ea] px-2 py-4 text-center text-[#651625] min-h-[240px]">
                <img
                  src="https://res.cloudinary.com/dozcy2jve/image/upload/v1779147605/images/5_qrvhm3.png"
                  alt="Trust icon"
                  className="mx-auto mb-2.5 h-[84px] w-[84px] object-contain"
                />
                <p className="text-[20px] font-bold leading-none">Trust</p>
                <p className="mt-1 text-[15px] leading-snug text-[#6c2835]">Safe bonds and confidence.</p>
              </article>
              <article className="min-w-0 rounded-xl border border-[#dcbf8a] bg-[#fff8ea] px-2 py-4 text-center text-[#651625] min-h-[240px]">
                <img
                  src="https://res.cloudinary.com/dozcy2jve/image/upload/v1779147608/images/6_noaazw.png"
                  alt="Movement icon"
                  className="mx-auto mb-2.5 h-[84px] w-[84px] object-contain"
                />
                <p className="text-[20px] font-bold leading-none">Movement</p>
                <p className="mt-1 text-[15px] leading-snug text-[#6c2835]">Active play and coordination.</p>
              </article>
              <article className="min-w-0 rounded-xl border border-[#dcbf8a] bg-[#fff8ea] px-2 py-4 text-center text-[#651625] min-h-[240px]">
                <img
                  src="https://res.cloudinary.com/dozcy2jve/image/upload/v1779147617/images/7_bmhypq.png"
                  alt="Discovery icon"
                  className="mx-auto mb-2.5 h-[84px] w-[84px] object-contain"
                />
                <p className="text-[20px] font-bold leading-none">Discovery</p>
                <p className="mt-1 text-[15px] leading-snug text-[#6c2835]">Curiosity through exploration.</p>
              </article>
            </div>
          </div>
        </div>

        <div className="grid items-stretch overflow-hidden rounded-[2rem] border border-[#ead9bd] bg-white shadow-xl md:grid-cols-2">
          <img
            src="https://res.cloudinary.com/dozcy2jve/image/upload/v1779143869/images/Website_Icon_Logo_GHL_3_u7ehtm.png"
            alt="Red House mascot"
            className="h-full w-full object-cover"
          />
          <div className="rounded-[2rem] bg-[#f7edda] p-6">
            <div className="rounded-2xl border-4 border-[#d8a441] bg-white p-6 text-center shadow-inner">
              <Heart className="mx-auto text-[#651625]" />
            </div>
            <p className="mt-5 text-center leading-relaxed text-[#5d4b3e]">
              In the Red House, children build trust, independence, and early learning confidence through care, play,
              and discovery.
            </p>
          </div>
        </div>
      </section>

      <section id="enroll" className="grid w-full items-stretch gap-8 px-6 pb-16">
        <div className="rounded-[2rem] border border-[#ead9bd] bg-[#fff9ef] p-3 shadow-xl">
          <div className="flex min-h-[760px] h-full flex-col rounded-[1.5rem] border border-[#ead9bd] bg-[#fffdf7] p-7 text-[#3f2a23]">
            <h2 className="flex items-start gap-3 text-[22px] font-black leading-none text-[#651625]">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#651625] text-[#fff7e8]">★</span>
              What We Do
            </h2>
            <ul className="mt-4 space-y-2 pl-6 text-[15px] leading-[1.5]">
              <li>Hands-on learning activities</li>
              <li>Story time &amp; circle time</li>
              <li>Creative arts &amp; crafts</li>
              <li>Sensory play &amp; exploration</li>
              <li>Building social skills &amp; confidence</li>
              <li>Encouraging independence</li>
              <li>Building a strong foundation for lifelong learning</li>
            </ul>

            <div className="my-4 border-t border-[#ead9bd]" />

            <p className="flex items-center gap-3 text-[22px] font-bold leading-none">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#651625] text-[#fff7e8]">🎁</span>
              New Enrollees Can Get
            </p>
            <h3 className="mt-2 text-[66px] font-black leading-[0.9] text-[#651625]">1 FREE<br />ELITE UNIFORM</h3>
            <p className="mt-2 text-[18px] leading-tight">when they use the teacher&apos;s referral code:</p>
            <div className="mt-2 inline-block w-fit rounded-xl border-2 border-[#d8a441] bg-[#6c0f22] px-8 py-1.5 text-[48px] font-black tracking-wider text-[#fff7e8]">
              RED10
            </div>
            <p className="mt-3 border-t border-[#ead9bd] pt-3 text-[16px] text-[#5d4b3e]">Two Easy Ways to Register</p>
            <div className="mt-3 grid w-full max-w-[280px] gap-3">
              <a href="https://elitechildrenlearningcenter.com" className="rounded-xl bg-[#6c0f22] px-5 py-2.5 text-center text-[20px] font-bold leading-tight text-[#fff7e8]">
                Register Online
                <span className="block text-[16px] font-medium">Quick &amp; Easy</span>
              </a>
              <a href="#tour" className="rounded-xl bg-[#6c0f22] px-5 py-2.5 text-center text-[20px] font-bold leading-tight text-[#fff7e8]">
                Schedule a Tour
                <span className="block text-[16px] font-medium">Come Visit Us</span>
              </a>
            </div>

            <p className="mt-auto pt-3 text-right text-[18px] text-[#b28a63]">🪴</p>
          </div>
        </div>
      </section>

      <section className="px-3 pb-12 md:px-6 md:pb-16">
        <div className="grid min-h-[766px] gap-4 overflow-visible rounded-[1.25rem] border border-[#ead9bd] bg-[#f6efe2] p-3 pb-6 md:rounded-[2rem] md:p-4 lg:grid-cols-[1fr_1.9fr]">
          <article className="rounded-[1.3rem] border-2 border-[#7a0f23] bg-[#f8f6f8] p-4 text-[#3f2a23]">
            <p className="text-[18px] leading-none text-[#7a0f23]" style={{ fontFamily: "'Great Vibes', cursive" }}>Welcome to</p>
            <h3 className="mt-1 text-4xl font-black uppercase leading-[0.9] text-[#7a0f23]">Purpose Pasture Hall</h3>
            <p className="mt-1 text-xl font-bold text-[#7a0f23]">Elite Freshman Class</p>
            <p className="mt-3 text-[15px] leading-[1.35]">
              Our One&apos;s classroom is where little explorers (1-2 years old) begin their learning journey. We focus
              on creating a warm, nurturing, and engaging environment that supports early development and a love for learning.
            </p>

            <div className="mt-4 grid gap-3 md:grid-cols-[1fr_180px]">
              <div className="rounded-xl border-2 border-[#7a0f23] bg-white p-3">
                <p className="font-black text-[#7a0f23]">Blaze represents Freshman Students Traits:</p>
                <ul className="mt-2 list-disc pl-6 text-[16px] font-semibold leading-tight text-[#2e2623]">
                  <li>Trust</li>
                  <li>Movement</li>
                  <li>Discovery</li>
                </ul>
              </div>
              <div className="overflow-hidden rounded-xl border-2 border-[#7a0f23] bg-white p-0">
                <img src="https://res.cloudinary.com/dozcy2jve/image/upload/v1779143869/images/Website_Icon_Logo_GHL_3_u7ehtm.png" alt="Blaze mascot" className="h-full w-full object-cover" />
              </div>
            </div>

            <div className="mt-3 rounded-xl bg-[#6f081b] p-4 text-[14px] leading-[1.35] text-[#fff2e0]">
              Full of energy and eager to explore, our one-year-olds are like young horses, bold yet in need of
              direction. In the Red House, we build trust, foster independence, and guide each little step with love.
            </div>

            <div className="mt-3 rounded-xl border-2 border-[#7a0f23] bg-white p-3">
              <h4 className="text-4xl font-black uppercase leading-none text-[#7a0f23]">Freshman Classroom</h4>
              <p className="mt-1 text-lg font-bold text-[#7a0f23]">Purpose Pasture Hall - Red House</p>
              <div className="mt-2 space-y-1 text-[14px] leading-tight">
                <p><b>Age Group:</b> 1 - 2 Year Old</p>
                <p><b>Class Size:</b> Maximum 10 Students</p>
                <p><b>Schedule:</b> Monday - Friday, 8:30 AM - 2:30 PM</p>
                <p><b>Learning Environment:</b> Early language, sensory play, motor skills, interaction</p>
              </div>
            </div>
          </article>

          <div className="grid gap-4">
            <article className="overflow-hidden rounded-[1.3rem] border-2 border-[#7a0f23] bg-[#f8f6f8] p-3">
              <div className="h-full rounded-[1rem] bg-[#f8f6f8] text-[#7a0f23]">
                <h4 className="flex items-center gap-3 text-xl font-black md:text-2xl">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#7a0f23] text-base text-white">📖</span>
                  Our Classrooms
                </h4>
                <div className="mt-2 overflow-hidden rounded-2xl border border-[#e4d5bf] bg-white p-1.5">
                  <img
                    src={classroomSlideImages[mainClassroomImageIndex]}
                    alt="Our Classrooms main"
                    className="h-[180px] w-full rounded-xl object-cover md:h-[250px]"
                  />
                </div>
                <div className="mt-2 overflow-hidden rounded-xl border border-[#e4d5bf] bg-[#fffaf1] p-1.5">
                  <div className="classroom-slider-track flex gap-2">
                    {classroomSlideImages.concat(classroomSlideImages).map((src, idx) => (
                      <div key={idx} className="w-[110px] shrink-0 overflow-hidden rounded-lg border border-[#e4d5bf] bg-white p-1">
                        <img src={src} alt={`Our classrooms thumb ${idx + 1}`} className="h-[44px] w-full rounded object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            <div className="mt-4 grid items-stretch gap-4 lg:grid-cols-2">
              <article className="h-full rounded-[28px] border-2 border-[#7a0f23] bg-[#f8f6f8] p-4 text-[#3f2a23] flex flex-col justify-center">
                <div className="w-full max-w-[92%]">
                  <h4 className="flex items-baseline justify-center gap-3 text-3xl font-black text-[#7a0f23]"><span className="leading-none">★</span><span className="leading-none">WHAT WE DO</span></h4>
                  <ul className="mt-4 list-disc pl-7 text-[20px] font-semibold leading-[1.45]">
                    <li>Hands-on learning activities</li>
                    <li>Story time &amp; circle time</li>
                    <li>Creative arts &amp; crafts</li>
                    <li>Sensory play &amp; exploration</li>
                    <li>Building social skills &amp; confidence</li>
                    <li>Encouraging independence</li>
                    <li>Building a strong foundation for lifelong learning</li>
                  </ul>
                </div>
              </article>

              <article className="h-full rounded-[1.3rem] border-2 border-[#7a0f23] bg-[#f8f6f8] p-4 text-center text-[#3f2a23] flex flex-col">
                <p className="flex items-center justify-center gap-2 text-[26px] font-bold text-[#7a0f23]"><span className="leading-none">🎁</span><span>New Enrollees Can Get</span></p>
                <h4 className="mt-2 text-[42px] font-black leading-[0.9] text-[#7a0f23] md:text-[52px]">1 Free<br />Elite Uniform</h4>
                <p className="mt-2 text-[16px]">when they use the teacher&apos;s referral code:</p>
                <div className="mx-auto mt-3 w-fit rounded-xl bg-[#6f081b] px-8 py-2 text-[40px] font-black text-white md:px-10 md:text-[48px]">RED10</div>
                <p className="mt-3 text-[16px] font-semibold">Two Easy Ways to Register</p>
                <div className="mt-auto pt-3 grid gap-2 sm:grid-cols-2">
                  <a href="https://elitechildrenlearningcenter.com" target="_blank" rel="noreferrer" className="relative z-[2] block cursor-pointer rounded-xl bg-[#6f081b] px-3 py-3 text-[20px] font-bold text-white">Register Online</a>
                  <a href="#contact" className="relative z-[2] block cursor-pointer rounded-xl bg-[#6f081b] px-3 py-3 text-[20px] font-bold text-white">Schedule a Tour</a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="mt-4 w-full rounded-2xl border border-[#d8a441]/40 bg-[#651625] px-8 py-8 text-[#fff7e8] shadow-xl">
        <div id="shop" className="h-px" />
        <div className="grid items-center gap-8 text-center lg:grid-cols-3">
          <div>
            <img
              src="https://res.cloudinary.com/dozcy2jve/image/upload/v1777494677/images/xxx_Panda_Buck_Playbook.pdf_1_i803ac.png"
              alt="ECLC logo"
              className="mx-auto h-[88px] w-[88px] object-contain"
            />
            <p className="mt-4 text-lg font-semibold italic text-[#f7dec1]">Elite Children Learning Center</p>
          </div>

          <div>
            <p className="text-2xl font-bold text-[#f7d891]">Contact</p>
            <p className="mt-3 text-base font-semibold italic text-[#f7dec1]">Phone: +1 678-403-143</p>
            <p className="mt-2 text-base font-semibold italic text-[#f7dec1]">Email: aadmin@eliteschildren.com</p>
          </div>

          <div>
            <p className="text-2xl font-bold text-[#f7d891]">Social Media</p>
            <div className="mt-5 flex justify-center gap-4">
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="inline-flex h-9 w-9 items-center justify-center rounded bg-[#1877F2] text-xs font-black text-white">f</a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="inline-flex h-9 w-9 items-center justify-center rounded bg-[#E1306C] text-xs font-black text-white">ig</a>
              <a href="https://www.youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="inline-flex h-9 w-9 items-center justify-center rounded bg-[#FF0000] text-[10px] font-black text-white">yt</a>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </main>
  );
}
