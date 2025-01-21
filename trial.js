define(['pipAPI', 'https://cdn.jsdelivr.net/gh/PoPLab-McGill/nari.attempt12@main/extension.js'], function(APIConstructor, stiatExtension){
    var API = new APIConstructor();

    return stiatExtension({
        remindErrorText: '<p align="center" style="font-size:0.6em; font-family:arial;">' +
            'If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. ' +
            'Press the other key to continue.<p/>',
        category: {
            name: 'Autistics',
            title: {media: {word: 'Autistics'}, css: {color: '#31b404', 'font-size': '2em'}, height: 7},
            media: [
  { word: 'Avoids eye contact' },
                    { word: 'Dislikes unexpected changes' },
                    { word: 'Struggles making friends' },
                    { word: 'Repeats certain words' }
            ],
            css: {color: '#31b404', 'font-size': '3em'}
        },
        attribute1: {
            name: 'Negative',
            title: {media: {word: 'Negative'}, css: {color: '#31b404', 'font-size': '2em'}, height: 7},
            media: [
                    { word: 'Terrible' },
                    { word: 'Angry' },
                    { word: 'Hate' },
                    { word: 'Evil' }
            ],
            css: {color: '#31b404', 'font-size': '3em'}
        },
        attribute2: {
            name: 'Positive',
            title: {media: {word: 'Positive'}, css: {color: '#31b404', 'font-size': '2em'}, height: 7},
            media: [
                    { word: 'Love' },
                    { word: 'Joy' }, 
                    { word: 'Pleasure' },
                    { word: 'Peace' }
            ],
            css: {color: '#31b404', 'font-size': '3em'}
        }
    });
});
