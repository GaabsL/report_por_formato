import React, { useState, useMemo } from 'react';
import { WEEKLY_DETAIL_DATA, MONTH_NAMES_MAP } from '../data/socialPerformanceData';
import { WeeklyFilterState, WeeklyData, FormatType } from '../types';
import {
  Search,
  Filter,
  ArrowUpDown,
  Download,
  Flame,
  Calendar,
  Layers,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Check,
  TrendingUp,
} from 'lucide-react';

export const TabWeeklyDetail: React.FC = () => {
  const [filters, setFilters] = useState<WeeklyFilterState>({
    year: 'ALL',
    month: 'ALL',
    format: 'ALL',
    search: '',
    sortBy: 'period',
    sortOrder: 'asc',
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState<number>(15);

  // Handle Filter Changes
  const handleYearChange = (year: WeeklyFilterState['year']) => {
    setFilters((prev) => ({ ...prev, year }));
    setCurrentPage(1);
  };

  const handleMonthChange = (month: WeeklyFilterState['month']) => {
    setFilters((prev) => ({ ...prev, month }));
    setCurrentPage(1);
  };

  const handleFormatChange = (format: WeeklyFilterState['format']) => {
    setFilters((prev) => ({ ...prev, format }));
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prev) => ({ ...prev, search: e.target.value }));
    setCurrentPage(1);
  };

  const resetFilters = () => {
    setFilters({
      year: 'ALL',
      month: 'ALL',
      format: 'ALL',
      search: '',
      sortBy: 'period',
      sortOrder: 'asc',
    });
    setCurrentPage(1);
  };

  // Sorting Toggle
  const toggleSort = (field: WeeklyFilterState['sortBy']) => {
    setFilters((prev) => ({
      ...prev,
      sortBy: field,
      sortOrder: prev.sortBy === field && prev.sortOrder === 'asc' ? 'desc' : 'asc',
    }));
  };

  // Filtered & Sorted Dataset
  const filteredData = useMemo(() => {
    return WEEKLY_DETAIL_DATA.filter((item) => {
      // Year Filter
      if (filters.year !== 'ALL' && item.year !== filters.year) return false;

      // Month Filter
      if (filters.month !== 'ALL' && item.month !== filters.month) return false;

      // Format Filter (Must have non-null value for selected format)
      if (filters.format !== 'ALL') {
        const fmtKey = filters.format.toLowerCase() as keyof WeeklyData;
        if (filters.format === 'Estático') {
          if (item.estatico === null || item.estatico === 0) return false;
        } else if (filters.format === 'Carrossel') {
          if (item.carrossel === null || item.carrossel === 0) return false;
        } else if (filters.format === 'Stories') {
          if (item.stories === null || item.stories === 0) return false;
        } else if (filters.format === 'TikTok') {
          if (item.tiktok === null || item.tiktok === 0) return false;
        } else if (filters.format === 'Reels') {
          if (item.reels === null || item.reels === 0) return false;
        }
      }

      // Search Query
      if (filters.search.trim() !== '') {
        const q = filters.search.toLowerCase();
        const matchesPeriod = item.period.toLowerCase().includes(q);
        const matchesWeek = item.week.toLowerCase().includes(q);
        const matchesYear = item.year.includes(q);
        const monthName = (MONTH_NAMES_MAP[item.month] || '').toLowerCase();
        const matchesMonthName = monthName.includes(q);
        const matchesChampion = (item.championFormat || '').toLowerCase().includes(q);

        if (!matchesPeriod && !matchesWeek && !matchesYear && !matchesMonthName && !matchesChampion) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      let valA: any = a[filters.sortBy as keyof WeeklyData];
      let valB: any = b[filters.sortBy as keyof WeeklyData];

      if (filters.sortBy === 'period') {
        // e.g. "01/2025" -> parse to compare numerically
        const [mA, yA] = a.period.split('/');
        const [mB, yB] = b.period.split('/');
        valA = Number(yA) * 100 + Number(mA) * 10 + Number(a.week.replace('Semana ', ''));
        valB = Number(yB) * 100 + Number(mB) * 10 + Number(b.week.replace('Semana ', ''));
      }

      if (valA === null || valA === undefined) valA = -1;
      if (valB === null || valB === undefined) valB = -1;

      if (valA < valB) return filters.sortOrder === 'asc' ? -1 : 1;
      if (valA > valB) return filters.sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  }, [filters]);

  // Statistics for Current Filter Selection
  const stats = useMemo(() => {
    if (filteredData.length === 0) {
      return { totalWeeks: 0, totalPosts: 0, avgEngagement: 0, peakWeek: null };
    }

    const totalPosts = filteredData.reduce((acc, curr) => acc + curr.totalPosts, 0);
    const sumAvg = filteredData.reduce((acc, curr) => acc + curr.averageEngagement, 0);
    const avgEngagement = Number((sumAvg / filteredData.length).toFixed(2));

    const peakWeek = [...filteredData].sort((a, b) => b.averageEngagement - a.averageEngagement)[0];

    return {
      totalWeeks: filteredData.length,
      totalPosts,
      avgEngagement,
      peakWeek,
    };
  }, [filteredData]);

  // Pagination Slice
  const totalPages = Math.ceil(filteredData.length / pageSize) || 1;
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredData.slice(start, start + pageSize);
  }, [filteredData, currentPage, pageSize]);

  // Format cell value helper
  const renderCellVal = (val: number | null) => {
    if (val === null || val === undefined) {
      return <span className="text-slate-300 font-normal">-</span>;
    }
    const str = val.toFixed(2).replace('.', ',');

    if (val >= 5.0) {
      return <span className="font-extrabold text-purple-700 bg-purple-100 px-2 py-0.5 rounded">{str}%</span>;
    }
    if (val >= 3.0) {
      return <span className="font-bold text-cyan-800 bg-cyan-50 px-2 py-0.5 rounded">{str}%</span>;
    }
    return <span className="text-slate-700 font-medium">{str}%</span>;
  };

  // CSV Export Handler
  const exportCSV = () => {
    const headers = ['Mês/Ano', 'Semana', 'Carrossel (%)', 'Estático (%)', 'Reels (%)', 'Stories (%)', 'TikTok (%)', 'Média Geral (%)', 'Qtd. Posts', 'Formato Campeão'];
    const rows = filteredData.map((row) => [
      row.period,
      row.week,
      row.carrossel !== null ? `${row.carrossel.toFixed(2)}%` : '-',
      row.estatico !== null ? `${row.estatico.toFixed(2)}%` : '-',
      row.reels !== null ? `${row.reels.toFixed(2)}%` : '-',
      row.stories !== null ? `${row.stories.toFixed(2)}%` : '-',
      row.tiktok !== null ? `${row.tiktok.toFixed(2)}%` : '-',
      `${row.averageEngagement.toFixed(2)}%`,
      row.totalPosts,
      row.championFormat || 'N/A',
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(';'), ...rows.map((e) => e.join(';'))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `desempenho_semanal_redes_sociais_${filters.year}_${filters.month}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header Title */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 mb-2">
            <Calendar className="w-3.5 h-3.5 text-emerald-600" />
            <span>Detalhamento Semanal 2025–2026 (Visão Completa)</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Consulta Semanal Mês a Mês</h2>
          <p className="text-sm text-slate-500 mt-1">
            Filtre por ano, mês, formato ou pesquise diretamente. Consulte todas as 87 semanas catalogadas.
          </p>
        </div>

        <button
          onClick={exportCSV}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-slate-900 text-white hover:bg-slate-800 transition-all cursor-pointer shadow-sm self-start md:self-auto"
        >
          <Download className="w-4 h-4 text-emerald-400" />
          <span>Exportar Dados em CSV</span>
        </button>
      </div>

      {/* Filter Toolbar Card */}
      <div className="bg-slate-900 rounded-2xl p-5 border border-slate-800 text-white shadow-lg space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-indigo-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Filtros Avançados
            </span>
          </div>

          <button
            onClick={resetFilters}
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Limpar Filtros</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {/* Year Filter */}
          <div>
            <label className="block text-[11px] font-bold text-slate-400 mb-1">
              Ano de Referência:
            </label>
            <select
              value={filters.year}
              onChange={(e) => handleYearChange(e.target.value as any)}
              className="w-full bg-slate-800 border border-slate-700 text-white text-xs rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
            >
              <option value="ALL">Todos os Anos (2025 & 2026)</option>
              <option value="2025">Ano 2025 (59 Semanas)</option>
              <option value="2026">Ano 2026 (28 Semanas)</option>
            </select>
          </div>

          {/* Month Filter */}
          <div>
            <label className="block text-[11px] font-bold text-slate-400 mb-1">
              Mês do Ano:
            </label>
            <select
              value={filters.month}
              onChange={(e) => handleMonthChange(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 text-white text-xs rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
            >
              <option value="ALL">Todos os Meses</option>
              <option value="01">01 - Janeiro</option>
              <option value="02">02 - Fevereiro</option>
              <option value="03">03 - Março</option>
              <option value="04">04 - Abril</option>
              <option value="05">05 - Maio</option>
              <option value="06">06 - Junho</option>
              <option value="07">07 - Julho (2025)</option>
              <option value="08">08 - Agosto (2025)</option>
              <option value="09">09 - Setembro (2025)</option>
              <option value="10">10 - Outubro (2025)</option>
              <option value="11">11 - Novembro (2025)</option>
              <option value="12">12 - Dezembro (2025)</option>
            </select>
          </div>

          {/* Format Highlight Filter */}
          <div>
            <label className="block text-[11px] font-bold text-slate-400 mb-1">
              Formato com Conteúdo:
            </label>
            <select
              value={filters.format}
              onChange={(e) => handleFormatChange(e.target.value as any)}
              className="w-full bg-slate-800 border border-slate-700 text-white text-xs rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
            >
              <option value="ALL">Todos os Formatos</option>
              <option value="Stories">Stories (Instagram)</option>
              <option value="TikTok">Vídeo - TikTok</option>
              <option value="Reels">Reels</option>
              <option value="Estático">Estático</option>
              <option value="Carrossel">Carrossel</option>
            </select>
          </div>

          {/* Search Box */}
          <div>
            <label className="block text-[11px] font-bold text-slate-400 mb-1">
              Busca Rápida:
            </label>
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Ex: Semana 4, 11/2025..."
                value={filters.search}
                onChange={handleSearchChange}
                className="w-full bg-slate-800 border border-slate-700 text-white text-xs rounded-xl pl-9 pr-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Filtered Context Metrics Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="bg-white rounded-xl p-3.5 border border-slate-200 shadow-sm">
          <span className="text-[10px] text-slate-400 uppercase font-bold block">Semanas Exibidas</span>
          <span className="text-xl font-extrabold text-slate-900">{stats.totalWeeks} Semanas</span>
        </div>

        <div className="bg-white rounded-xl p-3.5 border border-slate-200 shadow-sm">
          <span className="text-[10px] text-slate-400 uppercase font-bold block">Volume no Filtro</span>
          <span className="text-xl font-extrabold text-slate-900">{stats.totalPosts.toLocaleString('pt-BR')} Posts</span>
        </div>

        <div className="bg-white rounded-xl p-3.5 border border-slate-200 shadow-sm">
          <span className="text-[10px] text-slate-400 uppercase font-bold block">Média do Período</span>
          <span className="text-xl font-extrabold text-emerald-600">
            {stats.avgEngagement.toString().replace('.', ',')}%
          </span>
        </div>

        <div className="bg-purple-50 rounded-xl p-3.5 border border-purple-200 shadow-sm">
          <span className="text-[10px] text-purple-700 uppercase font-bold block">Pico Semanal da Seleção</span>
          <span className="text-base font-extrabold text-purple-950 block truncate">
            {stats.peakWeek
              ? `${stats.peakWeek.averageEngagement.toString().replace('.', ',')}% (${stats.peakWeek.period} ${stats.peakWeek.week})`
              : 'N/A'}
          </span>
        </div>
      </div>

      {/* Main Interactive Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="text-xs text-slate-500 font-medium">
            Exibindo <strong className="text-slate-900">{paginatedData.length}</strong> de{' '}
            <strong className="text-slate-900">{filteredData.length}</strong> registros
          </div>

          {/* Page Size Selector */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500">Linhas por página:</span>
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="bg-slate-50 border border-slate-200 text-xs rounded-lg px-2 py-1 text-slate-700 focus:outline-none"
            >
              <option value={15}>15</option>
              <option value={30}>30</option>
              <option value={50}>50</option>
              <option value={100}>Todas ({filteredData.length})</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-extrabold uppercase tracking-wider text-[10px]">
                <th
                  onClick={() => toggleSort('period')}
                  className="py-3 px-3 cursor-pointer hover:bg-slate-100 transition-colors"
                >
                  <div className="flex items-center gap-1">
                    <span>Mês/Ano</span>
                    <ArrowUpDown className="w-3 h-3 text-slate-400" />
                  </div>
                </th>
                <th className="py-3 px-3">Semana</th>
                <th className="py-3 px-3 text-center">Carrossel</th>
                <th className="py-3 px-3 text-center">Estático</th>
                <th className="py-3 px-3 text-center">Reels</th>
                <th className="py-3 px-3 text-center">Stories</th>
                <th className="py-3 px-3 text-center">TikTok</th>
                <th
                  onClick={() => toggleSort('averageEngagement')}
                  className="py-3 px-3 text-right cursor-pointer hover:bg-slate-100 transition-colors"
                >
                  <div className="flex items-center justify-end gap-1">
                    <span>Média Geral</span>
                    <ArrowUpDown className="w-3 h-3 text-slate-400" />
                  </div>
                </th>
                <th
                  onClick={() => toggleSort('totalPosts')}
                  className="py-3 px-3 text-right cursor-pointer hover:bg-slate-100 transition-colors"
                >
                  <div className="flex items-center justify-end gap-1">
                    <span>Qtd. Posts</span>
                    <ArrowUpDown className="w-3 h-3 text-slate-400" />
                  </div>
                </th>
                <th className="py-3 px-3 text-center">Campeão</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-800">
              {paginatedData.length === 0 ? (
                <tr>
                  <td colSpan={10} className="py-12 text-center text-slate-400">
                    Nenhum resultado encontrado para os filtros selecionados.
                  </td>
                </tr>
              ) : (
                paginatedData.map((row) => {
                  const isHighWeek = row.averageEngagement >= 4.0;
                  return (
                    <tr
                      key={row.id}
                      className={`hover:bg-slate-50 transition-colors ${
                        isHighWeek ? 'bg-purple-50/40 font-semibold' : ''
                      }`}
                    >
                      <td className="py-2.5 px-3 font-bold text-slate-900 whitespace-nowrap">{row.period}</td>
                      <td className="py-2.5 px-3 text-slate-600 whitespace-nowrap">{row.week}</td>
                      <td className="py-2.5 px-3 text-center">{renderCellVal(row.carrossel)}</td>
                      <td className="py-2.5 px-3 text-center">{renderCellVal(row.estatico)}</td>
                      <td className="py-2.5 px-3 text-center">{renderCellVal(row.reels)}</td>
                      <td className="py-2.5 px-3 text-center">{renderCellVal(row.stories)}</td>
                      <td className="py-2.5 px-3 text-center">{renderCellVal(row.tiktok)}</td>
                      <td className="py-2.5 px-3 text-right whitespace-nowrap">
                        <span
                          className={`inline-block px-2 py-0.5 rounded-full text-xs font-black ${
                            isHighWeek
                              ? 'bg-purple-600 text-white shadow-xs'
                              : row.averageEngagement >= 2.73
                              ? 'bg-emerald-100 text-emerald-800'
                              : 'bg-slate-100 text-slate-700'
                          }`}
                        >
                          {row.averageEngagement.toFixed(2).replace('.', ',')}%
                        </span>
                      </td>
                      <td className="py-2.5 px-3 text-right font-bold text-slate-900 whitespace-nowrap">
                        {row.totalPosts}
                      </td>
                      <td className="py-2.5 px-3 text-center whitespace-nowrap">
                        <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700">
                          {row.championFormat || 'N/A'}
                        </span>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Bar */}
        {totalPages > 1 && (
          <div className="p-4 border-t border-slate-100 flex items-center justify-between bg-slate-50">
            <div className="text-xs text-slate-500">
              Página <strong className="text-slate-900">{currentPage}</strong> de{' '}
              <strong className="text-slate-900">{totalPages}</strong>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="p-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed text-slate-700 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="p-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed text-slate-700 cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
