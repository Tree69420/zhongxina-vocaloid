let audioconcat = require('audioconcat');
const prompt = require('prompt-sync')();

async function asdf(){
    let text = await prompt('pinyin? ');
    let splittext = text.split(' ');
    let array = [];
    for (let i = 0; i < splittext.length; i++){
        let k = splittext[i];
        let a;
        console.log(k);
        switch (k.charAt(0)){
            case 'b':
                a = 'b';
                break;
            case 'c':
                if (k.charAt(1) == 'h'){
                    a = 'ch';
                }
                else{
                    a='c';
                }
                break;
            case 's':
                if (k.charAt(1) == 'h'){
                    a = 'sh';
                }
                else{
                    a='s';
                }
                break;
            case 'z':
                if (k.charAt(1) == 'h'){
                    a = 'zh';
                }
                else{
                    a='z';
                }
                break;
            case 'd':
                a = 'd';
                break;
            case 'f':
                a = 'f';
                break;
            case 'g':
                a = 'g';
                break;
            case 'h':
                a = 'h';
                break;
            case 'j':
                a = 'j';
                break;
            case 'k':
                a = 'k';
                break;
            case 'l':
                a = 'l';
                break;
            case 'm':
                a = 'm';
                break;
            case 'n':
                a = 'n';
                break;
            case 'p':
                a = 'p';
                break;
            case 'q':
                a = 'q';
                break;
            case 'r':
                a = 'r';
                break;
            case 't':
                a = 't';
                break;
            case 'x':
                a = 'x';
                break;
            default:
                a = 'vowel';
                break;
        }
        console.log(a);
        array.push('./sound/'+a+'/'+k+'.mp3');
    }
    console.log(array);
      audioconcat(array)
        .concat('all.mp3')
        .on('start', function (command) {
            console.log('ffmpeg process started:', command)
        })
        .on('error', function (err, stdout, stderr) {
            console.error('Error:', err)
            console.error('ffmpeg stderr:', stderr)
        })
        .on('end', function (output) {
            console.error('Audio created in:', output)
        })
}

asdf();