// 简单的图标生成脚本
// 需要安装: npm install canvas

const fs = require('fs');
const path = require('path');

// 创建 SVG 图标
const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const iconsDir = path.join(__dirname, 'public', 'icons');

// 确保目录存在
if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir, { recursive: true });
}

// 生成 SVG 图标
sizes.forEach(size => {
    const svg = `
<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="${size}" height="${size}" fill="url(#grad)" rx="${size * 0.1}"/>
  <text x="50%" y="50%" font-size="${size * 0.6}" text-anchor="middle" dominant-baseline="central">💰</text>
</svg>`;
    
    fs.writeFileSync(path.join(iconsDir, `icon-${size}x${size}.svg`), svg);
    console.log(`✅ 生成 icon-${size}x${size}.svg`);
});

console.log('\n✨ 所有图标已生成！');
console.log('📁 位置:', iconsDir);
console.log('\n💡 提示: SVG 图标可以直接使用，或者使用在线工具转换为 PNG:');
console.log('   - https://cloudconvert.com/svg-to-png');
console.log('   - https://www.aconvert.com/image/svg-to-png/');
