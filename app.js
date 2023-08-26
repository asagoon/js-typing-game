const question = [
    'JavaScript',
    'document',
    'getElementById',
    'window',
    'getElementsByClassName',
    'addEventListener',
    'React',
    'TypeScript',
    'Next.js',
    'apple',
    'banana',
    'melon',
    'blueberry',
    'pineapple',
    'orange',
];

const entered = document.getElementById('entered');
const remained = document.getElementById('remained');
const inputText = document.getElementById('inputText');
const game = document.getElementById('game');
const message = document.getElementById('message');
const replay = document.getElementById('replay');

let remainedTextWords = remained.textContent.split('');
let enteredTextWords = [];
let currentKey;
let currentText;

//新しいランダムの問題の関数
const setQuestion = () => {
    //配列questionの中から、ランダムに一つ選ぶ
    currentKey = Math.floor( Math.random() * question.length);
    currentText = question[currentKey];

    //一度選ばれた問題は配列からさくじょ
    question.splice(currentKey, 1);
    console.log(question);

    //配列の名前.splice( 削除したい要素の位置　(○番目), この位置から何個の要素を削除するか);

    //現在の問題文をリセットして、新しい問題文を表示させる
    //画面に新しい問題文をセット
    entered.textContent = '';
    remained.textContent = currentText;

    //これまでに入力されたフォームの値をリセット
    inputText.value = '';

    //  入力済みの文字　未入力の文字の配列の中身をリセット
    enteredTextWords = [];
    remainedTextWords = currentText.split('');
}

document.addEventListener('input', (e)=> {
    if(remainedTextWords[0] === e.data){
        console.log('Correct');

        //入力済みの文字の配列の最後に一文字追加
        enteredTextWords.push(remainedTextWords[0]);
        //未入力文字の配列の先頭から一文字削除
        remainedTextWords.shift();

        console.log(enteredTextWords);
        console.log(remainedTextWords);

        //入力済みのテキスト＆未入力テキストくを連結して画面表示
        entered.textContent = enteredTextWords.join('');
        remained.textContent = remainedTextWords.join('');

        //全ての文字が入力されたら新しい問題を出す
        if(remainedTextWords.length <= 0){
            if(question.length <= 0){
                game.classList.add('hidden'); //クリア画面を表示
                message.classList.remove('hidden'); //クリア画面の非表示
            }else{
                setQuestion(); //新しい問題文を作る関数
            }
            
        }

    }else{
        console.log('Incorrect');
    }
});

//もう一度プレイ
replay.addEventListener("click", () => {
    window.location.reload();
})
