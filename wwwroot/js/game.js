const sprites = {}
let app = new PIXI.Application({ width: window.innerWidth, height: window.innerHeight });

function documentReady(callback) {
    var loader = setInterval(function () {
        if (document.readyState !== "complete") return;
        clearInterval(loader);
        callback();
    }, 300);
}

function drawTrees() {
    for (var i = 0; i < sprites.trees.length; i++) {
        const sprite = sprites.trees[i];

        // center the sprite's anchor point
        sprite.anchor.set(0.5);

        sprite.x = Math.floor(Math.random() * app.screen.width);
        sprite.y = Math.floor(Math.random() * app.screen.height);
        sprite.z = i * -1;

        app.stage.addChild(sprite);
    }
}

function drawGrass() {
    const tilingSprite = new PIXI.TilingSprite(
        sprites.grassTexture,
        app.screen.width,
        app.screen.height,
    );
    app.stage.addChild(tilingSprite);
}

function drawWorld() {
    drawGrass();
    drawTrees();
}


documentReady(function () {
    document.body.appendChild(app.view);
})

PIXI.Loader.shared
    .add('grass', '/sprites/tilesets/grass.png')
    .add('objects', '/sprites/objects/objects.png')
    .load(function (loader, resources) {
        sprites.grassTexture = resources.grass.texture;
        sprites.sign = new PIXI.Sprite(new PIXI.Texture(resources.objects.texture, new PIXI.Rectangle(0, 0, 16, 16)));

        sprites.trees = []

        var treeTextures = [
            new PIXI.Texture(resources.objects.texture, new PIXI.Rectangle(0, 80, 48, 64)),
            new PIXI.Texture(resources.objects.texture, new PIXI.Rectangle(0, 144, 48, 64))
        ];

        for (var i = 0; i < 300; i++) {
            sprites.trees.push(new PIXI.Sprite(treeTextures[i % 2]));
        }

        sprites.objects = new PIXI.Sprite(resources.objects.texture)

        drawWorld();
    });