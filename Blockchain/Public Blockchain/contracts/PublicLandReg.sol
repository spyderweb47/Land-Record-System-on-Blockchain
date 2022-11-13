// Solidity program 

// SPDX-License-Identifier: MIT

pragma solidity ^0.8.12;
 
 import "@openzeppelin/contracts/utils/Strings.sol";
 
// Creating a Smart Contract
contract PublicLandReg{
  

      //admin addreses
    address[] listuser =[0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2,
                        0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db,
                        0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB];

   // Structure of Land data
   struct Land{     
       // State variables
       uint landid;
       string ownername; 
       string landtype;
       string geolocation;
       string amount;
       string regdate;
       uint pincode;     
   }
   
   //Dynamic array 
   Land []lands;



    function checkAdmin() public view returns(string memory){
         for(uint index = 0; index < listuser.length; index++){
            if(listuser[index] == (msg.sender)) {
                return("Admin");
            }
        }
        return("Not Admin");
    }

  
   // Function to add 
   // Land details
   function addLand(uint landid, string memory ownername, string memory landtype, string memory geolocation, string memory amount, string memory regdate, uint  pincode) public {
       Land memory l=Land(landid,ownername,landtype,geolocation,amount,regdate,pincode);
       lands.push(l);
   }

    //Function get land ids from pincode
   function getPincodelandids(uint pincode) public view returns(string memory){
       uint i;
       string memory Slandid;
       string memory totalpin;
       for(i=0;i<lands.length;i++)
       {
           Land memory l =lands[i];
           if(l.pincode==pincode)
           {
            Slandid=Strings.toString(l.landid);
            totalpin=string.concat(totalpin,",",Slandid);
           }          
       }
       return(totalpin);
   }
  
  //get owner name
      function getOwner(uint landid) public view returns(string memory) {
       uint i;
       string memory data;
       for(i=0;i<lands.length;i++)
       {
           Land memory l =lands[i];
           if(l.landid==landid)
           {
            data=l.ownername;
           }
       }
       return(data);
   }

//get land type
       function getLandtype(uint landid) public view returns(string memory) {
       uint i;
       string memory data;
       for(i=0;i<lands.length;i++)
       {
           Land memory l=lands[i];
           if(l.landid==landid)
           {
            data=l.landtype;
           }
       }
       return(data);
   }


       function getGeolocation(uint landid)  public view returns(string memory){
       uint i;
       string memory data;
       for(i=0;i<lands.length;i++)
       {
           Land memory l =lands[i];

           if(l.landid==landid)
           {
            data=l.geolocation;
           }
       }
       return(data);
   }
       
       
       function getAmount(uint landid) public view returns(string memory){
       uint i;
       string memory data;
       for(i=0;i<lands.length;i++)
       {
           Land memory l=lands[i];

           if(l.landid==landid)
           {
            data=l.amount;
           }
       }
     return(data);
   }


       function getRegdate(uint landid) public view returns(string memory){
       uint i;
       string memory data;
       for(i=0;i<lands.length;i++)
       {
           Land memory l=lands[i];

           if(l.landid==landid)
           {
            data=l.regdate;
           }
       }
     return(data);
   }


    //function to track history of land
    function TrackLand(uint landid) public view returns(string memory) {
     uint i;
     string memory result;
     string memory data;
     for (i=0;i<lands.length;i++)
     {
       Land memory l= lands[i];
       if(l.landid==landid)
       {
         data=string.concat(l.ownername,":",l.regdate);
         result=string.concat(result,",",data);
       }
     }
     return(result);
   }
}
