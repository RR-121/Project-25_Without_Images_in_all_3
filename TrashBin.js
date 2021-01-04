class TrashBin {
    constructor(x, y) {
        var options = {isStatic : true};
        this.x = x;
        this.y = y;

        this.width = 200;
        this.height = 80;


        this.bottomBody = Bodies.rectangle(x, y, this.width, this.height/4, options);
        this.rightBody = Bodies.rectangle(this.x + this.width/2, (this.y - this.height/2)+10, this.width/10, this.height, options);
        this.leftBody = Bodies.rectangle(this.x - this.width/2, (this.y - this.height/2)+10, this.width/10, this.height, options);

        this.image = loadImage("dustbingreen.png");
                
        World.add(world, this.bottomBody);
        World.add(world, this.rightBody);
        World.add(world, this.leftBody);
    }
    display() {
        var dpos = this.bottomBody.position;
        var rpos = this.rightBody.position;
        var lpos = this.leftBody.position;

        push();
        translate(dpos.x, dpos.y)
        imageMode(CENTER);
        //rectMode(CENTER);
        noStroke();
        fill("chocolate");
        image(this.image, 0, 0, this.width, this.height/4);
        pop();

        push();
        translate(rpos.x, rpos.y);
        rectMode(CENTER);
        noStroke();
        fill("chocolate");
        rect(0, 0, this.width/10, this.height);
        pop();

        push();
        translate(lpos.x, lpos.y);
        rectMode(CENTER);
        noStroke();
        fill("chocolate");
        rect(0, 0, this.width/10, this.height);
        pop();
    }
}
