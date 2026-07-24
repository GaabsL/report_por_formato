import React, { useState } from 'react';
import { MONTHLY_EVOLUTION_DATA } from '../data/socialPerformanceData';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';
import { Calendar, Filter, Eye, EyeOff } from 'lucide-react';

export const TabMonthlyEvolution: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<'ALL' | '2025' | '2026'>('ALL');

  // Format line visibility toggles
  const [visibleFormats, setVisibleFormats] = useState({
    Stories: true,
    TikTok: true,
    Reels: true,
    Estatico: true,
    Carrossel: true,
  });

  const toggleFormat = (key: keyof typeof visibleFormats) => {
    setVisibleFormats((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const filteredData = MONTHLY_EVOLUTION_DATA.filter((m) => {
    if (selectedYear === 'ALL') return true;
    return m.year === selectedYear;
  });

  // Color helper for heatmap matrix
  const getHeatmapColor = (val: number) => {
    if (val >= 6.0) return 'bg-purple-600 text-white font-black';
    if (val >= 4.0) return 'bg-purple-200 text-purple-900 font-bold';
    if (val >= 2.5) return 'bg-cyan-100 text-cyan-900 font-semibold';
    if (val >= 1.5) return 'bg-slate-100 text-slate-800 font-medium';
    return 'bg-slate-50 text-slate-500';
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-50 text-purple-700 border border-purple-200 mb-2">
            <Calendar className="w-3.5 h-3.5 text-purple-600" />
            <span>Série Histórica Contínua (18 Meses)</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Evolução Mensal de Engajamento por Formato</h2>
          <p className="text-sm text-slate-500 mt-1">
            Mapeamento temporal de 01/2025 a 06/2026 destacando sazonalidades e picos de engajamento.
          </p>
        </div>

        {/* Year Filter Switcher */}
        <div className="flex items-center gap-1.5 bg-slate-100 p-1.5 rounded-xl border border-slate-200 self-start md:self-auto">
          <span className="text-xs font-semibold text-slate-500 px-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Ano:
          </span>
          <button
            onClick={() => setSelectedYear('ALL')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              selectedYear === 'ALL'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
            }`}
          >
            Todos (18M)
          </button>
          <button
            onClick={() => setSelectedYear('2025')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              selectedYear === '2025'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
            }`}
          >
            2025
          </button>
          <button
            onClick={() => setSelectedYear('2026')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              selectedYear === '2026'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
            }`}
          >
            2026
          </button>
        </div>
      </div>

      {/* Main Interactive Chart Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
        {/* Toggleable Legend Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
            Exibir / Ocultar Formatos no Gráfico:
          </span>
          <div className="flex flex-wrap gap-2">
            {[
              { key: 'Stories', label: 'Stories', color: '#833AB4' },
              { key: 'TikTok', label: 'TikTok', color: '#00F2FE' },
              { key: 'Reels', label: 'Reels', color: '#E1306C' },
              { key: 'Estatico', label: 'Estático', color: '#3B82F6' },
              { key: 'Carrossel', label: 'Carrossel', color: '#10B981' },
            ].map((fmt) => {
              const isVisible = visibleFormats[fmt.key as keyof typeof visibleFormats];
              return (
                <button
                  key={fmt.key}
                  onClick={() => toggleFormat(fmt.key as keyof typeof visibleFormats)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer border ${
                    isVisible
                      ? 'bg-slate-900 text-white border-slate-800 shadow-sm'
                      : 'bg-slate-100 text-slate-400 border-slate-200 line-through'
                  }`}
                >
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: fmt.color }} />
                  <span>{fmt.label}</span>
                  {isVisible ? <Eye className="w-3 h-3 text-slate-300" /> : <EyeOff className="w-3 h-3" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Recharts Multi-line chart */}
        <div className="h-80 sm:h-96 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={filteredData} margin={{ top: 20, right: 30, left: 0, bottom: 25 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
              <XAxis dataKey="period" tick={{ fontSize: 11, fill: '#475569' }} dy={10} />
              <YAxis
                tick={{ fontSize: 11, fill: '#475569' }}
                unit="%"
                domain={[0, 9.5]}
                tickFormatter={(v) => `${v}%`}
              />
              <Tooltip
                formatter={(value: number, name: string) => [
                  `${value.toString().replace('.', ',')}%`,
                  name === 'Estatico' ? 'Estático' : name,
                ]}
                labelFormatter={(label) => `Período: ${label}`}
                contentStyle={{
                  backgroundColor: '#0F172A',
                  borderColor: '#334155',
                  borderRadius: '10px',
                  color: '#FFF',
                }}
              />
              <ReferenceLine y={2.73} label="Média Global (2,73%)" stroke="#10B981" strokeDasharray="4 4" />

              {visibleFormats.Stories && (
                <Line
                  type="monotone"
                  dataKey="Stories"
                  name="Stories"
                  stroke="#833AB4"
                  strokeWidth={3}
                  dot={{ r: 4, fill: '#833AB4' }}
                  activeDot={{ r: 7 }}
                />
              )}
              {visibleFormats.TikTok && (
                <Line
                  type="monotone"
                  dataKey="TikTok"
                  name="TikTok"
                  stroke="#00C49F"
                  strokeWidth={2.5}
                  dot={{ r: 4, fill: '#00C49F' }}
                />
              )}
              {visibleFormats.Reels && (
                <Line
                  type="monotone"
                  dataKey="Reels"
                  name="Reels"
                  stroke="#E1306C"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                />
              )}
              {visibleFormats.Estatico && (
                <Line
                  type="monotone"
                  dataKey="Estatico"
                  name="Estático"
                  stroke="#3B82F6"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                />
              )}
              {visibleFormats.Carrossel && (
                <Line
                  type="monotone"
                  dataKey="Carrossel"
                  name="Carrossel"
                  stroke="#10B981"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                />
              )}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Heatmap Matrix Table */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
        <div>
          <h3 className="text-base font-bold text-slate-900">Matriz Térmica Mensal (Heatmap)</h3>
          <p className="text-xs text-slate-500">
            Intensidade do engajamento em cada formato ao longo dos meses (valores superiores a 4% destacadas em roxo)
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-center text-xs">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
                <th className="py-2.5 px-3 text-left">Mês/Ano</th>
                <th className="py-2.5 px-3">Stories (%)</th>
                <th className="py-2.5 px-3">TikTok (%)</th>
                <th className="py-2.5 px-3">Reels (%)</th>
                <th className="py-2.5 px-3">Estático (%)</th>
                <th className="py-2.5 px-3">Carrossel (%)</th>
                <th className="py-2.5 px-3 text-right">Média Mês</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredData.map((m) => (
                <tr key={m.period} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-2 px-3 text-left font-bold text-slate-900">{m.period}</td>
                  <td className="py-2 px-3">
                    <span className={`inline-block px-2.5 py-1 rounded-md text-xs ${getHeatmapColor(m.Stories)}`}>
                      {m.Stories.toString().replace('.', ',')}%
                    </span>
                  </td>
                  <td className="py-2 px-3">
                    <span className={`inline-block px-2.5 py-1 rounded-md text-xs ${getHeatmapColor(m.TikTok)}`}>
                      {m.TikTok.toString().replace('.', ',')}%
                    </span>
                  </td>
                  <td className="py-2 px-3">
                    <span className={`inline-block px-2.5 py-1 rounded-md text-xs ${getHeatmapColor(m.Reels)}`}>
                      {m.Reels.toString().replace('.', ',')}%
                    </span>
                  </td>
                  <td className="py-2 px-3">
                    <span className={`inline-block px-2.5 py-1 rounded-md text-xs ${getHeatmapColor(m.Estatico)}`}>
                      {m.Estatico.toString().replace('.', ',')}%
                    </span>
                  </td>
                  <td className="py-2 px-3">
                    <span className={`inline-block px-2.5 py-1 rounded-md text-xs ${getHeatmapColor(m.Carrossel)}`}>
                      {m.Carrossel.toString().replace('.', ',')}%
                    </span>
                  </td>
                  <td className="py-2 px-3 text-right font-extrabold text-slate-900">
                    {m.globalAvg?.toString().replace('.', ',')}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
