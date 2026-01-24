export const getUsers = (req, res) => {
  res.status(200).json([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' }
  ]);
};
