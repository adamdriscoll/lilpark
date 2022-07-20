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
            // trees
            new PIXI.Texture(resources.objects.texture, new PIXI.Rectangle(0, 80, 48, 64)),
            new PIXI.Texture(resources.objects.texture, new PIXI.Rectangle(0, 144, 48, 64)),
            new PIXI.Texture(resources.objects.texture, new PIXI.Rectangle(48, 80, 48, 64)),
            new PIXI.Texture(resources.objects.texture, new PIXI.Rectangle(48, 144, 48, 64)),
        ];

        for (var i = 0; i < 300; i++) {
            const spriteIndex = Math.floor(Math.random() * treeTextures.length);
            sprites.trees.push(new PIXI.Sprite(treeTextures[spriteIndex]));
        }

        var logTextures = [

            //logs
            new PIXI.Texture(resources.objects.texture, new PIXI.Rectangle(96, 80, 32, 16)),
            new PIXI.Texture(resources.objects.texture, new PIXI.Rectangle(96, 96, 32, 16)),
            new PIXI.Texture(resources.objects.texture, new PIXI.Rectangle(96, 144, 48, 32)),

            // bush
            new PIXI.Texture(resources.objects.texture, new PIXI.Rectangle(96, 112, 32, 32)),
            new PIXI.Texture(resources.objects.texture, new PIXI.Rectangle(128, 96, 32, 48)),

            // saproling
            new PIXI.Texture(resources.objects.texture, new PIXI.Rectangle(128, 80, 16, 16)),
            new PIXI.Texture(resources.objects.texture, new PIXI.Rectangle(144, 80, 16, 16)),

            // stump
            new PIXI.Texture(resources.objects.texture, new PIXI.Rectangle(160, 88, 32, 32)),
            new PIXI.Texture(resources.objects.texture, new PIXI.Rectangle(160, 120, 32, 32)),
        ]


        for (var i = 0; i < 20; i++) {
            const spriteIndex = Math.floor(Math.random() * logTextures.length);
            sprites.trees.push(new PIXI.Sprite(logTextures[spriteIndex]));
        }

        sprites.objects = new PIXI.Sprite(resources.objects.texture)

        drawWorld();
    });