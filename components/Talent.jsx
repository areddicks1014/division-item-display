import React from 'react';

class Talent extends React.Component {
    constructor( props ){
        super( props );

        this.list = {
            accomplished: 'Rewards from Accolades are tripled.',
            accurate: 'Accuracy is increased by X%',
            adept: 'Skill increases your critical hits chance by 3% for y seconds.',
            astute: 'The first 3 bullets of your magazine have a x% higher chance to do a Critical Hit.',
            balanced: 'Weapon acquires maximum accuracy faster when shouldered.',
            brutal: 'Headshot damage is increased by X% when using this weapon.',
            capable: 'Using a skill improves the handling of your weapon for x seconds.',
            commanding: 'Every kill performed while the signature skill is active extends its duration by X%.',
            competent: 'Weapon damage is increased by X% for y seconds after using a skill.',
            coolheaded: 'Performing a headshot reduces all skill cooldowns by X%.',
            cunning: 'After reloading, your next shot with this weapon has a 9.5% higher critical hit chance.',
            deadly: 'Critical hit damage is increased by X%.',
            decisive:  'Headshots with your side arm deal x% more damage.',
            destructive: 'Armor destruction value is increased by X% when using this weapon.',
            determined: 'Killing a target reduces skill cooldowns by X%.',
            dominant: 'Every kill while your signature skill is active reduces the cooldown of your other skills by X%.',
            enduring: 'While in your last segment, your health continuously regenerates to fill up the segment.',
            expert: 'This weapon deals X% more damage when the target is below Y% health.',
            ferocious: 'Damage against elite and named enemies is increased by X%.',
            fierce: 'Critical hit chance is increased by X% when using this weapon.',
            forceful: 'Your armor is increased by X% while your Signature Skill is active.',
            fordern: 'Kills by active skills prolong their duration by X%.',
            harmful: 'Each hit has a X% chance to apply the "bleed" status effect.',
            intense: 'The first bullet of a magazine has a X% chance to apply the "on fire" status effect.',
            inventive: 'Your Skill Power is increased by 13% while you are at full health.',
            meticulous: 'Killing a traget has a X% chance to instantly refill the magazine.',
            nimble: 'While doing a cover to cover move in combat, you heal 2% of your max Health for every x meter run.',
            perceptive: 'Your Item find and Gold find bonuses are increased by x%.',
            predatory: 'Killing a target regenerates X% health over y seconds.',
            prepared: 'Damage is increased by X% when more than 40 meters from the target.',
            proficient: 'The first bullet shot when out of combat has a X% chance to result in a critical hit.',
            prosperous: 'Critical headshots grant you credits.',
            provident: 'The last bullet in your magazine deals X% bonus damage.',
            rapid: 'The cooldown of your healing skills is decreased by X%.',
            reckless: 'You deal X% more damage and receive X% more damage.',
            recovered: 'Damage taken while doing a cover to cover maneuver is regenerated over 5 seconds upon reaching your destination.',
            refreshed: 'When your health is in the last segment, all your healing is improved by 30%.',
            rehabilitated: 'When you are affected by a status effect you are healed for 2% every second.',
            rejuvenated: 'Consuming a medkit also removes all negative status effects from you.',
            relentless: '3% of the damage dealt by your skills is returned to you as healing.',
            resourceful: 'All healing applied to you is also applied to your skill objects.',
            responsive: 'Damage is increased by 5% when closer than 10 meters to the target.',
            restored: 'Killing a target with this weapon removes all negative status effects.',
            robust: 'You have X% more armor while in cover.',
            savage: 'Your Critical hit chance is increased by 13% against targets out of cover',
            selfpreserved: 'Critical hits with this weapon heal the user for X% of damage dealt.',
            skilled: 'Headshot kills with this weapon increase signature skill resources by X%.',
            specialized: '13% of your Firearms and Stamina are added to your Skill Power.',
            stable: 'Stability is improved by X%.',
            steadfast: 'While in cover, health regeneration kicks in twice as fast.',
            sturdy: 'Your armor is increased by 12.5% when you stay more than y seconds in the same cover.',
            sustained: 'Killing a target increases your health by X%.',
            swift: 'Reloading is X% faster.',
            talented: 'Killing a target with this weapon increases skill power by X% for y seconds.',
            technical: 'While your signature skill is active, your Skill Power is increased by 13%.',
            tenacious: 'Using a Medkit increases your damage by 9.5% for X seconds.',
            toxic: 'Headshots with this weapon have a X% chance to apply the "blind" status effect.',
            trained: 'Critical hits increase signature skill resources by X%. temporarily disabled',
            unforgiving: 'Missing health segments increases your damage by X%.',
            vicious: 'Critical hit chance is increased by X% while at full health.',
            vigorous: 'All your healing skills have Over Heal enabled.'
        }
    }

    render(){
        let firearms = null;
        let stamina = null;
        let electronics = null;
        let requirements = null;

        if ( this.props.requirements && this.props.requirements.firearms ){
            firearms = (
                <div
                    className = "requirement-stat-wrapper"
                >
                    <div
                        className = "icon firearms"
                    />
                    <div
                        className = "stat-requirement-number-wrapper"
                    >
                        { this.props.requirements.firearms }
                    </div>
                </div>
            );
        }

        if ( this.props.requirements && this.props.requirements.stamina ){
            stamina = (
                <div
                    className = "requirement-stat-wrapper"
                >
                    <div
                        className = "icon stamina"
                    />
                    <div
                        className = "stat-requirement-number-wrapper"
                    >
                        { this.props.requirements.stamina }
                    </div>
                </div>
            );
        }

        if ( this.props.requirements && this.props.requirements.electronics ){
            electronics = (
                <div
                    className = "requirement-stat-wrapper"
                >
                    <div
                        className = "icon electronics"
                    />
                    <div
                        className = "stat-requirement-number-wrapper"
                    >
                        { this.props.requirements.electronics }
                    </div>
                </div>
            );
        }

        if ( firearms || stamina || electronics ){
            requirements = (
                <div
                    className = "requirements-wrapper"
                >
                    <div
                        className = "requirements-title-wrapper"
                    >
                        { 'Requirement' }
                    </div>
                    { firearms }
                    { stamina }
                    { electronics }
                </div>
            );
        }

        return (
            <div
                className = "talent-wrapper"
            >
                <div
                    className = "talent-title-wrapper"
                >
                    { 'Talent' }
                </div>
                <div
                    className = "talent-title-separator"
                >
                    { '|' }
                </div>
                <div
                    className = "talent-title-name"
                >
                    { this.props.title }
                </div>
                <div
                    className = "talent-description-text"
                >
                    { this.list[ this.props.identifier ] }
                </div>
                { requirements }
            </div>
        );
    }
}

Talent.displayName = 'Talent';
Talent.propTypes = {
    identifier: React.PropTypes.string,
    requirements: React.PropTypes.shape({
        electronics: React.PropTypes.number,
        firearms: React.PropTypes.number,
        stamina: React.PropTypes.number
    }),
    title: React.PropTypes.string
};

export default Talent;
