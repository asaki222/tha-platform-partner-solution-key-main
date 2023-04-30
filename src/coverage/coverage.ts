import { Injectable } from '@nestjs/common';

@Injectable()
export class CoverageService {
    request(){
        /* 
         * Candidate implementation
         * Implement proxy logic 
         *
         */
        console.log('request made')
        return {'status':'ok'}
    }
}
