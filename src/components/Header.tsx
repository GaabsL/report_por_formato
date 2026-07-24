import React from 'react';
import { Share2, Calendar, LayoutGrid, TrendingUp } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenDeck?: () => void;
  onPrint?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'networks', label: 'Performance por Rede Social', icon: Share2 },
    { id: 'monthly', label: 'Evolução Mensal (Consolidado)', icon: Calendar },
    { id: 'weekly', label: 'Detalhamento Semanal (2025-2026)', icon: LayoutGrid },
  ];

  return (
    <header className="bg-slate-900 border-b border-slate-800 text-white sticky top-0 z-30 shadow-lg">
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 rounded-xl shadow-md text-white">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white mt-0.5">
                Performance de Formatos
              </h1>
              <p className="text-xs text-slate-400 hidden sm:block">
                Dashboard executivo com engajamento por formato, canal, evolução histórica e matriz semanal.
              </p>
            </div>
          </div>

          {/* Logos Header Superior */}
          <div className="flex items-center gap-3 sm:gap-4 self-start md:self-auto bg-slate-800/80 p-2 px-3 rounded-xl border border-slate-700/60 shadow-inner">
            <div className="bg-white p-1.5 sm:p-2 rounded-lg flex items-center justify-center shadow-sm">
              <img
                src="https://i.imgur.com/ihchsJt.png"
                alt="Logo Empresa"
                className="h-7 sm:h-9 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="h-6 w-px bg-slate-700/80" />
            <div className="bg-white p-1.5 sm:p-2 rounded-lg flex items-center justify-center shadow-sm">
              <img
                src="https://i.imgur.com/lAyMWKF.png"
                alt="Logo Agência"
                className="h-7 sm:h-9 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex items-center gap-1 sm:gap-2 mt-6 overflow-x-auto pb-1 no-scrollbar border-t border-slate-800/80 pt-3">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-150 cursor-pointer ${
                  isActive
                    ? 'bg-indigo-600/90 text-white shadow-md shadow-indigo-900/40 border border-indigo-500/50'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
