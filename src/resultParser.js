const namePartOne = {
  'S-Phys': {
    Infernal: { value: 'Infernal', desc: 'In a volcano.' },
    Bog: { value: 'Bog', desc: 'In a bog' },
    Swamp: { value: 'Swamp', desc: 'In a swamp' },
    Decay: { value: 'Decay', desc: 'Super undead my dudes' },
  },

  'S-Pers': {
    Ramble: { value: 'Ramble', desc: 'Talks a lot' },
    Smiling: { value: 'Smiling', desc: 'Creepy' },
    Cackle: { value: 'Cackle', desc: "Something's funny" },
  },

  'S-Abil': {
    Shifting: { value: 'Shifting', desc: "Somewhere it's' being in another place I guess" },
    Clawing: { value: 'Clawing', desc: "It's got nasty little claws" },
    Charging: { value: 'Charging', desc: 'Boop' },
    'Bone-Breaker': { value: 'Bone-Breaker', desc: 'It snap yer bones' },
  },

  'C-Phys': {
    Small: { value: 'Small', desc: 'Smol' },
    Fluffy: { value: 'Fluffy', desc: 'Very soft' },
    Normal: { value: 'Normal', desc: 'Just very average' },
    Adorable: { value: 'Adorable', desc: 'Its just so cute' },
  },

  'C-Pers': {
    Bothersome: { value: 'Bothersome', desc: 'Getting tired of them' },
    'That One': { value: 'That One', desc: 'That one party member, we all know the one' },
    Hilarious: { value: 'Hilarious', desc: 'They tell the best of jokes. Yes, this means that they can speak.' },
  },

  'C-Abil': {
    'Dance Master': { value: 'Dance Master', desc: 'You will be defeated with dance' },
    'Funny-Bone': { value: 'Funny-Bone', desc: "They'll slap ya bones" },
  },

  'N-Phys': {
    Prismatic: { value: 'Prismatic', desc: 'Shiny' },
    Pyro: { value: 'Pyro', desc: 'Fire' },
    Cryo: { value: 'Cryo', desc: 'Ice' },
    Bramble: { value: 'Bramble', desc: 'Pokey' },
    Paradox: { value: 'Paradox', desc: "Don't actually know" },
    Invisible: { value: 'Invisible', desc: "Can't be seen" },
    Coastal: { value: 'Coastal', desc: 'Salty' },
    Mountain: { value: 'Mountain', desc: 'Tall' },
    Sea: { value: 'Sea', desc: 'Extra Salty' },
    Sky: { value: 'Sky', desc: 'Might have wings' },
    Arboreal: { value: 'Arboreal', desc: 'Likes the trees' },
  },

  'N-Pers': {
    Royal: { value: 'Royal', desc: 'A ruler of some sort probably' },
    Mysterious: { value: 'Mysterious', desc: 'Spooky' },
  },

  'N-Abil': {
    Jumper: { value: 'Jumper', desc: 'Will jump at you' },
    Flying: { value: 'Flying', desc: 'Probably has wings' },
  },
};

const namePartTwo = {
  Cat: {
    Cat: { value: 'Cat', desc: 'Small but maybe fierce' },
    Lion: { value: 'Cat', desc: 'Big and fluffy' },
    Tiger: { value: 'Cat', desc: 'RIT' },
  },

  Dog: {
    Dog: { value: 'Dog', desc: 'Big maybe and loyal' },
    Hound: { value: 'Dog', desc: 'Bark' },
    Wolf: { value: 'Dog', desc: 'Wild good boy' },
  },

  Bird: {
    Owl: { value: 'Owl', desc: 'Can look' },
    Hawk: { value: 'Hawk', desc: 'Is big probably' },
    Falcon: { value: 'Falcon', desc: 'Can zoom' },
    Sparrow: { value: 'Sparrow', desc: 'Is small maybe' },
    Gull: { value: 'Gull', desc: 'Sea' },
  },

  Aberration: {
    Aberration: { value: 'Aberration', desc: 'Goopy' },
    Shapeshifter: { value: 'Shapeshifter', desc: 'It could be any one of us' },
    Mimic: { value: 'Mimic', desc: 'There might be loot though' },
    Spawn: { value: 'Spawn', desc: 'Might be a yikes depending' },
  },

  ExtraPlanar: {
    ExtraPlanar: { value: 'Extra-planar', desc: 'Not from this world' },
    Celestial: { value: 'Celestial', desc: 'Space magics' },
  },

  Undead: {
    Undead: { value: 'Undead', desc: 'Zombies' },
    Skeleton: { value: 'Skeleton', desc: 'Bones' },
    Lich: { value: 'Lich', desc: 'Big Magic Bones' },
  },

  Spirit: {
    Specter: { value: 'Specter', desc: 'Very Spooky' },
    Ghost: { value: 'Ghost', desc: 'Spooky' },
    Wraith: { value: 'Wraith', desc: 'Big Spooky' },
  },

  Elemental: {
    Elemental: { value: 'Elemental', desc: 'Smash or something' },
  },

  Plant: {
    Plant: { value: 'Plant', desc: 'Little leaves' },
    Vines: { value: 'Vines', desc: 'Long plants' },
    Tree: { value: 'Tree', desc: 'Tall plants' },
    Fungus: { value: 'Fungus', desc: 'Plants for sitting' },
  },

  Divine: {
    Archon: { value: 'Archon', desc: 'Trumpets?' },
    Angel: { value: 'Angel', desc: 'Wings but on a circle' },
    Valkyrie: { value: 'Valkyrie', desc: 'Wings but on a human' },
  },

  Demonic: {
    Demon: { value: 'Demon', desc: 'Big bad boi' },
    Fiend: { value: 'Fiend', desc: 'Smaller big bad boi' },
  },

  Horse: {
    Horse: { value: 'Horse', desc: 'CLOP' },
    Nightmare: { value: 'Nightmare', desc: 'Spooky horse' },
    Charger: { value: 'Charger', desc: 'Angry horse' },
    Unicorn: { value: 'Unicorn', desc: 'ALWAYS I WANT TO BE WITH YOU' },
    Pegasus: { value: 'Peagsus', desc: 'Flying horse' },
    Alicorn: { value: 'Alicorn', desc: 'Flying unicorn' },
  },

  Reptile: {
    Lizard: { value: 'Lizard', desc: 'Might bite' },
    Turtle: { value: 'Turtle', desc: 'Swimming tortoise' },
    Tortoise: { value: 'Tortoise', desc: 'Walking turtle' },
    Snake: { value: 'Snake', desc: 'SNAAAAAAAAAAAAAAAAAKE' },
    Serpent: { value: 'Serpent', desc: 'Big snake' },
    Basilisk: { value: 'Basilisk', desc: 'Freeze lizard' },
  },

  Dragon: {
    Dragon: { value: 'Dragon', desc: 'Big flying lizard' },
    Drake: { value: 'Drake', desc: 'Smaller big flying lizard' },
    Wyvern: { value: 'Drake', desc: 'Drake but with a tail I think' },
    Hydra: { value: 'Hydra', desc: "Multiple dragons but can't fly" },
  },
};

const q2Value = {
  Scaled: ['Reptile', 'Dragon'],
  Furred: ['Horse', 'Dog', 'Cat'],
  Winged: ['Dragon', 'Demonic', 'Divine', 'Bird'],
  Natural: ['Plant', 'Elemental', 'Reptile', 'Bird', 'Horse', 'Dog', 'Cat'],
  Terrible: ['Demonic', 'Spirit', 'Undead', 'Aberration'],
  ExtraPlanar: ['Demonic', 'Divine', 'ExtraPlanar'],
};

const getNamePartOne = (body) => {
  if (body.q1 === 'S') {
    switch (body.q3) {
      case 'Phys':
        return 'S-Phys';
      case 'Pers':
        return 'S-Pers';
      case 'Abil':
        return 'S-Abil';
      default:
        return 'N-Phys';
    }
  } else if (body.q1 === 'C') {
    switch (body.q3) {
      case 'Phys':
        return 'C-Phys';
      case 'Pers':
        return 'C-Pers';
      case 'Abil':
        return 'C-Abil';
      default:
        return 'N-Phys';
    }
  } else if (body.q1 === 'N') {
    switch (body.q3) {
      case 'Phys':
        return 'N-Phys';
      case 'Pers':
        return 'N-Pers';
      case 'Abil':
        return 'N-Abil';
      default:
        return 'N-Phys';
    }
  } else {
    return 'N-Phys';
  }
};

const getNameObj = (body) => {
  const nameObj = {
    name: '',
    nameOneType: '',
    nameTwoType: '',
    nameOne: '',
    nameTwo: '',
  };

  nameObj.nameOneType = getNamePartOne(body);
  let randQ2Val = Math.floor(Math.random() * (q2Value[body.q2].length - 1));
  nameObj.nameTwoType = q2Value[body.q2][randQ2Val];

  const nOOT = namePartOne[nameObj.nameOneType];
  const nOTT = namePartTwo[nameObj.nameTwoType];

  const keysOne = Object.keys(nOOT);
  const keysTwo = Object.keys(nOTT);

  const nameOneKey = keysOne[Math.floor(Math.random() * (keysOne.length - 1))];
  const nameTwoKey = keysTwo[Math.floor(Math.random() * (keysTwo.length - 1))];

  nameObj.nameOne = namePartOne[nameObj.nameOneType][nameOneKey];
  nameObj.nameTwo = namePartTwo[nameObj.nameTwoType][nameTwoKey];

  nameObj.name = `${nameObj.nameOne.value} ${nameObj.nameTwo.value}`;

  return nameObj;
};

const getDescription = (nameObj) => `${nameObj.nameOne.desc} \n ${nameObj.nameTwo.desc}`;

const getStats = () => {
  const stats = {
    atk: 0,
    def: 0,
    dex: 0,
    hp: 0,
  };
  return stats;
};

module.exports = {
  getNameObj,
  getDescription,
  getStats,
};
