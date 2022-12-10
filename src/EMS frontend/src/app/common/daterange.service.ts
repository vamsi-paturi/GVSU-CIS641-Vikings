import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DaterangeService {
  startDate:any;
  endDate:any;
  rstartDate:any;
  rendDate:any;
  constructor() { 
    
  }
  downloadFile(data, filename='data',reportType) {
    let csvData:any 

    if (reportType==3) {
      csvData = this.ConvertToCSV(data, ['sNo','taxiName','taxiOwner', 'taxiEmail', 'taxiMobileNumber','taxiContactPerson', 'taxiContactPersonMobile','venueName','venueCategory','venueContactPersonPerson','venueContactPersonMobile']);
    }else if(reportType==2) {
      csvData = this.ConvertToCSV(data, ['sNo','taxiName','venueName','venueCategory', 'deviceId','simNumber','status', 'setupDate', 'address']);
    }else{
      csvData = this.ConvertToCSV(data, ['sNo','taxiName','venueName','venueCategory','country','state','deviceId','taxiType','dispatcher', 'bookingLocation','bookingStatus','bookingTime', 'bookingCompletionTime','bookingCancellationTime', 'bookingId']);
    }
    console.log(csvData)
    let blob = new Blob(['\ufeff' + csvData], { type: 'text/csv;charset=utf-8;' });
    let dwldLink = document.createElement("a");
    let url = URL.createObjectURL(blob);
    let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
    if (isSafariBrowser) {  //if Safari open in new window to save file with random filename.
        dwldLink.setAttribute("target", "_blank");
    }
    dwldLink.setAttribute("href", url);
    dwldLink.setAttribute("download", filename + ".csv");
    dwldLink.style.visibility = "hidden";
    document.body.appendChild(dwldLink);
    dwldLink.click();
    document.body.removeChild(dwldLink);
}
  ConvertToCSV(objArray, headerList) {
    let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    let str = '';
   // let row = 'S.No,';
    let row = '';

    for (let index in headerList) {
      if(headerList[index]=='sNo'){
        row += 'Sr.No,';
      }else if(headerList[index]=='taxiContactPerson'){
        row += 'Taxi Contact Person,';
      }else if(headerList[index]=='taxiContactPersonMobile'){
        row += 'Taxi Contact Person Phone,';
      }else if(headerList[index]=='taxiEmail'){
        row += 'Taxi Email,';
      }else if(headerList[index]=='taxiMobileNumber'){
        row += 'Taxi Mobile Number,';
      }else if(headerList[index]=='taxiName'){
        row += 'Taxi Name,';
      }else if(headerList[index]=='taxiOwner'){
        row += 'Taxi Owner,';
      }else if(headerList[index]=='venueCategory'){
        row += 'Venue Category,';
      }else if(headerList[index]=='venueContactPersonMobile'){
        row += 'Venue Contact Person Mobile,';
      }else if(headerList[index]=='venueContactPersonPerson'){
        row += 'Venue Contact Person,';
      }else if(headerList[index]=='venueName'){
        row += 'Venue Name,';
      }else if(headerList[index]=='address'){
        row += 'Address,';
      }else if(headerList[index]=='deviceId'){
        row += 'Device Id,';
      }else if(headerList[index]=='setupDate'){
        row += 'Setup Date,';
      }else if(headerList[index]=='simNumber'){
        row += 'Sim Number,';
      }else if(headerList[index]=='status'){
        row += 'Status,';
      }else if(headerList[index]=='bookingCancellationTime'){
        row += 'Booking Cancellation Time,';
      }else if(headerList[index]=='bookingCompletionTime'){
        row += 'Booking Completion Time,';
      }else if(headerList[index]=='bookingId'){
        row += 'Booking Id,';
      }else if(headerList[index]=='bookingLocation'){
        row += 'Booking Location,';
      }else if(headerList[index]=='bookingStatus'){
        row += 'Booking Status,';
      }else if(headerList[index]=='bookingTime'){
        row += 'Booking Time,';
      }else if(headerList[index]=='country'){
        row += 'Country,';
      }else if(headerList[index]=='dispatcher'){
        row += 'Dispatcher,';
      }else if(headerList[index]=='state'){
        row += 'State,';
      }else if(headerList[index]=='taxiType'){
        row += 'TaxiType,';
      }
      
      else{
        row += headerList[index] + ',';
      }
       
    }
    row = row.slice(0, -1);
    str += row + '\r\n';
    for (let i = 0; i < array.length; i++) {
        let line = '';
        //let line = (i+1)+'';
         let counter=0;
        for (let index in headerList) {
           let head = headerList[index];
            if (counter == 0) {
              line +=  array[i][head];
            }else{
              if(array[i][head]){
              array[i][head]=array[i][head].toString().replace(/,/g, '');
              }
              line += ',' + array[i][head];
            }
           counter++;
        }
        str += line + '\r\n';
    }
    return str;
}
}
