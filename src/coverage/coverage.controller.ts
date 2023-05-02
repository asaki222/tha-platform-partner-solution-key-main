import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import {CoverageService} from './coverage'
import {CreateCoverageDto} from './coverage.dto'

@Controller('/check_vob')
export class CoverageController {
    constructor(private readonly coverageService: CoverageService) {}
    

    @Post('')
    async sendPost(@Body() coverageDto: CreateCoverageDto) {
        if (Object.keys(coverageDto).length === 0) {
            throw new BadRequestException('Request body must not be empty');
          }
        try {
            const value = await this.coverageService.request(coverageDto);
            return { is_valid: value };
        } catch (error) {
            console.log(error)
            return { message: 'Can not find valid information due to error' }; 
        }
    }


}
