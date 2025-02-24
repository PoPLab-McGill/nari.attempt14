define(['pipAPI', 'https://cdn.jsdelivr.net/gh/PoPLab-McGill/smiaa-sc-iat@main/updated-extension.js'], function(APIConstructor, stiatExtension){
var API = new APIConstructor();
		  return stiatExtension({
		  category : { 
		    name : 'Autistics', //Will appear in the data.
		    title : {
		      media : {word : 'Autistics'}, //Name of the category presented in the task.
		      css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
		      height : 7 //Used to position the "Or" in the combined block.
		    }, 
            media: [
                    { word: 'Repeats body movement' },
		    { word: 'Avoids eye contact' },
                    { word: 'Dislikes unexpected changes' },
                    { word: 'Struggles making friends' },
                    { word: 'Interprets language differently' }
            ],
            css: {color: '#31b404', 'font-size': '3em'}
		  },	

  		attribute1 : 
			{
            name: 'Good',
            title: {media: {word: 'Good'}, css: {color: '#31b404', 'font-size': '2em'}, height: 7},
            media: [
                    { word: 'Love' },
                    { word: 'Joy' },
                    { word: 'Pleasure' },
                    { word: 'Peace' }
			], 
			//Can change color and size of the targets here.
			css : {color:'#31b404','font-size':'3em'}
			},
        attribute2: {
            name: 'Bad',
            title: {media: {word: 'Bad'}, css: {color: '#31b404', 'font-size': '2em'}, height: 7},
            media: [
                    { word: 'Terrible' },
                    { word: 'Angry' }, 
                    { word: 'Hate' },
                    { word: 'Evil' }
            ],
            css: {color: '#31b404', 'font-size': '3em'}
        }
    });
});
