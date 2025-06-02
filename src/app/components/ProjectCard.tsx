'use client';

import { SotuteProject } from '../services/sotuteService';
import LoadingLink from './LoadingLink';

interface ProjectCardProps {
  project: SotuteProject;
  showDonateButton?: boolean;
}

export default function ProjectCard({ project, showDonateButton = true }: ProjectCardProps) {
  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount).replace('₫', 'đ');
  };

  const getStatusColor = (status: SotuteProject['status']) => {
    switch (status) {
      case 'active':
        return 'border-green-500 bg-green-50';
      case 'pending':
        return 'border-orange-500 bg-orange-50';
      case 'completed':
        return 'border-blue-500 bg-blue-50';
      default:
        return 'border-gray-500 bg-gray-50';
    }
  };

  const getStatusText = (status: SotuteProject['status']) => {
    switch (status) {
      case 'active':
        return 'Đang thực hiện';
      case 'pending':
        return 'Đang vận động kinh phí';
      case 'completed':
        return 'Đã hoàn thành';
      default:
        return 'Không xác định';
    }
  };

  return (
    <div className={`border-l-4 pl-4 py-4 rounded-r-lg ${getStatusColor(project.status)}`}>
      <div className="flex justify-between items-start mb-2">
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 mb-1">
            {project.school_name}
          </h3>
          <p className="text-sm text-gray-600 mb-1">
            {project.location} • Mã: {project.id}
          </p>
          <p className="text-sm text-gray-700 mb-2">
            {project.description}
          </p>
        </div>
        <span className={`text-xs px-2 py-1 rounded-full font-medium ${
          project.status === 'active' ? 'bg-green-100 text-green-800' :
          project.status === 'pending' ? 'bg-orange-100 text-orange-800' :
          'bg-blue-100 text-blue-800'
        }`}>
          {getStatusText(project.status)}
        </span>
      </div>

      <div className="mb-3">
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm text-gray-600">
            Mục tiêu: {formatCurrency(project.target_amount)}
          </span>
          <span className="text-sm font-medium text-gray-900">
            {project.progress_percentage.toFixed(1)}%
          </span>
        </div>
        
        <div className="bg-gray-200 rounded-full h-2 mb-1">
          <div 
            className={`h-2 rounded-full transition-all duration-300 ${
              project.status === 'active' ? 'bg-green-500' :
              project.status === 'pending' ? 'bg-orange-500' :
              'bg-blue-500'
            }`}
            style={{width: `${Math.min(project.progress_percentage, 100)}%`}}
          ></div>
        </div>
        
        <p className="text-sm text-gray-600">
          Đã quyên góp: {formatCurrency(project.raised_amount)}
        </p>
      </div>

      {showDonateButton && project.status !== 'completed' && (
        <div className="flex gap-2">
          <a 
            href={`https://sotute.com/projects/${project.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg flex-1 text-center"
          >
            Quyên góp ngay
          </a>
          <LoadingLink 
            href={`/du-an/${project.id}`}
            className="border border-green-600 text-green-600 hover:bg-green-600 hover:text-white text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200 text-center"
          >
            Chi tiết
          </LoadingLink>
        </div>
      )}

      <div className="mt-2 text-xs text-gray-500">
        Cập nhật: {new Date(project.updated_at).toLocaleDateString('vi-VN')}
      </div>
    </div>
  );
} 