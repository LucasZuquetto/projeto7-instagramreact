let sugestoesObj = [{username: 'bad.vibes.memes', msg:"Segue você"},
                {username: 'chibirdart', msg:"Segue você"},
                {username: 'razoesparaacreditar', msg:"Novo no Instagram"},
                {username: 'adorable_animals', msg:"Segue você"},
                {username: 'smallcutecats', msg:"Segue você"},]

let sugestoes = sugestoesObj.map(sug => (
<div class="sugestao">
    <div class="usuario">
        <img src={'assets/img/' + sug.username + '.svg'} />
        <div class="texto">
            <div class="nome">{sug.username}</div>
            <div class="razao">{sug.msg}</div>
        </div>
    </div>

    <div class="seguir">Seguir</div>
</div>
))

export default function Sugestoes() {
    return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      {sugestoes}
      
      </div>
    )
}