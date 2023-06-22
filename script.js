$(document).ready(function() {
  $('#submit_button').click(function() {

    
    var input = $('.input_box').val().trim().toUpperCase();

    var found = false;
    for (var i = 0; i < dataSheet.length; i++) {
      var sku = dataSheet[i]['SKU Code'].trim().toUpperCase();
      var binNumber = dataSheet[i]['BIN Number'].trim();
      var itemName = dataSheet[i]['Product'].trim();

      if (sku === input) {
        $('#binNumberOutput').text(binNumber);
        $('#itemNameOutput').text(itemName);
        found = true;
        break;
      }
    }

    if (!found) {
      $('#binNumberOutput').text('SKU not found');
    }


  // ---------------------------The keywords to search to change the image (LIST IS COMPLETELY EXPANDABLE)------------------------
  var keywords = 
  ["A1 B1", "A1 B2", 
  "A2 B1", "A2 B2", 
  "A3 B1", "A3 B2", "A3 B3", 
  "A4 B1", "A4 B2", "A4 B3",
  "A5 B1", "A5 B2", "A5 B3",
  "A6 B1", "A6 B2", "A6 B3",
  "A7 B1", "A7 B2", "A7 B3",
  "A8 B1", "A8 B2", "A8 B3",
  "A9",
  "A10",
  "A11",
  "A12",
  "UNDER MEZ",
  "SHOWROOM",
  "A13 B1", "A13 B2", "A13 B3", "A13 B4",
  "A14 B1", "A14 B2", "A14 B3", "A14 B4",
  "A15 B1", "A15 B2", "A15 B3", "A15 B4",
  "A16 B1", "A16 B2", "A16 B3", "A16 B4",
  "A17 B1", "A17 B2", "A17 B3", "A17 B4",
  "A18 B1", "A18 B2", "A18 B3", "A18 B4",
  "ABOVE KITCHEN B1", "ABOVE KITCHEN B2",
  ];
  


  function getStringBeforeSecondSpace(str) {
    var firstSpaceIndex = str.indexOf(' ');
    var secondSpaceIndex = str.indexOf(' ', firstSpaceIndex + 1);
    if (secondSpaceIndex !== -1) {
      return str.substring(0, secondSpaceIndex);
    }
    return str;
  }

  //A13 B132 S21312

  // The text inside the element with id="binNumberOutput"
  var binNumberText = $('#binNumberOutput').text();
  var imgName = getStringBeforeSecondSpace(binNumberText);

  $('#mapimg').html('<img src="'+imgName+'.png">')

  // // Flag to keep track if a match is found
  // var matchFound = false;

  // Check if the binNumberText includes any of the keywords
  // for (var i = 0; i < keywords.length; i++) {
  //   if (binNumberText.includes(keywords[i])) {
  //     // If it does
  //     // Hide the main image
  //     $('#main_image').hide();

  //      // Show the '.styled_notification'
  //      $('.styled_notification').show();

  //     // Show the relevant image
  //     var imageId = keywords[i].replace(/ /g, '') + 'img'; // Create the image id from the keyword (e.g., "A1B1img")

  //     //$('#' + imageId).show();
  //     $('#mapimg').html('<img src="'+keywords[i] +'.png">')

  //     // Indicate that a match was found
  //     matchFound = true;

  //     // Stop the loop as we have found a match
  //     break;
  //   }
  // }

  // If no match was found after going through all the keywords
  if (!matchFound) {
    alert("Cannot Update Map from this BIN Number");
    $('.sku_image').hide();
    $('#main_image').show();
  
    // Hide the 'styled_notification'
    $('.styled_notification').hide(); 
  }
  });

$(document).ready(function() {  
  $('.input_box').focus(function() {
    $(this).val(''); // Clear the value of the SKU input box
  });

  $('.input_box').on('input', function() {
    var inputVal = $(this).val().toUpperCase(); // Convert input to uppercase for case-insensitive matching
    var options = $('#skuList option');
    var minChars = 3; // Minimum number of characters for autocomplete suggestion
  
    var matchedOptions = options.filter(function() {
      var optionVal = $(this).val().toUpperCase(); // Convert option value to uppercase for case-insensitive matching
      return optionVal.indexOf(inputVal) === 0 && inputVal.length >= minChars;
    });
    if (matchedOptions.length === 0) {
      $('#itemNameOutput').empty()
      $('#binNumberOutput').empty() // Clear the item name
    }
  });

  $(document).ready(function() {
    $('#myForm').submit(function(e) {
      e.preventDefault(); // Prevent the default form submission
      // Perform your form submission logic here

      return false; // Return false to prevent further propagation
    });

    $('.input_box').on('keypress', function(e) {
      if (e.which === 13) { // Check if the Enter key is pressed
        e.preventDefault(); // Prevent the default form submission
        $('#submit_button').click(); // Trigger the submit button click event
      }

    });
  });


    
    // $('.close-button').click(function() {
    //   $('#fullscreen-image').fadeOut();
    //   $('body').css('overflow', 'auto'); // Restore scrolling of the page
      
    //   // Remove the landscape class from the image to reset its orientation
    //   $('#fullscreen-image img').removeClass('landscape');
    // });



        // $('#main_image').on('click touchstart', function(e) {
    //   e.preventDefault();
    //   var imgSrc = $(this).attr('src');
    //   $('#fullscreen-image img').attr('src', imgSrc);
    //   $('#fullscreen-image').fadeIn();
    // });
  
    // $('#fullscreen-image').on('click touchstart', function(e) {
    //   e.preventDefault();
    //   $(this).fadeOut();
    // });
  
    // $('#fullscreen-image').click(function() {
    //   $(this).fadeOut();
    //   $('body').css('overflow', 'auto'); // Restore scrolling of the page
      
    //   // Remove the landscape class from the image to reset its orientation
    //   $('#fullscreen-image img').removeClass('landscape');
    // });
  


    // $('.input_box').on('input', function() {
    //   var inputVal = $(this).val().toUpperCase(); // Convert input to uppercase for case-insensitive matching
    //   var options = $('#skuList option');
    //   var minChars = 3; // Minimum number of characters for autocomplete suggestion
    
    //   if (inputVal.length < minChars) {
    //     $('#autocompleteList').empty(); // Clear the autocomplete suggestions
    //     return;
    //   }
    
    //   var matchedOptions = options.filter(function() {
    //     var optionVal = $(this).val().toUpperCase(); // Convert option value to uppercase for case-insensitive matching
    //     return optionVal.indexOf(inputVal) === 0;
    //   });
    
    //   $('#autocompleteList').empty();
    //   matchedOptions.each(function() {
    //     $('#autocompleteList').append('<option value="' + $(this).val() + '">');
    //   });
    // });
  
    // function addToSkuList(optionValue) {
    //   $('#skuList').append('<option value="' + optionValue + '">');
    // }
    
    // //First 5 Sample Testing
    // addToSkuList('WRNCMBUR');
    // addToSkuList('TORC200BR');
    // addToSkuList('TORC200PG');
    // addToSkuList('MHCHORSE');
    // addToSkuList('MESHHNBL');
    
  });
  
//---------------------Data List of all SKU's, Bin Locations and product names to the Website------------------------------------

  var dataSheet = [
    {
  'SKU Code': 'WRNCMBUR',
  'BIN Number': 'A10',
  'Product': '1200D Rainsheet Hybrid Mesh Neck Combo – Chocolate & Silver '
 },
 {
  'SKU Code': 'TORC200BR',
  'BIN Number': 'A15 B2-4 S4',
  'Product': '1200D Turnout-200g Fill- Blue & Red Check'
 },
 {
  'SKU Code': 'TORC200PG',
  'BIN Number': 'A3 B1-3 S5',
  'Product': '1200D Turnout 200g Fill - Pink & Grey Check'
 },
 {
  'SKU Code': 'MHCHORSE',
  'BIN Number': 'A16 B2 S3 ',
  'Product': '140gsm Mesh Hood Combo - Silver Horses '
 },
 {
  'SKU Code': 'MESHHNBL',
  'BIN Number': 'A1 B1-2 S1-2',
  'Product': '140gsm Mesh Neck Combo - Silver Horses '
 },
 {
  'SKU Code': 'WRNCBRCHECK',
  'BIN Number': 'A13 B2-4 S2',
  'Product': '1680D Rainsheet 0g Fill -Blue Red Check'
 },
 {
  'SKU Code': 'WRNCPGCHECK',
  'BIN Number': 'A13 B4 S3-4',
  'Product': '1680D Rainsheet 0g FIll- Pink & Grey Check'
 },
 {
  'SKU Code': 'WRNCNAVR',
  'BIN Number': 'A11',
  'Product': '1680D Rainsheet Neck Combo - Navy & Red Stars'
 },
 {
  'SKU Code': 'blank3',
  'BIN Number': 'A1',
  'Product': '410gsm Mesh Hood Combo White with Navy & Red Trim '
 },
 {
  'SKU Code': 'SPNGWNSAP, SPNGWNSAPF, SPNGWNAPP',
  'BIN Number': 'A16 B2 S6-7',
  'Product': 'AP Saddle Pad - Navy \/ Grey w White, Navy and Silver Cord '
 },
 {
  'SKU Code': 'SP-NA\/MA-APP, SP-NA\/MA-APF, SP-NA\/MA-AP',
  'BIN Number': 'A15 B2 S5-7',
  'Product': 'AP Saddle Pad - Navy \/ Maroon w Silver and Navy Cord'
 },
 {
  'SKU Code': 'SP-NA\/RERWN-APF, SPNRTNAPP',
  'BIN Number': 'A16 B2 S5',
  'Product': 'AP Saddle Pad - Navy \/ Red w White & Navy Cord'
 },
 {
  'SKU Code': 'SP-TEAL-APP, SP-TEAL-APF, SP-TEAL-AP',
  'BIN Number': 'A14-15 B1-2 S8',
  'Product': 'AP Saddle Pad - Teal'
 },
 {
  'SKU Code': 'HZ22239-BL',
  'BIN Number': 'A16 B3 S1-2',
  'Product': 'Basic Halter Black'
 },
 {
  'SKU Code': 'HZ22239-PDB',
  'BIN Number': 'A16 B3 S1-2',
  'Product': 'Basic Halter Navy'
 },
 {
  'SKU Code': 'HZ22239-RPI',
  'BIN Number': 'A16 B3 S1-2',
  'Product': 'Basic Halter Pink'
 },
 {
  'SKU Code': 'KWHWHI\/DEN',
  'BIN Number': 'A15 B1 S2',
  'Product': 'Black Kersey Wool Hood with White & Denim Trims'
 },
 {
  'SKU Code': 'KRUGBLKWD',
  'BIN Number': 'A14 B1-4 S3',
  'Product': 'Black Kersey Wool Rug with White & Denim Trims'
 },
 {
  'SKU Code': 'CRUGBLKW',
  'BIN Number': 'UNDER MEZ',
  'Product': 'Black Show Rug with White Trim'
 },
 {
  'SKU Code': 'CRHTNARG',
  'BIN Number': 'A18 B1-3 S1',
  'Product': 'Black Show Set + Surcingle with Metallic Rose Gold Trim'
 },
 {
  'SKU Code': 'CRHTBLKGB',
  'BIN Number': 'A6',
  'Product': 'Black Show Set + Surcingle with Platinum & Black Trims'
 },
 {
  'SKU Code': 'CRHTBLKWB',
  'BIN Number': 'A7 B1-3',
  'Product': 'Black Show Set + Surcingle with White Trim'
 },
 {
  'SKU Code': 'KHOODBLUSHG',
  'BIN Number': 'A15 B1 S5',
  'Product': 'Blush Pink and Grey Check Kersey Wool Hood'
 },
 {
  'SKU Code': 'KRUGBLUSHG',
  'BIN Number': 'A16 B1 S3-6',
  'Product': 'Blush Pink and Grey Check Kersey Wool Rug'
 },
 {
  'SKU Code': 'CRHTPINK',
  'BIN Number': 'A8',
  'Product': 'Blush Pink Show Set + Surcingle with Light Pink Trim'
 },
 {
  'SKU Code': 'blank1',
  'BIN Number': 'A13 B2 S2',
  'Product': 'Classic Hybrid Ripstop Hood Combo -Blush Pink & Grey '
 },
 {
  'SKU Code': 'blank2',
  'BIN Number': 'A14 B1',
  'Product': 'Classic Hybrid Ripstop Neck Combo - Blush Pink & Grey '
 },
 {
  'SKU Code': 'RRHCBPG',
  'BIN Number': 'A13 B1 S2',
  'Product': 'Classic Ripstop Hood Combo - Blush Pink & Grey'
 },
 {
  'SKU Code': 'RRNCBPG',
  'BIN Number': 'A14 B1 S1',
  'Product': 'Classic Ripstop Neck Combo- Blush Pink & Grey'
 },
 {
  'SKU Code': 'SP-WHT-BLK-AP-F',
  'BIN Number': 'A17 B1 S6',
  'Product': 'Competition White AP Saddle Pad - Black Binding'
 },
 {
  'SKU Code': 'SP-WHT-BLK-DR',
  'BIN Number': 'A17 B2 S6',
  'Product': 'Competition White Dressage Saddle Pad - Black Binding'
 },
 {
  'SKU Code': 'SP-WHT-BLK-DR-P',
  'BIN Number': 'A17 B2 S6',
  'Product': 'Competition White Dressage Saddle Pad - Black Binding'
 },
 {
  'SKU Code': 'SP-WHT-BLK-DR-F',
  'BIN Number': 'A17 B2 S6',
  'Product': 'Competition White Dressage Saddle Pad - Black Binding'
 },
 {
  'SKU Code': 'SP-WHT-NAV-DR-F, SP-WHT-NAV-DR-P, SP-WHT-NAV-DR',
  'BIN Number': 'A17 B3 S6',
  'Product': 'Competition White Dressage Saddle Pad - Navy Binding'
 },
 {
  'SKU Code': 'SP-WHT-WHT-DR-F, SP-WHT-WHT-DR-P, SP-WHT-WHT-DR',
  'BIN Number': 'A17 B1 S6',
  'Product': 'Competition White Dressage Saddle Pad - White Binding'
 },
 {
  'SKU Code': 'CRNCRN',
  'BIN Number': 'A1 S3-S6',
  'Product': 'Cotton Blend Showerproof Neck Combo - Red & Navy'
 },
 {
  'SKU Code': 'RRHCRN',
  'BIN Number': 'A8 S3',
  'Product': 'Diamond Ripstop Complete Hood Set Red & Navy'
 },
 {
  'SKU Code': 'RRHCNAVE',
  'BIN Number': 'A15 B2-4 S4-7',
  'Product': 'Diamond Ripstop Hood Combo – Navy'
 },
 {
  'SKU Code': 'RHOODRN',
  'BIN Number': 'A8 S3',
  'Product': 'Diamond Ripstop Hood Only - Red & Navy Separates'
 },
 {
  'SKU Code': 'RDRNCRN',
  'BIN Number': 'A5 B1-3 S3 ',
  'Product': 'Diamond Ripstop Neck Combo with Tailbag Red & Navy'
 },
 {
  'SKU Code': 'RDRHTNS',
  'BIN Number': 'A8 B1-3 S4',
  'Product': 'Diamond Ripstop Rug and Hood Set with Tail Bag Navy Trims'
 },
 {
  'SKU Code': 'RRUGRN',
  'BIN Number': 'A8 S3',
  'Product': 'Diamond Ripstop Rug Only - Red & Navy Separates'
 },
 {
  'SKU Code': 'NO Sku',
  'BIN Number': 'A8 S3',
  'Product': 'Diamond Ripstop Tail Bag Only - Red & Navy Separates'
 },
 {
  'SKU Code': 'SPNGWNSDRF, SPNGWNSDRP, SPNGWNSDR',
  'BIN Number': 'A16 B2 S6-7',
  'Product': 'Dressage Saddle Pad - Navy \/ Grey w White, Navy and Silver Cord'
 },
 {
  'SKU Code': 'SP-NAV\/MAR-DRF, SP-NAV\/MAR-DRP, SP-NAV\/MAR-DR',
  'BIN Number': 'A15 B2 S6-7',
  'Product': 'Dressage Saddle Pad - Navy \/ Maroon w Silver and Navy Cord '
 },
 {
  'SKU Code': 'SP-NA\/RENRW-DRF, SP-NA\/RENRW-DRP, SP-NA\/RENRW-DR',
  'BIN Number': 'A16 B2 S5',
  'Product': 'Dressage Saddle Pad - Navy \/ Red w Navy, Red & White Cord '
 },
 {
  'SKU Code': 'SP-TEAL-DR-P, SP-TEAL-DR-F, SP-TEAL-DR',
  'BIN Number': 'A14-15 B1-2 S8',
  'Product': 'Dressage Saddle Pad - Teal'
 },
 {
  'SKU Code': 'FRHAQNA',
  'BIN Number': 'A4 B1-3 S1',
  'Product': 'Flag Hood Combo - Aqua & Navy'
 },
 {
  'SKU Code': 'FRHTBG',
  'BIN Number': 'A4 B2 S3',
  'Product': 'Flag Hood Combo - Black & Platinum'
 },
 {
  'SKU Code': 'FRHTDPLP',
  'BIN Number': 'A4 B1-2 S4',
  'Product': 'Flag Hood Combo - Double Pink Trims'
 },
 {
  'SKU Code': 'FRNCAN',
  'BIN Number': 'A1 B-3 S1',
  'Product': 'Flag Neck Combo - Aqua & Navy'
 },
 {
  'SKU Code': 'FRNCRN',
  'BIN Number': 'A1 B1 S1',
  'Product': 'Flag Neck Combo - Navy & Red'
 },
 {
  'SKU Code': 'HALT-BLK\/SIL',
  'BIN Number': 'A16 B3-4 S1-3',
  'Product': 'Gala Basic Halter in Black and Silver Stripe'
 },
 {
  'SKU Code': 'HALT-NAV\/PIN',
  'BIN Number': 'A16 B3-4 S1-3',
  'Product': 'Gala Basic Halter in Navy and Pink Stripe'
 },
 {
  'SKU Code': 'HALT-NAV\/AQU',
  'BIN Number': 'A16 B3-4 S1-3',
  'Product': 'Gala Basic Halter in Navy and Teal Stripe'
 },
 {
  'SKU Code': 'HALT-PIN\/PUR',
  'BIN Number': 'A16 B3-4 S1-3 ',
  'Product': 'Gala Basic Halter in Pink and Purple Stripe'
 },
 {
  'SKU Code': 'blank4',
  'BIN Number': 'A16 B3-4 S1-3',
  'Product': 'Halter & Lead Rope Trophy Set - Black'
 },
 {
  'SKU Code': 'CRHTPINNP',
  'BIN Number': 'A14 B1-4 S7',
  'Product': 'Hot Pink Show Set with White & Navy Trim'
 },
 {
  'SKU Code': 'KHOODBLUSHG',
  'BIN Number': 'A15 B1 S5',
  'Product': 'Kersey Wool Hood -Aqua Blue Check'
 },
 {
  'SKU Code': 'KRUGCCAQUNAV',
  'BIN Number': 'A14 B1-4 S4',
  'Product': 'Kersey Wool Rug Check Aqua & Navy'
 },
 {
  'SKU Code': 'KRUGBWCC',
  'BIN Number': 'A18 B1-3 S2',
  'Product': 'Kersey Wool Rug Light Weight - Black Check with Black trim'
 },
 {
  'SKU Code': 'LSDBLWHD',
  'BIN Number': 'A5 B1-3 S6-7',
  'Product': 'Luxury Stable Doona - Black with White & Denim Trims'
 },
 {
  'SKU Code': 'LSDNAPI',
  'BIN Number': 'A4 B1-3 S6',
  'Product': 'Luxury Stable Doona - Navy with Light Pink and Hot Pink Trims'
 },
 {
  'SKU Code': 'LSDNLILPUR',
  'BIN Number': 'A2 B1-2 S1-2',
  'Product': 'Luxury Stable Doona - Navy with Lilac & Purple'
 },
 {
  'SKU Code': 'LSDNRW',
  'BIN Number': 'A3 B1-3 S4',
  'Product': 'Luxury Stable Doona - Navy with Red & White Trim'
 },
 {
  'SKU Code': 'LSDNAN',
  'BIN Number': 'A3 B1-3 S3',
  'Product': 'Luxury Stable Doona - Navy with Royal and Sky Blue Trims'
 },
 {
  'SKU Code': 'LSDPINGRY',
  'BIN Number': 'A2 B1-3 S4',
  'Product': 'Luxury Stable Doona - Pale Pink with Grey Trims'
 },
 {
  'SKU Code': 'MESHNSIL',
  'BIN Number': 'A13 B2 S3',
  'Product': 'Mesh Neck Combo 410gsm - Silver'
 },
 {
  'SKU Code': 'KWHPIN\/PIN',
  'BIN Number': 'A15 B1 S3',
  'Product': 'Navy Kersey Wool Hood with Light Pink & Hot Pink Trims'
 },
 {
  'SKU Code': 'KWHNAV\/PUR',
  'BIN Number': 'A15 B1 S2',
  'Product': 'Navy Kersey Wool Hood with tilad and Purple Trims'
 },
 {
  'SKU Code': 'KWHRED\/WHI',
  'BIN Number': 'A15 B1 S1',
  'Product': 'Navy Kersey Wool Hood with Red & White Trims'
 },
 {
  'SKU Code': 'KWHROY\/SKY',
  'BIN Number': 'A15 B1 S3',
  'Product': 'Navy Kersey Wool Hood with Royat & Sky Blue Trims'
 },
 {
  'SKU Code': 'KRUGNAVAN',
  'BIN Number': 'A15',
  'Product': 'Navy Kersey Wool Rug with Aqua & Navy Trims'
 },
 {
  'SKU Code': 'KRUGNAVLPP',
  'BIN Number': 'A17 B1-3 S3-4',
  'Product': 'Navy Kersey Wool Rug with Light & Hot Pink Trims'
 },
 {
  'SKU Code': 'KRUGNAVLILP',
  'BIN Number': 'A17 B1-3 S5',
  'Product': 'Navy Kersey Wool Rug with Lilac & Purple Trims'
 },
 {
  'SKU Code': 'KRUGNAVPURN',
  'BIN Number': 'A17 B2-3 S3',
  'Product': 'Navy Kersey Wool Rug with Purple & Navy Trims'
 },
 {
  'SKU Code': 'KRUGNAVRW',
  'BIN Number': 'A16 B1-2 S1-3',
  'Product': 'Navy Kersey Wool Rug with Red & White Trims'
 },
 {
  'SKU Code': 'KRUGNAVROYSKY',
  'BIN Number': 'A14 B1-4 S6',
  'Product': 'Navy Kersey Wool Rug with Royal Blue and Sky Blue Trims'
 },
 {
  'SKU Code': 'CRUGNAVRW',
  'BIN Number': 'UNDER MEZ',
  'Product': 'Navy Show Rug with Red Trim'
 },
 {
  'SKU Code': 'CRUGNAVW',
  'BIN Number': 'UNDER MEZ',
  'Product': 'Navy Show Rug with White Trim'
 },
 {
  'SKU Code': 'CRHTNAVAN',
  'BIN Number': 'A7 B3 S3-5',
  'Product': 'Navy Show Set + Surcingle with Aqua Trim'
 },
 {
  'SKU Code': 'CRHTNAVPP',
  'BIN Number': 'A7 ',
  'Product': 'Navy Show Set + Surcingle with Double Pink Trims'
 },
 {
  'SKU Code': 'CRHTNAVPUR',
  'BIN Number': 'A7',
  'Product': 'Navy Show Set + Surcingle with Double Purple Trims'
 },
 {
  'SKU Code': 'CRHTNAVRW',
  'BIN Number': 'A6',
  'Product': 'Navy Show Set + Surcingle with Red & White Trims'
 },
 {
  'SKU Code': 'CRHTNAVBB',
  'BIN Number': 'A8 B3 S5',
  'Product': 'Navy Show Set + Surcingle with Sky & Royal Blue Trim'
 },
 {
  'SKU Code': 'CRHTNAVWN',
  'BIN Number': 'A7',
  'Product': 'Navy Show Set + Surcingle with White Trim'
 },
 {
  'SKU Code': 'CRHTTEAL',
  'BIN Number': 'A7',
  'Product': 'Navy Show Set + Surcingle with Yellow Trim'
 },
 {
  'SKU Code': 'ULCANRNCGRY',
  'BIN Number': 'A14 B1-3 S1-2',
  'Product': 'NEW Deluxe Outback 24oz Canvas Neck Combo - Grey'
 },
 {
  'SKU Code': 'LCANRNCNAV',
  'BIN Number': 'A17 B1',
  'Product': 'NEW Hinterland 20oz Lined Canvas Neck Combo - Blue'
 },
 {
  'SKU Code': 'LCANRNCNAV',
  'BIN Number': 'A17 B1',
  'Product': 'NEW Hinterland 20oz Lined Canvas Neck Combo - Navy'
 },
 {
  'SKU Code': 'LCANRNCPIN',
  'BIN Number': 'A15 Floor',
  'Product': 'NEW Hinterland 20oz Lined Canvas Neck Combo - Pink'
 },
 {
  'SKU Code': 'CRHTREDBW',
  'BIN Number': 'A13 B2-4 S7',
  'Product': 'Red Show Set with Black & White Trim'
 },
 {
  'SKU Code': 'RRHCBG',
  'BIN Number': 'A8 B2 S1',
  'Product': 'Ripstop Hood Combo Black & Platinum'
 },
 {
  'SKU Code': 'RRHCPP',
  'BIN Number': 'A3 B2 S1',
  'Product': 'Ripstop Hood Combo Pink & Purple '
 },
 {
  'SKU Code': 'RRNCNCB',
  'BIN Number': 'A8 B1-3 S6',
  'Product': 'Ripstop Neck Combo Cornflower Blue & Navy'
 },
 {
  'SKU Code': 'RRNCPIPU',
  'BIN Number': 'A3 B2 S1',
  'Product': 'Ripstop Neck Combo Pink & Purple'
 },
 {
  'SKU Code': 'RRHTNCB',
  'BIN Number': 'A8 B1-3 S6',
  'Product': 'Ripstop Rug Hood Tail Bag Set in Cornflower Blue & Navy'
 },
 {
  'SKU Code': 'CRHTROYRW',
  'BIN Number': 'A13 B1-2 S7',
  'Product': 'Royal Blue Show Set with Red & White Trim'
 },
 {
  'SKU Code': 'MHCLPHP',
  'BIN Number': 'A3 S2',
  'Product': 'Summer Mesh Hood Combo - White with Pink Trims '
 },
 {
  'SKU Code': 'MRHTWNS',
  'BIN Number': 'A2',
  'Product': 'Summer Mesh Hood Combo - White with Sky Blue (NO EARS)'
 },
 {
  'SKU Code': 'MRHTBBW',
  'BIN Number': 'A2 B2 S3',
  'Product': 'Summer Mesh Hood Set - Black'
 },
 {
  'SKU Code': 'MRHTNWN',
  'BIN Number': 'A3 S3',
  'Product': 'Summer Mesh Hood Set - Navy'
 },
 {
  'SKU Code': 'MRHTNRW',
  'BIN Number': 'A2',
  'Product': 'Summer Mesh Hood Set - Navy with Red & White Trims '
 },
 {
  'SKU Code': 'MRNCRR',
  'BIN Number': 'Unknown',
  'Product': 'Summer Mesh Neck Combo - White with Red & Royal Blue '
 },
 {
  'SKU Code': 'TRNCBLKW',
  'BIN Number': ' 3',
  'Product': 'Towel Combo Black with White Trim'
 },
 {
  'SKU Code': 'TRNCNAVR',
  'BIN Number': 'A13',
  'Product': 'Towel Combo Navy with Red Trim'
 },
 {
  'SKU Code': 'TRNCPING',
  'BIN Number': 'A15 B2-4 S2-3',
  'Product': 'Towel Combo Pink with Grey Trim'
 },
 {
  'SKU Code': 'CRHTGRYBW',
  'BIN Number': 'A6',
  'Product': 'Charcoal Grey Show Set + Surcingle with Black & White Trim'
 }
      
      // Add more dataSheet entries as needed
    ];
});


