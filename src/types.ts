export type FormatType = 'Stories' | 'TikTok' | 'Reels' | 'Estático' | 'Carrossel';

export interface FormatOverview {
  format: FormatType;
  label: string;
  posts: number;
  engagement: number; // percentage e.g. 4.41
  rank: number;
  color: string;
  iconName: string;
}

export interface NetworkFormatDetail {
  format: string;
  posts: number;
  engagement: number;
}

export interface NetworkDetail {
  id: string;
  name: string;
  subtotalPosts: number;
  subtotalEngagement: number;
  color: string;
  badge: string;
  formats: NetworkFormatDetail[];
}

export interface MonthlyData {
  period: string; // e.g. "01/2025"
  month: string; // e.g. "01"
  year: '2025' | '2026';
  monthName: string; // e.g. "Janeiro"
  Stories: number;
  TikTok: number;
  Reels: number;
  Estatico: number; // Estático
  Carrossel: number;
  globalAvg?: number;
}

export interface WeeklyData {
  id: string;
  period: string; // e.g. "01/2025"
  year: '2025' | '2026';
  month: string; // "01" .. "12"
  week: string; // "Semana 1" .. "Semana 5"
  carrossel: number | null; // e.g. 0.66 or null (-)
  estatico: number | null;
  reels: number | null;
  stories: number | null;
  tiktok: number | null;
  averageEngagement: number;
  totalPosts: number;
  championFormat?: string;
}

export interface WeeklyFilterState {
  year: 'ALL' | '2025' | '2026';
  month: 'ALL' | string;
  format: 'ALL' | FormatType;
  search: string;
  sortBy: 'period' | 'averageEngagement' | 'totalPosts' | 'stories' | 'tiktok';
  sortOrder: 'asc' | 'desc';
}
