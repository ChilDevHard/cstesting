import data from '../../../database/data.json';

export default function handler(req, res) {
  const { id } = req.query;

  const company = data.companies.find(company => company.id === parseInt(id));

  if (company) {
    res.status(200).json(company);
  
  } else {
    res.status(200).json({ error: 'Brand not found' });
  }
}