import type { ChartConfiguration } from 'chart.js';

// Define interfaces for better type safety
interface ChartConfig {
    id: string;
    config: ChartConfiguration;
}

// Temperature chart configuration
export const temperatureConfig: ChartConfiguration = {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Temperature (°C)',
            data: [12, 15, 18, 22, 25, 28],
            borderColor: 'rgb(255, 99, 132)',
            tension: 0.1
        }]
    }
};

// Other chart configurations
export const chartConfigs: ChartConfig[] = [
    {
        id: 'humidityChart',
        config: {
            type: 'bar',
            data: {
                labels: ['Morning', 'Noon', 'Evening', 'Night'],
                datasets: [{
                    label: 'Humidity (%)',
                    data: [65, 45, 55, 75],
                    backgroundColor: 'rgb(54, 162, 235)'
                }]
            }
        }
    },
    {
        id: 'precipitationChart',
        config: {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Precipitation (mm)',
                    data: [45, 35, 60, 70, 55, 40],
                    backgroundColor: 'rgb(75, 192, 192)'
                }]
            }
        }
    },
    {
        id: 'windChart',
        config: {
            type: 'line',
            data: {
                labels: ['6AM', '9AM', '12PM', '3PM', '6PM', '9PM'],
                datasets: [{
                    label: 'Wind Speed (km/h)',
                    data: [10, 15, 20, 25, 18, 12],
                    borderColor: 'rgb(153, 102, 255)',
                    tension: 0.1
                }]
            }
        }
    }
];

export const weatherSummaryConfig: ChartConfiguration = {
    type: 'radar',
    data: {
        labels: ['Temperature', 'Humidity', 'Precipitation', 'Wind', 'Pressure', 'UV Index'],
        datasets: [{
            label: 'Today',
            data: [80, 65, 45, 70, 85, 60],
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(54, 162, 235)'
        }]
    },
    options: {
        scales: {
            r: {
                angleLines: {
                    display: true
                },
                suggestedMin: 0,
                suggestedMax: 100
            }
        }
    }
};