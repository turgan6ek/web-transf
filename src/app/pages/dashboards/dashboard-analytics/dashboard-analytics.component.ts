import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import icGroup from '@iconify/icons-ic/twotone-group';
import icPageView from '@iconify/icons-ic/twotone-pageview';
import icCloudOff from '@iconify/icons-ic/twotone-cloud-off';
import icTimer from '@iconify/icons-ic/twotone-timer';
import { defaultChartOptions } from '../../../../@vex/utils/default-chart-options';
import { Order, tableSalesData } from '../../../../static-data/table-sales-data';
import { TableColumn } from '../../../../@vex/interfaces/table-column.interface';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'vex-dashboard-analytics',
  templateUrl: './dashboard-analytics.component.html',
  styleUrls: ['./dashboard-analytics.component.scss']
})
export class DashboardAnalyticsComponent implements OnInit {

  subColumns: TableColumn<Order>[] = [
    {
      label: '2022',
      property: '2022',
      type: 'text'
    },
    {
      label: '2023',
      property: '2023',
      type: 'text'
    },
    {
      label: '2024',
      property: '2024',
      type: 'text'
    },
  ];

    tableColumns: TableColumn<Order>[] = [
    {
      label: 'Меню',
      property: 'btn',
      type: 'button'
    },
    {
      label: 'Сумма по программе',
      property: 'programSum',
      type: 'text'
    },
    {
      label: 'Статус загрузки форм',
      property: 'status',
      type: 'text'
    },
    {
      label: 'ЭЦП',
      property: 'eds',
      type: 'text'
    },
    {
      label: 'Статус ПРГ',
      property: 'prg',
      type: 'text'
    },
    {
      label: 'Уровень',
      property: 'level',
      type: 'text'
    },
    {
      label: 'Причина отключение',
      property: 'disconnect_reason',
      type: 'text'
    },
    {
      label: 'ПЗ',
      property: 'note',
      type: 'text'
    },
    {
      label: 'Дата последнего обновления',
      property: 'timestamp',
      type: 'text',
      cssClasses: ['text-secondary']
    }
  ];
  tableData = tableSalesData;

  series: ApexAxisChartSeries = [{
    name: 'Subscribers',
    data: [28, 40, 36, 0, 52, 38, 60, 55, 67, 33, 89, 44]
  }];

  userSessionsSeries: ApexAxisChartSeries = [
    {
      name: 'Users',
      data: [10, 50, 26, 50, 38, 60, 50, 25, 61, 80, 40, 60]
    },
    {
      name: 'Sessions',
      data: [5, 21, 42, 70, 41, 20, 35, 50, 10, 15, 30, 50]
    },
  ];

  salesSeries: ApexAxisChartSeries = [{
    name: 'Sales',
    data: [28, 40, 36, 0, 52, 38, 60, 55, 99, 54, 38, 87]
  }];

  pageViewsSeries: ApexAxisChartSeries = [{
    name: 'Page Views',
    data: [405, 800, 200, 600, 105, 788, 600, 204]
  }];

  uniqueUsersSeries: ApexAxisChartSeries = [{
    name: 'Unique Users',
    data: [356, 806, 600, 754, 432, 854, 555, 1004]
  }];

  uniqueUsersOptions = defaultChartOptions({
    chart: {
      type: 'area',
      height: 100
    },
    colors: ['#ff9800']
  });

  icGroup = icGroup;
  icPageView = icPageView;
  icCloudOff = icCloudOff;
  icTimer = icTimer;
  icMoreVert = icMoreVert;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    setTimeout(() => {
      const temp = [
        {
          name: 'Subscribers',
          data: [55, 213, 55, 0, 213, 55, 33, 55]
        },
        {
          name: ''
        }
      ];
    }, 3000);
  }

}
