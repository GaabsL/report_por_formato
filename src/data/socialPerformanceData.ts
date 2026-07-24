import { FormatOverview, NetworkDetail, MonthlyData, WeeklyData } from '../types';

export const OVERVIEW_BY_FORMAT: FormatOverview[] = [
  {
    format: 'Stories',
    label: 'Instagram Stories',
    posts: 1289,
    engagement: 4.41,
    rank: 1,
    color: '#833AB4', // Instagram Purple/Gradient
    iconName: 'Flame',
  },
  {
    format: 'TikTok',
    label: 'Vídeo - TikTok',
    posts: 648,
    engagement: 3.49,
    rank: 2,
    color: '#00F2FE', // TikTok Cyan
    iconName: 'Video',
  },
  {
    format: 'Reels',
    label: 'Instagram & FB Reels',
    posts: 1083,
    engagement: 1.78,
    rank: 3,
    color: '#E1306C', // Instagram Rose/Pink
    iconName: 'Film',
  },
  {
    format: 'Estático',
    label: 'Post Estático',
    posts: 452,
    engagement: 1.47,
    rank: 4,
    color: '#3B82F6', // Blue
    iconName: 'Image',
  },
  {
    format: 'Carrossel',
    label: 'Post Carrossel',
    posts: 300,
    engagement: 1.27,
    rank: 5,
    color: '#10B981', // Emerald
    iconName: 'Layers',
  },
];

export const TOTAL_POSTS_GLOBAL = 3772;
export const GLOBAL_AVERAGE_ENGAGEMENT = 2.73;

export const NETWORK_PERFORMANCE: NetworkDetail[] = [
  {
    id: 'facebook',
    name: 'Facebook',
    subtotalPosts: 766,
    subtotalEngagement: 1.56,
    color: '#1877F2',
    badge: 'Facebook Total',
    formats: [
      { format: 'Reels', posts: 373, engagement: 1.70 },
      { format: 'Estático', posts: 274, engagement: 1.50 },
      { format: 'Carrossel', posts: 119, engagement: 1.26 },
    ],
  },
  {
    id: 'insta_feed',
    name: 'Instagram Feed',
    subtotalPosts: 1069,
    subtotalEngagement: 1.67,
    color: '#E1306C',
    badge: 'Feed Main',
    formats: [
      { format: 'Reels', posts: 710, engagement: 1.83 },
      { format: 'Carrossel', posts: 181, engagement: 1.28 },
      { format: 'Estático', posts: 178, engagement: 1.43 },
    ],
  },
  {
    id: 'insta_stories',
    name: 'Instagram Stories',
    subtotalPosts: 1289,
    subtotalEngagement: 4.41,
    color: '#833AB4',
    badge: '1º Campeão de Engajamento',
    formats: [
      { format: 'Stories', posts: 1289, engagement: 4.41 },
    ],
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    subtotalPosts: 648,
    subtotalEngagement: 3.49,
    color: '#000000',
    badge: '2º Maior Engajamento',
    formats: [
      { format: 'Vídeo - TikTok', posts: 648, engagement: 3.49 },
    ],
  },
];

export const MONTHLY_EVOLUTION_DATA: MonthlyData[] = [
  { period: '01/2025', month: '01', year: '2025', monthName: 'Janeiro 2025', Stories: 3.03, TikTok: 2.54, Reels: 1.09, Estatico: 0.77, Carrossel: 0.73, globalAvg: 1.63 },
  { period: '02/2025', month: '02', year: '2025', monthName: 'Fevereiro 2025', Stories: 3.60, TikTok: 2.42, Reels: 1.84, Estatico: 1.81, Carrossel: 1.11, globalAvg: 2.16 },
  { period: '03/2025', month: '03', year: '2025', monthName: 'Março 2025', Stories: 5.29, TikTok: 2.61, Reels: 1.36, Estatico: 0.79, Carrossel: 1.06, globalAvg: 2.22 },
  { period: '04/2025', month: '04', year: '2025', monthName: 'Abril 2025', Stories: 4.98, TikTok: 1.63, Reels: 1.46, Estatico: 1.86, Carrossel: 1.86, globalAvg: 2.36 },
  { period: '05/2025', month: '05', year: '2025', monthName: 'Maio 2025', Stories: 3.82, TikTok: 3.14, Reels: 1.72, Estatico: 2.14, Carrossel: 1.20, globalAvg: 2.40 },
  { period: '06/2025', month: '06', year: '2025', monthName: 'Junho 2025', Stories: 5.00, TikTok: 4.23, Reels: 2.92, Estatico: 1.02, Carrossel: 2.46, globalAvg: 3.13 },
  { period: '07/2025', month: '07', year: '2025', monthName: 'Julho 2025', Stories: 4.15, TikTok: 4.40, Reels: 2.39, Estatico: 1.53, Carrossel: 1.29, globalAvg: 2.75 },
  { period: '08/2025', month: '08', year: '2025', monthName: 'Agosto 2025', Stories: 5.23, TikTok: 3.86, Reels: 2.55, Estatico: 1.60, Carrossel: 1.08, globalAvg: 2.86 },
  { period: '09/2025', month: '09', year: '2025', monthName: 'Setembro 2025', Stories: 8.16, TikTok: 4.13, Reels: 2.67, Estatico: 2.51, Carrossel: 0.79, globalAvg: 3.65 },
  { period: '10/2025', month: '10', year: '2025', monthName: 'Outubro 2025', Stories: 1.94, TikTok: 3.88, Reels: 1.90, Estatico: 1.35, Carrossel: 2.30, globalAvg: 2.27 },
  { period: '11/2025', month: '11', year: '2025', monthName: 'Novembro 2025', Stories: 8.56, TikTok: 4.00, Reels: 2.94, Estatico: 1.63, Carrossel: 1.14, globalAvg: 3.65 },
  { period: '12/2025', month: '12', year: '2025', monthName: 'Dezembro 2025', Stories: 4.04, TikTok: 3.93, Reels: 1.75, Estatico: 0.94, Carrossel: 1.33, globalAvg: 2.40 },
  { period: '01/2026', month: '01', year: '2026', monthName: 'Janeiro 2026', Stories: 6.04, TikTok: 4.67, Reels: 1.20, Estatico: 0.95, Carrossel: 0.81, globalAvg: 2.73 },
  { period: '02/2026', month: '02', year: '2026', monthName: 'Fevereiro 2026', Stories: 4.80, TikTok: 3.71, Reels: 1.24, Estatico: 2.15, Carrossel: 2.17, globalAvg: 2.81 },
  { period: '03/2026', month: '03', year: '2026', monthName: 'Março 2026', Stories: 5.61, TikTok: 4.02, Reels: 1.69, Estatico: 1.66, Carrossel: 1.01, globalAvg: 2.80 },
  { period: '04/2026', month: '04', year: '2026', monthName: 'Abril 2026', Stories: 6.83, TikTok: 3.61, Reels: 1.43, Estatico: 0.88, Carrossel: 0.89, globalAvg: 2.73 },
  { period: '05/2026', month: '05', year: '2026', monthName: 'Maio 2026', Stories: 4.51, TikTok: 2.74, Reels: 1.17, Estatico: 1.06, Carrossel: 0.74, globalAvg: 2.04 },
  { period: '06/2026', month: '06', year: '2026', monthName: 'Junho 2026', Stories: 2.06, TikTok: 2.78, Reels: 1.30, Estatico: 1.63, Carrossel: 1.34, globalAvg: 1.82 },
];

export const MONTH_NAMES_MAP: Record<string, string> = {
  '01': 'Janeiro',
  '02': 'Fevereiro',
  '03': 'Março',
  '04': 'Abril',
  '05': 'Maio',
  '06': 'Junho',
  '07': 'Julho',
  '08': 'Agosto',
  '09': 'Setembro',
  '10': 'Outubro',
  '11': 'Novembro',
  '12': 'Dezembro',
};

export const WEEKLY_DETAIL_DATA: WeeklyData[] = [
  // 2025
  { id: '2025-01-w1', period: '01/2025', year: '2025', month: '01', week: 'Semana 1', carrossel: 0.66, estatico: 0.93, reels: 1.21, stories: 2.58, tiktok: 3.38, averageEngagement: 1.91, totalPosts: 58, championFormat: 'TikTok' },
  { id: '2025-01-w2', period: '01/2025', year: '2025', month: '01', week: 'Semana 2', carrossel: 0.71, estatico: 0.38, reels: 1.02, stories: 4.58, tiktok: 2.45, averageEngagement: 2.42, totalPosts: 42, championFormat: 'Stories' },
  { id: '2025-01-w3', period: '01/2025', year: '2025', month: '01', week: 'Semana 3', carrossel: 0.85, estatico: 0.84, reels: 0.76, stories: 2.47, tiktok: 2.41, averageEngagement: 1.71, totalPosts: 58, championFormat: 'Stories' },
  { id: '2025-01-w4', period: '01/2025', year: '2025', month: '01', week: 'Semana 4', carrossel: 0.73, estatico: 0.83, reels: 1.05, stories: 2.20, tiktok: 2.47, averageEngagement: 1.73, totalPosts: 59, championFormat: 'TikTok' },
  { id: '2025-01-w5', period: '01/2025', year: '2025', month: '01', week: 'Semana 5', carrossel: null, estatico: null, reels: 1.80, stories: 9.76, tiktok: 1.20, averageEngagement: 3.80, totalPosts: 15, championFormat: 'Stories' },

  { id: '2025-02-w1', period: '02/2025', year: '2025', month: '02', week: 'Semana 1', carrossel: 0.97, estatico: 1.59, reels: 1.72, stories: 4.89, tiktok: 2.75, averageEngagement: 2.95, totalPosts: 42, championFormat: 'Stories' },
  { id: '2025-02-w2', period: '02/2025', year: '2025', month: '02', week: 'Semana 2', carrossel: 1.08, estatico: 1.39, reels: 2.20, stories: 2.44, tiktok: 3.13, averageEngagement: 2.22, totalPosts: 43, championFormat: 'TikTok' },
  { id: '2025-02-w3', period: '02/2025', year: '2025', month: '02', week: 'Semana 3', carrossel: 0.96, estatico: 0.87, reels: 2.28, stories: 2.78, tiktok: 1.95, averageEngagement: 2.26, totalPosts: 50, championFormat: 'Stories' },
  { id: '2025-02-w4', period: '02/2025', year: '2025', month: '02', week: 'Semana 4', carrossel: 1.28, estatico: 2.49, reels: 1.28, stories: 4.67, tiktok: 2.10, averageEngagement: 2.63, totalPosts: 56, championFormat: 'Stories' },

  { id: '2025-03-w1', period: '03/2025', year: '2025', month: '03', week: 'Semana 1', carrossel: 0.72, estatico: 0.86, reels: 1.36, stories: 4.70, tiktok: 3.35, averageEngagement: 2.86, totalPosts: 54, championFormat: 'Stories' },
  { id: '2025-03-w2', period: '03/2025', year: '2025', month: '03', week: 'Semana 2', carrossel: 1.28, estatico: 0.75, reels: 1.33, stories: 5.05, tiktok: 2.63, averageEngagement: 2.89, totalPosts: 53, championFormat: 'Stories' },
  { id: '2025-03-w3', period: '03/2025', year: '2025', month: '03', week: 'Semana 3', carrossel: 1.21, estatico: 0.62, reels: 1.78, stories: 5.91, tiktok: 2.41, averageEngagement: 2.76, totalPosts: 48, championFormat: 'Stories' },
  { id: '2025-03-w4', period: '03/2025', year: '2025', month: '03', week: 'Semana 4', carrossel: 0.71, estatico: 0.87, reels: 1.03, stories: 6.02, tiktok: 2.20, averageEngagement: 2.67, totalPosts: 47, championFormat: 'Stories' },
  { id: '2025-03-w5', period: '03/2025', year: '2025', month: '03', week: 'Semana 5', carrossel: 0.97, estatico: 0.89, reels: 0.93, stories: 5.22, tiktok: 1.88, averageEngagement: 2.76, totalPosts: 18, championFormat: 'Stories' },

  { id: '2025-04-w1', period: '04/2025', year: '2025', month: '04', week: 'Semana 1', carrossel: 1.06, estatico: 1.59, reels: 1.56, stories: 6.63, tiktok: 2.23, averageEngagement: 3.31, totalPosts: 51, championFormat: 'Stories' },
  { id: '2025-04-w2', period: '04/2025', year: '2025', month: '04', week: 'Semana 2', carrossel: 2.45, estatico: 1.30, reels: 1.07, stories: 4.88, tiktok: 1.40, averageEngagement: 2.59, totalPosts: 61, championFormat: 'Stories' },
  { id: '2025-04-w3', period: '04/2025', year: '2025', month: '04', week: 'Semana 3', carrossel: 0.82, estatico: 3.12, reels: 1.64, stories: 4.91, tiktok: 1.54, averageEngagement: 2.58, totalPosts: 58, championFormat: 'Stories' },
  { id: '2025-04-w4', period: '04/2025', year: '2025', month: '04', week: 'Semana 4', carrossel: 4.43, estatico: 2.22, reels: 1.34, stories: 3.73, tiktok: 1.54, averageEngagement: 2.64, totalPosts: 43, championFormat: 'Carrossel' },
  { id: '2025-04-w5', period: '04/2025', year: '2025', month: '04', week: 'Semana 5', carrossel: 1.70, estatico: 1.49, reels: 2.83, stories: 4.41, tiktok: 0.89, averageEngagement: 2.87, totalPosts: 15, championFormat: 'Stories' },

  { id: '2025-05-w1', period: '05/2025', year: '2025', month: '05', week: 'Semana 1', carrossel: 0.76, estatico: 0.81, reels: 1.28, stories: 3.65, tiktok: 3.09, averageEngagement: 2.34, totalPosts: 47, championFormat: 'Stories' },
  { id: '2025-05-w2', period: '05/2025', year: '2025', month: '05', week: 'Semana 2', carrossel: 1.28, estatico: 0.28, reels: 2.24, stories: 3.89, tiktok: 3.12, averageEngagement: 2.78, totalPosts: 48, championFormat: 'Stories' },
  { id: '2025-05-w3', period: '05/2025', year: '2025', month: '05', week: 'Semana 3', carrossel: 1.16, estatico: 1.70, reels: 1.43, stories: 3.39, tiktok: 2.38, averageEngagement: 2.33, totalPosts: 39, championFormat: 'Stories' },
  { id: '2025-05-w4', period: '05/2025', year: '2025', month: '05', week: 'Semana 4', carrossel: 2.04, estatico: 4.83, reels: 1.72, stories: 3.20, tiktok: 4.00, averageEngagement: 3.03, totalPosts: 47, championFormat: 'Estático' },
  { id: '2025-05-w5', period: '05/2025', year: '2025', month: '05', week: 'Semana 5', carrossel: 0.80, estatico: 0.78, reels: 0.88, stories: 7.86, tiktok: 3.06, averageEngagement: 3.62, totalPosts: 15, championFormat: 'Stories' },

  { id: '2025-06-w1', period: '06/2025', year: '2025', month: '06', week: 'Semana 1', carrossel: 1.32, estatico: 0.79, reels: 2.94, stories: 8.05, tiktok: 2.94, averageEngagement: 3.73, totalPosts: 49, championFormat: 'Stories' },
  { id: '2025-06-w2', period: '06/2025', year: '2025', month: '06', week: 'Semana 2', carrossel: 1.27, estatico: 0.53, reels: 1.43, stories: 3.29, tiktok: 4.53, averageEngagement: 2.49, totalPosts: 51, championFormat: 'TikTok' },
  { id: '2025-06-w3', period: '06/2025', year: '2025', month: '06', week: 'Semana 3', carrossel: 2.83, estatico: 2.52, reels: 3.41, stories: 3.81, tiktok: 5.01, averageEngagement: 3.71, totalPosts: 49, championFormat: 'TikTok' },
  { id: '2025-06-w4', period: '06/2025', year: '2025', month: '06', week: 'Semana 4', carrossel: 7.03, estatico: 0.67, reels: 3.09, stories: 5.71, tiktok: 4.12, averageEngagement: 4.21, totalPosts: 46, championFormat: 'Carrossel' },
  { id: '2025-06-w5', period: '06/2025', year: '2025', month: '06', week: 'Semana 5', carrossel: 0.93, estatico: 0.43, reels: 3.37, stories: 5.47, tiktok: 4.02, averageEngagement: 3.36, totalPosts: 13, championFormat: 'Stories' },

  { id: '2025-07-w1', period: '07/2025', year: '2025', month: '07', week: 'Semana 1', carrossel: 1.20, estatico: 1.07, reels: 3.84, stories: 6.22, tiktok: 4.87, averageEngagement: 3.75, totalPosts: 42, championFormat: 'Stories' },
  { id: '2025-07-w2', period: '07/2025', year: '2025', month: '07', week: 'Semana 2', carrossel: 1.68, estatico: 2.97, reels: 2.81, stories: 3.22, tiktok: 4.79, averageEngagement: 3.10, totalPosts: 47, championFormat: 'TikTok' },
  { id: '2025-07-w3', period: '07/2025', year: '2025', month: '07', week: 'Semana 3', carrossel: 1.42, estatico: 1.18, reels: 1.66, stories: 4.01, tiktok: 4.02, averageEngagement: 2.87, totalPosts: 53, championFormat: 'TikTok' },
  { id: '2025-07-w4', period: '07/2025', year: '2025', month: '07', week: 'Semana 4', carrossel: 1.13, estatico: 1.34, reels: 1.78, stories: 2.70, tiktok: 5.04, averageEngagement: 2.53, totalPosts: 60, championFormat: 'TikTok' },
  { id: '2025-07-w5', period: '07/2025', year: '2025', month: '07', week: 'Semana 5', carrossel: 0.77, estatico: 0.59, reels: 2.33, stories: 10.79, tiktok: 2.49, averageEngagement: 3.72, totalPosts: 20, championFormat: 'Stories' },

  { id: '2025-08-w1', period: '08/2025', year: '2025', month: '08', week: 'Semana 1', carrossel: 0.97, estatico: 1.99, reels: 2.29, stories: 5.90, tiktok: 3.72, averageEngagement: 3.67, totalPosts: 48, championFormat: 'Stories' },
  { id: '2025-08-w2', period: '08/2025', year: '2025', month: '08', week: 'Semana 2', carrossel: 0.93, estatico: 1.20, reels: 2.64, stories: 5.72, tiktok: 4.24, averageEngagement: 3.54, totalPosts: 49, championFormat: 'Stories' },
  { id: '2025-08-w3', period: '08/2025', year: '2025', month: '08', week: 'Semana 3', carrossel: 1.53, estatico: 1.62, reels: 2.78, stories: 4.28, tiktok: 4.45, averageEngagement: 3.25, totalPosts: 42, championFormat: 'TikTok' },
  { id: '2025-08-w4', period: '08/2025', year: '2025', month: '08', week: 'Semana 4', carrossel: 0.95, estatico: 2.08, reels: 3.08, stories: 4.71, tiktok: 3.36, averageEngagement: 3.05, totalPosts: 44, championFormat: 'Stories' },
  { id: '2025-08-w5', period: '08/2025', year: '2025', month: '08', week: 'Semana 5', carrossel: 0.77, estatico: 0.92, reels: 1.44, stories: 5.31, tiktok: 3.25, averageEngagement: 2.94, totalPosts: 21, championFormat: 'Stories' },

  { id: '2025-09-w1', period: '09/2025', year: '2025', month: '09', week: 'Semana 1', carrossel: 0.41, estatico: 3.58, reels: 2.62, stories: 12.94, tiktok: 4.52, averageEngagement: 5.46, totalPosts: 37, championFormat: 'Stories' },
  { id: '2025-09-w2', period: '09/2025', year: '2025', month: '09', week: 'Semana 2', carrossel: 0.66, estatico: 1.29, reels: 2.05, stories: 7.22, tiktok: 4.43, averageEngagement: 4.07, totalPosts: 54, championFormat: 'Stories' },
  { id: '2025-09-w3', period: '09/2025', year: '2025', month: '09', week: 'Semana 3', carrossel: 0.68, estatico: 1.92, reels: 4.10, stories: 3.97, tiktok: 3.86, averageEngagement: 3.13, totalPosts: 40, championFormat: 'Reels' },
  { id: '2025-09-w4', period: '09/2025', year: '2025', month: '09', week: 'Semana 4', carrossel: 1.00, estatico: 7.36, reels: 2.27, stories: 9.22, tiktok: 3.43, averageEngagement: 4.38, totalPosts: 32, championFormat: 'Stories' },
  { id: '2025-09-w5', period: '09/2025', year: '2025', month: '09', week: 'Semana 5', carrossel: null, estatico: null, reels: 3.08, stories: 11.54, tiktok: 4.08, averageEngagement: 6.85, totalPosts: 14, championFormat: 'Stories' },

  { id: '2025-10-w1', period: '10/2025', year: '2025', month: '10', week: 'Semana 1', carrossel: 0.61, estatico: 1.33, reels: 2.59, stories: 2.48, tiktok: 4.11, averageEngagement: 2.64, totalPosts: 85, championFormat: 'TikTok' },
  { id: '2025-10-w2', period: '10/2025', year: '2025', month: '10', week: 'Semana 2', carrossel: 1.08, estatico: 1.64, reels: 1.75, stories: 1.22, tiktok: 3.99, averageEngagement: 1.56, totalPosts: 66, championFormat: 'TikTok' },
  { id: '2025-10-w3', period: '10/2025', year: '2025', month: '10', week: 'Semana 3', carrossel: 5.69, estatico: 0.86, reels: 1.25, stories: 1.19, tiktok: 4.11, averageEngagement: 1.64, totalPosts: 65, championFormat: 'Carrossel' },
  { id: '2025-10-w4', period: '10/2025', year: '2025', month: '10', week: 'Semana 4', carrossel: null, estatico: 1.33, reels: 1.27, stories: 1.12, tiktok: 3.91, averageEngagement: 1.46, totalPosts: 77, championFormat: 'TikTok' },
  { id: '2025-10-w5', period: '10/2025', year: '2025', month: '10', week: 'Semana 5', carrossel: 0.86, estatico: 1.05, reels: 2.83, stories: 16.27, tiktok: 2.67, averageEngagement: 5.74, totalPosts: 21, championFormat: 'Stories' },

  { id: '2025-11-w1', period: '11/2025', year: '2025', month: '11', week: 'Semana 1', carrossel: 0.78, estatico: 0.67, reels: 1.86, stories: 6.39, tiktok: 3.55, averageEngagement: 3.47, totalPosts: 53, championFormat: 'Stories' },
  { id: '2025-11-w2', period: '11/2025', year: '2025', month: '11', week: 'Semana 2', carrossel: 5.08, estatico: 1.74, reels: 2.41, stories: 6.54, tiktok: 3.97, averageEngagement: 3.82, totalPosts: 44, championFormat: 'Stories' },
  { id: '2025-11-w3', period: '11/2025', year: '2025', month: '11', week: 'Semana 3', carrossel: 0.64, estatico: 1.57, reels: 1.97, stories: 5.06, tiktok: 4.41, averageEngagement: 3.08, totalPosts: 46, championFormat: 'Stories' },
  { id: '2025-11-w4', period: '11/2025', year: '2025', month: '11', week: 'Semana 4', carrossel: 0.75, estatico: 5.40, reels: 5.41, stories: 19.28, tiktok: 4.07, averageEngagement: 8.57, totalPosts: 39, championFormat: 'Stories' },
  { id: '2025-11-w5', period: '11/2025', year: '2025', month: '11', week: 'Semana 5', carrossel: null, estatico: null, reels: 2.44, stories: 10.57, tiktok: 3.77, averageEngagement: 4.54, totalPosts: 9, championFormat: 'Stories' },

  { id: '2025-12-w1', period: '12/2025', year: '2025', month: '12', week: 'Semana 1', carrossel: 1.91, estatico: 0.69, reels: 1.06, stories: 2.21, tiktok: 5.94, averageEngagement: 2.37, totalPosts: 61, championFormat: 'TikTok' },
  { id: '2025-12-w2', period: '12/2025', year: '2025', month: '12', week: 'Semana 2', carrossel: 1.10, estatico: null, reels: 2.35, stories: 2.95, tiktok: 3.19, averageEngagement: 2.67, totalPosts: 62, championFormat: 'TikTok' },
  { id: '2025-12-w3', period: '12/2025', year: '2025', month: '12', week: 'Semana 3', carrossel: 0.39, estatico: 1.13, reels: 1.88, stories: 5.42, tiktok: 3.63, averageEngagement: 3.09, totalPosts: 57, championFormat: 'Stories' },
  { id: '2025-12-w4', period: '12/2025', year: '2025', month: '12', week: 'Semana 4', carrossel: 0.72, estatico: 0.80, reels: 1.02, stories: 4.74, tiktok: 3.77, averageEngagement: 2.84, totalPosts: 46, championFormat: 'Stories' },
  { id: '2025-12-w5', period: '12/2025', year: '2025', month: '12', week: 'Semana 5', carrossel: 3.61, estatico: 1.24, reels: 1.27, stories: 9.43, tiktok: 2.30, averageEngagement: 4.69, totalPosts: 24, championFormat: 'Stories' },

  // 2026
  { id: '2026-01-w1', period: '01/2026', year: '2026', month: '01', week: 'Semana 1', carrossel: 1.08, estatico: 0.79, reels: 0.89, stories: 5.46, tiktok: 3.92, averageEngagement: 2.96, totalPosts: 34, championFormat: 'Stories' },
  { id: '2026-01-w2', period: '01/2026', year: '2026', month: '01', week: 'Semana 2', carrossel: 1.21, estatico: 0.71, reels: 0.97, stories: 7.49, tiktok: 5.54, averageEngagement: 3.91, totalPosts: 29, championFormat: 'Stories' },
  { id: '2026-01-w3', period: '01/2026', year: '2026', month: '01', week: 'Semana 3', carrossel: 0.59, estatico: 1.10, reels: 1.78, stories: 7.19, tiktok: 5.45, averageEngagement: 3.86, totalPosts: 32, championFormat: 'Stories' },
  { id: '2026-01-w4', period: '01/2026', year: '2026', month: '01', week: 'Semana 4', carrossel: 0.67, estatico: 1.09, reels: 1.15, stories: 4.27, tiktok: 4.47, averageEngagement: 2.60, totalPosts: 41, championFormat: 'TikTok' },
  { id: '2026-01-w5', period: '01/2026', year: '2026', month: '01', week: 'Semana 5', carrossel: 0.33, estatico: 1.26, reels: 0.82, stories: 6.29, tiktok: 3.38, averageEngagement: 3.37, totalPosts: 20, championFormat: 'Stories' },

  { id: '2026-02-w1', period: '02/2026', year: '2026', month: '02', week: 'Semana 1', carrossel: 1.52, estatico: 0.69, reels: 1.19, stories: 3.52, tiktok: 3.97, averageEngagement: 2.40, totalPosts: 47, championFormat: 'TikTok' },
  { id: '2026-02-w2', period: '02/2026', year: '2026', month: '02', week: 'Semana 2', carrossel: 0.95, estatico: 3.72, reels: 1.21, stories: 4.38, tiktok: 3.55, averageEngagement: 2.79, totalPosts: 50, championFormat: 'Stories' },
  { id: '2026-02-w3', period: '02/2026', year: '2026', month: '02', week: 'Semana 3', carrossel: 8.55, estatico: 2.67, reels: 0.95, stories: 5.86, tiktok: 3.63, averageEngagement: 3.26, totalPosts: 34, championFormat: 'Carrossel' },
  { id: '2026-02-w4', period: '02/2026', year: '2026', month: '02', week: 'Semana 4', carrossel: null, estatico: 1.53, reels: 1.57, stories: 6.17, tiktok: 3.60, averageEngagement: 3.05, totalPosts: 40, championFormat: 'Stories' },

  { id: '2026-03-w1', period: '03/2026', year: '2026', month: '03', week: 'Semana 1', carrossel: 1.22, estatico: 1.02, reels: 2.27, stories: 8.13, tiktok: 3.96, averageEngagement: 3.92, totalPosts: 40, championFormat: 'Stories' },
  { id: '2026-03-w2', period: '03/2026', year: '2026', month: '03', week: 'Semana 2', carrossel: 0.85, estatico: 1.98, reels: 1.33, stories: 5.03, tiktok: 4.23, averageEngagement: 2.84, totalPosts: 50, championFormat: 'Stories' },
  { id: '2026-03-w3', period: '03/2026', year: '2026', month: '03', week: 'Semana 3', carrossel: 0.34, estatico: 1.96, reels: 1.50, stories: 3.06, tiktok: 4.64, averageEngagement: 2.68, totalPosts: 63, championFormat: 'TikTok' },
  { id: '2026-03-w4', period: '03/2026', year: '2026', month: '03', week: 'Semana 4', carrossel: 1.13, estatico: 2.28, reels: 1.34, stories: 7.97, tiktok: 3.31, averageEngagement: 3.18, totalPosts: 46, championFormat: 'Stories' },
  { id: '2026-03-w5', period: '03/2026', year: '2026', month: '03', week: 'Semana 5', carrossel: null, estatico: 0.86, reels: 2.37, stories: 12.04, tiktok: 3.87, averageEngagement: 3.63, totalPosts: 23, championFormat: 'Stories' },

  { id: '2026-04-w1', period: '04/2026', year: '2026', month: '04', week: 'Semana 1', carrossel: 0.90, estatico: 0.84, reels: 1.64, stories: 7.01, tiktok: 3.59, averageEngagement: 3.07, totalPosts: 41, championFormat: 'Stories' },
  { id: '2026-04-w2', period: '04/2026', year: '2026', month: '04', week: 'Semana 2', carrossel: 0.77, estatico: 0.82, reels: 1.64, stories: 6.88, tiktok: 3.43, averageEngagement: 3.01, totalPosts: 54, championFormat: 'Stories' },
  { id: '2026-04-w3', period: '04/2026', year: '2026', month: '04', week: 'Semana 3', carrossel: 1.48, estatico: 0.95, reels: 0.93, stories: 7.04, tiktok: 3.53, averageEngagement: 2.93, totalPosts: 45, championFormat: 'Stories' },
  { id: '2026-04-w4', period: '04/2026', year: '2026', month: '04', week: 'Semana 4', carrossel: 0.76, estatico: 0.90, reels: 1.10, stories: 6.14, tiktok: 4.09, averageEngagement: 2.07, totalPosts: 46, championFormat: 'Stories' },
  { id: '2026-04-w5', period: '04/2026', year: '2026', month: '04', week: 'Semana 5', carrossel: 0.74, estatico: null, reels: 1.85, stories: null, tiktok: null, averageEngagement: 1.78, totalPosts: 16, championFormat: 'Reels' },

  { id: '2026-05-w1', period: '05/2026', year: '2026', month: '05', week: 'Semana 1', carrossel: 0.96, estatico: 1.05, reels: 1.37, stories: null, tiktok: null, averageEngagement: 1.32, totalPosts: 37, championFormat: 'Reels' },
  { id: '2026-05-w2', period: '05/2026', year: '2026', month: '05', week: 'Semana 2', carrossel: 0.81, estatico: 0.84, reels: 1.28, stories: 2.73, tiktok: 3.03, averageEngagement: 1.70, totalPosts: 45, championFormat: 'TikTok' },
  { id: '2026-05-w3', period: '05/2026', year: '2026', month: '05', week: 'Semana 3', carrossel: 0.68, estatico: 0.88, reels: 1.05, stories: 3.58, tiktok: 2.54, averageEngagement: 2.17, totalPosts: 50, championFormat: 'Stories' },
  { id: '2026-05-w4', period: '05/2026', year: '2026', month: '05', week: 'Semana 4', carrossel: 0.69, estatico: 1.74, reels: 0.78, stories: 4.91, tiktok: 2.49, averageEngagement: 2.72, totalPosts: 49, championFormat: 'Stories' },
  { id: '2026-05-w5', period: '05/2026', year: '2026', month: '05', week: 'Semana 5', carrossel: 0.62, estatico: 0.28, reels: 0.89, stories: 6.44, tiktok: 2.98, averageEngagement: 3.19, totalPosts: 34, championFormat: 'Stories' },

  { id: '2026-06-w1', period: '06/2026', year: '2026', month: '06', week: 'Semana 1', carrossel: 1.45, estatico: 1.42, reels: 0.98, stories: 2.41, tiktok: 2.77, averageEngagement: 1.81, totalPosts: 12, championFormat: 'TikTok' },
  { id: '2026-06-w2', period: '06/2026', year: '2026', month: '06', week: 'Semana 2', carrossel: 1.11, estatico: 1.36, reels: 1.47, stories: 1.42, tiktok: 2.73, averageEngagement: 1.62, totalPosts: 10, championFormat: 'TikTok' },
  { id: '2026-06-w3', period: '06/2026', year: '2026', month: '06', week: 'Semana 3', carrossel: 1.42, estatico: 1.55, reels: 1.10, stories: 0.01, tiktok: 3.54, averageEngagement: 1.28, totalPosts: 51, championFormat: 'TikTok' },
  { id: '2026-06-w4', period: '06/2026', year: '2026', month: '06', week: 'Semana 4', carrossel: 1.27, estatico: 1.67, reels: 1.38, stories: 3.03, tiktok: 2.24, averageEngagement: 2.15, totalPosts: 100, championFormat: 'Stories' },
];

export const EXECUTIVE_INSIGHTS = [
  {
    title: 'Stories é a Alavanca de Maior Engajamento',
    description: 'Com 4,41% de engajamento médio e 1.289 publicações, Stories é o formato #1 absoluto. Picos históricos no Instagram Stories ultrapassam 19% de engajamento em semanas estratégicas.',
    badge: 'Destaque #1',
    color: 'purple',
  },
  {
    title: 'TikTok Apresenta Altíssima Eficiência e Consistência',
    description: 'Com 3,49% de engajamento em 648 posts, o TikTok é o segundo maior driver de engajamento, apresentando performance estável e alta retenção de audiência qualificada.',
    badge: 'Consistência',
    color: 'cyan',
  },
  {
    title: 'Oportunidade de Otimização em Vídeos Curtos (Reels)',
    description: 'O Reels responde por 1.083 posts porém com engajamento médio de 1,78%. Ajustes de gancho visual (hook), tempo de retenção nos primeiros 3 segundos e chamadas para ação podem dobrar a taxa atual.',
    badge: 'Oportunidade',
    color: 'rose',
  },
  {
    title: 'Formatos Estáticos e Carrossel Exigem Repaginação',
    description: 'Carrossel (1,27%) e Estático (1,47%) possuem volumes consideráveis, porém menor taxa de engajamento global. A recomendação é migrar conteúdos densos para narrativas visuais e carrosséis orientados a utilidade prática.',
    badge: 'Recomendação',
    color: 'amber',
  },
];
