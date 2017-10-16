module.exports = (Franz) => {
  const getMessages = function getMessages() {
    const directMessages = document.querySelectorAll('.c0120').length;
    const indirectMessages = document.querySelectorAll('.c0121').length;

    Franz.setBadge(directMessages, indirectMessages);
  };

  Franz.loop(getMessages);
};
