import React from 'react';
import {
  OVERVIEW_BY_FORMAT,
  TOTAL_POSTS_GLOBAL,
  GLOBAL_AVERAGE_ENGAGEMENT,
  EXECUTIVE_INSIGHTS,
} from '../data/socialPerformanceData';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie,
  Legend,
} from 'recharts';
import { Trophy, Flame, TrendingUp, Award, Layers, ArrowUpRight, Lightbulb, Video, Film, Image, CheckCircle2 } from 'lucide-react';

export const TabOverview: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Flame':
        return <Flame className="w-5 h-5 text-purple-600" />;
      case 'Video':
        return <Video className="w-5 h-5 text-cyan-600" />;
      case 'Film':
        return <Film className="w-5 h-5 text-pink-600" />;
      case 'Image':
        return <Image className="w-5 h-5 text-blue-600" />;
      default:
        return <Layers className="w-5 h-5 text-emerald-600" />;
    }
  };

  // Prepare chart data
  const chartData = OVERVIEW_BY_FORMAT.map((f) => ({
    name: f.format,
    engajamento: f.engagement,
    posts: f.posts,
    color: f.color,
  }));

  const pieData = OVERVIEW_BY_FORMAT.map((f) => ({
    name: f.format,
    value: f.posts,
    color: f.color,
    engagement: f.engagement,
  }));

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* C-Level Hero Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-2xl p-6 md:p-8 text-white shadow-xl border border-indigo-900/50 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              <Trophy className="w-3.5 h-3.5 text-emerald-400" />
              <span>Destaque Consolidado 2025–2026</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Stories e TikTok Lideram o Engajamento Global
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              O formato <strong className="text-purple-300">Stories</strong> atinge a liderança absoluta com <strong className="text-white">4,41%</strong> de engajamento médio em 1.289 publicações, seguido pelo <strong className="text-cyan-300">TikTok (3,49%)</strong>. Juntos, os dois formatos superam com folga a média global de <strong className="text-emerald-300">2,73%</strong>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 bg-slate-900/80 p-4 rounded-xl border border-slate-800 backdrop-blur-sm shrink-0">
            <div className="text-center px-4 py-2 border-r border-slate-800 last:border-0">
              <span className="block text-xs text-slate-400 font-medium">Stories (#1)</span>
              <span className="text-2xl font-black text-purple-400">4,41%</span>
              <span className="block text-[10px] text-slate-400">1.289 Posts</span>
            </div>
            <div className="text-center px-4 py-2 border-r border-slate-800 last:border-0">
              <span className="block text-xs text-slate-400 font-medium">TikTok (#2)</span>
              <span className="text-2xl font-black text-cyan-400">3,49%</span>
              <span className="block text-[10px] text-slate-400">648 Posts</span>
            </div>
            <div className="text-center px-4 py-2">
              <span className="block text-xs text-slate-400 font-medium">Média Global</span>
              <span className="text-2xl font-black text-emerald-400">{GLOBAL_AVERAGE_ENGAGEMENT.toString().replace('.', ',')}%</span>
              <span className="block text-[10px] text-slate-400">3.772 Posts</span>
            </div>
          </div>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* KPI 1: Total Posts */}
        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Volume Total</span>
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
              <Layers className="w-5 h-5" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {TOTAL_POSTS_GLOBAL.toLocaleString('pt-BR')}
          </div>
          <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
            <span className="text-emerald-600 font-semibold">100%</span> da produção catalogada
          </p>
        </div>

        {/* KPI 2: Global Avg Engagement */}
        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Engajamento Misto</span>
            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
              <TrendingUp className="w-5 h-5" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {GLOBAL_AVERAGE_ENGAGEMENT.toString().replace('.', ',')}%
          </div>
          <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
            Média ponderada de todos os formatos
          </p>
        </div>

        {/* KPI 3: Formato Campeão */}
        <div className="bg-gradient-to-br from-purple-50 to-indigo-50/50 rounded-xl p-5 border border-purple-200/60 shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center justify-between text-purple-700 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-700">Formato Campeão</span>
            <div className="p-2 bg-purple-100 text-purple-700 rounded-lg">
              <Flame className="w-5 h-5" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-purple-900">
            Stories (4,41%)
          </div>
          <p className="text-xs text-purple-700 mt-1 font-medium">
            +61,5% acima da média global
          </p>
        </div>

        {/* KPI 4: Pico Semanal */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50/50 rounded-xl p-5 border border-amber-200/60 shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center justify-between text-amber-800 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800">Pico Histórico Semanal</span>
            <div className="p-2 bg-amber-100 text-amber-700 rounded-lg">
              <Award className="w-5 h-5" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-amber-950">
            19,28%
          </div>
          <p className="text-xs text-amber-800 mt-1 font-medium">
            Stories na Semana 4 de 11/2025
          </p>
        </div>
      </div>

      {/* Main Visual Breakdown & Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Format Performance Ranking List */}
        <div className="lg:col-span-5 bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="text-base font-bold text-slate-900">Ranking por Formato</h3>
              <p className="text-xs text-slate-500">Ordenado por taxa média de engajamento</p>
            </div>
            <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
              5 Formatos
            </span>
          </div>

          <div className="space-y-3">
            {OVERVIEW_BY_FORMAT.map((f) => {
              const shareOfPosts = ((f.posts / TOTAL_POSTS_GLOBAL) * 100).toFixed(1);
              const isFirst = f.rank === 1;
              const isSecond = f.rank === 2;

              return (
                <div
                  key={f.format}
                  className={`p-3.5 rounded-xl border transition-all ${
                    isFirst
                      ? 'bg-purple-50/70 border-purple-200 shadow-sm'
                      : isSecond
                      ? 'bg-cyan-50/60 border-cyan-200'
                      : 'bg-slate-50/80 border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-extrabold ${
                          isFirst
                            ? 'bg-purple-600 text-white'
                            : isSecond
                            ? 'bg-cyan-600 text-white'
                            : 'bg-slate-300 text-slate-700'
                        }`}
                      >
                        #{f.rank}
                      </span>
                      {getIcon(f.iconName)}
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">{f.label}</h4>
                        <span className="text-[11px] text-slate-500">
                          {f.posts.toLocaleString('pt-BR')} posts ({shareOfPosts}% do total)
                        </span>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-base font-extrabold text-slate-900 block">
                        {f.engagement.toString().replace('.', ',')}%
                      </span>
                      <span
                        className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${
                          f.engagement >= 2.73
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-slate-200 text-slate-700'
                        }`}
                      >
                        {f.engagement >= 2.73 ? 'Acima da Média' : 'Abaixo da Média'}
                      </span>
                    </div>
                  </div>

                  {/* Progress bar visual */}
                  <div className="w-full bg-slate-200/80 rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${Math.min(100, (f.engagement / 5) * 100)}%`,
                        backgroundColor: f.color,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Charts */}
        <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 p-5 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-3 mb-4 gap-2">
              <div>
                <h3 className="text-base font-bold text-slate-900">Engajamento Médio por Formato (%)</h3>
                <p className="text-xs text-slate-500">Comparação direta de performance média</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-purple-600 inline-block" />
                <span className="text-xs text-slate-600 font-medium">Stories (4,41%)</span>
              </div>
            </div>

            <div className="h-64 sm:h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 15, right: 20, left: -10, bottom: 25 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                  <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#475569' }} interval={0} />
                  <YAxis
                    tick={{ fontSize: 12, fill: '#475569' }}
                    unit="%"
                    domain={[0, 5]}
                    tickFormatter={(v) => `${v}%`}
                  />
                  <Tooltip
                    formatter={(value: number) => [`${value.toString().replace('.', ',')}%`, 'Engajamento Médio']}
                    labelFormatter={(label) => `Formato: ${label}`}
                    contentStyle={{
                      backgroundColor: '#0F172A',
                      borderColor: '#334155',
                      borderRadius: '8px',
                      color: '#FFF',
                    }}
                  />
                  <Bar dataKey="engajamento" radius={[6, 6, 0, 0]} barSize={42}>
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
            <span className="flex items-center gap-1.5 font-medium text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Stories e TikTok performam substancialmente acima dos formatos tradicionais.
            </span>
            <span className="text-slate-400">Total: 3.772 posts</span>
          </div>
        </div>
      </div>

      {/* Content Volume Distribution & Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Pie Chart Volume */}
        <div className="lg:col-span-5 bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
          <div className="border-b border-slate-100 pb-3 mb-4">
            <h3 className="text-base font-bold text-slate-900">Distribuição do Volume de Publicações</h3>
            <p className="text-xs text-slate-500">Participação de cada formato sobre o total de 3.772 posts</p>
          </div>

          <div className="h-64 w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={3}
                  dataKey="value"
                  label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-pie-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value: number) => [`${value} posts`, 'Volume']}
                  contentStyle={{ backgroundColor: '#0F172A', borderRadius: '8px', color: '#FFF' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Strategic Executive Takeaways */}
        <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <Lightbulb className="w-5 h-5 text-amber-500" />
            <div>
              <h3 className="text-base font-bold text-slate-900">Direcionamentos Estratégicos C-Level</h3>
              <p className="text-xs text-slate-500">Insights práticos baseados na performance 2025–2026</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {EXECUTIVE_INSIGHTS.map((insight, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl border border-slate-100 bg-slate-50/70 hover:border-slate-300 transition-colors"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    {insight.badge}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400" />
                </div>
                <h4 className="text-xs font-bold text-slate-900 mb-1">{insight.title}</h4>
                <p className="text-[11px] text-slate-600 leading-relaxed">{insight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
