export const dataSessionDuration = {
  week: {
    number: 32,
    legend: "minutes en moyenne",
    labels: ["- de 15 min", "15-30 min", "30-60 min", "+ de 60 min"],
    datasets: [
      {
        backgroundColor: "rgba(61,132,179, 0.6)",
        borderColor: "rgb(61,132,179)",
        borderWidth: 1,
        data: [5, 9, 2, 6],
      },
    ],
  },
  month: {
    number: 29,
    legend: "minutes en moyenne",
    labels: ["- de 15 min", "15-30 min", "30-60 min", "+ de 60 min"],
    datasets: [
      {
        backgroundColor: "rgba(61,132,179, 0.6)",
        borderColor: "rgb(61,132,179)",
        borderWidth: 1,
        data: [55, 26, 15, 12],
      },
    ],
  },
  year: {
    number: 35,
    legend: "minutes en moyenne",
    labels: ["- de 15 min", "15-30 min", "30-60 min", "+ de 60 min"],
    datasets: [
      {
        backgroundColor: "rgba(61,132,179, 0.6)",
        borderColor: "rgb(61,132,179)",
        borderWidth: 1,
        data: [200, 185, 245, 67],
      },
    ],
  },
};

export const dataSessionNumber = {
  week: {
    number: 52,
    legend: "sessions cumulées",
    labels: [
      "Lundi",
      "Mardi",
      "Mercredi",
      "Jeudi",
      "Vendredi",
      "Samedi",
      "Dimanche",
    ],
    datasets: [
      {
        backgroundColor: "rgba(61,132,179, 0.6)",
        borderColor: "rgb(61,132,179)",
        borderWidth: 1,
        data: [5, 9, 2, 6, 4, 3, 1],
      },
    ],
  },

  month: {
    number: 290,
    legend: "sessions cumulées",
    labels: ["Semaine 1", "Semaine 2", "Semaine 3", "Semaine 4"],
    datasets: [
      {
        backgroundColor: "rgba(61,132,179, 0.6)",
        borderColor: "rgb(61,132,179)",
        borderWidth: 1,
        data: [25, 32, 19, 28],
      },
    ],
  },
  year: {
    number: 2555,
    legend: "sessions cumulées",
    labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin"],
    datasets: [
      {
        backgroundColor: "rgba(61,132,179, 0.6)",
        borderColor: "rgb(61,132,179)",
        borderWidth: 1,
        data: [65, 59, 80, 81, 56, 55],
      },
    ],
  },
};

export const dataUsingDuration = {
  week: {
    number: 3,
    legend: "heures cumulées",
    labels: [
      "Lundi",
      "Mardi",
      "Mercredi",
      "Jeudi",
      "Vendredi",
      "Samedi",
      "Dimanche",
    ],
    datasets: [
      {
        backgroundColor: "rgba(61,132,179, 0.6)",
        borderColor: "rgb(61,132,179)",
        borderWidth: 1,
        data: [5, 9, 2, 6, 4, 3, 1],
      },
    ],
  },

  month: {
    number: 14,
    legend: "heures cumulées",
    labels: ["Semaine 1", "Semaine 2", "Semaine 3", "Semaine 4"],
    datasets: [
      {
        backgroundColor: "rgba(61,132,179, 0.6)",
        borderColor: "rgb(61,132,179)",
        borderWidth: 1,
        data: [25, 32, 19, 31],
      },
    ],
  },
  year: {
    number: 38,
    legend: "heures cumulées",
    labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin"],
    datasets: [
      {
        backgroundColor: "rgba(61,132,179, 0.6)",
        borderColor: "rgb(61,132,179)",
        borderWidth: 1,
        data: [65, 59, 80, 81, 56, 55],
      },
    ],
  },
};

export const dataUniverse = {
  week: {
    labels: ["Détente", "Concentration", "Bien-être", "Évasion", "Sophrologie"],
    datasets: [
      {
        borderWidth: 1,
        data: [35, 15, 11, 10, 9],
        backgroundColor: [
          "rgba(61, 132, 179, 0.8)",
          "rgba(35, 78, 164, 0.5)",
          "rgba(61, 132, 179, 0.3)",
          "rgba(127, 143, 158, 0.7)",
          "rgba(35, 78, 164,0.7)",
        ],
      },
    ],
  },
  month: {
    labels: ["Détente", "Concentration", "Bien-être", "Évasion", "Sophrologie"],
    datasets: [
      {
        borderWidth: 1,
        data: [37, 15, 11, 10, 8],
        backgroundColor: [
          "rgba(61, 132, 179, 0.8)",
          "rgba(35, 78, 164, 0.5)",
          "rgba(61, 132, 179, 0.3)",
          "rgba(127, 143, 158, 0.7)",
          "rgba(35, 78, 164,0.7)",
        ],
      },
    ],
  },
  year: {
    labels: ["Détente", "Concentration", "Bien-être", "Évasion", "Sophrologie"],
    datasets: [
      {
        borderWidth: 1,
        data: [40, 15, 9, 8, 8],
        backgroundColor: [
          "rgba(61, 132, 179, 0.8)",
          "rgba(35, 78, 164, 0.5)",
          "rgba(61, 132, 179, 0.3)",
          "rgba(127, 143, 158, 0.7)",
          "rgba(35, 78, 164,0.7)",
        ],
      },
    ],
  },
};

export const dataContentType = {
  week: {
    labels: ["Musique", "Podcast", "Bien-être", "Livre audio", "Bruit blanc"],
    datasets: [
      {
        borderWidth: 1,
        data: [35, 15, 11, 10, 9],
        backgroundColor: [
          "rgba(61, 132, 179, 0.8)",
          "rgba(35, 78, 164, 0.5)",
          "rgba(61, 132, 179, 0.3)",
          "rgba(127, 143, 158, 0.7)",
          "rgba(35, 78, 164,0.7)",
        ],
      },
    ],
  },
  month: {
    labels: ["Musique", "Podcast", "Bien-être", "Bruit blanc", "Livre audio"],
    datasets: [
      {
        borderWidth: 1,
        data: [37, 15, 11, 10, 8],
        backgroundColor: [
          "rgba(61, 132, 179, 0.8)",
          "rgba(35, 78, 164, 0.5)",
          "rgba(61, 132, 179, 0.3)",
          "rgba(127, 143, 158, 0.7)",
          "rgba(35, 78, 164,0.7)",
        ],
      },
    ],
  },
  year: {
    labels: ["Musique", "Podcast", "Bien-être", "Livre audio", "Bruit blanc"],
    datasets: [
      {
        borderWidth: 1,
        data: [40, 15, 9, 8, 8],
        backgroundColor: [
          "rgba(61, 132, 179, 0.8)",
          "rgba(35, 78, 164, 0.5)",
          "rgba(61, 132, 179, 0.3)",
          "rgba(127, 143, 158, 0.7)",
          "rgba(35, 78, 164,0.7)",
        ],
      },
    ],
  },
};

export const dataPreferedContents = {
  week: {
    labels: [
      "Artist - Name of the song",
      "Podcast - Nom de l'épisode",
      "Nom Auteur - Nom du livre",
      "Artist - Name of the song",
      "Podcast - Nom de l'épisode",
      "Nom Auteur - Nom du livre",
      "Artist - Name of the song",
      "Podcast - Nom de l'épisode",
      "Nom Auteur - Nom du livre",
      "Artist - Name of the song",
      "Podcast - Nom de l'épisode",
      "Nom Auteur - Nom du livre",
      "Artist - Name of the song",
      "Podcast - Nom de l'épisode",
      "Nom Auteur - Nom du livre",
      "Artist - Name of the song",
      "Podcast - Nom de l'épisode",
      "Nom Auteur - Nom du livre",
      "Artist - Name of the song",
      "Podcast - Nom de l'épisode",
    ],
    datasets: [
      {
        backgroundColor: "#82B3D4",
        borderColor: "#3D84B3",
        borderWidth: 1,
        hoverBackgroundColor: "#3D84B3",
        hoverBorderColor: "#82B3D4",
        data: [
          35,
          32,
          29,
          29,
          28,
          27,
          26,
          26,
          25,
          23,
          22,
          21,
          20,
          18,
          16,
          15,
          15,
          14,
          14,
          13,
        ],
      },
    ],
  },
  month: {
    labels: [
      "Artist - Name of the song",
      "Podcast - Nom de l'épisode",
      "Nom Auteur - Nom du livre",
      "Artist - Name of the song",
      "Podcast - Nom de l'épisode",
      "Nom Auteur - Nom du livre",
      "Artist - Name of the song",
      "Podcast - Nom de l'épisode",
      "Nom Auteur - Nom du livre",
      "Artist - Name of the song",
      "Podcast - Nom de l'épisode",
      "Nom Auteur - Nom du livre",
      "Artist - Name of the song",
      "Podcast - Nom de l'épisode",
      "Nom Auteur - Nom du livre",
      "Artist - Name of the song",
      "Podcast - Nom de l'épisode",
      "Nom Auteur - Nom du livre",
      "Artist - Name of the song",
      "Podcast - Nom de l'épisode",
    ],
    datasets: [
      {
        backgroundColor: "#82B3D4",
        borderColor: "#3D84B3",
        borderWidth: 1,
        hoverBackgroundColor: "#3D84B3",
        hoverBorderColor: "#82B3D4",
        data: [
          4 * 35,
          4 * 32,
          4 * 29,
          4 * 29,
          4 * 28,
          4 * 27,
          4 * 26,
          4 * 26,
          4 * 25,
          4 * 23,
          4 * 22,
          4 * 21,
          4 * 20,
          4 * 18,
          4 * 16,
          4 * 15,
          4 * 15,
          4 * 14,
          4 * 14,
          4 * 13,
        ],
      },
    ],
  },
  year: {
    labels: [
      "Artist - Name of the song",
      "Podcast - Nom de l'épisode",
      "Nom Auteur - Nom du livre",
      "Artist - Name of the song",
      "Podcast - Nom de l'épisode",
      "Nom Auteur - Nom du livre",
      "Artist - Name of the song",
      "Podcast - Nom de l'épisode",
      "Nom Auteur - Nom du livre",
      "Artist - Name of the song",
      "Podcast - Nom de l'épisode",
      "Nom Auteur - Nom du livre",
      "Artist - Name of the song",
      "Podcast - Nom de l'épisode",
      "Nom Auteur - Nom du livre",
      "Artist - Name of the song",
      "Podcast - Nom de l'épisode",
      "Nom Auteur - Nom du livre",
      "Artist - Name of the song",
      "Podcast - Nom de l'épisode",
    ],
    datasets: [
      {
        backgroundColor: "#82B3D4",
        borderColor: "#3D84B3",
        borderWidth: 1,
        hoverBackgroundColor: "#3D84B3",
        hoverBorderColor: "#82B3D4",
        data: [
          52 * 35,
          52 * 32,
          52 * 29,
          52 * 29,
          52 * 28,
          52 * 27,
          52 * 26,
          52 * 26,
          52 * 25,
          52 * 23,
          52 * 22,
          52 * 21,
          52 * 20,
          52 * 18,
          52 * 16,
          52 * 15,
          52 * 15,
          52 * 14,
          52 * 14,
          52 * 13,
        ],
      },
    ],
  },
};

export const dataFeedback = {
  week: {
    labels: ["Détendu", "Reboosté", "Relaxé", "Déçu", "Concentré"],
    datasets: [
      {
        backgroundColor: "rgba(61,132,179, 0.6)",
        borderColor: "rgb(61,132,179)",
        borderWidth: 1,
        data: [35, 15, 11, 10, 9],
      },
    ],
  },
  month: {
    labels: ["Détendu", "Reboosté", "Relaxé", "Déçu", "Concentré"],
    datasets: [
      {
        backgroundColor: "rgba(61,132,179, 0.6)",
        borderColor: "rgb(61,132,179)",
        borderWidth: 1,
        data: [35, 15, 11, 10, 9],
      },
    ],
  },
  year: {
    labels: ["Détendu", "Reboosté", "Relaxé", "Déçu", "Concentré"],
    datasets: [
      {
        backgroundColor: "rgba(61,132,179, 0.6)",
        borderColor: "rgb(61,132,179)",
        borderWidth: 1,
        data: [35, 15, 11, 10, 9],
      },
    ],
  },
};

export const dataParcours = {
  week: {
    labels: ["Explorez", "Laissez-vous guider"],
    datasets: [
      {
        borderWidth: 1,
        data: [52, 48],
        backgroundColor: [
          "rgba(61, 132, 179, 0.8)",
          "rgba(61, 132, 179, 0.3)",
        ],
      },
    ],
  },
  month: {
    labels: ["Explorez", "Laissez-vous guider"],
    datasets: [
      {
        borderWidth: 1,
        data: [57, 43],
        backgroundColor: [
          "rgba(61, 132, 179, 0.8)",
          "rgba(61, 132, 179, 0.3)",
        ],
      },
    ],
  },
  year: {
    labels: ["Explorez", "Laissez-vous guider"],
    datasets: [
      {
        borderWidth: 1,
        data: [60, 40],
        backgroundColor: [
          "rgba(61, 132, 179, 0.8)",
          "rgba(61, 132, 179, 0.3)",
        ],
      },
    ],
  },
  
};
