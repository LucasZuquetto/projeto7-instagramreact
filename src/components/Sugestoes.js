let sugestoesObjeto = [{username: 'bad.vibes.memes', msg:"Segue você"},
                {username: 'chibirdart', msg:"Segue você"},
                {username: 'razoesparaacreditar', msg:"Novo no Instagram"},
                {username: 'adorable_animals', msg:"Segue você"},
                {username: 'smallcutecats', msg:"Segue você"},]

let sugestoesJSX = sugestoesObjeto.map(suggestion => (
<div class="sugestao">
    <div class="usuario">
        <img src={'assets/img/' + suggestion.username + '.svg'} />
        <div class="texto">
            <div class="nome">{suggestion.username}</div>
            <div class="razao">{suggestion.msg}</div>
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

      {sugestoesJSX}
      
      </div>
    )
}