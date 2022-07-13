import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('report/:type')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllReports(@Param('type') reportType:string) {
    console.log(reportType);
    
    return [];
  }

  @Get(':id')
  getReportById(){
    return {}
  }

  @Post()
  createReport(report){
    return 'created'
  }

  @Put(':id')
  updateReport(report){
    return 'updated'
  }

  @Delete(':id')
  deleteReport(){
    return 'deleted'
  }

}
