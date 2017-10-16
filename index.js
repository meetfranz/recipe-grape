module.exports = Franz => class Grape extends Franz {
  async validateUrl(url) {
    try {
      const resp = await window.fetch(url, {
        method: 'GET',
      });
      return resp.status === 200;
    } catch (err) {
      console.error(err);
    }

    return false;
  }
};
