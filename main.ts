namespace SpriteKind {
    export const body = SpriteKind.create()
}
sprites.onCreated(SpriteKind.body, function (sprite) {
	
})
let mySprite = sprites.create(assets.image`body`, SpriteKind.Player)
let facing = "up"
let mySprite2 = sprites.create(assets.image`body`, SpriteKind.body)
sprites.setDataNumber(mySprite2, "clone", 1)
forever(function () {
    if (facing == "up") {
        mySprite.y += -8
    }
    pause(500)
})
