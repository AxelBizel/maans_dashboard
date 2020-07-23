export const optionsRepartition = {
  maintainAspectRatio: false,
  legend: {
    display: true,
    position: "left",
  },

  layout: {
    padding: 10,
  },
  tooltips: {
    callbacks: {
      label: function (tooltipItem, data) {
        let dataset = data.datasets[tooltipItem.datasetIndex];
        let currentValue = dataset.data[tooltipItem.index];
        return currentValue + " %";
      },
      title: function (tooltipItem, data) {
        return data.labels[tooltipItem[0].index];
      },
    },
  },
};

export const optionsRadar = {
  maintainAspectRatio: false,
  legend: {
    display: false,
  },

  layout: {
    padding: 10,
  },
  tooltips: {
    callbacks: {
      label: function (tooltipItem, data) {
        let dataset = data.datasets[tooltipItem.datasetIndex];
        let currentValue = dataset.data[tooltipItem.index];
        return currentValue + " %";
      },
      title: function (tooltipItem, data) {
        return data.labels[tooltipItem[0].index];
      },
    },
  },
};

export const optionsBarAndLine = {
  maintainAspectRatio: false,
  aspectRatio: 5,
  legend: {
    display: false,
  },
  axes: {
    display: false,
  },

  scales: {
    yAxes: [
      {
        display: false,
        ticks: { beginAtZero: true },
      },
    ],
    xAxes: [
      {
        display: false,
      },
    ],
  },
  layout: {
    padding: {
      left: 10,
      right: 10,
      top: 0,
      bottom: 10,
    },
  },
};

export const optionsPreferedContents = {
  maintainAspectRatio: false,

  legend: {
    display: false,
  },

  scales: {
    yAxes: [
      {
        ticks: {
          suggestedMin: 0,
        },
      },
    ],
  },
  layout: {
    padding: 10,
  },

  tooltips: {
    callbacks: {
      label: function (tooltipItem, data) {
        let dataset = data.datasets[tooltipItem.datasetIndex];
        let currentValue = dataset.data[tooltipItem.index];
        return currentValue + " écoutes";
      },
      title: function (tooltipItem, data) {
        return data.labels[tooltipItem[0].index];
      },
    },
  },
};
