'use client';

import { useState, useEffect } from 'react';
import { useSotuteDataWithOptions } from '../../hooks/useSotuteData';

interface CacheStats {
  success: boolean;
  data: any[];
  total: number;
  cached_at: string;
  cache_age_minutes: number;
  is_fresh: boolean;
  metadata?: {
    total_projects: number;
    active_projects: number;
    pending_projects: number;
    completed_projects: number;
  };
}

export default function SotuteMonitorPage() {
  const [cacheStats, setCacheStats] = useState<CacheStats | null>(null);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const { 
    projects, 
    loading, 
    error: hookError, 
    refreshData, 
    metadata 
  } = useSotuteDataWithOptions({
    autoRefresh: true,
    refreshInterval: 30 * 1000 // 30 giây cho admin page
  });

  const loadCacheStats = async () => {
    try {
      const response = await fetch('/api/sotute');
      const data = await response.json();
      setCacheStats(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Lỗi khi load cache stats');
    }
  };

  const handleForceRefresh = async () => {
    try {
      setRefreshing(true);
      
      const response = await fetch('/api/sotute', {
        method: 'POST',
      });
      
      const result = await response.json();
      
      if (result.success) {
        await loadCacheStats();
        await refreshData();
        alert('✅ Cache đã được làm mới thành công!');
      } else {
        throw new Error(result.error || 'Không thể làm mới cache');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Lỗi khi force refresh');
      alert('❌ Lỗi: ' + (err instanceof Error ? err.message : 'Không thể làm mới cache'));
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadCacheStats();
    
    // Auto reload stats mỗi 30 giây
    const interval = setInterval(loadCacheStats, 30 * 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleString('vi-VN');
  };

  const getCacheStatusColor = (ageMinutes: number, isFresh: boolean) => {
    if (isFresh && ageMinutes < 5) return 'text-green-600 bg-green-100';
    if (ageMinutes < 10) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getCacheStatusText = (ageMinutes: number, isFresh: boolean) => {
    if (isFresh && ageMinutes < 5) return '🟢 Fresh';
    if (ageMinutes < 10) return '🟡 Aging';
    return '🔴 Stale';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Sotute Monitor</h1>
              <p className="text-gray-600 mt-2">Giám sát background job và cache status</p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={loadCacheStats}
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Loading...</span>
                  </>
                ) : (
                  <>
                    <span>🔄</span>
                    <span>Reload Stats</span>
                  </>
                )}
              </button>
              
              <button
                onClick={handleForceRefresh}
                disabled={refreshing}
                className="bg-green-600 hover:bg-green-700 disabled:bg-green-300 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2"
              >
                {refreshing ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Refreshing...</span>
                  </>
                ) : (
                  <>
                    <span>⚡</span>
                    <span>Force Refresh</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Error Display */}
        {(error || hookError) && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
            <div className="flex items-center gap-2">
              <span className="text-red-600">❌</span>
              <span className="text-red-700 font-medium">Error:</span>
              <span className="text-red-600">{error || hookError}</span>
            </div>
          </div>
        )}

        {/* Cache Status Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Cache Overview */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span>📊</span>
              <span>Cache Overview</span>
            </h2>
            
            {cacheStats ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Cache Status:</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCacheStatusColor(cacheStats.cache_age_minutes, cacheStats.is_fresh)}`}>
                    {getCacheStatusText(cacheStats.cache_age_minutes, cacheStats.is_fresh)}
                  </span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Last Updated:</span>
                  <span className="font-medium">{formatTime(cacheStats.cached_at)}</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Cache Age:</span>
                  <span className="font-medium">{cacheStats.cache_age_minutes} phút</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Total Projects:</span>
                  <span className="font-bold text-lg text-green-600">{cacheStats.total}</span>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center py-8">
                <div className="w-8 h-8 border-4 border-gray-300 border-t-green-600 rounded-full animate-spin"></div>
              </div>
            )}
          </div>

          {/* Project Statistics */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span>📈</span>
              <span>Project Statistics</span>
            </h2>
            
            {metadata ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">🚀</span>
                    <span className="text-gray-600">Active Projects:</span>
                  </div>
                  <span className="font-bold text-lg text-green-600">{metadata.active_projects}</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <span className="text-orange-600">💝</span>
                    <span className="text-gray-600">Pending Projects:</span>
                  </div>
                  <span className="font-bold text-lg text-orange-600">{metadata.pending_projects}</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600">✅</span>
                    <span className="text-gray-600">Completed Projects:</span>
                  </div>
                  <span className="font-bold text-lg text-blue-600">{metadata.completed_projects}</span>
                </div>
                
                <div className="border-t pt-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-600 font-medium">Total:</span>
                    <span className="font-bold text-xl text-gray-900">{metadata.total_projects}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center py-8">
                <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
              </div>
            )}
          </div>
        </div>

        {/* Projects Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <span>📋</span>
              <span>Projects Data ({projects.length})</span>
            </h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Progress</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Target</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Raised</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {projects.map((project) => (
                  <tr key={project.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {project.id}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 max-w-xs truncate">
                      {project.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        project.status === 'active' ? 'bg-green-100 text-green-800' :
                        project.status === 'pending' ? 'bg-orange-100 text-orange-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {project.status === 'active' ? '🚀 Active' :
                         project.status === 'pending' ? '💝 Pending' :
                         '✅ Completed'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {project.progress_percentage.toFixed(1)}%
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {(project.target_amount / 1000000).toFixed(1)}M đ
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {(project.raised_amount / 1000000).toFixed(1)}M đ
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {project.location}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {projects.length === 0 && !loading && (
            <div className="p-8 text-center text-gray-500">
              <span className="text-4xl mb-4 block">📭</span>
              <span>Không có dữ liệu dự án</span>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>Background job chạy mỗi 10 phút để cập nhật dữ liệu từ sotute.com</p>
          <p>Cache được làm mới tự động mỗi 5 phút</p>
        </div>
      </div>
    </div>
  );
} 