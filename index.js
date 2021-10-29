//Defining function for newImage pics
function newImage(url, left, bottom) {
    let pic = document.createElement('img')
    pic.src = url
    pic.style.position = 'fixed'
    pic.style.left = left + 'px'
   pic.style.bottom = bottom + 'px'
   pic.style.width = 110 + 'px'
   pic.style.height = 110 + 'px'
    document.body.append(pic)
    return pic
}

function newItem(url,left, bottom){
   let pic = newImage(url,left,bottom) 

   pic.addEventListener('dblclick', () => {
    pic.remove()
    })
}

//Adding the grass and sky (using functions) (Bonus)
function tile (url, top, bottom, width, height){
    for(let h = 0; h < height; h++){
        for(let w = 0; w < width; w++){
            newImage(url, top + w*100, bottom+h*100)
        }
    }
}

let GrassHeight = window.innerHeight / 2
let SkyHeight = window.innerHeight-GrassHeight

tile('assets/sky.png', 0, 500, window.innerWidth/100, SkyHeight/100)
tile('assets/grass.png', 0, 0, window.innerWidth/100, GrassHeight/100)

newImage('.assets/sky.png',0,0)
newImage('.assets/grass.png', 0, 0)


// Invoking functions for newImage items 
newImage('assets/green-character.gif', 100, 70)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 100, 200)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/well.png', 500, 425)



newItem('assets/sword.png', 500, 350)
newItem('assets/staff.png', 600, 100)
newItem('assets/sheild.png', 230, 200)


// Starter code
//   let greenCharacter = document.createElement('img')
//   greenCharacter.src = 'assets/green-character.gif'
//   greenCharacter.style.position = 'fixed'
//   greenCharacter.style.left = '100px'
//   greenCharacter.style.bottom = '100px'
//   document.body.append(greenCharacter)
  
//   let pineTree = document.createElement('img')
//   pineTree.src = 'assets/pine-tree.png'
//   pineTree.style.position = 'fixed'
//   pineTree.style.left = '450px'
//   pineTree.style.bottom = '200px'
//   document.body.append(pineTree)
    
