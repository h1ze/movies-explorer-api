module.exports.signoutUser = (req, res) => {
  res.clearCookie('jwt', {
    httpOnly: true,
    sameSite: 'none',
    secure: true,
  });
  res.send({ message: 'Куки удалены' });
};
