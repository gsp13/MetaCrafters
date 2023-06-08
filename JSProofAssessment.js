/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const myNFTS=[]
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name,_image,_description,_classification,_perks) {
     const NFT= {
        "name": _name,    
        "image": _image,  
        "description": _description,
        "attributes": [
            { "trait_type": "Classification", "value": _classification },      //Common,Rare,Epic,Legendary 
            { "trait_type": "Perks", "value": _perks },      
        ]
    }

    myNFTS.push(NFT);
    console.log("Minted NFT No. ",myNFTS.length," : ",_name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i = 0 ; i<myNFTS.length; i++){
        
        console.log("-----------------------------------------");
        console.log("ID:",i+1 );
        console.log("Name:",myNFTS[i].name );
        console.log("Image:",myNFTS[i].image );
        console.log("Description:",myNFTS[i].description );
        console.log("Classification:",myNFTS[i].attributes[0].value);
        console.log("Perks:",myNFTS[i].attributes[1].value );
        console.log("-----------------------------------------");
    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total NFTs:"+myNFTS.length)
}

// call your functions below this line
mintNFT('Cute Bear',
        'https://img.game8.co/3664877/e6fec458c7446eac7d00c0b0954f9797.png/show',
         ' A fuzzy and cuddly companion charm for your briefcase ',
        'Legendary',
        'reduces gunpowder used by 1 when crafting',
        )
mintNFT('Leader Zealot',
        'https://img.game8.co/3664864/c2fbe94baf70c774563dd46bf81deaaf.png/show',
        'Funsized Clerical Cult Member Charm for your Case ',
        'Common',
        '+10% health recovery for green herbs',
)
mintNFT('Chicken',
        'https://img.game8.co/3665471/ebde2a5e8bab5add7039d5cfb275deab.png/show',
        'Bokbokbokbok',
        'Rare',
        'health recovery rate by 100 percent for all egg types',
)
mintNFT('Merchant',
        'https://img.game8.co/3665310/e20b8cb32aaf4e4283400cf39385ad4b.png/show',
        'A miniature replica of the friendly weapon peddling stranger',
        'Epic',
        '5% off weapon upgrades',
)
listNFTs();
getTotalSupply();
