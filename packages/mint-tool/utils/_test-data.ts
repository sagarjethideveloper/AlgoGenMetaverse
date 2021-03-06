import { INftGeneratorOptions } from 'packages/mint-tool/utils/nft-generator/types'

export const testData = {
    collectionName: '',
    layers: [
        {
            name: '01_Background',
            folderId: '1qIZV5neqx-Y9ma5HsxkkFwlLoGwWxbuE',
            attributeName: 'Background',
        },
        { name: '02_Face', folderId: '1f_2sPEWuP0z1-wy3YJEQeEA2bBMhaK5d', attributeName: 'Face' },
        { name: '03-Eyes', folderId: '1MOwbJw-w6aN18hHHAeNG6W6VmuWdM31p', attributeName: 'Eyes' },
        { name: '04 Hair', folderId: '1bfzoduavz1_n1LLNCjUeec55IJRTao2B', attributeName: 'Hair' },
        { name: '05_Mouth', folderId: '1rG1Oo8Oj3spJQauUrIlhNPDYcPKtItSM', attributeName: 'Mouth' },
    ],
    attributes: [
        {
            name: 'Background',
            displayName: 'Background',
            canMiss: false,
            values: [
                { name: 'Orange-Dots.png', displayName: 'Orange Dots' },
                { name: 'Yellow-Dots.png', displayName: 'Yellow Dots' },
                { name: 'Blue-Dots.png', displayName: 'Blue Dots' },
                { name: 'Black-Ropes.png', displayName: 'Black Ropes' },
                { name: 'Golden-Black-Dots.png', displayName: 'Golden Black Dots' },
            ],
            selectedValueName: 'Orange-Dots.png',
        },
        {
            name: 'Face',
            displayName: 'Object',
            canMiss: false,
            values: [
                { name: 'Round-White.png', displayName: 'Round White' },
                { name: 'Round_Yellow.png', displayName: 'Round Yellow' },
                { name: 'Oval-White.png', displayName: 'Oval White' },
                { name: 'Oval-Yellow.png', displayName: 'Oval Yellow' },
            ],
            selectedValueName: 'Round-White.png',
        },
        {
            name: 'Eyes',
            displayName: 'Eyes',
            canMiss: false,
            values: [
                { name: 'Black.png', displayName: 'Black' },
                { name: 'Blue.png', displayName: 'Blue' },
                { name: 'Red.png', displayName: 'Red' },
            ],
            selectedValueName: 'Black.png',
        },
        {
            name: 'Hair',
            displayName: 'Hair',
            canMiss: false,
            values: [
                { name: 'Baby_Black.png', displayName: 'Baby Black' },
                { name: 'Punk_Black.png', displayName: 'Punk Black' },
                { name: 'Long Black.png', displayName: 'Long Black' },
                { name: 'Baby-Yellow.png', displayName: 'Baby Yellow' },
                { name: 'Punk Multicolor.png', displayName: 'Punk Multicolor' },
                { name: 'Long-Yellow.png', displayName: 'Long Yellow' },
            ],
            selectedValueName: 'Baby_Black.png',
        },
        {
            name: 'Mouth',
            displayName: 'Mouth',
            canMiss: false,
            values: [
                { name: 'Serious.png', displayName: 'Serious' },
                { name: 'Happy.png', displayName: 'Happy' },
                { name: 'Sad.png', displayName: 'Sad' },
            ],
            selectedValueName: 'Serious.png',
        },
    ],
    images: [
        {
            name: 'Orange-Dots.png',
            displayName: 'Orange Dots',
            imageUrl: 'https://files.moonlet.dev/tiexo/nft-demo/01_Background/Orange-Dots.png',
            layerName: '01_Background',
            attributeName: 'Background',
        },
        {
            name: 'Yellow-Dots.png',
            displayName: 'Yellow Dots',
            imageUrl: 'https://files.moonlet.dev/tiexo/nft-demo/01_Background/Yellow-Dots.png',
            layerName: '01_Background',
            attributeName: 'Background',
        },
        {
            name: 'Blue-Dots.png',
            displayName: 'Blue Dots',
            imageUrl: 'https://files.moonlet.dev/tiexo/nft-demo/01_Background/Blue-Dots.png',
            layerName: '01_Background',
            attributeName: 'Background',
        },
        {
            name: 'Black-Ropes.png',
            displayName: 'Black Ropes',
            imageUrl: 'https://files.moonlet.dev/tiexo/nft-demo/01_Background/Black-Ropes.png',
            layerName: '01_Background',
            attributeName: 'Background',
        },
        {
            name: 'Golden-Black-Dots.png',
            displayName: 'Golden Black Dots',
            imageUrl:
                'https://files.moonlet.dev/tiexo/nft-demo/01_Background/Golden-Black-Dots.png',
            layerName: '01_Background',
            attributeName: 'Background',
        },
        {
            name: 'Round-White.png',
            displayName: 'Round White',
            imageUrl: 'https://files.moonlet.dev/tiexo/nft-demo/02_Face/Round-White.png',
            layerName: '02_Face',
            attributeName: 'Face',
        },
        {
            name: 'Round_Yellow.png',
            displayName: 'Round Yellow',
            imageUrl: 'https://files.moonlet.dev/tiexo/nft-demo/02_Face/Round_Yellow.png',
            layerName: '02_Face',
            attributeName: 'Face',
        },
        {
            name: 'Oval-White.png',
            displayName: 'Oval White',
            imageUrl: 'https://files.moonlet.dev/tiexo/nft-demo/02_Face/Oval-White.png',
            layerName: '02_Face',
            attributeName: 'Face',
        },
        {
            name: 'Oval-Yellow.png',
            displayName: 'Oval Yellow',
            imageUrl: 'https://files.moonlet.dev/tiexo/nft-demo/02_Face/Oval-Yellow.png',
            layerName: '02_Face',
            attributeName: 'Face',
        },
        {
            name: 'Black.png',
            displayName: 'Black',
            imageUrl: 'https://files.moonlet.dev/tiexo/nft-demo/03-Eyes/Black.png',
            layerName: '03-Eyes',
            attributeName: 'Eyes',
        },
        {
            name: 'Blue.png',
            displayName: 'Blue',
            imageUrl: 'https://files.moonlet.dev/tiexo/nft-demo/03-Eyes/Blue.png',
            layerName: '03-Eyes',
            attributeName: 'Eyes',
        },
        {
            name: 'Red.png',
            displayName: 'Red',
            imageUrl: 'https://files.moonlet.dev/tiexo/nft-demo/03-Eyes/Red.png',
            layerName: '03-Eyes',
            attributeName: 'Eyes',
        },
        {
            name: 'Serious.png',
            displayName: 'Serious',
            imageUrl: 'https://files.moonlet.dev/tiexo/nft-demo/05_Mouth/Serious.png',
            layerName: '05_Mouth',
            attributeName: 'Mouth',
        },
        {
            name: 'Happy.png',
            displayName: 'Happy',
            imageUrl: 'https://files.moonlet.dev/tiexo/nft-demo/05_Mouth/Happy.png',
            layerName: '05_Mouth',
            attributeName: 'Mouth',
        },
        {
            name: 'Sad.png',
            displayName: 'Sad',
            imageUrl: 'https://files.moonlet.dev/tiexo/nft-demo/05_Mouth/Sad.png',
            layerName: '05_Mouth',
            attributeName: 'Mouth',
        },
        {
            name: 'Baby_Black.png',
            displayName: 'Baby Black',
            imageUrl: 'https://files.moonlet.dev/tiexo/nft-demo/04%20Hair/Baby_Black.png',
            layerName: '04 Hair',
            attributeName: 'Hair',
        },
        {
            name: 'Punk_Black.png',
            displayName: 'Punk Black',
            imageUrl: 'https://files.moonlet.dev/tiexo/nft-demo/04%20Hair/Punk_Black.png',
            layerName: '04 Hair',
            attributeName: 'Hair',
        },
        {
            name: 'Long Black.png',
            displayName: 'Long Black',
            imageUrl: 'https://files.moonlet.dev/tiexo/nft-demo/04%20Hair/Long%20Black.png',
            layerName: '04 Hair',
            attributeName: 'Hair',
        },
        {
            name: 'Baby-Yellow.png',
            displayName: 'Baby Yellow',
            imageUrl: 'https://files.moonlet.dev/tiexo/nft-demo/04%20Hair/Baby-Yellow.png',
            layerName: '04 Hair',
            attributeName: 'Hair',
        },
        {
            name: 'Punk Multicolor.png',
            displayName: 'Punk Multicolor',
            imageUrl: 'https://files.moonlet.dev/tiexo/nft-demo/04%20Hair/Punk%20Multicolor.png',
            layerName: '04 Hair',
            attributeName: 'Hair',
        },
        {
            name: 'Long-Yellow.png',
            displayName: 'Long Yellow',
            imageUrl: 'https://files.moonlet.dev/tiexo/nft-demo/04%20Hair/Long-Yellow.png',
            layerName: '04 Hair',
            attributeName: 'Hair',
        },
    ],
}

export const demoSettings: INftGeneratorOptions = {
    maxTries: 300,
    randomSeed: 1234567890,
    nftCount: 50,
    attributesCompatibility: [
        {
            type: 'deny',
            name: 'punk hair + red eyes = not ok',
            condition: {
                and: [
                    {
                        attributes: {
                            Hair: ['Punk Multicolor.png'],
                        },
                    },
                    {
                        attributes: {
                            Eyes: ['Red.png'],
                        },
                    },
                ],
            },
        },
    ],
    targets: {
        rarity: [
            {
                nftCount: 25,
                rarityScore: {
                    min: 1,
                    max: 99999999,
                },
                attributesCount: {
                    min: 4,
                    max: 7,
                },
            },
        ],
        attributesValuesOccurences: {
            Hair: {
                'Baby-Yellow.png': {
                    max: 10,
                },
            },
        },
    },
}
