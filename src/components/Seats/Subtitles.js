export default function Subtitles(){
    return(
        <div className="subtitles">
            <div>
                <div className="selected"></div>
                <p>Selecionado</p>
            </div>
            <div>
                <div className="available"></div>
                <p>Disponível</p>
            </div>
            <div>
                <div className="unavailable"></div>
                <p>Indisponível</p>
            </div>
        </div>
    )
}