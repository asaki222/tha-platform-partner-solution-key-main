import { Controller, Post, Body} from '@nestjs/common';
import {CoverageService} from './coverage'
import {CreateCoverageDto} from './coverage.dto'

@Controller('/check_vob')
export class CoverageController {
    constructor(private readonly coverageService: CoverageService) {}
    

    @Post('')
    sendPost(@Body() coverageDto: CreateCoverageDto){
        this.coverageService.request()
        return ({'status': 'OK'})
    }

}
