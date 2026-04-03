/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Sprout, 
  BookOpen, 
  Users, 
  Trophy, 
  Star, 
  Sparkles, 
  Heart, 
  Plus, 
  Equal, 
  Package, 
  Play,
  CheckCircle,
  Stars
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
type NavItem = 'Garden' | 'Story' | 'Friends' | 'Trophies';

// --- Icons Mapping ---
const NavIcons = {
  Garden: Sprout,
  Story: BookOpen,
  Friends: Users,
  Trophies: Trophy,
};

// --- Components ---

const Sidebar = ({ activeTab, setActiveTab }: { activeTab: NavItem, setActiveTab: (tab: NavItem) => void }) => {
  const tabs: NavItem[] = ['Garden', 'Story', 'Friends', 'Trophies'];

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-64 z-40 hidden md:flex flex-col py-8 bg-surface-container-low rounded-r-[3rem] my-4 ml-4 shadow-xl shadow-pink-200/50 bg-gradient-to-b from-pink-50 to-white">
      <div className="px-8 mb-8">
        <h1 className="text-xl font-bold text-pink-700 font-headline">Princess Math</h1>
        <p className="text-xs text-pink-400 font-medium">Level 5 Sparkle Mage</p>
      </div>
      <nav className="flex-1 space-y-2">
        {tabs.map((tab) => {
          const Icon = NavIcons[tab];
          const isActive = activeTab === tab;
          return (
            <div
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3 flex items-center gap-3 cursor-pointer transition-all mx-2 rounded-full ${
                isActive 
                  ? 'bg-primary text-white shadow-lg scale-105' 
                  : 'text-pink-400 hover:text-pink-600 hover:bg-pink-100/50'
              }`}
            >
              <Icon size={20} fill={isActive ? "currentColor" : "none"} />
              <span className="font-headline font-medium text-sm">{tab}</span>
            </div>
          );
        })}
      </nav>
      <div className="mt-auto px-4">
        <button className="w-full bg-primary text-on-primary py-4 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg shadow-primary/20">
          Play Now
        </button>
      </div>
    </aside>
  );
};

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center max-w-4xl mx-auto bg-white/60 backdrop-blur-lg rounded-full mt-4 mx-4 px-6 py-3 floating shadow-sm shadow-[0_10px_40px_rgba(130,74,94,0.08)] md:ml-72">
    <div className="text-2xl font-black text-pink-600 italic font-headline">Magical Math Garden</div>
    <div className="flex items-center gap-4">
      <Star className="text-pink-700 hover:scale-110 hover:rotate-2 transition-transform cursor-pointer" size={24} />
      <Sparkles className="text-pink-700 hover:scale-110 hover:rotate-2 transition-transform cursor-pointer" size={24} />
      <div className="w-10 h-10 rounded-full border-2 border-primary overflow-hidden">
        <img 
          alt="Pink Bunny Avatar" 
          className="w-full h-full object-cover" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpKBKpBXxW4inhoW64LRKKhGi862E3X3PFq_UipcVYZprSeeU8ggx3KNfba1Y-G7ly7Fk7jdcOraK2S_5bmaXjSfoQDTOmz5XQ8ZaQiX2XRWnSZ88N0ipTczfi2PDo1C7q8l7CrgbV48M4I-oMjCW_VXKScdb4T1lzvOSDJB71eRuMpBW6iNN3nTk2orWCJiVRh1pwo-qf6RkFaG228Lex9_S9DrxDkIznGZtwOj63AYhM-2SlqKs6xmtvs8SYGQvXZXsmSSmzYZdp"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  </header>
);

const WelcomeSection = () => (
  <section className="relative flex flex-col md:flex-row items-center gap-8 bg-surface-container-low rounded-xl p-8 overflow-hidden">
    <div className="absolute top-0 right-0 p-4">
      <Heart className="text-pink-200" size={64} />
    </div>
    <div className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
      <div className="absolute inset-0 bg-primary-container/30 rounded-full blur-2xl"></div>
      <motion.img 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        alt="Bunny Guide" 
        className="relative w-full h-full object-contain" 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOGWZ-MttB1q9WsNYgoNZcxfBHVe2l1MpEvTr7CslLwLyK6H7uSDjPtiaccTpZvQBUQREd-NpgoLndvYdMOzta9il01-9CO5z8bLACO0ZMbrWiW1-SL78qnQF_gZ5TW8cBTUQ_vgKgGsI7kJgySxVD0y6pDemQDPyE6DH3bzuSY-IfqwCyX2uNzOx--0rb_VJu1gjFs913pia3ThPifzfBOIR2gSSmnDTEOf1SdTUgvLMzeKwsMv_7j20gZ0iaqaB4c2YosnVqKp5L"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="text-center md:text-left space-y-4">
      <h2 className="text-4xl font-headline font-extrabold text-primary leading-tight">Chào bé yêu, mình cùng học Toán nhé!</h2>
      <p className="text-on-surface-variant text-lg font-medium">Chào mừng con đến với Khu Vườn Toán Học Kỳ Diệu. Hôm nay chúng mình sẽ cùng nhau khám phá những con số tuyệt vời!</p>
    </div>
  </section>
);

const VisualAddition = () => {
  const strawberryUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuCD4PvZiPOf1LtZrw0OPlleElJp0t-5e41Wvk9Vcztf8nyM_iB6Xj3xVziV0dDILhOPgwzQBvG1tb57mdIyegMuEb30WdaxBo2IDfD7l3YbhzB9evSFAg-AOG5kWUXmdOExXlZUBIeHDqWJyZUP6fLR7Si6svX2m5zUNKuwrmiDhVIScqiip-1VTc287A2D7BUkDwlnV6LIpKshddyFB1oRJAorisRFxY2eOAExL6A4sNlh4NnNmg8IWfZDtpiroSw2YJWp5rj2XQ7x";
  
  return (
    <section className="space-y-8">
      <h3 className="text-2xl font-headline font-bold text-secondary text-center">Phép Cộng Thú Vị</h3>
      <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-4 bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/10">
        <div className="col-span-1 md:col-span-2 flex flex-col items-center gap-4">
          <div className="flex gap-2">
            {[1, 2, 3].map(i => (
              <img key={i} alt="Strawberry" className="w-12 h-12 object-contain" src={strawberryUrl} referrerPolicy="no-referrer" />
            ))}
          </div>
          <span className="text-3xl font-headline font-black text-primary">3</span>
        </div>
        <div className="flex justify-center">
          <Plus className="text-secondary font-bold" size={32} />
        </div>
        <div className="col-span-1 md:col-span-2 flex flex-col items-center gap-4">
          <div className="flex gap-2">
            {[1, 2].map(i => (
              <img key={i} alt="Strawberry" className="w-12 h-12 object-contain" src={strawberryUrl} referrerPolicy="no-referrer" />
            ))}
          </div>
          <span className="text-3xl font-headline font-black text-primary">2</span>
        </div>
        <div className="col-span-full py-4 border-t border-outline-variant/20 mt-4 flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            <Equal className="text-secondary font-bold" size={32} />
            <div className="flex gap-1 bg-tertiary-container/20 p-4 rounded-xl">
              {[1, 2, 3, 4, 5].map(i => (
                <img key={i} alt="Strawberry" className="w-8 h-8" src={strawberryUrl} referrerPolicy="no-referrer" />
              ))}
            </div>
            <span className="text-4xl font-headline font-black text-tertiary">5</span>
          </div>
          <p className="text-xl font-bold text-on-surface-variant italic">3 quả dâu + 2 quả dâu = 5 quả dâu nè!</p>
        </div>
      </div>
    </section>
  );
};

const MathQuiz = ({ onCorrect }: { onCorrect: () => void }) => {
  const [selected, setSelected] = useState<number | null>(null);
  const options = [8, 10, 12];
  const correctAnswer = 10;

  const handleSelect = (val: number) => {
    setSelected(val);
    if (val === correctAnswer) {
      onCorrect();
    }
  };

  return (
    <section className="bg-gradient-to-br from-secondary-container to-white p-12 rounded-xl text-center space-y-10 shadow-lg relative">
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white px-8 py-2 rounded-full shadow-md text-primary font-bold">Thực hành cùng bé</div>
      <div className="space-y-2">
        <h4 className="text-6xl md:text-8xl font-headline font-black text-primary tracking-tighter">6 + 4 = ?</h4>
        <p className="text-secondary font-medium">Bé hãy chọn đáp án đúng nhé!</p>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {options.map((opt) => (
          <button 
            key={opt}
            onClick={() => handleSelect(opt)}
            className={`group relative w-24 h-24 md:w-32 md:h-32 bg-surface-container-lowest rounded-xl flex items-center justify-center text-4xl font-black text-primary shadow-sm hover:scale-110 transition-all duration-300 active:scale-95 ${
              selected === opt && opt === correctAnswer ? 'ring-4 ring-tertiary-container ring-offset-4' : ''
            }`}
          >
            <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity ${
              opt === correctAnswer ? 'bg-tertiary-container/30' : 'bg-primary/10'
            }`}></div>
            {opt}
            {selected === opt && opt === correctAnswer && (
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-4 -right-4 text-tertiary"
              >
                <Sparkles size={40} fill="currentColor" />
              </motion.span>
            )}
          </button>
        ))}
      </div>
    </section>
  );
};

const TreasureChest = ({ stars }: { stars: number }) => (
  <section className="max-w-md mx-auto">
    <div className="bg-surface-container-low p-6 rounded-xl flex items-center justify-between shadow-inner border-b-4 border-pink-200">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 bg-gradient-to-t from-yellow-600 to-yellow-400 rounded-lg flex items-center justify-center shadow-lg relative overflow-hidden">
          <Package className="text-white" size={32} fill="currentColor" />
          <div className="absolute inset-0 bg-white/20 -skew-x-12"></div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest font-bold text-on-surface-variant/60">Rương báu</p>
          <h5 className="text-xl font-headline font-bold text-on-surface">Số Sao Của Bé: {stars} ⭐</h5>
        </div>
      </div>
      <div className="flex -space-x-2">
        <div className="w-8 h-8 rounded-full bg-tertiary flex items-center justify-center text-white text-xs border-2 border-white">
          <CheckCircle size={14} />
        </div>
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs border-2 border-white">
          +1
        </div>
      </div>
    </div>
  </section>
);

const MobileNav = () => (
  <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md px-6 py-4 flex justify-between items-center z-50 border-t border-outline-variant/10">
    <div className="flex flex-col items-center gap-1 text-primary">
      <Sprout size={20} fill="currentColor" />
      <span className="text-[10px] font-bold">Vườn</span>
    </div>
    <div className="flex flex-col items-center gap-1 text-pink-300">
      <BookOpen size={20} />
      <span className="text-[10px] font-bold">Truyện</span>
    </div>
    <div className="w-14 h-14 -mt-10 bg-primary rounded-full flex items-center justify-center text-white shadow-lg border-4 border-white">
      <Play size={30} fill="currentColor" />
    </div>
    <div className="flex flex-col items-center gap-1 text-pink-300">
      <Users size={20} />
      <span className="text-[10px] font-bold">Bạn</span>
    </div>
    <div className="flex flex-col items-center gap-1 text-pink-300">
      <Trophy size={20} />
      <span className="text-[10px] font-bold">Cúp</span>
    </div>
  </nav>
);

// --- Main App ---

export default function App() {
  const [activeTab, setActiveTab] = useState<NavItem>('Garden');
  const [stars, setStars] = useState(5);

  const handleCorrectAnswer = () => {
    // Only increment once for demo purposes
    if (stars === 5) {
      setStars(prev => prev + 1);
    }
  };

  return (
    <div className="min-h-screen selection:bg-primary-container selection:text-on-primary-container overflow-x-hidden">
      <div className="fixed inset-0 bg-pattern -z-10 pointer-events-none"></div>
      
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <Header />
      
      <main className="pt-28 pb-24 md:pb-12 px-6 md:ml-72 max-w-5xl mx-auto space-y-12">
        <WelcomeSection />
        <VisualAddition />
        <MathQuiz onCorrect={handleCorrectAnswer} />
        <TreasureChest stars={stars} />
      </main>

      <footer className="md:ml-72 p-8 text-center text-on-surface-variant/40 text-sm font-medium">
        © 2024 Khu Vườn Toán Học Kỳ Diệu • Design with Love
      </footer>

      <MobileNav />
    </div>
  );
}
