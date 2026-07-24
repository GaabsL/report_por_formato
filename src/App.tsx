import React, { useState } from 'react';
import { Header } from './components/Header';
import { TabOverview } from './components/TabOverview';
import { TabNetworkPerformance } from './components/TabNetworkPerformance';
import { TabMonthlyEvolution } from './components/TabMonthlyEvolution';
import { TabWeeklyDetail } from './components/TabWeeklyDetail';
import { ExecutiveSummaryDeckModal } from './components/ExecutiveSummaryDeckModal';
import { TrendingUp, FileCheck2, Calendar } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('networks');
  const [isDeckOpen, setIsDeckOpen] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans selection:bg-indigo-500 selection:text-white flex flex-col justify-between">
      {/* Executive Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenDeck={() => setIsDeckOpen(true)}
        onPrint={handlePrint}
      />

      {/* Main Dashboard Workspace */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full">
        {activeTab === 'overview' && <TabOverview />}
        {activeTab === 'networks' && <TabNetworkPerformance />}
        {activeTab === 'monthly' && <TabMonthlyEvolution />}
        {activeTab === 'weekly' && <TabWeeklyDetail />}
      </main>

      {/* Fullscreen Slide Presentation Modal */}
      <ExecutiveSummaryDeckModal
        isOpen={isDeckOpen}
        onClose={() => setIsDeckOpen(false)}
      />

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 text-slate-500 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-indigo-50 text-indigo-600 rounded-lg">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-slate-800 block">
                Relatório Executivo de Social Media (2025–2026)
              </span>
              <span className="text-[11px] text-slate-400">
                3.772 publicações analisadas • Engajamento global de 2,73%
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1">
              <FileCheck2 className="w-3.5 h-3.5 text-emerald-500" /> Dados Validados C-Level
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-indigo-500" /> Atualizado em 2026
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
