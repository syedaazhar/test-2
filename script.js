// write your JS code here
let words1 = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'
]

let words2 = [
    'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R'
]

let words3 = [
    'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
]

// let words = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']


// function show() {
//     let keyBord = document.querySelector('#key-board-1');
//     for (let i = 0; i < words.length; i++) {
//         keyBord.innerHTML +=
//             `<button class="keys" onclick="pressKey()">${words[i]}</button>`
//     }



    function show() {
        let keyBord = document.querySelector('#key-board-1');
        for (let i = 0; i < words1.length; i++) {
            keyBord.innerHTML +=
                `<button class="keys" onkeyup="${pressKey()}">${words1[i]}</button>`
        }

    let keyBord2 = document.querySelector('#key-board-2');
    for (let i = 0; i < words2.length; i++) {
        keyBord2.innerHTML +=
            `<button class="keys" onclick="pressKey()">${words2[i]}</button>`
    }

    let keyBord3 = document.querySelector('#key-board-3');
    for (let i = 0; i < words3.length; i++) {
        keyBord3.innerHTML +=
            `<button class="keys" onclick="pressKey()">${words3[i]}</button>`
    }

    function pressKey() {
        for (let i = 0; i < words1.length; i++) {
            document.querySelector('.card-text').innerHTML = `<span>${words1[i]}</span>`;
            console.log(words1[i]);
        }
    }


}

