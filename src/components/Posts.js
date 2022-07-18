


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
        <img src={"assets/img/"+ post.img +".svg"} />
    </div>

    <div class="fundo">
        <div class="acoes">
        <div>
            <ion-icon name="heart-outline"></ion-icon>
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