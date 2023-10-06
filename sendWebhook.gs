function sendWebhook() {
//Power By Discord : @_felin
var webhookUrl = PropertiesService.getScriptProperties().getProperty("webhookUrl");
  
  // Check if webhookUrl is empty
if (!webhookUrl) {
  console.error("Webhook URL not found in script properties.");
  return;
}
var sheets = SpreadsheetApp.getActiveSpreadsheet();
var sheetName = sheets.getSheets();
var columnData

var thailandTimeZone = "Asia/Bangkok";
var currentDate = new Date();
currentDate = Utilities.formatDate(currentDate, thailandTimeZone, "yyyy-MM-dd HH:mm:ss");
var lastDayBefore = new Date(currentDate);
lastDayBefore.setDate(lastDayBefore.getDate() - 1);
lastDayBefore = Utilities.formatDate(lastDayBefore, thailandTimeZone, "EEE dd/MM/yyyy");
var monthValue = lastDayBefore.split("/")[1];
var yearValue = lastDayBefore.split("/")[2];

sheetName.forEach(function(sheet) {
  var sheetName = sheet.getSheetName();
  if  ((sheetName.includes("Month " + monthValue + "/" + yearValue) 
        || (sheetName.includes("Month " + monthValue + "/" + (parseInt(yearValue) + 543).toString()))
      )) 
  {
    Logger.log((parseInt(yearValue) + 543))
    Logger.log("Processing sheet: " + sheetName);
    columnData = sheet.getRange("A:L").getValues();
  }
});
  
  // Filter the data to include only rows with the last day's date in column A
  var filteredData = columnData.filter(function(row) {
    if(Utilities.formatDate(new Date(row[0]), thailandTimeZone, "yyyy").toString() < yearValue){
      return;
    }
    return Utilities.formatDate(new Date(row[0]), thailandTimeZone, "EEE dd/MM/yyyy") === lastDayBefore;
  });
  Logger.log(lastDayBefore)
  Logger.log(JSON.stringify(filteredData, null, 4))

  if (filteredData.length > 0) {
    // Create the payload to send in the webhook
    var payload = {
      content: "สรุปรายการ",
      embeds: [
        {
          title: "ยอดรายรับ/รายจ่าย ประจำวัน : " + lastDayBefore,
          fields: [
            {
              name: "รายรับ",
              value: (filteredData[0][2] + filteredData[0][5]) === "" ? "-" : summary(filteredData[0][2], filteredData[0][5])
            },
            {
              name: "รายจ่าย",
              value: (filteredData[0][3] + filteredData[0][6]) === "" ? "-" : summary(filteredData[0][3], filteredData[0][6])
            },
            {
              name: "รายละเอียด",
              value: filteredData[0][8] === "" ? "-" : filteredData[0][8]
            },
            {
              name: "\u200B",
              value: "---------------------บัญชี---------------------" // Line of dashes
            },
            {
              name: "เข้า",
              value: filteredData[0][2] === "" ? "-" : filteredData[0][2].toFixed(2).toString()
            },
            {
              name: "ออก",
              value: filteredData[0][3] === "" ? "-" : filteredData[0][3].toFixed(2).toString()
            },
            {
              name: "คงเหลือ",
              value: filteredData[0][4] === "" ? "-" : filteredData[0][4].toFixed(2).toString()
            },
            {
              name: "\u200B",
              value: "--------------------เงินสด--------------------" // Line of dashes
            },
            {
              name: "เข้า",
              value: filteredData[0][5] === "" ? "-" : filteredData[0][5].toString()
            },
            {
              name: "ออก",
              value: filteredData[0][6] === "" ? "-" : filteredData[0][6].toString()
            },
            {
              name: "คงเหลือ",
              value: filteredData[0][7] === "" ? "-" : filteredData[0][7].toString()
            }
          ]
        }
      ]
    };

    // Send the data to the webhook
    var options = {
      "method": "POST",
      "contentType": "application/json",
      "payload": JSON.stringify(payload)
    };

    UrlFetchApp.fetch(webhookUrl, options);
  } else {
    console.log("No data found for the specified date.");
  }

}

function summary(value1, value2){
    if(value1 !== "" && value2 !== "") {
      return (value1 + value2).toFixed(2).toString()
    }else if(value1 !== "" && value2 === ""){
      return (value1).toFixed(2).toString()
    }else if(value2 !== "" && value1 === ""){
      return (value2).toFixed(2).toString()
    }
    return 0.00;
  }

