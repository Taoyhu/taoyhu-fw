const fs = require('fs');
const path = require('path');

const WIDGETS_DIR = './widgets';
const OUTPUT_FILE = './forward-widgets.fwd';
const TEMP_DIR = path.join(__dirname, 'temp_widgets');

if (!fs.existsSync(TEMP_DIR)) {
  fs.mkdirSync(TEMP_DIR, { recursive: true });
}

function extractWidgetMetadata(filePath) {
  try {
    const fileName = path.basename(filePath);
    const tempFilePath = path.join(TEMP_DIR, fileName);
    const content = fs.readFileSync(filePath, 'utf8');

    const wrappedContent = `
      let exportedMetadata;
      global.WidgetMetadata = function(metadata) {
        exportedMetadata = metadata;
        return metadata;
      };
      Object.defineProperty(global, 'WidgetMetadata', {
        set: function(value) { exportedMetadata = value; },
        get: function() { return function(metadata) { exportedMetadata = metadata; return metadata; } }
      });
      ${content}
      module.exports = exportedMetadata;
    `;

    fs.writeFileSync(tempFilePath, wrappedContent);
    const modulePath = require.resolve(tempFilePath);
    const metadata = require(modulePath);
    delete require.cache[modulePath];

    if (!metadata) return null;

    const { id, title, description, requiredVersion, version, author } = metadata;
    
    // 【核心一】这里已经为你填好了 taozing 仓库的绝对路径
    const url = `https://raw.githubusercontent.com/Taoyhu/taozing/main/widgets/${fileName}`;
    
    return { id, title, description, requiredVersion, version, author, url };
  } catch (error) {
    console.error(`处理文件 ${filePath} 时出错:`, error);
    return null;
  }
}

async function main() {
  try {
    if (!fs.existsSync(WIDGETS_DIR)) {
      console.error(`目录 ${WIDGETS_DIR} 不存在`);
      process.exit(1);
    }

    const files = fs.readdirSync(WIDGETS_DIR)
      .filter(file => file.endsWith('.js'))
      .map(file => path.join(WIDGETS_DIR, file));

    const widgetIndex = files.map(extractWidgetMetadata).filter(Boolean);

    // 【核心二】这里是展示在 Forward 里的合集信息，你可以随时修改
    const metadata = {
      title: '廿二日的合集',
      description: 'Forward模块合集订阅源',
      icon: 'https://raw.githubusercontent.com/lige47/QuanX-icon-rule/main/icon/06jichang/xiaoyi%281%29.png', 
      widgets: widgetIndex
    };

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(metadata, null, 2));
    console.log(`成功写入 ${widgetIndex.length} 个小部件到 ${OUTPUT_FILE}`);
  } finally {
    if (fs.existsSync(TEMP_DIR)) {
      fs.rmSync(TEMP_DIR, { recursive: true, force: true });
    }
  }
}

main().catch(error => {
  console.error('生成小部件索引时出错:', error);
  process.exit(1);
});
