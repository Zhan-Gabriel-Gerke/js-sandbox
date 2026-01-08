let sentence = "hello world my name is zhan ,it's nice to meet you, banana apple orange banana hello world";


function countWords(str) {
    words = {}

    sentence = str.replace(",", "")

    sentenceArray = sentence.split(" ")

    for (let i = 0; i < sentenceArray.length; i++) {
        let word = sentenceArray[i]
        if (words[word]) {
            words[word] += 1
        } else {
            words[word] = 1
        }
    }

    console.log(words)

}

countWords(sentence)