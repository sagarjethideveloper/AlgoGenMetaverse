- ✨Magic ✨

## Who we are
We are known in the blockchain ecosystem as  DefiSquare Team, a non-custodial digital asset wallet and a node operator for several blockchain networks, and being able to build an NFT marketplace is something we have set out to achieve for some time. We are really excited join the NFT movement and build [DefiSquare](https://DefiSquare.com).(Upcoming)

Our main goal is to build a generative NFT art toolbox in order to help artists launch large collections. Basically we would like to offer a new set of tools and simplified processes to make the generative NFT art a few clicks away. Please find below more details about how you can run locally our project.


## Getting Started


Or if you wish, run the development server:

```bash
# Install dependencies (yarn is needed as yarn workspaces are used)
yarn

# Run
npm run dev-mint-tool
# or
yarn dev-mint-tool
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

From the main page select `Open test project` button, this will populate the app with test data

## App overview

**Note**: At this point the application is running all the code in users browser, no API involved yet. It stores some data in localstorage. The generation algorithm is executed in a web worker, for large collections (~10k NFTs) and complex generation rules execution time can be over 1-2mins. 

At the top of the page there are two buttons:
* `Generate` - this will trigger the algorithm
* `Load other` - load other data, currently there is only one test data

Tabs:
* `Attributes` - Visualize all possbile values for the nft, grouped by each layer, if a layer should not be present in final result => check **Allow undefined**

* `Mixer` - Playground where you can mix the NFTs
* `Settings`
    * `General`

        **NFT count** - number of NFTs to be generated

        **Random seed** - using this on successive runs the algorithm will return same results, if no settings are changed

        **Max tries** - maximim number of tries for the algorithm to find the final results to prevent infinite loop (usually can be set to 3 * **Nft count**)

    * `Compatibility`

        Set of rules that can be used to define the compatibility between certain attributes
    * `Targets`

        **Rarity** - can define number of NFTs that should be generated with a certain rarity score and certain number of attributes

        **Attribute occurence** - adjust the number of occurence for a specific attribute

* `Preview`
    
    The results of the algoritm will be shown here




Workflow link: https://whimsical.com/pixelmaxnft-7xS5HKSaPqTqdorPZhugBx

- ✨Magic ✨




## Next Steps
Put it for mainnet after getting feedback from judges. Apply for grants. Please, tweet about this project if you find useful



