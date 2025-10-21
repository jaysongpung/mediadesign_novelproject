const data = [
    {
        "name": "김도경",
        "nickname": "kate",
        "title": "아스키 로맨스",
        "url": "https://burnanonana.github.io/myproject/"
    },
    {
        "name": "차정현",
        "nickname": "chacha",
        "title": "행운의 편지",
        "url": "https://cindy-0104.github.io/-/"
    },
    {
        "name": "임수호",
        "nickname": "1004",
        "title": "Pentacles:",
        "url": "https://conandoil13-sketch.github.io/story2.0/index.html"
    },
    {
        "name": "강다은",
        "nickname": "dani",
        "title": "청운",
        "url": "https://da3un721-wq.github.io/Cheongun/14.html"
    },
    {
        "name": "이지우",
        "nickname": "tomo",
        "title": "Case File #04",
        "url": "https://dlwldn0305-spec.github.io/Case-File-04/"
    },
    {
        "name": "노은빈",
        "nickname": "ian",
        "title": "Leo",
        "url": "https://eunbin279-hash.github.io/leo"
    },
    {
        "name": "이은진",
        "nickname": "dust",
        "title": "달그락 다락방",
        "url": "https://eunjini0919-dust.github.io/fairytale_DUST"
    },
    {
        "name": "이수경",
        "nickname": "8ue",
        "title": "애증(愛憎)",
        "url": "https://happysuelee0902-sys.github.io/storybook/index.html"
    },
    {
        "name": "박희아",
        "nickname": "heea",
        "title": "🕺장래희망 :: 아이돌🕺",
        "url": "https://heea11.github.io/---/"
    },
    {
        "name": "김한별",
        "nickname": "han",
        "title": "전설의 노트 도난 사건",
        "url": "https://junniemine.github.io/The-Theft-of-the-Legendary-Notebook/"
    },
    {
        "name": "김아영",
        "nickname": "zero",
        "title": "Where is the boy?",
        "url": "https://oddugi02.github.io/whereistheboy/"
    },
    {
        "name": "김서진",
        "nickname": "sin",
        "title": "마지막 장례식",
        "url": "https://sin00000.github.io/The-last-funeral/index.html"
    },
    {
        "name": "진온유",
        "nickname": "nonew",
        "title": "what's your name?",
        "url": "https://smart55447-glitch.github.io/nonew/"
    },
    {
        "name": "최지수",
        "nickname": "jiso",
        "title": "숨겨진 페이지",
        "url": "https://suoo12.github.io/novel_develop"
    },
    {
        "name": "김시우",
        "nickname": "shu",
        "title": "Amnesia",
        "url": "https://us157202-web.github.io/amnesia/index.html"
    },
    {
        "name": "이연우",
        "nickname": "yeonwoo",
        "title": "2023년",
        "url": "https://yeonwoo062.github.io/2023story/"
    },
    {
        "name": "최예원",
        "nickname": "yewon",
        "title": "실험실 살인사건",
        "url": "https://yewon1189-web.github.io/mystery/start.html"
    },
    {
        "name": "배윤아",
        "nickname": "yoonin",
        "title": "연에게",
        "url": "https://yoonin8172.github.io/Dear_Yeon"
    },
    {
        "name": "김도윤",
        "nickname": "yoon",
        "title": "Aris: A",
        "url": "https://yoonyoon000.github.io/aris.a/"
    },
    {
        "name": "알따나",
        "nickname": "altana",
        "title": "zombie",
        "url": "https://altana06032005.github.io/zombie/"
    }
];

const newData = []


const container = document.querySelector('#container');

while (data.length > 0) {
    const randNumber = Math.floor(Math.random() * data.length);
    const item = data.splice(randNumber, 1)[0]; // 랜덤한 요소를 제거하면서 반환
    newData.push(item);
}

console.log(newData);

for (let i = 0; i < newData.length; i++) {
    const div = document.createElement('div');
    div.className = 'items';

    const link = document.createElement('a');
    link.href = newData[i].url;
    link.innerHTML = newData[i].title;

    const authorDiv = document.createElement('div');
    authorDiv.className = 'authorDiv';

    const line = document.createElement('div');
    line.className = 'lines';

    const nameDiv = document.createElement('div');
    nameDiv.innerHTML = newData[i].name;

    authorDiv.append(line, nameDiv);
    div.append(link, authorDiv);

    container.append(div);
}



