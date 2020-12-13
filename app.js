const moonPath = 'M19 30C19 46.5685 30 60 30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0C30 0 19 13.4315 19 30Z';



const sunPath = 'M60 30C60 46.5685 46.5685 60 30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0C46.5685 0 60 13.4315 60 30Z""M60 30C60 46.5685 46.5685 60 30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0C46.5685 0 60 13.4315 60 30Z';

 


const darkMode = document.querySelector('#darkMode');



let toggle = false; 

//CLICK SUN 
 
darkMode.addEventListener('click', () => {

    //USE ANIME.JS

    //SETTING UP THE TIMELINE
    const timeline = anime.timeline({

        duration : 850, 
        easing : "easeOutExpo"



    });


    //ADD DIFFERENT ANIMATIONS TO THE TIMELINE 


    timeline.add({

        targets : ".sun",
        d : [{value: toggle ? sunPath : moonPath}]


    })
    .add({

        targets : '#darkMode',
        rotate : 320

    }, '-= 450')



    .add({

        targets : "section",
        backgroundColor : toggle ? '#7b95b6' : 'rgb(12,13,12)'


    })


    .add({

        targets : "h1",
        color : toggle ? 'whitesmoke' : 'rgb(399,399,399)'
    }, '-= 300')


//EVERYTIME THE SUN IS CLICKED CHANGE TOGGLE 


    if(!toggle) {

        toggle = true;


    } else {

        toggle = false; 


    }

});   