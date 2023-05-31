module.exports.signoutUser = (req, res) => {
  res.clearCookie('jwt', {
    httpOnly: true,
    sameSite: true,
  });
  res.send({ message: 'Куки удалены' });
};
