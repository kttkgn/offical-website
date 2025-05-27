import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const images = ['ai.jpg', 'visual.jpg', 'dev.jpg'];
const inputDir = path.join(__dirname, '../public/images');
const outputDir = path.join(__dirname, '../public/images/compressed');

// 确保输出目录存在
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function compressImage(filename) {
  const inputPath = path.join(inputDir, filename);
  const outputPath = path.join(outputDir, filename);

  try {
    await sharp(inputPath)
      .resize(800, 600, { // 调整图片尺寸
        fit: 'cover',
        position: 'center'
      })
      .jpeg({ // 转换为JPEG格式
        quality: 80, // 压缩质量
        progressive: true // 使用渐进式加载
      })
      .toFile(outputPath);

    console.log(`Successfully compressed ${filename}`);
  } catch (error) {
    console.error(`Error compressing ${filename}:`, error);
  }
}

// 压缩所有图片
Promise.all(images.map(compressImage))
  .then(() => console.log('All images compressed successfully'))
  .catch(error => console.error('Error compressing images:', error)); 