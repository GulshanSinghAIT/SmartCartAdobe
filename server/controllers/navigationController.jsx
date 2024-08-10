exports.getNavigationPath = async (req, res) => {
    const { destination } = req.params;
    try {
      // Logic to calculate navigation path to the product location
      const navigationPath = `Path to ${destination}`;
      res.json({ path: navigationPath });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  };
  