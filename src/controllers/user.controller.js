export const getUsers = (req, res) => {
  res.status(200).json([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' }
  ]);
};

/* export const getUsers = (req, res) => {
  throw new Error('Forced error for testing');
}; */

