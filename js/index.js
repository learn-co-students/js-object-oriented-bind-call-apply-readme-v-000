matchInterests(event) {
  return event.keywords.some(word => this.interests.includes(word));
}
