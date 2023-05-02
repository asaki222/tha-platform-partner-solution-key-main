import { HttpService, } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { lastValueFrom } from 'rxjs';
require('dotenv').config()

@Injectable()
export class CoverageService {
    constructor(private httpService: HttpService){}

      async request(coverageDto):Promise<any>{
        const url = `https://api-staging.floatfi.com/api/${process.env.API_KEY}/vob`;
        try{
            const response: AxiosResponse = await lastValueFrom(this.httpService.post(url, coverageDto));
            const postId = response.data.plans[0].status;
            return postId == "Active Coverage";
        }
        catch(error){
            console.log(error);
            throw error
        }

      }
     
}
