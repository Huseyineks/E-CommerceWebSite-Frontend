import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  salesChart: any;
  ordersChart: any;

  ngOnInit() {
    this.createSalesChart();
    this.createOrdersChart();
  }

  createSalesChart() {
    this.salesChart = new Chart('salesCanvas', {
      type: 'line',
      data: {
        labels: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran'],
        datasets: [{
          label: 'Aylık Satışlar',
          data: [12, 19, 3, 5, 2, 3],
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Aylık Satış Grafiği'
          }
        }
      }
    });
  }

  createOrdersChart() {
    this.ordersChart = new Chart('ordersCanvas', {
      type: 'bar',
      data: {
        labels: ['Tişört', 'Pantolon', 'Ayakkabı', 'Ceket', 'Şapka'],
        datasets: [{
          label: 'Kategori Bazlı Siparişler',
          data: [25, 15, 35, 10, 5],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)'
          ]
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Kategori Bazlı Sipariş Dağılımı'
          }
        }
      }
    });
  }
}
