class Security {

    constructor(){

        this.access = createInput("code1")
        this.access.position(100,90)
        this.access.style('background', 'white')

        this.button1 = createButton("check")
        this.button1.position(100,120)
        this.button1.style('background', 'lightgrey')

        this.access1 = createInput("code2")
        this.access1.position(740,195)
        this.access1.style('background', 'white')

        this.button2 = createButton("check")
        this.button2.position(740,230)
        this.button2.style('background', 'lightgrey')

        this.access2 = createInput("code3")
        this.access2.position(100,290)
        this.access2.style('background', 'white')

        this.button3 = createButton("check")
        this.button3.position(100,330)
        this.button3.style('background', 'lightgrey')

    }

    display(){

        this.button1.mousePressed(() =>{
            if(system.authenticate(accessCode1, this.access.value())){
                this.access.hide();
                this.button1.hide();
            }
});

this.button2.mousePressed(() =>{
    if(system.authenticate(accessCode2, this.access1.value())){
        this.access1.hide();
        this.button2.hide();
    }
});

this.button3.mousePressed(() =>{
    if(system.authenticate(accessCode3, this.access2.value())){
        this.access2.hide();
        this.button3.hide();
    }
});

             }
}