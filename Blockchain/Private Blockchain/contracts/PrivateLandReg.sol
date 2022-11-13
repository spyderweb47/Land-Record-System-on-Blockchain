// Solidity program 

// SPDX-License-Identifier: MIT

pragma solidity ^0.8.12;
 
 import "@openzeppelin/contracts/utils/Strings.sol";
 
// Creating a Smart Contract
contract PrivateLandReg{

    //admin addreses
    address[] listuser = [0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2,
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
       uint kycno;
       string contact;
       uint surveyno;
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

    function gettotalLandids() public view returns(string memory){
        string memory Slandid;
        string memory totalpin;
        for(uint i=0;i<lands.length;i++)
        {
            Land memory l =lands[i];
            Slandid=Strings.toString(l.landid);
            totalpin=string.concat(totalpin,",",Slandid);
        }
        return(totalpin);

    }


   // Function to add 
   // Land details
   function addLand(uint landid, string memory ownername, string memory landtype, string memory geolocation, string memory amount, string memory regdate, uint  pincode, uint kycno, string memory contact,uint surveyno) public {
       Land memory l=Land(landid,ownername,landtype,geolocation,amount,regdate,pincode,kycno,contact,surveyno);
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
  


    //Function get land ids from surveyno
   function getSurveylandids(uint surveyno) public view returns(string memory){
       uint i;
       string memory Slandid;
       string memory totalpin;
       for(i=0;i<lands.length;i++)
       {
           Land memory l =lands[i];
           if(l.surveyno==surveyno)
           {
            Slandid=Strings.toString(l.landid);
            totalpin=string.concat(totalpin,",",Slandid);
           }          
       }
       return(totalpin);
   }


    //Function get land ids from kycno
   function getKyclandids(uint kycno) public view returns(string memory){
       uint i;
       string memory Slandid;
       string memory totalpin;
       for(i=0;i<lands.length;i++)
       {
           Land memory l =lands[i];
           if(l.kycno==kycno)
           {
            Slandid=Strings.toString(l.landid);
            totalpin=string.concat(totalpin,",",Slandid);
           }          
       }
       return(totalpin);
   }

    //checkid
      function Checkid(uint landid) public view returns(string memory) {
       uint i;
       string memory data;
       for(i=0;i<lands.length;i++)
       {
           Land memory l =lands[i];
           if(l.landid==landid)
           {
            data="1";
           } else {
               data="0";
           }
           
       }
       return(data);
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


//get pincode
       function getPincode(uint landid) public view returns(string memory) {
       uint i;
       string memory data;
       for(i=0;i<lands.length;i++)
       {
           Land memory l=lands[i];
           if(l.landid==landid)
           {
            data=Strings.toString(l.pincode);
           }
       }
       return(data);
   }


//get kyc
       function getKyc(uint landid) public view returns(string memory) {
       uint i;
       string memory data;
       for(i=0;i<lands.length;i++)
       {
           Land memory l=lands[i];
           if(l.landid==landid)
           {
            data=Strings.toString(l.kycno);
           }
       }
       return(data);
   }

//get surveyno
       function getSurveyno(uint landid) public view returns(string memory) {
       uint i;
       string memory data;
       for(i=0;i<lands.length;i++)
       {
           Land memory l=lands[i];
           if(l.landid==landid)
           {
            data=Strings.toString(l.surveyno);
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


  //get contact
      function getContact(uint landid) public view returns(string memory) {
       uint i;
       string memory data;
       for(i=0;i<lands.length;i++)
       {
           Land memory l =lands[i];
           if(l.landid==landid)
           {
            data=l.contact;
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

//ending bracket
}



