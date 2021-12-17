import { Subtitle, Circle, SubtitlesUl } from "./style"

export default function Subtitles(){
    return(
        <SubtitlesUl>
            <Subtitle>
                <Circle type="selected"></Circle>
                <p>Selecionado</p>
            </Subtitle>
            <Subtitle>
                <Circle type="available"></Circle>
                <p>Disponível</p>
            </Subtitle>
            <Subtitle>
                <Circle type="unavailable"></Circle>
                <p>Indisponível</p>
            </Subtitle>
        </SubtitlesUl>
    )
}