function plur(num, one, many) {
    return num == 1 ? one : many;
}

export function layer1(L1, L2, L3) {
    if (L1 == 1) {
        if (L2 == 1 || L3 == 1) {
            // Lowest priority for result 1.
            return `Nothing.`
        }
        const pops = (L2 * 10) + L3;
        return `Hamlet, population ${pops}.`
    } else if (L1 >= 2 && L1 <= 5) {
        return `Nothing.`
    } else if (L1 >= 7 && L1 <= 8) {
        return `Natural resource.`
    } else if (L1 == 9) {
        return `Scenic feature (tree).`
    } else if (L1 == 10) {
        return `Scenic feature (stone).`
    } else if (L1 == 11) {
        return `Scenic feature (water).`
    } else if (L1 == 12) {
        return `Scenic feature (cave).`
    }

    return `Nothing.`
}

export function layer2(L1, L2, L3) {
    if (L2 == 1) {
        const fams = Math.ceil(L1 / L3)
        return `Homestead with ${fams} ${plur(fams, 'family', 'families')}.`
    } else if (L2 == 2) {
        return `Beast lair.`
    } else if (L2 >= 3 && L2 <= 7) {
        return `Nothing.`
    } else if (L2 == 8) {
        return `Medium ruins or tower.`;
    } else if (L2 == 9) {
        return `Weird scenic feature (tree).`
    } else if (L2 == 10) {
        return `Weird scenic feature (stone).`
    } else if (L2 == 11) {
        return `Weird scenic feature (water).`
    } else if (L2 == 12) {
        return `Weird scenic feature (cave).`
    }

    return `Nothing.`
}

export function layer3(L1, L2, L3) {
    if (L3 == 1) {
        if (L1 == 1 || L2 == 1) {
            return `Danger.`
        }
        if (L2 >= 9 && L2 <= 12) {
            return `Danger.`
        }
        if (L1 < 9) {
            return `Danger.`
        }
        if ((L1 + L2) % 2 == 1) {
            return `Hermit (political exile).`
        }
        return `Hermit.`
    } else if (L3 >= 2 && L3 <= 7) {
        return `Nothing.`
    } else if (L3 == 8) {
        return `Cave (dangerous).`
    } else if (L3 >= 9 && L3 <= 10) {
        return `Ruins, small.`
    } else if (L3 == 11) {
        return `Fort or dungeon.`
    } else if (L3 == 12) {
        return `Underworld entrance.`
    }
    return `Nothing.`
}