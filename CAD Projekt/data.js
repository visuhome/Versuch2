var APP_DATA = {
  "scenes": [
    {
      "id": "0-schlafzimmer",
      "name": "Schlafzimmer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.6229951527976159,
        "pitch": -0.02208200886053291,
        "fov": 1.3468096107558716
      },
      "linkHotspots": [
        {
          "yaw": -1.5050592244761454,
          "pitch": 0.050570627018673875,
          "rotation": 0,
          "target": "1-eingang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-eingang",
      "name": "Eingang",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.16317465127662345,
        "pitch": 0.020012028970043616,
        "fov": 1.3468096107558716
      },
      "linkHotspots": [
        {
          "yaw": 0.26240081306787033,
          "pitch": 0.07478714880385695,
          "rotation": 1.5707963267948966,
          "target": "0-schlafzimmer"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "CAD Projekt",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
