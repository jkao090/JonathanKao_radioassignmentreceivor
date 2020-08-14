radio.setGroup(251)
let letters='ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
let morse=['.-','-...','-.-.','-..','.','..-.','--.','....','..','.---','-.-','.-..','--','-.','---','.--.','--.-','.-.','...','-','..-','...-','.--','-..-','-.--','--..','.----','..---','...--','....-','.....','-....','--...','---..','----.','-----']
radio.onReceivedString(function (receivedString) {
    let lettersPos=morse.indexOf(receivedString)
    if (lettersPos>=0) {
        let letterRec=letters.charAt(lettersPos)
        basic.showString(letterRec)
        radio.sendString(letterRec)
    } else {
        radio.sendString('Resend')
    }
})


