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


// 画像ダウンロード機能

const canvas = document.querySelector("#myCanvas");
const ctx = canvas.getContext("2d"); // 描画用の2Dコンテキストを取得
const textInput1 = document.querySelector("#input1");
const textInput2 = document.querySelector("#input2");
const textInput3 = document.querySelector("#input3");
const textInput4 = document.querySelector("#input4");
const textInput5 = document.querySelector("#input5");
const textInput6 = document.querySelector("#input6");
const textInput7 = document.querySelector("#input7");


const imgja4 = new Image();
imgja4.src = '../images/ja-4.png';




const wrapTextByChars = (text, maxChars = 20) => {
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

const drawCanvas = (text, time, day, price, sc, seat, free) => {
    ctx.drawImage(imgja4, 0, 0, 841, 470);
    ctx.font = "20px sans-serif";
    ctx.fillStyle = "#FEF8EE";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText(text, 100, 75);
    ctx.font = "36px sans-serif";
    ctx.fillStyle = "#54738E";
    ctx.fillText(time, 100, 190);
    ctx.font = "15px sans-serif";
    ctx.fillStyle = "#54738E";
    ctx.fillText(day, 280, 205);
    ctx.font = "12px sans-serif";
    ctx.fillStyle = "#54738E";
    ctx.fillText(price, 320, 335);
    ctx.font = "30px sans-serif";
    ctx.fillStyle = "#FEF8EE";
    ctx.textAlign = "center";
    ctx.fillText(sc, 148, 318);
    ctx.font = "30px sans-serif";
    ctx.fillStyle = "#54738E";
    ctx.textAlign = "left";
    ctx.fillText(seat, 210, 320);
    ctx.font = "10px sans-serif";
    ctx.fillStyle = "#54738E";
    const maxCharsPerLine = 20;
    const lineHeight = Math.round(10 * 1.3);
    const freeLines = wrapTextByChars(free || '', maxCharsPerLine);
    freeLines.forEach((line, idx) => {
        ctx.fillText(line, 600, 300 + idx * lineHeight);
    });
    // ctx.fillText(free, 20, 360);

}


imgja4.onload = () => {
    drawCanvas('映画のタイトル', '上映時間', '日付', '映画を見た時の値段', '番号', '席番号', '自由記述(40字以内)');
};

textInput1.addEventListener("input", () => {
    drawCanvas(textInput1.value || '映画のタイトル', textInput2.value || '上映時間', textInput3.value || '日付', textInput4.value || '映画を見た時の値段', textInput5.value || '番号', textInput6.value || '席番号', textInput7.value || '自由記述(40字以内)');
});
textInput2.addEventListener("input", () => {
    drawCanvas(textInput1.value || '映画のタイトル', textInput2.value || '上映時間', textInput3.value || '日付', textInput4.value || '映画を見た時の値段', textInput5.value || '番号', textInput6.value || '席番号', textInput7.value || '自由記述(40字以内)');
});
textInput3.addEventListener("input", () => {
    drawCanvas(textInput1.value || '映画のタイトル', textInput2.value || '上映時間', textInput3.value || '日付', textInput4.value || '映画を見た時の値段', textInput5.value || '番号', textInput6.value || '席番号', textInput7.value || '自由記述(40字以内)');
});
textInput4.addEventListener("input", () => {
    drawCanvas(textInput1.value || '映画のタイトル', textInput2.value || '上映時間', textInput3.value || '日付', textInput4.value || '映画を見た時の値段', textInput5.value || '番号', textInput6.value || '席番号', textInput7.value || '自由記述(40字以内)');
});
textInput5.addEventListener("input", () => {
    drawCanvas(textInput1.value || '映画のタイトル', textInput2.value || '上映時間', textInput3.value || '日付', textInput4.value || '映画を見た時の値段', textInput5.value || '番号', textInput6.value || '席番号', textInput7.value || '自由記述(40字以内)');
});
textInput6.addEventListener("input", () => {
    drawCanvas(textInput1.value || '映画のタイトル', textInput2.value || '上映時間', textInput3.value || '日付', textInput4.value || '映画を見た時の値段', textInput5.value || '番号', textInput6.value || '席番号', textInput7.value || '自由記述(40字以内)');
});
textInput7.addEventListener("input", () => {
    drawCanvas(textInput1.value || '映画のタイトル', textInput2.value || '上映時間', textInput3.value || '日付', textInput4.value || '映画を見た時の値段', textInput5.value || '番号', textInput6.value || '席番号', textInput7.value || '自由記述(40字以内)');
});


const saveButton = document.querySelector('#saveButton');
const saveSystem = () => {
    const dataURL = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'myCanvasImage.png';
    link.click();
}
saveButton.addEventListener('click', saveSystem);