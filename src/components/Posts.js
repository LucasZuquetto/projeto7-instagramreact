import React from "react";


export default function Posts(){
    const posts = [
        {
            usuario: "meowed",
            img: "gato-telefone",
            NomeLike: "respondeai",
            TotalLikes: "101.523"
        },
        {
            usuario: "barked",
            img: "dog",
            NomeLike: "adorable_animals",
            TotalLikes: "99.159"
        }
    ]

    const [curtida, setCurtida] = React.useState("heart-outline");
    const [cor, setCor] = React.useState("#000000");

    let PostJSX = posts.map(post =>  ( <div class="post">
    <div class="topo">
        <div class="usuario">
        <img src={"assets/img/"+ post.usuario + ".svg"} />
        {post.usuario}
        </div>
        <div class="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
    </div>

    <div class="conteudo">
        <img src={"assets/img/"+ post.img +".svg"} onClick={() => {
                    setCurtida("heart");
                    setCor("#ff0000");
        }} />
    </div>

    <div class="fundo">
        <div class="acoes">
        <div>
            <ion-icon name={curtida} style={{color: cor}} onClick={() => {
            (curtida === "heart-outline") ? setCurtida("heart") : setCurtida("heart-outline");
            (cor === "#000000") ? setCor("#ff0000") : setCor("#000000");
            }}></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div>
            <ion-icon name="bookmark-outline"></ion-icon>
        </div>
        </div>

        <div class="curtidas">
        <img src={"assets/img/"+ post.NomeLike +".svg"} />
        <div class="texto">
            Curtido por <strong>{post.NomeLike}</strong> e <strong>outras {post.TotalLikes}</strong>
        </div>
        </div>
    </div>
    </div>
    ))
    
    return(
        <div class="posts">
            {PostJSX}
        </div>
    )
}