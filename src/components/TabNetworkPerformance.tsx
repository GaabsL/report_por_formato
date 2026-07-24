import React from 'react';
import { NETWORK_PERFORMANCE, TOTAL_POSTS_GLOBAL } from '../data/socialPerformanceData';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Legend,
} from 'recharts';
import { Share2, Video, Film, Image, Layers, Sparkles, Facebook, Instagram, ArrowUpRight } from 'lucide-react';

export const TabNetworkPerformance: React.FC = () => {
  // Chart data comparing networks subtotals
  const networkComparisonData = NETWORK_PERFORMANCE.map((net) => ({
    name: net.name,
    engajamento: net.subtotalEngagement,
    posts: net.subtotalPosts,
    share: Number(((net.subtotalPosts / TOTAL_POSTS_GLOBAL) * 100).toFixed(1)),
    color: net.color,
  }));

  // Detailed breakdown chart data
  const formatBreakdownData = [
    { network: 'Instagram Stories', format: 'Stories', engagement: 4.41, posts: 1289 },
    { network: 'TikTok', format: 'Vídeo - TikTok', engagement: 3.49, posts: 648 },
    { network: 'Instagram Feed', format: 'Reels', engagement: 1.83, posts: 710 },
    { network: 'Facebook', format: 'Reels', engagement: 1.70, posts: 373 },
    { network: 'Facebook', format: 'Estático', engagement: 1.50, posts: 274 },
    { network: 'Instagram Feed', format: 'Estático', engagement: 1.43, posts: 178 },
    { network: 'Instagram Feed', format: 'Carrossel', engagement: 1.28, posts: 181 },
    { network: 'Facebook', format: 'Carrossel', engagement: 1.26, posts: 119 },
  ];

  const getNetworkIcon = (id: string) => {
    switch (id) {
      case 'facebook':
        return <Facebook className="w-5 h-5 text-blue-600" />;
      case 'insta_stories':
      case 'insta_feed':
        return <Instagram className="w-5 h-5 text-pink-600" />;
      case 'tiktok':
        return <Video className="w-5 h-5 text-slate-900" />;
      default:
        return <Share2 className="w-5 h-5 text-indigo-600" />;
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* 4 Cards Grid - 1 per Social Network */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {NETWORK_PERFORMANCE.map((net) => {
          const isWinner = net.id === 'insta_stories';
          const isRunnerUp = net.id === 'tiktok';
          const shareOfTotal = ((net.subtotalPosts / TOTAL_POSTS_GLOBAL) * 100).toFixed(1);

          return (
            <div
              key={net.id}
              className={`rounded-2xl p-6 border transition-all ${
                isWinner
                  ? 'bg-gradient-to-br from-purple-50/90 via-white to-pink-50/40 border-purple-300 shadow-md'
                  : isRunnerUp
                  ? 'bg-gradient-to-br from-cyan-50/80 via-white to-slate-50 border-cyan-200 shadow-sm'
                  : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-100">{getNetworkIcon(net.id)}</div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{net.name}</h3>
                    <span className="text-xs text-slate-500">
                      {net.subtotalPosts.toLocaleString('pt-BR')} posts ({shareOfTotal}% do total geral)
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span
                    className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold ${
                      isWinner
                        ? 'bg-purple-600 text-white shadow-sm'
                        : isRunnerUp
                        ? 'bg-cyan-600 text-white'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {net.badge}
                  </span>
                  <div className="text-2xl font-black text-slate-900 mt-1">
                    {net.subtotalEngagement.toString().replace('.', ',')}%
                  </div>
                </div>
              </div>

              {/* Format breakdown list inside network */}
              <div className="space-y-3">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  Formatos Veiculados na Rede:
                </span>
                {net.formats.map((fmt, idx) => {
                  const percentOfSubtotal = ((fmt.posts / net.subtotalPosts) * 100).toFixed(0);
                  return (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-50/80 border border-slate-100"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-indigo-600" />
                        <div>
                          <span className="text-xs font-bold text-slate-900">{fmt.format}</span>
                          <span className="text-[11px] text-slate-500 block">
                            {fmt.posts} posts ({percentOfSubtotal}% do canal)
                          </span>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="text-sm font-extrabold text-slate-900">
                          {fmt.engagement.toString().replace('.', ',')}%
                        </span>
                        <span className="text-[10px] text-slate-500 block">Engajamento Médio</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Network Subtotals Chart */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <div className="border-b border-slate-100 pb-3 mb-4">
            <h3 className="text-base font-bold text-slate-900">Engajamento Médio Subtotal por Canal (%)</h3>
            <p className="text-xs text-slate-500">Média geral agregada de cada rede social</p>
          </div>

          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={networkComparisonData} margin={{ top: 15, right: 20, left: -10, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#475569' }} />
                <YAxis tick={{ fontSize: 11, fill: '#475569' }} unit="%" domain={[0, 5]} />
                <Tooltip
                  formatter={(value: number) => [`${value.toString().replace('.', ',')}%`, 'Engajamento Médio']}
                  contentStyle={{ backgroundColor: '#0F172A', borderRadius: '8px', color: '#FFF' }}
                />
                <Bar dataKey="engajamento" radius={[6, 6, 0, 0]} barSize={48}>
                  {networkComparisonData.map((entry, index) => (
                    <Cell key={`cell-net-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Channel Matrix Table */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-5 shadow-sm flex flex-col justify-between">
          <div>
            <div className="border-b border-slate-100 pb-3 mb-4">
              <h3 className="text-base font-bold text-slate-900">Matriz de Formatos vs Redes</h3>
              <p className="text-xs text-slate-500">Visão consolidada de todas as 8 combinações</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
                    <th className="py-2 px-2">Canal</th>
                    <th className="py-2 px-2">Formato</th>
                    <th className="py-2 px-2 text-right">Posts</th>
                    <th className="py-2 px-2 text-right">Engaj. %</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                  {formatBreakdownData.map((item, index) => (
                    <tr
                      key={index}
                      className={item.engagement >= 3.0 ? 'bg-purple-50/50 font-semibold' : 'hover:bg-slate-50'}
                    >
                      <td className="py-2 px-2 text-slate-900">{item.network}</td>
                      <td className="py-2 px-2 text-slate-600">{item.format}</td>
                      <td className="py-2 px-2 text-right">{item.posts}</td>
                      <td className="py-2 px-2 text-right text-slate-900 font-bold">
                        {item.engagement.toString().replace('.', ',')}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};
