// PWA 安装提示
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    // 阻止默认的安装提示
    e.preventDefault();
    deferredPrompt = e;
    
    // 显示自定义安装按钮
    showInstallPromotion();
});

function showInstallPromotion() {
    // 创建安装提示横幅
    const installBanner = document.createElement('div');
    installBanner.id = 'install-banner';
    installBanner.innerHTML = `
        <div style="
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 16px 24px;
            border-radius: 12px;
            box-shadow: 0 8px 24px rgba(0,0,0,0.3);
            z-index: 10000;
            display: flex;
            align-items: center;
            gap: 16px;
            max-width: 90%;
            animation: slideUp 0.3s ease;
        ">
            <span style="font-size: 24px;">💰</span>
            <div style="flex: 1;">
                <div style="font-weight: 600; margin-bottom: 4px;">安装预算追踪器</div>
                <div style="font-size: 13px; opacity: 0.9;">添加到主屏幕，像 App 一样使用</div>
            </div>
            <button id="install-btn" style="
                background: white;
                color: #667eea;
                border: none;
                padding: 10px 20px;
                border-radius: 8px;
                font-weight: 600;
                cursor: pointer;
                font-size: 14px;
            ">安装</button>
            <button id="dismiss-btn" style="
                background: transparent;
                color: white;
                border: none;
                padding: 10px;
                cursor: pointer;
                font-size: 20px;
            ">×</button>
        </div>
    `;
    
    document.body.appendChild(installBanner);
    
    // 安装按钮点击事件
    document.getElementById('install-btn').addEventListener('click', async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            console.log(`用户选择: ${outcome}`);
            deferredPrompt = null;
            installBanner.remove();
        }
    });
    
    // 关闭按钮点击事件
    document.getElementById('dismiss-btn').addEventListener('click', () => {
        installBanner.remove();
    });
}

// 监听安装成功事件
window.addEventListener('appinstalled', () => {
    console.log('PWA 安装成功！');
    deferredPrompt = null;
});
