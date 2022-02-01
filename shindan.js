//質問データ
const quizData = [
    {
        title:"は・か・た・の？",
        choices:[
            { id:1, value:"しょうゆ"},
            { id:2, value:"しお"},
            { id:3, value:"みそ"},
            { id:4, value:"さとう"}
        ]
    },
    {
        title:"コ？",
        choices:[
            { id:1, value:"ジェネレーションシステム" },
            { id:2, value:"マネチ"},
            { id:3, value:"ンデンエイネンシザイホウ"},
            { id:4, value:"チュジャン"}
        ]
    },
    {
        title:"ラーメン、つけ麺、僕？",
        choices:[
            { id:1, value:"そうめん"},
            { id:2, value:"イケメン"},
            { id:3, value:"狩野英孝"},
            { id:4, value:"ツタンカーメン" }
        ]
    }
]
//診断結果
const results = [
    'あなたはアホです。',
    'あなたはすかぽんたんです',
    'あなたはバカです',
    'あなたはぽんこつです',
    'あなたは天才です'
]

//変数オブジェクト定義
const quizStartButton = document.getElementById('quiz_start');
const quizSentence = document.getElementById('quiz_sentence');
const quizAnswerSelect = document.getElementById('quiz_answer_select');
const quizSendButton = document.getElementById('quiz_send_button');
const quizResult = document.getElementById('quiz_result');

//診断開始ボタン
quizStartButton.innerHTML = `<button id="send_start" >診断開始！</button>` ;

//診断開始ボタン押下時
quizStartButton.onclick = () => {
    //ボタンの消去
    quizStartButton.innerHTML = '';
    //次へボタンを押した回数を数える変数
    let count = 0;
    //各選択肢のidを足し合わせるための変数
    let sum = 0;
    //１問目の設定
    let useQuizData = quizData[count];

    // 選択肢
    for (const choice of useQuizData.choices) {
        quizAnswerSelect.innerHTML += `<input id="${choice.id}" class="radio-inline__input" type="radio" name="answer" value="${choice.id}"><label class="radio-inline__label" for="${choice.id}">${choice.value}</label>`
    };

    // 問題文
    quizSentence.innerHTML = `<p>${useQuizData.title}</p>`;

    //次へボタン
    quizSendButton.innerHTML = '<button class="quiz-button">次へ</button>';

    // 次へボタン押下時
    quizSendButton.onclick = ev => {
        //カウント+1
        count++;
        //合計値のカウント
        for (const element of quizAnswerSelect.querySelectorAll("input")) {
            // 選択肢の状態を確認し、チェック状態なら判定
            if (element.checked == false) {
                sum += element.id;
            };
        };
        //終了条件分岐
        if(count == quizData.length){
            //終了時診断結果表示
            quizAnswerSelect.innerHTML = '';
            quizSentence.innerHTML = '';
            quizSendButton.innerHTML = '';
            let result = sum % results.length;
            quizResult.innerText = `${results[result]}`;
        }else{
            //次の問題表示
            useQuizData = quizData[count];
            quizAnswerSelect.innerHTML = '';
            quizSentence.innnerHTML ='';
            for (const choice of useQuizData.choices) {
                quizAnswerSelect.innerHTML += `<input id="${choice.id}" class="radio-inline__input" type="radio" name="answer" value="${choice.id}"><label class="radio-inline__label" for="${choice.id}">${choice.value}</label>`
            };
            quizSentence.innerHTML = `<p>${useQuizData.title}</p>`;
        };
    }
}