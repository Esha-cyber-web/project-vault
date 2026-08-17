import React from 'react';
import { 
  Heart, 
  CreditCard, 
  Bot, 
  Video, 
  Sparkles, 
  Wine, 
  Layers, 
  Rocket, 
  ArrowRight,
  Zap
} from 'lucide-react';

// Custom Brand SVGs to avoid lucide import errors
const GithubIcon = () => (
  <svg className="w-4 h-4 fill-current hover:text-slate-900 transition cursor-pointer" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-4 h-4 fill-current hover:text-slate-900 transition cursor-pointer" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4 fill-current hover:text-slate-900 transition cursor-pointer" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-4 h-4 fill-current hover:text-slate-900 transition cursor-pointer" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export default function App() {
  const cards = [
    {
      badge: "INTERMEDIATE • XAI",
      title: "Heart disease - SHAP",
      desc: "Predict cardiovascular risk & explain each biomarker with SHAP/LIME. Deploy as a patient-friendly card.",
      icon: <Heart className="w-5 h-5 text-indigo-600" />,
      footer: "UCI Dataset"
    },
    {
      badge: "ADVANCED • REAL-TIME",
      title: "Fraud detection pipeline",
      desc: "Kafka + XGBoost + MLflow. Detect fraud in <100ms with drift monitoring and Prometheus alerts.",
      icon: <CreditCard className="w-5 h-5 text-indigo-600" />,
      footer: "100ms Latency"
    },
    {
      badge: "FRONTIER • GNN",
      title: "Fake news - graph propagation",
      desc: "GraphSAGE over retweet networks — classify misinformation by spread pattern, not just text.",
      icon: <Bot className="w-5 h-5 text-indigo-600" />,
      footer: "Twitter API"
    },
    {
      badge: "RESEARCH • SELF-SUPERVISED",
      title: "Video MAE • masked autoencoder",
      desc: "Pre-train on video frames by masking 75% patches. Fine-tune for action recognition with SOTA results.",
      icon: <Video className="w-5 h-5 text-indigo-600" />,
      footer: "Kinetics-400"
    },
    {
      badge: "FUN • LLM / DIFFUSION",
      title: "D&D Dungeon Master",
      desc: "Fine-tune Llama 3 on rulebooks + generate maps with Stable Diffusion. Real-time adventure generator.",
      icon: <Sparkles className="w-5 h-5 text-indigo-600" />,
      footer: "Replicate"
    },
    {
      badge: "GRAPH AI • RECOMMENDATION",
      title: "AI Sommelier • Neo4j",
      desc: "Graph database of wine profiles + GNN recommendations. Predicts pairing via tannins & acidity.",
      icon: <Wine className="w-5 h-5 text-indigo-600" />,
      footer: "Food & Wine"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 flex flex-col justify-between p-4 md:p-10 font-sans">
      
      {/* Main Container */}
      <div className="max-w-5xl mx-auto w-full space-y-12">
        
        {/* 1. Header / Navbar */}
        <header className="flex justify-between items-center py-2">
          <div className="flex items-center space-x-2">
            <Layers className="w-6 h-6 text-indigo-600 fill-indigo-600/20" />
            <span className="font-bold text-lg text-slate-900 tracking-tight">ProjectVault</span>
          </div>
          <nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-slate-900 transition">Projects</a>
            <a href="#" className="hover:text-slate-900 transition">Research</a>
            <a href="#" className="hover:text-slate-900 transition">Playground</a>
          </nav>
          <button className="bg-[#0f172a] text-white px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5 hover:bg-slate-800 transition">
            <Rocket className="w-3.5 h-3.5" /> Launch
          </button>
        </header>

        {/* 2. Hero Section */}
        <section className="text-center pt-6 pb-2 space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            From notebook <br /> to production.
          </h1>
          <p className="text-slate-500 max-w-md mx-auto text-xs leading-relaxed">
            Curated AI/ML blueprints — beginner to frontier. Choose your mission, deploy with confidence.
          </p>
          <div className="flex justify-center items-center gap-3 pt-2">
            <button className="bg-[#0f172a] text-white px-5 py-2.5 rounded-full text-xs font-semibold hover:bg-slate-800 transition shadow-sm">
              Explore projects
            </button>
            <button className="border border-slate-200 bg-white text-slate-700 px-5 py-2.5 rounded-full text-xs font-semibold hover:bg-slate-50 transition shadow-sm">
              Synthetic data vault
            </button>
          </div>
        </section>

        {/* 3. Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center py-6 border-y border-slate-200/60 max-w-3xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">12+</h3>
            <p className="text-[11px] text-slate-500 font-medium tracking-wide">project blueprints</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900">4</h3>
            <p className="text-[11px] text-slate-500 font-medium tracking-wide">skill levels</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900">100%</h3>
            <p className="text-[11px] text-slate-500 font-medium tracking-wide">open source</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900 flex items-center justify-center gap-1">
              <Zap className="w-5 h-5 text-amber-500 fill-amber-500" /> MLOps ready
            </h3>
          </div>
        </div>

        {/* 4. Featured Projects Grid */}
        <section className="space-y-6 pt-2">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Layers className="w-4 h-4 text-indigo-600" /> Featured project tracks
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {cards.map((card, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200/70 shadow-sm hover:shadow-md transition flex flex-col justify-between">
                <div>
                  <div className="p-2 bg-indigo-50/60 rounded-xl w-fit mb-3">
                    {card.icon}
                  </div>
                  <span className="text-[10px] font-bold text-indigo-600/80 tracking-wider uppercase block mb-1">
                    {card.badge}
                  </span>
                  <h3 className="font-bold text-slate-900 text-sm mb-2">{card.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed mb-4">
                    {card.desc}
                  </p>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-slate-100 text-[11px] text-slate-400 font-medium">
                  <span>{card.footer}</span>
                  <a href="#" className="flex items-center gap-1 font-semibold text-slate-800 hover:text-indigo-600 transition">
                    View <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Bottom Dark Banner */}
        <section className="bg-[#0b1329] text-white rounded-3xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-md">
          <div className="space-y-2">
            <span className="text-[9px] font-bold text-slate-300 tracking-wider uppercase bg-slate-800/80 px-2.5 py-1 rounded-full border border-slate-700">
              DARK HORSE
            </span>
            <h2 className="text-xl font-bold">Synthetic Data Vault</h2>
            <p className="text-slate-400 text-xs max-w-md leading-relaxed">
              Generate privacy-safe synthetic tabular data with CTGAN / VAE. Includes evaluation reports & correlation matrices.
            </p>
          </div>
          <button className="bg-white text-slate-900 px-5 py-2.5 rounded-full text-xs font-bold hover:bg-slate-100 transition whitespace-nowrap shadow-sm">
            Explore vault
          </button>
        </section>

        {/* 6. Footer */}
        <footer className="flex flex-col sm:flex-row justify-between items-center py-4 text-xs text-slate-400 border-t border-slate-200/60 pt-6">
          <p>© 2026 ProjectVault — built for builders</p>
          <div className="flex items-center gap-4 mt-3 sm:mt-0 text-slate-400">
            <GithubIcon />
            <TwitterIcon />
            <LinkedinIcon />
            <YoutubeIcon />
          </div>
        </footer>

      </div>
    </div>
  );
}