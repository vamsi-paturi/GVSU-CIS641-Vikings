import { Injectable } from '@angular/core';
import { RestRequest } from '../../core/res-request';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private restRequest: RestRequest, private http: HttpClient) {}
  getbookingList(page: number) {
    return this.restRequest.addAuthorization().get('bookings?page=' + page);
  }
  getbookingListByTaxiId(page: number, taxiId) {
    return this.restRequest
      .addAuthorization()
      .get('bookings?page=' + page + '&taxi_id=' + taxiId);
  }
  getbookingListByHotelId(page: number, taxiId) {
    return this.restRequest
      .addAuthorization()
      .get('bookings?page=' + page + '&hotel_id=' + taxiId);
  }
  getbookingListById(id) {
    return this.restRequest.addAuthorization().delete('bookings/' + id);
  }
  deletebooking(obj) {
    return this.restRequest.addAuthorization().post('delete-booking', obj);
  }
  gethotellist() {
    return this.restRequest.addAuthorization().get('getHotellistadmin');
  }
  gethotellistbyTaxiId(id) {
    return this.restRequest
      .addAuthorization()
      .get('getHotellistadmin?taxiId=' + id);
  }
  deleteHotelbyadmin(id) {
    return this.restRequest.addAuthorization().delete('deletehoteladmin/' + id);
  }
  gettaxilist() {
    return this.restRequest.addAuthorization().get('gettaxi');
  }
  gettaxidatabyid(id) {
    return this.restRequest.addAuthorization().get('gettaxibyid/' + id);
  }
  getdevicedatabyid(id) {
    return this.restRequest.addAuthorization().get('getdevicedatabyid/' + id);
  }
  updatetaxi(id, obj) {
    return this.restRequest.addAuthorization().put('updateTaxi/' + id, obj);
  }
  createTaxi(obj) {
    return this.restRequest.addAuthorization().post('createTaxi', obj);
  }
  sendAccessKey(obj) {
    return this.restRequest.addAuthorization().get('sendaccesskey/' + obj);
  }
  createhotel(obj) {
    return this.restRequest.addAuthorization().post('createHotel', obj);
  }
  createhotelbyadmin(obj) {
    return this.restRequest.addAuthorization().post('createhotelbyadmin', obj);
  }
  deletetaxibyadmin(id) {
    return this.restRequest.addAuthorization().delete('deletetaxi/' + id);
  }
  deleteDevicebyadmin(id) {
    return this.restRequest
      .addAuthorization()
      .delete('deleteDevicebyadmin/' + id);
  }
  logout() {
    return this.restRequest.addAuthorization().get('Adminlogout');
  }
  getdevicelist() {
    return this.restRequest.addAuthorization().get('getdevicelist');
  }
  createDevice(obj) {
    return this.restRequest.addAuthorization().post('createDevice', obj);
  }
  gettaxiforlist() {
    return this.restRequest.addAuthorization().get('gettaxiforlist');
  }
  updatedevicestatus(id, obj) {
    return this.restRequest
      .addAuthorization()
      .put('updatedevicestatus/' + id, obj);
  }
  gethoteldataadminbyid(id) {
    return this.restRequest
      .addAuthorization()
      .get('gethoteldataadminbyid/' + id);
  }
  updatehotelbyadmin(id, obj) {
    return this.restRequest
      .addAuthorization()
      .put('updatehotelbyadmin/' + id, obj);
  }
  genratedeviespassword(obj) {
    return this.restRequest.addAuthorization().post('device/generate-key', obj);
  }
  getQrCodeList(page: number) {
    return this.restRequest.addAuthorization().get('qr-code?page=' + page);
  }
  createQrCodeRequest(obj) {
    return this.restRequest.addAuthorization().post('qr-code', obj);
  }
  deleteQrCodebyadmin(id) {
    return this.restRequest.addAuthorization().delete('qr-code/' + id);
  }
  getQrCodebyid(id) {
    return this.restRequest.addAuthorization().get('qr-code/' + id);
  }
  updateQrCodebyid(id, obj) {
    return this.restRequest.addAuthorization().put('qr-code/' + id, obj);
  }
  approveQrCode(obj) {
    return this.restRequest
      .addAuthorization()
      .post('qr-code/change-status', obj);
  }
  updateHoteldevicestatus(id, obj) {
    return this.restRequest
      .addAuthorization()
      .put('updatedevicestatus/' + id, obj);
  }
  getCategoriesList() {
    return this.restRequest.addAuthorization().get('hotel-categories');
  }
  getDashboardData(obj) {
    return this.restRequest.addAuthorization().post('reports/dashboard', obj);
  }
  dashboardSearch(txt) {
    return this.restRequest
      .addAuthorization()
      .get('taxi-venue-search?query_text=' + txt);
  }
  getCountries() {
    return this.restRequest.addAuthorization().get('countries');
  }
  getSates(obj) {
    return this.restRequest.addAuthorization().post('states', obj);
  }
  getAdminReports(obj) {
    return this.restRequest.addAuthorization().post('reports/index', obj);
  }
  postUser(obj) {
    return this.restRequest.addAuthorization().post('createTaxiUser', obj);
  }
  getUsers(id) {
    return this.restRequest.addAuthorization().get('GetUsers/' + id);
  }
  getUserbyid(id) {
    return this.restRequest.addAuthorization().get('GetUserInfo/' + id);
  }
  putUser(id, obj) {
    return this.restRequest.addAuthorization().put('UpdateUserInfo/' + id, obj);
  }
  SendUserAccessKey(id) {
    return this.restRequest.addAuthorization().get('SendUserAccessKey/' + id);
  }
  deleteUser(id) {
    return this.restRequest.addAuthorization().delete('DeleteUser/' + id);
  }
  updateUserStatus(id, obj) {
    return this.restRequest
      .addAuthorization()
      .post('UpdateUserStatus/' + id, obj);
  }

  ////// Md handyman
  postCustomer(obj) {
    return this.restRequest.addAuthorization().post('customers', obj);
  }
  getEmployeeList() {
    return this.restRequest.addAuthorization().get('users');
  }
  deleteEmployee(id) {
    return this.restRequest.addAuthorization().delete('users/' + id);
  }
  getEmplyee(id) {
    return this.restRequest.addAuthorization().get('users/' + id);
  }
  putEmployee(id, obj) {
    return this.restRequest.addAuthorization().put('users/' + id, obj);
  }
  getDocumentsList(id) {
    return this.restRequest.addAuthorization().get('documents/' + id);
  }

  postDocument(obj) {
    return this.restRequest.addAuthorization().post('documents', obj);
  }
  deleteDocument(id) {
    return this.restRequest.addAuthorization().delete('documents/' + id);
  }
  startshift(id) {
    return this.restRequest.addAuthorization().get('works/startshift/' + id);
  }
  startbreak(id) {
    return this.restRequest.addAuthorization().get('works/startbreak/' + id);
  }
  endbreak(id) {
    return this.restRequest.addAuthorization().get('works/endbreak/' + id);
  }
  endshift(id) {
    return this.restRequest.addAuthorization().get('works/endshift/' + id);
  }
  getWorks(id) {
    return this.restRequest.addAuthorization().get('works/' + id);
  }
}
