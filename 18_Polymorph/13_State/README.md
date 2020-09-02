  // BEGIN
  constructor(ip, port) {
    this.states = {
      disconnected: DisconnectedState,
      connected: ConnectedState,
    };
    this.ip = ip;
    this.port = port;
    this.buffer = [];
    this.setState('disconnected');
  }

  getCurrentState() {
    return this.state.getName();
  }

  connect() {
    this.state.connect();
  }

  disconnect() {
    this.state.disconnect();
  }

  write(data) {
    this.state.write(data);
  }

  setState(name) {
    this.state = new this.states[name](this);
  }
  // END
states/Connected.js
  // BEGIN
  constructor(connection) {
    this.connection = connection;
  }

  connect() {
    throw new Error('Connection has established already');
  }

  disconnect() {
    this.connection.setState('disconnected');
  }

  write(data) {
    this.connection.buffer.push(data);
  }

  getName() {
    return 'connected';
  }
  // END
states/Disconnected.js
  // BEGIN
  constructor(connection) {
    this.connection = connection;
  }

  getName() {
    return 'disconnected';
  }

  connect() {
    this.connection.setState('connected');
  }

  disconnect() {
    throw new Error('Connection already disconnected');
  }

  write() {
    throw new Error('It is not possible write to closed connection');
  }
  // END