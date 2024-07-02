					Flappy Bird 

 

Flappy Bird is a popular game that gained widespread attention and popularity after its release in May 2013 by Vietnamese developer Dong Nguyen. The game features simple, yet challenging gameplay where the player controls a bird, guiding it through a series of obstacles (typically pipes) that resemble those from the Mario game series. 

Gameplay Mechanics: 

Control: The player taps the spacebar(or clicks the mouse) to make the bird flap its wings, causing it to ascend briefly and then fall due to gravity. 

Obstacles: Pipes of varying heights are positioned horizontally, creating gaps that the bird must navigate through without colliding. 

Scoring: Each successful passage through a pair of pipes earns the player a point. The game continues indefinitely until the bird collides with an obstacle or the ground. 

Key Features: 

Simplicity: Flappy Bird is known for its straightforward mechanics and minimalistic design, making it easy to learn but difficult to master. 

Difficulty: The game quickly ramps up in difficulty as the player progresses, with gaps between pipes becoming narrower and the bird's speed increasing. 

Visual Style: The game features pixelated graphics reminiscent of classic video games, contributing to its nostalgic appeal. 

 

 

document.addEventListener('DOMContentLoaded', () => { } 

 

The ‘DOMContentLoaded’ is an event that fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading. 

 

 

 

    const bird = document.querySelector('.bird') 

    const ground = document.querySelector('.ground') 

    const gamedisplay = document.querySelector('.container') 

 

Storing the elements in variables bird, ground, gamedisplay. 

    let birdleft = 220 

    let birdbottom = 100 

    let gravity = 2 

    let isgameOver = false 

 

Setting up the initial values of the bird, gravity and game over as per the screen. 

 

 

Function Gamestart() : 

    function gamestart() 

    { 

        birdbottom -= gravity 

        bird.style.bottom = birdbottom +'px' 

        bird.style.left = birdleft +'px' 

    } 

    let gameTimerId = setInterval(gamestart,20) 

 

 

The function gamestart() will initializes the game. The bird will start falling down  as we are decreasing the gravity (initial value is 2). We are adding the pixels dynamically with initial values declared in 4,5 lines. In last line, We are assigning a function to gameTimerID which is used to repeatedly execute a specified function or code snippet at fixed time intervals. 

Function Jump() : 

    function control(e) 

    { 

        if(e.keyCode === 32) 

            { 

                jump() 

            } 

    } 

 

 

 

    function jump() 

    { 

        if (birdbottom <500) 

        birdbottom += 50 

        bird.style.bottom = birdbottom +'px' 

    } 

    document.addEventListener('keyup', control) 

 

The function jump() is for bird to fly. We have given a condition and assigning pixels to the bird bottom dynamically with declared values and then we have added an Eventlistner with Event Keyup, means whenever the up arrow button presses the bird starts flying. We have created another function control() for spacebar and calling the jump() through it. 

 

Function generateobstacles() : 

    function generateObstacles() 

    { 

        let obstacleleft = 500 

        let randomheight = Math.random() * 60 

        let obstaclebottom = randomheight 

        const obstacle = document.createElement('div') 

        if (!isgameOver) obstacle.classList.add('obstacle') 

        gamedisplay.appendChild(obstacle) 

        obstacle.style.left = obstacleleft + 'px' 

        obstacle.style.bottom = obstaclebottom + 'px' 

 

The generateobstacles() is to create obstacles dynamically added to the screen with different sizes using Math.random() which is pre-defined js function. And then we have created an div element to the screen using createElement method and assigning it to obstacle variable and also adding css of these obstacle using classList.add() method. 

 

Function moveobstacles() : 

        function moveobstacle() 

        { 

            obstacleleft -= 2 

            obstacle.style.left = obstacleleft + 'px' 

 

            if (obstacleleft === -60) 

                { 

                    clearInterval(timerId) 

                    gamedisplay.removeChild(obstacle) 

                } 

                if ( (obstacleleft > 200 && obstacleleft < 280 && birdleft == 220 && birdbottom <= obstaclebottom + 153) || birdbottom == 0) 

                    { 

                        gameOver() 

                        clearInterval(timerId) 

                    } 

        } 

        let timerId = setInterval(moveobstacle,20) 

        if (!isgameOver) setTimeout(generateObstacles, 3000) 

    } 

    generateObstacles() 

 

The function moveobstacles() is to move the obstacles towards bird. We are decreasing the values of left side of the pillars dynamically. 

 We have given a conditon (obstacleleft == -60), which is for the obstacles have to disappear when they toward the left most corner. At that time we will clear the interval and will remove the obstacle which we have added in generateobstacles(). 

We have given an another conditon, when the bird touches the obstacle the game has to end. 

 

Function gameOver() : 

    function gameOver() 

    { 

        clearInterval(gameTimerId); 

        console.log("game over") 

        isgameOver = true 

         

        document.removeEventListener('keyup', jump) 

    } 

 

When the bird touches the obstacles or ground the game has to end and also we are removing the event listner. 

 

 