class History {
  constructor() {
    this.history = {};
  }

  add(email, role, message) {
    this.history[email] = [...(this.history[email] || []), { role, parts: [{ text: message }] }];
  }

  get(email) {
    return this.history[email] || [];
  }
}

export default new History();
