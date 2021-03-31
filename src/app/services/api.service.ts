import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
// import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})

export class ApiService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  httpOptions3 = {
    headers: new HttpHeaders({

    })
  };

  API_URL = environment.Api_url;
  base = '/'
  // base = '/kyc_api/'
  constructor(
    private httpClient: HttpClient,
    // private cookieService: CookieService,
  ) { }


  userLogin(data) {
    return this.httpClient.post(this.API_URL + '/auth/user/login', data, this.httpOptions3)
  }
  userRegister(data) {
    return this.httpClient.post(this.API_URL + '/auth/user/register', data, this.httpOptions3)
  }

  // userDetails(data) {
  //   let token2 = localStorage.getItem('__userToken')
  //   return this.httpClient.post(this.API_URL + '/user/details', data, {
  //     headers: new HttpHeaders({
  //       'Authorization': token2
  //     })
  //   })
  // }
  applicantsList(data) {
    // let token2 = localStorage.getItem('__userToken')
    return this.httpClient.get(this.API_URL + this.base + 'v3/applicants?' + data, {
      headers: new HttpHeaders({
        // 'Authorization': token2
      })
    })
  }
  applicantPersonalDetails(data) {
    // let token2 = localStorage.getItem('__userToken')
    return this.httpClient.get(this.API_URL  + this.base + 'api/underwriting/overview/personal_details/' + data, {
      headers: new HttpHeaders({
        // 'Authorization': token2
      })
    })
  }
  applicantBasicDetails(data) {
    // let token2 = localStorage.getItem('__userToken')
    return this.httpClient.get(this.API_URL  + this.base + 'v3/underwriting/applicant_basic_details/' + data, {
      headers: new HttpHeaders({
        // 'Authorization': token2
      })
    })
  }
  underwritingFeedback(data) {
    // let token2 = localStorage.getItem('__userToken')
    return this.httpClient.get(this.API_URL + this.base + 'v3/underwriting/uw_feedback/' + data, {
      headers: new HttpHeaders({
        // 'Authorization': token2
      })
    })
  }
  applicantDetails(data) {
    // let token2 = localStorage.getItem('__userToken')
    return this.httpClient.get(this.API_URL  + this.base + 'v3/underwriting/applicant_details/' + data, {
      headers: new HttpHeaders({
        // 'Authorization': token2
      })
    })
  }
  applicantHealthData(data) {
    // let token2 = localStorage.getItem('__userToken')
    return this.httpClient.get(this.API_URL + this.base + 'v3/underwriting/health_data/' + data, {
      headers: new HttpHeaders({
        // 'Authorization': token2
      })
    })
  }
  underwritingDecision(data) {
    // let token2 = localStorage.getItem('__userToken')
    return this.httpClient.get(this.API_URL  + this.base + 'api/underwriting/decision/' + data, {
      headers: new HttpHeaders({
        // 'Authorization': token2
      })
    })
  }
  overviewPlanDetails(data) {
    // let token2 = localStorage.getItem('__userToken')
    return this.httpClient.get(this.API_URL  + this.base + 'api/underwriting/overview/plan_details/' + data, {
      headers: new HttpHeaders({
        // 'Authorization': token2
      })
    })
  }
  overviewScore(data) {
    // let token2 = localStorage.getItem('__userToken')
    return this.httpClient.get(this.API_URL  + this.base + 'v3/underwriting/overview/score/' + data, {
      headers: new HttpHeaders({
        // 'Authorization': token2
      })
    })
  }
  overviewDemographics(data) {
    // let token2 = localStorage.getItem('__userToken')
    return this.httpClient.get(this.API_URL  + this.base + 'v3/underwriting/overview/demographics/' + data, {
      headers: new HttpHeaders({
        // 'Authorization': token2
      })
    })
  }
  overviewDigital(data) {
    // let token2 = localStorage.getItem('__userToken')
    return this.httpClient.get(this.API_URL + this.base + 'api/underwriting/overview/digital/' + data, {
      headers: new HttpHeaders({
        // 'Authorization': token2
      })
    })
  }
  overviewKyc(data) {
    // let token2 = localStorage.getItem('__userToken')
    return this.httpClient.get(this.API_URL + this.base + 'v3/underwriting/overview/kyc/' + data, {
      headers: new HttpHeaders({
        // 'Authorization': token2
      })
    })
  }
  overviewPredectiveInsights(data) {
    // let token2 = localStorage.getItem('__userToken')
    return this.httpClient.get(this.API_URL + this.base + 'v3/underwriting/overview/predective_insights/' + data, {
      headers: new HttpHeaders({
        // 'Authorization': token2
      })
    })
  }
  overviewEnvironmental(data) {
    // let token2 = localStorage.getItem('__userToken')
    return this.httpClient.get(this.API_URL + this.base + 'v3/underwriting/overview/environmental/' + data, {
      headers: new HttpHeaders({
        // 'Authorization': token2
      })
    })
  }
  overviewFinancialInfo(data) {
    // let token2 = localStorage.getItem('__userToken')
    return this.httpClient.get(this.API_URL + this.base + 'v3/underwriting/overview/financial_info/' + data, {
      headers: new HttpHeaders({
        // 'Authorization': token2
      })
    })
  }
  overviewMedical(data) {
    // let token2 = localStorage.getItem('__userToken')
    return this.httpClient.get(this.API_URL + this.base + 'v3/underwriting/overview/medical/' + data, {
      headers: new HttpHeaders({
        // 'Authorization': token2
      })
    })
  }
  analyseEarlyClaims(data) {
    // let token2 = localStorage.getItem('__userToken')
    return this.httpClient.get(this.API_URL + this.base + 'v3/underwriting/analyse_early_claims/' + data, {
      headers: new HttpHeaders({
        // 'Authorization': token2
      })
    })
  }

}

