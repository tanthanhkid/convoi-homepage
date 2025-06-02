'use client';

import { SotuteProject } from '../services/sotuteService';
import LoadingLink from './LoadingLink';
import { useState } from 'react';

interface ProjectCardProps {
  project: SotuteProject;
  showDonateButton?: boolean;
}

export default function ProjectCard({ project, showDonateButton = true }: ProjectCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount).replace('₫', 'đ');
  };

  const formatCurrencyShort = (amount: number): string => {
    if (amount >= 1000000000) {
      return `${(amount / 1000000000).toFixed(1)} tỷ đ`;
    } else if (amount >= 1000000) {
      return `${(amount / 1000000).toFixed(1)} triệu đ`;
    } else if (amount >= 1000) {
      return `${(amount / 1000).toFixed(0)} nghìn đ`;
    }
    return formatCurrency(amount);
  };

  const getStatusConfig = (status: SotuteProject['status']) => {
    switch (status) {
      case 'active':
        return {
          borderColor: 'border-l-green-500',
          bgColor: 'bg-gradient-to-br from-green-50 to-green-100',
          badgeColor: 'bg-green-100 text-green-800 border-green-200',
          progressColor: 'from-green-400 to-green-600',
          text: 'Đang thực hiện',
          icon: '🚀'
        };
      case 'pending':
        return {
          borderColor: 'border-l-orange-500',
          bgColor: 'bg-gradient-to-br from-orange-50 to-yellow-50',
          badgeColor: 'bg-orange-100 text-orange-800 border-orange-200',
          progressColor: 'from-orange-400 to-yellow-500',
          text: 'Đang vận động kinh phí',
          icon: '💝'
        };
      case 'completed':
        return {
          borderColor: 'border-l-blue-500',
          bgColor: 'bg-gradient-to-br from-blue-50 to-indigo-50',
          badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
          progressColor: 'from-blue-400 to-indigo-600',
          text: 'Đã hoàn thành',
          icon: '✅'
        };
      default:
        return {
          borderColor: 'border-l-gray-500',
          bgColor: 'bg-gradient-to-br from-gray-50 to-gray-100',
          badgeColor: 'bg-gray-100 text-gray-800 border-gray-200',
          progressColor: 'from-gray-400 to-gray-600',
          text: 'Không xác định',
          icon: '❓'
        };
    }
  };

  const statusConfig = getStatusConfig(project.status);

  return (
    <div className={`group relative overflow-hidden border-l-4 ${statusConfig.borderColor} ${statusConfig.bgColor} rounded-r-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
      {/* Header với hình ảnh */}
      {project.image_url && !imageError && (
        <div className="relative overflow-hidden">
          {!imageLoaded && (
            <div className="w-full h-48 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse">
              <div className="flex items-center justify-center h-full">
                <div className="w-8 h-8 border-4 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
              </div>
            </div>
          )}
          <img 
            src={project.image_url} 
            alt={project.title}
            className={`w-full h-48 object-cover transition-all duration-300 group-hover:scale-105 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      )}

      <div className="p-6">
        {/* Header với status badge */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">{statusConfig.icon}</span>
              <span className={`text-xs px-3 py-1 rounded-full font-medium border ${statusConfig.badgeColor}`}>
                {statusConfig.text}
              </span>
            </div>
            <h3 className="font-bold text-gray-900 text-lg leading-tight mb-2 line-clamp-2 group-hover:text-green-700 transition-colors duration-200">
              {project.title || project.school_name}
            </h3>
          </div>
        </div>

        {/* Location và ID */}
        <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <span>📍</span>
            <span className="font-medium">{project.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <span>🆔</span>
            <span className="font-mono text-xs bg-gray-100 px-2 py-1 rounded">{project.id}</span>
          </div>
        </div>

        {/* Description */}
        {project.description && (
          <p className="text-sm text-gray-700 mb-4 line-clamp-2">
            {project.description}
          </p>
        )}
        
        {/* Categories */}
        {project.categories && project.categories.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {project.categories.map((category, index) => (
              <span key={index} className="text-xs px-2 py-1 bg-white/70 text-gray-600 rounded-md border border-gray-200">
                {category}
              </span>
            ))}
          </div>
        )}

        {/* Số ngày còn lại */}
        {project.days_remaining !== undefined && project.days_remaining > 0 && project.status !== 'completed' && (
          <div className="mb-4 flex items-center gap-2">
            <span className="text-orange-600">⏰</span>
            <span className="text-sm font-semibold text-orange-700 bg-orange-100 px-3 py-1 rounded-full">
              Còn {project.days_remaining} ngày
            </span>
          </div>
        )}

        {/* Progress Section */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <div className="text-sm text-gray-600">
              <span className="font-medium">Mục tiêu:</span>
              <span className="font-bold text-gray-900 ml-1">{formatCurrencyShort(project.target_amount)}</span>
            </div>
            <div className="text-right">
              <span className="text-2xl font-bold text-gray-900">{project.progress_percentage.toFixed(1)}%</span>
            </div>
          </div>
          
          {/* Enhanced Progress Bar */}
          <div className="relative">
            <div className="bg-gray-200 rounded-full h-3 shadow-inner">
              <div 
                className={`h-3 rounded-full bg-gradient-to-r ${statusConfig.progressColor} shadow-sm transition-all duration-1000 ease-out relative overflow-hidden`}
                style={{width: `${Math.min(project.progress_percentage, 100)}%`}}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
              </div>
            </div>
            {/* Progress milestone markers */}
            <div className="flex justify-between mt-1 text-xs text-gray-400">
              <span>0%</span>
              <span>25%</span>
              <span>50%</span>
              <span>75%</span>
              <span>100%</span>
            </div>
          </div>
          
          <div className="mt-3 flex items-center gap-2">
            <span className="text-sm text-gray-600">Đã quyên góp:</span>
            <span className="font-bold text-green-600">{formatCurrencyShort(project.raised_amount)}</span>
            <span className="text-xs text-gray-500">
              ({((project.raised_amount / project.target_amount) * 100).toFixed(1)}%)
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        {showDonateButton && project.status !== 'completed' && (
          <div className="flex gap-3">
            <a 
              href={project.url || `https://sotute.com/duan/${project.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white text-sm font-semibold px-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl text-center flex items-center justify-center gap-2 group"
            >
              <span>💳</span>
              <span>Quyên góp ngay</span>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">→</span>
            </a>
            <LoadingLink 
              href={`/du-an/${project.id}`}
              className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white text-sm font-semibold px-4 py-3 rounded-lg transition-all duration-200 text-center flex items-center justify-center gap-1 hover:shadow-md"
            >
              <span>👁️</span>
              <span>Chi tiết</span>
            </LoadingLink>
          </div>
        )}

        {/* Completed status special button */}
        {project.status === 'completed' && (
          <div className="flex gap-3">
            <div className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold px-6 py-3 rounded-lg text-center flex items-center justify-center gap-2">
              <span>🎉</span>
              <span>Dự án đã hoàn thành</span>
            </div>
            <LoadingLink 
              href={`/du-an/${project.id}`}
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-sm font-semibold px-4 py-3 rounded-lg transition-all duration-200 text-center flex items-center justify-center gap-1"
            >
              <span>👁️</span>
              <span>Xem</span>
            </LoadingLink>
          </div>
        )}

        {/* Footer với timestamp */}
        <div className="mt-4 pt-3 border-t border-gray-200/50 flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <span>📅</span>
            <span>Cập nhật: {new Date(project.updated_at).toLocaleDateString('vi-VN')}</span>
          </div>
          {project.status === 'active' && (
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Đang hoạt động</span>
            </div>
          )}
        </div>
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
} 