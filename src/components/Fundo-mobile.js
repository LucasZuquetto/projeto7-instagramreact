export default function Fundomobile(){
    const icones = [
        'home',
        'search-outline',
        'add-circle-outline',
        "heart-outline",
        "person-outline"
    ]
    return(
        <div class="fundo-mobile">
            {icones.map(icone => <ion-icon name={icone}></ion-icon>)}
        </div>
    )
}