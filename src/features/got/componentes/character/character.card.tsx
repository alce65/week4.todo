import { SyntheticEvent } from 'react';
import { Character } from '../../models/character';
import { Counselor } from '../../models/counselor';
import { Squire } from '../../models/squire';
import { Fighter } from '../../models/fighter';
import { King } from '../../models/king';
import { Icon } from '../icon/icon';
import characterStyle from './character.card.module.css';

function templateOptional(character: Character): JSX.Element {
    if (character instanceof King) {
        return <li>Años de reinado: {character.kingdomYears}</li>;
    }
    if (character instanceof Fighter) {
        return (
            <>
                <li>Arma: {character.weapon}</li>
                <li>Destreza: {character.skill}</li>
            </>
        );
    }
    if (character instanceof Counselor) {
        return <li>Asesora a: {character.chief.name}</li>;
    }
    if (character instanceof Squire) {
        return (
            <>
                <li>Peloteo: {character.submission}</li>
                <li>Sirve a: ${character.master.name}</li>
            </>
        );
    }
    return <></>;
}

export function CharacterCard({ character }: { character: Character }) {
    function handleClick(ev: SyntheticEvent) {
        const element = ev.target as Element;
        if (element.textContent === 'habla') {
            console.log(character.communicate());
            const selector = '.comunications';
        } else {
            console.log('Muerooo', character.name);
            character.dead();
        }
    }

    const template = (
        <li className={`${characterStyle.host} col ${character.name}`}>
            <div className="card character__card">
                <img
                    src={`assets/img/${character.name.toLowerCase()}.jpg`}
                    alt={character.name + ' y ' + character.family}
                    className={`${characterStyle.__picture} card-img-top 
                        ${character.isAlive ? '' : 'reves'}`}
                />
                <div className="card-body">
                    <h2 className="character__name card-title h4">
                        {character.name} {character.family}
                    </h2>
                    <div className="character__info">
                        <ul className="list-unstyled">
                            <li>Edad: {character.age} años</li>
                            <li>
                                Estado:
                                {character.isAlive ? (
                                    <i className="fas fa-thumbs-up"></i>
                                ) : (
                                    <i className="fas fa-thumbs-down"></i>
                                )}
                            </li>
                            `;
                        </ul>
                    </div>
                    <div className={characterStyle.__overlay}>
                        <ul className="list-unstyled">
                            {templateOptional(character)}
                        </ul>
                        <div className={characterStyle.__actions}>
                            <button
                                className={`${characterStyle.__action} btn`}
                                onClick={handleClick}
                            >
                                habla
                            </button>
                            <button
                                className={`${characterStyle.__action} btn`}
                                onClick={handleClick}
                            >
                                muere
                            </button>
                        </div>
                    </div>
                </div>
                <Icon category={character.category}></Icon>
            </div>
        </li>
    );

    return template;
}
