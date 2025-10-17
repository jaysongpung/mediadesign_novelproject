console.log('hello')

const data = [
    {
        "name": "김도경",
        "nickname": "kate",
        "title": "untitled",
        "url": "https://burnanonana.github.io/myproject/"
    },
    {
        "name": "차정현",
        "nickname": "chacha",
        "title": "untitled",
        "url": "https://cindy-0104.github.io/-/"
    },
    {
        "name": "임수호",
        "nickname": 1004,
        "title": "untitled",
        "url": "https://conandoil13-sketch.github.io/story2.0/index.html"
    },
    {
        "name": "강다은",
        "nickname": "dani",
        "title": "untitled",
        "url": "https://da3un721-wq.github.io/Cheongun/14.html"
    },
    {
        "name": "이지우",
        "nickname": "tomo",
        "title": "untitled",
        "url": "https://dlwldn0305-spec.github.io/Case-File-04/"
    },
    {
        "name": "노은빈",
        "nickname": "ian",
        "title": "untitled",
        "url": "https://eunbin279-hash.github.io/leo"
    },
    {
        "name": "이은진",
        "nickname": "dust",
        "title": "untitled",
        "url": "https://eunjini0919-dust.github.io/fairytale_DUST"
    },
    {
        "name": "이수경",
        "nickname": "8ue",
        "title": "untitled",
        "url": "https://happysuelee0902-sys.github.io/storybook/index.html"
    },
    {
        "name": "박희아",
        "nickname": "heea",
        "title": "untitled",
        "url": "https://heea11.github.io/---/"
    },
    {
        "name": "김한별",
        "nickname": "han",
        "title": "untitled",
        "url": "https://junniemine.github.io/The-Theft-of-the-Legendary-Notebook/"
    },
    {
        "name": "김아영",
        "nickname": "zero",
        "title": "untitled",
        "url": "https://oddugi02.github.io/whereistheboy/"
    },
    {
        "name": "김서진",
        "nickname": "sin",
        "title": "untitled",
        "url": "https://sin00000.github.io/The-last-funeral/index.html"
    },
    {
        "name": "진온유",
        "nickname": "nonew",
        "title": "untitled",
        "url": "https://smart55447-glitch.github.io/nonew/"
    },
    {
        "name": "최지수",
        "nickname": "jiso",
        "title": "untitled",
        "url": "https://suoo12.github.io/novel_develop"
    },
    {
        "name": "김시우",
        "nickname": "shu",
        "title": "untitled",
        "url": "https://us157202-web.github.io/amnesia/index.html"
    },
    {
        "name": "이연우",
        "nickname": "yeonwoo",
        "title": "untitled",
        "url": "https://yeonwoo062.github.io/2023story/"
    },
    {
        "name": "최예원",
        "nickname": "yewon",
        "title": "untitled",
        "url": "https://yewon1189-web.github.io/mystery/start.html"
    },
    {
        "name": "배윤아",
        "nickname": "yoonin",
        "title": "untitled",
        "url": "https://yoonin8172.github.io/Dear_Yeon"
    },
    {
        "name": "김도윤",
        "nickname": "yoon",
        "title": "untitled",
        "url": "https://yoonyoon000.github.io/aris.a/"
    },
    {
        "name": "알따나",
        "nickname": "altana",
        "title": "untitled",
        "url": "https://altana06032005.github.io/zombie/"
    }
];

const newData = []


while (data.length > 0) {
    const randNumber = Math.floor(Math.random() * data.length);
    newData.push(data[randNumber])
    data.pop(data[randNumber]);

    console.log(data.length);
}


for (let i = 0; i < newData.length; i++) {
    const div = document.createElement('div');
    div.innerHTML = newData[i].name;

    const link = document.createElement('a');
    link.href = newData[i].url;
    link.innerHTML = newData[i].title;

    div.append(link);

    document.body.append(div);
}



