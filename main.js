window.onload = function(){
    window.addEventListener('scroll', (e) =>{
        console.log(window.scrollY)  //testing de scroll
    })

    lax.init();
    lax.addDriver('scrollY', function(){
        return window.scrollY;

    })  //driver
    lax.addElements('.logo', {
        scrollY : {
            scale: [
                [0,80],
                [1,3]
            ],
            opacity: [
                [0,70],
                [1,0]
            ],
            translateY: [
                [0,80],
                [0,200]
            ]
        }
    });

    lax.addElements('.ultron', {
        scrollY : {
           
            opacity: [
                [0,80],
                [0,1],
            ],
            translateY: [
                [0,400],
                [0,80],
            ]
        }
    });
    lax.addElements('.loki', {
        scrollY : {
           
            opacity: [
                [40,120],
                [0,1],
            ],
            translateY: [
                [0,400],
                [0,-80],
            ]
        }
    });
    lax.addElements('.thanos', {
        scrollY : {
           
            opacity: [
                [80,160],
                [0,1],
            ],
            translateY: [
                [0,400],
                [0,80],
            ]
        }
    });
    lax.addElements('.scroll-tip', {
        scrollY : {
           
            opacity: [
                [0,600],
                [1,0],
            ],
            translateY: [
                [0,800],
                [-200,0],
            ],
            'letter-spacing': [
                [0,600],
                [0,150],{
                    cssUnit: 'px',
                }
            ],
        }
    });
    lax.addElements('.ironman-title', {
        scrollY : {
            filter: [
                [600,700,800,900,1000,1100,1200],
                [0,50,0,50,0,50,0],{
                    cssFn: function(value){
                        return `drop-shadow(0 0 ${value}px yellow)`
                    }
                }
            ],
            translateY:[
                [1200,1700],
                [200,'elCenterY-150'],  //Centra mi elemento
            ] 
        }  
    });
    lax.addElements('.ironman-01', {
        scrollY : {
            translateY:[
                [1200,2000],
                [800,-1500], 
            ] 
        }  
    });
    lax.addElements('.ironman-02', {
        scrollY : {

            scale:[
                [2000,2500],
                [0,2]
            ],
            translateX:[
                [2000,2200,3000],
                [0,1000,0],  
            ],
            translateY:[
                [2000,2200,3000],
                [-200,0,-400],  
            ],
        }  
    });
    lax.addElements('.shield', {
        scrollY : {
            translateX:[
                [3200,3400,3600,3800],
                [-800,"screenWidth - 200",0,"screenWidth + 200"],  
            ],
            translateY:[
                [3200,3400,3600,3800],
                [800,1200,1600,1600],  
            ],
        }  
    });

    
} 