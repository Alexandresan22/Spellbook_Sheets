import estilo from './css/expertise.module.css'
import { modCalc } from '../assets/spellbookSheets'

export const ExpertiseChar = ({horizontalState, attributes})=>{

    console.log(attributes )


    return (

        <div className={estilo.expertiseContainer}>


                    <h3 id="expertiseTitle">Perícias</h3>
        
            <ul className={`${estilo.expertiseElement} ${ horizontalState ? estilo.horizontal : false}`}>
                <li id="expertise1">
                    <p>Atletismo:</p> <span>{modCalc(attributes.strenght - 4)}</span>
                </li>
                <li id="expertise2">
                    <p>Furtividade:</p> <span>{modCalc(attributes.dexterity - 4)}</span>
                </li>
                <li id="expertise3">
                    <p>Acrobacia:</p> <span>{modCalc(attributes.dexterity - 4)}</span>
                </li>
                <li id="expertise4">
                    <p>Prestidigitação:</p> <span>{modCalc(attributes.dexterity - 4)}</span>
                </li>
                <li id="expertise5">
                    <p>Atuação:</p> <span>{modCalc(attributes.affinity - 4)}</span>
                </li>
                <li id="expertise6">
                    <p>Arcanismo:</p> <span>{modCalc(attributes.inteligence - 4)}</span>
                </li>
                <li id="expertise7">
                    <p>Investigação:</p> <span>{modCalc(attributes.inteligence - 4)}</span>
                </li>
                <li id="expertise8">
                    <p>Intuição:</p> <span>{modCalc(attributes.knowledge - 4)}</span>
                </li>
                <li id="expertise10">
                    <p>Intuição:</p> <span>{modCalc(attributes.knowledge - 4)}</span>
                </li>
                <li id="expertise11">
                    <p>Sobrevivência:</p> <span>{modCalc(attributes.knowledge - 4)}</span>
                </li>
                <li id="expertise12">
                    <p>Alquímia:</p> <span>{modCalc(attributes.inteligence - 4)}</span>
                </li>
                <li id="expertise13">
                    <p>Domação:</p> <span>{modCalc(attributes.knowledge - 4)}</span>
                </li>
                <li id="expertise14">
                    <p>Percepção:</p> <span>{modCalc(attributes.strenght - 4)}</span>
                </li>
                <li id="expertise15">
                    <p>Medicina:</p> <span>{modCalc(attributes.faith - 4)}</span>
                </li>
                <li id="expertise16">
                    <p>Religião:</p> <span>{modCalc(attributes.faith - 4)}</span>
                </li>
                <li id="expertise17">
                    <p>Natureza:</p> <span>{modCalc(attributes.knowledge - 4)}</span>
                </li>
                <li id="expertise18">
                    <p>Blefar:</p> <span>{modCalc(attributes.affinity - 4)}</span>
                    </li>
                <li id="expertise19">
                    <p>Intimidação:</p> <span>{modCalc(attributes.affinity - 4)}</span>
                    
                </li>   
            </ul>

        </div>
        
    )

}