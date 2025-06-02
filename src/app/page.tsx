export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="text-center space-y-8 p-8">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Hello World
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-md mx-auto">
            Chào mừng đến với Convoi Homepage - Nơi những ý tưởng tuyệt vời được khởi đầu
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
            Bắt đầu ngay
          </button>
          <button className="px-8 py-3 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-lg transition-colors duration-200">
            Tìm hiểu thêm
          </button>
        </div>

        <div className="mt-12 text-sm text-gray-500 dark:text-gray-400">
          <p>Được xây dựng với ❤️ bằng Next.js & Tailwind CSS</p>
        </div>
      </div>
    </div>
  );
}
