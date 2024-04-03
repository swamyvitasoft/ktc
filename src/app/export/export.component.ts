import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../services/adminservice.service';
import { ExcelService } from '../services/excel.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css'],
})
export class ExportComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private api: AdminserviceService,
    private excelService: ExcelService
  ) {}
  exportform!: FormGroup;
  sales: any;
  ngOnInit(): void {
    this.exportform = this.fb.group({
      datefrom: ['', [Validators.required]],
      dateto: ['', [Validators.required]],
    });
  }
  exportToExcel() {
    const filteredData: any[] = [];
    this.api.getExport(this.exportform.value).subscribe((res: any) => {
      this.sales = res;
      this.sales.forEach((sale: any) => {
        const filteredItem = {
          fullname: sale.fullname,
          mobileno: sale.mobileno,
          address: sale.address,
          particulars: sale.particulars,
          itemname: sale.items[0].itemname,
          imei: sale.imei,
          estimatedamount: sale.estimatedamount,
          advanceamount: sale.advanceamount,
          balaceamount: sale.balaceamount,
          note: sale.note,
          createdAt: sale.createdAt,
        };
        filteredData.push(filteredItem);
      });
      const fileName = this.getFileName();
      this.excelService.exportToExcel(filteredData, fileName);
    });
  }
  private getFileName(): string {
    const currentDate = new Date();
    const formattedDate = currentDate
      .toISOString()
      .slice(0, 19)
      .replace(/[-T:\.]/g, '');
    return 'export_' + formattedDate;
  }
}
