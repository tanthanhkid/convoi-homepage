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
          badgeText: 'CÔNG TRÌNH - KẾT NỐI',
          badgeColor: 'bg-green-600 text-white',
          progressColor: 'bg-green-600'
        };
      case 'pending':
        return {
          badgeText: 'CÔNG TRÌNH - KẾT NỐI',
          badgeColor: 'bg-orange-600 text-white',
          progressColor: 'bg-orange-600'
        };
      case 'completed':
        return {
          badgeText: 'ĐÃ HOÀN THÀNH',
          badgeColor: 'bg-green-600 text-white',
          progressColor: 'bg-green-600'
        };
      default:
        return {
          badgeText: 'ĐANG CẬP NHẬT',
          badgeColor: 'bg-gray-600 text-white',
          progressColor: 'bg-gray-600'
        };
    }
  };

  const statusConfig = getStatusConfig(project.status);

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {/* Badge ở trên */}
      <div className={`${statusConfig.badgeColor} px-4 py-2 text-sm font-semibold text-center`}>
        {statusConfig.badgeText}
      </div>

      {/* Hình ảnh */}
      <div className="relative h-48 bg-gray-200">
        {project.image_url && !imageError ? (
          <>
            {!imageLoaded && (
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            <img 
              src={project.image_url} 
              alt={project.title}
              className={`w-full h-full object-cover ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-100 to-green-200">
            <div className="text-center text-green-600">
              <div className="text-4xl mb-2">🏫</div>
              <p className="text-sm font-medium">Hình ảnh trường học</p>
            </div>
          </div>
        )}
      </div>

      {/* Nội dung */}
      <div className="p-4">
        {/* Thời gian còn lại */}
        <div className="flex items-center gap-1 text-sm text-gray-600 mb-3">
          <span className="text-orange-500">⏰</span>
          <span>{project.days_remaining || 0} Ngày còn lại</span>
        </div>

        {/* Tiêu đề */}
        <h3 className="font-bold text-gray-900 text-lg leading-tight mb-3 line-clamp-2">
          {project.title || project.school_name}
        </h3>

        {/* Thông tin quyên góp */}
        <div className="space-y-2 mb-4">
          <div className="text-sm text-gray-600">
            <span>Đã quyên góp: </span>
            <span className="font-bold text-green-600">{formatCurrencyShort(project.raised_amount)}</span>
            <span className="text-gray-500"> ({project.progress_percentage.toFixed(1)}%)</span>
          </div>
          <div className="text-sm font-semibold text-gray-900">
            Mục tiêu: {formatCurrencyShort(project.target_amount)}
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div 
            className={`h-2 rounded-full ${statusConfig.progressColor} transition-all duration-500`}
            style={{width: `${Math.min(project.progress_percentage, 100)}%`}}
          ></div>
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          {showDonateButton && project.status !== 'completed' ? (
            <>
              <a 
                href={project.url || `https://sotute.com/duan/${project.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded text-center transition-colors duration-200"
              >
                ⚡ Quyên góp ngay
              </a>
              <LoadingLink 
                href={`/du-an/${project.id}`}
                className="border border-green-600 text-green-600 hover:bg-green-50 text-sm font-semibold px-4 py-2 rounded transition-colors duration-200"
              >
                Chi tiết
              </LoadingLink>
            </>
          ) : (
            <div className="flex-1 bg-gray-500 text-white text-sm font-semibold px-4 py-2 rounded text-center">
              ✅ Đã hoàn thành
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 