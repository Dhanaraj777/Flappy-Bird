document.addEventListener('DOMContentLoaded', () => {
    const bird = document.querySelector('.bird')
    const ground = document.querySelector('.ground')
    const gamedisplay = document.querySelector('.container')


    let birdleft = 220
    let birdbottom = 100
    let gravity = 2
    let isgameOver = false



    function gamestart()
    {
        birdbottom -= gravity
        bird.style.bottom = birdbottom +'px'
        bird.style.left = birdleft +'px'
    }
    let gameTimerId = setInterval(gamestart,20)
  

    document.addEventListener('keyup', control)

    function control(e)
    {
        if(e.keyCode == 32)
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


    function gameOver()
    {
        clearInterval(gameTimerId);
        console.log("game over")
        isgameOver = true
        
        document.removeEventListener('keyup', control)
    }
})

