const petsCollection = [];

const jennifer = {
        "name": "Jennifer",
        "img": "../../assets/images/jennifer.png",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": ["none"],
        "diseases": ["none"],
        "parasites": ["none"]
    },

    sophia = {
        "name": "Sophia",
        "img": "../../assets/images/sophia.png",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": ["parvovirus"],
        "diseases": ["none"],
        "parasites": ["none"]
    },

    woody = {
        "name": "Woody",
        "img": "../../assets/images/woody.png",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": ["adenovirus", "distemper"],
        "diseases": ["right back leg mobility reduced"],
        "parasites": ["none"]
    },

    scarlett = {
        "name": "Scarlett",
        "img": "../../assets/images/scarlett.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": ["parainfluenza"],
        "diseases": ["none"],
        "parasites": ["none"]
    },

    katrine = {
        "name": "Katrine",
        "img": "../../assets/images/katrine.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
    },

    timmy = {
        "name": "Timmy",
        "img": "../../assets/images/timmy.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": ["calicivirus", "viral rhinotracheitis"],
        "diseases": ["kidney stones"],
        "parasites": ["none"]
    },

    freddie = {
        "name": "Freddie",
        "img": "../../assets/images/freddie.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": ["rabies"],
        "diseases": ["none"],
        "parasites": ["none"]
    },

    charly = {
        "name": "Charly",
        "img": "../../assets/images/charly.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"]
    };

    august = {
        "name": "August",
        "img": "../../assets/images/august.png",
        "type": "Cat",
        "breed": "Sphynx",
        "description": "August is a unique Sphinx cat with no fur and big ears. He's playful and affectionate, and loves to cuddle up on laps to keep warm.",
        "age": "4 years",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
    },

    duke = {
        "name": "Duke",
        "img": "../../assets/images/duke.png",
        "type": "Dog",
        "breed": "Boxer",
        "description": "Duke is a loyal and protective Boxer with a heart of gold. He's great with kids and loves to play, but is also fiercely protective of his family.",
        "age": "1 years 4 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
    },

    coco = {
        "name": "Coco",
        "img": "../../assets/images/coco.png",
        "type": "Dog",
        "breed": "French Bulldog",
        "description": "Coco is a lovable French Bulldog with a personality as big as her ears. She's always up for a game of tug-of-war or a snuggle on the couch, and her wrinkly face never fails to make her owners smile.",
        "age": "2 years 6 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
    },

    luna = {
        "name": "Luna",
        "img": "../../assets/images/luna.png",
        "type": "Cat",
        "breed": "Siamese cat",
        "description": "Luna is a beautiful Siamese cat with striking blue eyes and a playful personality. She loves to cuddle up on laps and has a talent for getting into mischief.",
        "age": "2 years 3 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
    },

    simba = {
        "name": "Simba",
        "img": "../../assets/images/simba.png",
        "type": "Cat",
        "breed": "Bengal cat",
        "description": "Simba is a regal Bengal cat with a coat of leopard-like spots and a playful nature. He loves to climb and explore, and has a talent for hunting down anything that moves.",
        "age": "2 years 3 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
    },

    rocky = {
        "name": "Rocky",
        "img": "../../assets/images/rocky.png",
        "type": "Dog",
        "breed": "Rottweiler",
        "description": "Rocky is a powerful Rottweiler with a heart of gold. Despite his size and strength, he is a gentle giant who is great with kids and loves to play fetch.",
        "age": "2 years 3 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
    },

    sassy = {
        "name": "Sassy",
        "img": "../../assets/images/sassy.png",
        "type": "Cat",
        "breed": "Abyssinian cat",
        "description": "Sassy is a curious and energetic Abyssinian cat with a sleek and shiny coat. She's always on the go and loves to explore, but also enjoys snuggling up with her humans.",
        "age": "3 years 3 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
    },

    petsCollection.push(jennifer);
    petsCollection.push(sophia);
    petsCollection.push(woody);
    petsCollection.push(scarlett);
    petsCollection.push(katrine);
    petsCollection.push(timmy);
    petsCollection.push(freddie);
    petsCollection.push(charly);
    petsCollection.push(august);
    petsCollection.push(duke);
    petsCollection.push(coco);
    petsCollection.push(luna);
    petsCollection.push(simba);
    petsCollection.push(rocky);
    petsCollection.push(sassy);

console.log(petsCollection.length, petsCollection);