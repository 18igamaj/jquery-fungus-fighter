$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;




let hP = 100

let aP = 100

function onReady() {
    $('.arcane-scepter').on('click',attackRC)
    $('.entangle').on('click',attackEN)
    $('.dragon-blade').on('click',attackDB)
    $('.star-fire').on('click',attackSF)
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}

function render(){
    $('.ap-text').text(aP)
    $('.hp-text').text(hP)
    freakFung()
}

function attackRC(event){
    event.preventDefault()

    // console.log('hi')
//$('.ap-text').text()
aP -=12
hP -= 14
if(aP<0){
    aP = 0
}
if(hP<0){
    hP = 0
}
render();

}
function attackEN(){
    aP -= 23
    hP -= 9
    if(aP<0){
        aP = 0
    }
    if(hP<0){
        hP = 0
    }
    render();
}
function attackDB(){
    aP -= 38
    hP -= 47
    if(aP<0){
        aP = 0
    }
    if(hP<0){
        hP = 0
    }
    render();
}
function attackSF(){
    aP -= 33
    hP -= 25
    if(aP<0){
        aP = 0
    }
    if(hP<0){
        hP = 0
    }
    render();
}
function freakFung(){
    if(hP === 0){
    $('.freaky-fungus').removeClass('walk').addClass('dead')
    }
    // if(aP === 0){
    //     $('.freaky-fungus').removeClass('walk').addClass('dead')
    // }
    
render()
}