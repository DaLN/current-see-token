//SPDX-License-Identifier: Unlicense
pragma solidity ^0.6.8;

import "@nomiclabs/buidler/console.sol";
import "@openzeppelin/contracts/presets/ERC20PresetMinterPauser.sol";

contract CTSToken is ERC20PresetMinterPauser {
    constructor() public ERC20PresetMinterPauser("Current-See", "CTS") {}
}
