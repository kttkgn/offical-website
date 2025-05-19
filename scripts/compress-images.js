import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const images = [
  'smart-solution.jpg',
  'data-analysis.jpg',
  'service-advantage.jpg'
];

async function compressImages() {
  for (const image of images) {
    const inputPath = path.join(__dirname, '../public/images', image);
    const outputPath = path.join(__dirname, '../public/images', `compressed-${image}`);

    try {
      await sharp(inputPath)
        .resize(800, 600, { // 调整图片尺寸
          fit: 'cover',
          position: 'center'
        })
        .jpeg({ // 使用 JPEG 格式，设置质量
          quality: 80,
          progressive: true // 使用渐进式加载
        })
        .toFile(outputPath);

      // 删除原图
      fs.unlinkSync(inputPath);
      // 重命名压缩后的图片
      fs.renameSync(outputPath, inputPath);

      console.log(`Successfully compressed ${image}`);
    } catch (error) {
      console.error(`Error compressing ${image}:`, error);
    }
  }
}

compressImages(); 