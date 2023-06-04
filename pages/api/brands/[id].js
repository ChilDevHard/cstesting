import data from '../../../database/data.json';

export default function handler(req, res) {
    const { id } = req.query;
  
    const brand = data.brands.find(brand => brand.id === parseInt(id));

    if (brand) {
        res.status(200).json(brand);
    
    } else {
        res.status(200).json({ error: 'Brand not found' });
    }
  }