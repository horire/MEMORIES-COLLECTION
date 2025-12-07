const scrollDown = document.querySelector('#scrollDown');
const arrow = document.querySelector('#arrow')
const getscrollPercent = () => {
    const scrolled = window.scrollY;

    const pageHight = document.documentElement.scrollHeight
    const clientHight = document.documentElement.clientHeight
    const canScroll = scrolled / (pageHight - clientHight) * 100;
    const top = document.querySelector('#topOrscroll')
    console.log(`${canScroll}%`)
    if (canScroll > 15) {
        arrow.classList.add('arrow-up')

        top.textContent = 'Top';
        top.style.color = '#333';


    } else {
        arrow.classList.remove('arrow-up')
        top.textContent = 'Scroll';
        top.style.color = '#fff';
    }
}

window.addEventListener('scroll', getscrollPercent);


const wrapTextByChars = (text, maxChars = 30) => {
    // if (!text) {
    //     return ['']
    // };
    const lines = [];
    const rawLines = String(text).split('\n');
    rawLines.forEach(line => {
        for (let i = 0; i < line.length; i += maxChars) {
            lines.push(line.slice(i, i + maxChars));
        }
        if (line.length === 0) lines.push('');
    });
    return lines;
}



// 画像ダウンロード機能
const canvas = document.querySelector("#myCanvas");
const ctx = canvas.getContext("2d"); // 描画用の2Dコンテキストを取得
const textInput6 = document.querySelector("#input6");
const textInput7 = document.querySelector("#input7");
const imageUpload = document.querySelector('#imageUpload');
let userImage = null;
const img = new Image();

const drawCanvas = (title,free) => {



    const canvasW = canvas.width;
    const canvasH = canvas.height;

    const imgW = img.width;
    const imgH = img.height;

    // canvasを覆うための拡大率（cover）
    const scale = Math.max(canvasW / imgW, canvasH / imgH);

    const drawW = imgW * scale;
    const drawH = imgH * scale;

    // 中央配置
    const dx = (canvasW - drawW) / 2;
    const dy = (canvasH - drawH) / 2;

    ctx.clearRect(0, 0, canvasW, canvasH);

    ctx.drawImage(img, dx, dy, drawW, drawH);
    ctx.fillStyle = `rgba(0, 0, 0, 0.4)`;
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.font = "20px sans-serif";
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.fillText(title, 415, 100);
    ctx.font = "20px sans-serif";
    ctx.textAlign = "center";
    ctx.fillStyle = "#ffffff";
    // ctx.fillText(free, 410, 100);
    const maxCharsPerLine = 30;
    const lineHeight = Math.round(10 * 2.5);
    const freeLines = wrapTextByChars(free || '', maxCharsPerLine);
    freeLines.forEach((line, idx) => {
        ctx.fillText(line, 415, 150 + idx * lineHeight);
    });
}


imageUpload.addEventListener('change', (e) => {

    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {

        img.src = reader.result;
        img.onload = () => {
            drawCanvas(textInput6.value || '作品タイトル',textInput7.value || '自由記述(300字以内)'); // ← 画像ロード完了後に描画
        };


    };
    reader.readAsDataURL(file);
});

textInput6.addEventListener('input', () => {
    drawCanvas(textInput6.value || '作品タイトル',textInput7.value || '自由記述(300字以内)');
});
textInput7.addEventListener('input', () => {
    drawCanvas(textInput6.value || '作品タイトル',textInput7.value || '自由記述(300字以内)');
});


// ダウンロードボタン
const saveButton = document.querySelector('#saveButton');
const saveSystem = () => {
    const dataURL = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'myCanvasImage.png';
    link.click();
}
saveButton.addEventListener('click', saveSystem);


// 文字数カウント

const count = document.querySelector('#count');
const textCount = () => {

    count.textContent = textInput7.value.length;
    if (textInput7.value.length > 300) {
        count.classList.add('alert');
    } else {
        count.classList.remove('alert');
    }
};

textInput7.addEventListener('keyup', textCount);