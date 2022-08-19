import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract CasNFT is ERC721URIStorage{
    using Counters for Counters.Counter;

    Counters.Counter private _myCounter;
    uint256 MAX_SUPPLY = 5;

    constructor() ERC721("Cas NFT", "CFT") {}

    function safeMint(address to, string memory uri) public{

        uint256 tokenId = _myCounter.current();
        require(tokenId <= MAX_SUPPLY, "Sorry, mint completed!");
        _myCounter.increment();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }


}