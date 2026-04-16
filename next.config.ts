/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Projeyi statik HTML/CSS/JS olarak dışa aktarır
  images: {
    unoptimized: true, // Statik exportta resim optimizasyonunu kapatmamız gerekir
  },
};

export default nextConfig;