import type { Chart as ChartType } from 'chart.js';
import { temperatureConfig, chartConfigs, weatherSummaryConfig } from './chartConfig'

export const initializeCharts = async () => {
    const { default: Chart } = await import('chart.js/auto');

    // Initialize temperature chart
    const tempCtx = document.getElementById('temperatureChart') as HTMLCanvasElement;
    if (tempCtx) {
        new Chart(tempCtx, temperatureConfig);
    }

    // Initialize other charts
    chartConfigs.forEach(({ id, config }) => {
        const ctx = document.getElementById(id) as HTMLCanvasElement;
        if (ctx) {
            new Chart(ctx, config);
        }
    });

    // Initialize weather summary
    const summaryDiv = document.getElementById('weatherSummary');
    if (summaryDiv) {
        const summaryCtx = document.createElement('canvas');
        summaryDiv.appendChild(summaryCtx);
        new Chart(summaryCtx, weatherSummaryConfig);
    }
};