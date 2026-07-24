import React, { useState, useEffect } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Presentation,
  Trophy,
  Flame,
  TrendingUp,
  Share2,
  Calendar,
  CheckCircle2,
  Lightbulb,
} from 'lucide-react';
import { OVERVIEW_BY_FORMAT, TOTAL_POSTS_GLOBAL, GLOBAL_AVERAGE_ENGAGEMENT, EXECUTIVE_INSIGHTS } from '../data/socialPerformanceData';

interface DeckModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExecutiveSummaryDeckModal: React.FC<DeckModalProps> = ({ isOpen, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = 5;

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  // Keyboard arrow listeners
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentSlide]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex flex-col justify-between text-white p-4 sm:p-8 animate-fadeIn">
      {/* Top Deck Navigation Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-tr from-purple-600 to-indigo-600 rounded-lg">
            <Presentation className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-sm sm:text-base font-bold text-white">
              Apresentação Executiva C-Level
            </h2>
            <span className="text-xs text-slate-400">
              Slide {currentSlide + 1} de {totalSlides}
            </span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Slide Canvas */}
      <div className="flex-1 flex items-center justify-center py-6 px-2 overflow-y-auto">
        <div className="max-w-4xl w-full">
          {/* SLIDE 0: Title Cover */}
          {currentSlide === 0 && (
            <div className="space-y-8 text-center animate-fadeIn">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                Relatório Estratégico 2025–2026
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                Análise de Performance de <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-indigo-400">
                  Redes Sociais & Conteúdo
                </span>
              </h1>
              <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                Consolidado de <strong className="text-white">3.772 publicações</strong> em 18 meses, avaliando taxas de engajamento por formato, canal e sazonalidade.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto pt-6 border-t border-slate-800/80">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-2xl font-black text-purple-400">3.772</span>
                  <span className="block text-xs text-slate-400">Posts Catalogados</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-2xl font-black text-emerald-400">2,73%</span>
                  <span className="block text-xs text-slate-400">Engajamento Médio</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-2xl font-black text-cyan-400">Stories (#1)</span>
                  <span className="block text-xs text-slate-400">4,41% Médio</span>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 1: Formats Ranking */}
          {currentSlide === 1 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="text-center sm:text-left">
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider block mb-1">
                  Visão Geral por Formato
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Ranking dos Formatos de Maior Performance
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {OVERVIEW_BY_FORMAT.map((f) => (
                  <div
                    key={f.format}
                    className={`p-4 rounded-xl border ${
                      f.rank === 1
                        ? 'bg-purple-900/30 border-purple-500/50'
                        : f.rank === 2
                        ? 'bg-cyan-900/20 border-cyan-500/40'
                        : 'bg-slate-900 border-slate-800'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-400">Posição #{f.rank}</span>
                      <span className="text-xl font-extrabold text-white">
                        {f.engagement.toString().replace('.', ',')}%
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white">{f.label}</h3>
                    <p className="text-xs text-slate-400 mt-1">
                      {f.posts} publicações veiculadas no período.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SLIDE 2: Network Performance */}
          {currentSlide === 2 && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider block mb-1">
                  Canais & Plataformas
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Comparativo de Subtotais por Rede Social
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-purple-950/40 border border-purple-500/40">
                  <span className="text-xs font-bold text-purple-300 uppercase block">1º Instagram Stories</span>
                  <div className="text-3xl font-black text-white mt-1">4,41%</div>
                  <p className="text-xs text-purple-200/80 mt-1">1.289 posts com alto engajamento dinâmico.</p>
                </div>

                <div className="p-5 rounded-xl bg-cyan-950/40 border border-cyan-500/40">
                  <span className="text-xs font-bold text-cyan-300 uppercase block">2º TikTok Vídeo</span>
                  <div className="text-3xl font-black text-white mt-1">3,49%</div>
                  <p className="text-xs text-cyan-200/80 mt-1">648 vídeos curtos e alta consistência de entregas.</p>
                </div>

                <div className="p-5 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-xs font-bold text-slate-400 uppercase block">3º Instagram Feed</span>
                  <div className="text-3xl font-black text-white mt-1">1,67%</div>
                  <p className="text-xs text-slate-400 mt-1">1.069 posts (Reels 1,83%, Estático 1,43%, Carrossel 1,28%).</p>
                </div>

                <div className="p-5 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-xs font-bold text-slate-400 uppercase block">4º Facebook Subtotal</span>
                  <div className="text-3xl font-black text-white mt-1">1,56%</div>
                  <p className="text-xs text-slate-400 mt-1">766 posts (Reels 1,70%, Estático 1,50%, Carrossel 1,26%).</p>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 3: Key Takeaways */}
          {currentSlide === 3 && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider block mb-1">
                  Estratégia & Recomendações
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Direcionamentos para o Próximo Ciclo
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {EXECUTIVE_INSIGHTS.map((item, index) => (
                  <div key={index} className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                    <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold bg-indigo-500/20 text-indigo-300">
                      {item.badge}
                    </span>
                    <h3 className="text-sm font-bold text-white">{item.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SLIDE 4: Conclusion & Q&A */}
          {currentSlide === 4 && (
            <div className="space-y-6 text-center animate-fadeIn py-8">
              <div className="w-16 h-16 bg-gradient-to-tr from-emerald-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto text-white shadow-xl">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-black text-white">Pronto para Apresentar à Diretoria</h2>
              <p className="text-slate-300 max-w-lg mx-auto text-sm leading-relaxed">
                Você pode utilizar os filtros da aba semanal para responder a qualquer pergunta específica sobre determinado mês ou formato durante a reunião.
              </p>

              <button
                onClick={onClose}
                className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition-all cursor-pointer shadow-lg"
              >
                Voltar ao Dashboard Interativo
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="flex items-center justify-between border-t border-slate-800 pt-4">
        <div className="flex items-center gap-1.5">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                currentSlide === idx ? 'bg-indigo-500 w-8' : 'bg-slate-700 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={prevSlide}
            className="flex items-center gap-1 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Anterior</span>
          </button>
          <button
            onClick={nextSlide}
            className="flex items-center gap-1 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-bold text-white transition-colors cursor-pointer"
          >
            <span>Próximo</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
