const quotes = [
    {
        quote : "하루에 3시간을 걸으면 7년 후에 지구 한바퀴 돌 수 있다.",
        author : "사무엘 존슨"
    },
    {
        quote : "언제나 현재에 집중할 수 있다면 행복할 것이다.",
        author : "파울로 코엘료"
    },
    {
        quote : "신은 용기있는 자를 결코 버리지 않는다.",
        author : "켄러"
    },
    {
        quote : "피할수 없으면 즐겨라",
        author : "로버트 엘리엇"
    },
    {
        quote : "먼저 자신을 비웃어라. 다른사람이 당신을 비웃기 전에",
        author : "엘사 맥스웰"
    },
    {
        quote : "절대 어제를 후회하지 마라. 인생은 오늘의 내 안에 있고 내일은 스스로 만드는 것이다.",
        author : "L론허바드"
    },
    {
        quote : "오랜동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다.",
        author : "앙드레 말로"
    },
    {
        quote : "네 믿음은 네 생각이 된다. 네 생각은 네 말이 된다. 네 말은 네 행동이 된다. 네 행동은 네 습관이 된다. 네 습관은 네 가치가 된다. 네 가치는 네 운명이 된다.",
        author : "간디"
    },
    {
        quote : "고난의 시기에 동요하지 않는 것, 이것은 진정 칭찬받을 만한 뛰어난 인물의 증거다.",
        author : "베토벤"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
 
const todaysQuote = quotes[Math.floor(Math.random()* quotes.length)];

function getQuote(){
    quote.innerText = todaysQuote.quote;
    author.innerText = todaysQuote.author;
}

getQuote()