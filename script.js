class Color {
    constructor(Output, colorCode, width, borderRadius, Align, img) {
      
        this.Output = Output;

        this.colorCode = colorCode;
        this.width = width;
        this.borderRadius = borderRadius;
        this.Align = Align;
        this.img = img;
    }

    
    GetCard() {
        const card = document.createElement("div");
        card.className = "color-card";

        
        card.style.backgroundColor = this.colorCode;
        card.style.width = this.width;
        card.style.borderRadius = this.borderRadius;
        card.style.textAlign = this.Align;
        card.style.padding = "15px";
        card.style.boxSizing = "border-box";

        if (this.img) {
            const image = document.createElement("img");
            image.src = this.img;
            image.style.borderRadius = this.borderRadius;
            card.appendChild(image);
        }

        return card;
    }
}


const outputElement = document.getElementById("output");


const colorObject = new Color(
    outputElement,
    "#3498db",
    "300px",
    "12px",
    "center",
    "https://picsum.photos/300/180"
);


outputElement.appendChild(colorObject.GetCard());
