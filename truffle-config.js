module.express = {

networks: {
  development: {
    host: "127.0.0.1",
    port: 7545,
    network_id: "*", // match any network
    websockets: true
  }
},
solc: {
    optimizer: {
      enabled: true,
      runs: 200
}
}
}