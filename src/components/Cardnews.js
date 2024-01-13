class Cardnews extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }

    build(){
      const componentRoot  = document.createElement("div");
      componentRoot.setAttribute("class","card");  
      
      const cardLeft = document.createElement("div");
      cardLeft.setAttribute("class","card_left");
      
      const autor = document.createElement("span");
      autor.textContent = "BY " + (this.getAttribute("autor") || "Anonymous"); 

      const linkTitle = document.createElement("a");
      linkTitle.textContent = this.getAttribute("title");
      linkTitle.href = this.getAttribute("link-url");

      const newsConstent = document.createElement("p");
      newsConstent.textContent = this.getAttribute('content')

      cardLeft.appendChild(autor);
      cardLeft.appendChild(linkTitle);
      cardLeft.appendChild(newsConstent);

      const cardRight = document.createElement("div");
      cardRight.setAttribute("class","card_right")      
      
      const newImage = document.createElement("img");
      newImage.src = this.getAttribute("photo") || "/assest/img/photo-default.jpg";
      newImage.alt = "Foto noticia"
      cardRight.appendChild(newImage);
       
      componentRoot.appendChild(cardLeft);
      componentRoot.appendChild(cardRight);

      return componentRoot;
    }
    
    style(){
        const style =  document.createElement("style");
        style.textContent = `
            .card{
                width: 80%;
                box-shadow: 14px 10px 35px 1px rgba(0,0,0,0.75);
                -webkit-box-shadow: 14px 10px 35px 1px rgba(0,0,0,0.75);
                -moz-box-shadow: 14px 10px 35px 1px rgba(0,0,0,0.75);
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }
            
                   
            .card_left span{
                font-weight: 400;
            }
            
            .card_left{
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 10px;
            
            }
            
            .card_left  a{
                margin-top: 15px;
                font-size: 25px;
                color: black;
                text-decoration: none;
            }
            
            .card_left p{
                color: gray;
                font-size: 18px;
            }

            .card_right img{
                width: 180px;
            }
        `;
        return style;
    }
}

customElements.define("card-news", Cardnews);