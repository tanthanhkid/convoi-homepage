'use client';

import { useState, useEffect } from 'react';
import { SotuteProject } from '../services/sotuteService';

interface UseSotuteDataResult {
  projects: SotuteProject[];
  loading: boolean;
  error: string | null;
  refreshData: () => Promise<void>;
  metadata?: {
    cached_at: string;
    cache_age_minutes: number;
    is_fresh: boolean;
    total_projects: number;
    active_projects: number;
    pending_projects: number;
    completed_projects: number;
  };
}

interface SotuteApiResponse {
  success: boolean;
  data: SotuteProject[];
  total: number;
  cached_at: string;
  cache_age_minutes: number;
  is_fresh: boolean;
  error?: string;
  metadata?: {
    total_projects: number;
    active_projects: number;
    pending_projects: number;
    completed_projects: number;
  };
}

export function useSotuteData(status?: 'active' | 'pending' | 'completed'): UseSotuteDataResult {
  const [projects, setProjects] = useState<SotuteProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [metadata, setMetadata] = useState<UseSotuteDataResult['metadata']>();

  const fetchProjects = async (forceRefresh = false) => {
    try {
      setLoading(true);
      setError(null);

      console.log('🔄 Hook: Đang lấy dữ liệu từ API local...');

      const url = new URL('/api/sotute', window.location.origin);
      if (status) {
        url.searchParams.set('status', status);
      }
      if (forceRefresh) {
        url.searchParams.set('refresh', 'true');
      }

      const response = await fetch(url.toString(), {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        // Thêm cache control để tránh browser cache
        cache: forceRefresh ? 'no-cache' : 'default',
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const result: SotuteApiResponse = await response.json();
      
      if (result.success) {
        setProjects(result.data);
        setMetadata({
          cached_at: result.cached_at,
          cache_age_minutes: result.cache_age_minutes,
          is_fresh: result.is_fresh,
          total_projects: result.metadata?.total_projects || result.total,
          active_projects: result.metadata?.active_projects || 0,
          pending_projects: result.metadata?.pending_projects || 0,
          completed_projects: result.metadata?.completed_projects || 0,
        });
        
        console.log(`✅ Hook: Đã load ${result.data.length} dự án từ API`);
        console.log(`📊 Cache info: ${result.cache_age_minutes} phút tuổi, ${result.is_fresh ? 'fresh' : 'stale'}`);
      } else {
        throw new Error(result.error || 'Không thể lấy dữ liệu');
      }
      
    } catch (err) {
      console.error('❌ Hook error:', err);
      setError(err instanceof Error ? err.message : 'Lỗi không xác định');
      
      // Fallback to empty array nhưng vẫn giữ loading = false
      if (projects.length === 0) {
        setProjects([]);
      }
    } finally {
      setLoading(false);
    }
  };

  const refreshData = async () => {
    console.log('🔄 Hook: Manual refresh triggered...');
    await fetchProjects(true);
  };

  useEffect(() => {
    fetchProjects();
  }, [status]); // Re-fetch khi status filter thay đổi

  // Auto refresh mỗi 5 phút
  useEffect(() => {
    const interval = setInterval(() => {
      if (!loading) {
        console.log('🔄 Hook: Auto refresh...');
        fetchProjects();
      }
    }, 5 * 60 * 1000); // 5 phút

    return () => clearInterval(interval);
  }, [loading]);

  return {
    projects,
    loading,
    error,
    refreshData,
    metadata,
  };
}

// Hook chuyên dụng cho từng loại dự án
export function useActiveProjects(): UseSotuteDataResult {
  return useSotuteData('active');
}

export function usePendingProjects(): UseSotuteDataResult {
  return useSotuteData('pending');
}

export function useCompletedProjects(): UseSotuteDataResult {
  return useSotuteData('completed');
}

// Hook với options nâng cao
export function useSotuteDataWithOptions(options: {
  status?: 'active' | 'pending' | 'completed';
  autoRefresh?: boolean;
  refreshInterval?: number; // milliseconds
}): UseSotuteDataResult {
  const { status, autoRefresh = true, refreshInterval = 5 * 60 * 1000 } = options;
  
  const [projects, setProjects] = useState<SotuteProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [metadata, setMetadata] = useState<UseSotuteDataResult['metadata']>();

  const fetchProjects = async (forceRefresh = false) => {
    try {
      setLoading(true);
      setError(null);

      const url = new URL('/api/sotute', window.location.origin);
      if (status) {
        url.searchParams.set('status', status);
      }
      if (forceRefresh) {
        url.searchParams.set('refresh', 'true');
      }

      const response = await fetch(url.toString(), {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        cache: forceRefresh ? 'no-cache' : 'default',
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const result: SotuteApiResponse = await response.json();
      
      if (result.success) {
        setProjects(result.data);
        setMetadata({
          cached_at: result.cached_at,
          cache_age_minutes: result.cache_age_minutes,
          is_fresh: result.is_fresh,
          total_projects: result.metadata?.total_projects || result.total,
          active_projects: result.metadata?.active_projects || 0,
          pending_projects: result.metadata?.pending_projects || 0,
          completed_projects: result.metadata?.completed_projects || 0,
        });
      } else {
        throw new Error(result.error || 'Không thể lấy dữ liệu');
      }
      
    } catch (err) {
      console.error('❌ Hook error:', err);
      setError(err instanceof Error ? err.message : 'Lỗi không xác định');
      
      if (projects.length === 0) {
        setProjects([]);
      }
    } finally {
      setLoading(false);
    }
  };

  const refreshData = async () => {
    await fetchProjects(true);
  };

  useEffect(() => {
    fetchProjects();
  }, [status]);

  // Auto refresh với custom interval
  useEffect(() => {
    if (!autoRefresh) return;

    const interval = setInterval(() => {
      if (!loading) {
        fetchProjects();
      }
    }, refreshInterval);

    return () => clearInterval(interval);
  }, [loading, autoRefresh, refreshInterval]);

  return {
    projects,
    loading,
    error,
    refreshData,
    metadata,
  };
} 