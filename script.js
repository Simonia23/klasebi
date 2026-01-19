
class Color {
    constructor(outputId, colorCode, width, borderRadius, align, img, title, description) {
        
        this.output = document.getElementById(outputId);
        
       
        this.colorCode = colorCode;
        this.width = width;
        this.borderRadius = borderRadius;
        this.align = align;
        this.img = img;
        this.title = title;
        this.description = description;
    }

   
    getCard() {
        
        const card = document.createElement('div');
        card.className = 'product-card';

        
        card.style.backgroundColor = this.colorCode;
        card.style.width = this.width;
        card.style.borderRadius = this.borderRadius;
        card.style.textAlign = this.align;
        
        
        card.style.padding = "20px";
        card.style.boxSizing = "border-box";
        card.style.color = "#fff";
        card.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";

        
        const image = document.createElement('img');
        image.src = this.img;
        image.style.width = "100%";
        image.style.borderRadius = "8px";
        image.style.display = "block";
        image.style.marginBottom = "15px";

        
        const titleElement = document.createElement('h2');
        titleElement.innerText = this.title;
        titleElement.style.margin = "10px 0";

        
        const descElement = document.createElement('p');
        descElement.innerText = this.description;
        descElement.style.fontSize = "14px";
        descElement.style.opacity = "0.9";

       
        const button = document.createElement('button');
        button.innerText = "უფრო ვრცლად";
        button.style.marginTop = "15px";
        button.style.padding = "8px 16px";
        button.style.cursor = "pointer";
        button.style.border = "none";
        button.style.borderRadius = "4px";
        button.style.background = "#fff";
        button.style.color = "#333";
        button.style.fontWeight = "bold";

       
        card.append(image, titleElement, descElement, button);

        return card;
    }

   
    render() {
        if (this.output) {
            
            this.output.innerHTML = ''; 
            
           
            const cardElement = this.getCard();
            this.output.appendChild(cardElement);
        } else {
            console.error(`ელემენტუი ID "${this.outputId}" არ არის ნაპოვნი.`);
        }
    }
}



const myProduct = new Color(
    'card-container',      
    '#2c3e50',             
    '300px',               
    '15px',                
    'center',             
    'https://picsum.photos/300/200', 
    'Modern Gadget',       
    'ეს მცირე ანოტაცია JS კლასით არის შექმნილი.' 
);


myProduct.render();