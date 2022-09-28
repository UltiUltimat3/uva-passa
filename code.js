var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["48b0f769-6fd2-4dab-9c1a-c0703eec8500","54c63764-6bb0-4e97-9a2a-535d8758d6c3","b1aaf0d5-816c-4538-9bd2-d1ab2d4db494","3453b410-571c-478c-a146-5b51fed6b6c9"],"propsByKey":{"48b0f769-6fd2-4dab-9c1a-c0703eec8500":{"name":"lp","sourceUrl":"assets/v3/animations/Y8VdRt8hTuJlBUNT4vSu2OIGoOEBXmc5Z-Twy1kI-5c/48b0f769-6fd2-4dab-9c1a-c0703eec8500.png","frameSize":{"x":16,"y":35},"frameCount":1,"looping":true,"frameDelay":4,"version":"qYSrvahk3de2nXDg0AtgP3h6txKKIfFm","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":35},"rootRelativePath":"assets/v3/animations/Y8VdRt8hTuJlBUNT4vSu2OIGoOEBXmc5Z-Twy1kI-5c/48b0f769-6fd2-4dab-9c1a-c0703eec8500.png"},"54c63764-6bb0-4e97-9a2a-535d8758d6c3":{"name":"d","sourceUrl":"assets/v3/animations/keVvMxaDM_mApda9G-KsYAzqOVeL-bslypBSEh018vk/54c63764-6bb0-4e97-9a2a-535d8758d6c3.png","frameSize":{"x":48,"y":37},"frameCount":1,"looping":true,"frameDelay":4,"version":"7mtrysYEp24ko58cdjL4d2vBK1lgZVGM","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":37},"rootRelativePath":"assets/v3/animations/keVvMxaDM_mApda9G-KsYAzqOVeL-bslypBSEh018vk/54c63764-6bb0-4e97-9a2a-535d8758d6c3.png"},"b1aaf0d5-816c-4538-9bd2-d1ab2d4db494":{"name":"lcd","sourceUrl":"assets/v3/animations/keVvMxaDM_mApda9G-KsYAzqOVeL-bslypBSEh018vk/b1aaf0d5-816c-4538-9bd2-d1ab2d4db494.png","frameSize":{"x":15,"y":31},"frameCount":1,"looping":true,"frameDelay":4,"version":"W930rD_xUftlj7i.9cif.fsNUGkWWhmk","loadedFromSource":true,"saved":true,"sourceSize":{"x":15,"y":31},"rootRelativePath":"assets/v3/animations/keVvMxaDM_mApda9G-KsYAzqOVeL-bslypBSEh018vk/b1aaf0d5-816c-4538-9bd2-d1ab2d4db494.png"},"3453b410-571c-478c-a146-5b51fed6b6c9":{"name":"lce","sourceUrl":"assets/v3/animations/keVvMxaDM_mApda9G-KsYAzqOVeL-bslypBSEh018vk/3453b410-571c-478c-a146-5b51fed6b6c9.png","frameSize":{"x":15,"y":31},"frameCount":1,"looping":true,"frameDelay":4,"version":"m0.Tq.wrCByXhrXzV.VtvxuO2bWLX0bD","loadedFromSource":true,"saved":true,"sourceSize":{"x":15,"y":31},"rootRelativePath":"assets/v3/animations/keVvMxaDM_mApda9G-KsYAzqOVeL-bslypBSEh018vk/3453b410-571c-478c-a146-5b51fed6b6c9.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//criando paredes,lasers e o ladrao
var b1 = createSprite(280,0,1,200)
var b2 = createSprite(245,0,1,200)
var b3 = createSprite(300,175,200,1)
var b4 = createSprite(300,140,200,1)

var jaula = createSprite(0,0,350,350)

    var ladrao = createSprite(50,350,10,10)
    var parede1 = createSprite(400,100,350,10)
    var parede2 = createSprite(400,0,450,10)  
    var parede3 = createSprite(175,0,10,600)
    var parede4 = createSprite(300,200,10,200)
    var parede5 = createSprite(50,150,260,10)
    var laser1 = createSprite(260,150,75,5)
    var laser2 = createSprite(215,200,75,5)
    var laser3 = createSprite(260,250,75,5)
    var laser4 = createSprite(300,80,5,50)
    var laser5 = createSprite(250,0,5,80)
    var diamante = createSprite(350,50,20,20)

//colocando cor e formato nos objetos
    parede1.shapeColor="gray"
     parede2.shapeColor="gray"
     parede3.shapeColor="gray"
     parede4.shapeColor="gray"
     parede5.shapeColor="gray"
     laser1.shapeColor= "red"
    laser2.shapeColor= "red"
    laser3.shapeColor= "red"
    laser4.shapeColor= "red"
    laser5.shapeColor= "red"
    diamante.setAnimation("d")
    ladrao.setAnimation("lp")
    b1.shapeColor="black"
     b1.shapeColor="black"
    b3.shapeColor="black"
     b2.shapeColor="black"
    b4.shapeColor="black"
    jaula.shapeColor = "black"
    
laser5.velocityX = 2
  laser1.velocityY = -2
function draw() {
background("black")
createEdgeSprites()
 drawSprites()
 
 laser5.bounceOff(b1)
 laser5.bounceOff(b2)
 laser4.bounceOff(b1)
 laser4.bounceOff(b2)
 laser1.bounceOff(b3)
 laser1.bounceOff(b4)
 
//controles
   if (keyDown(UP_ARROW)) {
    ladrao.y=ladrao.y-5;
    ladrao.setAnimation("lcd")
  }
  
if (keyDown(DOWN_ARROW)) {
    ladrao.y=ladrao.y+5;
    ladrao.setAnimation("lcd")
  }
  
if (keyDown(LEFT_ARROW)) {
  ladrao.x=ladrao.x-5;
  ladrao.setAnimation("lce")
  }
    
if (keyDown(RIGHT_ARROW)) {
  ladrao.x=ladrao.x+5;
      ladrao.setAnimation("lcd")
}
//vitoria e derrota
if (laser1.isTouching(ladrao)||laser2.isTouching(ladrao)||laser3.isTouching(ladrao)||laser4.isTouching(ladrao)||laser5.isTouching(ladrao) || jaula.isTouching(ladrao)){
stroke("black")
fill("white")
textSize(44)
text("ladrao capturado",50,200)
textSize(10)
text("pressione ENTER para recomeçar",50,350)
   ladrao.x=50;
        ladrao.y=50;
        laser1.velocityY = 0
        laser5.velocityX = 0
}

textSize(10,10)
text("by ultimate",300,350)

//colisao
ladrao.bounceOff(edges)
ladrao.bounceOff(laser1)
ladrao.bounceOff(laser2)
ladrao.bounceOff(laser3)
ladrao.bounceOff(laser4)
ladrao.bounceOff(laser5)
ladrao.bounceOff(parede1)
ladrao.bounceOff(parede2)
ladrao.bounceOff(parede3)
ladrao.bounceOff(parede4)
ladrao.bounceOff(parede5)

}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
