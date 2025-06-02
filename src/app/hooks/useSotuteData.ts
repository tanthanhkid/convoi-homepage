'use client';

import { useState, useEffect } from 'react';
import { SotuteProject, sotuteService } from '../services/sotuteService';

interface UseSotuteDataResult {
  projects: SotuteProject[];
  activeProjects: SotuteProject[];
  pendingProjects: SotuteProject[];
  completedProjects: SotuteProject[];
  loading: boolean;
  error: string | null;
  refreshData: () => void;
  lastUpdated: Date | null;
}

export function useSotuteData(): UseSotuteDataResult {
  const [projects, setProjects] = useState<SotuteProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const updateProjects = (newProjects: SotuteProject[]) => {
    setProjects(newProjects);
    setLastUpdated(new Date());
    setLoading(false);
    setError(null);
  };

  const refreshData = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await sotuteService.getProjects(true); // Force refresh
      updateProjects(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Có lỗi xảy ra khi tải dữ liệu');
      setLoading(false);
    }
  };

  useEffect(() => {
    // Subscribe để nhận dữ liệu mới từ background job
    const unsubscribe = sotuteService.subscribe(updateProjects);

    // Cleanup khi component unmount
    return () => {
      unsubscribe();
    };
  }, []);

  // Tính toán derived data
  const activeProjects = projects.filter(p => p.status === 'active');
  const pendingProjects = projects.filter(p => p.status === 'pending');
  const completedProjects = projects.filter(p => p.status === 'completed');

  return {
    projects,
    activeProjects,
    pendingProjects,
    completedProjects,
    loading,
    error,
    refreshData,
    lastUpdated,
  };
} 